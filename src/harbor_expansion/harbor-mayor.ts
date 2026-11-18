import * as T from 'three'
import { createHarborAvatar } from '../pixel_harbor/harbor_avatar'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'
import { canWalkAt } from '../pixel_harbor/harbor_layout'
import type { WorldObstacle } from '../pixel_harbor/harbor_layout'
import { nameplate, NAMEPLATE } from '../pixel_harbor/harbor_nameplate'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'
import type { HarborPlayer } from '../pixel_harbor/harbor_player_motion'
import { dampAngle, dampingFactor } from '../pixel_harbor/harbor_damping'

export const MAYOR_NPC = {
  // 只在屋子**东侧（门前）**来回踱步：两个端点，走到头停一下再折返。
  // 屋子范围 x −26.9~−22.5，路线全在 x ≈ −21.2 上，离墙 1.2 米，绝不会走到房子后面。
  route: [
    [-21.30, -3.90], [-21.10, 2.90],
  ] as const,
  // 回屋目标点：屋子东墙外，走到这里就算进门（离墙 0.35 米，碰撞半径 0.26 才过得去）
  door: { x: -22.15, z: -2.9 },
  // 从屋子西侧回去时先绕到这个点（屋子东南角外侧），否则直线会穿屋。
  doorApproach: { x: -21.90, z: 0.20 },
  // 步速：原来 2.1 略快，降 1/3 到 1.4，摆腿约 14°。
  walkSpeed: 1.4,
  radius: 0.26,
  restYaw: Math.PI / 2,
  nightFrom: 0.55,
  rainFrom: 0.35,
  hideDistance: 0.55,
} as const

export const MAYOR_CHAIR = { x: -22.15, z: 0.55, yaw: Math.PI / 2, elevation: DECK }

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

const FRAME: Paint = ['#8a6b4e', 'wood']
const CLOTH: Paint = ['#c8b79a', 'wood']

/** 村长小屋门前的摇椅：座面、靠背、弧形底座 */
function buildChair(kit: ModelKit) {
  const chair = new T.Group()
  chair.add(kit.box([0, 0.28, 0], [0.92, 0.10, 0.56], FRAME))
  chair.add(kit.box([0, 0.36, 0], [0.80, 0.06, 0.48], CLOTH))
  const back = kit.box([0, 0.95, -0.69], [0.94, 1.10, 0.10], FRAME)
  back.rotation.x = -0.62
  const crest = kit.box([0, 1.50, -0.79], [1.02, 0.10, 0.14], FRAME)
  crest.rotation.x = -0.62
  chair.add(crest, back)
  for (const side of [-1, 1]) {
    chair.add(kit.box([side * 0.42, 0.14, 0.22], [0.08, 0.28, 0.08], FRAME))
    chair.add(kit.box([side * 0.42, 0.20, -0.24], [0.08, 0.40, 0.08], FRAME))
  }
  const SEGMENT_COUNT = 9
  const SPAN = 1.34
  const SEG_LEN = SPAN / SEGMENT_COUNT
  for (const side of [-1, 1]) {
    for (let i = 0; i < SEGMENT_COUNT; i++) {
      const u = (i + 0.5) / SEGMENT_COUNT - 0.5
      const lift = 0.16 * u * u * 4
      const seg = kit.box([side * 0.42, 0.04 + lift, u * SPAN], [0.09, 0.06, SEG_LEN + 0.012], FRAME)
      seg.rotation.x = -u * 1.15
      chair.add(seg)
    }
  }
  return chair
}

export function addHarborMayor(scene: T.Scene, kit: ModelKit, obstacles: readonly WorldObstacle[]) {
  const actor = createHarborAvatar(kit, {
    hair: '#cdc6bd', skin: '#d9b394', shirt: '#4d5a68', trousers: '#3d454e',
    hat: false, headwear: 'bandana',
  })
  addPipe(kit, actor.head)
  scene.add(actor.avatar)

  // 守塔人小屋门牌：挂在门上方那面南墙（房子在灯塔西侧，门朝 +z），和村长小屋同一套棕底米白字
  scene.add(nameplate('守塔人小屋', [-2.69, DECK + NAMEPLATE.mountHeight, -19.15], 0))

  // 小屋前的空地不再单独铺一层草：西岸整片地面本身就是草地，再叠一层会露出色差。

  const chair = buildChair(kit)
  chair.rotation.order = 'YXZ'
  chair.rotation.y = MAYOR_CHAIR.yaw
  // 地形高度必须算进去，否则椅子里会埋到地下看不见
  chair.position.set(MAYOR_CHAIR.x, DECK + groundElevation(MAYOR_CHAIR.x, MAYOR_CHAIR.z), MAYOR_CHAIR.z)
  scene.add(chair)
  let chairTime = 0

  const [startX, startZ] = MAYOR_NPC.route[0]
  const pose: HarborPlayer = {
    x: startX, z: startZ, facing: MAYOR_NPC.restYaw,
    speed: 0, height: 0, elevation: 0, airborne: false, jumpAge: 0, landing: 0,
    sailing: false, sitting: false, lookout: false, swimming: false,
  }

  let waypoint = 1
  let indoors = false
  let pause = 0

  function update(night: number, rain: number, step: number, reduced: boolean) {
    // 空椅子也轻轻晃，看起来像有人在刚起身
    chairTime += step
    chair.rotation.x = Math.sin(chairTime * 1.1) * 0.045
    const retreat = night > MAYOR_NPC.nightFrom || rain > MAYOR_NPC.rainFrom

    if (retreat && !indoors) {
      // 往屋里走，到了就隐藏。人在屋子西侧时先绕到屋前，免得直线穿墙。
      const approach = MAYOR_NPC.doorApproach
      const target = pose.x < -22.2 && Math.hypot(approach.x - pose.x, approach.z - pose.z) > 0.5
        ? approach : MAYOR_NPC.door
      const dx = target.x - pose.x
      const dz = target.z - pose.z
      const distance = Math.hypot(dx, dz)
      if (distance < MAYOR_NPC.hideDistance && target === MAYOR_NPC.door) {
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
      } else if (!walk(dx, dz, distance, step)) {
        // 被挡住（比如走到牌子/椅子边上）：等一会儿就直接换下一个点，免得卡死。
        pause = 0.8
        waypoint = (waypoint + 1) % MAYOR_NPC.route.length
      }
    }

    pose.elevation = groundElevation(pose.x, pose.z)
    pose.height = 0
    actor.update(pose, step, reduced)

    function walk(dx: number, dz: number, distance: number, delta: number) {
      const pace = Math.min(MAYOR_NPC.walkSpeed * delta, distance)
      const nextX = pose.x + dx / distance * pace
      const nextZ = pose.z + dz / distance * pace
      // 走之前先问一句能不能站：房子的碰撞盒在障碍表里，这样他就不会走进屋里去。
      if (!canWalkAt(nextX, nextZ, { obstacles, height: 0, radius: MAYOR_NPC.radius })) {
        pose.speed = 0
        return false
      }
      pose.x = nextX
      pose.z = nextZ
      pose.facing = dampAngle(pose.facing, Math.atan2(dx, dz), dampingFactor(delta, 0.22))
      pose.speed = MAYOR_NPC.walkSpeed
      return true
    }
  }
  // pose 是村长此刻站的位置，avatar 用来判断他是不是已经进屋了。
  return { update, pose, avatar: actor.avatar }
}

