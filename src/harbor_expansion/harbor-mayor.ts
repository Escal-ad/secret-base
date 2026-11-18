import * as T from 'three'
import { createHarborAvatar } from '../pixel_harbor/harbor_avatar'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'
import type { HarborPlayer } from '../pixel_harbor/harbor_player_motion'
import { dampAngle, dampingFactor } from '../pixel_harbor/harbor_damping'

export const MAYOR_NPC = {
  // 村长小屋门前的一圈踱步路线
  route: [
    [-22.15, 0.55], [-21.10, 2.60], [-24.60, 3.40],
    [-26.30, 1.20], [-25.40, -3.60], [-23.20, -4.40],
  ] as const,
  // 回屋目标点：屋子东墙外，走到这里就算进门
  door: { x: -22.35, z: -2.9 },
  walkSpeed: 0.52,
  restYaw: Math.PI / 2,
  nightFrom: 0.55,
  rainFrom: 0.35,
  hideDistance: 0.55,
} as const

const PIPE: Paint = ['#6b4a34']
const BOWL: Paint = ['#4a3324']
const EMBER: Paint = ['#d8894a']

/** 嘴上的老式烟管：一根细杆 + 烟锅 + 一点火星 */
function addPipe(kit: ModelKit, head: T.Group) {
  const stem = kit.box([0.02, 1.15, 0.28], [0.022, 0.022, 0.16], PIPE)
  stem.rotation.x = -0.22
  head.add(stem)
  const bowl = kit.box([0.02, 1.14, 0.37], [0.045, 0.05, 0.045], BOWL)
  head.add(bowl)
  head.add(kit.box([0.02, 1.17, 0.37], [0.03, 0.012, 0.03], EMBER))
}

export function addHarborMayor(scene: T.Scene, kit: ModelKit) {
  const actor = createHarborAvatar(kit, {
    hair: '#cdc6bd', skin: '#d9b394', shirt: '#4d5a68', trousers: '#3d454e',
    hat: false, headwear: 'bandana',
  })
  addPipe(kit, actor.head)
  scene.add(actor.avatar)

  const [startX, startZ] = MAYOR_NPC.route[0]
  const pose: HarborPlayer = {
    x: startX, z: startZ, facing: MAYOR_NPC.restYaw,
    speed: 0, height: 0, elevation: 0, airborne: false, jumpAge: 0, landing: 0,
    sailing: false, sitting: false, lookout: false, swimming: false,
  }

  let waypoint = 1
  let indoors = false
  let pause = 0

  return (night: number, rain: number, step: number, reduced: boolean) => {
    const retreat = night > MAYOR_NPC.nightFrom || rain > MAYOR_NPC.rainFrom

    if (retreat && !indoors) {
      // 往屋里走，到了就隐藏
      const dx = MAYOR_NPC.door.x - pose.x
      const dz = MAYOR_NPC.door.z - pose.z
      const distance = Math.hypot(dx, dz)
      if (distance < MAYOR_NPC.hideDistance) {
        indoors = true
        actor.avatar.visible = false
      } else {
        walk(dx, dz, distance, step)
      }
    } else if (!retreat && indoors) {
      // 早上出门
      indoors = false
      actor.avatar.visible = true
      Object.assign(pose, { x: MAYOR_NPC.door.x, z: MAYOR_NPC.door.z, speed: 0 })
      waypoint = 0
    } else if (indoors) {
      actor.update(pose, step, reduced)
      return
    } else if (pause > 0) {
      // 停下来抽口烟
      pause -= step
      pose.speed = 0
    } else {
      const [tx, tz] = MAYOR_NPC.route[waypoint]
      const dx = tx - pose.x
      const dz = tz - pose.z
      const distance = Math.hypot(dx, dz)
      if (distance < 0.18) {
        waypoint = (waypoint + 1) % MAYOR_NPC.route.length
        pause = 1.2 + Math.random() * 1.6
        pose.speed = 0
      } else {
        walk(dx, dz, distance, step)
      }
    }

    pose.elevation = groundElevation(pose.x, pose.z)
    pose.height = 0
    actor.update(pose, step, reduced)

    function walk(dx: number, dz: number, distance: number, delta: number) {
      const pace = Math.min(MAYOR_NPC.walkSpeed * delta, distance)
      pose.x += dx / distance * pace
      pose.z += dz / distance * pace
      pose.facing = dampAngle(pose.facing, Math.atan2(dx, dz), dampingFactor(delta, 0.22))
      pose.speed = MAYOR_NPC.walkSpeed
    }
  }
}

export const MAYOR_CHAIR = { x: -22.15, z: 0.55, yaw: Math.PI / 2, elevation: DECK }
