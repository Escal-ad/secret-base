import { LOOKOUT, SUNSET } from './harbor_exploration_config'
import { TOUR } from './harbor_captain_config'
import { createHarborTour } from './harbor_tour'
import type { TourCue } from './harbor_tour'
import type { HarborPlace } from './harbor_hotspots'
import type { createOrbitCamera } from './harbor_orbit_camera'
import type { createPlayerMotion } from './harbor_player_motion'
import type { createHarborSailing } from './harbor_sailing'
import { SAILING } from './harbor_sailing_config'
import { groundElevation } from './harbor_terrain'

export type HarborActivity = 'lookout' | 'sunset' | 'tour' | 'drive'
export type ActivityAction = HarborActivity | 'leave-lookout' | 'leave-sunset' | 'return-tour' | 'abort-tour' | 'dock' | 'return-drive' | 'board'
type Coordinate = { x: number; z: number }
type Dependencies = {
  motion: ReturnType<typeof createPlayerMotion>; orbit: ReturnType<typeof createOrbitCamera>;
  sailing: ReturnType<typeof createHarborSailing>;
  onMode: (mode: HarborActivity | null) => void;
  onRequest: (action: ActivityAction) => void;
  onCue: (cue: TourCue | null) => void;
  onNotice: (notice: string) => void;
}

function enterSunset(deps: Dependencies, reduced: boolean) {
  const { player } = deps.motion
  const [x, , z] = SUNSET.direction
  const height = groundElevation(SUNSET.seat.x,SUNSET.seat.z)
  Object.assign(player, SUNSET.seat, { elevation: height + SUNSET.seatedElevation, height: 0,
    airborne: false, sitting: true, facing: Math.atan2(x, z) })
  const aim = { x: player.x + x * SUNSET.aimDistance, y: SUNSET.aimHeight + height, z: player.z + z * SUNSET.aimDistance }
  deps.orbit.aim(aim, { yaw: Math.atan2(-x, -z) + SUNSET.cameraSideAngle,
    pitch: reduced ? SUNSET.reducedPitch : SUNSET.pitch, distance: SUNSET.distance })
}

function focusFrom(pivot: Coordinate, place: HarborPlace, orbit: Dependencies['orbit']) {
  const [x, y, z] = place.anchor ?? [place.hotspot.x, 1.2, place.hotspot.z]
  orbit.aim({ x, y, z }, { yaw: Math.atan2(pivot.x - x, pivot.z - z), pitch: LOOKOUT.startPitch })
}

function enterLookout({ motion, orbit }: Dependencies) {
  motion.climb()
  orbit.setLookout(true)
  orbit.center(LOOKOUT.arrivalFacing)
}

// Keep mode transitions and frame updates together so each observes the same active activity.
export function createHarborActivities(deps: Dependencies) {
  const { motion, orbit, sailing } = deps
  let mode: HarborActivity | null = null
  let elapsed = 0
  let returning = false
  let cue: TourCue | null = null
  let focus: string | null = null
  let beforeSunset: Coordinate = SUNSET.position
  const tour = createHarborTour(sailing, next => {
    cue = next
    deps.onCue(next)
    if (next?.lookAt) {
      const [x, y, z] = next.lookAt
      orbit.aim({ x, y, z }, { yaw: Math.atan2(motion.player.x - x, motion.player.z - z), pitch: 0.22 })
    }
  })
  const changeMode = (next: HarborActivity | null) => { mode = next; elapsed = 0; returning = false; deps.onMode(next) }
  const finishTour = (blocked: boolean) => {
    motion.teleport(tour.stop())
    orbit.setSailing(false)
    orbit.center(motion.player.facing)
    changeMode(null)
    deps.onNotice(blocked ? TOUR.failLabel : TOUR.finishLabel)
  }
  function act(action: ActivityAction, reduced: boolean) {
    if (action === 'lookout' && !mode) { enterLookout(deps); changeMode(action) }
    else if (action === 'leave-lookout' && mode === 'lookout') {
      orbit.setLookout(false); motion.teleport(LOOKOUT.position); orbit.center(motion.player.facing)
      changeMode(null); focus = null
    } else if (action === 'sunset' && !mode) {
      beforeSunset = { x: motion.player.x, z: motion.player.z }
      enterSunset(deps, reduced); changeMode(action)
    } else if (action === 'leave-sunset' && mode === 'sunset') {
      motion.teleport(beforeSunset); orbit.center(motion.player.facing); changeMode(null)
    } else if (action === 'drive' && !mode) {
      if (!sailing.startTour()) { deps.onNotice(SAILING.noBoatLabel); return false }
      orbit.setSailing(true); orbit.center(motion.player.facing,true); changeMode(action)
    } else if (action === 'board' && !mode) {
      // 站在码头上船：上哪条由泊位决定（东堤是游艇，其余是小船）。
      const berth = sailing.nearbyDock()
      if (!berth) return false
      sailing.toggle(berth)
      orbit.setSailing(true); orbit.center(motion.player.facing, true); changeMode('drive')
    } else if ((action === 'dock' || action === 'return-drive') && mode === 'drive') {
      const dock = action === 'dock' ? sailing.nearbyDock() : undefined
      if (action === 'dock' && !dock) return false
      motion.teleport(sailing.finishTour(dock ?? undefined))
      orbit.setSailing(false); orbit.center(motion.player.facing); changeMode(null)
      deps.onNotice(dock ? `已在${dock.title}靠岸` : TOUR.finishLabel)
    } else if (action === 'tour' && !mode) {
      if (!sailing.startTour()) { deps.onNotice(SAILING.noBoatLabel); return false }
      tour.start(); orbit.setSailing(true); changeMode(action)
    } else if ((action === 'return-tour' || action === 'abort-tour') && mode === 'tour') {
      finishTour(action === 'abort-tour')
    } else return false
    return true
  }
  function step(seconds: number) {
    if (mode === 'sunset') elapsed = Math.min(SUNSET.duration, elapsed + seconds)
    if (mode !== 'tour' || returning) return
    const event = tour.update(seconds)
    if (!cue) orbit.center(motion.player.facing, true)
    if (event) { returning = true; deps.onRequest(event === 'blocked' ? 'abort-tour' : 'return-tour') }
  }
  return {
    act, step,
    get mode() { return mode },
    get dusk() { return mode === 'sunset' ? elapsed / SUNSET.duration : 0 },
    focusAt(place?: HarborPlace) {
      if (mode !== 'lookout') return null
      if (!place || place.hotspot.id === focus) {
        focus = null; orbit.center(motion.player.facing)
      } else {
        focus = place.hotspot.id; focusFrom(LOOKOUT.center, place, orbit)
      }
      return focus
    },
  }
}
