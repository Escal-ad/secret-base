import * as T from 'three'
import type { Footprint } from '../pixel_harbor/harbor_layout'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'
import { DECK } from '../pixel_harbor/harbor_terrain'
import { seededRandom } from '../pixel_harbor/harbor_materials'

// 岬角草地上的樱花树：树冠 3.4 米宽、3.6 米高，花瓣一直往下飘。
export const CHERRY = {
  x: -7.76, z: -20.84,
  trunkHeight: 2.2,
  crown: 3.3,
  petalCount: 26,
  petalColor: ['#f3c9d6', '#eab4c6', '#f7dde6'] as const,
  fallTop: 4.1,
  fallSpeed: 0.62,
  driftRadius: 1.7,
} as const

const BARK: Paint = ['#6b4f43', 'wood']
const LEAF: Paint = ['#e7b6c6', 'grass']
const LEAF_LIGHT: Paint = ['#f2cdd9', 'grass']
const LEAF_DARK: Paint = ['#d79cb0', 'grass']

export const CHERRY_OBSTACLE: Footprint = [
  CHERRY.x - 0.35, CHERRY.x + 0.35, CHERRY.z - 0.35, CHERRY.z + 0.35]

/** 静态部分：树干 + 三层粉色树冠，进静态世界（会被烘焙、能挡人）。 */
export function addCherryTree(group: T.Group, kit: ModelKit) {
  const { x, z } = CHERRY
  const h = CHERRY.trunkHeight
  group.add(kit.box([x, DECK + h / 2, z], [0.36, h, 0.36], BARK))
  // 两根斜生的枝干，让轮廓别像电线杆
  for (const side of [-1, 1]) {
    group.add(kit.beam([[x, DECK + h * 0.62, z], [x + side * 1.05, DECK + h + 0.45, z + side * 0.35]], 0.2, BARK))
  }
  const widths = [CHERRY.crown, CHERRY.crown * 0.78, CHERRY.crown * 0.5]
  const heights = [0.52, 0.44, 0.34]
  const lifts = [0, 0.46, 0.86]
  const paints = [LEAF, LEAF_LIGHT, LEAF_DARK]
  widths.forEach((width, index) => {
    group.add(kit.box([x, DECK + h + lifts[index] + heights[index] / 2, z],
      [width, heights[index], width * 0.94], paints[index]))
  })
}

/** 飘落的花瓣：每片按自己的相位循环下落，落到底再从树冠上方开始。 */
export function createCherryPetals(scene: T.Scene) {
  const random = seededRandom(9137)
  const petals = Array.from({ length: CHERRY.petalCount }, (_, index) => {
    const material = new T.MeshBasicMaterial({
      color: CHERRY.petalColor[index % CHERRY.petalColor.length], side: T.DoubleSide,
    })
    const mesh = new T.Mesh(new T.BoxGeometry(), material)
    mesh.raycast = () => {}
    scene.add(mesh)
    return { mesh, offset: random() * CHERRY.fallTop, angle: random() * Math.PI * 2,
      radius: 0.5 + random() * CHERRY.driftRadius, spin: 0.6 + random() * 1.4, size: 0.09 + random() * 0.07 }
  })
  let time = 0
  return {
    update(step: number, reduced: boolean) {
      time += step
      for (const petal of petals) {
        if (reduced) { petal.mesh.visible = false; continue }
        petal.mesh.visible = true
        const fall = (time * CHERRY.fallSpeed + petal.offset) % CHERRY.fallTop
        const y = DECK + CHERRY.fallTop - fall
        const sway = Math.sin(time * 0.7 + petal.angle) * 0.45
        petal.mesh.position.set(
          CHERRY.x + Math.cos(petal.angle + sway * 0.4) * (petal.radius + fall * 0.16),
          y,
          CHERRY.z + Math.sin(petal.angle + sway * 0.4) * (petal.radius + fall * 0.16),
        )
        petal.mesh.rotation.set(time * petal.spin + petal.angle, time * petal.spin * 0.7, sway * 0.8)
        petal.mesh.scale.set(petal.size, petal.size * 0.32, petal.size)
      }
    },
  }
}
