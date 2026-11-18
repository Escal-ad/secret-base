import * as T from 'three'
import { DECK, HEADLAND, LANDING, PIER, SOUTH_QUAY, WEST_BANK } from './harbor_layout'
import type { WorldObstacle } from './harbor_layout'
import { groundElevation } from './harbor_terrain'
import type { Footprint } from './harbor_layout'
import { seededRandom } from './harbor_materials'
import { markHarborGlow } from './harbor_glow'
import { createModelKit, makeBoat, makeHouse, makeLighthouse } from './harbor_models'
import type { ModelKit, Paint, Point } from './harbor_models'
import { TERRACE_HOUSES, TERRACE_TRUNKS, VILLAGE_TERRACES } from './harbor_village_plan'
import { VILLAGE } from './harbor_exploration_config'
import { addHarborLandmarks } from './harbor_new_landmarks'
import { addHarborHill, HILL_OBSTACLES } from '../harbor_expansion/harbor-hill'
import type { CameraObstacle } from './harbor_orbit_camera'

const TIMBER: Paint = ['#805843', 'wood']
const STONE: Paint = ['#ad9e8d', 'brick']
const ROPE: Paint = ['#ceb28a']
const POST_STEP = 2.65

function pierPosts([start, end, left, right]: Footprint): [number, number][] {
  const posts: [number, number][] = []
  for (let x = start + 0.35; x < end; x += POST_STEP) {
    posts.push([x, left + 0.10], [x, right - 0.10])
  }
  return posts
}

function slab(kit: ModelKit, area: Footprint, paint: Paint) {
  const [minX, maxX, minZ, maxZ] = area
  return kit.box([(minX + maxX) / 2, DECK - 0.48, (minZ + maxZ) / 2],
    [maxX - minX, 0.96, maxZ - minZ], paint)
}

function addPier(group: T.Group, kit: ModelKit, area: Footprint) {
  const [start, end, left, right] = area
  const random = seededRandom(113)
  const centerZ = (left + right) / 2
  const plankCount = Math.ceil((end - start) / 0.37)
  const plankWidth = (end - start) / plankCount
  for (let index = 0; index < plankCount; index++) {
    const x = start + (index + 0.5) * plankWidth
    const color = ['#a07655', '#b48b65', '#ba916b', '#a57b5c'][Math.floor(random() * 4)]
    const split = centerZ + (index % 3 - 1) * 0.62
    for (const [from, to] of [[left, split], [split + 0.023, right]]) {
      group.add(kit.box([x, DECK - 0.08, (from + to) / 2], [plankWidth - 0.014, 0.16, to - from], [color, 'wood']))
    }
  }
  for (const z of [left + 0.10, right - 0.10]) {
    group.add(kit.box([(start + end) / 2, 0.44, z], [end - start, 0.24, 0.20], TIMBER))
  }
  for (const [x, z] of pierPosts(area)) {
    group.add(kit.box([x, 0.34, z], [0.31, 1.91, 0.33], TIMBER))
    group.add(kit.box([x, 0.96, z], [0.345, 0.15, 0.36], ROPE))
    group.add(kit.box([x, 1.31, z], [0.35, 0.09, 0.36], ['#91674c', 'wood']))
  }
}

function addLantern(group: T.Group, kit: ModelKit, [x, , z]: Point) {
  group.add(kit.box([x, DECK + 1.18, z], [0.105, 2.36, 0.105], ['#595655']))
  group.add(kit.box([x, DECK + 2.36, z + 0.24], [0.105, 0.10, 0.54], ['#595655']))
  group.add(markHarborGlow(kit.box([x, DECK + 2.25, z + 0.47], [0.24, 0.22, 0.24], ['#efc481']), 'street'))
  group.add(kit.box([x, DECK + 2.41, z + 0.47], [0.33, 0.10, 0.34], ['#595655']))
}

function addTree(group: T.Group, kit: ModelKit, [x, y, z]: Point, scale: number) {
  const tree = new T.Group()
  tree.name = 'harbor-tree'
  tree.add(kit.box([0, 0.75, 0], [0.27, 1.5, 0.28], TIMBER))
  tree.add(kit.box([0, 1.23, 0], [1.67, 0.57, 1.42], ['#547262', 'grass']))
  tree.add(kit.box([0.04, 1.68, 0.02], [1.26, 0.42, 1.16], ['#6d8868', 'grass']))
  tree.add(kit.box([0.10, 1.98, 0.04], [0.77, 0.31, 0.82], ['#88966e', 'grass']))
  tree.position.set(x, y, z)
  tree.scale.setScalar(scale)
  group.add(tree)
}

