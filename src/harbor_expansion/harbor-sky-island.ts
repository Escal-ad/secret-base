import * as T from 'three'
import { DECK } from '../pixel_harbor/harbor_terrain'
import { seededRandom } from '../pixel_harbor/harbor_materials'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 天上的浮岛：底下是云，云上一个大平层，平层上有一座小教堂和一座花秋千。
// 位置按用户坐标 (30.25, 35.40) 正上方。整座岛是静态件（会烘进高度图，飞上去能站）。
export const SKY_ISLAND = {
  x: 30.25, z: 35.4,
  top: 30,
  size: 15,
  // 花秋千（面朝渔村，也就是朝西）
  swing: { x: 24.2, z: 31.0, seat: 0.55 },
  chapel: { x: 33.0, z: 33.6 },
} as const

// 坐上去时人所在的高度（和村里摇椅一个坐高比例）
export const SWING_SEAT_HEIGHT = SKY_ISLAND.top - DECK + SKY_ISLAND.swing.seat
// 栈桥上的云迁层传输点：踩上去按 E 就能上岛
export const CLOUD_GATE = { x: 15.8, z: 1.9, label: '云迁层传输点' } as const

export function addCloudGate() {
  // 传输点不在地面上放任何东西：只靠交互判定和提示，桥面保持原样
}

const CLOUD: Paint[] = [['#eef2f5'], ['#e2e8ef'], ['#f6f8fa']]
const STONE: Paint = ['#dfe0dc']
const MOON_STONE: Paint = ['#f3e4b4']
const MOON_EDGE: Paint = ['#e3cd95']
const MOON_WHITE: Paint = ['#fdf8ea']
const MOON_ROOF: Paint = ['#f0d998', 'roof']
const MOON_GLOW: Paint = ['#ffe9a8']
const MOON_LAMP: Paint = ['#ffdf9a']
const MOON_DARK: Paint = ['#8a7a52']
const MOON_ROBE: Paint = ['#f7f2e4']
const MOON_SASH: Paint = ['#e9c97a']
const SKIN_MOON: Paint = ['#f0d6bb']
const HAIR_MOON: Paint = ['#2b2530']
const RABBIT: Paint = ['#f6f8fa']
const PETAL: Paint[] = [['#f7a8c4'], ['#f28fb0'], ['#ffc6dd'], ['#e97aa0']]
const ROPE: Paint = ['#c9b48d']

function addClouds(group: T.Object3D, kit: ModelKit, random: () => number) {
  const { x, z, top, size } = SKY_ISLAND
  // 云的底盘：一圈大小不一的团块，顶面拉平
  for (let index = 0; index < 22; index += 1) {
    const angle = (index / 22) * Math.PI * 2
    const radius = size * (0.34 + random() * 0.2)
    const px = x + Math.cos(angle) * radius
    const pz = z + Math.sin(angle) * radius * 0.9
    const wide = 3.2 + random() * 2.4
    const tall = 1.4 + random() * 1.2
    group.add(kit.box([px, top - tall / 2 - 0.3, pz], [wide, tall, wide * 0.9],
      CLOUD[index % CLOUD.length]))
  }
  // 中间填实，免得从缝里看穿
  for (let index = 0; index < 10; index += 1) {
    const px = x + (random() - 0.5) * size * 0.6
    const pz = z + (random() - 0.5) * size * 0.55
    group.add(kit.box([px, top - 1.4, pz], [4.2, 2.4, 4.0], CLOUD[index % CLOUD.length]))
  }
  // 平层：云顶上一块浅色石板地
  // 平层铺得比云团大一圈，整块岛都能站（不然边缘会掉下去）
  // 平台收敛到岛心附近（云边不再铺成一大片平地）
  group.add(kit.box([x, top - 0.06, z], [size * 1.02, 0.16, size * 0.94], CLOUD[0]))
  group.add(kit.box([x, top - 0.02, z], [size * 0.94, 0.12, size * 0.86], STONE))
}

