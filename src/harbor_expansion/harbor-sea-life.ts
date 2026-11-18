import * as T from 'three'
import { seededRandom } from '../pixel_harbor/harbor_materials'
import type { ModelKit } from '../pixel_harbor/harbor_models'

// 东侧海面的小动静：几只低空悬停、隔一阵朝水面喷水的海鸥，
// 加上周期性从水里窜出来的一大群鱼。三类东西各用一个 InstancedMesh 画，一共三个 draw call。
export const SEA_LIFE = {
  center: { x: 30.96, z: -16.48 },
  innerRadius: 8,
  radius: 22,
  gulls: 3,
  fish: 26,
  gullHeight: 1.95,
  spoutPeriod: 9,
  spoutLife: 1.3,
  burstPeriod: 9.5,
  burstLife: 2.6,
  gravity: 9.4,
  launch: { min: 1.0, max: 3.4 },
  lift: { min: 4.6, max: 7.4 },
  delay: 0.42,
  // 东边那片小岛就在这一带，鱼群和海鸥不要落在它上面。
  keepOut: [34.6, 51.4, -24.4, -11.6],
  colors: { fish: '#a8c3cc', gull: '#f1e5ce', water: '#dcf0ee' },
} as const

type Spot = { x: number; z: number; yaw: number }

const HIDDEN_Y = -60

function rejected(x: number, z: number) {
  const [minX, maxX, minZ, maxZ] = SEA_LIFE.keepOut
  return x >= minX && x <= maxX && z >= minZ && z <= maxZ
}

function scatter(count: number, seed: number): Spot[] {
  const random = seededRandom(seed)
  const spots: Spot[] = []
  while (spots.length < count) {
    const angle = random() * Math.PI * 2
    const distance = SEA_LIFE.innerRadius + random() * (SEA_LIFE.radius - SEA_LIFE.innerRadius)
    const x = SEA_LIFE.center.x + Math.cos(angle) * distance
    const z = SEA_LIFE.center.z + Math.sin(angle) * distance
    if (!rejected(x, z)) spots.push({ x, z, yaw: random() * Math.PI * 2 })
  }
  return spots
}

const GULL_SPOTS = scatter(SEA_LIFE.gulls, 331)
const FISH_ORIGINS = scatter(6, 977)

const pose = { x: 0, y: 0, z: 0, yaw: 0, sx: 1, sy: 1, sz: 1 }
const dummy = new T.Object3D()

function place(mesh: T.InstancedMesh, index: number) {
  dummy.position.set(pose.x, pose.y, pose.z)
  dummy.rotation.set(0, pose.yaw, 0)
  dummy.scale.set(pose.sx, pose.sy, pose.sz)
  dummy.updateMatrix()
  mesh.setMatrixAt(index, dummy.matrix)
}

function hide(mesh: T.InstancedMesh, index: number) {
  Object.assign(pose, { x: 0, y: HIDDEN_Y, z: 0, yaw: 0, sx: 0.001, sy: 0.001, sz: 0.001 })
  place(mesh, index)
}

function instanced(scene: T.Scene, kit: ModelKit, color: string, count: number) {
  const proto = kit.box([0, HIDDEN_Y, 0], [1, 1, 1], [color])
  const mesh = new T.InstancedMesh(proto.geometry, proto.material, count)
  mesh.frustumCulled = false
  mesh.count = count
  // 动画物体不进地形高度图：否则水面上的海鸥和鱼会被烘成"能站的格子"。
  mesh.raycast = () => {}
  scene.add(mesh)
  return mesh
}

