import * as T from 'three'
import { seededRandom } from '../pixel_harbor/harbor_materials'
import { dampAngle, dampingFactor } from '../pixel_harbor/harbor_damping'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 顶层平台东南角：小池塘 + 鸡圈。
// 鸡圈照着牛圈/羊圈的样子做：中间空出来，四周用深色大理石砌饲料槽，槽里放米。
// 下雨小鸡就回棚里待着；晴天在平台上溜达，时不时啄地上的小虫子。
export const CHICKEN = {
  ground: 6.59,
  pond: { x: 3.2, z: 41.4, w: 2.9, d: 2.3 },
  coop: { x: -1.6, z: 44.8, w: 1.7, d: 1.5 },
  yard: { x: -1.6, z: 44.8, w: 3.6, d: 3.0, gate: 0.9 },
  roam: { x0: -4.6, x1: 5.6, z0: 39.6, z1: 58.6 },
  flock: 4,
} as const

const ROCK: Paint = ['#8f8577', 'brick']
const ROCK_DARK: Paint = ['#776f63']
const WATER: Paint = ['#5f9fb0']
const PAD: Paint = ['#4f7d46', 'grass']
const FROG: Paint = ['#6fae3a', 'grass']
const PLANK: Paint = ['#8a6a4a', 'wood']
const MARBLE: Paint = ['#3f3f45', 'brick']
const RICE: Paint = ['#efe3bd']
const FEATHER: Paint = ['#f2ede2']
const COMB: Paint = ['#c8402f']
const BUG: Paint = ['#3a2f22']

export const CHICKEN_OBSTACLES: [number, number, number, number][] = [
  [CHICKEN.coop.x - CHICKEN.coop.w / 2, CHICKEN.coop.x + CHICKEN.coop.w / 2,
    CHICKEN.coop.z - CHICKEN.coop.d / 2, CHICKEN.coop.z + CHICKEN.coop.d / 2],
  [CHICKEN.pond.x - CHICKEN.pond.w / 2, CHICKEN.pond.x + CHICKEN.pond.w / 2,
    CHICKEN.pond.z - CHICKEN.pond.d / 2, CHICKEN.pond.z + CHICKEN.pond.d / 2],
]

