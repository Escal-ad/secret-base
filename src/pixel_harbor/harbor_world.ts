import * as T from 'three'
import { DECK, EAST_DOCK, HEADLAND, HEADLAND_FILL, LANDING, PIER, SOUTH_QUAY, SOUTH_QUAY_GRASS, TERRACE_WEST_FILL, WEST_BANK } from './harbor_layout'
import type { WorldObstacle } from './harbor_layout'
import { groundElevation } from './harbor_terrain'
import type { Footprint } from './harbor_layout'
import { seededRandom } from './harbor_materials'
import { markHarborGlow } from './harbor_glow'
import { nameplate, NAMEPLATE } from './harbor_nameplate'
import { createModelKit, makeBoat, makeHouse, makeLighthouse, makeYacht } from './harbor_models'
import type { ModelKit, Paint, Point } from './harbor_models'
import { TERRACE_HOUSES, TERRACE_TRUNKS, VILLAGE_TERRACES } from './harbor_village_plan'
import { VILLAGE } from './harbor_exploration_config'
import { addHarborLandmarks } from './harbor_new_landmarks'
import { addHarborHill, HILL_OBSTACLES } from '../harbor_expansion/harbor-hill'
import { addFarmStructures, FARM_OBSTACLES } from '../harbor_expansion/harbor-farm'
import { addCherryTree, CHERRY_OBSTACLE } from '../harbor_expansion/harbor-cherry'
import { MAPLE_OBSTACLE } from '../harbor_expansion/harbor-maple'
import { addBambooFence, BAMBOO_FENCE_OBSTACLES } from '../harbor_expansion/harbor-bamboo'
import { TELESCOPE_OBSTACLE } from '../harbor_expansion/harbor-stars'
import { addTerraceStairs } from '../harbor_expansion/harbor-terrace-stairs'
import { addIslandPad } from '../harbor_expansion/harbor-island-pad'
import { addShops, SHOP_OBSTACLES } from '../harbor_expansion/harbor-shops'
import { addCoopAndPond, CHICKEN_OBSTACLES } from '../harbor_expansion/harbor-chicken'
import { addArcticHouse } from '../harbor_expansion/harbor-arctic'
import { addSkyIsland, addCloudGate } from '../harbor_expansion/harbor-sky-island'
import { addSiheyuan } from '../harbor_expansion/harbor-siheyuan'
import { addPalace } from '../harbor_expansion/harbor-palace'
import { addTrampoline, addTrampGate } from '../harbor_expansion/harbor-trampoline'
import { addResort } from '../harbor_expansion/harbor-resort'
import { addFireworkPad } from '../harbor_expansion/harbor-fireworks'
import type { CameraObstacle } from './harbor_orbit_camera'

const TIMBER: Paint = ['#805843', 'wood']
const STONE: Paint = ['#ad9e8d', 'brick']
// 顶层梯田的大理石台面：浅米白、不用花纹，看起来是磨过的石板
const MARBLE: Paint = ['#a9a293']
// 北欧街区的地面：偏灰的雪土，不纯白
const NORDIC: Paint = ['#d3d1c9', 'grass']
// 四合院街区的地面：偏暖的灰砖色，和青砖红柱搭
const COURTYARD: Paint = ['#a8a196', 'brick']
// 紫色宫殿街区的地面：冷调浅灰紫石材，衬浅紫墙最干净
const PALACE_GROUND: Paint = ['#c6c0d2', 'brick']
const ROPE: Paint = ['#ceb28a']
const POST_STEP = 2.65

function pierPosts([start, end, left, right]: Footprint, skip = 0): [number, number][] {
  const posts: [number, number][] = []
  let index = 0
  for (let x = start + 0.35; x < end; x += POST_STEP, index++) {
    if (index < skip) continue
    posts.push([x, left + 0.10], [x, right - 0.10])
  }
  return posts
}

function slab(kit: ModelKit, area: Footprint, paint: Paint) {
  const [minX, maxX, minZ, maxZ] = area
  return kit.box([(minX + maxX) / 2, DECK - 0.48, (minZ + maxZ) / 2],
    [maxX - minX, 0.96, maxZ - minZ], paint)
}

function addPier(group: T.Group, kit: ModelKit, options: {
  area: Footprint; deckFrom?: number; postSkip?: number
}) {
  const area = options.area
  const [start, end, left, right] = area
  // 桥面可以从 area 的起点往内收（栈桥西端要压在西岸岸线上，不能铺到草地底下重合）。
  const deckStart = options.deckFrom ?? start
  const random = seededRandom(113)
  const centerZ = (left + right) / 2
  const plankCount = Math.ceil((end - deckStart) / 0.37)
  const plankWidth = (end - deckStart) / plankCount
  for (let index = 0; index < plankCount; index++) {
    const x = deckStart + (index + 0.5) * plankWidth
    const color = ['#a07655', '#b48b65', '#ba916b', '#a57b5c'][Math.floor(random() * 4)]
    const split = centerZ + (index % 3 - 1) * 0.62
    for (const [from, to] of [[left, split], [split + 0.023, right]]) {
      group.add(kit.box([x, DECK - 0.08, (from + to) / 2], [plankWidth - 0.014, 0.16, to - from], [color, 'wood']))
    }
  }
  for (const z of [left + 0.10, right - 0.10]) {
    group.add(kit.box([(deckStart + end) / 2, 0.44, z], [end - deckStart, 0.24, 0.20], TIMBER))
  }
  for (const [x, z] of pierPosts(area, options.postSkip)) {
    group.add(kit.box([x, 0.34, z], [0.31, 1.91, 0.33], TIMBER))
    group.add(kit.box([x, 0.96, z], [0.345, 0.15, 0.36], ROPE))
    group.add(kit.box([x, 1.31, z], [0.35, 0.09, 0.36], ['#91674c', 'wood']))
  }
}

