import * as T from 'three'
import type { Footprint } from '../pixel_harbor/harbor_layout'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'
import { DECK } from '../pixel_harbor/harbor_terrain'
import { seededRandom } from '../pixel_harbor/harbor_materials'

// 西岸草地上的两个圈：羊圈（用户给的坐标 -24.19, 17.28 为中心）和牛圈。
// 两个圈都是 6 × 6 米、同一条 z 线上、中间留 1 米过道，门都开在北墙（朝向码头来的方向）。
export const FARM = {
  sheepPen: { x0: -27, x1: -21, z0: 14, z1: 20 },
  cowPen: { x0: -20, x1: -14, z0: 14, z1: 20 },
  // 白天放牧的范围：整片西岸草地（西到礁石内侧、北到岬角、南到梯田脚下）。
  // 牛羊不会走出这块地，也不会踩进海里或屋里——能不能走由 canWalk 逐帧判定。
  roam: { x0: -29, x1: -12.6, z0: -19.5, z1: 21.5 },
  gateWidth: 2,
  fenceHeight: 1.05,
  postStep: 1.5,
  milk: { x: -16.4, z: 19.4, radius: 2 },
  // 出生点都落在圈内空地（离草垛、水槽至少 1 米），否则出生就被碰撞盒卡住
  sheep: [[-25.4, 15.7], [-23.6, 16.5], [-24.7, 17.9]] as const,
  cows: [[-18.8, 15.7], [-15.9, 16.9]] as const,
  dogHome: [-21.6, 14.6] as const,
  // 放牧节奏：都比原来快一档，狗和羊一整天都在外面走。
  dogRetarget: [1.1, 1.9] as const,
  sheepRetarget: [0.9, 1.7] as const,
  dogSpeed: 1.95,
  sheepSpeed: 1.15,
  cowSpeed: 0.42,
  flockDistance: [1.4, 3.2] as const,
} as const

const WOOD: Paint = ['#8a6a4a', 'wood']
const RAIL: Paint = ['#a9855f', 'wood']
const HAY: Paint = ['#d8b96b']
const WOOL: Paint = ['#ece6d8']
const FACE: Paint = ['#4a4038']
const COW: Paint = ['#efe9de']
const SPOT: Paint = ['#3b3632']
const UDDER: Paint = ['#d8a29a']
const DOG: Paint = ['#c08a5a']
const DOG_DARK: Paint = ['#7d5636']

type Rect = { x0: number; x1: number; z0: number; z1: number }

function fenceLine(group: T.Group, kit: ModelKit, from: [number, number], to: [number, number]) {
  const length = Math.hypot(to[0] - from[0], to[1] - from[1])
  const posts = Math.max(2, Math.round(length / FARM.postStep) + 1)
  for (let index = 0; index < posts; index += 1) {
    const t = index / (posts - 1)
    group.add(kit.box([from[0] + (to[0] - from[0]) * t, DECK + FARM.fenceHeight / 2,
      from[1] + (to[1] - from[1]) * t], [FARM.fenceHeight / 9, FARM.fenceHeight, FARM.fenceHeight / 9], WOOD))
  }
  for (const y of [0.38, 0.78]) {
    group.add(kit.beam([[from[0], DECK + y, from[1]], [to[0], DECK + y, to[1]]], 0.08, RAIL))
  }
}

/** 一个圈：四面木栏，北墙正中留门。 */
function addPen(group: T.Group, kit: ModelKit, pen: Rect) {
  const gateHalf = FARM.gateWidth / 2
  const gateX = (pen.x0 + pen.x1) / 2
  fenceLine(group, kit, [pen.x0, pen.z0], [gateX - gateHalf, pen.z0])
  fenceLine(group, kit, [gateX + gateHalf, pen.z0], [pen.x1, pen.z0])
  fenceLine(group, kit, [pen.x1, pen.z0], [pen.x1, pen.z1])
  fenceLine(group, kit, [pen.x1, pen.z1], [pen.x0, pen.z1])
  fenceLine(group, kit, [pen.x0, pen.z1], [pen.x0, pen.z0])
  for (const side of [-1, 1]) {
    group.add(kit.box([gateX + side * gateHalf, DECK + 0.68, pen.z0], [0.22, 1.36, 0.22], WOOD))
  }
  // 角落的草垛
  group.add(kit.box([pen.x1 - 0.9, DECK + 0.42, pen.z1 - 0.9], [1.1, 0.84, 1.1], HAY))
  group.add(kit.box([pen.x1 - 0.9, DECK + 0.9, pen.z1 - 0.9], [0.9, 0.2, 0.9], HAY))
  // 水槽
  group.add(kit.box([pen.x0 + 1.1, DECK + 0.28, pen.z1 - 0.8], [1.5, 0.56, 0.62], WOOD))
  group.add(kit.box([pen.x0 + 1.1, DECK + 0.5, pen.z1 - 0.8], [1.3, 0.1, 0.44], ['#7fa7b8']))
}

