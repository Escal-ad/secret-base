import type { Group } from 'three'
import { dampingFactor } from './harbor_damping'
import { WALKABLE } from './harbor_layout'
import type { Footprint } from './harbor_layout'
import type { HarborPlayer } from './harbor_player_motion'
import { SAILING } from './harbor_sailing_config'
import { iceAt } from '../harbor_expansion/harbor-weather-config'
import { hitsIsland } from '../harbor_expansion/harbor-island-config'

type Position = { x: number; z: number }
type Dock = typeof SAILING.docks[number]
type Vessel = Position & { yaw: number; speed: number; turn: number; bank: number }
const COAST: readonly Footprint[] = [...WALKABLE, [10.4, 22, 16.1, 19.9], [-49, -27, -20, 21]]
const DISTANCE_EPSILON = 0.00001
const HULL_AXIS = Math.PI / 2

function insideBoundary(x:number,z:number,radius:number) {
  const boundary=SAILING.boundary
  return boundary.every(([ax,az],i)=>{
    const [bx,bz]=boundary[(i+1)%boundary.length]
    return (bx-ax)*(z-az)-(bz-az)*(x-ax)>=radius*Math.hypot(bx-ax,bz-az)
  })
}

function touchesCoast(x: number, z: number, radius: number) {
  const [left, right, north, south] = SAILING.bounds
  if (x - radius < left || x + radius > right || z - radius < north || z + radius > south) return true
  if (!insideBoundary(x,z,radius)) return true
  if(hitsIsland(x,z,radius))return true
  return COAST.some(([minX, maxX, minZ, maxZ]) => {
    const dx = x - Math.max(minX, Math.min(maxX, x))
    const dz = z - Math.max(minZ, Math.min(maxZ, z))
    return Math.hypot(dx, dz) < radius
  })
}

export function canSail(x: number, z: number, yaw: number) {
  const sine = Math.sin(yaw)
  const cosine = Math.cos(yaw)
  return SAILING.collisionDiscs.every(([offset, radius]) =>
    !touchesCoast(x + sine * offset, z + cosine * offset, radius))
}

function nearestDock(position: Position) {
  return SAILING.docks.reduce((nearest: Dock, dock) =>
    distance(position, dock) < distance(position, nearest) ? dock : nearest, SAILING.docks[0])
}

function distance(a: Position, b: Position) {
  return Math.hypot(a.x - b.x, a.z - b.z)
}

function updateBank(vessel: Vessel, yawDelta: number, step: number) {
  if (step <= 0) return
  const turnRatio = Math.max(-1, Math.min(1, yawDelta / (step * SAILING.maxTurnRate)))
  const target = -turnRatio * SAILING.maxBank
  vessel.bank += (target - vessel.bank) * dampingFactor(step, SAILING.bankTime)
}

