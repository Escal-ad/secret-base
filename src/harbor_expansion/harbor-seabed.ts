import * as T from 'three'
import { seededRandom } from '../pixel_harbor/harbor_materials'
import { isLandAt } from '../pixel_harbor/harbor_heightmap'
import type { ModelKit } from '../pixel_harbor/harbor_models'

// 内湾浅水里的螃蟹、虾和贝壳，以及两只可以摸的海豚。
// 水面的 shader 是不透明的，所以这些小东西浮在水面（y≈0.07）而不是沉在海底，
// 玩家游过去才看得见、也才捡得到。
export const SEABED = {
  // 第一张图的坐标：贝壳区
  bed: { x: -7.49, z: -6.57, radius: 7.5 },
  // 第二张图的坐标：海豚活动区
  pod: { x: -9.0, z: 6.78, radius: 1.9 },
  critters: 18,
  pickRadius: 3.2,
  pickChance: 0.45,
  bob: 0.05,
} as const

const SHELLS: Paintish[] = [['#e8d6b8'], ['#d8a58a'], ['#f0e2c6'], ['#c9b190']]

type Paintish = [string]
type Dolphin = { group: T.Group; angle: number; pet: number; hop: number; time: number; offset: number }
type Critter = { mesh: T.Group; kind: 'crab' | 'shrimp' | 'shell'; x: number; z: number; bob: number; period: number; taken: boolean; yaw: number }

function makeCrab(kit: ModelKit) {
  const group = new T.Group()
  group.add(kit.box([0, 0.1, 0], [0.3, 0.14, 0.26], ['#c1553f']))
  group.add(kit.box([0, 0.12, 0.16], [0.22, 0.12, 0.12], ['#d76b4c']))
  for (const side of [-1, 1]) {
    group.add(kit.box([side * 0.14, 0.18, 0.16], [0.03, 0.14, 0.03], ['#3f3330']))
    for (const leg of [-1, 0, 1]) {
      group.add(kit.box([side * 0.2, 0.06, leg * 0.1], [0.18, 0.03, 0.03], ['#a8412f']))
    }
  }
  return group
}

function makeShrimp(kit: ModelKit) {
  const group = new T.Group()
  group.add(kit.box([0, 0.07, 0], [0.11, 0.09, 0.3], ['#e79c86']))
  group.add(kit.box([0, 0.07, 0.2], [0.09, 0.08, 0.12], ['#f0b3a0']))
  group.add(kit.box([0, 0.1, -0.2], [0.12, 0.03, 0.12], ['#d98a76']))
  return group
}

function makeShell(kit: ModelKit, paint: Paintish) {
  const group = new T.Group()
  group.add(kit.box([0, 0.03, 0], [0.18, 0.06, 0.16], paint))
  group.add(kit.box([0, 0.06, -0.02], [0.12, 0.05, 0.1], paint))
  return group
}

