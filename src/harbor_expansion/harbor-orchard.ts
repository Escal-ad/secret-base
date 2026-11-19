import * as T from 'three'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 顶层黑土平台上的果园 + 围栏外沿的椰子树。
// 全部是运行时装饰（不进高度图）：平台上要留出能走的空地，
// 果树一旦被烘焙，树冠会把整块地格子顶到 9 米多高，人就走不过去了。
const BARK: Paint = ['#6b4f43', 'wood']
const LEAF: Paint = ['#5d7f4a', 'grass']
const TRUNK: Paint = ['#8a6a48', 'wood']
const FROND: Paint = ['#4f7d46', 'grass']
const COCONUT_RIPE: Paint = ['#d8c8a6']
const COCONUT_GREEN: Paint = ['#5f8b42']

export const ORCHARD = {
  ground: 6.59,
  rowZ: 58.6,
  trees: [
    { x: -22.8, name: '橘子', fruit: '#e8933a', leaf: '#5f8f46' },
    { x: -20.4, name: '苹果', fruit: '#c8402f', leaf: '#4f7d3f' },
    { x: -18.0, name: '桃子', fruit: '#e394a8', leaf: '#5f8f46' },
    { x: -15.6, name: '柠檬', fruit: '#e8cf4a', leaf: '#6a9a4a' },
    { x: -13.2, name: '梨', fruit: '#a8c35a', leaf: '#4f7d3f' },
    { x: -10.8, name: '樱桃', fruit: '#b8324a', leaf: '#5f8f46' },
    { x: -8.4, name: '橘子', fruit: '#e8933a', leaf: '#5f8f46' },
    { x: -6.0, name: '苹果', fruit: '#c8402f', leaf: '#4f7d3f' },
    { x: -3.6, name: '桃子', fruit: '#e394a8', leaf: '#5f8f46' },
    { x: -1.2, name: '柠檬', fruit: '#e8cf4a', leaf: '#6a9a4a' },
    { x: 1.2, name: '梨', fruit: '#a8c35a', leaf: '#4f7d3f' },
    { x: 3.6, name: '樱桃', fruit: '#b8324a', leaf: '#5f8f46' },
  ],
  // 椰子树：种在围栏外侧、下一层台沿上（y 5.04），沿着平台的西、东两条边
  // ripe: 白棕色 = 熟了可以摘；青色 = 没熟
  coconuts: [
    { x: -25.3, z: 42, ripe: true }, { x: -25.3, z: 48, ripe: false }, { x: -25.3, z: 54, ripe: true },
    { x: 7.2, z: 42, ripe: false }, { x: 7.2, z: 48, ripe: true }, { x: 7.2, z: 54, ripe: false },
  ],
  coconutGround: 5.04,
} as const

function fruitTree(kit: ModelKit, fruit: string, leaf: string) {
  const group = new T.Group()
  group.add(kit.box([0, 1.0, 0], [0.28, 2.0, 0.28], BARK))
  const crown = leaf as string
  group.add(kit.box([0, 2.5, 0], [2.2, 1.2, 2.1], [crown, 'grass'] as Paint))
  group.add(kit.box([0.3, 3.25, -0.2], [1.5, 0.9, 1.5], [leaf, 'grass'] as Paint))
  group.add(kit.box([-0.7, 2.15, 0.5], [1.1, 0.8, 1.1], LEAF))
  // 果子
  // 果子挂在外沿，尺寸放大到 0.4 米，远看也能一眼认出来
  for (const [dx, dy, dz] of [[1.05, 2.55, 0.75], [-0.95, 2.9, -0.55], [0.25, 2.05, -1.05],
    [-1.25, 2.3, 0.35], [0.75, 3.05, -0.95], [1.2, 2.25, -0.2]] as const) {
    group.add(kit.box([dx, dy, dz], [0.42, 0.42, 0.42], [fruit] as Paint))
  }
  return group
}

function coconutTree(kit: ModelKit, ripe: boolean) {
  const group = new T.Group()
  group.add(kit.box([0, 2.2, 0], [0.32, 4.4, 0.32], TRUNK))
  group.add(kit.box([0.1, 4.45, 0], [0.24, 0.3, 0.24], TRUNK))
  // 六片棕榈叶
  for (let index = 0; index < 6; index += 1) {
    const angle = index * Math.PI / 3
    const frond = kit.box([Math.cos(angle) * 1.0, 4.55, Math.sin(angle) * 1.0],
      [2.1, 0.14, 0.5], FROND)
    frond.rotation.y = -angle
    frond.rotation.z = 0.18
    group.add(frond)
  }
  // 椰子挂在叶下、略微外露：熟了是白棕色，没熟是青的
  const coconutPaint: Paint = ripe ? COCONUT_RIPE : COCONUT_GREEN
  for (const [dx, dz] of [[0.3, 0.12], [-0.26, 0.26], [0.02, -0.32]] as const) {
    group.add(kit.box([dx, 4.16, dz], [0.3, 0.3, 0.3], coconutPaint))
  }
  return group
}

export function addOrchard(scene: T.Scene, kit: ModelKit) {
  for (const tree of ORCHARD.trees) {
    const model = fruitTree(kit, tree.fruit, tree.leaf)
    model.position.set(tree.x, ORCHARD.ground, ORCHARD.rowZ)
    model.rotation.y = (tree.x * 0.7) % (Math.PI * 2)
    scene.add(model)
  }
  for (const tree of ORCHARD.coconuts) {
    const model = coconutTree(kit, tree.ripe)
    model.position.set(tree.x, ORCHARD.coconutGround, tree.z)
    model.rotation.y = (tree.z * 0.5) % (Math.PI * 2)
    scene.add(model)
  }
}
