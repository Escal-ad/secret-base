import * as T from 'three'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'
import { isLandAt } from '../pixel_harbor/harbor_heightmap'
import { seededRandom } from '../pixel_harbor/harbor_materials'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 岬角西南角那片草地上的竹林 + 三只大熊猫。
// 位置以用户站的 (-25.25, -21.52) 为中心，竹林铺在 z -24.6 ~ -17 这一段草地上，
// 只种在能站的格子上（北边是海，自动跳过）。
export const BAMBOO = {
  center: { x: -25.25, z: -21.52 },
  area: { x0: -29.2, x1: -21.3, z0: -24.4, z1: -17.2 },
  count: 36,
  height: [4.6, 7.2] as const,
  seed: 7731,
  pandaCount: 3,
  pandaWalk: 0.55,
  climbSpeed: 0.32,
  sitTime: [5, 10] as const,
  topTime: [6, 11] as const,
} as const

const STALK: Paint = ['#8aae5f']
const STALK_DARK: Paint = ['#7a9c53']
const LEAF: Paint = ['#6f9e52', 'grass']
const FUR_WHITE: Paint = ['#efe9df']
const FUR_BLACK: Paint = ['#2f2b28']
const FENCE_POST: Paint = ['#7d6248', 'wood']
const FENCE_RAIL: Paint = ['#94775a', 'wood']

// 竹林外圈的木栏：四面围起来，南边（靠近村子那一侧）留一个 2.6 米宽的门。
export const BAMBOO_FENCE = {
  x0: -29.2, x1: -21.3, z0: -24.4, z1: -17.2,
  gateWidth: 2.6, height: 1.0,
} as const

export const BAMBOO_FENCE_OBSTACLES: [number, number, number, number][] = (() => {
  const { x0, x1, z0, z1, gateWidth } = BAMBOO_FENCE
  const gate = BAMBOO.center.x
  const half = gateWidth / 2
  const t = 0.14
  return [
    [x0 - t, x1 + t, z0 - t, z0 + t],
    [x0 - t, x0 + t, z0, z1],
    [x1 - t, x1 + t, z0, z1],
    [x0 - t, gate - half, z1 - t, z1 + t],
    [gate + half, x1 + t, z1 - t, z1 + t],
  ]
})()

/** 竹林外圈的围栏：柱距 1.5 米、两道横杆，和羊圈牛圈同一套木作。 */
export function addBambooFence(group: T.Object3D, kit: ModelKit) {
  const { x0, x1, z0, z1, gateWidth, height } = BAMBOO_FENCE
  const gate = BAMBOO.center.x
  const half = gateWidth / 2
  const run = (ax: number, az: number, bx: number, bz: number) => {
    const length = Math.hypot(bx - ax, bz - az)
    const posts = Math.max(2, Math.round(length / 1.5) + 1)
    for (let index = 0; index < posts; index += 1) {
      const t = index / (posts - 1)
      group.add(kit.box([ax + (bx - ax) * t, DECK + height / 2, az + (bz - az) * t],
        [height / 9, height, height / 9], FENCE_POST))
    }
    for (const y of [0.36, 0.74]) {
      group.add(kit.beam([[ax, DECK + y, az], [bx, DECK + y, bz]], 0.07, FENCE_RAIL))
    }
  }
  run(x0, z0, x1, z0)
  run(x0, z0, x0, z1)
  run(x1, z0, x1, z1)
  run(x0, z1, gate - half, z1)
  run(gate + half, z1, x1, z1)
  for (const side of [-1, 1]) {
    group.add(kit.box([gate + side * half, DECK + height * 0.62, z1], [0.2, height * 1.24, 0.2], FENCE_POST))
  }
}

/** 飘落的竹叶：细长青绿色叶片从竹林顶上落下来，边落边打转。 */
export function createBambooLeaves(scene: T.Scene, count = 30) {
  const random = seededRandom(9187)
  const leafColors = ['#7fa855', '#93b96a', '#6b9448'] as const
  const leaves = Array.from({ length: count }, (_, index) => {
    const material = new T.MeshBasicMaterial({ color: leafColors[index % leafColors.length], side: T.DoubleSide })
    const mesh = new T.Mesh(new T.BoxGeometry(), material)
    mesh.raycast = () => {}
    scene.add(mesh)
    return { mesh, offset: random() * 5, angle: random() * Math.PI * 2,
      x: BAMBOO.area.x0 + random() * (BAMBOO.area.x1 - BAMBOO.area.x0),
      z: BAMBOO.area.z0 + random() * (BAMBOO.area.z1 - BAMBOO.area.z0),
      spin: 0.7 + random() * 1.6, size: 0.16 + random() * 0.12 }
  })
  let time = 0
  return {
    update(step: number, reduced: boolean) {
      time += step
      for (const leaf of leaves) {
        if (reduced) { leaf.mesh.visible = false; continue }
        leaf.mesh.visible = true
        const fall = (time * 0.42 + leaf.offset) % 5
        const sway = Math.sin(time * 0.9 + leaf.angle) * 0.5
        leaf.mesh.position.set(leaf.x + sway, DECK + 5.4 - fall, leaf.z + Math.cos(time * 0.7 + leaf.angle) * 0.4)
        leaf.mesh.rotation.set(time * leaf.spin + leaf.angle, time * leaf.spin * 0.6, sway)
        leaf.mesh.scale.set(leaf.size * 0.5, leaf.size * 0.1, leaf.size)
      }
    },
  }
}

