import { FISHING, WISHING } from '../harbor_pastimes/harbor-pastimes-config'
import { MOVEMENT } from './harbor_movement_config'
import { evalStation } from './eval_station_config'
import { SAILING } from './harbor_sailing_config'
import { PROFILE_UI } from './harbor_profile'
import { CAPTAIN } from './harbor_captain_config'
import { LOOKOUT, SUNSET, VILLAGE } from './harbor_exploration_config'
import { DECK, VILLAGE_PATHS } from './harbor_terrain'
import { HILL } from '../harbor_expansion/harbor-hill-config'

export type Footprint = readonly [minX: number, maxX: number, minZ: number, maxZ: number]
export type WorldObstacle = { footprint: Footprint; height?: number }

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
export const WALKABLE: readonly Footprint[] = [PIER, LANDING, WEST_BANK, HEADLAND, SOUTH_QUAY, EAST_DOCK,
  ...VILLAGE_PATHS, ...HILL.footprints]

const RESPAWN_POINTS = [
  SPAWN, { x: 6.6, z: 0.25 }, { x: 12.8, z: -0.45 }, { x: -16, z: 0.6 },
  { x: -7, z: -17 }, { x: -14.4, z: 8 }, { x: -10, z: 13.8 },
  VILLAGE.position, SUNSET.position, HILL.position,
]

export const HARBOR_DESTINATIONS = {
  fishing: FISHING.place,
  wishing: WISHING.place,
  portfolio: { kind: 'portfolio', id: 'portfolio', label: '查看作品集', x: 4.8, z: -1.05, radius: 2.4 },
  notice: { kind: 'notice', id: 'notice', label: '查看公告', x: -15.8, z: -1.9, radius: 2.5 },
  eval: { kind: 'eval', id: 'eval', label: evalStation.prompt, x: -10.8, z: 14.95, radius: 2.2 },
  mayor: { kind: 'mayor', id: PROFILE_UI.id, label: PROFILE_UI.action, ...PROFILE_UI.position, radius: PROFILE_UI.radius },
  lookout: { kind: 'lookout', id: LOOKOUT.id, label: LOOKOUT.action, ...LOOKOUT.position, radius: LOOKOUT.exitRadius },
  sunset: { kind: 'sunset', id: SUNSET.id, label: SUNSET.action, ...SUNSET.position, radius: SUNSET.radius },
  village: { kind: 'landmark', id: VILLAGE.id, label: VILLAGE.title, ...VILLAGE.position,
    radius: VILLAGE.radius, note: VILLAGE.note },
  captain: { kind: 'captain', id: CAPTAIN.id, label: CAPTAIN.action, ...CAPTAIN.position, radius: CAPTAIN.radius },
  hill: { kind: 'landmark', id: HILL.id, label: HILL.title, ...HILL.position, radius: HILL.radius, note: HILL.caption },
} as const

export const LANDMARKS = [
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
  return contains(WATER.bounds, feet[0], feet[2]) && contains(WATER.bounds, feet[1], feet[3])
    && !WATER.cells.some(cell => overlaps(feet, cell))
    && !obstacles.some(obstacle => (obstacle.height === undefined || height < obstacle.height)
      && overlaps(feet, obstacle.footprint))
}

export function findSupportHeight(x: number, z: number, { obstacles, height }: {
  obstacles: readonly WorldObstacle[]; height: number
}) {
  const feet = playerFootprint(x, z)
  let floor = 0
  for (const obstacle of obstacles) {
    if (obstacle.height !== undefined && obstacle.height <= height && overlaps(feet, obstacle.footprint)) {
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
