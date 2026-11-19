import * as T from 'three'
import { DECK } from '../pixel_harbor/harbor_terrain'
import { seededRandom } from '../pixel_harbor/harbor_materials'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import type { Footprint } from '../pixel_harbor/harbor_layout'

// 村长小屋门前那片草地上的野花与草丛。
// 全部用 InstancedMesh 画（每种颜色一个 draw call），并且不参与射线：
// 花只有 0.2~0.3 米高，一旦被烘焙就会把草地戳出一个个小凸起。
export const FLORA = {
  area: { x0: -29.4, x1: -19.6, z0: -8, z1: 13 },
  seed: 2671,
  flowers: 64,
  tufts: 46,
  stemHeight: [0.2, 0.32],
  colors: ['#e6cf6a', '#e59aa2', '#f4f1e6', '#c6a6e2', '#e8b06a'] as const,
  tuftColor: '#7f8f66',
  // 这些地方不种：小屋本体、摇椅、公告栏、评测站、村长的踱步路线
  keepOut: [
    [-27.4, -22.0, -6.0, -0.2],
    [-23.0, -21.3, -0.4, 1.6],
    [-23.6, -21.5, 3.4, 5.7],
    [-25.8, -22.1, 7.1, 11.4],
    [-22.4, -20.4, -4.8, 3.8],
  ] as Footprint[],
} as const

type Spot = { x: number; z: number; size: number; yaw: number }

function blocked(x: number, z: number) {
  return FLORA.keepOut.some(([x0, x1, z0, z1]) => x >= x0 && x <= x1 && z >= z0 && z <= z1)
}

function scatter(count: number, seed: number): Spot[] {
  const random = seededRandom(seed)
  const spots: Spot[] = []
  let guard = 0
  while (spots.length < count && guard < count * 40) {
    guard += 1
    const x = FLORA.area.x0 + random() * (FLORA.area.x1 - FLORA.area.x0)
    const z = FLORA.area.z0 + random() * (FLORA.area.z1 - FLORA.area.z0)
    if (blocked(x, z)) continue
    spots.push({ x, z, size: 0.6 + random() * 0.8, yaw: random() * Math.PI })
  }
  return spots
}

const dummy = new T.Object3D()

function instances(scene: T.Scene, kit: ModelKit, color: string, count: number) {
  const proto = kit.box([0, 0, 0], [1, 1, 1], [color])
  const mesh = new T.InstancedMesh(proto.geometry, proto.material, count)
  mesh.frustumCulled = false
  // 不进射线：否则烘焙会把这些小花小草当成 0.3 米高的台阶
  mesh.raycast = () => {}
  scene.add(mesh)
  return mesh
}

function write(mesh: T.InstancedMesh, index: number, x: number, y: number, z: number,
  sx: number, sy: number, sz: number, yaw: number) {
  dummy.position.set(x, y, z)
  dummy.rotation.set(0, yaw, 0)
  dummy.scale.set(sx, sy, sz)
  dummy.updateMatrix()
  mesh.setMatrixAt(index, dummy.matrix)
}

export function createCottageFlora(scene: T.Scene, kit: ModelKit) {
  const stems = instances(scene, kit, '#6d7d52', FLORA.flowers)
  const heads = FLORA.colors.map(color => instances(scene, kit, color, FLORA.flowers))
  const flowers = scatter(FLORA.flowers, FLORA.seed)
  flowers.forEach((spot, index) => {
    const height = FLORA.stemHeight[0] + (FLORA.stemHeight[1] - FLORA.stemHeight[0]) * (index % 4) / 3
    write(stems, index, spot.x, DECK + height / 2, spot.z, 0.035, height, 0.035, spot.yaw)
    const chosen = index % heads.length
    heads.forEach((mesh, colorIndex) => {
      if (colorIndex === chosen) {
        write(mesh, index, spot.x, DECK + height + 0.05, spot.z,
          0.11 * spot.size, 0.08 * spot.size, 0.11 * spot.size, spot.yaw)
      } else {
        // 其余颜色的实例缩成 0 藏在同一位置
        write(mesh, index, spot.x, DECK + height + 0.05, spot.z, 0.0001, 0.0001, 0.0001, spot.yaw)
      }
    })
  })

  const tufts = instances(scene, kit, FLORA.tuftColor, FLORA.tufts)
  scatter(FLORA.tufts, FLORA.seed + 17).forEach((spot, index) => {
    write(tufts, index, spot.x, DECK + 0.09, spot.z,
      0.2 * spot.size, 0.18 * spot.size, 0.2 * spot.size, spot.yaw)
  })

  stems.instanceMatrix.needsUpdate = true
  heads.forEach(mesh => { mesh.instanceMatrix.needsUpdate = true })
  tufts.instanceMatrix.needsUpdate = true
  return {}
}