type Stalk = { x: number; z: number; height: number; lean: number }

function makeStalks(): Stalk[] {
  const random = seededRandom(BAMBOO.seed)
  const stalks: Stalk[] = []
  let guard = 0
  while (stalks.length < BAMBOO.count && guard < BAMBOO.count * 40) {
    guard += 1
    const x = BAMBOO.area.x0 + random() * (BAMBOO.area.x1 - BAMBOO.area.x0)
    const z = BAMBOO.area.z0 + random() * (BAMBOO.area.z1 - BAMBOO.area.z0)
    if (!isLandAt(x, z)) continue
    const height = BAMBOO.height[0] + random() * (BAMBOO.height[1] - BAMBOO.height[0])
    stalks.push({ x, z, height, lean: (random() - 0.5) * 0.14 })
  }
  return stalks
}

/** 竹林：两根 InstancedMesh（竹竿 + 竹叶），一共两个 draw call，并且不进高度图。 */
export function addBamboo(scene: T.Scene, kit: ModelKit) {
  const stalks = makeStalks()
  const dummy = new T.Object3D()

  const stalkGeometry = new T.CylinderGeometry(0.085, 0.12, 1, 6)
  const stalkMesh = new T.InstancedMesh(stalkGeometry, kit.surface(...STALK), stalks.length)
  stalkMesh.frustumCulled = false
  stalkMesh.raycast = () => {}
  const leafProto = kit.box([0, 0, 0], [1, 1, 1], LEAF)
  const leafMesh = new T.InstancedMesh(leafProto.geometry, leafProto.material, stalks.length * 3)
  leafMesh.frustumCulled = false
  leafMesh.raycast = () => {}

  stalks.forEach((stalk, index) => {
    const base = DECK + groundElevation(stalk.x, stalk.z)
    dummy.position.set(stalk.x, base + stalk.height / 2, stalk.z)
    dummy.rotation.set(stalk.lean, 0, stalk.lean * 0.6)
    dummy.scale.set(1, stalk.height, 1)
    dummy.updateMatrix()
    stalkMesh.setMatrixAt(index, dummy.matrix)
    for (let leaf = 0; leaf < 3; leaf += 1) {
      const yaw = (index * 1.7 + leaf * 2.1) % (Math.PI * 2)
      const y = base + stalk.height * (0.62 + leaf * 0.13)
      dummy.position.set(stalk.x + Math.cos(yaw) * 0.45, y, stalk.z + Math.sin(yaw) * 0.45)
      dummy.rotation.set(0, yaw, 0)
      dummy.scale.set(1.05, 0.1, 0.55)
      dummy.updateMatrix()
      leafMesh.setMatrixAt(index * 3 + leaf, dummy.matrix)
    }
  })
  stalkMesh.instanceMatrix.needsUpdate = true
  leafMesh.instanceMatrix.needsUpdate = true
  scene.add(stalkMesh, leafMesh)
  return { stalks }
}

type Panda = {
  root: T.Group; legs: T.Mesh[]; head: T.Mesh; snack: T.Mesh
  x: number; z: number; yaw: number; phase: number
  state: 'walk' | 'sit' | 'climb'
  timer: number; climb: number; goingUp: boolean; stalk: Stalk | null
  target: { x: number; z: number }
}

function makePanda(kit: ModelKit) {
  const root = new T.Group()
  const legs: T.Mesh[] = []
  root.add(kit.box([0, 0.62, 0], [0.95, 0.72, 1.22], FUR_WHITE))
  root.add(kit.box([0, 0.62, -0.2], [0.97, 0.5, 0.62], FUR_BLACK))
  const head = kit.box([0, 1.08, -0.86], [0.56, 0.5, 0.5], FUR_WHITE)
  root.add(head)
  for (const side of [-1, 1]) {
    root.add(kit.box([side * 0.26, 1.34, -0.86], [0.16, 0.16, 0.1], FUR_BLACK))
    root.add(kit.box([side * 0.16, 1.1, -1.11], [0.15, 0.16, 0.04], FUR_BLACK))
    root.add(kit.box([side * 0.3, 0.62, -0.42], [0.18, 0.62, 0.18], FUR_BLACK))
  }
  root.add(kit.box([0, 0.52, -1.05], [0.16, 0.12, 0.12], FUR_BLACK))
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]] as const) {
    const leg = kit.box([sx * 0.3, 0.18, sz * 0.4], [0.22, 0.36, 0.22], FUR_BLACK)
    legs.push(leg); root.add(leg)
  }
  // 手里那根竹枝：坐着啃竹子的时候摇头晃脑
  const snack = kit.box([0.34, 0.86, -1.16], [0.07, 0.07, 1.1], STALK_DARK)
  snack.rotation.x = 0.5
  root.add(snack)
  return { root, legs, head, snack }
}