function advanceBoat(vessel: Vessel,
  input: Position & { sprint?: boolean }, state: { step: number; ice: number }) {
  const { step, ice } = state
  const clear = (x:number,z:number,yaw:number) => canSail(x,z,yaw) && !SAILING.collisionDiscs.some(([offset,radius])=>{
    const cx=x+Math.sin(yaw)*offset, cz=z+Math.cos(yaw)*offset
    return [[0,0],[radius,0],[-radius,0],[0,radius],[0,-radius]].some(([dx,dz])=>iceAt(cx+dx,cz+dz,ice))
  })
  const target = input.z * (input.z < 0 ? SAILING.reverseSpeed : SAILING.forwardSpeed * (input.sprint ? SAILING.sprint : 1))
  const response = input.z ? SAILING.accelerationTime : SAILING.coastingTime
  vessel.speed += (target - vessel.speed) * dampingFactor(step, response)
  vessel.turn += (input.x - vessel.turn) * dampingFactor(step, SAILING.turnTime)
  const speedRatio = Math.min(1, Math.abs(vessel.speed) / SAILING.forwardSpeed)
  const turnFactor = SAILING.minTurnFactor + speedRatio * (1 - SAILING.minTurnFactor)
  // Input is right-positive. With the bow along +Z at zero yaw, positive +Y rotation turns to port.
  const reverseSteering = SAILING.invertSteerWhenReversing && vessel.speed < 0
  const yawRate = (reverseSteering ? vessel.turn : -vessel.turn) * SAILING.maxTurnRate * turnFactor
  const yawDelta = yawRate * step
  const yaw = vessel.yaw + yawDelta
  const canTurn = clear(vessel.x, vessel.z, yaw)
  if (canTurn) vessel.yaw = yaw
  updateBank(vessel, canTurn ? yawDelta : 0, step)
  const dx = Math.sin(vessel.yaw) * vessel.speed * step
  const dz = Math.cos(vessel.yaw) * vessel.speed * step
  const before = { x: vessel.x, z: vessel.z }
  if (clear(vessel.x + dx, vessel.z, vessel.yaw)) vessel.x += dx
  if (clear(vessel.x, vessel.z + dz, vessel.yaw)) vessel.z += dz
  if (Math.abs(dx) + Math.abs(dz) > DISTANCE_EPSILON && distance(before, vessel) < DISTANCE_EPSILON) {
    vessel.speed = 0
  }
}

export function createHarborSailing(boat: Group, player: HarborPlayer, getIce = () => 0) {
  const vessel: Vessel = { x: boat.position.x, z: boat.position.z,
    yaw: boat.rotation.y + HULL_AXIS, speed: 0, turn: 0, bank: 0 }
  // Apply the heading around world Y and the bank around the hull's local +X bow axis.
  boat.rotation.reorder('YXZ')
  const sync = () => {
    boat.position.x = vessel.x
    boat.position.z = vessel.z
    boat.rotation.y = vessel.yaw - HULL_AXIS
    if (player.sailing) Object.assign(player, {
      x: vessel.x, z: vessel.z, facing: vessel.yaw, height: SAILING.helmHeight, speed: 0,
      airborne: false, landing: 0,
    })
  }
  function dockShip(dock: Dock) {
    Object.assign(vessel, { x: dock.x, z: dock.z, yaw: dock.yaw, speed: 0, turn: 0, bank: 0 })
    sync()
  }
  return {
    vessel,
    nearbyDock() {
      const dock = nearestDock(vessel)
      if (distance(vessel, dock) > dock.berthRadius) return null
      if (!player.sailing && distance(player, dock.land) > SAILING.boardingRadius) return null
      return dock
    },
    toggle(dock: Dock) {
      const wasSailing = player.sailing
      player.sailing = !wasSailing
      dockShip(dock)
      return wasSailing ? dock.land : null
    },
    respawn() { dockShip(nearestDock(vessel)) },
    disembark() { player.sailing = false; dockShip(nearestDock(vessel)) },
    startTour() { player.sailing = true; dockShip(SAILING.docks[0]) },
    finishTour(dock: Dock = SAILING.docks[0]) {
      player.sailing = false
      dockShip(dock)
      return dock.land
    },
    followRoute(point: Position & { yaw: number; speed: number }, step: number) {
      if (!canSail(point.x, point.z, point.yaw)) return false
      updateBank(vessel, point.yaw - vessel.yaw, step)
      Object.assign(vessel, point)
      sync()
      return true
    },
    teleport(point: Position) {
      if (!canSail(point.x, point.z, vessel.yaw)) return false
      Object.assign(vessel, point, { speed: 0, turn: 0, bank: 0 })
      sync()
      return true
    },
    update(input: Position & { sprint?: boolean }, step: number) {
      advanceBoat(vessel, input, { step, ice:getIce() })
      sync()
    },
    stop() { vessel.speed = 0; vessel.turn = 0; vessel.bank = 0 },
  }
}