function addRock(group: T.Group, kit: ModelKit, [x, y, z]: Point, size: Point) {
  const rock = kit.cylinder([x, y, z], [0.69, 1, 1, 6], ['#888a83', 'brick'])
  rock.scale.set(...size)
  rock.rotation.y = x
  group.add(rock)
}

function addBuoy(group: T.Group, kit: ModelKit, [x, y, z]: Point, color: string) {
  group.add(kit.cylinder([x, y, z], [0.22, 0.29, 0.27, 8], [color]))
  group.add(kit.cylinder([x, y + 0.17, z], [0.09, 0.15, 0.12, 8], ['#f0cd8b']))
}

function addShore(group: T.Group, kit: ModelKit) {
  const random = seededRandom(251)
  group.add(slab(kit, WEST_BANK, ['#c3a983', 'grass']))
  group.add(slab(kit, HEADLAND, ['#91a079', 'grass']))
  group.add(slab(kit, SOUTH_QUAY, STONE))
  group.add(slab(kit, [10.4, 22, 16.1, 19.9], STONE))
  group.add(kit.box([-10, DECK - 0.012, 12.2], [31, 0.026, 2.4], ['#c7b299', 'brick']))
  group.add(kit.box([-14, DECK - 0.012, -13.1], [3.7, 0.025, 10.1], ['#c8b591', 'brick']))
  for (let index = 0; index < 18; index++) {
    addRock(group, kit, [-13 + index * 1.21, 0.18, -11.7 + random() * 0.26],
      [0.54 + random() * 0.44, 0.48 + random() * 0.75, 0.64])
    addRock(group, kit, [11.4 + index * 0.66, 0.12, 15.95], [0.55, 0.57, 0.62])
  }
  for (let index = 0; index < 16; index++) {
    addRock(group, kit, [8.25 + random(), 0.23, -12.4 - index * 0.83], [0.67, 0.74, 0.69])
    const x = -28 + random() * 2.6, z = -19 + index * 2.57, size = 0.9 + random() * 0.65
    if (z < -12.3 || z > -8.4) addTree(group,kit,[x,DECK,z],size)
  }
}

const HOUSE_COLORS = [
  { wall: '#d0a16b', roof: '#97685e', trim: '#f1dbc2' },
  { wall: '#c28b79', roof: '#6b7880', trim: '#f3ddbd' },
  { wall: '#a9af94', roof: '#836c6a', trim: '#f0d7b3' },
  { wall: '#abc1c0', roof: '#926556', trim: '#ecd4af' },
]

function placeHouse(group: T.Group, kit: ModelKit, options: { position: Point; size: Point; color: number; yaw?: number }) {
  const house = makeHouse(kit, HOUSE_COLORS[options.color], options.size)
  house.name = 'harbor-house'
  house.position.set(...options.position)
  house.rotation.y = options.yaw ?? 0
  group.add(house)
}

function addVillage(group: T.Group, kit: ModelKit) {
  placeHouse(group, kit, { position: [-3, DECK, 17.5], size: [6.3, 3.05, 4.4], color: 0 })
  placeHouse(group, kit, { position: [6, DECK, 19.2], size: [3.9, 2.55, 4.1], color: 3 })
  placeHouse(group, kit, { position: [-8, DECK, -21], size: [4.7, 2.6, 3.7], color: 2, yaw: Math.PI })
  placeHouse(group, kit, { position: [-24.7, DECK, -3], size: [4.4, 2.43, 4], color: 1, yaw: -Math.PI / 2 })
  for (const { tier, y, z, lots } of VILLAGE_TERRACES) {
    group.add(kit.box([-9, y - 2.4, z + 10], [39 - tier * 2.8, 4.8, 21], ['#8a9b76', 'grass']))
    const span = tier === 0 ? VILLAGE.ramp[0] + 28 : 38 - tier * 2.8
    const mid = tier === 0 ? (VILLAGE.ramp[0] - 28) / 2 : -9
    group.add(kit.box([mid, y - 0.62, z - 0.49], [span, 1.24, 0.55], STONE))
    for (const { x, house, treeScale } of lots) {
      if (house) placeHouse(group, kit, { position: [x, y, z + 2.3],
        size: [house.width, house.height, 3.4], color: house.color })
      addTree(group, kit, [x + 2.8, y, z + 2.7], treeScale)
    }
  }
}