export function createSeabed(scene: T.Scene, kit: ModelKit) {
  const random = seededRandom(6067)
  const critters: Critter[] = []
  let guard = 0
  while (critters.length < SEABED.critters && guard < SEABED.critters * 60) {
    guard += 1
    const angle = random() * Math.PI * 2
    const distance = Math.sqrt(random()) * SEABED.bed.radius
    const x = SEABED.bed.x + Math.cos(angle) * distance
    const z = SEABED.bed.z + Math.sin(angle) * distance
    if (isLandAt(x, z)) continue
    const roll = random()
    const kind = roll < 0.34 ? 'crab' : roll < 0.62 ? 'shrimp' : 'shell'
    const group = kind === 'crab' ? makeCrab(kit) : kind === 'shrimp' ? makeShrimp(kit)
      : makeShell(kit, SHELLS[Math.floor(random() * SHELLS.length)])
    const yaw = random() * Math.PI * 2
    group.rotation.y = yaw
    group.position.set(x, 0.07, z)
    group.scale.setScalar(0.8 + random() * 0.5)
    scene.add(group)
    critters.push({ mesh: group, kind, x, z, bob: random() * 12, period: 8 + random() * 6, taken: false, yaw })
  }

  // 两只海豚：绕着第二张图那个坐标兜圈，身体半露在水面上
  const dolphins: Dolphin[] = [0, 1].map((index) => {
    const group = new T.Group()
    group.add(kit.box([0, 0.12, 0], [0.46, 0.4, 1.5], ['#8fb0bd']))
    group.add(kit.box([0, 0.02, 0], [0.42, 0.16, 1.4], ['#dcecef']))
    group.add(kit.box([0, 0.06, 0.78], [0.24, 0.18, 0.4], ['#8fb0bd']))
    group.add(kit.box([0, 0.3, -0.1], [0.1, 0.34, 0.3], ['#7c9aa8']))
    group.add(kit.box([0, 0.12, -0.82], [0.5, 0.07, 0.34], ['#7c9aa8']))
    group.add(kit.box([0, 0.16, -0.82], [0.1, 0.22, 0.3], ['#7c9aa8']))
    for (const side of [-1, 1]) group.add(kit.box([side * 0.19, 0.2, 0.5], [0.04, 0.04, 0.04], ['#2f3238']))
    group.rotation.order = 'YXZ'
    scene.add(group)
    return { group, angle: index * Math.PI, pet: 0, hop: 0, time: 0, offset: index * 5.5 }
  })

  function update(step: number, reduced: boolean) {
      for (const critter of critters) {
        if (critter.taken) continue
        critter.bob += step
        // 大多数时间沉在水下（水面不透明，看不见），每隔一阵浮上来露个头
        const phase = critter.bob % critter.period
        const target = phase < 3.2 ? 0.07 + (reduced ? 0 : Math.sin(critter.bob * 1.6) * SEABED.bob) : -0.22
        const y = critter.mesh.position.y + (target - critter.mesh.position.y) * Math.min(1, step * 4)
        critter.mesh.position.y = y
        critter.mesh.visible = y > -0.05
      }
      for (const dolphin of dolphins) {
        dolphin.time += step
        const speed = dolphin.pet > 0 ? 1.1 : 0.34
        let nextAngle = dolphin.angle + step * speed
        const radius = SEABED.pod.radius
        const waterAt = (angle: number) =>
          isLandAt(SEABED.pod.x + Math.cos(angle) * radius, SEABED.pod.z + Math.sin(angle) * radius) === false
        // 只在海水里活动：撞到沙滩/岸线就顺着圆往前找一格水，绝不穿到岸上
        if (!waterAt(nextAngle)) {
          for (let k = 1; k <= 8; k += 1) {
            if (waterAt(nextAngle + k * 0.25)) { nextAngle += k * 0.25; break }
          }
        }
        dolphin.angle = nextAngle
        if (dolphin.pet > 0) dolphin.pet = Math.max(0, dolphin.pet - step)
        const x = SEABED.pod.x + Math.cos(dolphin.angle) * radius
        const z = SEABED.pod.z + Math.sin(dolphin.angle) * radius
        // 浮上来呼吸的节奏：12 秒一轮，露头 4 秒左右
        const phase = (dolphin.time + dolphin.offset) % 12
        const surface = phase < 4 ? Math.min(1, phase / 0.9) : Math.max(0, 1 - (phase - 4) / 1.4)
        const hop = dolphin.pet > 0 ? Math.sin((1 - dolphin.pet / 1.4) * Math.PI) * 0.55 : 0
        dolphin.group.position.set(x, -0.5 + surface * 0.66 + hop, z)
        dolphin.group.rotation.y = -dolphin.angle - Math.PI / 2
        dolphin.group.rotation.z = dolphin.pet > 0 ? Math.sin(dolphin.pet * 14) * 0.2 : 0
        dolphin.group.visible = surface > 0.05 || hop > 0.01
      }
  }
  // 先摆一次：不然第一帧两只海豚还堆在原点，摸不到
  update(0, true)
  return {
    update,
    /** 游到浅水区按 E：有概率摸到一只，摸到的会从水面上消失 */
    pick(x: number, z: number) {
      const near = critters.filter(item => !item.taken && item.mesh.position.y > -0.02
        && Math.hypot(item.x - x, item.z - z) <= SEABED.pickRadius)
      if (!near.length || Math.random() > SEABED.pickChance) return null
      const picked = near[Math.floor(Math.random() * near.length)]
      picked.taken = true
      picked.mesh.visible = false
      return picked.kind === 'crab' ? '一只小螃蟹' : picked.kind === 'shrimp' ? '一只小虾' : '一枚贝壳'
    },
    /** 站在海豚旁边：最近的、还游着的那只 */
    nearestDolphin(x: number, z: number) {
      let best: (typeof dolphins)[number] | null = null
      let closest = 3.6
      for (const dolphin of dolphins) {
        const distance = Math.hypot(dolphin.group.position.x - x, dolphin.group.position.z - z)
        if (distance < closest) { closest = distance; best = dolphin }
      }
      return best
    },
    pet(dolphin: Dolphin) {
      dolphin.pet = 1.4
    },
    inBed(x: number, z: number) {
      return Math.hypot(x - SEABED.bed.x, z - SEABED.bed.z) <= SEABED.bed.radius
    },
  }
}
