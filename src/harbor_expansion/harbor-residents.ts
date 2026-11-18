import * as T from 'three'
import { RESIDENTS } from './harbor-resident-config'
import { createHarborAvatar } from '../pixel_harbor/harbor_avatar'
import { canWalkAt } from '../pixel_harbor/harbor_layout'
import type { WorldObstacle } from '../pixel_harbor/harbor_layout'
import type { Hotspot } from '../pixel_harbor/harbor_hotspots'
import type { HarborPlayer } from '../pixel_harbor/harbor_player_motion'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import { makeUmbrella } from './harbor-umbrella'
import { dampAngle, dampingFactor } from '../pixel_harbor/harbor_damping'

function nearestHome(x: number, z: number) {
  return RESIDENTS.homes.reduce((best, home) =>
    Math.hypot(x - home[0], z - home[1]) < Math.hypot(x - best[0], z - best[1]) ? home : best,
  RESIDENTS.homes[0])
}

function makeResident(kit: ModelKit, entry: typeof RESIDENTS.people[number], index: number) {
  const [x, z] = entry.spot
  const extra = entry as { build?: readonly [number, number, number]; apron?: string;
    fishing?: boolean; facing?: number; guard?: boolean; post?: boolean;
    homeDoor?: readonly [number, number] }
  const actor = createHarborAvatar(kit, { ...entry, traveler: false, faceVariant: index })
  // 体型：不同村民高矮胖瘦不同，靠缩放区分轮廓。
  if (extra.build) actor.avatar.scale.set(extra.build[0], extra.build[1], extra.build[2])
  // 围裙：贴在身前的一小块布，让渔民和普通人一眼分得开。
  if (extra.apron) actor.detailAnchor.add(kit.box([0, 0.55, 0.155], [0.30, 0.42, 0.04], [extra.apron]))
  // 双筒望远镜：一对镜筒直接贴着两只眼睛（挂在 head 上，跟着头一起动）。
  // 眼珠在 head 局部 scaled([±1.72, 19.2, 3.05])，镜筒从这里朝前伸 0.29 米。
  let glass: T.Group | undefined
  if (extra.guard) {
    glass = new T.Group()
    for (const side of [-1, 1]) {
      const tube = kit.cylinder([0, 0, 0], [0.040, 0.048, 0.20, 6], ['#4e463c'])
      tube.rotation.x = Math.PI / 2
      tube.position.set(side * 0.112, 1.248, 0.36)
      glass.add(tube)
      const rim = kit.cylinder([0, 0, 0], [0.056, 0.056, 0.035, 6], ['#a98a52'])
      rim.rotation.x = Math.PI / 2
      rim.position.set(side * 0.112, 1.248, 0.455)
      glass.add(rim)
    }
    glass.add(kit.box([0, 1.248, 0.33], [0.10, 0.05, 0.06], ['#3d3830']))
    glass.visible = false
    actor.head.add(glass)
  }
  // 钓鱼：右臂举竿 + 鱼竿 / 鱼线 / 浮漂
  if (extra.fishing) {
    actor.setFishingArm(-1.18)
    // 注意：坐着的时候 harbor_avatar 会把手臂角度改成 -0.18（覆盖掉 setFishingArm），
    // 所以竿、线、漂三样都挂在右臂上、按 -0.18 换算成臂坐标，这样线和竿梢永远是连着的。
    // 竿梢落在臂坐标 (0, 0.354, 1.551)，换算到世界坐标约在身前 1.5 米、离地 1.9 米。
    actor.rightArm.add(kit.beam([[0, -0.364, 0.01], [0, 0.354, 1.551]], 0.032, ['#8a6a4a']))
    actor.rightArm.add(kit.beam([[0, 0.354, 1.551], [-0.12, -1.94, 1.88]], 0.013, ['#cdd8d6']))
    // 浮漂落点 ≈ 世界 (13.35, 0.08, 14.10)：离堤边 2 米、与玩家钓点抛出的距离相当
    actor.rightArm.add(kit.box([-0.12, -1.94, 1.88], [0.10, 0.13, 0.10], ['#c0553f']))
    // 小圆凳：挂在 avatar 上，不随身体起伏
    actor.avatar.add(kit.cylinder([0, 0.22, 0], [0.23, 0.25, 0.42, 10], ['#8a6a4a']))
    // 装鱼木桶：也挂在 avatar 上（原本摆在东堤地上的那只改成跟着人走），
    // 这样他夜里回家、下雨收工时，桶会一起消失，不会孤零零留在码头上。
    // 坐标是身体局部系：他面朝 -z，所以世界东侧 0.87 米对应局部 x = -0.87。
    const bx = -0.87
    const bz = -0.04
    actor.avatar.add(kit.cylinder([bx, 0.19, bz], [0.26, 0.24, 0.38, 9], ['#7b6248']))
    for (const y of [0.10, 0.30]) {
      actor.avatar.add(kit.cylinder([bx, y, bz], [0.27, 0.27, 0.05, 9], ['#5d4a36']))
    }
    actor.avatar.add(kit.box([bx, 0.36, bz], [0.40, 0.04, 0.40], ['#4d6b73']))
    actor.avatar.add(kit.box([bx - 0.06, 0.40, bz + 0.03], [0.20, 0.07, 0.09], ['#9aa6a8']))
    actor.avatar.add(kit.box([bx + 0.07, 0.40, bz - 0.04], [0.17, 0.06, 0.08], ['#b0bbbd']))
  }
  // 守塔人：枪斜背在身后（枪托在左胯、枪口过右肩）
  if (extra.guard) {
    actor.detailAnchor.add(kit.beam([[-0.16, 0.52, -0.17], [0.22, 1.30, -0.15]], 0.07, ['#5b4636', 'wood']))
    actor.detailAnchor.add(kit.beam([[0.22, 1.30, -0.15], [0.26, 1.47, -0.14]], 0.04, ['#3d444a']))
  }
  const umbrella = makeUmbrella(kit)
  umbrella.position.set(0.25, 1.02, 0.13)
  actor.avatar.add(umbrella)
  const pose: HarborPlayer = { x, z, facing: extra.facing ?? index, elevation: groundElevation(x,z), speed: 0, height: extra.fishing ? 0.30 : 0,
    landing: 0, jumpAge: 0, airborne: false, lookout: false, sitting: Boolean(extra.fishing), sailing: false, swimming: false }
  return { actor, pose, umbrella, glass, spot: {x,z}, index, time: index * 3, accumulated: 0,
    home: nearestHome(x, z), homeDoor: extra.homeDoor ?? ([x, z] as const),
    sheltering: false, fishing: Boolean(extra.fishing),
    guard: Boolean(extra.guard), post: Boolean(extra.post),
    // 值守状态：坐着/站着、坐站计时、看海计时、手臂角度
    seated: false, hold: RESIDENTS.standSeconds as number, look: RESIDENTS.lookEvery as number,
    arm: undefined as number | undefined, watching: false,
    title: entry.name || `村民 ${index + 1}`, note: [entry.job, entry.line].filter(Boolean).join(' · ') || RESIDENTS.placeholder }
}

