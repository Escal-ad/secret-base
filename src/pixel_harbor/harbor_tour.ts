import { TOUR } from './harbor_captain_config'
import { dampAngle, dampingFactor } from './harbor_damping'
import type { createHarborSailing } from './harbor_sailing'

export type TourCue = { title: string; caption: string; lookAt?: readonly [number, number, number] }
export type TourEvent = 'finish' | 'blocked'
type Sailing = ReturnType<typeof createHarborSailing>

function advanceToward(sailing: Sailing, target: { x: number; z: number; wait: number }, step: number) {
  const ship = sailing.vessel
  const dx = target.x - ship.x
  const dz = target.z - ship.z
  const remaining = Math.hypot(dx, dz)
  if (remaining <= TOUR.positionTolerance) return 'arrived'
  const desired = target.wait ? Math.min(TOUR.speed, Math.max(0.8, remaining * 1.6)) : TOUR.speed
  const speed = ship.speed + (desired - ship.speed) * dampingFactor(step, TOUR.startResponse)
  const yaw = dampAngle(ship.yaw, Math.atan2(dx, dz), dampingFactor(step, TOUR.turnSeconds))
  const movement = Math.min(remaining, speed * step)
  const point = { x: ship.x + dx * movement / remaining, z: ship.z + dz * movement / remaining, yaw, speed }
  return sailing.followRoute(point, step) ? 'moving' : 'blocked'
}

export function createHarborTour(sailing: Sailing, onCue: (cue: TourCue | null) => void) {
  let index = 0
  let wait = 0
  let ended = false
  return {
    start() { index = 0; wait = 0; ended = false; sailing.startTour() },
    update(step: number): TourEvent | null {
      if (ended || !step) return null
      if (wait > 0) {
        wait = Math.max(0, wait - step)
        if (!wait) onCue(null)
        return null
      }
      const point = TOUR.route[index]
      const result = advanceToward(sailing, point, step)
      if (result === 'blocked') { ended = true; return 'blocked' }
      if (result === 'moving') return null
      index++
      if (index >= TOUR.route.length) { ended = true; return 'finish' }
      if (point.wait) {
        sailing.stop()
        wait = point.wait
        onCue({ title: point.title, caption: point.caption || '待填写', lookAt: 'lookAt' in point ? point.lookAt : undefined })
      }
      return null
    },
    stop() { ended = true; onCue(null); return sailing.finishTour() },
  }
}
