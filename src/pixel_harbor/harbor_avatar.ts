import * as T from 'three'
import { batchActorBoxes } from './harbor_actor_boxes'
import { DECK } from './harbor_layout'
import type { ModelKit, Point } from './harbor_models'
import { AVATAR_APPEARANCE, JUMP, MOVEMENT, SWIM } from './harbor_movement_config'
import type { HarborPlayer } from './harbor_player_motion'

const VOXEL = 0.065
const SKIN = '#d49f78'
const BOOTS = '#5a443a'
const HAT = '#c19459'
const HAT_BAND = '#815841'
const WALK_CYCLE_DISTANCE = 1.65
const LIMB_SWING = 0.57
const BOB_HEIGHT = 0.038
const FULL_TURN = Math.PI * 2
const SHADOW_RADIUS = 0.29
const SHADOW_SIDES = 8
const SHADOW_CLEARANCE = 0.005
const SHADOW_OPACITY = 0.26
const JUMP_PEAK = JUMP.lift ** 2 / (2 * JUMP.gravity)
type Appearance = typeof AVATAR_APPEARANCE & {
  skin?: string; boots?: string; traveler?: boolean; badge?: string; hairstyle?: string;
  shoulderBag?: boolean; faceVariant?: number;
  // 头饰变体：默认按 hat 推导，村民用它区分渔帽/头巾。
  headwear?: 'straw' | 'cap' | 'bandana' | 'none';
}

function scaled([x, y, z]: Point): Point {
  return [x * VOXEL, y * VOXEL, z * VOXEL]
}

function makeHead(kit: ModelKit, appearance: Appearance) {
  const head = new T.Group()
  const { hair, hat } = appearance
  const skin = appearance.skin ?? SKIN
  head.add(kit.box(scaled([0, 19, 0]), scaled([7, 6, 6]), [skin]))
  head.add(kit.box(scaled([0, 20.5, -1.6]), scaled([7.4, 4.2, 3.6]), [hair]))
  head.add(kit.box(scaled([0, 22, 0]), scaled([7.4, 1.7, 6.4]), [hair]))
  for (const side of [-1, 1]) {
    head.add(kit.box(scaled([side * 1.72, 19.2, 3.05]), scaled([0.83, 1.04, 0.16]), ['#403733']))
    head.add(kit.box(scaled([side * 3.65, 18.6, 0.7]), scaled([0.83, 1.48, 1.35]), [skin]))
  }
  if (appearance.traveler) {
    const side = appearance.hairstyle === 'tuft' ? 0.87 : -1.75
    head.add(kit.box(scaled([side,22.9,0.45]),scaled([3.65,1.9,4]),[hair]))
    head.add(kit.box(scaled([side+0.7,24.05,0.10]),scaled([1.8,0.87,2.1]),[hair]))
  }
  if (appearance.faceVariant !== undefined) {
    const variant = appearance.faceVariant
    head.add(kit.box(scaled([0,17.7+(variant%3)*0.19,3.05]),scaled([1.1+(variant%3)*0.38,0.27,0.15]),['#614947']))
    head.add(kit.box(scaled([variant%2?1.42:-1.52,22.8,-0.97]),scaled([3.2,1.6+variant*0.10,3.3]),[hair]))
  }
  const headwear = appearance.headwear ?? (hat ? 'straw' : 'none')
  if (headwear === 'straw') {
    head.add(kit.box(scaled([0, 22.25, 0.35]), scaled([9.5, 0.9, 8.5]), [HAT]))
    head.add(kit.box(scaled([0, 23.45, 0]), scaled([7.25, 1.45, 6.3]), [HAT_BAND]))
    head.add(kit.box(scaled([0, 24.15, 0]), scaled([6.65, 1.03, 5.75]), [HAT]))
  } else if (headwear === 'cap') {
    head.add(kit.box(scaled([0, 22.9, 0]), scaled([7.6, 2.1, 6.8]), ['#5d5a52']))
    head.add(kit.box(scaled([0, 22.5, 3.4]), scaled([7.9, 0.55, 2.2]), ['#4e4b45']))
  } else if (headwear === 'bandana') {
    head.add(kit.box(scaled([0, 21.7, 0]), scaled([7.7, 1.5, 6.8]), ['#a2544c']))
    head.add(kit.box(scaled([0, 21.1, -3.05]), scaled([2.0, 1.6, 1.4]), ['#8d453f']))
  }
  return head
}

