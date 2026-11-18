import * as T from 'three'
import { createHarborAvatar } from '../pixel_harbor/harbor_avatar'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'
import { makeCanvas, pixelTexture } from '../pixel_harbor/harbor_materials'
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

/** 门口木牌：把文字画成贴图贴在墙上，和村长小屋的门牌同样做法 */
function addHouseSign(scene: T.Scene, kit: ModelKit, text: string, x: number, y: number, z: number) {
  const { canvas, context } = makeCanvas(256, 64)
  context.fillStyle = '#5b4632'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = '#f2e6cf'
  context.font = 'bold 34px "Microsoft YaHei", sans-serif'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillText(text, canvas.width / 2, canvas.height / 2 + 2)
  const board = new T.Mesh(
    new T.PlaneGeometry(1.5, 0.375),
    new T.MeshBasicMaterial({ map: pixelTexture(canvas) }),
  )
  board.position.set(x, y, z)
  scene.add(board)
  scene.add(kit.box([x, y, z - 0.03], [1.64, 0.48, 0.06], ['#4a3626']))
}

export function addHarborMayor(scene: T.Scene, kit: ModelKit) {
  const actor = createHarborAvatar(kit, {
    hair: '#cdc6bd', skin: '#d9b394', shirt: '#4d5a68', trousers: '#3d454e',
    hat: false, headwear: 'bandana',
  })
  addPipe(kit, actor.head)
  scene.add(actor.avatar)

  // 守塔人小屋门口的门牌（北墙，正对海港）
  addHouseSign(scene, kit, '守塔人小屋', -8.0, DECK + 2.15, -19.04)

  // 小屋前的空地铺一层草地
  const lawn = kit.box([-23.8, DECK + 0.015, -3.0], [12.4, 0.05, 13.6], ['#8ca06a', 'grass'])
  scene.add(lawn)

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

  return (night: number, rain: number, step: number, reduced: boolean) => {
    // 空椅子也轻轻晃，看起来像有人在刚起身
    chairTime += step
    chair.rotation.x = Math.sin(chairTime * 1.1) * 0.045
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

