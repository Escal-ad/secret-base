import * as T from 'three'
import { createHarborAvatar } from '../pixel_harbor/harbor_avatar'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'
import { makeCanvas, pixelTexture } from '../pixel_harbor/harbor_materials'
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
  const back = kit.box([0, 0.95, -0.52], [0.94, 1.10, 0.10], FRAME)
  back.rotation.x = -0.62
  // 椅背上沿的一道横木，视觉上更像包住头的靠背
  const crest = kit.box([0, 1.50, -0.62], [1.02, 0.10, 0.14], FRAME)
  crest.rotation.x = -0.62
  chair.add(crest)
  chair.add(back)
  for (const side of [-1, 1]) {
    chair.add(kit.box([side * 0.42, 0.14, 0.22], [0.08, 0.28, 0.08], FRAME))
    chair.add(kit.box([side * 0.42, 0.20, -0.24], [0.08, 0.40, 0.08], FRAME))
  }
  // 摇椅底弧：用 9 段小方块拼出连续弧线（两端上翘）
  const SEGMENT_COUNT = 9
  const SPAN = 1.34
  const SEG_LEN = SPAN / SEGMENT_COUNT
  for (const side of [-1, 1]) {
    for (let i = 0; i < SEGMENT_COUNT; i++) {
      const u = (i + 0.5) / SEGMENT_COUNT - 0.5          // -0.5 ~ 0.5
      const z = u * SPAN
      const lift = 0.16 * u * u * 4                       // 两端抬升，中间贴地
      const tilt = -u * 1.15                              // 切线与弧线相切
      const seg = kit.box([side * 0.42, 0.04 + lift, z], [0.09, 0.06, SEG_LEN + 0.012], FRAME)
      seg.rotation.x = tilt
      chair.add(seg)
    }
  }
  return chair
}

// 打瞌睡时头顶飘出的「Z」：每片独立材质，方便单独控制透明度
function makeZMark() {
  const { canvas, context } = makeCanvas(32, 32)
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = '#f4efe4'
  context.font = 'bold 26px "Microsoft YaHei", sans-serif'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillText('Z', canvas.width / 2, canvas.height / 2)
  const material = new T.MeshBasicMaterial({ map: pixelTexture(canvas), transparent: true, depthWrite: false })
  return new T.Mesh(new T.PlaneGeometry(0.5, 0.5), material)
}

export function addHarborMayor(scene: T.Scene, kit: ModelKit) {
  const chair = buildChair(kit)
  const chairY = DECK + groundElevation(MAYOR_NPC.chair.x, MAYOR_NPC.chair.z)
  chair.position.set(MAYOR_NPC.chair.x, chairY, MAYOR_NPC.chair.z)
  chair.rotation.order = 'YXZ'
  chair.rotation.y = MAYOR_NPC.restYaw
  scene.add(chair)

  const actor = createHarborAvatar(kit, {
    hair: '#cdc6bd', skin: '#d9b394', shirt: '#4d5a68', trousers: '#3d454e', hat: false, headwear: 'bandana',
  })
  const zMarks = [makeZMark(), makeZMark(), makeZMark()]
  zMarks.forEach(z => actor.avatar.add(z))
  // 闭眼贴片：眼睛位置的两块肤色小方块，打盹时盖上即为闭眼
  const lids = [-1, 1].map(side => {
    const lid = kit.box([side * 0.112, 1.256, 0.206], [0.074, 0.046, 0.012], ['#d9b394'])
    lid.visible = false
    actor.head.add(lid)
    return lid
  })
  scene.add(actor.avatar)
  const pose: HarborPlayer = {
    x: MAYOR_NPC.chair.x, z: MAYOR_NPC.chair.z, facing: MAYOR_NPC.restYaw,
    speed: 0, height: 0, elevation: 0, airborne: false, jumpAge: 0, landing: 0,
    sailing: false, sitting: true, lookout: false, swimming: false,
  }
  let rockTime = 0
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
    // 坐在摇椅上时缓慢前后摇晃
    rockTime += step
    // 椅子和人必须一起摇：村长的模型挂在场景上，不跟着椅子转。
    const rock = seated && !indoors ? Math.sin(rockTime * 1.35) * 0.12 : 0
    chair.rotation.x = rock
    if (indoors) return
    pose.elevation = groundElevation(pose.x, pose.z)
    // 坐在躺椅上时稍微抬高，落在椅面而不是地面。
    pose.height = seated ? 0.34 : 0
    actor.update(pose, step, reduced)
    // 身体跟着椅背后仰，而不是笔直坐着
        actor.detailAnchor.rotation.x = seated && !indoors ? rock - 0.46 : rock
    // 后仰时整体后移，让躯干落进椅面而不是穿过靠背
    actor.detailAnchor.position.z = seated && !indoors ? -0.11 : 0
    // 打盹：头随摇晃缓慢下垂、微微点头
    actor.head.rotation.x = seated && !indoors ? 0.06 + Math.sin(rockTime * 0.55) * 0.10 : 0
    lids.forEach(lid => { lid.visible = seated && !indoors })
    // Z 字：从头顶往上飘，同时放大并淡出，循环三片
    zMarks.forEach((mark, index) => {
      const phase = ((rockTime * 0.22) + index / zMarks.length) % 1
      const awake = seated && !indoors
      mark.position.set(0.10 + phase * 0.18, 1.52 + phase * 0.70, -0.52 - phase * 0.18)
      mark.scale.setScalar(0.8 + phase * 0.7)
      const material = mark.material as T.MeshBasicMaterial
      material.opacity = awake ? Math.max(0, 1 - phase) * 0.95 : 0
      mark.visible = awake
    })
  }
}
