import * as T from 'three'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 海上度假平台：白色游艇栏杆的浮台，右边两顶度假帐篷，左边是蹦床。
export const RESORT = {
  x: 24.0, z: -25.5,
  w: 15.0, d: 11.0,
  top: 0.55,
  tents: [
    { x: 27.6, z: -22.4, color: '#f2e6d2' },
    { x: 27.6, z: -28.2, color: '#e8d5c4' },
  ],
} as const

const DECK: Paint = ['#dfe9ee', 'wood']
const DECK_EDGE: Paint = ['#7fb2cf', 'wood']
const RAIL: Paint = ['#f4fbff']
const RAIL_POST: Paint = ['#4f89ab']
const TENT_POLE: Paint = ['#c9b48d']

export function addResort(group: T.Object3D, kit: ModelKit) {
  const { x, z, w, d, top } = RESORT
  // 浮台
  group.add(kit.box([x, top - 0.25, z], [w + 0.6, 0.5, d + 0.6], ['#8a8f97']))
  // 只留一整块台面，避免两层共面闪烁
  group.add(kit.box([x, top - 0.04, z], [w, 0.16, d], DECK))
  // 蓝色镶边（略微高出 1 厘米，不共面）
  group.add(kit.box([x, top + 0.05, z - d / 2 + 0.35], [w - 0.6, 0.04, 0.3], DECK_EDGE))
  group.add(kit.box([x, top + 0.05, z + d / 2 - 0.35], [w - 0.6, 0.04, 0.3], DECK_EDGE))
  group.add(kit.box([x - w / 2 + 0.35, top + 0.05, z], [0.3, 0.04, d - 1.2], DECK_EDGE))
  group.add(kit.box([x + w / 2 - 0.35, top + 0.05, z], [0.3, 0.04, d - 1.2], DECK_EDGE))
  // 白色游艇式栏杆：立柱 + 两道横杆（左右后三面，前面留上下口）
  const post = (px: number, pz: number) => {
    group.add(kit.box([px, top + 0.42, pz], [0.1, 0.84, 0.1], RAIL_POST))
  }
  const rail = (ax: number, az: number, bx: number, bz: number) => {
    for (const y of [0.36, 0.72]) {
      group.add(kit.beam([[ax, top + y, az], [bx, top + y, bz]], 0.07, RAIL))
    }
  }
  const x0 = x - w / 2 + 0.15, x1 = x + w / 2 - 0.15
  const z0 = z - d / 2 + 0.15, z1 = z + d / 2 - 0.15
  for (const px of [x0, x1]) {
    for (let index = 0; index <= 3; index += 1) post(px, z0 + (z1 - z0) * index / 3)
    rail(px, z0, px, z1)
  }
  for (let index = 0; index <= 4; index += 1) post(x0 + (x1 - x0) * index / 4, z0)
  rail(x0, z0, x1, z0)
  // 前缘只做两小段，中间留进出口
  rail(x0, z1, x0 + 2.0, z1)
  rail(x1 - 2.0, z1, x1, z1)

  // 两顶橙白相间的金字塔帐篷：塔身高一些，坐躺椅上时不会挡住海景
  for (const tent of RESORT.tents) {
    const { x: tx, z: tz } = tent
    const orange: Paint = ['#e8944a']
    const cream: Paint = ['#f6efe2']
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        group.add(kit.box([tx + sx * 1.5, top + 1.4, tz + sz * 1.4], [0.1, 2.8, 0.1], TENT_POLE))
      }
    }
    // 金字塔：四层收分，橙白交替
    for (let index = 0; index < 4; index += 1) {
      const size = 4.2 - index * 0.95
      group.add(kit.box([tx, top + 2.95 + index * 0.34, tz], [size, 0.36, size],
        index % 2 === 0 ? orange : cream))
    }
    group.add(kit.box([tx, top + 4.35, tz], [0.14, 0.4, 0.14], orange))
    // 四面飘边（只到 2.8 米高，视线以下）
    for (const sz of [-1, 1]) {
      group.add(kit.box([tx, top + 2.7, tz + sz * 1.5], [3.0, 0.3, 0.08], cream))
    }
  }
}
export const RESORT_OBSTACLE: [number, number, number, number] = [
  RESORT.x - RESORT.w / 2, RESORT.x + RESORT.w / 2,
  RESORT.z - RESORT.d / 2, RESORT.z + RESORT.d / 2,
]
