import * as T from 'three'
import { createHarborAvatar } from '../pixel_harbor/harbor_avatar'
import { makeBoat } from '../pixel_harbor/harbor_models'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import { dampAngle, dampingFactor } from '../pixel_harbor/harbor_damping'

// 巡逻渔船：白天在港口外海绕圈，入夜回港停泊。
export const PATROL = {
  // 海上巡逻路线（都在水域内，避开了栈桥、登陆点与东堤）
  route: [[16, -16], [26, -10], [24, 2], [14, -6]] as const,
  berth: { x: 13.2, z: -6.4, yaw: Math.PI / 2 },
  speed: 1.8,
  arrive: 0.9,
  berthArrive: 0.5,
  nightFrom: 0.55,
  bob: 0.042,
  bobRate: 1.35,
  hull: '#6f8570',
} as const

export function addPatrolBoat(scene: T.Scene, kit: ModelKit) {
  const boat = new T.Group()
  const hull = makeBoat(kit, PATROL.hull)
  boat.add(hull)
  // 渔具：船头一个鱼筐，船尾一张矮网架，和玩家能开的绿船区分开。
  boat.add(kit.box([-0.9, 1.02, 0.55], [0.42, 0.28, 0.42], ['#b08a5f', 'wood']))
  boat.add(kit.box([1.05, 1.02, -0.5], [0.9, 0.12, 0.5], ['#8f9a86', 'wood']))
  boat.add(kit.beam([[-1.2, 1.05, -0.55], [1.3, 1.35, -0.55]], 0.05, ['#7d6a55']))
  scene.add(boat)

  // 渔民：用船夫那套配色，站在船舷边钓鱼。
  const fisherman = createHarborAvatar(kit, {
    hair: '#4a3b32', skin: '#c89773', shirt: '#6d7f8a', trousers: '#4b5350', hat: false, headwear: 'cap',
  })
  fisherman.avatar.scale.setScalar(0.62)
  boat.add(fisherman.avatar)
  // 鱼竿：一根斜向海面的竿，加一条线
  boat.add(kit.beam([[-0.05, 1.42, 0.62], [0.34, 2.34, 1.52]], 0.032, ['#8a6a4a']))
  boat.add(kit.beam([[0.34, 2.34, 1.52], [0.30, 0.95, 2.0]], 0.010, ['#c8d2d0']))
  const FISHER_POS = { x: -0.15, y: 0.86, z: 0.32 }

  // 渔民是船的子物体：用本地原点驱动姿态动画，之后再把位置写回船内坐标。
  const pose = { x: 0, z: 0, facing: 0, speed: 0, height: 0,
    elevation: 0, airborne: false, jumpAge: 0, landing: 0,
    sailing: false, sitting: false, lookout: false, swimming: false }
  let waypoint = 1
  let yaw = 0
  let bobTime = 0
  boat.position.set(pose.x, 0.03, pose.z)

  return (night: number, step: number, reduced: boolean) => {
    const returning = night > PATROL.nightFrom
    const target = returning ? PATROL.berth : { x: PATROL.route[waypoint][0], z: PATROL.route[waypoint][1] }
    const dx = target.x - pose.x
    const dz = target.z - pose.z
    const distance = Math.hypot(dx, dz)
    const arrive = returning ? PATROL.berthArrive : PATROL.arrive
    if (distance > arrive) {
      const pace = Math.min(PATROL.speed * step, distance)
      pose.x += dx / distance * pace
      pose.z += dz / distance * pace
      yaw = dampAngle(yaw, Math.atan2(dx, dz), dampingFactor(step, 0.45))
    } else {
      if (returning) {
        yaw = dampAngle(yaw, PATROL.berth.yaw, dampingFactor(step, 0.6))
      } else {
        waypoint = (waypoint + 1) % PATROL.route.length
      }
    }
    bobTime += step
    boat.position.x = pose.x
    boat.position.z = pose.z
    boat.position.y = 0.03 + (reduced ? 0 : Math.sin(bobTime * PATROL.bobRate) * PATROL.bob)
    // makeBoat 的船头朝 -X，所以整体再转 -90°。
    boat.rotation.y = yaw - Math.PI / 2
    boat.rotation.z = reduced ? 0 : Math.sin(bobTime * 0.9) * 0.02
    // 举竿垂钓的姿势
    fisherman.setFishingArm(-1.18)
    fisherman.update(pose, step, reduced)
    fisherman.avatar.position.set(FISHER_POS.x, FISHER_POS.y, FISHER_POS.z)
  }
}
