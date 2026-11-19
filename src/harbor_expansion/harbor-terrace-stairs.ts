import * as T from 'three'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 从西岸二楼平台（TERRACE_WEST_FILL 顶上）爬上后村最高一层梯田的木栈道。
// 起点 -29.09,21.81（地面 2.0 米），终点 -23.92,44.61（顶层梯田 6.56 米）。
// 三段楼梯各自贴着梯田挡墙上到上一层，中间用平段连起来；两侧全程木扶栏。
const DECK_W: Paint = ['#8a6a4a', 'wood']
const RAIL: Paint = ['#b08a5f', 'wood']
const POST: Paint = ['#7d6248', 'wood']

const WIDTH = 2.6
const RAIL_OFFSET = WIDTH / 2 - 0.08
const RAIL_HEIGHT = 0.95

type Node = { x: number; z: number; y: number }

const PATH: Node[] = [
  { x: -29.09, z: 21.8, y: 2.0 },
  { x: -28.0, z: 24.1, y: 2.0 },
  { x: -26.4, z: 28.31, y: 3.52 },
  { x: -26.4, z: 29.4, y: 3.52 },
  { x: -25.0, z: 33.61, y: 5.04 },
  { x: -25.0, z: 34.7, y: 5.04 },
  { x: -23.6, z: 38.91, y: 6.56 },
]

/** 一段路：平段铺整块板，坡段铺踏步。 */
function addRun(group: T.Group, kit: ModelKit, from: Node, to: Node) {
  const dx = to.x - from.x
  const dz = to.z - from.z
  const dy = to.y - from.y
  const flat = Math.hypot(dx, dz)
  const length = Math.hypot(flat, dy)
  const yaw = Math.atan2(dx, dz)
  const pitch = Math.atan2(dy, flat)
  const midX = (from.x + to.x) / 2
  const midZ = (from.z + to.z) / 2
  const steps = dy === 0 ? 1 : Math.max(6, Math.round(flat / 0.55))
  const treadDepth = flat / steps

  for (let index = 0; index < steps; index += 1) {
    const t = (index + 0.5) / steps
    const x = from.x + dx * t
    const z = from.z + dz * t
    const y = from.y + dy * t
    if (steps === 1) {
      const deck = kit.box([midX, from.y + 0.06 - 0.07, midZ], [WIDTH, 0.14, length + 0.1], DECK_W)
      deck.rotation.order = 'YXZ'
      deck.rotation.y = yaw
      deck.rotation.x = -pitch
      group.add(deck)
    } else {
      // 踏步：每级比上一级高一点点，顶面朝上
      // 踏步做厚（0.5 米），下沿埋进挡墙/土里，免得看到悬空的缝
      const tread = kit.box([x, y + 0.06 - 0.25, z],
        [WIDTH, 0.5, Math.max(0.4, treadDepth + 0.06)], DECK_W)
      tread.rotation.y = yaw
      group.add(tread)
    }
  }

  // 两侧扶栏：立柱 + 两道横杆
  const normalX = Math.cos(yaw)
  const normalZ = -Math.sin(yaw)
  for (const side of [-1, 1]) {
    const offsetX = normalX * RAIL_OFFSET * side
    const offsetZ = normalZ * RAIL_OFFSET * side
    const posts = Math.max(2, Math.round(length / 1.15) + 1)
    for (let index = 0; index < posts; index += 1) {
      const t = index / (posts - 1)
      const x = from.x + dx * t + offsetX
      const z = from.z + dz * t + offsetZ
      const y = from.y + dy * t
      group.add(kit.box([x, y + RAIL_HEIGHT / 2, z], [0.1, RAIL_HEIGHT, 0.1], POST))
    }
    for (const railY of [0.5, 0.9]) {
      group.add(kit.beam([
        [from.x + offsetX, from.y + railY, from.z + offsetZ],
        [to.x + offsetX, to.y + railY, to.z + offsetZ],
      ], 0.07, RAIL))
    }
  }
}

export function addTerraceStairs(group: T.Group, kit: ModelKit) {
  for (let index = 1; index < PATH.length; index += 1) {
    addRun(group, kit, PATH[index - 1], PATH[index])
  }
}
