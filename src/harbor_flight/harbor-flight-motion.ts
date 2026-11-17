import { dampAngle, dampingFactor, RESPONSE_FACTOR } from '../pixel_harbor/harbor_damping'
import { MOVEMENT } from '../pixel_harbor/harbor_movement_config'
import type { HarborPlayer } from '../pixel_harbor/harbor_player_motion'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'
import { FLIGHT } from './harbor-flight-config'
import { flightEdge, flightFloor, minimumFlightHeight } from './harbor-flight-space'
import type { createFlightSpace, FlightPoint, FlightPosition } from './harbor-flight-space'

type FlightSpace = ReturnType<typeof createFlightSpace>
export type FlightInput = FlightPosition & { vertical: number; sprint: boolean }
type Hooks = { change: (active: boolean) => void; notice: (text: string) => void; land: (point: FlightPoint) => boolean; recover: () => void }
type Phase = 'ground' | 'launch' | 'air' | 'land'
const IDLE = { x: 0, y: 0, z: 0 }
const BANK_RESPONSE = 0.13
const LAND_EPSILON = 0.04
const ROOF_MARGIN = 0.4
const EDGE_SPEED_REDUCTION = 0.88

function flightTarget(input: FlightInput, yaw: number, edge: number) {
  const speed = FLIGHT.speed * (input.sprint ? FLIGHT.sprintMultiplier : 1) * (1 - edge * edge * EDGE_SPEED_REDUCTION)
  return {
    x: (Math.cos(yaw) * input.x - Math.sin(yaw) * input.z) * speed,
    z: (-Math.sin(yaw) * input.x - Math.cos(yaw) * input.z) * speed,
    y: input.vertical * (input.vertical > 0 ? FLIGHT.climbSpeed : FLIGHT.descentSpeed),
  }
}

function integrate(velocity: FlightPoint, target: FlightPoint, step: number) {
  const delta = { ...IDLE }
  for (const axis of ['x', 'y', 'z'] as const) {
    const response = axis === 'y' ? FLIGHT.verticalResponse
      : (target.x || target.z ? FLIGHT.accelerationTime : FLIGHT.brakingTime)
    const weight = dampingFactor(step, response)
    delta[axis] = target[axis] * step + (velocity[axis] - target[axis]) * weight * response / RESPONSE_FACTOR
    velocity[axis] += (target[axis] - velocity[axis]) * weight
  }
  return delta
}

function moveFlight(space: FlightSpace, point: FlightPoint, movement: {
  velocity: FlightPoint; target: FlightPoint; step: number; clearance: boolean; committedLanding: boolean
}) {
  const { velocity, target, step, clearance, committedLanding } = movement
  const delta = integrate(velocity, target, step)
  for (const axis of ['y', 'x', 'z'] as const) {
    if (!delta[axis]) continue
    const next = { ...point, [axis]: point[axis] + delta[axis] }
    if (axis === 'y') {
      const floor = clearance ? minimumFlightHeight(next) : flightFloor(next)
      const y = Math.min(FLIGHT.maximumAltitude, Math.max(floor, next.y))
      if (y !== next.y) velocity.y = 0
      next.y = y
    }
    const unsafeLanding = axis !== 'y' && (!clearance || committedLanding) && typeof space.landing(next) !== 'number'
    if ((!committedLanding || !unsafeLanding) && space.clear(next, clearance || unsafeLanding)) point[axis] = next[axis]
    else velocity[axis] = 0
  }
}