function addNetRack(group: T.Group, kit: ModelKit) {
  const x = 3.0
  const z = 14.3
  for (const offset of [-1.2, 1.2]) group.add(kit.box([x + offset, 1.52, z], [0.13, 1.74, 0.13], TIMBER))
  group.add(kit.box([x, 2.28, z], [2.55, 0.13, 0.14], TIMBER))
  for (let index = 0; index <= 12; index++) {
    const start = x - 1.11 + index * 0.185
    group.add(kit.beam([[start, 2.22, z], [start + 0.07, 1.26, z]], 0.023, ['#93a291']))
  }
  for (let row = 0; row < 6; row++) {
    group.add(kit.box([x, 1.30 + row * 0.17, z], [2.29, 0.025, 0.026], ['#93a291']))
  }
  for (const offset of [-0.82, 0.55, 0.98]) addBuoy(group, kit, [x + offset, 1.29, z], '#c58d58')
}

function addDockProps(group: T.Group, kit: ModelKit) {
  addNetRack(group, kit)
  for (const [x, z] of [[-1.2, 2.34], [9, -2.34], [16.4, 2.69], [-13.4, -14.9], [-10.5, 13.4]]) {
    addLantern(group, kit, [x, DECK, z])
  }
  for (const [x, z] of [[-8, -2.05], [13.8, 3.12], [0, 12.2], [-6.9, 15.9], [-21, 2.6]]) {
    group.add(kit.box([x, 0.91, z], [0.65, 0.52, 0.61], ['#bc8a59', 'wood']))
    group.add(kit.box([x, 1.19, z], [0.68, 0.08, 0.64], TIMBER))
    addBuoy(group, kit, [x - 0.46, 0.81, z], '#bd6951')
  }
  for (const [x, z] of [[0.6, 2.23], [11.9, 2.95], [-16, 9.1]]) {
    group.add(kit.cylinder([x, 0.99, z], [0.35, 0.31, 0.68, 9], TIMBER))
    for (const y of [0.78, 1.18]) group.add(kit.cylinder([x, y, z], [0.355, 0.355, 0.08, 9], ['#69645c']))
  }
  const coil = new T.Mesh(new T.TorusGeometry(0.28, 0.048, 4, 12), kit.surface(...ROPE))
  coil.rotation.x = -Math.PI / 2
  coil.position.set(1.8, DECK + 0.055, -1.6)
  group.add(coil)
  group.add(kit.beam([[3.22, 1.02, -2.45], [4.54, 0.67, -4.45]], 0.034, ROPE))
}

function addPowerLines(group: T.Group, kit: ModelKit) {
  const x = -21.6
  for (const z of [-11, -3.9, 3.2]) {
    group.add(kit.box([x, 2.6, z], [0.19, 3.9, 0.20], TIMBER))
    group.add(kit.box([x, 4.21, z], [0.85, 0.12, 0.15], TIMBER))
  }
  for (const dx of [-0.33, 0.33]) for (const z of [-11, -3.9]) {
    const wireX = x + dx
    const midpoint: Point = [wireX, 4.00, z + 3.55]
    group.add(kit.beam([[wireX, 4.31, z], midpoint], 0.028, ['#646059']))
    group.add(kit.beam([midpoint, [wireX, 4.31, z + 7.1]], 0.028, ['#646059']))
  }
}

function addWestCoast(group: T.Group, kit: ModelKit) {
  const sand: Paint = ['#c1a784', 'grass']
  for (const [z, length] of [[-7.2, 9.4], [6.8, 8.1]]) {
    group.add(kit.box([-11.74, 0.14, z], [1.15, 0.39, length], sand))
    group.add(kit.box([-12.05, 0.27, z], [0.92, 0.43, length - 1.4], sand))
  }
}

