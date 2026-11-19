import * as T from 'three'
import { seededRandom } from '../pixel_harbor/harbor_materials'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 顶层平台北侧栅栏边：一排紧挨着种的松树，树下/枝上蹲着小松鼠，抱着坚果。
// 运行时装饰（不进高度图），树冠不会把平台地面顶出高点。
export const PINES = {
  ground: 6.59,
  z: 39.75,
  from: -22.0,
  to: 5.4,
  spacing: 4.2,
  trunk: ['#6b4f43', 'wood'] as Paint,
  bark: ['#7d5c45', 'wood'] as Paint,
}

const NEEDLES: Paint[] = [['#3f6b3a', 'grass'], ['#4a7a42', 'grass'], ['#356030', 'grass']]
const FUR: Paint = ['#8a5a38']
const NUT: Paint = ['#6b4a2e']

function makePine(kit: ModelKit, scale: number) {
  const group = new T.Group()
  group.add(kit.box([0, 0.9 * scale, 0], [0.34 * scale, 1.8 * scale, 0.34 * scale], PINES.trunk))
  // 三层松针，越往上越小
  const tiers = [
    { y: 1.7, w: 2.0, h: 1.1 },
    { y: 2.6, w: 1.55, h: 1.0 },
    { y: 3.45, w: 1.05, h: 0.9 },
  ]
  for (const [index, tier] of tiers.entries()) {
    group.add(kit.box([0, tier.y * scale, 0], [tier.w * scale, tier.h * scale, tier.w * scale],
      NEEDLES[index % NEEDLES.length]))
  }
  return group
}

function makeSquirrel(kit: ModelKit) {
  const group = new T.Group()
  group.add(kit.box([0, 0.14, 0], [0.2, 0.18, 0.26], FUR))
  group.add(kit.box([0, 0.26, 0.13], [0.15, 0.14, 0.14], FUR))
  group.add(kit.box([0, 0.32, 0.14], [0.05, 0.06, 0.05], ['#3a2a1f']))
  group.add(kit.box([0, 0.16, -0.2], [0.1, 0.3, 0.1], ['#9c6a42']))
  group.add(kit.box([0, 0.12, 0.22], [0.1, 0.1, 0.1], NUT))
  return group
}

export function addPines(scene: T.Scene, kit: ModelKit) {
  const random = seededRandom(9191)
  const count = Math.floor((PINES.to - PINES.from) / PINES.spacing) + 1
  for (let index = 0; index < count; index += 1) {
    const x = PINES.from + index * PINES.spacing
    const scale = 0.85 + random() * 0.3
    const pine = makePine(kit, scale)
    pine.position.set(x, PINES.ground, PINES.z + (random() - 0.5) * 0.3)
    pine.rotation.y = random() * Math.PI
    scene.add(pine)
    // 每棵树配一只松鼠：一半在树下，一半蹲在最低一层树枝上
    const squirrel = makeSquirrel(kit)
    const onBranch = index % 2 === 0
    squirrel.position.set(x + (random() - 0.5) * 0.8,
      PINES.ground + (onBranch ? 1.55 * scale : 0), PINES.z + 0.5 + random() * 0.4)
    squirrel.rotation.y = random() * Math.PI * 2
    scene.add(squirrel)
  }
}
