import * as T from 'three'
import { createHarborAvatar } from '../pixel_harbor/harbor_avatar'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'
import type { HarborPlayer } from '../pixel_harbor/harbor_player_motion'
import { dampAngle, dampingFactor } from '../pixel_harbor/harbor_damping'

export const MAYOR_NPC = {
  // 躺椅在村长小屋门的右侧（+z 一侧），面朝海港。
  chair: { x: -22.15, z: 0.55 },
  // 回屋目标点：屋子东墙外，走到这里就算进门。
  door: { x: -22.35, z: -2.9 },
  walkSpeed: 0.62,
  restYaw: Math.PI / 2,
  nightFrom: 0.55,
  rainFrom: 0.35,
  hideDistance: 0.55,
} as const

const FRAME: Paint = ['#8a6b4e', 'wood']
const CLOTH: Paint = ['#c8b79a', 'wood']

function buildChair(kit: ModelKit) {
  const chair = new T.Group()
  chair.add(kit.box([0, 0.28, 0], [0.92, 0.10, 0.56], FRAME))
  chair.add(kit.box([0, 0.36, 0], [0.80, 0.06, 0.48], CLOTH))
  // 靠背向后倾斜
  const back = kit.box([0, 0.62, -0.30], [0.88, 0.62, 0.09], FRAME)
  back.rotation.x = -0.42
  chair.add(back)
  for (const side of [-1, 1]) {
    chair.add(kit.box([side * 0.42, 0.14, 0.22], [0.08, 0.28, 0.08], FRAME))
    chair.add(kit.box([side * 0.42, 0.20, -0.24], [0.08, 0.40, 0.08], FRAME))
  }
  return chair
}

export function addHarborMayor(scene: T.Scene, kit: ModelKit) {
  const chair = buildChair(kit)
  const chairY = DECK + groundElevation(MAYOR_NPC.chair.x, MAYOR_NPC.chair.z)
  chair.position.set(MAYOR_NPC.chair.x, chairY, MAYOR_NPC.chair.z)
  chair.rotation.y = MAYOR_NPC.restYaw
  scene.add(chair)

  const actor = createHarborAvatar(kit, {
    hair: '#cdc6bd', skin: '#d9b394', shirt: '#4d5a68', trousers: '#3d454e', hat: false, headwear: 'bandana',
  })
  scene.add(actor.avatar)
  const pose: HarborPlayer = {
    x: MAYOR_NPC.chair.x, z: MAYOR_NPC.chair.z, facing: MAYOR_NPC.restYaw,
    speed: 0, height: 0, elevation: 0, airborne: false, jumpAge: 0, landing: 0,
    sailing: false, sitting: true, lookout: false, swimming: false,
  }
  let indoors = false
  let seated = true

  return (night: number, rain: number, step: number, reduced: boolean) => {
    const retreat = night > MAYOR_NPC.nightFrom || rain > MAYOR_NPC.rainFrom
    if (retreat && !indoors) {
      const dx = MAYOR_NPC.door.x - pose.x
      const dz = MAYOR_NPC.door.z - pose.z
      const distance = Math.hypot(dx, dz)
      if (distance < MAYOR_NPC.hideDistance) {
        indoors = true
        actor.avatar.visible = false
      } else {
        const pace = Math.min(MAYOR_NPC.walkSpeed * step, distance)
        pose.x += dx / distance * pace
        pose.z += dz / distance * pace
        pose.facing = dampAngle(pose.facing, Math.atan2(dx, dz), dampingFactor(step, 0.22))
        pose.speed = MAYOR_NPC.walkSpeed
        seated = false
      }
    } else if (!retreat && indoors) {
      indoors = false
      actor.avatar.visible = true
      Object.assign(pose, MAYOR_NPC.door, { speed: 0, sitting: false })
    } else if (!retreat && !indoors) {
      const dx = MAYOR_NPC.chair.x - pose.x
      const dz = MAYOR_NPC.chair.z - pose.z
      const distance = Math.hypot(dx, dz)
      if (distance < 0.08) {
        Object.assign(pose, MAYOR_NPC.chair, { facing: MAYOR_NPC.restYaw, speed: 0, sitting: true })
        seated = true
      } else {
        const pace = Math.min(MAYOR_NPC.walkSpeed * step, distance)
        pose.x += dx / distance * pace
        pose.z += dz / distance * pace
        pose.facing = dampAngle(pose.facing, Math.atan2(dx, dz), dampingFactor(step, 0.22))
        pose.speed = MAYOR_NPC.walkSpeed
        seated = false
      }
    } else {
      pose.speed = 0
    }
    if (indoors) return
    pose.elevation = groundElevation(pose.x, pose.z)
    // 坐在躺椅上时稍微抬高，落在椅面而不是地面。
    pose.height = seated ? 0.34 : 0
    actor.update(pose, step, reduced)
  }
}
