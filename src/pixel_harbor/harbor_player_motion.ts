import { dampAngle, dampingFactor, RESPONSE_FACTOR } from './harbor_damping'
import { canWalkAt, findRespawnPoint, findSupportHeight, SPAWN } from './harbor_layout'
import type { WorldObstacle } from './harbor_layout'
import { JUMP, MOVEMENT, SWIM } from './harbor_movement_config'
import { SAILING } from './harbor_sailing_config'
import { LOOKOUT } from './harbor_exploration_config'
import { DECK, groundElevation } from './harbor_terrain'

const COLLISION_SEARCH_STEPS = 8
// 人物根节点的绘制位置是 DECK + elevation + height，水面在 y = 0，
// 因此游泳时的 height 由「水面 + 没入深度」反推，避免在 config 里手写两处。
const FLOAT_HEIGHT = -(DECK + SWIM.floatSink)
type PlanarVector = { x: number; z: number }
export type HarborPlayer = PlanarVector & {
  facing: number; speed: number; height: number; airborne: boolean; jumpAge: number; landing: number; sailing: boolean;
  elevation: number; lookout: boolean; sitting: boolean; swimming: boolean;
}

function canSwim(point: PlanarVector) {
  const [left, right, near, far] = SAILING.bounds
  return point.x >= left && point.x <= right && point.z >= near && point.z <= far
}

function canStand(player: HarborPlayer, point: PlanarVector, obstacles: readonly WorldObstacle[]) {
  if (player.lookout) {
    const radius = Math.hypot(point.x - LOOKOUT.center.x, point.z - LOOKOUT.center.z)
    return radius >= LOOKOUT.lanternRadius + MOVEMENT.playerRadius && radius <= LOOKOUT.outerRadius - MOVEMENT.playerRadius
  }
  if (player.swimming) return canSwim(point)
  return canWalkAt(point.x, point.z, { obstacles, height: player.height })
}

function slideAxis(position: HarborPlayer, obstacles: readonly WorldObstacle[], step: { axis: keyof PlanarVector; distance: number }) {
  const { axis, distance } = step
  if (!distance) return false
  const current = position[axis]
  const clearAt = (fraction: number) => canStand(position, {
    x: axis === 'x' ? current + distance * fraction : position.x,
    z: axis === 'z' ? current + distance * fraction : position.z,
  }, obstacles)
  if (clearAt(1)) {
    position[axis] += distance
    return false
  }
  let safe = 0
  let blocked = 1
  for (let index = 0; index < COLLISION_SEARCH_STEPS; index++) {
    const midpoint = (safe + blocked) / 2
    if (clearAt(midpoint)) safe = midpoint
    else blocked = midpoint
  }
  position[axis] += distance * safe
  return true
}

function advancePlayer(position: HarborPlayer, obstacles: readonly WorldObstacle[], motion: {
  velocity: PlanarVector; target: PlanarVector; seconds: number; response: number
}) {
  const { velocity, target, seconds, response } = motion
  const weight = dampingFactor(seconds, response)
  // Integrate the exponential velocity analytically within each collision step.
  const integral = weight * response / RESPONSE_FACTOR
  const dx = target.x * seconds + (velocity.x - target.x) * integral
  const dz = target.z * seconds + (velocity.z - target.z) * integral
  velocity.x += (target.x - velocity.x) * weight
  velocity.z += (target.z - velocity.z) * weight
  const first = Math.abs(dx) >= Math.abs(dz) ? 'x' : 'z'
  const steps = { x: dx, z: dz }
  for (const axis of [first, first === 'x' ? 'z' : 'x'] as const) {
    if (slideAxis(position, obstacles, { axis, distance: steps[axis] })) velocity[axis] = 0
  }
}

