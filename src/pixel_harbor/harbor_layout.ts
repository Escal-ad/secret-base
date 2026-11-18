import { FISHING, WISHING } from '../harbor_pastimes/harbor-pastimes-config'
import { MOVEMENT } from './harbor_movement_config'
import { evalStation } from './eval_station_config'
import { SAILING } from './harbor_sailing_config'
import { PROFILE_UI } from './harbor_profile'
import { CAPTAIN } from './harbor_captain_config'
import { KEEPER, LOOKOUT, SUNSET, VILLAGE } from './harbor_exploration_config'
import { isLandAt, terrainHeightAt } from './harbor_heightmap'
import { DECK, VILLAGE_PATHS } from './harbor_terrain'
import { HILL } from '../harbor_expansion/harbor-hill-config'

export type Footprint = readonly [minX: number, maxX: number, minZ: number, maxZ: number]
// 站在屋顶时 player.height 由浮点减法得出，可能比真实高度小一点点；
// 不加容差会把脚下的建筑误判成墙，导致人在屋顶上一动不能动。
const HEIGHT_EPSILON = 0.02
export type WorldObstacle = {
  footprint: Footprint
  height?: number
  // 只提供站立支撑、不阻挡行走（例如树冠：可以落在树顶，但树干不挡路）。
  supportOnly?: boolean
}

export { DECK }
export const SPAWN = { x: -4, z: 0.65, yaw: -1.02 }
export const PIER: Footprint = [-13, 10, -2.55, 2.55]
export const LANDING: Footprint = [10, 17, -3.65, 3.65]
export const WEST_BANK: Footprint = [-30, -12, -21, 22]
export const HEADLAND: Footprint = [-17, 8, -25, -12]
export const SOUTH_QUAY: Footprint = [-18, 11, 11, 25]
// 东堤：南湾东侧伸进水里的石砌平台，与 SOUTH_QUAY 在 x = 11 处接上。
// 这块石板在 harbor_world 的 addShore 里已经建好，加进 WALKABLE 后水域网格会自动扣除。
export const EAST_DOCK: Footprint = [10.4, 22, 16.1, 19.9]
// 可落脚的外岛（对应 ISLANDS.positions 第 1 与第 4 项），飞到岛上能站稳。
const ISLAND_GROUND: Footprint[] = [[36.6, 49.4, -22.4, -13.6], [46.9, 69.1, 39.7, 54.3]]
export const WALKABLE: readonly Footprint[] = [PIER, LANDING, WEST_BANK, HEADLAND, SOUTH_QUAY, EAST_DOCK, ...ISLAND_GROUND,
  ...VILLAGE_PATHS, ...HILL.footprints]

const RESPAWN_POINTS = [
  SPAWN, { x: 6.6, z: 0.25 }, { x: 12.8, z: -0.45 }, { x: -16, z: 0.6 },
  { x: -7, z: -17 }, { x: -14.4, z: 8 }, { x: -10, z: 13.8 },
  VILLAGE.position, SUNSET.position, HILL.position,
]

export const HARBOR_DESTINATIONS = {
  fishing: FISHING.place,
  wishing: WISHING.place,
  chair: { kind: 'chair', id: 'chair', label: '坐到摇椅上', x: -22.15, z: 0.62, radius: 1.8 },
  notice: { kind: 'notice', id: 'notice', label: '查看公告', x: -15.8, z: -1.9, radius: 2.5 },
  eval: { kind: 'eval', id: 'eval', label: evalStation.prompt, x: -10.8, z: 14.95, radius: 2.2 },
  mayor: { kind: 'mayor', id: PROFILE_UI.id, label: PROFILE_UI.action, ...PROFILE_UI.position, radius: PROFILE_UI.radius },
  lookout: { kind: 'lookout', id: LOOKOUT.id, label: LOOKOUT.action, ...LOOKOUT.position, radius: LOOKOUT.exitRadius },
  sunset: { kind: 'sunset', id: SUNSET.id, label: SUNSET.action, ...SUNSET.position, radius: SUNSET.radius },
  village: { kind: 'landmark', id: VILLAGE.id, label: VILLAGE.title, ...VILLAGE.position,
    radius: VILLAGE.radius, note: VILLAGE.note },
  captain: { kind: 'captain', id: CAPTAIN.id, label: CAPTAIN.action, ...CAPTAIN.position, radius: CAPTAIN.radius },
  hill: { kind: 'landmark', id: HILL.id, label: HILL.title, ...HILL.position, radius: HILL.radius, note: HILL.caption },
  keeper: { kind: 'landmark', id: KEEPER.id, label: KEEPER.action, x: KEEPER.house.x, z: KEEPER.hotspot.z,
    radius: KEEPER.hotspot.radius, note: KEEPER.note },
} as const

