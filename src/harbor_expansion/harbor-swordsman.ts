import * as T from 'three'
import { createHarborAvatar } from '../pixel_harbor/harbor_avatar'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'
import { nameplate, NAMEPLATE } from '../pixel_harbor/harbor_nameplate'
import { dampAngle, dampingFactor } from '../pixel_harbor/harbor_damping'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'
import type { HarborPlayer } from '../pixel_harbor/harbor_player_motion'

// 后山林径的护卫：长白山剑客「宁归一」。
// 平时在山上两个点之间踱步，每隔十几秒御剑腾空飞一段再落回路上。
export const SWORDSMAN = {
  id: 'swordsman',
  name: '宁归一',
  route: [[-40.6, -5.6], [-37.4, -7.6]] as const,
  walkSpeed: 1.3,
  flightEvery: [13, 19] as const,
  flightSeconds: 5.2,
  flightHeight: 3.2,
} as const

const SWORD: Paint = ['#cfd6dc']
const HILT: Paint = ['#b08a4e']

export function createSwordsman(scene: T.Scene, kit: ModelKit) {
  const actor = createHarborAvatar(kit, {
    hair: '#2f3237', shirt: '#41506b', trousers: '#2c313a', hat: false, headwear: 'bandana',
  })
  // 背上的剑鞘
  const sheath = kit.box([0, 0.62, -0.2], [0.07, 1.5, 0.12], HILT)
  sheath.rotation.z = 0.5
  actor.detailAnchor.add(sheath)
  // 御剑飞行时踩在脚下的剑：挂在 avatar 上，按身高差移动，飞行时始终贴着脚底
  // 御剑时的宝剑板：剑身沿前进方向（局部 +z），剑尖朝前
  const blade = new T.Group()
  blade.add(kit.box([0, 0, 0.15], [0.26, 0.06, 1.9], SWORD))
  blade.add(kit.box([0, 0, 1.22], [0.18, 0.05, 0.3], SWORD))
  blade.add(kit.box([0, 0, -0.92], [0.4, 0.08, 0.12], HILT))
  blade.add(kit.box([0, 0, -1.12], [0.13, 0.09, 0.3], HILT))
  blade.visible = false
  actor.avatar.add(blade)
  // 头顶的木头名牌，跟其他 NPC 一个样式
  actor.avatar.add(nameplate(SWORDSMAN.name, [0, NAMEPLATE.mountHeight + 0.28, 0], 0))
  scene.add(actor.avatar)

  const [startX, startZ] = SWORDSMAN.route[0]
  const pose: HarborPlayer = { x: startX, z: startZ, facing: 0, speed: 0, height: 0,
    elevation: groundElevation(startX, startZ), airborne: false, jumpAge: 0, landing: 0,
    sailing: false, sitting: false, lookout: false, swimming: false }

  let waypoint = 1
  let rest = 7
  let flight = -1
  let from: { x: number; z: number } = { x: startX, z: startZ }
  let to: { x: number; z: number } = { x: startX, z: startZ }

  function update(step: number, reduced: boolean) {
    const route = SWORDSMAN.route
    if (flight >= 0) {
      // 御剑飞行：抛物线腾空，脚底踩着剑
      flight = Math.min(1, flight + step / SWORDSMAN.flightSeconds)
      const t = flight
      pose.x = from.x + (to.x - from.x) * t
      pose.z = from.z + (to.z - from.z) * t
      pose.height = Math.sin(Math.PI * t) * SWORDSMAN.flightHeight
      pose.airborne = true
      pose.facing = dampAngle(pose.facing, Math.atan2(to.x - from.x, to.z - from.z), dampingFactor(step, 0.3))
      blade.visible = true
      if (flight >= 1) {
        flight = -1
        pose.airborne = false
        pose.height = 0
        blade.visible = false
        rest = SWORDSMAN.flightEvery[0]
      }
    } else {
      rest -= step
      if (rest <= 0) {
        // 起飞：从当前位置朝路线另一头飞一段
        from = { x: pose.x, z: pose.z }
        const target = route[waypoint % route.length]
        to = { x: target[0], z: target[1] }
        flight = 0
      } else {
        const target = route[waypoint]
        const dx = target[0] - pose.x
        const dz = target[1] - pose.z
        const distance = Math.hypot(dx, dz)
        if (distance < 0.25) {
          waypoint = (waypoint + 1) % route.length
          pose.speed = 0
        } else {
          const move = Math.min(SWORDSMAN.walkSpeed * step, distance)
          pose.x += dx / distance * move
          pose.z += dz / distance * move
          pose.facing = dampAngle(pose.facing, Math.atan2(dx, dz), dampingFactor(step, 0.25))
          pose.speed = SWORDSMAN.walkSpeed
        }
      }
    }
    pose.elevation = groundElevation(pose.x, pose.z)
    blade.position.y = -pose.height + 0.04
    blade.rotation.z = pose.airborne ? 0.1 : 0
    actor.update(pose, reduced ? 0 : step, reduced)
  }

  return { update, pose, avatar: actor.avatar }
}

export const SWORDSMAN_SPAWN = { x: SWORDSMAN.route[0][0], z: SWORDSMAN.route[0][1], base: DECK }
