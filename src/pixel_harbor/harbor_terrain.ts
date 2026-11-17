import { VILLAGE } from './harbor_exploration_config'
import { hillElevation } from '../harbor_expansion/harbor-hill-config'

export const DECK = 0.65
export const VILLAGE_PATHS = [VILLAGE.ramp, VILLAGE.terrace] as const
const pathArea = VILLAGE_PATHS.reduce((area, [left, right, near, far]) => area + (right - left) * (far - near), 0)
if (pathArea > VILLAGE.maxAddedArea) throw new RangeError('后村地形超出配置的面积上限')

export function groundElevation(x: number, z: number) {
  const hill = hillElevation(x,z)
  if (hill) return hill
  const [left, right, near, far] = VILLAGE.ramp
  if (x >= left && x <= right && z >= near && z <= far) {
    return (VILLAGE.upperY - DECK) * Math.min(1, (z - near) / (VILLAGE.terrace[2] - near))
  }
  const [minX, maxX, minZ, maxZ] = VILLAGE.terrace
  return x >= minX && x <= maxX && z >= minZ && z <= maxZ ? VILLAGE.upperY - DECK : 0
}

export function cameraFloor(x: number, z: number, terrain: readonly (readonly number[])[]) {
  for (const [left, right, near, far] of terrain) {
    if (x >= left && x <= right && z >= near && z <= far) return DECK + groundElevation(x, z)
  }
  return 0
}