// 月亮式建筑：浅黄石材的圆亭 + 顶上一弯巨大的月牙
function addMoonPavilion(group: T.Object3D, kit: ModelKit) {
  const { x, z } = SKY_ISLAND.chapel
  const y = SKY_ISLAND.top
  // 两层圆台基座
  group.add(kit.cylinder([x, y + 0.15, z], [4.2, 4.4, 0.3, 12], MOON_EDGE))
  group.add(kit.cylinder([x, y + 0.4, z], [3.6, 3.8, 0.24, 12], MOON_STONE))
  // 一圈柱子 + 月白色墙体
  group.add(kit.cylinder([x, y + 1.5, z], [3.5, 3.5, 2.2, 12], MOON_STONE))
  for (let index = 0; index < 8; index += 1) {
    const angle = (index / 8) * Math.PI * 2
    group.add(kit.cylinder([x + Math.cos(angle) * 3.55, y + 1.5, z + Math.sin(angle) * 3.55],
      [0.18, 0.18, 2.2, 6], MOON_WHITE))
  }
  // 门洞（朝西，面朝渔村方向）
  group.add(kit.box([x - 2.4, y + 1.2, z], [1.0, 1.6, 0.9], MOON_DARK))
  // 三层收分的浅黄穹顶
  group.add(kit.cylinder([x, y + 2.7, z], [3.9, 3.9, 0.3, 12], MOON_ROOF))
  group.add(kit.cylinder([x, y + 3.1, z], [3.1, 3.4, 0.55, 12], MOON_ROOF))
  group.add(kit.cylinder([x, y + 3.6, z], [2.0, 2.6, 0.5, 12], MOON_ROOF))
  // 顶上的大月牙：沿半圆排一圈方块，缺口朝西
  for (let index = 0; index < 9; index += 1) {
    const angle = -0.9 + (index / 8) * 2.6
    const radius = 1.9
    group.add(kit.box([x + Math.cos(angle) * radius, y + 4.6 + Math.sin(angle) * 1.5,
      z + Math.sin(angle) * 0.6], [0.42, 0.42, 0.42], MOON_GLOW))
  }
  // 檐下几盏小灯
  for (let index = 0; index < 4; index += 1) {
    const angle = (index / 4) * Math.PI * 2 + 0.4
    group.add(kit.box([x + Math.cos(angle) * 3.2, y + 2.5, z + Math.sin(angle) * 3.2],
      [0.22, 0.26, 0.22], MOON_LAMP))
  }
}

// 嫦娥：月白长裙、长飘带，脚踏云气
function addChangE(group: T.Object3D, kit: ModelKit) {
  const x = SKY_ISLAND.chapel.x - 6.2
  const z = SKY_ISLAND.chapel.z + 1.6
  const y = SKY_ISLAND.top
  group.add(kit.cylinder([x, y + 0.06, z], [0.9, 1.0, 0.12, 10], MOON_WHITE))
  group.add(kit.box([x, y + 0.5, z], [0.44, 0.8, 0.34], MOON_ROBE))
  group.add(kit.box([x, y + 1.0, z], [0.4, 0.36, 0.3], MOON_ROBE))
  group.add(kit.box([x, y + 0.9, z + 0.17], [0.26, 0.3, 0.06], MOON_SASH))
  // 飘带
  for (const side of [-1, 1]) {
    group.add(kit.box([x + side * 0.32, y + 0.7, z + 0.1], [0.1, 0.9, 0.08], MOON_SASH))
  }
  group.add(kit.box([x, y + 1.32, z], [0.26, 0.26, 0.24], SKIN_MOON))
  // 五官：两只眼睛 + 一点唇色（眼睛凸出 1 毫米，不和脸共面）
  for (const side of [-1, 1]) {
    group.add(kit.box([x + side * 0.06, y + 1.34, z + 0.125], [0.05, 0.05, 0.02], ['#3a3240']))
  }
  group.add(kit.box([x, y + 1.25, z + 0.125], [0.06, 0.02, 0.02], ['#c9737f']))
  // 头发：后脑、长发、发髻都往后挪开，互不共面
  group.add(kit.box([x, y + 1.45, z - 0.04], [0.3, 0.16, 0.26], HAIR_MOON))
  group.add(kit.box([x, y + 1.16, z - 0.2], [0.18, 0.46, 0.1], HAIR_MOON))
  group.add(kit.box([x, y + 1.62, z - 0.12], [0.13, 0.13, 0.13], HAIR_MOON))
}