function makeLimb(kit: ModelKit, { side, kind, appearance }: {
  side: number; kind: 'arm' | 'leg'; appearance: Appearance
}) {
  const limb = new T.Group()
  const isArm = kind === 'arm'
  limb.position.set(...scaled([side * (isArm ? 4.1 : 1.68), isArm ? 15.3 : 7.1, 0]))
  if (isArm) {
    limb.add(kit.box(scaled([0, -2.32, 0]), scaled([2.18, 5.25, 2.98]), [appearance.shirt]))
    limb.add(kit.box(scaled([0, -5.6, 0]), scaled([1.91, 1.62, 2.1]), [appearance.skin ?? SKIN]))
  } else {
    limb.add(kit.box(scaled([0, -2.65, 0]), scaled([2.65, 5.55, 3.4]), [appearance.trousers]))
    limb.add(kit.box(scaled([0, -6.08, 0.58]), scaled([2.74, 2.03, 4.25]), [appearance.boots ?? BOOTS]))
  }
  return limb
}

function makeGroundShadow() {
  const shadow = new T.Mesh(new T.CircleGeometry(SHADOW_RADIUS, SHADOW_SIDES),
    new T.MeshBasicMaterial({ color: '#443830', opacity: SHADOW_OPACITY, transparent: true, depthWrite: false }))
  shadow.rotation.x = -Math.PI / 2
  shadow.position.y = SHADOW_CLEARANCE
  return shadow
}

function dressAvatar(body: T.Group, kit: ModelKit, appearance: Appearance) {
  const hem = new T.Group()
  if (appearance.traveler) {
    body.add(kit.box(scaled([0,13.9,0]),scaled([5.7,4.3,4.07]),[appearance.shirt]))
    for (const [y,width] of [[11.2,6.28],[9.65,6.92],[8.10,7.48]]) {
      hem.add(kit.box(scaled([0,y,0]),scaled([width,1.59,4.18]),[appearance.shirt]))
    }
    const badge = kit.cylinder(scaled([1.4,13.1,2.1]),[0.06,0.06,0.03,8],[appearance.badge ?? '#78844D'])
    badge.rotation.x = Math.PI / 2
    body.add(badge,hem)
  } else body.add(kit.box(scaled([0,12.31,0]),scaled([6.05,7.5,4.02]),[appearance.shirt]))
  if (!appearance.traveler || appearance.shoulderBag) {
    const x = appearance.traveler ? 2.7 : 0
    body.add(kit.box(scaled([x,12.95,-2.17]),scaled([4.45,4.68,1.99]),['#816c4d']))
    body.add(kit.box(scaled([x,14.38,-3.23]),scaled([4.33,1.24,0.32]),['#b39561']))
  }
  return hem
}