export function addCoopAndPond(group: T.Object3D, kit: ModelKit) {
  const y = CHICKEN.ground
  const pond = CHICKEN.pond
  group.add(kit.box([pond.x, y + 0.02, pond.z], [pond.w, 0.08, pond.d], WATER))
  const random = seededRandom(3131)
  const ring = (count: number, place: (index: number) => [number, number]) => {
    for (let index = 0; index < count; index += 1) {
      const [x, z] = place(index)
      const size = 0.3 + random() * 0.34
      const rock = kit.box([x, y + size * 0.35, z], [size * 1.3, size, size * 1.1],
        random() > 0.45 ? ROCK : ROCK_DARK)
      rock.rotation.y = random() * Math.PI
      group.add(rock)
    }
  }
  const halfW = pond.w / 2 + 0.16
  const halfD = pond.d / 2 + 0.16
  ring(6, index => [pond.x - halfW + index * (pond.w + 0.32) / 5, pond.z - halfD])
  ring(6, index => [pond.x - halfW + index * (pond.w + 0.32) / 5, pond.z + halfD])
  ring(4, index => [pond.x - halfW, pond.z - halfD + 0.5 + index * (pond.d - 0.6) / 3])
  ring(4, index => [pond.x + halfW, pond.z - halfD + 0.5 + index * (pond.d - 0.6) / 3])

  const pads: [number, number][] = [[pond.x - 0.6, pond.z - 0.35], [pond.x + 0.55, pond.z + 0.3],
    [pond.x - 0.1, pond.z + 0.55]]
  for (const [px, pz] of pads) {
    group.add(kit.box([px, y + 0.07, pz], [0.62, 0.02, 0.62], PAD))
    group.add(kit.box([px + 0.14, y + 0.12, pz + 0.1], [0.16, 0.1, 0.16], FROG))
    for (const side of [-1, 1]) {
      group.add(kit.box([px + 0.14 + side * 0.05, y + 0.18, pz + 0.08], [0.04, 0.05, 0.04], ['#2f3b2a']))
    }
  }

  // 鸡窝：一间小棚（后墙 + 两片坡顶），前面敞开
  const coop = CHICKEN.coop
  group.add(kit.box([coop.x, y + 0.42, coop.z - 0.1], [coop.w, 0.84, 0.18], PLANK))
  for (const side of [-1, 1]) {
    group.add(kit.box([coop.x + side * (coop.w / 2 - 0.08), y + 0.42, coop.z], [0.16, 0.84, coop.d], PLANK))
  }
  for (const side of [-1, 1]) {
    const slope = kit.box([coop.x, y + 0.96, coop.z + side * 0.42], [coop.w + 0.3, 0.12, 1.0], ['#7a5a44', 'wood'])
    slope.rotation.x = side * 0.3
    group.add(slope)
  }
  group.add(kit.box([coop.x, y + 0.03, coop.z + 0.1], [coop.w - 0.1, 0.06, coop.d - 0.2], RICE))

  // 院子：木栏 + 南面出口
  const yard = CHICKEN.yard
  const posts = (ax: number, az: number, bx: number, bz: number) => {
    const count = Math.max(2, Math.round(Math.hypot(bx - ax, bz - az) / 0.8) + 1)
    for (let index = 0; index < count; index += 1) {
      const t = index / (count - 1)
      group.add(kit.box([ax + (bx - ax) * t, y + 0.28, az + (bz - az) * t], [0.09, 0.56, 0.09], PLANK))
    }
    for (const railY of [0.22, 0.42]) {
      group.add(kit.beam([[ax, y + railY, az], [bx, y + railY, bz]], 0.06, PLANK))
    }
  }
  const { x, z, w, d } = yard
  posts(x - w / 2, z - d / 2, x + w / 2, z - d / 2)
  posts(x - w / 2, z - d / 2, x - w / 2, z + d / 2)
  posts(x + w / 2, z - d / 2, x + w / 2, z + d / 2)
  posts(x - w / 2, z + d / 2, x - w / 2 + CHICKEN.yard.gate, z + d / 2)
  posts(x + w / 2, z + d / 2, x + w / 2 - CHICKEN.yard.gate, z + d / 2)

  // 深色大理石饲料槽：贴着院子的东、西两边，槽里铺一层米
  for (const side of [-1, 1]) {
    group.add(kit.box([x + side * (w / 2 - 0.42), y + 0.16, z], [0.5, 0.3, d - 1.2], MARBLE))
    group.add(kit.box([x + side * (w / 2 - 0.42), y + 0.32, z], [0.34, 0.04, d - 1.4], RICE))
  }
}

function makeChicken(kit: ModelKit) {
  const group = new T.Group()
  group.add(kit.box([0, 0.3, 0], [0.34, 0.34, 0.46], FEATHER))
  group.add(kit.box([0, 0.56, 0.2], [0.22, 0.24, 0.22], FEATHER))
  group.add(kit.box([0, 0.7, 0.2], [0.05, 0.14, 0.05], COMB))
  group.add(kit.box([0, 0.56, 0.33], [0.08, 0.06, 0.1], ['#e0a23c']))
  for (const side of [-1, 1]) {
    group.add(kit.box([side * 0.16, 0.55, 0.24], [0.03, 0.05, 0.03], ['#2f2f2f']))
    group.add(kit.box([side * 0.09, 0.09, 0], [0.05, 0.18, 0.05], ['#d99a3c']))
  }
  group.add(kit.box([0, 0.44, -0.28], [0.16, 0.18, 0.12], FEATHER))
  return group
}

const insideYard = (x: number, z: number) =>
  Math.abs(x - CHICKEN.yard.x) < CHICKEN.yard.w / 2 + 0.2
  && Math.abs(z - CHICKEN.yard.z) < CHICKEN.yard.d / 2 + 0.2

