import * as T from 'three'
import { MOVEMENT } from './harbor_movement_config'
import type { createOrbitCamera } from './harbor_orbit_camera'
import type { createPlayerMotion } from './harbor_player_motion'
import type { createHarborSailing } from './harbor_sailing'
import type { createFlightMotion } from '../harbor_flight/harbor-flight-motion'

const KEY_DIRECTIONS = new Map([
  ['KeyW', 'up'], ['ArrowUp', 'up'], ['KeyS', 'down'], ['ArrowDown', 'down'],
  ['KeyA', 'left'], ['ArrowLeft', 'left'], ['KeyD', 'right'], ['ArrowRight', 'right'],
] as const)
type DirectionKey = Parameters<typeof KEY_DIRECTIONS.get>[0]
export type MoveDirection = NonNullable<ReturnType<typeof KEY_DIRECTIONS.get>>

const DRAG_THRESHOLD = 4
const SPRINT_KEYS = new Set(['ShiftLeft', 'ShiftRight'])
const DESCENT_KEYS = new Set(['ControlLeft', 'ControlRight', 'KeyC'])

type ControlOptions = {
  canvas: HTMLCanvasElement
  motion: ReturnType<typeof createPlayerMotion>
  orbit: ReturnType<typeof createOrbitCamera>
  sailing: ReturnType<typeof createHarborSailing>
  flight: ReturnType<typeof createFlightMotion>
  canFly: () => boolean
  flightEnabled: () => boolean
  canJump: () => boolean
  canMove: () => boolean
  canLook: () => boolean
  canSteer: () => boolean
  lockPointer: () => boolean
  leftLock: () => boolean
  sprintEnabled: () => boolean
  specialLook: { active: () => boolean; look: (dx: number,dy: number) => void; zoom: (direction: number)=>void }
  onInteract: () => void
  onPick: (pointer: T.Vector2) => void
}

function addLookInput(canvas: HTMLCanvasElement, actions: {
  look: (dx: number, dy: number) => void
  zoom: (amount: number) => void
  pick: (pointer: T.Vector2) => void
  lockPointer: () => boolean
  leftLock: () => boolean
}) {
  const listeners = new AbortController()
  const { signal } = listeners
  let drag: { id: number; x: number; y: number; travel: number } | undefined
  canvas.addEventListener('pointerdown', event => {
    if (drag || event.button !== 0) return
    if (event.pointerType === 'mouse' && actions.leftLock() && !document.pointerLockElement && canvas.requestPointerLock) {
      const pending = canvas.requestPointerLock()
      if (pending) void pending.catch(() => canvas.focus({ preventScroll: true }))
      return
    }
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, travel: 0 }
    canvas.focus({ preventScroll: true })
    canvas.setPointerCapture(event.pointerId)
  }, { signal })
  // 右键：在「鼠标直接看」和「拖动看」之间切换
  canvas.addEventListener('contextmenu', event => event.preventDefault(), { signal })
  canvas.addEventListener('pointerdown', event => {
    if (event.button !== 2) return
    event.preventDefault()
    if (document.pointerLockElement === canvas) { document.exitPointerLock(); return }
    if (!actions.lockPointer() || !canvas.requestPointerLock) return
    const pending = canvas.requestPointerLock()
    if (pending) void pending.catch(() => canvas.focus({ preventScroll: true }))
  }, { signal })
  canvas.addEventListener('pointermove', event => {
    if (document.pointerLockElement === canvas) { actions.look(event.movementX,event.movementY); return }
    if (drag?.id !== event.pointerId) return
    const dx = event.clientX - drag.x
    const dy = event.clientY - drag.y
    drag = { id: drag.id, x: event.clientX, y: event.clientY, travel: drag.travel + Math.hypot(dx, dy) }
    if (drag.travel > DRAG_THRESHOLD) actions.look(dx, dy)
  }, { signal })
  canvas.addEventListener('pointerup', event => {
    if (drag?.id !== event.pointerId) return
    if (drag.travel <= DRAG_THRESHOLD) {
      const bounds = canvas.getBoundingClientRect()
      actions.pick(new T.Vector2((event.clientX - bounds.left) / bounds.width * 2 - 1,
        1 - (event.clientY - bounds.top) / bounds.height * 2))
    }
    drag = undefined
  }, { signal })
  canvas.addEventListener('lostpointercapture', () => { drag = undefined }, { signal })
  canvas.addEventListener('wheel', event => {
    event.preventDefault()
    actions.zoom(Math.sign(event.deltaY))
  }, { signal, passive: false })
  return () => listeners.abort()
}

function addKeys(actions: {
  move: (key: string, direction: MoveDirection) => void
  release: (key: string) => void
  sprint: (key: string) => void
  interact: () => void
  jump: () => void
  flight: (code: string, repeat: boolean) => boolean
  flying: () => boolean
}) {
  const listeners = new AbortController()
  const { signal } = listeners
  window.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.metaKey || event.altKey) return
    const target = event.target instanceof Element ? event.target : null
    if (target?.closest('input, textarea, select, [contenteditable="true"]')) return
    if ((!event.ctrlKey || DESCENT_KEYS.has(event.code)) &&
      (event.code !== 'Space' || !target?.closest('button, a, video')) && actions.flight(event.code, event.repeat)) {
      event.preventDefault()
      return
    }
    const direction = KEY_DIRECTIONS.get(event.code as DirectionKey)
    if (event.ctrlKey && (!actions.flying() || !direction)) return
    if (event.code.startsWith('Arrow') && target?.closest('.harbor-detail')) return
    if (SPRINT_KEYS.has(event.code)) actions.sprint(event.code)
    if (direction) {
      event.preventDefault()
      actions.move(event.code, direction)
    }
    if (event.code === 'KeyE' && !event.repeat) actions.interact()
    if (event.code === 'Space' && !event.repeat && !target?.closest('button, a, video')) {
      event.preventDefault()
      actions.jump()
    }
  }, { signal })
  window.addEventListener('keyup', event => actions.release(event.code), { signal })
  return () => listeners.abort()
}