export function createFlightMotion(player: HarborPlayer, space: FlightSpace, hooks: Hooks) {
  const point = { ...IDLE }, velocity = { ...IDLE }
  let phase: Phase = 'ground'
  let takeoff: FlightPosition = { x: player.x, z: player.z }
  let bank = 0, speed = 0, warned = false
  const clear = () => { Object.assign(velocity, IDLE); speed = 0 }
  function reset() {
    if (phase === 'ground') return
    phase = 'ground'
    clear()
    bank = 0
    hooks.notice('')
    hooks.change(false)
  }
  function landingFloor() {
    const result = space.landing(point)
    if (typeof result !== 'number' && !warned) {
      hooks.notice(FLIGHT.ui.blocked)
      warned = true
    }
    return result
  }
  function requestLanding() {
    warned = false
    if (typeof landingFloor() === 'number') phase = 'land'
  }

  function update(step: number, input: FlightInput, yaw: number) {
    if (phase === 'ground' || step <= 0) return
    if (input.vertical >= 0) warned = false
    const floor = phase === 'land' || input.vertical < 0 ? landingFloor() : 'blocked'
    const target = flightTarget(input, yaw, flightEdge(point))
    if (phase === 'launch') Object.assign(target, { x: 0, z: 0, y: FLIGHT.launchSpeed })
    if (phase === 'land') Object.assign(target, { x: 0, z: 0, y: -FLIGHT.landingSpeed })
    const descending = (phase === 'land' || input.vertical < 0) && typeof floor === 'number'
    const regainingClearance = phase === 'air' && !descending && point.y < minimumFlightHeight(point)
    if (regainingClearance) Object.assign(target, { x: 0, z: 0, y: Math.max(target.y, FLIGHT.launchSpeed) })
    const start = { ...point }
    const slices = Math.ceil(step / MOVEMENT.maxCollisionStep)
    for (let index = 0; index < slices; index++) {
      moveFlight(space, point, { velocity, target, step: step / slices,
        clearance: phase === 'air' && !descending && !regainingClearance, committedLanding: phase === 'land' })
    }
    if (phase === 'launch' && point.y >= minimumFlightHeight(point)) phase = 'air'
    // Land on the computed surface height (roof or terrain), not the current altitude,
    // so a slight overshoot during descent cannot place the player inside a building.
    if (typeof floor === 'number' && descending && point.y < floor + LAND_EPSILON && hooks.land({ ...point, y: floor })) {
      const onRoof = floor > flightFloor(point) + ROOF_MARGIN
      reset()
      if (onRoof) hooks.notice(FLIGHT.ui.roof)
      return
    }
    syncPlayer(step, start)
  }

  function syncPlayer(step: number, start: FlightPoint) {
    const dx = point.x - start.x, dz = point.z - start.z
    const elevation = groundElevation(point.x, point.z)
    player.speed = Math.hypot(dx, dz) / step
    speed = Math.hypot(dx, dz, point.y - start.y) / step
    const facing = player.speed > MOVEMENT.movementThreshold
      ? dampAngle(player.facing, Math.atan2(dx, dz), dampingFactor(step, FLIGHT.turnTime)) : player.facing
    const rate = (facing - player.facing) / step
    bank += (Math.max(-1, Math.min(1, rate)) - bank) * dampingFactor(step, BANK_RESPONSE)
    Object.assign(player, { x: point.x, z: point.z, elevation, facing, height: point.y - DECK - elevation,
      airborne: true, jumpAge: 0, landing: 0 })
  }

  return {
    get active() { return phase !== 'ground' },
    get bank() { return bank },
    get speed() { return speed },
    toggle() {
      if (phase === 'land') { phase = 'air'; return }
      if (phase !== 'ground') { requestLanding(); return }
      Object.assign(point, { x: player.x, z: player.z, y: DECK + player.elevation + player.height })
      takeoff = { x: player.x, z: player.z }
      phase = 'launch'
      clear()
      hooks.change(true)
    },
    disable() {
      if (phase === 'ground' || phase === 'land') return
      if (typeof space.landing(point) === 'number') phase = 'land'
      else {
        if (!hooks.land({ ...takeoff, y: DECK + groundElevation(takeoff.x, takeoff.z) })) hooks.recover()
        reset()
        hooks.notice(FLIGHT.ui.recovered)
      }
    },
    update, reset, clear,
  }
}