function walkTo(person: ReturnType<typeof makeResident>, targetX: number, targetZ: number, nav: { step: number; obstacles: readonly WorldObstacle[] }) {
  const { pose } = person
  const dx = targetX - pose.x
  const dz = targetZ - pose.z
  const distance = Math.hypot(dx, dz)
  const pace = RESIDENTS.speed * nav.step
  const heading = Math.atan2(dx, dz)
  const x = pose.x + Math.sin(heading) * Math.min(pace, distance)
  const z = pose.z + Math.cos(heading) * Math.min(pace, distance)
  pose.speed = 0
  if (canWalkAt(x, z, { obstacles: nav.obstacles, height: 0, radius: 0.23 })) {
    pose.speed = RESIDENTS.speed
    Object.assign(pose, { x, z, elevation: groundElevation(x, z),
      facing: dampAngle(pose.facing, heading, dampingFactor(nav.step, 0.28)) })
  }
}

function walkResident(person: ReturnType<typeof makeResident>, player: HarborPlayer, nav: { step: number; obstacles: readonly WorldObstacle[] }) {
  const { pose, spot, time, index } = person
  const pace = RESIDENTS.speed * nav.step
  const desiredX = spot.x + Math.sin(time * RESIDENTS.patrolRate + index) * 1.6
  const desiredZ = spot.z + Math.cos(time * RESIDENTS.patrolRate) * 0.7
  const dx = desiredX - pose.x
  const dz = desiredZ - pose.z
  const distance = Math.hypot(dx, dz)
  const close = Math.hypot(player.x - pose.x, player.z - pose.z) < 1.02 && !player.lookout
  const heading = close ? Math.atan2(pose.x - player.x, pose.z - player.z) : Math.atan2(dx,dz)
  const x = pose.x + Math.sin(heading) * Math.min(pace, distance)
  const z = pose.z + Math.cos(heading) * Math.min(pace, distance)
  const options = { obstacles: nav.obstacles, height: 0, radius: 0.23 }
  pose.speed = 0
  if (canWalkAt(x, z, options)) {
    // 速度要按**实际位移**报，不能用"离目标还远"来判断：
    // 他追上目标点之后每帧位移很小但一直在走，按旧写法会报 0 → 腿不动、人却在滑。
    const moved = Math.hypot(x - pose.x, z - pose.z)
    pose.speed = moved > 1e-4 ? Math.min(RESIDENTS.speed, moved / Math.max(nav.step, 1e-4)) : 0
    Object.assign(pose, { x,z,elevation: groundElevation(x,z),
      facing: dampAngle(pose.facing,heading,dampingFactor(nav.step,0.28)) })
  }
}