function readDirection(held: ReadonlyMap<string, MoveDirection>, analog: { x: number; z: number }, speed: number) {
  const directions = new Set(held.values())
  const x = Number(directions.has('right')) - Number(directions.has('left')) + analog.x
  const z = Number(directions.has('up')) - Number(directions.has('down')) + analog.z
  const scale = speed / Math.max(1, Math.hypot(x, z))
  return { x: x * scale, z: z * scale }
}

export function createControls({ canvas, motion, orbit, sailing, canJump, canMove, canLook, canSteer,
  lockPointer, leftLock, sprintEnabled, specialLook, onInteract, onPick, flight, canFly, flightEnabled }: ControlOptions) {
  const held = new Map<string, MoveDirection>()
  const sprintKeys = new Set<string>()
  const analog = { x: 0, z: 0 }
  let touchSprint = false
  const verticalKeys = new Set<string>()
  const touchVertical = new Set<number>()
  const move = (key: string, direction: MoveDirection) => { if (canMove()) held.set(key, direction) }
  const release = (key: string) => { held.delete(key); sprintKeys.delete(key); verticalKeys.delete(key) }
  const moveAnalog = (x: number, z: number) => { analog.x = x; analog.z = z }
  const clear = () => {
    held.clear(); sprintKeys.clear(); verticalKeys.clear(); touchVertical.clear(); touchSprint = false
    moveAnalog(0, 0); motion.clear(); sailing.stop(); flight.clear()
  }
  const jump = () => { if (canJump() && !flight.active) motion.jump() }
  function toggleFlight() {
    if (!canFly() || !flightEnabled()) return
    if (!flight.active) { motion.clear(); canvas.focus({ preventScroll: true }) }
    flight.toggle()
  }
  function flightKey(code: string, repeat: boolean) {
    if (code === 'KeyF') { if (!repeat) toggleFlight(); return true }
    if (!flight.active || (!DESCENT_KEYS.has(code) && code !== 'Space')) return false
    if (canFly()) verticalKeys.add(code)
    return true
  }
  function fly(seconds: number, sprint: boolean) {
    if (!canFly()) return
    if (!flightEnabled()) flight.disable()
    const ascending = touchVertical.has(1) || verticalKeys.has('Space')
    const descending = touchVertical.has(-1) || [...verticalKeys].some(code => DESCENT_KEYS.has(code))
    flight.update(seconds, { ...readDirection(held, analog, 1), vertical: Number(ascending) - Number(descending), sprint }, orbit.yaw)
  }
  const stopKeys = addKeys({ move, release, interact: onInteract, jump, sprint: key => sprintKeys.add(key),
    flight: flightKey, flying: () => flight.active })
  const stopLook = addLookInput(canvas, {
    look(dx, dy) { if (specialLook.active()) specialLook.look(dx,dy); else if (canLook()) orbit.look(dx, dy) },
    zoom(direction) { if (specialLook.active()) specialLook.zoom(-direction); else if (canLook()) orbit.zoom(direction) },
    pick: onPick,
    lockPointer,
  leftLock,
  })
  orbit.update(motion.player, 0, true)
  return {
    moveAnalog, interact: onInteract, clear, jump, glide: (active: boolean) => motion.glide(active), unstuck: () => motion.unstuck(), boost: (speed: number) => motion.boost(speed), toggleFlight,
    setFlightVertical(direction: number, pressed: boolean) {
      if (pressed) touchVertical.add(direction)
      else touchVertical.delete(direction)
    },
    setThrottle(value:boolean) { touchSprint=value },
    update(seconds: number) {
      const sprint = Boolean(sprintKeys.size || touchSprint) && sprintEnabled()
      if (motion.player.sailing && canSteer()) {
        sailing.update({ ...readDirection(held, analog, 1), sprint }, seconds)
      } else if (flight.active) fly(seconds, sprint)
      else if (canMove() && !motion.player.sailing) {
        const speed = MOVEMENT.walkSpeed * (sprint ? MOVEMENT.sprintMultiplier : 1)
        motion.update(seconds, readDirection(held, analog, speed), orbit.yaw)
      }
      orbit.setFlight(flight.active)
      orbit.update(motion.player, seconds)
    },
    respawn() {
      clear()
      if (motion.player.sailing) sailing.respawn()
      else motion.respawn()
      flight.reset()
      orbit.setFlight(false)
      orbit.update(motion.player, 0, true)
    },
    center() { orbit.center(motion.player.facing, motion.player.sailing) },
    dispose() {
      if(document.pointerLockElement===canvas) document.exitPointerLock()
      stopKeys(); stopLook()
    },
  }
}