function addLantern(group: T.Group, kit: ModelKit, [x, , z]: Point) {
  // 灯臂朝栈桥内侧：z 正的一侧朝 -z，z 负的一侧朝 +z
  const dir = z > 0.6 ? -1 : 1
  group.add(kit.box([x, DECK + 1.18, z], [0.105, 2.36, 0.105], ['#595655']))
  group.add(kit.box([x, DECK + 2.36, z + 0.24 * dir], [0.105, 0.10, 0.54], ['#595655']))
  group.add(markHarborGlow(kit.box([x, DECK + 2.25, z + 0.47 * dir], [0.24, 0.22, 0.24], ['#efc481']), 'street'))
  group.add(kit.box([x, DECK + 2.41, z + 0.47 * dir], [0.33, 0.10, 0.34], ['#595655']))
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

// 村口广场：船夫小屋、渔民小屋门前那片草地铺一层石板。
// 顶面只比草地高 1 毫米（用户要求），不会形成台阶；盒子下半截埋进草皮里，
// 两面不共面，避免和草地打架闪。
// 材质和东堤（东堤码头脚下那圈石板）完全一致：STONE = ['#ad9e8d','brick']。
// 尺寸也按东堤那块（11 × 3.8 米）切，这样贴图被拉伸的比例和东堤一模一样，
// 两个地方的石板缝宽、石面大小看起来是同一套料。
export const COTTAGE_PAVING = {
  // 北沿、东沿各多探出 2 厘米：石板压到岸线外，岸边不再留一条绿边；
  // 探出一点点也避免石板的立面跟在下的草皮立面共面（那样会闪）。
  x0: -11, x1: 11.02, z0: 10.98, z1: 22.42,
  cols: 2, rows: 3,
} as const

function addCottagePaving(group: T.Group, kit: ModelKit) {
  const { x0, x1, z0, z1, cols, rows } = COTTAGE_PAVING
  const width = (x1 - x0) / cols
  const depth = (z1 - z0) / rows
  for (let col = 0; col < cols; col += 1) {
    for (let row = 0; row < rows; row += 1) {
      group.add(kit.box([x0 + width * (col + 0.5), DECK + 0.001 - 0.06, z0 + depth * (row + 0.5)],
        [width, 0.12, depth], STONE))
    }
  }
}

function addShore(group: T.Group, kit: ModelKit) {
  const random = seededRandom(251)
  group.add(slab(kit, WEST_BANK, ['#8ca06a', 'grass']))
  // 岬角拆成两块：西岸已经盖住的 x −17~−12 / z −21~−12 不再铺，否则两块地面同高共面会互相闪。
  group.add(slab(kit, [HEADLAND[0], WEST_BANK[1], HEADLAND[2], WEST_BANK[2]], ['#8ca06a', 'grass']))
  group.add(slab(kit, [WEST_BANK[1], HEADLAND[1], HEADLAND[2], HEADLAND[3]], ['#8ca06a', 'grass']))
  // 岬角西南角的水湾补成草地：跟西岸、岬角同一片绿，南岸线接 z=-25、西岸线接 x=-30，
  // 全部落在整数米上，和相邻地块的边严丝合缝、彼此平行。
  group.add(slab(kit, HEADLAND_FILL, ['#8ca06a', 'grass']))
  // 梯田西侧的水缝填平：和梯田同高（VILLAGE.upperY = 2 米），颜色用村长小屋那一片的绿。
  const [fillWest, fillEast, fillNorth, fillSouth] = TERRACE_WEST_FILL
  group.add(kit.box([(fillWest + fillEast) / 2, VILLAGE.upperY - 2.4, (fillNorth + fillSouth) / 2],
    [fillEast - fillWest, 4.8, fillSouth - fillNorth], ['#8ca06a', 'grass']))
  // 石台西半边改成草地（村长小屋那一侧），东半边仍是石板，中间在 x=-11.6 拼缝
  // 南湾石台整块铺草：西岸草地已覆盖 x<=-12 / z 11~22，这里只补它没盖到的部分
  group.add(slab(kit, [WEST_BANK[1], SOUTH_QUAY[1], SOUTH_QUAY[2], SOUTH_QUAY[3]], ['#8ca06a', 'grass']))
  group.add(slab(kit, SOUTH_QUAY_GRASS, ['#8ca06a', 'grass']))
  group.add(slab(kit, EAST_DOCK, STONE))
  for (let index = 0; index < 18; index++) {
    // 西岸那排礁石从岸线（x = -12）外侧起步：最西那块原本整块躺在草地上，像嵌进了陆地。
    // 随机值照常取，只是不放第一块，避免后面的石头尺寸全部错位。
    // 西岸那排礁石从沙滩外侧起步：前两块不是压在草地上就是压在沙地上，都去掉。
    const rockX = -13 + index * 1.21
    const rockZ = -11.7 + random() * 0.26
    const rockSize: Point = [0.54 + random() * 0.44, 0.48 + random() * 0.75, 0.64]
    if (index > 1) addRock(group, kit, [rockX, 0.18, rockZ], rockSize)
    // 东堤北缘这排礁石要收在堤身之内（x ≤ 22），否则最后一块会从堤角斜着探出去。
    addRock(group, kit, [11.4 + index * 0.58, 0.12, 15.95], [0.55, 0.57, 0.62])
  }
  for (let index = 0; index < 16; index++) {
    addRock(group, kit, [8.25 + random(), 0.23, -12.4 - index * 0.83], [0.67, 0.74, 0.69])
    const x = -28 + random() * 2.6, z = -19 + index * 2.57, size = 0.9 + random() * 0.65
    // 西岸整片平面不种树（村长小屋所在区域全部清空）
    const inWestBank = x >= -30 && x <= -12 && z >= -21 && z <= 22
    if ((z < -12.3 || z > -8.4) && !inWestBank) addTree(group,kit,[x,DECK,z],size)
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

// 村口民居统一尺寸：和村长小屋同规格（4.4 × 2.43 × 4，屋顶可站高度 3.9）。
const HOUSE_SIZE: Point = [4.4, 2.43, 4]
const COTTAGES: { position: Point; color: number; name: string }[] = [
  // 以渔民小屋为基准：两栋民居取同一个 z（19.2），前墙同在 z = 17.2，站成一排不参差。
  { position: [-3, DECK, 19.2], color: 0, name: '船夫小屋' },
  { position: [6, DECK, 19.2], color: 3, name: '渔民小屋' },
]

// 民居挂门牌：正门（-z 面）上方，和村长小屋、守塔人小屋同一套棕底米白字。
function addCottages(group: T.Group, kit: ModelKit) {
  for (const { position, color, name } of COTTAGES) {
    placeHouse(group, kit, { position, size: HOUSE_SIZE, color })
    group.add(nameplate(name, [position[0], DECK + NAMEPLATE.mountHeight,
      position[2] - HOUSE_SIZE[2] / 2 - 0.06], Math.PI))
  }
}

// 后村最上层梯田上的直升机停机坪：混凝土面 + 白色 H 与圆环 + 一圈木围栏（东侧留门）。
// top 取最后一层梯田的台面高度（6.56 米），坪面比草地高 9 厘米，避免和草皮共面闪烁。
const LAST_TERRACE = VILLAGE_TERRACES[VILLAGE_TERRACES.length - 1]
export const HELIPAD = { x: -13, z: 50, size: 12, gate: 4, top: LAST_TERRACE.y } as const

/** 围栏的走向：四边各一条，东边正中留 4 米宽的门。 */
function helipadFenceRuns() {
  const { x, z, size, gate } = HELIPAD
  const half = size / 2
  const north = z - half, south = z + half, west = x - half, east = x + half
  const g = gate / 2
  return [
    [west, north, east, north], [west, south, east, south], [west, north, west, south],
    [east, north, east, z - g], [east, z + g, east, south],
  ] as [number, number, number, number][]
}

export const HELIPAD_OBSTACLES: Footprint[] = [...helipadFenceRuns().map(([x0, z0, x1, z1]) => [
  Math.min(x0, x1) - 0.08, Math.max(x0, x1) + 0.08,
  Math.min(z0, z1) - 0.08, Math.max(z0, z1) + 0.08] as Footprint),
  // 直升机的机身与尾梁：整块挡掉，人只能从旁边绕
  [HELIPAD.x - 0.9, HELIPAD.x + 0.9, HELIPAD.z - 1.85, HELIPAD.z + 3.4]]

const HELIPAD_PAINT: Paint = ['#7a7d80', 'brick']
const HELIPAD_MARK: Paint = ['#e9e7e0']

function addHelipad(group: T.Group, kit: ModelKit) {
  const { x, z, size, top } = HELIPAD
  // 混凝土坪面
  group.add(kit.box([x, top + 0.03, z], [size, 0.12, size], HELIPAD_PAINT))
  // 中央的白色 H
  for (const side of [-1, 1]) {
    group.add(kit.box([x + side * 1.15, top + 0.1, z], [0.55, 0.02, 3.1], HELIPAD_MARK))
  }
  group.add(kit.box([x, top + 0.1, z], [1.75, 0.02, 0.5], HELIPAD_MARK))
  // 外面一圈白色圆环（16 段拼成）
  for (let index = 0; index < 16; index += 1) {
    const angle = index * Math.PI / 8
    const segment = kit.box([x + Math.cos(angle) * 4.3, top + 0.1, z + Math.sin(angle) * 4.3],
      [0.18, 0.02, 1.72], HELIPAD_MARK)
    segment.rotation.y = -angle
    group.add(segment)
  }
}

function addHelipadFence(group: T.Group, kit: ModelKit) {
  const { top } = HELIPAD
  for (const [x0, z0, x1, z1] of helipadFenceRuns()) {
    const length = Math.hypot(x1 - x0, z1 - z0)
    const posts = Math.max(2, Math.round(length / 2) + 1)
    for (let index = 0; index < posts; index += 1) {
      const t = index / (posts - 1)
      group.add(kit.box([x0 + (x1 - x0) * t, top + 0.55, z0 + (z1 - z0) * t],
        [0.12, 1.1, 0.12], TIMBER))
    }
    for (const y of [0.45, 0.95]) {
      group.add(kit.beam([[x0, top + y, z0], [x1, top + y, z1]], 0.07, TIMBER))
    }
  }
}

const HELI_BLUE: Paint = ['#4aa6cf']
const HELI_WHITE: Paint = ['#eef1f2']
const HELI_DARK: Paint = ['#343d43']
const HELI_GLASS: Paint = ['#2e3a41']

/** 停在停机坪上的蓝白直升机：机头朝 -z，白色机腹 + 海水蓝机身，四叶主旋翼和尾桨。 */
function addHelicopter(group: T.Group, kit: ModelKit) {
  const { x: padX, z: padZ, top } = HELIPAD
  const heli = new T.Group()
  heli.name = 'harbor-helicopter'
  heli.position.set(padX, top + 0.09, padZ)
  // 机身 + 白色机腹带
  heli.add(kit.box([0, 1.15, 0.1], [1.5, 1.2, 2.5], HELI_BLUE))
  heli.add(kit.box([0, 0.62, 0.1], [1.42, 0.3, 2.4], HELI_WHITE))
  // 机头与驾驶舱玻璃
  heli.add(kit.box([0, 1.26, -1.45], [1.16, 0.6, 0.5], HELI_BLUE))
  heli.add(kit.box([0, 1.48, -1.66], [1.06, 0.42, 0.12], HELI_GLASS))
  // 尾梁 + 白色尾带 + 垂尾
  heli.add(kit.box([0, 1.3, 2.3], [0.34, 0.34, 2.0], HELI_BLUE))
  heli.add(kit.box([0, 1.3, 2.3], [0.38, 0.12, 2.0], HELI_WHITE))
  heli.add(kit.box([0, 1.72, 3.15], [0.12, 0.92, 0.46], HELI_WHITE))
  // 尾桨（竖盘），装进子组以便旋转
  const tailRotor = new T.Group()
  tailRotor.position.set(0.18, 1.72, 3.15)
  for (const angle of [0, Math.PI / 2]) {
    const blade = kit.box([0, 0, 0], [0.05, 0.92, 0.12], HELI_DARK)
    blade.rotation.x = angle
    tailRotor.add(blade)
  }
  heli.add(tailRotor)
  heli.userData.tailRotor = tailRotor
  // 主旋翼：桨毂 + 两片长桨，装进子组以便旋转
  const rotor = new T.Group()
  rotor.position.set(0, 2.0, 0)
  rotor.add(kit.cylinder([0, 0, 0], [0.16, 0.2, 0.3, 8], HELI_DARK))
  for (const angle of [0, Math.PI / 2]) {
    const blade = kit.box([0, 0.16, 0], [5.0, 0.06, 0.26], HELI_DARK)
    blade.rotation.y = angle
    rotor.add(blade)
  }
  heli.add(rotor)
  heli.userData.rotor = rotor
  // 起落橇
  for (const side of [-1, 1]) {
    heli.add(kit.box([side * 0.78, 0.06, 0.1], [0.12, 0.12, 2.5], HELI_DARK))
    for (const z of [-0.7, 0.9]) heli.add(kit.box([side * 0.62, 0.4, z], [0.2, 0.62, 0.12], HELI_DARK))
  }
  group.add(heli)
  return heli
}
// 顶层台面铺一层可耕种的黑土（避开停机坪那 12×12 米，地面材质不变、只是加了一层）。
const SOIL_TOP: Paint = ['#3d2f26', 'grass']

function addFarmSoil(group: T.Group, kit: ModelKit) {
  const { x0, x1, z0, z1 } = TOP_DECK
  const pad = { x0: HELIPAD.x - HELIPAD.size / 2, x1: HELIPAD.x + HELIPAD.size / 2,
    z0: HELIPAD.z - HELIPAD.size / 2, z1: HELIPAD.z + HELIPAD.size / 2 }
  const layer = (ax: number, bx: number, az: number, bz: number) => {
    if (bx - ax <= 0.01 || bz - az <= 0.01) return
    group.add(kit.box([(ax + bx) / 2, TOP_DECK.y + 0.01, (az + bz) / 2],
      [bx - ax, 0.04, bz - az], SOIL_TOP))
  }
  layer(x0, x1, z0, pad.z0)
  layer(x0, x1, pad.z1, z1)
  layer(x0, pad.x0, pad.z0, pad.z1)
  layer(pad.x1, x1, pad.z0, pad.z1)
}

// 顶层大理石平台的围栏：三面围满，北沿留一个 2.4 米的缺口给上来的木栈道。
const TOP_DECK = { x0: -24.3, x1: 6.3, z0: 38.9, z1: 59.9, y: 6.56, gate: 2.4 } as const

function addTopTerraceFence(group: T.Group, kit: ModelKit) {
  const { x0, x1, z0, z1, y, gate } = TOP_DECK
  const run = (ax: number, az: number, bx: number, bz: number) => {
    const length = Math.hypot(bx - ax, bz - az)
    const posts = Math.max(2, Math.round(length / 1.5) + 1)
    for (let index = 0; index < posts; index += 1) {
      const t = index / (posts - 1)
      group.add(kit.box([ax + (bx - ax) * t, y + 0.5, az + (bz - az) * t], [0.12, 1.0, 0.12], TIMBER))
    }
    for (const railY of [0.38, 0.78]) {
      group.add(kit.beam([[ax, y + railY, az], [bx, y + railY, bz]], 0.08, TIMBER))
    }
  }
  run(x0, z0, x0, z1)
  run(x0, z1, x1, z1)
  run(x1, z1, x1, z0)
  run(x1, z0, x0 + gate, z0)
}

function addVillage(group: T.Group, kit: ModelKit) {
  addCottages(group, kit)
  addHelipad(group, kit)
  addHelipadFence(group, kit)
  // 守塔人小屋：从岬角西侧 (-8,-21) 往东挪到灯塔附近 (-2.69,-21.21)，门仍朝 +z（朝港口）。
  placeHouse(group, kit, { position: [-2.69, DECK, -21.21], size: HOUSE_SIZE, color: 2, yaw: Math.PI })
  placeHouse(group, kit, { position: [-24.7, DECK, -3], size: HOUSE_SIZE, color: 1, yaw: -Math.PI / 2 })
  for (const { tier, y, z, lots } of VILLAGE_TERRACES) {
    // 梯田草皮统一成村长小屋前那片绿（#8ca06a），和西岸/岬角一致。
    // 最上面那一层（停机坪所在）按用户要求换成大理石台面；停机坪本体的混凝土不动。
    const terracePaint: Paint = tier === VILLAGE_TERRACES.length - 1 ? MARBLE : ['#8ca06a', 'grass']
    group.add(kit.box([-9, y - 2.4, z + 10], [39 - tier * 2.8, 4.8, 21], terracePaint))
    // 上层梯田的底板（y-4.8）高于海面，边缘会露出一条悬空的缝：
    // 用岩石层从海面以下补到台底，把缝填满（用户报的问题是 (2.59, 60) 下面这块）。
    const skirtTop = y - 4.8
    if (skirtTop > -1) {
      const skirtBottom = -1.2
      group.add(kit.box([-9, (skirtTop + skirtBottom) / 2, z + 10],
        [39 - tier * 2.8, skirtTop - skirtBottom, 21], STONE))
    }
    const span = tier === 0 ? VILLAGE.ramp[0] + 28 : 38 - tier * 2.8
    const mid = tier === 0 ? (VILLAGE.ramp[0] - 28) / 2 : -9
    group.add(kit.box([mid, y - 0.62, z - 0.49], [span, 1.24, 0.55], STONE))
    if (tier === 0) {
      // 北欧街区：在草地上铺一层偏灰的雪土（4 厘米，压在台面上）
      group.add(kit.box([-9, y + 0.02, z + 10], [39, 0.04, 21], NORDIC))
      // 墙脚补一条草坎：西岸地面到 z=22 结束、挡墙从 z≈22.74 起，中间 0.7 米宽的缝里
      // 会直接看到水面（烘焙格子因为墙顶 2 米而误判成陆地）。这里把缝填到墙底高度。
      // 缝只出现在 x -28.5 ~ -18 这一段（再往东 z=22 处已经有南湾石台的地面）
      group.add(kit.box([-23.25, 0.38, 22.4], [10.5, 0.76, 0.8], ['#8ca06a', 'grass']))
    }
    if (tier === 1) {
      // 四合院街区：铺一层暖灰砖色地面（青砖红柱配这个最稳）
      group.add(kit.box([-9, y + 0.02, z + 10], [39 - 2.8, 0.04, 21], COURTYARD))
    }
    if (tier === 2) {
      // 宫殿街区：冷暖之间的浅灰紫石材
      group.add(kit.box([-9, y + 0.02, z + 10], [39 - 5.6, 0.04, 21], PALACE_GROUND))
    }
    // 最右一列不种树：右侧是扩展出来的空地，一排树会同时挡住视线和走位。
    const rightmost = Math.max(...lots.map(lot => lot.x))
    for (const { x, house, treeScale } of lots) {
      if (house && tier === 2) {
        // 第三层改成浅紫色宫殿街区
        addPalace(group, kit, { x, y, z: z + 2.3, w: house.width + 0.2, h: house.height + 0.5,
          d: 3.8, index: lots.findIndex(lot => lot.house === house) })
      } else if (house && tier === 1) {
        // 第二层改成四合院风格
        addSiheyuan(group, kit, { x, y, z: z + 2.3, w: house.width, h: house.height + 0.3,
          d: 3.6, index: lots.findIndex(lot => lot.house === house) })
      } else if (house && tier === 0) {
        // 第一层改成北极街区：尖顶、蓝白配色
        addArcticHouse(group, kit, { x, y, z: z + 2.3, w: house.width, h: house.height + 0.4,
          d: 3.6, index: lots.findIndex(lot => lot.house === house) })
      } else if (house) {
        placeHouse(group, kit, { position: [x, y, z + 2.3],
          size: [house.width, house.height, 3.4], color: house.color })
      }
      // 最上面那一层西侧的树按用户要求撤掉（他站在 -22.5,42 一带，说西边这一列不要树）
      // 顶层梯田：用户点名的两棵树（0.03,42.25 与 -5.08,42.30）在 x+2.8 = 0.2 / -6.6 那一列，
      // 干脆整层都不种树，只留房子和地面。
      // 顶层整层不种树；第一层（北欧街区那一排）也按用户要求把树撤掉，只留房屋
      // 顶层、第一层、第二层都不种树（后两层是用户明确要求清掉的）
      // 顶层、第一、二、三层都不种树
      const bareTop = tier === VILLAGE_TERRACES.length - 1 || tier === 0 || tier === 1 || tier === 2
      if (x !== rightmost && !bareTop) addTree(group, kit, [x + 2.8, y, z + 2.7], treeScale)
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
  // 救生圈：用 8 段木条拼成圆环，挂在横梁下面。
  // 网面在 z = 14.30（网线厚 0.023，前表面 14.2885），圈整体前移到 z − 0.09，
  // 前后留 4 厘米间隙，不会扎进网里；下端 1.58 也高于两侧浮球的顶（1.52）。
  const ringX = 2.86
  const ringY = 1.86
  const ringZ = z - 0.09
  for (let index = 0; index < 8; index += 1) {
    const angle = index * Math.PI / 4
    const segment = kit.box(
      [ringX + Math.cos(angle) * 0.28, ringY + Math.sin(angle) * 0.28, ringZ],
      [0.215, 0.075, 0.07],
      index % 2 ? ['#efe6d4'] : ['#c0553f'],
    )
    segment.rotation.z = angle + Math.PI / 2
    group.add(segment)
  }
  // 挂带：从横梁下缘斜拉到圈顶，两端都是接上的
  group.add(kit.beam([[ringX, 2.28, z - 0.01], [ringX, ringY + 0.31, ringZ]], 0.035, ['#7a6a52']))
}

function addDockProps(group: T.Group, kit: ModelKit) {
  addNetRack(group, kit)
  for (const [x, z] of [[-1.2, 2.34], [-1.2, -2.34], [9, 2.34], [9, -2.34]]) {
    addLantern(group, kit, [x, DECK, z])
  }
  // 木箱与木桶只留在村里的地面上；栈桥与登陆点桥面上的一律不再摆（只留路灯、小猫和护栏）。
  for (const [x, z] of [[0, 12.2], [-6.9, 15.9]]) {
    group.add(kit.box([x, 0.91, z], [0.65, 0.52, 0.61], ['#bc8a59', 'wood']))
    group.add(kit.box([x, 1.19, z], [0.68, 0.08, 0.64], TIMBER))
    addBuoy(group, kit, [x - 0.46, 0.81, z], '#bd6951')
  }
  // 西岸 (-16, 9.1) 那只木桶已按用户要求删除，碰撞盒也一并去掉。
  // 栈桥桥面上不再摆任何杂物：箱、桶、缆绳盘、垂到水面的缆绳都已移除。
}


function addWestCoast(group: T.Group, kit: ModelKit) {
  const sand: Paint = ['#c1a784', 'grass']
  // 岸边沙滩：贴着草地边缘铺一层齐平的沙（比地面低 2 厘米），两侧都铺满到岸线尽头，
  // 中间让开栈桥。原来是两块高低不一的短板，靠岸处露出一截草壁、远处又断掉。
  for (const [from, to] of [[-21, -2.6], [2.6, 11]]) {
    group.add(kit.box([-11.8, DECK - 0.02 - 0.2, (from + to) / 2], [1.2, 0.4, to - from], sand))
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
    // 船会自己开走，不进地形高度图；否则船上会留一块能站的隐形地面。
    boat.traverse(object => { object.raycast = () => {} })
    scene.add(boat)
    return boat
  })
  // Look the sailable boat up by id rather than array position, so removing entries stays safe.
  const vessel = built[boats.findIndex(boat => boat.id === BOAT_VESSEL_ID)] ?? built[0]
  // 东堤那艘游艇：停在堤南侧、正对靠岸点，玩家可以自己开。船头朝 +x，朝向按 yaw − HULL_AXIS(π/2) 摆。
  const yacht = makeYacht(kit)
  yacht.name = 'harbor-yacht'
  yacht.position.set(16.45, 0.03, 21.3)
  yacht.rotation.y = -0.06
  yacht.traverse(object => { object.raycast = () => {} })
  scene.add(yacht)
  return { boats: built, vessel, yacht, bases: boats.map(boat => boat.point) }
}

// 塔底门廊已移除：灯塔门前恢复原来的空地。

/** 岬角外圈的防波礁石：沿南岸和东岸各铺一列，把灯塔和陆地整个围起来。 */
function addHeadlandReef(group: T.Group, kit: ModelKit) {
  let step = 0
  // 南岸（z ≈ -25.8），从岬角西端一直铺到东南角
  for (let x = -30.0; x <= 8.6; x += 1.15) {
    step += 1
    const size = 0.62 + (step % 4) * 0.06
    addRock(group, kit, [x, 0.14, -25.8], [size, 0.9 + (step % 3) * 0.08, size])
  }
  // 西岸竖着一列（x ≈ -30.4），从西南角一直往北铺到后山小径入口旁边
  for (let z = -25.0; z <= -11.0; z += 1.15) {
    step += 1
    const size = 0.6 + (step % 6) * 0.05
    addRock(group, kit, [-30.4, 0.14, z], [size, 0.86 + (step % 3) * 0.08, size])
  }
  // 东岸（x ≈ 8.9），从东南角往北铺到灯塔北侧
  for (let z = -25.0; z <= -11.5; z += 1.15) {
    step += 1
    const size = 0.6 + (step % 5) * 0.05
    addRock(group, kit, [8.9, 0.14, z], [size, 0.86 + (step % 3) * 0.08, size])
  }
  // 西岸这条礁石带再往南接一段：从后山山体南脚（z = -8.4，山脚斜坡到这儿结束）
  // 一直铺到梯田西侧填土的起点（z = 22），把西岸草地整条西沿包起来。
  // 南端正好停在 2 米高的填土墙脚下，石带到这里就和平坦的西岸草地"脱钩"了。
  // 注意：这一段必须排在最后。step 是三条石带共用的计数，插在中间会把
  // 东岸那排石头的尺寸全部挤偏（bake 结果会跟着变），所以保持这个顺序。
  for (let z = -8.4; z <= 21.6; z += 1.15) {
    step += 1
    const size = 0.6 + (step % 6) * 0.05
    addRock(group, kit, [-30.4, 0.14, z], [size, 0.86 + (step % 3) * 0.08, size])
  }
}
// 南湾广场的临水边缘：北沿和东沿各铺一列礁石，和灯岬角那两列同款
// （石头压在岸线外侧、顶面刚好和陆地齐平），这样从海上看不到草皮的绿色立面，
// 人也能踩着石头走到边上。北沿从角落 x = 11 往西铺到 x = -11；
// 东沿从角落往南铺到东堤北端 z = 16.1。
function addQuayReef(group: T.Group, kit: ModelKit) {
  let step = 0
  for (let x = 11; x >= -11; x -= 1.15) {
    step += 1
    const size = 0.6 + (step % 6) * 0.05
    addRock(group, kit, [x, 0.14, 10.6], [size, 0.88 + (step % 3) * 0.08, size])
  }
  for (let z = 11; z <= 16; z += 1.15) {
    step += 1
    const size = 0.6 + (step % 5) * 0.05
    addRock(group, kit, [11.4, 0.14, z], [size, 0.88 + (step % 3) * 0.08, size])
  }
}

export const HARBOR_STRUCTURES = [
  { footprint: [5.15, 8.25, -23.1, -20.0], height: 10.4 },
  // 四栋同规格民居：都是 4.4 × 4 的水平投影，屋顶可站高度统一 3.9（碰撞盒加 0.05 余量）
  { footprint: [-4.94, -0.44, -23.26, -19.16], height: 3.9 },
  { footprint: [-5.25, -0.75, 17.15, 21.25], height: 3.9 },
  { footprint: [3.75, 8.25, 17.15, 21.25], height: 3.9 },
  { footprint: [-26.9, -22.5, -5.3, -0.7], height: 3.9 },
] satisfies { footprint: Footprint; height: number }[]

// 后村梯田里参与行走碰撞的那批房屋（tier 0），顶面高度按「相对地形」给出。
export const TERRACE_ROOFS: { footprint: Footprint; height: number }[] = TERRACE_HOUSES
  .map(house => ({ footprint: house.footprint, height: (house.base ?? VILLAGE.upperY) - VILLAGE.upperY + house.height }))

export const WORLD_OBSTACLES: Footprint[] = [
  ...HARBOR_STRUCTURES.map(structure => structure.footprint),
  ...HELIPAD_OBSTACLES,
  ...TERRACE_HOUSES.map(house => house.footprint),
  ...TERRACE_TRUNKS,
  ...HILL_OBSTACLES,
  // 羊圈 / 牛圈的木栏、草垛、水槽，以及樱花树的树干
  ...FARM_OBSTACLES,
  CHERRY_OBSTACLE,
  // 山顶那台看星空的望远镜
  TELESCOPE_OBSTACLE,
  // 岬角上的两间小铺子
  ...SHOP_OBSTACLES,
  ...CHICKEN_OBSTACLES,
  // 落日观景点那棵大枫树的树干
  MAPLE_OBSTACLE,
  // 竹林外圈的木栏（南侧留门）
  ...BAMBOO_FENCE_OBSTACLES,
  // 礁石带外沿的保护层：让人可以踩在礁石上，但不能跨到石头外侧的水面上。
  [-30.0, 9.2, -26.9, -26.3], [-31.2, -30.6, -26.9, -10.4], [9.2, 9.8, -26.9, -10.4],
  // 西岸往南新接的那段礁石（z -8.4 ~ 22）外侧同样加一条保护层，跟北段一致：
  // 人能踩上礁石，但迈不到石头外侧的水里去。
  [-31.2, -30.6, -8.4, 22],
  // 南湾广场北沿、东沿那两列礁石的保护层：踩得到石头，跨不进深水。
  [-11.5, 11.9, 9.9, 10.35], [11.75, 12.25, 10.35, 16.1],
  // 西岸边缘只保留 0.45 米宽的护栏（原来是 5 米宽的隐形墙，整条西岸都走不进去），
  // 真正的防跌靠 canWalkAt 的陆地判定。
   [-30, -29.55, -8.38, 22], [1.7, 4.3, 14.16, 14.44],
  // 只保留还在的两只木箱（(0, 12.2) 与 (-6.9, 15.9)）的碰撞盒；
  // 其余三只箱子（栈桥上两只、村长小屋旁一只）已删除，盒子也一并去掉，免得留隐形墙。
  [-0.78, 0.35, 11.87, 12.53], [-7.7, -6.56, 15.57, 16.23],
  [0.24, 0.96, 1.87, 2.55], [11.54, 12.26, 2.59, 3.31], 
  [-1.29, -1.11, 2.27, 2.43], [8.91, 9.09, 2.27, 2.43], [8.91, 9.09, -2.43, -2.27],
  // 村长小屋东侧 (x≈-21.6) 原来那三个 0.22 米的小碰撞盒，对应物件早已不存在
  // （高度图在这三处都是裸地 0.65），却把村长的踱步路线死死卡住：
  // 他的行走半径 0.26，走到 (-21.30, -3.90) 时脚框已经压进 [-21.71,-21.49]，
  // 于是白天一步都迈不动、夜里也回不了屋。这里直接删掉这三个幽灵盒子。
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

for (const [x, z] of [...pierPosts(PIER, 1), ...pierPosts(LANDING)]) {
  WORLD_OBSTACLES.push([x - 0.18, x + 0.18, z - 0.18, z + 0.18])
}

// 东堤（石砌平台）的泊位配件：只保留钓位的凳子和渔民脚边的鱼桶。
// 北缘原来那排系缆桩和木护边会横穿渔民与鱼桶（z 16.23~16.45 正好压在它们身上），已移除。
function addEastDockFittings(group: T.Group, kit: ModelKit) {
  // 东堤钓位的凳子：与渔民坐的凳子同款同尺寸
  group.add(kit.cylinder([21.80, DECK + 0.22, 17.87], [0.23, 0.25, 0.42, 10], ['#8a6a4a']))
  // 装鱼木桶已经挪到渔民身上（跟着他一起出现/消失），这里不再摆固定的桶。
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
  addQuayReef(staticWorld, kit)
  addCottagePaving(staticWorld, kit)
  addHeadlandReef(staticWorld, kit)
  addEastDockFittings(staticWorld, kit)
  // 栈桥西端：桥面收到西岸岸线（x = -12）为止，再往西会和草地完全重合、渲染时互相闪；
  // 交界处那对石墩也不放，避免桥口两边各插一根。
  addPier(staticWorld, kit, { area: PIER, deckFrom: WEST_BANK[1], postSkip: 1 })
  addPier(staticWorld, kit, { area: LANDING })
  addVillage(staticWorld, kit)
  addDockProps(staticWorld, kit)
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
  // 岬角的樱花树、西岸草地的羊圈和牛圈：都是静态结构，必须在 batchBlocks 之前加。
  addCherryTree(staticWorld, kit)
  // 大枫树不在这里加：它在山上、树冠 10.5 米宽，会探到海里，
  // 进了高度图会在水面上留一大片"天面"。改由运行时加到 scene（见 harbor_runtime）。
  addFarmStructures(staticWorld, kit)
  addBambooFence(staticWorld, kit)
  // 上后村梯田的木栈道（带扶栏）
  addTerraceStairs(staticWorld, kit)
  // 外岛山顶的第二个停机点
  addIslandPad(staticWorld, kit)
  // 顶层大理石平台的围栏（西北角留出上来的路口）
  addShops(staticWorld, kit)
  // 顶层平台的池塘与鸡圈
  addCoopAndPond(staticWorld, kit)
  // 天上的浮岛（云 + 教堂 + 花秋千）
  addSkyIsland(staticWorld, kit)
  // 栈桥上的云迁层传输点
  addCloudGate()
  // 海上的蓝白/蓝橙蹦床
  addResort(staticWorld, kit)
  addFireworkPad(staticWorld, kit)
  addTrampoline(staticWorld, kit)
  addTrampGate()
  addFarmSoil(staticWorld, kit)
  addTopTerraceFence(staticWorld, kit)
  const flightVolumes = getFlightVolumes(staticWorld)
  const treeTops = collectTreeTops(staticWorld)
  batchBlocks(staticWorld)
  // 直升机必须在批处理之后加：batchBlocks 会把 BoxGeometry 合并进 InstancedMesh，
  // 合并后 group 里就没有网格了，飞行时移动它不会有任何视觉变化。
  const helicopter = addHelicopter(staticWorld, kit)
  scene.add(staticWorld)
  const { boats, vessel, yacht, bases } = addBoats(scene, kit)
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
  return { animate, vessel, yacht, helicopter, flightVolumes, treeTops }
}