/** 固定岗哨（守塔人）：不巡逻，只在岗亭凳子和站位之间坐/站切换，并周期性举起望远镜看海。 */
function updatePost(person: ReturnType<typeof makeResident>, pose: HarborPlayer, step: number,
  weather: { rain: number; snow: number }) {
  const stormy = weather.rain > RESIDENTS.shelterRain || weather.snow > 0.45
  person.hold -= step
  if (stormy) { person.seated = false; person.hold = RESIDENTS.standSeconds }
  else if (person.hold <= 0) {
    person.seated = !person.seated
    person.hold = person.seated ? RESIDENTS.sitSeconds : RESIDENTS.standSeconds
  }
  // 坐到凳子上 / 站起来：位置在岗哨与凳子之间平滑过渡，朝向始终对着海。
  const goal = person.seated ? RESIDENTS.seat : RESIDENTS.post
  pose.x += (goal.x - pose.x) * dampingFactor(step, 0.35)
  pose.z += (goal.z - pose.z) * dampingFactor(step, 0.35)
  pose.facing = dampAngle(pose.facing, RESIDENTS.gazeYaw, dampingFactor(step, 0.5))
  pose.sitting = person.seated
  pose.height = person.seated ? RESIDENTS.seatHeight : 0
  pose.speed = 0
  // 看海节奏：晴天每 lookEvery 秒举镜 lookLength 秒；雨雪天放下手
  person.look = stormy ? RESIDENTS.lookLength : person.look - step
  if (person.look <= 0) person.look = RESIDENTS.lookEvery + RESIDENTS.lookLength
  person.watching = !stormy && person.look > RESIDENTS.lookEvery
  const arm = person.watching ? RESIDENTS.watchArm : RESIDENTS.carryArm
  person.arm = person.arm === undefined ? arm : person.arm + (arm - person.arm) * dampingFactor(step, 0.25)
  person.actor.setFishingArm(person.arm)
  if (person.glass) person.glass.visible = person.watching && person.arm < -1.1
}