function createVerticalMotion(player: HarborPlayer, obstacles: readonly WorldObstacle[]) {
  let velocity = 0
  return {
    jump() {
      if (player.airborne || player.sailing || player.lookout || player.sitting || player.swimming) return
      const support = findSupportHeight(player.x, player.z, { obstacles, height: player.height })
      if (player.height > support + JUMP.landingTolerance) return
      velocity = JUMP.lift
      player.jumpAge = 0
      player.airborne = true
    },
    update(seconds: number) {
      const support = findSupportHeight(player.x, player.z, { obstacles, height: player.height })
      if (!player.airborne && player.height <= support) return
      player.airborne = true
      player.jumpAge += seconds
      const next = player.height + (velocity - JUMP.gravity * seconds / 2) * seconds
      velocity -= JUMP.gravity * seconds
      if (velocity <= 0 && next <= support + JUMP.landingTolerance) {
        player.height = support
        player.airborne = false
        player.landing = JUMP.recovery
        velocity = 0
      } else player.height = next
    },
    reset() {
      velocity = 0
      Object.assign(player, { height: 0, airborne: false, jumpAge: 0, landing: 0 })
    },
  }
}

function worldDirection(direction: PlanarVector, yaw: number) {
  const sine = Math.sin(yaw)
  const cosine = Math.cos(yaw)
  return { x: cosine * direction.x - sine * direction.z, z: -sine * direction.x - cosine * direction.z }
}

export function createPlayerMotion(obstacles: readonly WorldObstacle[]) {
  const player: HarborPlayer = { x: SPAWN.x, z: SPAWN.z, facing: SPAWN.yaw + Math.PI,
    speed: 0, height: 0, airborne: false, jumpAge: 0, landing: 0, sailing: false,
    elevation: 0, lookout: false, sitting: false, swimming: false }
  const velocity = { x: 0, z: 0 }
  const vertical = createVerticalMotion(player, obstacles)
  const footprints = obstacles.map(obstacle => obstacle.footprint)
  function update(seconds: number, direction: PlanarVector, yaw: number) {
    if (seconds <= 0) return
    const target = worldDirection(direction, yaw)
    if (player.swimming) { target.x *= SWIM.speedFactor; target.z *= SWIM.speedFactor }
    const response = target.x || target.z ? MOVEMENT.accelerationTime : MOVEMENT.decelerationTime
    const { x: startX, z: startZ } = player
    const steps = Math.ceil(seconds / MOVEMENT.maxCollisionStep)
    player.landing = Math.max(0, player.landing - seconds)
    for (let index = 0; index < steps; index++) {
      if (!player.lookout && !player.swimming) vertical.update(seconds / steps)
      advancePlayer(player, obstacles, { velocity, target, response, seconds: seconds / steps })
    }
    if (!player.lookout) player.elevation = groundElevation(player.x, player.z)
    if (player.swimming) {
      player.height = FLOAT_HEIGHT
      player.airborne = false
      player.landing = 0
      // 游到岸边（脚下变成可走区域）自动上岸。
      if (canWalkAt(player.x, player.z, { obstacles, height: 0 })) {
        player.swimming = false
        player.height = 0
      }
    }
    const dx = player.x - startX
    const dz = player.z - startZ
    player.speed = Math.hypot(dx, dz) / seconds
    if (player.speed > MOVEMENT.movementThreshold) {
      player.facing = dampAngle(player.facing, Math.atan2(dx, dz), dampingFactor(seconds, MOVEMENT.turnTime))
    }
  }

  function positionAt(point: PlanarVector, height = 0) {
    vertical.reset()
    Object.assign(player, point, {
      elevation: groundElevation(point.x, point.z), lookout: false, sitting: false, swimming: false, height,
    })
  }
  const relocate = {
    jump: vertical.jump,
    swim(point: PlanarVector) {
      positionAt(point, FLOAT_HEIGHT)
      player.swimming = true
      return true
    },
    teleport(point: PlanarVector, absoluteY?: number) {
      const height = absoluteY === undefined ? 0
        : Math.max(0, absoluteY - DECK - groundElevation(point.x, point.z))
      if (!canWalkAt(point.x, point.z, { obstacles, height })) return false
      positionAt(point, height)
      return true
    },
    respawn() {
      const point = findRespawnPoint(player, footprints)
      if (point) positionAt(point)
    },
  }
  return {
    player, update, ...relocate,
    climb() {
      const radius = (LOOKOUT.outerRadius + LOOKOUT.lanternRadius) / 2
      Object.assign(player, { ...LOOKOUT.center, z: LOOKOUT.center.z + radius,
        elevation: LOOKOUT.platformOffset, lookout: true })
      vertical.reset()
    },
    clear() { velocity.x = 0; velocity.z = 0; player.speed = 0 },
  }
}
