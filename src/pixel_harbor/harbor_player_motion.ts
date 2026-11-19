import { dampAngle, dampingFactor, RESPONSE_FACTOR } from './harbor_damping'
import { canWalkAt, findRespawnPoint, findSupportHeight, SPAWN } from './harbor_layout'
import { isLandAt } from './harbor_heightmap'
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
  if (canWalkAt(point.x, point.z, { obstacles, height: player.height })) return true
  // 岸边可以直接走进水里：只要人还贴着地面、目标点是水、并且没有障碍盒挡着。
  // 进去之后下一帧就会转成游泳（见 update 里的判断）。
  if (player.airborne || player.height > 0.02) return false
  if (isLandAt(point.x, point.z) !== false) return false
  if (!canSwim(point)) return false
  const radius = MOVEMENT.playerRadius
  return !obstacles.some(obstacle => !obstacle.supportOnly
    && (obstacle.height === undefined || player.height + 0.02 < obstacle.height)
    && point.x + radius > obstacle.footprint[0] && point.x - radius < obstacle.footprint[1]
    && point.z + radius > obstacle.footprint[2] && point.z - radius < obstacle.footprint[3])
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
  let gliding = false
  let boosted = false
  const GLIDE_FALL = 1.7
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
      // 滑翔：长按空格时下落变慢，并限制最终下落速度
      const glidingNow = gliding && velocity < 0
      // 蹦床弹起：上升段用更大的重力，升得更快；到顶后恢复正常重力落回来
      const gravity = glidingNow ? JUMP.gravity * 0.1 : boosted && velocity > 0 ? JUMP.gravity * 1.8 : JUMP.gravity
      const fall = glidingNow ? Math.max(velocity, -GLIDE_FALL) : velocity
      const next = player.height + (fall - gravity * seconds / 2) * seconds
      velocity = glidingNow ? Math.max(fall - gravity * seconds, -GLIDE_FALL) : fall - gravity * seconds
      if (velocity <= 0 && next <= support + JUMP.landingTolerance) {
        player.height = support
        player.airborne = false
        player.landing = JUMP.recovery
        velocity = 0
      } else player.height = next
    },
    glide(active: boolean) {
      gliding = active
    },
    /** 当前是否在滑翔（给水平移动加速用） */
    isGliding() {
      return gliding && player.airborne && velocity < 0
    },
    /** 蹦床之类的强力起跳 */
    boost(speed: number) {
      if (player.sailing || player.lookout || player.sitting || player.swimming) return
      velocity = speed
      boosted = true
      player.jumpAge = 0
      player.airborne = true
    },
    reset() {
      velocity = 0
      gliding = false
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
    // 滑翔时长按空格，WASD 能带出明显的前进方向
    if (vertical.isGliding()) { target.x *= 2.2; target.z *= 2.2 }
    const response = target.x || target.z ? MOVEMENT.accelerationTime : MOVEMENT.decelerationTime
    const { x: startX, z: startZ } = player
    const steps = Math.ceil(seconds / MOVEMENT.maxCollisionStep)
    player.landing = Math.max(0, player.landing - seconds)
    for (let index = 0; index < steps; index++) {
      if (!player.lookout && !player.swimming) vertical.update(seconds / steps)
      advancePlayer(player, obstacles, { velocity, target, response, seconds: seconds / steps })
    }
    if (!player.lookout) player.elevation = groundElevation(player.x, player.z)
    // 走下岸、脚下变成水：自动开始游泳
    if (!player.swimming && !player.airborne && player.height <= 0.02
      && isLandAt(player.x, player.z) === false && canSwim(player)) {
      player.swimming = true
    }
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
    glide: vertical.glide,
    boost: vertical.boost,
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
    /** 落到障碍盒里/非可走格时，把人推到最近的可走点，避免原地卡死 */
    unstuck() {
      if (player.sitting || player.lookout || player.swimming || player.sailing) return false
      if (canWalkAt(player.x, player.z, { obstacles, height: player.height })) return false
      for (let radius = 0.6; radius <= 4; radius += 0.6) {
        for (let step = 0; step < 12; step += 1) {
          const angle = (step / 12) * Math.PI * 2
          const x = player.x + Math.cos(angle) * radius
          const z = player.z + Math.sin(angle) * radius
          if (!canWalkAt(x, z, { obstacles, height: player.height })) continue
          player.x = x
          player.z = z
          velocity.x = 0
          velocity.z = 0
          return true
        }
      }
      return false
    },
  }
}