function batchBlocks(group: T.Group) {
  const buckets = new Map<string, { material: T.Material; blocks: T.Mesh[] }>()
  group.updateMatrixWorld(true)
  group.traverse(object => {
    if (!(object instanceof T.Mesh) || object.geometry.type !== 'BoxGeometry') return
    const material = object.material as T.Material
    const key = `${material.id}:${object.userData.harborGlow ?? ''}`
    const bucket = buckets.get(key)
    if (bucket) bucket.blocks.push(object)
    else buckets.set(key, { material, blocks: [object] })
  })
  for (const { material, blocks } of buckets.values()) {
    if (blocks.length < 2) continue
    const batch = new T.InstancedMesh(blocks[0].geometry, material, blocks.length)
    if (blocks[0].userData.harborGlow) {
      batch.userData.harborGlow = blocks[0].userData.harborGlow
      batch.userData.glowPoints = blocks.map(block => new T.Vector3().setFromMatrixPosition(block.matrixWorld))
    }
    blocks.forEach((block, index) => {
      batch.setMatrixAt(index, block.matrixWorld)
      block.removeFromParent()
    })
    group.add(batch)
  }
}

const BOAT_VESSEL_ID = 'vessel'

function addBoats(scene: T.Scene, kit: ModelKit) {
  const boats = [
    { id: 'north-shore', point: [4.8, 0.035, -5.0], yaw: -0.12, size: 1.22, color: '#537984' },
    { id: BOAT_VESSEL_ID, point: [-0.3, 0.025, 8.8], yaw: 0.13, size: 1, color: '#65866e' },
    { id: 'east-shoal', point: [42, 0.03, -8], yaw: 0.62, size: 0.75, color: '#7a827d' },
    { id: 'outer-cay', point: [64, 0.03, -26], yaw: -0.28, size: 0.8, color: '#9c785b' },
  ] as const
  const built = boats.map(({ id, point, yaw, size, color }) => {
    const boat = makeBoat(kit, color)
    boat.name = `harbor-boat-${id}`
    boat.position.set(point[0], point[1], point[2])
    boat.rotation.y = yaw
    boat.scale.setScalar(size)
    scene.add(boat)
    return boat
  })
  // Look the sailable boat up by id rather than array position, so removing entries stays safe.
  const vessel = built[boats.findIndex(boat => boat.id === BOAT_VESSEL_ID)] ?? built[0]
  return { boats: built, vessel, bases: boats.map(boat => boat.point) }
}

// 塔底门廊已移除：灯塔门前恢复原来的空地。

export const HARBOR_STRUCTURES = [
  { footprint: [5.15, 8.25, -23.1, -20.0], height: 10.4 },
  { footprint: [-10.4, -5.6, -22.9, -19.1], height: 4.3 },
  { footprint: [-6.2, 0.2, 15.2, 19.8], height: 5.2 },
  { footprint: [4, 8, 17.1, 21.3], height: 3.9 },
  { footprint: [-26.9, -22.5, -5.3, -0.7], height: 3.9 },
] satisfies { footprint: Footprint; height: number }[]

// 后村梯田里参与行走碰撞的那批房屋（tier 0），顶面高度按「相对地形」给出。
export const TERRACE_ROOFS: { footprint: Footprint; height: number }[] = TERRACE_HOUSES
  .map(house => ({ footprint: house.footprint, height: (house.base ?? VILLAGE.upperY) - VILLAGE.upperY + house.height }))

export const WORLD_OBSTACLES: Footprint[] = [
  ...HARBOR_STRUCTURES.map(structure => structure.footprint),
  ...TERRACE_HOUSES.map(house => house.footprint),
  ...TERRACE_TRUNKS,
  ...HILL_OBSTACLES,
  [-30, VILLAGE.ramp[0], 22.74, 23.29], [-30, -25, -21, -12.32], [-30,-25,-8.38,22], [1.7, 4.3, 14.16, 14.44],
  [-8.8, -7.67, -2.39, -1.73], [13.02, 14.15, 2.8, 3.45],
  [-0.78, 0.35, 11.87, 12.53], [-7.7, -6.56, 15.57, 16.23], [-21.8, -20.66, 2.27, 2.93],
  [0.24, 0.96, 1.87, 2.55], [11.54, 12.26, 2.59, 3.31], [-16.36, -15.64, 8.74, 9.46],
  [-1.29, -1.11, 2.27, 2.43], [8.91, 9.09, -2.43, -2.27], [16.32, 16.48, 2.61, 2.77],
  [-13.48, -13.32, -14.98, -14.82], [-10.58, -10.42, 13.32, 13.48],
  [-21.71, -21.49, -11.11, -10.89], [-21.71, -21.49, -4.01, -3.79], [-21.71, -21.49, 3.09, 3.31],
]