export function createPandas(scene: T.Scene, kit: ModelKit, stalks: Stalk[]) {
  const random = seededRandom(2917)
  const pandas: Panda[] = []
  for (let index = 0; index < BAMBOO.pandaCount; index += 1) {
    const built = makePanda(kit)
    const angle = index * 2.1 + 0.6
    const x = BAMBOO.center.x + Math.cos(angle) * 2.6
    const z = BAMBOO.center.z + Math.sin(angle) * 1.6
    built.root.rotation.order = 'YXZ'
    scene.add(built.root)
    pandas.push({ root: built.root, legs: built.legs, head: built.head, snack: built.snack,
      x, z, yaw: random() * Math.PI * 2, phase: 0, state: 'sit',
      timer: 3 + random() * 4, climb: 0, goingUp: true, stalk: null,
      target: { x, z } })
  }

  const pickSpot = () => ({
    x: BAMBOO.area.x0 + 1 + random() * (BAMBOO.area.x1 - BAMBOO.area.x0 - 2),
    z: BAMBOO.area.z0 + 1 + random() * (BAMBOO.area.z1 - BAMBOO.area.z0 - 2),
  })

  return {
    update(step: number, state: { night: boolean; reduced: boolean }) {
      const climbing = pandas.filter(panda => panda.state === 'climb').length
      for (const panda of pandas) {
        let y = 0
        if (panda.state === 'climb' && panda.stalk) {
          const distance = Math.hypot(panda.stalk.x - panda.x, panda.stalk.z - panda.z)
          if (panda.climb === 0 && distance > 0.55) {
            // 还没到竹子底下：先走过去
            const heading = Math.atan2(panda.stalk.x - panda.x, panda.stalk.z - panda.z)
            const move = Math.min(BAMBOO.pandaWalk * step, distance)
            panda.x += Math.sin(heading) * move
            panda.z += Math.cos(heading) * move
            panda.yaw += Math.atan2(Math.sin(heading - panda.yaw), Math.cos(heading - panda.yaw)) * Math.min(1, step * 8)
          } else if (panda.goingUp) {
            panda.climb = Math.min(1, panda.climb + step * BAMBOO.climbSpeed)
            if (panda.climb >= 1) {
              // 到顶了：坐在竹梢上啃一会儿
              panda.timer -= step
              if (panda.timer <= 0) panda.goingUp = false
            }
          } else {
            panda.climb = Math.max(0, panda.climb - step * BAMBOO.climbSpeed * 1.4)
            if (panda.climb === 0) {
              panda.state = 'sit'
              panda.timer = BAMBOO.sitTime[0] + random() * (BAMBOO.sitTime[1] - BAMBOO.sitTime[0])
              panda.stalk = null
            }
          }
          y = panda.climb * Math.max(0, (panda.stalk?.height ?? 0) - 1.5)
        } else if (panda.state === 'walk') {
          const distance = Math.hypot(panda.target.x - panda.x, panda.target.z - panda.z)
          const heading = Math.atan2(panda.target.x - panda.x, panda.target.z - panda.z)
          const move = Math.min(BAMBOO.pandaWalk * step, distance)
          if (distance > 0.2) {
            panda.x += Math.sin(heading) * move
            panda.z += Math.cos(heading) * move
            panda.yaw += Math.atan2(Math.sin(heading - panda.yaw), Math.cos(heading - panda.yaw)) * Math.min(1, step * 7)
          } else {
            panda.state = 'sit'
            panda.timer = BAMBOO.sitTime[0] + random() * (BAMBOO.sitTime[1] - BAMBOO.sitTime[0])
          }
          panda.phase += (state.reduced ? 0 : step) * 9
        } else {
          // 坐着吃竹子
          panda.timer -= step
          panda.phase += (state.reduced ? 0 : step) * 2.2
          if (panda.timer <= 0) {
            // 坐够了：要么站起来走走，要么找根竹子爬上去（同时最多一只在树上）
            if (climbing === 0 && stalks.length > 0 && random() < 0.55) {
              panda.state = 'climb'
              panda.climb = 0
              panda.goingUp = true
              panda.stalk = stalks[Math.floor(random() * stalks.length)]
              panda.timer = BAMBOO.topTime[0] + random() * (BAMBOO.topTime[1] - BAMBOO.topTime[0])
            } else {
              panda.state = 'walk'
              panda.target = pickSpot()
            }
          }
        }
        const base = DECK + groundElevation(panda.x, panda.z)
        panda.root.position.set(panda.x, base + y, panda.z)
        panda.root.rotation.y = panda.yaw
        panda.root.rotation.x = panda.state === 'climb' ? -0.18 : 0
        panda.snack.visible = panda.state === 'sit'
        const swing = state.reduced ? 0 : Math.sin(panda.phase) * 0.22
        panda.legs.forEach((leg, index) => { leg.rotation.x = index % 2 ? swing : -swing })
        panda.head.rotation.x = panda.state === 'sit' ? 0.18 + Math.sin(panda.phase * 0.8) * 0.08 : 0
      }
    },
  }
}
