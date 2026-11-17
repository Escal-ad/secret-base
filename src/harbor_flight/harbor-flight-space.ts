import { MAP } from '../harbor_expansion/harbor-map-config'
import { canWalkAt, findSupportHeight, WALKABLE } from '../pixel_harbor/harbor_layout'
import type { WorldObstacle } from '../pixel_harbor/harbor_layout'
import { MOVEMENT } from '../pixel_harbor/harbor_movement_config'
import type { CameraObstacle } from '../pixel_harbor/harbor_orbit_camera'
import { cameraFloor, DECK } from '../pixel_harbor/harbor_terrain'
import { FLIGHT } from './harbor-flight-config'

export type FlightPoint = { x: number; y: number; z: number }
export type FlightPosition = Omit<FlightPoint, 'y'>

const { playerRadius: RADIUS } = MOVEMENT
const EDGE = {
  left: MAP.west - FLIGHT.mapMargin, right: MAP.east + FLIGHT.mapMargin,
  near: MAP.north - FLIGHT.mapMargin, far: MAP.south + FLIGHT.mapMargin,
}

export function flightEdge({ x, z }: FlightPosition) {
  const distance = Math.min(x - EDGE.left, EDGE.right - x, z - EDGE.near, EDGE.far - z)
  return 1 - Math.max(0, Math.min(1, distance / FLIGHT.edgeBrake))
}

export function flightFloor({ x, z }: FlightPosition) {
  const center = cameraFloor(x, z, WALKABLE)
  return Math.max(center, cameraFloor(x - RADIUS, z, WALKABLE), cameraFloor(x + RADIUS, z, WALKABLE),
    cameraFloor(x, z - RADIUS, WALKABLE), cameraFloor(x, z + RADIUS, WALKABLE))
}

export function minimumFlightHeight(point: FlightPosition) {
  const floor = flightFloor(point)
  return floor > 0 ? floor + FLIGHT.groundClearance : FLIGHT.waterClearance
}

export function createFlightSpace(walking: readonly WorldObstacle[], solids: readonly CameraObstacle[]) {
  const columns = [...solids, ...walking.map(({ footprint, height }) => {
    const [left, right, near, far] = footprint
    return { footprint, base: flightFloor({ x: (left + right) / 2, z: (near + far) / 2 }),
      height: height ?? FLIGHT.propHeight }
  })].map(({ footprint: [left, right, near, far], base = DECK, height }) => ({
    left: left - RADIUS, right: right + RADIUS, near: near - RADIUS, far: far + RADIUS, bottom: base, top: base + height,
  }))
  const blocked = ({ x, y, z }: FlightPoint) => columns.some(box => x > box.left && x < box.right
    && z > box.near && z < box.far && y < box.top && y + FLIGHT.bodyHeight > box.bottom)
  return {
    landing({ x, z }: FlightPosition) {
      if (!canWalkAt(x, z, { height: 0, obstacles: [] })) return 'water'
      const y = flightFloor({ x, z })
      if (canWalkAt(x, z, { height: 0, obstacles: walking }) && !blocked({ x, y, z })) return y
      // Over a structure: land on its roof surface instead of refusing the landing.
      const roof = findSupportHeight(x, z, { obstacles: walking, height: Number.POSITIVE_INFINITY })
      return roof > 0 ? y + roof : 'blocked'
    },
    clear({ x, y, z }: FlightPoint, clearance: boolean) {
      if (x < EDGE.left || x > EDGE.right || z < EDGE.near || z > EDGE.far || y > FLIGHT.maximumAltitude) return false
      if (y < (clearance ? minimumFlightHeight({ x, z }) : flightFloor({ x, z }))) return false
      return !blocked({ x, y, z })
    },
  }
}
