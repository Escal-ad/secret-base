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

export function createHarborSailing(boats: readonly { id: string; group: Group }[],
  player: HarborPlayer, getIce = () => 0) {
  // 每条船各有一份状态；泊位决定这次上哪条船（见 SAILING.docks[].boat）。
  const rigs = boats.map(({ id, group }) => {
    group.rotation.reorder('YXZ')
    return { id, group, helm: SAILING.helm[id] ?? { height: SAILING.helmHeight, offset: 0 },
      vessel: { x: group.position.x, z: group.position.z,
        yaw: group.rotation.y + HULL_AXIS, speed: 0, turn: 0, bank: 0 } as Vessel }
  })
  let active = rigs[0]
  const writeRig = (rig: typeof rigs[number]) => {
    rig.group.position.x = rig.vessel.x
    rig.group.position.z = rig.vessel.z
    rig.group.rotation.y = rig.vessel.yaw - HULL_AXIS
  }
  const sync = () => {
    const { vessel, helm } = active
    writeRig(active)
    if (player.sailing) Object.assign(player, {
      x: vessel.x + Math.sin(vessel.yaw) * helm.offset,
      z: vessel.z + Math.cos(vessel.yaw) * helm.offset,
      facing: vessel.yaw, height: helm.height, speed: 0, airborne: false, landing: 0,
    })
  }
  function dockShip(dock: Dock) {
    // 同一个泊位已经有另一条船停着：先让它回自己的本港，免得两条船叠在一起。
    const other = rigs.find(rig => rig !== active && distance(rig.vessel, dock) <= 2.4)
    if (other) {
      const home = SAILING.docks.find(item => item.boat === other.id) ?? SAILING.docks[0]
      Object.assign(other.vessel, { x: home.x, z: home.z, yaw: home.yaw, speed: 0, turn: 0, bank: 0 })
      writeRig(other)
    }
    Object.assign(active.vessel, { x: dock.x, z: dock.z, yaw: dock.yaw, speed: 0, turn: 0, bank: 0 })
    sync()
  }
  return {
    get vessel(): Vessel { return active.vessel },
    nearbyDock() {
      // 开船时看船离哪个泊位够近；走路时看你在哪个泊位岸边，并且那儿真的停着一条船。
      if (player.sailing) {
        const dock = nearestDock(active.vessel)
        return distance(active.vessel, dock) <= dock.berthRadius ? dock : null
      }
      const dock = SAILING.docks.find(item => distance(player, item.land) <= SAILING.boardingRadius)
      if (!dock) return null
      return rigs.some(rig => distance(rig.vessel, dock) <= dock.berthRadius) ? dock : null
    },
    toggle(dock: Dock) {
      if (!player.sailing) {
        // 只有船真的停在这个泊位才能上；船停在别处就不再自动叫过来。
        const berthed = rigs.find(rig => distance(rig.vessel, dock) <= dock.berthRadius)
        if (!berthed) return null
        active = berthed
        player.sailing = true
        dockShip(dock)
        return null
      }
      const berth = nearestDock(active.vessel)
      player.sailing = false
      dockShip(berth)
      return berth.land
    },
    respawn() { dockShip(nearestDock(active.vessel)) },
    disembark() { player.sailing = false; dockShip(nearestDock(active.vessel)) },
    startTour() {
      // 船夫的"自己开船 / 导览"也用这条船：它不在南湾泊位就不让开，避免把船隔空叫过来。
      const skiff = rigs.find(rig => rig.id === 'skiff') ?? rigs[0]
      const dock = SAILING.docks[0]
      if (distance(skiff.vessel, dock) > dock.berthRadius) return false
      active = skiff
      player.sailing = true
      dockShip(dock)
      return true
    },
    finishTour(dock: Dock = SAILING.docks[0]) {
      player.sailing = false
      dockShip(dock)
      return dock.land
    },
    followRoute(point: Position & { yaw: number; speed: number }, step: number) {
      if (!canSail(point.x, point.z, point.yaw)) return false
      updateBank(active.vessel, point.yaw - active.vessel.yaw, step)
      Object.assign(active.vessel, point)
      sync()
      return true
    },
    teleport(point: Position) {
      if (!canSail(point.x, point.z, active.vessel.yaw)) return false
      Object.assign(active.vessel, point, { speed: 0, turn: 0, bank: 0 })
      sync()
      return true
    },
    update(input: Position & { sprint?: boolean }, step: number) {
      advanceBoat(active.vessel, input, { step, ice:getIce() })
      sync()
    },
    stop() { active.vessel.speed = 0; active.vessel.turn = 0; active.vessel.bank = 0 },
  }
}
