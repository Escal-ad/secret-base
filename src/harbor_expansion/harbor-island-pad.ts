import * as T from 'three'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 东边外岛（ISLANDS.positions[1]，中心 96,-6）山顶上的第二个停机点。
// 用法和村里梯田上的停机坪一样：可以降落、可以按 E 上机；按 R 也不会再飞回村里。
export const ISLAND_PAD = {
  x: 96.68, z: -6.28,
  top: 9.6,
  size: 9,
  skirt: 2.8,
} as const

const CONCRETE: Paint = ['#7a7d80', 'brick']
const ROCK_A: Paint = ['#8b8172', 'brick']
const ROCK_B: Paint = ['#a09684', 'brick']
const MARK: Paint = ['#e9e7e0']

export function addIslandPad(group: T.Object3D, kit: ModelKit) {
  const { x, z, top, size, skirt } = ISLAND_PAD
  // 基座：两层岩石（下宽上窄），像从山体里长出来的一块岩台
  group.add(kit.box([x, top - skirt * 0.72, z], [size + 2.4, skirt * 1.15, size + 2.4], ROCK_A))
  group.add(kit.box([x, top - skirt * 0.22, z], [size + 0.8, skirt * 0.5, size + 0.8], ROCK_B))
  // 台阶上的水泥停机面
  group.add(kit.box([x, top - 0.12, z], [size, 0.24, size], CONCRETE))
  // 中间的白 H
  for (const side of [-1, 1]) {
    group.add(kit.box([x + side * 1.1, top + 0.06, z], [0.5, 0.02, 3.0], MARK))
  }
  group.add(kit.box([x, top + 0.06, z], [1.6, 0.02, 0.5], MARK))
  // 外圈白环（12 段）
  for (let index = 0; index < 12; index += 1) {
    const angle = index * Math.PI / 6
    const segment = kit.box([x + Math.cos(angle) * 3.4, top + 0.06, z + Math.sin(angle) * 3.4],
      [0.16, 0.02, 1.4], MARK)
    segment.rotation.y = -angle
    group.add(segment)
  }
  // 四角的停机灯（夜里会更明显）
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]] as const) {
    group.add(kit.box([x + sx * (size / 2 - 0.5), top + 0.12, z + sz * (size / 2 - 0.5)],
      [0.28, 0.2, 0.28], ['#ffd79b']))
  }
}