function penObstacles(pen: Rect): Footprint[] {
  const gateHalf = FARM.gateWidth / 2
  const gateX = (pen.x0 + pen.x1) / 2
  const t = 0.18
  return [
    [pen.x0 - t, gateX - gateHalf, pen.z0 - t, pen.z0 + t],
    [gateX + gateHalf, pen.x1 + t, pen.z0 - t, pen.z0 + t],
    [pen.x1 - t, pen.x1 + t, pen.z0, pen.z1],
    [pen.x0 - t, pen.x1 + t, pen.z1 - t, pen.z1 + t],
    [pen.x0 - t, pen.x0 + t, pen.z0, pen.z1],
    [pen.x1 - 1.5, pen.x1 - 0.3, pen.z1 - 1.5, pen.z1 - 0.3],
    [pen.x0 + 0.3, pen.x0 + 1.9, pen.z1 - 1.2, pen.z1 - 0.4],
  ]
}

export const FARM_OBSTACLES: Footprint[] = [...penObstacles(FARM.sheepPen), ...penObstacles(FARM.cowPen)]

/** 静态部分：两个圈的木栏、门柱、草垛、水槽，进静态世界（能被烘焙、能挡人）。 */
export function addFarmStructures(group: T.Group, kit: ModelKit) {
  addPen(group, kit, FARM.sheepPen)
  addPen(group, kit, FARM.cowPen)
}

type Kind = 'sheep' | 'cow' | 'dog'
type Critter = {
  kind: Kind; root: T.Group; legs: T.Mesh[]; head: T.Mesh
  x: number; z: number; yaw: number; speed: number; phase: number
  home: { x: number; z: number }; target: { x: number; z: number }; timer: number; pen: Rect
}

function makeSheep(kit: ModelKit) {
  const group = new T.Group()
  const legs: T.Mesh[] = []
  group.add(kit.box([0, 0.5, 0], [0.62, 0.44, 0.84], WOOL))
  group.add(kit.box([0, 0.76, 0.02], [0.5, 0.16, 0.64], ['#f4f0e5']))
  group.add(kit.box([0, 0.46, -0.44], [0.5, 0.34, 0.3], WOOL))
  const head = kit.box([0, 0.6, -0.62], [0.26, 0.28, 0.28], FACE)
  group.add(head)
  group.add(kit.box([0, 0.74, -0.58], [0.34, 0.08, 0.12], ['#d9d3c6']))
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    const leg = kit.box([sx * 0.19, 0.14, sz * 0.28], [0.09, 0.3, 0.09], FACE)
    legs.push(leg); group.add(leg)
  }
  return { group, legs, head }
}

function makeCow(kit: ModelKit) {
  const group = new T.Group()
  const legs: T.Mesh[] = []
  group.add(kit.box([0, 0.74, 0], [0.78, 0.62, 1.22], COW))
  group.add(kit.box([0, 0.82, 0.24], [0.8, 0.34, 0.44], SPOT))
  group.add(kit.box([0, 0.72, -0.3], [0.8, 0.28, 0.3], SPOT))
  const head = kit.box([0, 0.92, -0.78], [0.36, 0.38, 0.34], COW)
  group.add(head)
  group.add(kit.box([0, 0.78, -0.92], [0.3, 0.18, 0.16], ['#e0c2b6']))
  for (const side of [-1, 1]) {
    group.add(kit.box([side * 0.2, 1.14, -0.72], [0.07, 0.16, 0.07], ['#d9cfa8']))
  }
  group.add(kit.box([0, 0.44, 0.1], [0.34, 0.24, 0.34], UDDER))
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    const leg = kit.box([sx * 0.26, 0.2, sz * 0.42], [0.13, 0.4, 0.13], ['#ddd5c6'])
    legs.push(leg); group.add(leg)
  }
  return { group, legs, head }
}

