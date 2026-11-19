import { DECK, surfaceY } from '../pixel_harbor/harbor_terrain'
import { canWalkAt } from '../pixel_harbor/harbor_layout'
import { WORLD_OBSTACLES } from '../pixel_harbor/harbor_world'

// 晨练：所有武林人士 / 仙侠剑客统一从梯田走木栈道下到西岸这片空地再练。
export const DRILL = { x: -16.72, z: -10.67 } as const

// 从梯田往下走的路线点（木栈道顶部 → 栈道底 → 西岸 → 空地）
export const DRILL_ROUTE = [
  { x: -23.6, z: 38.0 },
  { x: -27.0, z: 24.2 },
  { x: -25.0, z: 12.0 },
  { x: -20.0, z: -3.0 },
  { x: DRILL.x, z: DRILL.z },
] as const

export type DrillPerson = {
  model: { position: { set(x: number, y: number, z: number): void }; rotation: { y: number } }
  home: { x: number; z: number }
  x: number
  z: number
  facing: number
  spot: { x: number; z: number }
  route: number
  exercising: number
}

/** 朝目标点走一步（返回是否已到达），y 自动贴合地形。 */
export function stepTo(person: DrillPerson, target: { x: number; z: number }, step: number,
  speed: number, arrive = 0.5, lift = 0) {
  const dx = target.x - person.x
  const dz = target.z - person.z
  const distance = Math.hypot(dx, dz)
  if (distance <= arrive) return true
  const move = Math.min(speed * step, distance)
  const nx = person.x + dx / distance * move
  const nz = person.z + dz / distance * move
  // 撞到房子/石头就绕：先试单轴滑动，再不行就停在原地
  if (canWalkAt(nx, nz, { obstacles: WORLD_OBSTACLES.map(footprint => ({ footprint, height: 2.2 })), height: 0, radius: 0.28 })) {
    person.x = nx
    person.z = nz
  } else if (canWalkAt(nx, person.z, { obstacles: WORLD_OBSTACLES.map(footprint => ({ footprint, height: 2.2 })), height: 0, radius: 0.28 })) {
    person.x = nx
  } else if (canWalkAt(person.x, nz, { obstacles: WORLD_OBSTACLES.map(footprint => ({ footprint, height: 2.2 })), height: 0, radius: 0.28 })) {
    person.z = nz
  } else {
    return true
  }
  person.facing = Math.atan2(dx, dz)
  person.model.position.set(person.x, surfaceY(person.x, person.z) + lift, person.z)
  person.model.rotation.y = person.facing
  return false
}

/** 白天沿路线下山去晨练场，晚上按原路回门口。 */
export function updateDrill(person: DrillPerson, day: boolean, step: number,
  reduced: boolean, speed: number, mode: 'walk' | 'fly' = 'walk') {
  // 御剑飞行：整个人离地 0.45 米
  const lift = mode === 'fly' ? 0.45 : 0
  if (day) {
    if (person.route < DRILL_ROUTE.length) {
      const waypoint = DRILL_ROUTE[person.route]
      if (stepTo(person, waypoint, step, speed, person.route === DRILL_ROUTE.length - 1 ? 0.8 : 1.2, lift)) {
        person.route += 1
      }
      person.exercising = 0
    } else {
      // 到点了：原地晨练
      if (reduced) return
      person.exercising = Math.min(1, person.exercising + step)
      person.model.position.set(person.x, surfaceY(person.x, person.z)
        + Math.abs(Math.sin(person.exercising * 3)) * 0.07, person.z)
      person.facing += step * 0.45
      person.model.rotation.y = person.facing
    }
    return
  }
  // 夜里：往回走（路线倒着走）
  person.exercising = 0
  if (person.route > 0) {
    const waypoint = DRILL_ROUTE[person.route - 1]
    if (stepTo(person, waypoint, step, speed, 1.0, lift)) person.route -= 1
    return
  }
  stepTo(person, person.home, step, speed * 0.8, 0.6, lift)
}

/** 每个人在操练场的位置（按角度散开，别都挤在一点）。 */
export function drillSpot(index: number, total: number) {
  const angle = (index / Math.max(1, total)) * Math.PI * 2
  return { x: DRILL.x + Math.cos(angle) * 3.2, z: DRILL.z + Math.sin(angle) * 2.6 }
}

export { DECK }
