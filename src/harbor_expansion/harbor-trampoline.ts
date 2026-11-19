import * as T from 'three'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 海上的蹦床设施：蓝白、蓝橙相间的浮台，站在上面按 E 能弹到灯塔那么高。
export const TRAMPOLINE = {
  x: 19.6, z: -25.5,
  size: 6.0,
  top: 0.72,
  launch: 28,
} as const

const BLUE: Paint = ['#2f6f9e']
const WHITE: Paint = ['#eef3f7']
const ORANGE: Paint = ['#d9772f']
const RIM: Paint = ['#1f4f74']
const MAT: Paint = ['#4b8fb8']

export function addTrampoline(group: T.Object3D, kit: ModelKit) {
  const { x, z, size, top } = TRAMPOLINE
  // 浮筒底座
  group.add(kit.box([x, top - 0.34, z], [size + 0.4, 0.5, size + 0.4], RIM))
  // 蓝白相间的台面（四条带）
  const bands = 4
  const bandSize = size / bands
  for (let index = 0; index < bands; index += 1) {
    const paint = index % 2 === 0 ? BLUE : WHITE
    group.add(kit.box([x - size / 2 + bandSize * (index + 0.5), top - 0.08, z],
      [bandSize, 0.16, size], paint))
  }
  // 四角的蓝橙块
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      group.add(kit.box([x + sx * (size / 2 - 0.6), top + 0.02, z + sz * (size / 2 - 0.6)],
        [1.1, 0.2, 1.1], ORANGE))
    }
  }
  // 中间弹面
  group.add(kit.box([x, top + 0.06, z], [size - 1.6, 0.06, size - 1.6], MAT))
  // 外圈护栏（矮一圈，防止看着像块板）
  for (const side of [-1, 1]) {
    group.add(kit.box([x + side * (size / 2 + 0.14), top + 0.14, z], [0.28, 0.24, size + 0.56], WHITE))
    group.add(kit.box([x, top + 0.14, z + side * (size / 2 + 0.14)], [size + 0.56, 0.24, 0.28], WHITE))
  }
}

// 栈桥上的蹦床传送点：只有一圈金色光圈
export const TRAMP_GATE = { x: 15.37, z: -2.58 } as const

export function addTrampGate() {
  // 传送点不放任何几何：栈桥表面保持原样，只有交互判定
}

export const TRAMPOLINE_OBSTACLE: [number, number, number, number] = [
  TRAMPOLINE.x - TRAMPOLINE.size / 2, TRAMPOLINE.x + TRAMPOLINE.size / 2,
  TRAMPOLINE.z - TRAMPOLINE.size / 2, TRAMPOLINE.z + TRAMPOLINE.size / 2,
]
