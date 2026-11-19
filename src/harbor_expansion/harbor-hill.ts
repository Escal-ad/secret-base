import * as T from 'three'
import { HILL, hillElevation } from './harbor-hill-config'
import { DECK } from '../pixel_harbor/harbor_terrain'
import type { Footprint } from '../pixel_harbor/harbor_layout'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import { makeCanvas, pixelTexture, seededRandom } from '../pixel_harbor/harbor_materials'
import type { CameraObstacle } from '../pixel_harbor/harbor_orbit_camera'

const GRASS = '#819471'
const ROCK = '#8c8878'

function surface(x: number, z: number) { return DECK + hillElevation(x, z) }

function makeSlope(kit: ModelKit, footprint: Footprint) {
  const [left, right, near, far] = footprint
  const points = [[left, near], [right, near], [right, far], [left, far]]
  const vertices = points.flatMap(([x, z]) => [x, surface(x, z), z])
    .concat(points.flatMap(([x, z]) => [x, -0.72, z]))
  const mesh = new T.BufferGeometry()
  mesh.setAttribute('position', new T.Float32BufferAttribute(vertices, 3))
  mesh.setAttribute('uv', new T.Float32BufferAttribute([0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1], 2))
  mesh.setIndex([0,2,1,0,3,2, 0,1,5,0,5,4, 1,2,6,1,6,5, 2,3,7,2,7,6, 3,0,4,3,4,7])
  mesh.addGroup(0,6,0)
  mesh.addGroup(6,24,1)
  mesh.computeVertexNormals()
  return new T.Mesh(mesh, [kit.surface(GRASS, 'grass'), kit.surface(ROCK, 'brick')])
}

const summitCells: Footprint[] = HILL.footprints.flatMap(([left, right, near, far]): Footprint[] => {
  const cuts = [left, ...[HILL.summitAt, HILL.riseFrom].filter(x => x > left && x < right), right]
  return cuts.slice(1).map((x, index) => [cuts[index], x, near, far])
})

function plants() {
  const random = seededRandom(HILL.treeSeed)
  return Array.from({ length: HILL.treeCount }, (_, index) => {
    const [left, right, near, far] = HILL.footprints[index % HILL.footprints.length]
    const x = left + (right - left) * (0.08 + random() * 0.84)
    const z = index % 2 === 0 ? near + 0.48 : far - 0.48
    return { x, z, size: 0.8 + random() * 0.45 }
  })
    // 山顶那块平地（x ≤ -44，海拔已经封顶）不长树：只留草地、长凳和大枫树。
    // 另外把山头中心 5 米内也清空，免得小枫树正好戳在长凳和大枫树中间。
    .filter(({ x }) => x > HILL.summitAt)
    .filter(({ x, z }) => Math.hypot(x + 46.5, z + 6) > 5)
    .filter(({ x, z }) => Math.hypot(x + 47.1, z + 7.8) > 2.1)
}

const TREES = plants()

function squareFootprint(x:number,z:number,radius:number):Footprint {
  return [x-radius,x+radius,z-radius,z+radius]
}

export const HILL_OBSTACLES: Footprint[] = TREES.map(({ x, z })=>squareFootprint(x,z,0.14))

// 后山整片林子换成枫树：树干/树冠的分层尺寸完全照旧（等比例），只把叶子换成秋色。
const HILL_TREE_PARTS = [[0.62, 0.24, 1.24, '#725440'], [1.39, 0.92, 0.77, '#c0562f'], [1.89, 0.63, 0.41, '#d98736']] as const
export const HILL_FLIGHT_VOLUMES: CameraObstacle[] = TREES.flatMap(({ x, z, size }) =>
  HILL_TREE_PARTS.map(([y, width, height]) => ({
    footprint: squareFootprint(x, z, width * size / 2), base: surface(x, z) + (y - height / 2) * size, height: height * size,
  })))

function addTrees(group: T.Group, kit: ModelKit) {
  const bone = new T.Object3D()
  for (const [y, width, height, color] of HILL_TREE_PARTS) {
    const box = kit.box([0,0,0],[1,1,1],[color])
    const mesh = new T.InstancedMesh(box.geometry, box.material, TREES.length)
    TREES.forEach(({ x, z, size }, index) => {
      bone.position.set(x, surface(x,z) + y * size, z)
      bone.scale.set(width * size, height * size, width * size)
      bone.updateMatrix()
      mesh.setMatrixAt(index, bone.matrix)
    })
    group.add(mesh)
  }
}

export function addHarborHill(group: T.Group, kit: ModelKit) {
  for (const footprint of summitCells) group.add(makeSlope(kit, footprint))
  addTrees(group, kit)
  // 山道（石板路 + 台阶 + 扶手 + 路灯）已经按用户要求全部撤掉，山顶只留草地、长凳和大枫树。
  const { canvas, context } = makeCanvas(128, 32)
  context.fillStyle = '#896a50'; context.fillRect(0,0,128,32)
  context.fillStyle = '#fff0d4'; context.font = 'bold 19px sans-serif'; context.textAlign = 'center'
  context.fillText(HILL.title,64,23)
  const sign = new T.Mesh(new T.PlaneGeometry(1.12,0.28),new T.MeshBasicMaterial({map:pixelTexture(canvas),side:T.DoubleSide}))
  sign.position.set(-24.8,DECK+1.26,-11.88)
  sign.rotation.y = Math.PI / 2
  group.add(sign, kit.box([-24.8,DECK+0.61,-11.88],[0.12,1.22,0.12],['#896a50']))
}