export const LANDMARKS = [
  // 这两个只为了在头顶显示名牌；位置与村长 / 钓鱼渔民重合
  { id: 'mayor-name', x: -22.15, z: 0.55, radius: 1.6, label: '村长', note: '村长住在村西的小屋里，最近常在门前的摇椅上打盹。' },
  { id: 'fisher-name', x: 13.5, z: 16.3, radius: 1.6, label: '渔民', note: '每天清早都在这块石堤上钓鱼。' },
  { id: 'sunrise', x: 15.5, z: -0.7, radius: 2, label: '日出观景台', note: '从这里能看到朝阳下的浮标与远航渔船。' },
  ...SAILING.docks.map(dock => ({ id: dock.id, ...dock.land, radius: SAILING.boardingRadius,
    label: dock.title, note: dock.note })),
] as const

function contains([minX, maxX, minZ, maxZ]: Footprint, x: number, z: number) {
  return x >= minX && x <= maxX && z >= minZ && z <= maxZ
}

function buildWaterGrid() {
  const xCuts = [...new Set(WALKABLE.flatMap(([minX, maxX]) => [minX, maxX]))].sort((a, b) => a - b)
  const zCuts = [...new Set(WALKABLE.flatMap(([, , minZ, maxZ]) => [minZ, maxZ]))].sort((a, b) => a - b)
  const cells: Footprint[] = []
  for (let column = 1; column < xCuts.length; column++) {
    for (let row = 1; row < zCuts.length; row++) {
      const cell: Footprint = [xCuts[column - 1], xCuts[column], zCuts[row - 1], zCuts[row]]
      const [left, right, near, far] = cell
      if (!WALKABLE.some(area => contains(area, (left + right) / 2, (near + far) / 2))) cells.push(cell)
    }
  }
  const bounds: Footprint = [xCuts[0], xCuts.at(-1)!, zCuts[0], zCuts.at(-1)!]
  return { bounds, cells }
}

const WATER = buildWaterGrid()

function overlaps([left, right, near, far]: Footprint, [minX, maxX, minZ, maxZ]: Footprint) {
  return left < maxX && right > minX && near < maxZ && far > minZ
}

export function canWalk(x: number, z: number, obstacles: readonly Footprint[]) {
  return canWalkAt(x, z, { obstacles: obstacles.map(footprint => ({ footprint })), height: 0 })
}

function playerFootprint(x: number, z: number, radius = MOVEMENT.playerRadius): Footprint {
  return [x - radius, x + radius, z - radius, z + radius]
}

export function canWalkAt(x: number, z: number, { obstacles, height, radius }: {
  obstacles: readonly WorldObstacle[]; height: number; radius?: number
}) {
  const feet = playerFootprint(x, z, radius)
  const sampled = isLandAt(x, z)
  const onLand = sampled === undefined
    ? contains(WATER.bounds, feet[0], feet[2]) && contains(WATER.bounds, feet[1], feet[3])
      && !WATER.cells.some(cell => overlaps(feet, cell))
    : sampled
  return onLand
    && !obstacles.some(obstacle => !obstacle.supportOnly
      && (obstacle.height === undefined || height + HEIGHT_EPSILON < obstacle.height)
      && overlaps(feet, obstacle.footprint))
}

export function findSupportHeight(x: number, z: number, { obstacles, height }: {
  obstacles: readonly WorldObstacle[]; height: number
}) {
  const feet = playerFootprint(x, z)
  let floor = 0
  // 烘焙高度图直接给出该点的最高面（屋顶、树冠、梯田、地面都包含在内）。
  const terrain = terrainHeightAt(x, z)
  if (terrain !== null) floor = Math.max(floor, terrain - DECK)
  for (const obstacle of obstacles) {
    if (obstacle.height !== undefined && obstacle.height <= height + HEIGHT_EPSILON && overlaps(feet, obstacle.footprint)) {
      floor = Math.max(floor, obstacle.height)
    }
  }
  return floor
}

export function findRespawnPoint(position: { x: number; z: number }, obstacles: readonly Footprint[]) {
  let nearest: { x: number; z: number } | undefined
  let closest = Infinity
  for (const point of RESPAWN_POINTS) {
    const distance = Math.hypot(point.x - position.x, point.z - position.z)
    if (distance >= closest || !canWalk(point.x, point.z, obstacles)) continue
    nearest = point
    closest = distance
  }
  return nearest
}