export function createHarborAvatar(kit: ModelKit, appearance: Appearance = AVATAR_APPEARANCE) {
  const avatar = new T.Group()
  const body = new T.Group()
  const leftArm = makeLimb(kit, { side: -1, kind: 'arm', appearance })
  const rightArm = makeLimb(kit, { side: 1, kind: 'arm', appearance })
  const leftLeg = makeLimb(kit, { side: -1, kind: 'leg', appearance })
  const rightLeg = makeLimb(kit, { side: 1, kind: 'leg', appearance })
  body.add(kit.box(scaled([0, 8.45, 0]), scaled([6.13, 2.25, 4.03]), [appearance.trousers]))
  const hem = dressAvatar(body, kit, appearance)
  const head = makeHead(kit, appearance)
  body.add(head, leftArm, rightArm, leftLeg, rightLeg)
  const updateBoxes = batchActorBoxes(body)
  const shadow = makeGroundShadow()
  avatar.add(body, shadow)
  let fishingArm: number | undefined
  let phase = 0
  let swimPhase = 0
  let sitBlend = 0
  let flightPose = { blend: 0, lean: 0, bank: 0, arms: 0 }
  return {
    avatar,
    detailAnchor: body,
    head,
    setSitPosture(next: number) { sitBlend = T.MathUtils.clamp(next, 0, 1) },
    setFishingArm(angle?:number) { fishingArm = angle },
    swingCoat(angle: number) { hem.rotation.x = angle },
    wave(amount: number) { rightArm.rotation.z = amount },
    setFlightPose(pose: typeof flightPose) {
      if (!pose.blend && flightPose.blend) leftArm.rotation.z = rightArm.rotation.z = 0
      flightPose = pose
    },
    update(player: HarborPlayer, seconds: number, reduced: boolean) {
      avatar.position.set(player.x, DECK + player.elevation, player.z)
      avatar.rotation.y = player.facing
      const stride = player.speed < MOVEMENT.movementThreshold || reduced || player.sailing
        || player.airborne || player.swimming
        ? 0 : Math.min(player.speed / MOVEMENT.walkSpeed, 1)
      const cycle = player.speed * seconds / WALK_CYCLE_DISTANCE * FULL_TURN
      phase = (phase + cycle) % FULL_TURN
      const swing = Math.sin(phase) * stride * LIMB_SWING
      const launch = player.airborne ? Math.max(0, 1 - player.jumpAge / JUMP.launchPoseTime) : 0
      const rebound = reduced ? 0 : Math.sin(Math.PI * player.landing / JUMP.recovery)
      body.position.y = player.height + Math.abs(Math.sin(phase)) * stride * BOB_HEIGHT
      body.scale.y = 1 - launch * JUMP.launchSquat - rebound * JUMP.landingSquat
      // 每帧从零开始，避免离开飞行/游泳后手臂外张的残留角度。
      leftArm.rotation.z = 0
      rightArm.rotation.z = 0
      const airArm = player.airborne ? JUMP.airArm * (1 - launch) : 0
      const airLeg = player.airborne ? JUMP.airLeg * (1 - launch) : 0
      leftLeg.rotation.x = swing + airLeg
      rightLeg.rotation.x = -swing - airLeg
      leftArm.rotation.x = -swing - airArm
      rightArm.rotation.x = fishingArm ?? swing - airArm
      shadow.scale.setScalar(T.MathUtils.lerp(1, JUMP.shadowScaleAtPeak, Math.min(1, player.height / JUMP_PEAK)))
      if (player.sitting) {
        body.position.y -= 0.29
        leftLeg.rotation.x = rightLeg.rotation.x = -Math.PI * 0.45
        leftArm.rotation.x = rightArm.rotation.x = -0.18
      }
      const { blend, lean, bank, arms } = flightPose
      body.rotation.set(lean, 0, bank)
      if (blend) {
        body.scale.y = T.MathUtils.lerp(body.scale.y, 1, blend)
        leftArm.rotation.x *= 1 - blend
        rightArm.rotation.x *= 1 - blend
        leftArm.rotation.z = -arms
        rightArm.rotation.z = arms
        leftLeg.rotation.x *= 1 - blend
        rightLeg.rotation.x *= 1 - blend
      }
      // 游泳：身体前倾、手臂交替划水、双腿打水。reduced 时只保留轻微幅度。
      if (player.swimming && !blend) {
        swimPhase = (swimPhase + seconds * (SWIM.strokeRate + player.speed * 0.9)) % FULL_TURN
        const stroke = reduced ? 0.35 : Math.sin(swimPhase)
        const kick = reduced ? 0.2 : Math.sin(swimPhase * 2.3)
        body.rotation.set(SWIM.lean, 0, 0)
        body.position.y = player.height + (reduced ? 0 : Math.sin(swimPhase * 2) * SWIM.bob)
        leftArm.rotation.x = -SWIM.armSweep * (0.5 + 0.5 * stroke)
        rightArm.rotation.x = -SWIM.armSweep * (0.5 - 0.5 * stroke)
        leftArm.rotation.z = SWIM.armSpread
        rightArm.rotation.z = -SWIM.armSpread
        leftLeg.rotation.x = kick * SWIM.kick
        rightLeg.rotation.x = -kick * SWIM.kick
      }
      // 坐姿：大腿前伸、上身微后仰、手臂搭在腿上。只在 blend>0 时生效。
      if (sitBlend > 0) {
        const b = sitBlend
        const thigh = -Math.PI / 2 + 0.30 * b
        leftLeg.rotation.x = T.MathUtils.lerp(leftLeg.rotation.x, thigh, b)
        rightLeg.rotation.x = T.MathUtils.lerp(rightLeg.rotation.x, thigh, b)
        leftArm.rotation.x = T.MathUtils.lerp(leftArm.rotation.x, -0.22, b)
        rightArm.rotation.x = T.MathUtils.lerp(rightArm.rotation.x, -0.22, b)
        body.rotation.x = T.MathUtils.lerp(body.rotation.x, 0.28, b)
        // 髋部对齐椅面：脚底原点抬高，身体略前移抵消后仰造成的位置变化
        body.position.y += -0.36 * b
        body.position.z += 0.15 * b
      }
      shadow.visible = !blend && !player.swimming
      updateBoxes()
    },
  }
}
