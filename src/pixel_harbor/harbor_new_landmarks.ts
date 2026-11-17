import * as T from 'three'
import { PROFILE_UI } from './harbor_profile'
import { KEEPER, SUNSET, VILLAGE } from './harbor_exploration_config'
import type { Footprint } from './harbor_layout'
import { makeCanvas, pixelTexture } from './harbor_materials'
import type { ModelKit, Paint } from './harbor_models'
import { DECK, groundElevation } from './harbor_terrain'

const TRAIL: Paint = ['#b28b63', 'wood']
const RAIL: Paint = ['#88664e', 'wood']
const BENCH_RADIUS = 0.56
const RAIL_DEPTH = 0.12
const SIGN_COLOR = '#8a694c'
const SIGN_TEXT = '#fff0d4'
const RAILS = [
  { x: -18, near: 23.3, far: VILLAGE.terrace[3] },
  { x: VILLAGE.terrace[1], near: 24.0, far: VILLAGE.terrace[3] },
]
const RAMP_RAILS = [VILLAGE.ramp[0], VILLAGE.ramp[1]].map((x): Footprint =>
  [x - RAIL_DEPTH / 2, x + RAIL_DEPTH / 2, VILLAGE.ramp[2], VILLAGE.terrace[2]])

function nameplate(text: string, position: [number, number, number], yaw: number) {
  const { canvas, context } = makeCanvas(144, 35)
  context.fillStyle = SIGN_COLOR
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = SIGN_TEXT
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.font = 'bold 19px "Microsoft YaHei", sans-serif'
  context.fillText(text, canvas.width / 2, canvas.height / 2)
  const sign = new T.Mesh(new T.PlaneGeometry(1.38, 0.34),
    new T.MeshBasicMaterial({ map: pixelTexture(canvas), side: T.DoubleSide }))
  sign.position.set(...position)
  sign.rotation.y = yaw
  return sign
}

function addTrail(group: T.Group, kit: ModelKit) {
  const [left, right, start] = VILLAGE.ramp
  const high = VILLAGE.terrace[2]
  const climb = VILLAGE.upperY - DECK
  const rise = Math.atan2(climb, high - start)
  const ramp = kit.box([(left + right) / 2, DECK + climb / 2 - 0.07, (high + start) / 2],
    [right - left, 0.14, Math.hypot(climb, high - start) + 0.1], TRAIL)
  ramp.rotation.x = -rise
  group.add(ramp)
  for (const x of [left, right]) {
    group.add(kit.beam([[x, DECK + 0.45, start], [x, VILLAGE.upperY + 0.45, high]], RAIL_DEPTH, RAIL))
    group.add(kit.box([x, DECK + 0.22, start], [0.15, 0.48, 0.16], RAIL))
    group.add(kit.box([x, VILLAGE.upperY + 0.22, high], [0.15, 0.48, 0.16], RAIL))
  }
  group.add(kit.box([-4.05, VILLAGE.upperY + 0.012, 23.75], [27.8, 0.024, 1.20], ['#b29b7d', 'brick']))
  for (const { x, near, far } of RAILS) {
    group.add(kit.beam([[x, VILLAGE.upperY + 0.49, near], [x, VILLAGE.upperY + 0.49, far]], RAIL_DEPTH, RAIL))
    for (const z of [near, (near + far) / 2, far]) group.add(kit.box([x, VILLAGE.upperY + 0.26, z], [0.15, 0.53, 0.16], RAIL))
  }
  group.add(nameplate(VILLAGE.title, [9.62, 2.35, 23.65], Math.PI))
}

function addBench(group: T.Group, kit: ModelKit) {
  const bench = new T.Group()
  bench.add(kit.box([0, 0.37, 0], [1.03, 0.10, 0.42], TRAIL))
  bench.add(kit.box([0, 0.68, -0.18], [1.03, 0.25, 0.08], RAIL))
  for (const side of [-1, 1]) {
    bench.add(kit.box([side * 0.42, 0.25, 0], [0.10, 0.5, 0.37], RAIL))
  }
  bench.position.set(SUNSET.seat.x, DECK + groundElevation(SUNSET.seat.x,SUNSET.seat.z), SUNSET.seat.z)
  bench.rotation.y = Math.atan2(SUNSET.direction[0], SUNSET.direction[2])
  group.add(bench)
  const { x,z } = SUNSET.sign
  const floor = groundElevation(x,z)
  group.add(nameplate(SUNSET.title, [x, floor+1.56, z], -0.7))
  group.add(kit.box([x, floor+1.10, z], [0.13, 0.92, 0.13], RAIL))
}

export function addHarborLandmarks(world: T.Group, kit: ModelKit) {
  const group = new T.Group()
  addTrail(group, kit)
  addBench(group, kit)
  group.add(nameplate(PROFILE_UI.title, [-22.57, 2.48, -3], Math.PI / 2))
  // 守塔人小屋的牌子挂在屋顶正上方，正面朝海（+z）。
  group.add(nameplate(KEEPER.title, [KEEPER.house.x, DECK + KEEPER.signHeight, KEEPER.house.z - 0.4], 0))
  world.add(group)
}

export const NEW_LANDMARK_OBSTACLES: Footprint[] = [
  [SUNSET.seat.x - BENCH_RADIUS, SUNSET.seat.x + BENCH_RADIUS,
    SUNSET.seat.z - BENCH_RADIUS, SUNSET.seat.z + BENCH_RADIUS],
  [SUNSET.sign.x-0.1, SUNSET.sign.x+0.1, SUNSET.sign.z-0.1, SUNSET.sign.z+0.1],
  ...RAILS.map(({ x, near, far }): Footprint => [x - RAIL_DEPTH, x + RAIL_DEPTH, near, far]),
  ...RAMP_RAILS,
]
