import * as T from 'three'
import { DECK } from '../pixel_harbor/harbor_terrain'
import { makeCanvas, pixelTexture } from '../pixel_harbor/harbor_materials'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'
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
const COAT: Paint = ['#4d5a68']
const TROUSERS: Paint = ['#3d454e']
const SKIN: Paint = ['#d9b394']
const HAIR: Paint = ['#cdc6bd']
const BANDANA: Paint = ['#a8443b']
const EYE: Paint = ['#403733']


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
  // 摇椅底弧：9 段小方块拼出连续弧线（两端上翘）
  const SEGMENT_COUNT = 9
  const SPAN = 1.34
  const SEG_LEN = SPAN / SEGMENT_COUNT
  for (const side of [-1, 1]) {
    for (let i = 0; i < SEGMENT_COUNT; i++) {
      const u = (i + 0.5) / SEGMENT_COUNT - 0.5
      const z = u * SPAN
      const lift = 0.16 * u * u * 4
      const tilt = -u * 1.15
      const seg = kit.box([side * 0.42, 0.04 + lift, z], [0.09, 0.06, SEG_LEN + 0.012], FRAME)
      seg.rotation.x = tilt
      chair.add(seg)
    }
  }
  return chair
}

/**
 * 坐着的老爷爷：全部是摆好角度的静态方块，没有任何关节或运行时偏移。
 * 所有坐标都在椅子本地空间里，因此椅子怎么摇，他就怎么摇，不会错位。
 */
function buildSeatedMayor(kit: ModelKit) {
  const group = new T.Group()

  // 骨盆与大腿：水平前伸
  group.add(kit.box([0, 0.48, -0.02], [0.34, 0.18, 0.30], TROUSERS))
  for (const side of [-1, 1]) {
    group.add(kit.box([side * 0.11, 0.44, 0.16], [0.13, 0.13, 0.36], TROUSERS))
    group.add(kit.box([side * 0.11, 0.27, 0.31], [0.12, 0.30, 0.13], TROUSERS))
    group.add(kit.box([side * 0.11, 0.10, 0.34], [0.14, 0.10, 0.20], ['#3a3f45']))
  }

  // 躯干：整体后仰贴在椅背上
  const torso = new T.Group()
  torso.position.set(0, 0.55, -0.05)
  torso.rotation.x = -0.42
  torso.add(kit.box([0, 0.20, 0], [0.36, 0.44, 0.26], COAT))
  torso.add(kit.box([0, 0.40, 0.02], [0.30, 0.10, 0.24], ['#5a6a76'])) // 领口
  group.add(torso)

  // 手臂：从肩膀斜搭到大腿上
  for (const side of [-1, 1]) {
    const arm = new T.Group()
    arm.position.set(side * 0.22, 0.30, 0.02)
    arm.rotation.x = 0.95
    arm.add(kit.box([0, -0.16, 0], [0.10, 0.34, 0.12], COAT))
    arm.add(kit.box([0, -0.34, 0.02], [0.11, 0.10, 0.13], SKIN)) // 手
    torso.add(arm)
    arm.position.y = 0.06
  }

  // 头：向后靠在椅背上，略微前倾打盹
  const head = new T.Group()
  head.position.set(0, 0.52, 0.03)
  head.rotation.x = 0.20
  head.add(kit.box([0, 0, 0], [0.26, 0.26, 0.24], SKIN))
  head.add(kit.box([0, 0.15, -0.01], [0.28, 0.07, 0.26], HAIR))
  head.add(kit.box([0, 0.10, 0], [0.30, 0.08, 0.28], BANDANA))
  head.add(kit.box([0, -0.02, 0.05], [0.16, 0.05, 0.16], ['#e8dcc8'])) // 下巴/胡子
  // 闭着的眼睛：两条细横线
  for (const side of [-1, 1]) head.add(kit.box([side * 0.07, 0.03, 0.125], [0.05, 0.018, 0.01], EYE))
  torso.add(head)

  return { group, head }
}

// 打瞌睡时头顶飘出的「Z」
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
  chair.rotation.order = 'YXZ'
  chair.rotation.y = MAYOR_NPC.restYaw
  chair.position.set(MAYOR_NPC.chair.x, DECK, MAYOR_NPC.chair.z)
  scene.add(chair)

  const { group, head } = buildSeatedMayor(kit)
  group.position.set(0, -0.05, -0.09)
  chair.add(group)

  const zMarks = [makeZMark(), makeZMark(), makeZMark()]
  zMarks.forEach(z => group.add(z))

  let rockTime = 0
  let doze = 0

  return (night: number, rain: number, step: number, reduced: boolean) => {
    rockTime += step
    // 前后摇晃
    chair.rotation.x = Math.sin(rockTime * 1.35) * 0.11
    // 睡着了头会缓慢点一下
    const target = Math.sin(rockTime * 0.5) * 0.06
    doze += (target - doze) * Math.min(1, step * 2)
    head.rotation.x = 0.20 + doze
    // Z 字上飘
    const calmer = night > 0.55 || rain > 0.35
    zMarks.forEach((mark, index) => {
      const phase = ((rockTime * (calmer ? 0.16 : 0.22)) + index / zMarks.length) % 1
      mark.position.set(0.12 + phase * 0.20, 1.42 + phase * 0.62, -0.30)
      mark.scale.setScalar(0.75 + phase * 0.7)
      const material = mark.material as T.MeshBasicMaterial
      material.opacity = Math.max(0, 1 - phase) * 0.95
      mark.visible = !reduced
    })
  }
}