// 玉兔：两只白色的兔子，站在平台上
function addJadeRabbits(group: T.Object3D, kit: ModelKit) {
  const spots = [
    { x: SKY_ISLAND.chapel.x - 4.2, z: SKY_ISLAND.chapel.z - 2.4 },
    { x: SKY_ISLAND.chapel.x - 3.0, z: SKY_ISLAND.chapel.z + 2.6 },
  ]
  for (const [index, spot] of spots.entries()) {
    const { x, z } = spot
    const y = SKY_ISLAND.top
    group.add(kit.box([x, y + 0.22, z], [0.34, 0.3, 0.44], RABBIT))
    group.add(kit.box([x, y + 0.42, z + 0.2], [0.24, 0.24, 0.24], RABBIT))
    for (const side of [-1, 1]) {
      group.add(kit.box([x + side * 0.08, y + 0.66, z + 0.16], [0.07, 0.3, 0.06], RABBIT))
      group.add(kit.box([x + side * 0.19, y + 0.44, z + 0.2], [0.04, 0.04, 0.04], ['#c94f6a']))
    }
    group.add(kit.box([x, y + 0.42, z + 0.07], [0.1, 0.08, 0.06], ['#e8a3b4']))
    group.add(kit.box([x, y + 0.2, z - 0.26], [0.16, 0.16, 0.14], ['#f3f6f8']))
    // 一只在捣药，一只在抱着一颗小玉杵
    if (index === 0) {
      group.add(kit.box([x + 0.24, y + 0.34, z + 0.22], [0.08, 0.34, 0.08], ['#d9c48a']))
      group.add(kit.box([x + 0.24, y + 0.16, z + 0.22], [0.2, 0.12, 0.2], ['#b9a06a']))
    }
  }
}
function addFlowerSwing(group: T.Object3D, kit: ModelKit, random: () => number) {
  const { x, z } = SKY_ISLAND.swing
  const y = SKY_ISLAND.top
  // 两根立柱 + 顶上的花拱
  for (const side of [-1, 1]) {
    group.add(kit.box([x, y + 1.1, z + side * 0.95], [0.16, 2.2, 0.16], ['#8a6a4a', 'wood']))
  }
  group.add(kit.beam([[x, y + 2.18, z - 1.0], [x, y + 2.18, z + 1.0]], 0.14, ['#8a6a4a', 'wood']))
  // 拱上缀满各色粉色花
  for (let index = 0; index < 26; index += 1) {
    const t = index / 25
    const pz = z - 1.0 + t * 2.0
    const arch = Math.sin(t * Math.PI) * 0.42
    const petal = PETAL[Math.floor(random() * PETAL.length)]
    group.add(kit.box([x + (random() - 0.5) * 0.22, y + 2.2 + arch, pz],
      [0.2, 0.2, 0.2], petal))
  }
  // 绳子 + 花座板
  for (const side of [-1, 1]) {
    group.add(kit.box([x, y + 1.35, z + side * 0.42], [0.04, 1.62, 0.04], ROPE))
  }
  group.add(kit.box([x, y + SKY_ISLAND.swing.seat - 0.08, z], [0.9, 0.12, 1.0], ['#c9a27a', 'wood']))
  for (let index = 0; index < 12; index += 1) {
    const angle = (index / 12) * Math.PI * 2
    group.add(kit.box([x + Math.cos(angle) * 0.5, y + SKY_ISLAND.swing.seat - 0.02,
      z + Math.sin(angle) * 0.52], [0.18, 0.14, 0.18], PETAL[index % PETAL.length]))
  }
}

export function addSkyIsland(group: T.Object3D, kit: ModelKit) {
  const random = seededRandom(7777)
  addClouds(group, kit, random)
  addMoonPavilion(group, kit)
  addChangE(group, kit)
  addJadeRabbits(group, kit)
  addFlowerSwing(group, kit, random)
}