function getFlightVolumes(world: T.Group) {
  const volumes: CameraObstacle[] = []
  const box = new T.Box3()
  world.traverse(object => {
    if (object.name !== 'harbor-tree' && object.name !== 'harbor-house' && object.name !== 'harbor-tower') return
    box.setFromObject(object)
    const { min, max } = box
    volumes.push({ footprint: [min.x, max.x, min.z, max.z], base: min.y, height: max.y - min.y })
  })
  return volumes
}

for (const [x, z] of [...pierPosts(PIER), ...pierPosts(LANDING)]) {
  WORLD_OBSTACLES.push([x - 0.18, x + 0.18, z - 0.18, z + 0.18])
}

// 东堤（石砌平台）的泊位配件：系缆桩沿北缘排布，靠水一侧加木护边。
function addEastDockFittings(group: T.Group, kit: ModelKit) {
  for (const x of [13, 16, 19]) {
    group.add(kit.cylinder([x, DECK + 0.30, 16.62], [0.11, 0.13, 0.60, 8], ['#6d6154']))
    group.add(kit.box([x, DECK + 0.60, 16.62], [0.26, 0.07, 0.26], ['#8a7a68']))
  }
  group.add(kit.box([16, DECK + 0.04, 16.34], [11.0, 0.12, 0.22], TIMBER))
}

// 树冠顶面：只提供站立支撑、不阻挡行走，所以 footprint 收进一点，
// 让玩家必须接近树心才能站住，避免在树冠边缘悬空。
function collectTreeTops(world: T.Group): WorldObstacle[] {
  const box = new T.Box3()
  const tops: WorldObstacle[] = []
  world.traverse(object => {
    if (object.name !== 'harbor-tree') return
    box.setFromObject(object)
    const inset = 0.14
    const centerX = (box.min.x + box.max.x) / 2
    const centerZ = (box.min.z + box.max.z) / 2
    const height = box.max.y - DECK - groundElevation(centerX, centerZ)
    if (height < 0.8 || box.max.x - box.min.x < inset * 3) return
    tops.push({
      footprint: [box.min.x + inset, box.max.x - inset, box.min.z + inset, box.max.z - inset],
      height, supportOnly: true,
    })
  })
  return tops
}

export function addWorld(scene: T.Scene, kit = createModelKit()) {
  const staticWorld = new T.Group()
  addShore(staticWorld, kit)
  addEastDockFittings(staticWorld, kit)
  addPier(staticWorld, kit, PIER)
  addPier(staticWorld, kit, LANDING)
  addVillage(staticWorld, kit)
  addDockProps(staticWorld, kit)
  addPowerLines(staticWorld, kit)
  addWestCoast(staticWorld, kit)
  addHarborHill(staticWorld,kit)
  const tower = makeLighthouse(kit)
  tower.name = 'harbor-tower'
  tower.position.set(6.7, DECK, -21.55)
  staticWorld.add(tower)
  for (const [x, z, color] of [[17, -6, '#c97959'], [23, -12, '#d1ab63'], [14, 9, '#bf7154'], [30, -3, '#cfac62']] as const) {
    addBuoy(staticWorld, kit, [x, 0.18, z], color)
  }
  addHarborLandmarks(staticWorld, kit)
  const flightVolumes = getFlightVolumes(staticWorld)
  const treeTops = collectTreeTops(staticWorld)
  batchBlocks(staticWorld)
  scene.add(staticWorld)
  const { boats, vessel, bases } = addBoats(scene, kit)
  const animate = (elapsed: number, bank: number) => {
    boats.forEach((boat, index) => {
      // 除玩家能开的绿船外，其余渔船沿小圈缓慢巡游：离港有距离，但看得见。
      if (boat !== vessel) {
        const base = bases[index]
        const radius = 3.2 + index * 0.8
        const angle = elapsed * 0.16 + index * 1.7
        boat.position.x = base[0] + Math.cos(angle) * radius
        boat.position.z = base[2] + Math.sin(angle) * radius
        boat.rotation.y = -angle + Math.PI * 0.5
      }
      boat.position.y = 0.033 + Math.sin(elapsed * 1.41 + index) * 0.043
      boat.rotation.z = Math.sin(elapsed * 0.96 + index * 0.71) * 0.025
      boat.rotation.x = Math.sin(elapsed * 0.88 + index * 0.65) * 0.045 + (boat === vessel ? bank : 0)
    })
  }
  return { animate, vessel, flightVolumes, treeTops }
}