function makeDog(kit: ModelKit) {
  const group = new T.Group()
  const legs: T.Mesh[] = []
  group.add(kit.box([0, 0.36, 0], [0.3, 0.26, 0.56], DOG))
  const head = kit.box([0, 0.46, -0.38], [0.24, 0.22, 0.24], DOG)
  group.add(head)
  group.add(kit.box([0, 0.5, -0.5], [0.14, 0.1, 0.12], DOG_DARK))
  for (const side of [-1, 1]) group.add(kit.box([side * 0.1, 0.6, -0.34], [0.06, 0.14, 0.08], DOG_DARK))
  group.add(kit.box([0, 0.46, 0.34], [0.07, 0.07, 0.24], DOG_DARK))
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    const leg = kit.box([sx * 0.1, 0.12, sz * 0.2], [0.07, 0.24, 0.07], DOG_DARK)
    legs.push(leg); group.add(leg)
  }
  return { group, legs, head }
}

function inside(rect: Rect, x: number, z: number, margin: number) {
  return x > rect.x0 + margin && x < rect.x1 - margin && z > rect.z0 + margin && z < rect.z1 - margin
}

export function createFarmLife(scene: T.Scene, kit: ModelKit, canWalk: (x: number, z: number) => boolean) {
  const random = seededRandom(4821)
  const animals: Critter[] = []

  function spawn(kind: Kind, x: number, z: number, pen: Rect) {
    const built = kind === 'sheep' ? makeSheep(kit) : kind === 'cow' ? makeCow(kit) : makeDog(kit)
    built.group.rotation.order = 'YXZ'
    scene.add(built.group)
    animals.push({ kind, root: built.group, legs: built.legs, head: built.head,
      x, z, yaw: random() * Math.PI * 2, speed: 0, phase: random() * 6,
      home: { x, z }, target: { x, z }, timer: random() * 2, pen })
  }
  for (const [x, z] of FARM.sheep) spawn('sheep', x, z, FARM.sheepPen)
  for (const [x, z] of FARM.cows) spawn('cow', x, z, FARM.cowPen)
  spawn('dog', FARM.dogHome[0], FARM.dogHome[1], FARM.sheepPen)

  const gateOf = (pen: Rect) => ({ x: (pen.x0 + pen.x1) / 2, z: pen.z0 })
  const roam = FARM.roam
  const dog = () => animals.find(item => item.kind === 'dog')!

  /** 圈里圈外之间切换时先经过门口，否则会一头撞在木栏上。 */
  function waypoint(animal: Critter, target: { x: number; z: number }) {
    const animalInside = inside(animal.pen, animal.x, animal.z, 0.5)
    const targetInside = inside(animal.pen, target.x, target.z, 0.5)
    if (animalInside === targetInside) return target
    const gate = gateOf(animal.pen)
    if (Math.hypot(gate.x - animal.x, gate.z - animal.z) < 0.4) return target
    return gate
  }

  /** 白天：狗在地图上到处跑，羊跟着狗走（被赶出去），都只在能走的草地上。 */
  function retarget(animal: Critter) {
    if (animal.kind === 'cow') {
      // 牛只在圈里挪，落点也要能走（别挑到草垛或水槽里）
      for (let attempt = 0; attempt < 12; attempt += 1) {
        const x = animal.pen.x0 + 1.4 + random() * (animal.pen.x1 - animal.pen.x0 - 2.8)
        const z = animal.pen.z0 + 1.4 + random() * (animal.pen.z1 - animal.pen.z0 - 2.8)
        if (canWalk(x, z)) { animal.target = { x, z }; return }
      }
      animal.target = { ...animal.home }
      return
    }
    if (animal.kind === 'dog') {
      for (let attempt = 0; attempt < 24; attempt += 1) {
        const x = roam.x0 + 1 + random() * (roam.x1 - roam.x0 - 2)
        const z = roam.z0 + 1 + random() * (roam.z1 - roam.z0 - 2)
        if (canWalk(x, z)) { animal.target = { x, z }; return }
      }
      animal.target = { x: animal.pen.x0 + 3, z: animal.pen.z0 - 2 }
      return
    }
    // 羊：跟着狗，落在狗身后 1.4~3.2 米的位置，这样看起来是被赶着走的一群。
    const leader = dog()
    for (let attempt = 0; attempt < 12; attempt += 1) {
      const distance = FARM.flockDistance[0] + random() * (FARM.flockDistance[1] - FARM.flockDistance[0])
      const angle = random() * Math.PI * 2
      const x = leader.x + Math.cos(angle) * distance
      const z = leader.z + Math.sin(angle) * distance
      if (x > roam.x0 && x < roam.x1 && z > roam.z0 && z < roam.z1 && canWalk(x, z)) {
        animal.target = { x, z }
        return
      }
    }
    animal.target = { x: leader.x, z: leader.z }
  }

  return {
    update(step: number, state: { night: boolean; reduced: boolean }) {
      for (const animal of animals) {
        // 万一卡进障碍盒里：直接挪回出生点，别让它原地僵住
        if (!canWalk(animal.x, animal.z)) { animal.x = animal.home.x; animal.z = animal.home.z }
        animal.timer -= step
        const resting = state.night
        const target = resting
          ? (animal.kind === 'dog' ? { x: FARM.dogHome[0], z: FARM.dogHome[1] } : animal.home)
          : animal.target
        if (animal.timer <= 0 && !resting) {
          retarget(animal)
          const [low, high] = animal.kind === 'dog' ? FARM.dogRetarget
            : animal.kind === 'sheep' ? FARM.sheepRetarget : [2.5, 4] as const
          animal.timer = low + random() * (high - low)
        }
        const point = waypoint(animal, target)
        const dx = point.x - animal.x
        const dz = point.z - animal.z
        const distance = Math.hypot(dx, dz)
        const speed = animal.kind === 'dog' ? FARM.dogSpeed
          : animal.kind === 'sheep' ? FARM.sheepSpeed : FARM.cowSpeed
        if (distance > 0.06 && !(resting && distance < 0.2)) {
          const move = Math.min(speed * step, distance)
          const nx = animal.x + dx / distance * move
          const nz = animal.z + dz / distance * move
          let moved = 0
          if (canWalk(nx, nz)) { moved = Math.hypot(nx - animal.x, nz - animal.z); animal.x = nx; animal.z = nz }
          else if (canWalk(nx, animal.z)) { moved = Math.abs(nx - animal.x); animal.x = nx }
          else if (canWalk(animal.x, nz)) { moved = Math.abs(nz - animal.z); animal.z = nz }
          else animal.timer = 0
          if (moved > 1e-4) {
            animal.yaw += Math.atan2(Math.sin(Math.atan2(dx, dz) - animal.yaw),
              Math.cos(Math.atan2(dx, dz) - animal.yaw)) * Math.min(1, step * 8)
          }
          animal.speed = state.reduced ? 0 : moved / Math.max(step, 1e-4)
        } else {
          animal.speed = 0
          // 到点了：狗和羊立刻再挑一个新的地方，别站着发呆
          animal.timer = Math.min(animal.timer, 0.15)
        }
        const lying = state.night && animal.speed < 0.02
        animal.root.position.set(animal.x, DECK, animal.z)
        animal.root.rotation.y = animal.yaw
        animal.root.scale.y = lying ? 0.82 : 1
        animal.phase += (state.reduced ? 0 : step) * animal.speed * 9
        const swing = state.reduced ? 0 : Math.sin(animal.phase) * Math.min(0.4, animal.speed * 0.3)
        animal.legs.forEach((leg, index) => { leg.rotation.x = index % 2 ? swing : -swing })
        animal.head.rotation.x = lying ? 0.25 : Math.sin(animal.phase * 0.5) * 0.05
      }
    },
  }
}