export function addHarborResidents(scene: T.Scene, kit: ModelKit, obstacles: readonly WorldObstacle[]) {
  const residents = RESIDENTS.people.map((entry,index) => makeResident(kit,entry,index))
  residents.forEach(({ actor, pose }) => { actor.update(pose,0,true); scene.add(actor.avatar) })
  // 守塔人的岗亭：一张凳子（他坐上去的位置）+ 夜里点亮的小夜灯
  scene.add(kit.cylinder([RESIDENTS.seat.x, DECK + 0.22, RESIDENTS.seat.z],
    [0.23, 0.25, 0.42, 10], ['#8a6a4a']))
  scene.add(kit.box([RESIDENTS.lamp.x, DECK + 0.45, RESIDENTS.lamp.z], [0.10, 0.90, 0.10], ['#595655']))
  const lampLight = new T.Mesh(new T.BoxGeometry(), new T.MeshBasicMaterial({ color: '#ffd79b' }))
  lampLight.scale.set(0.24, 0.24, 0.24)
  lampLight.position.set(RESIDENTS.lamp.x, DECK + 0.98, RESIDENTS.lamp.z)
  const lampHalo = new T.Mesh(new T.BoxGeometry(),
    new T.MeshBasicMaterial({ color: '#ffd79b', transparent: true, opacity: 0.24 }))
  lampHalo.scale.set(0.66, 0.66, 0.66)
  lampHalo.position.copy(lampLight.position)
  const lamp = new T.Group()
  lamp.add(lampLight, lampHalo)
  lamp.visible = false
  scene.add(lamp)
  return {
    update(player: HarborPlayer, step: number,
      options: { night: number; rain: number; snow: number; reduced: boolean; limit: number }) {
      const shelter = options.night > RESIDENTS.shelterNight || options.rain > RESIDENTS.shelterRain
      lamp.visible = options.night > 0.5
      for (const person of residents) {
        const { index, pose, actor } = person
        // 值守的人（守塔人）不受天气影响，雨雪天照常巡逻，也不回家躲着。
        if (shelter && !person.guard) {
          // 渔民收工：站起来、扛着渔具和鱼桶，慢慢走回渔民小屋门口，到了才进屋（隐藏）
          if (person.fishing) {
            if (person.sheltering) { actor.avatar.visible = false; continue }
            const door = person.homeDoor
            const left = Math.hypot(door[0] - pose.x, door[1] - pose.z)
            if (left < 0.5) {
              actor.avatar.visible = false
              person.sheltering = true
              continue
            }
            actor.avatar.visible = true
            pose.sitting = false
            pose.height = 0
            person.accumulated += step
            if (person.accumulated < RESIDENTS.cadence) continue
            const walk = person.accumulated; person.accumulated = 0
            walkTo(person, door[0], door[1], { step: walk, obstacles })
            person.umbrella.visible = options.rain > 0.32
            actor.update(pose, walk, options.reduced)
            continue
          }
          // 收工回家：走到最近的屋子门口就进屋（隐藏），白天再出来。
          const distance = Math.hypot(person.home[0] - pose.x, person.home[1] - pose.z)
          if (distance < RESIDENTS.shelterDistance) {
            actor.avatar.visible = false
            person.sheltering = true
            continue
          }
          actor.avatar.visible = index < options.limit || person.fishing
          person.accumulated += step
          if (person.accumulated < RESIDENTS.cadence) continue
          const walk = person.accumulated; person.accumulated = 0
          pose.sitting = false
          walkTo(person, person.home[0], person.home[1], { step: walk, obstacles })
          person.umbrella.visible = options.rain > 0.32 && !person.guard
          actor.update(pose, walk, options.reduced)
          continue
        }
        // 天亮 / 雨停：昨天进了屋的渔民，从门口慢慢走回钓位，坐下重新开竿
        if (!shelter && person.fishing && person.sheltering) {
          const left = Math.hypot(person.spot.x - pose.x, person.spot.z - pose.z)
          actor.avatar.visible = true
          pose.sitting = false
          pose.height = 0
          person.accumulated += step
          if (person.accumulated < RESIDENTS.cadence) continue
          const walk = person.accumulated; person.accumulated = 0
          if (left < 0.4) {
            person.sheltering = false
            Object.assign(pose, { x: person.spot.x, z: person.spot.z, height: 0.30, sitting: true })
          } else {
            walkTo(person, person.spot.x, person.spot.z, { step: walk, obstacles })
          }
          actor.update(pose, walk, options.reduced)
          continue
        }
        person.sheltering = false
        actor.avatar.visible = index < options.limit || person.fishing
        const close = Math.hypot(player.x-pose.x,player.z-pose.z) < RESIDENTS.activityRadius
        person.accumulated += step
        if (!close && person.accumulated < RESIDENTS.cadence) continue
        const elapsed = person.accumulated; person.accumulated = 0
        person.time += elapsed
        // 钓鱼的人只要不在钓位上（例如收工路上天气又转好），先走回钓位再坐下
        if (person.fishing && Math.hypot(person.spot.x - pose.x, person.spot.z - pose.z) > 0.4) {
          pose.sitting = false
          pose.height = 0
          walkTo(person, person.spot.x, person.spot.z, { step: elapsed, obstacles })
          actor.update(pose, elapsed, options.reduced)
          continue
        }
        if (person.fishing) pose.height = 0.30
        pose.sitting = person.fishing || (index % 3 === 0 && Math.sin(person.time * 0.22) < -0.28)
        pose.speed = 0
        // 固定岗哨（守塔人）不走路：坐/站切换 + 举望远镜看海都在 updatePost 里。
        if (person.post) updatePost(person, pose, elapsed, { rain: options.rain, snow: options.snow })
        // 只有巡逻的村民才踱步
        if (!person.post && !person.fishing && !pose.sitting) walkResident(person,player,{step:elapsed,obstacles})
        person.umbrella.visible = options.rain > 0.32 && !person.watching
        actor.update(pose,elapsed,options.reduced || !close)
      }
    },
    hotspot(player: HarborPlayer): Hotspot | null {
      const person = residents.find(({ actor, pose }) => actor.avatar.visible && Math.hypot(player.x-pose.x,player.z-pose.z)<RESIDENTS.radius)
      if (!person) return null
      return { id: `resident-${person.index}`, kind: 'resident', title: person.title, label: RESIDENTS.greet,
        note: person.note, x: person.pose.x, z: person.pose.z, radius: RESIDENTS.radius }
    },
    targets: residents.map(person => ({ id: `resident-${person.index}`, object: person.actor.avatar,
      detailAnchor: person.actor.detailAnchor, title: person.title, height: 1.28 })),
    // 供外部挂"跟着人走"的碰撞盒：pose 是位置，avatar 用来判断这个人此刻在不在场。
    followers: residents.map(person => ({ pose: person.pose, avatar: person.actor.avatar })),
  }
}
