import * as T from 'three'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 顶层平台上的三块菜田：白菜、萝卜、辣椒、草莓、西瓜。
// 全部是运行时装饰（不进高度图，走过去不会踩出凸起）。
export const PLOTS = {
  top: 6.56,
  beds: [
    { x: -4.0, z: 52.5, w: 4.0, d: 3.0, crops: ['cabbage', 'radish'] as const },
    { x: -4.0, z: 56.5, w: 4.0, d: 3.0, crops: ['chili', 'strawberry'] as const },
    { x: 2.0, z: 52.5, w: 4.0, d: 3.0, crops: ['watermelon'] as const },
  ],
} as const

const SOIL: Paint = ['#3d2f26']
const EDGE: Paint = ['#8a6a4a', 'wood']
const LEAF: Paint = ['#6f9e52', 'grass']
const LEAF_DARK: Paint = ['#557f43']

function crop(kit: ModelKit, kind: string, index: number) {
  const group = new T.Group()
  if (kind === 'cabbage') {
    group.add(kit.box([0, 0.12, 0], [0.34, 0.24, 0.34], LEAF))
    group.add(kit.box([0, 0.24, 0], [0.24, 0.16, 0.24], LEAF_DARK))
  } else if (kind === 'radish') {
    group.add(kit.box([0, 0.18, 0], [0.22, 0.12, 0.22], ['#e8ddd0']))
    group.add(kit.box([0, 0.26, 0], [0.1, 0.14, 0.1], ['#c15a6a']))
    group.add(kit.box([0, 0.36, 0], [0.22, 0.1, 0.22], LEAF))
  } else if (kind === 'chili') {
    group.add(kit.box([0, 0.2, 0], [0.26, 0.4, 0.26], LEAF_DARK))
    for (const [dx, dz] of [[0.1, 0.1], [-0.1, 0.05], [0.02, -0.11]] as const) {
      group.add(kit.box([dx, 0.32 + index % 2 * 0.06, dz], [0.06, 0.16, 0.06], ['#cf4b3a']))
    }
  } else if (kind === 'strawberry') {
    group.add(kit.box([0, 0.14, 0], [0.3, 0.2, 0.3], LEAF))
    for (const [dx, dz] of [[0.08, 0.08], [-0.09, 0.02], [0.01, -0.1]] as const) {
      group.add(kit.box([dx, 0.22, dz], [0.08, 0.08, 0.08], ['#d7455a']))
    }
  } else {
    // 西瓜：藤上一个带深色条纹的瓜
    group.add(kit.box([0, 0.1, 0], [0.42, 0.14, 0.42], LEAF_DARK))
    group.add(kit.box([0, 0.24, 0], [0.36, 0.24, 0.34], ['#5f8b42']))
    for (const dx of [-0.09, 0.09]) {
      group.add(kit.box([dx, 0.24, 0], [0.05, 0.25, 0.35], ['#3f6b30']))
    }
  }
  return group
}

export function addVegetablePlots(scene: T.Scene, kit: ModelKit) {
  for (const bed of PLOTS.beds) {
    const { x, z, w, d, crops } = bed
    const y = PLOTS.top
    // 翻好的土垄
    scene.add(kit.box([x, y + 0.06, z], [w, 0.12, d], SOIL))
    // 四边木框
    for (const side of [-1, 1]) {
      scene.add(kit.box([x, y + 0.16, z + side * d / 2], [w + 0.16, 0.2, 0.12], EDGE))
      scene.add(kit.box([x + side * w / 2, y + 0.16, z], [0.12, 0.2, d + 0.16], EDGE))
    }
    // 按两行铺菜
    const rows = 2
    const cols = 4
    for (let row = 0; row < rows; row += 1) {
      const kind = crops[row % crops.length]
      for (let col = 0; col < cols; col += 1) {
        const px = x - w / 2 + (col + 0.5) * (w / cols)
        const pz = z - d / 2 + (row + 0.5) * (d / rows)
        const plant = crop(kit, kind, col + row)
        plant.position.set(px, y + 0.12, pz)
        plant.rotation.y = (col * 1.3 + row) % (Math.PI * 2)
        scene.add(plant)
      }
    }
  }
}
