import * as T from 'three'
import { dampAngle, dampingFactor } from './harbor_damping'
import { DECK, SPAWN, WALKABLE } from './harbor_layout'
import type { Footprint } from './harbor_layout'
import { LOOKOUT } from './harbor_exploration_config'
import { ORBIT } from './harbor_movement_config'
import type { HarborPlayer } from './harbor_player_motion'
import { cameraFloor } from './harbor_terrain'
import { FLIGHT } from '../harbor_flight/harbor-flight-config'

const FULL_TURN = Math.PI * 2
const STRUCTURE_PADDING = 0.13
export type CameraObstacle = { footprint: Footprint; height: number; base?: number }
export type CameraAim = { x: number; y: number; z: number }

export function makeCameraBoxes(obstacles: readonly CameraObstacle[], padding: number) {
  return obstacles.map(({ footprint: [left, right, near, far], height, base = DECK }) => new T.Box3(
    new T.Vector3(left - padding, base, near - padding),
    new T.Vector3(right + padding, base + height, far + padding),
  ))
}

function obstructionDistance(ray: T.Ray, boxes: readonly T.Box3[], distance: number) {
  const intersection = new T.Vector3()
  let available = distance
  for (const box of boxes) {
    if (box.containsPoint(ray.origin)) continue
    const hit = ray.intersectBox(box, intersection)
    if (hit) available = Math.min(available, Math.max(ORBIT.minObstructedDistance,
      hit.distanceTo(ray.origin) - ORBIT.obstacleClearance))
  }
  return available
}

function createCameraFollow(camera: T.PerspectiveCamera, obstacles: readonly CameraObstacle[]) {
  const focus = new T.Vector3(SPAWN.x, DECK + ORBIT.focusHeight, SPAWN.z)
  const aim = focus.clone()
  const destination = new T.Vector3()
  const offset = new T.Vector3()
  const ray = new T.Ray(focus, offset)
  const volumes = makeCameraBoxes(obstacles, STRUCTURE_PADDING)
  let clearance: number = ORBIT.distance
  return (player: HarborPlayer, orbit: { yaw: number; pitch: number; distance: number; target: CameraAim | null },
    time: { step: number; immediate: boolean }) => {
    const { step, immediate } = time
    const follow = immediate ? 1 : dampingFactor(step, ORBIT.followTime)
    const pivot = player.lookout ? LOOKOUT.center : player
    const bodyLift = player.sitting ? -0.24 : 0
    destination.set(pivot.x, DECK + ORBIT.focusHeight + player.elevation + player.height + bodyLift, pivot.z)
    focus.lerp(destination, follow)
    const flat = Math.cos(orbit.pitch)
    offset.set(Math.sin(orbit.yaw) * flat, Math.sin(orbit.pitch), Math.cos(orbit.yaw) * flat)
    const clear = obstructionDistance(ray, volumes, orbit.distance)
    const zoom = immediate ? 1 : dampingFactor(step, ORBIT.zoomTime)
    clearance = Math.min(clear, T.MathUtils.lerp(clearance, clear, zoom))
    camera.position.copy(focus).addScaledVector(offset, clearance)
    const floor = player.lookout ? DECK + LOOKOUT.platformOffset : cameraFloor(camera.position.x, camera.position.z, WALKABLE)
    camera.position.y = Math.max(camera.position.y, floor + ORBIT.floorClearance)
    aim.lerp(orbit.target ? destination.set(orbit.target.x, orbit.target.y, orbit.target.z) : focus,
      immediate ? 1 : dampingFactor(step, ORBIT.aimTime))
    camera.lookAt(aim)
  }
}

export function createOrbitCamera(camera: T.PerspectiveCamera, obstacles: readonly CameraObstacle[]) {
  const follow = createCameraFollow(camera, obstacles)
  const target = { yaw: SPAWN.yaw, pitch: ORBIT.pitch, distance: ORBIT.distance }
  const orbit = { ...target, target: null as CameraAim | null }
  let lookout = false
  let flying = false
  let firstPerson = false
  return {
    update(player: HarborPlayer, seconds: number, immediate = false) {
      const turn = immediate ? 1 : dampingFactor(seconds, ORBIT.orbitTime)
      orbit.yaw = dampAngle(orbit.yaw, target.yaw, turn)
      const pitch = flying ? Math.max(ORBIT.minPitch, target.pitch - FLIGHT.camera.pitch) : target.pitch
      orbit.pitch = T.MathUtils.lerp(orbit.pitch, pitch, turn)
      const distance = target.distance + (flying ? FLIGHT.camera.distance : 0)
        + (player.swimming ? ORBIT.swimDistance : 0)
      orbit.distance = T.MathUtils.lerp(orbit.distance, distance, immediate ? 1 : dampingFactor(seconds, ORBIT.zoomTime))
      follow(player, orbit, { step: seconds, immediate })
    },
    get yaw() { return orbit.yaw },
    get angles() { return { yaw: orbit.yaw, pitch: orbit.pitch } },
    look(dx: number, dy: number) {
      orbit.target = null
      target.yaw = (target.yaw - dx * ORBIT.lookSensitivity) % FULL_TURN
      target.pitch = T.MathUtils.clamp(target.pitch + dy * ORBIT.verticalLookSensitivity,
        lookout ? LOOKOUT.minPitch : firstPerson ? ORBIT.firstMinPitch : ORBIT.minPitch,
        lookout ? LOOKOUT.maxPitch : firstPerson ? ORBIT.firstMaxPitch : ORBIT.maxPitch)
    },
    zoom(direction: number) {
      target.distance = T.MathUtils.clamp(target.distance + direction * ORBIT.distancePerWheelStep,
        lookout ? LOOKOUT.minDistance : ORBIT.minDistance, lookout ? LOOKOUT.maxDistance : ORBIT.maxDistance)
    },
    center(facing: number, sailing = false) {
      orbit.target = null
      Object.assign(target, { yaw: (facing + Math.PI) % FULL_TURN, pitch: lookout ? LOOKOUT.startPitch : ORBIT.pitch,
        distance: lookout ? LOOKOUT.distance : sailing ? ORBIT.vesselDistance : ORBIT.distance })
    },
    setSailing(sailing: boolean) { target.distance = sailing ? ORBIT.vesselDistance : ORBIT.distance },
    setFlight(active: boolean) { flying = active },
    setFirstPerson(next: boolean) {
      if (firstPerson === next) return
      firstPerson = next
      if (!next) target.pitch = T.MathUtils.clamp(target.pitch, ORBIT.minPitch, ORBIT.maxPitch)
    },
    setLookout(next: boolean) {
      lookout = next
      orbit.target = null
      Object.assign(target, { pitch: next ? LOOKOUT.startPitch : ORBIT.pitch, distance: next ? LOOKOUT.distance : ORBIT.distance })
    },
    aim(point: CameraAim | null, pose?: { yaw: number; pitch: number; distance?: number }) {
      orbit.target = point
      if (pose) Object.assign(target, pose)
    },
  }
}
