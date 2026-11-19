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

/** 村里的梯田是分层的，groundElevation 只给了第 0 层的高度；
 * 这个函数按 z 分段算出真正那一层的台面高度（含地面铺层）。 */
export function surfaceY(x: number, z: number) {
  const base = DECK + groundElevation(x, z)
  if (x >= -30 && x <= 12 && z >= 23.05) {
    const tier = z < 28.3 ? 0 : z < 33.6 ? 1 : z < 38.9 ? 2 : 3
    const width = 39 - tier * 2.8
    if (x >= -9 - width / 2 && x <= -9 + width / 2) return 2 + tier * 1.52 + 0.03
  }
  return base
}

export function cameraFloor(x: number, z: number, terrain: readonly (readonly number[])[]) {
  for (const [left, right, near, far] of terrain) {
    if (x >= left && x <= right && z >= near && z <= far) return DECK + groundElevation(x, z)
  }
  return 0
}