/** 鱼群：每过一个周期换一处水面，整群鱼沿抛物线窜出水面再落回去。 */
function writeFish(mesh: T.InstancedMesh, elapsed: number) {
  const cycle = Math.floor(elapsed / SEA_LIFE.burstPeriod)
  const local = elapsed - cycle * SEA_LIFE.burstPeriod
  const origin = FISH_ORIGINS[cycle % FISH_ORIGINS.length]
  const random = seededRandom(917 + cycle * 37)
  for (let index = 0; index < SEA_LIFE.fish; index++) {
    const angle = random() * Math.PI * 2
    const speed = SEA_LIFE.launch.min + random() * (SEA_LIFE.launch.max - SEA_LIFE.launch.min)
    const lift = SEA_LIFE.lift.min + random() * (SEA_LIFE.lift.max - SEA_LIFE.lift.min)
    const t = local - random() * SEA_LIFE.delay
    const y = lift * t - SEA_LIFE.gravity * t * t / 2
    const head = index * 2
    if (t <= 0 || y <= 0) { hide(mesh, head); hide(mesh, head + 1); continue }
    const x = origin.x + Math.cos(angle) * speed * t
    const z = origin.z + Math.sin(angle) * speed * t
    Object.assign(pose, { x, y, z, yaw: -angle, sx: 0.2, sy: 0.3, sz: 0.62 })
    place(mesh, head)
    Object.assign(pose, { x: x - Math.cos(angle) * 0.36, y, z: z - Math.sin(angle) * 0.36,
      yaw: -angle, sx: 0.14, sy: 0.22, sz: 0.3 })
    place(mesh, head + 1)
  }
  mesh.instanceMatrix.needsUpdate = true
}

/** 海鸥：悬停、扇翅膀，隔一阵朝水面喷一道水柱，水面上再溅一个圈。 */
function writeGulls(gullMesh: T.InstancedMesh, spoutMesh: T.InstancedMesh, elapsed: number) {
  for (let index = 0; index < SEA_LIFE.gulls; index++) {
    const spot = GULL_SPOTS[index]
    const y = SEA_LIFE.gullHeight + Math.sin(elapsed * 0.85 + index * 1.9) * 0.18
    const flap = Math.sin(elapsed * 5.2 + index) * 0.1
    Object.assign(pose, { x: spot.x, y, z: spot.z, yaw: spot.yaw, sx: 0.3, sy: 0.2, sz: 0.44 })
    place(gullMesh, index * 3)
    for (const side of [-1, 1]) {
      Object.assign(pose, { x: spot.x + side * 0.24, y: y + flap, z: spot.z,
        yaw: spot.yaw, sx: 0.28, sy: 0.07, sz: 0.26 })
      place(gullMesh, index * 3 + (side > 0 ? 2 : 1))
    }
    const phase = (elapsed + index * 3.1) % SEA_LIFE.spoutPeriod
    const rise = phase < SEA_LIFE.spoutLife ? Math.sin(phase / SEA_LIFE.spoutLife * Math.PI) : 0
    Object.assign(pose, { x: spot.x, y: y * rise / 2, z: spot.z, yaw: 0,
      sx: 0.12, sy: Math.max(0.001, y * rise), sz: 0.12 })
    place(spoutMesh, index * 2)
    Object.assign(pose, { x: spot.x, y: 0.04, z: spot.z, yaw: 0,
      sx: 0.4 * rise + 0.001, sy: 0.05, sz: 0.4 * rise + 0.001 })
    place(spoutMesh, index * 2 + 1)
  }
  gullMesh.instanceMatrix.needsUpdate = true
  spoutMesh.instanceMatrix.needsUpdate = true
}

export function createHarborSeaLife(scene: T.Scene, kit: ModelKit) {
  const gullMesh = instanced(scene, kit, SEA_LIFE.colors.gull, SEA_LIFE.gulls * 3)
  const spoutMesh = instanced(scene, kit, SEA_LIFE.colors.water, SEA_LIFE.gulls * 2)
  const fishMesh = instanced(scene, kit, SEA_LIFE.colors.fish, SEA_LIFE.fish * 2)
  function update(elapsed: number, state: { reduced: boolean }) {
    // 减少动态时不出鱼群，只留静止悬停的海鸥。
    if (state.reduced) for (let i = 0; i < SEA_LIFE.fish * 2; i++) hide(fishMesh, i)
    else writeFish(fishMesh, elapsed)
    writeGulls(gullMesh, spoutMesh, elapsed)
  }
  // 先摆一次，避免第一帧所有实例还堆在原点。
  update(0, { reduced: false })
  return { update }
}