export function createChickens(scene: T.Scene, kit: ModelKit) {
  const random = seededRandom(8081)
  const chickens = Array.from({ length: CHICKEN.flock }, () => {
    const model = makeChicken(kit)
    const x = CHICKEN.coop.x + (random() - 0.5) * 1.2
    const z = CHICKEN.coop.z + (random() - 0.5) * 1
    model.position.set(x, CHICKEN.ground, z)
    const bug = kit.box([0, -0.1, 0], [0.1, 0.05, 0.12], BUG)
    bug.visible = false
    scene.add(bug)
    scene.add(model)
    return { model, bug, x, z, facing: random() * 6.28, targetX: x, targetZ: z,
      wait: random() * 3, peck: 0, bugTimer: 2 + random() * 4, home: false }
  })

  function retarget(chicken: typeof chickens[number], raining: boolean) {
    if (raining) {
      // 下雨：回鸡棚里待着（棚子在院子中间）
      chicken.targetX = CHICKEN.coop.x + (random() - 0.5) * 1.0
      chicken.targetZ = CHICKEN.coop.z + (random() - 0.5) * 0.7
      chicken.home = true
      chicken.wait = 3 + random() * 3
      return
    }
    chicken.home = false
    for (let attempt = 0; attempt < 8; attempt += 1) {
      const { x0, x1, z0, z1 } = CHICKEN.roam
      const tx = x0 + random() * (x1 - x0)
      const tz = z0 + random() * (z1 - z0)
      // 别往鸡圈围栏里钻（会穿模）
      if (insideYard(tx, tz)) continue
      chicken.targetX = tx
      chicken.targetZ = tz
      chicken.wait = 2 + random() * 4
      return
    }
  }

  return {
    update(step: number, reduced: boolean, rain: number) {
      const raining = rain > 0.22
      for (const chicken of chickens) {
        const dx = chicken.targetX - chicken.x
        const dz = chicken.targetZ - chicken.z
        const distance = Math.hypot(dx, dz)
        if (distance < 0.25) {
          chicken.wait -= step
          if (chicken.wait <= 0) retarget(chicken, raining)
          if (chicken.bugTimer > 0) chicken.bugTimer -= step
          // 晴天闲着的时候：地上冒一只小虫，低头啄它
          if (!raining && !reduced) {
            if (chicken.bugTimer <= 0 && !chicken.bug.visible) {
              chicken.bug.position.set(chicken.x + (random() - 0.5) * 0.7, CHICKEN.ground + 0.03,
                chicken.z + 0.35 + random() * 0.3)
              chicken.bug.visible = true
              chicken.bugTimer = 6 + random() * 8
            }
            if (chicken.bug.visible) {
              chicken.peck = Math.min(1, chicken.peck + step * 2.4)
              chicken.model.position.y = CHICKEN.ground - Math.sin(chicken.peck * Math.PI) * 0.05
              if (chicken.peck >= 1) { chicken.bug.visible = false; chicken.peck = 0 }
            } else {
              chicken.model.position.y = CHICKEN.ground
            }
          }
          continue
        }
        const move = Math.min((raining ? 0.78 : 0.62) * step, distance)
        const nx = chicken.x + dx / distance * move
        const nz = chicken.z + dz / distance * move
        // 没下雨时不要跨过鸡圈围栏，避免穿模
        if (!raining && insideYard(nx, nz) && !insideYard(chicken.x, chicken.z)) {
          retarget(chicken, raining)
          continue
        }
        chicken.x = nx
        chicken.z = nz
        chicken.facing = dampAngle(chicken.facing, Math.atan2(dx, dz), dampingFactor(step, 0.2))
        chicken.model.position.set(chicken.x,
          CHICKEN.ground + (reduced ? 0 : Math.abs(Math.sin(chicken.x * 4)) * 0.03), chicken.z)
        chicken.model.rotation.y = chicken.facing
      }
    },
  }
}
