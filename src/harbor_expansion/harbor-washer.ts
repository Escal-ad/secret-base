import * as T from 'three'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'

import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 西岸沙滩上洗衣服的老妇人：跪在地上、弓着背，面前一只清水桶（棒槌在里面捶衣服），
// 她左边另一只桶装着洗好的衣服。捶一阵会停下来擦擦汗。
export const WASHER = {
  x: -11.75, z: -8.45,
  facing: Math.PI / 2,
} as const

const SKIN: Paint = ['#d8b393']
const HAIR: Paint = ['#cfcac2']
const ROBE: Paint = ['#5d6470']
const APRON: Paint = ['#8f9a86']
const BUCKET: Paint = ['#8a6a4a', 'wood']
const CLOTH: Paint = ['#d5e0e8']
const CLOTH_WARM: Paint = ['#d99b8a']
const PADDLE: Paint = ['#a9855f', 'wood']
const WATER: Paint = ['#7fa9b5']

export function createWasher(scene: T.Scene, kit: ModelKit) {
  const y = DECK + groundElevation(WASHER.x, WASHER.z)
  const group = new T.Group()
  group.position.set(WASHER.x, y, WASHER.z)
  group.rotation.y = WASHER.facing

  // 跪姿：整个人压低 0.34 米，腿折在身下
  const body = new T.Group()
  group.add(body)
  body.position.y = 0.34
  // 弓着的背：上半身整体前倾
  const torso = new T.Group()
  torso.rotation.x = 0.42
  torso.position.y = 0.42
  body.add(torso)
  torso.add(kit.box([0, 0.2, 0], [0.42, 0.52, 0.28], ROBE))
  torso.add(kit.box([0, 0.18, 0.16], [0.36, 0.4, 0.06], APRON))
  torso.add(kit.box([0, 0.52, 0.06], [0.28, 0.28, 0.26], SKIN))
  torso.add(kit.box([0, 0.68, 0.02], [0.32, 0.13, 0.3], HAIR))
  torso.add(kit.box([0, 0.62, -0.12], [0.2, 0.16, 0.14], HAIR))
  for (const side of [-1, 1]) {
    torso.add(kit.box([side * 0.09, 0.55, 0.18], [0.05, 0.05, 0.04], ['#3a3a3a']))
  }
  // 跪着的腿
  body.add(kit.box([0, 0.08, 0.16], [0.36, 0.16, 0.42], ROBE))
  body.add(kit.box([0, 0.05, -0.12], [0.34, 0.1, 0.24], ['#4a4f58']))

  // 两条腿（提着桶走路时用；跪着洗衣时收起来）
  const legs: T.Group[] = []
  for (const side of [-1, 1]) {
    const leg = new T.Group()
    leg.position.set(side * 0.11, 0.62, 0)
    leg.add(kit.box([0, -0.3, 0], [0.15, 0.6, 0.17], ROBE))
    leg.add(kit.box([0, -0.58, 0.02], [0.17, 0.1, 0.24], ['#4a4f58']))
    leg.visible = false
    group.add(leg)
    legs.push(leg)
  }
  // 右臂：以肩膀为轴上下捶（动画主角）
  const shoulder = new T.Group()
  shoulder.position.set(0.22, 0.42, 0.12)
  torso.add(shoulder)
  shoulder.add(kit.box([0, -0.16, 0.04], [0.11, 0.34, 0.11], ROBE))
  const paddle = kit.box([0, -0.42, 0.12], [0.08, 0.52, 0.09], PADDLE)
  paddle.rotation.x = 0.7
  shoulder.add(paddle)
  // 左臂：扶着桶沿
  torso.add(kit.box([-0.24, 0.16, 0.1], [0.11, 0.34, 0.11], ROBE))

  // 面前的清水桶（衣服泡在里面，棒槌往这里捶）
  group.add(kit.cylinder([0.05, 0.2, 0.72], [0.26, 0.28, 0.4, 10], BUCKET))
  group.add(kit.box([0.05, 0.41, 0.72], [0.44, 0.03, 0.44], WATER))
  group.add(kit.box([0.05, 0.45, 0.72], [0.34, 0.08, 0.32], CLOTH))
  // 左手边：洗好的衣服
  group.add(kit.cylinder([-0.72, 0.2, 0.22], [0.24, 0.26, 0.4, 10], BUCKET))
  group.add(kit.box([-0.72, 0.42, 0.22], [0.34, 0.12, 0.34], CLOTH_WARM))
  group.add(kit.box([-0.7, 0.5, 0.24], [0.26, 0.1, 0.26], CLOTH))

  scene.add(group)

  // 夜里跟村长一起回村长小屋
  // 夜里走到门口直接进屋（进门后隐藏），早上从门口出来
  const DOOR = { x: -22.0, z: -2.9 }
  let inside = false
  let clock = 0
  let wipe = 0
  let wipeTimer = 7 + Math.random() * 5
  return {
    update(step: number, reduced: boolean, night = 0) {
      clock += step
      if (night > 0.55 && inside) return
      if (night <= 0.55 && inside) {
        // 早上从屋里出来
        group.position.set(DOOR.x + 0.6, y, DOOR.z + 0.6)
        group.visible = true
        inside = false
      }
      const target = night > 0.55 ? DOOR : { x: WASHER.x, z: WASHER.z }
      const dx = target.x - group.position.x
      const dz = target.z - group.position.z
      const distance = Math.hypot(dx, dz)
      if (distance > 0.4) {
        // 收起跪姿、提着桶往回走
        const move = Math.min(0.62 * step, distance)
        group.position.x += dx / distance * move
        group.position.z += dz / distance * move
        group.rotation.y = Math.atan2(dx, dz)
        body.position.y = 0.6
        torso.rotation.x = 0.12
        shoulder.rotation.x = -0.25
        // 提着桶走路：两条腿前后摆
        legs[0].visible = true
        legs[1].visible = true
        const swing = reduced ? 0 : Math.sin(clock * 7) * 0.55
        legs[0].rotation.x = swing
        legs[1].rotation.x = -swing
        if (!reduced) group.position.y = y + Math.abs(Math.sin(clock * 7)) * 0.03
        return
      }
      group.position.y = y
      group.rotation.y = WASHER.facing
      legs[0].visible = false
      legs[1].visible = false
      if (night > 0.55) {
        // 到门口：进屋睡觉
        inside = true
        group.visible = false
        return
      }
      body.position.y = night > 0.55 ? 0.3 : 0.34
      if (night > 0.55) {
        // 到家：收工歇着，不再捶衣服
        torso.rotation.x = 0.2
        shoulder.rotation.x = -0.3
        return
      }
      if (reduced) { shoulder.rotation.x = -0.2; shoulder.rotation.z = 0; return }
      if (wipe > 0) {
        // 擦汗：慢慢抬手到额头，停一下，再放下
        wipe = Math.max(0, wipe - step / 2.4)
        const t = 1 - wipe
        const rise = Math.sin(Math.min(1, t * 1.6) * Math.PI / 2)
        shoulder.rotation.x = -0.2 - rise * 1.9
        shoulder.rotation.z = -rise * 0.32
        torso.rotation.x = 0.42 - rise * 0.2
        if (wipe <= 0) wipeTimer = 8 + Math.random() * 6
        return
      }
      wipeTimer -= step
      if (wipeTimer <= 0) { wipe = 1; return }
      // 捶衣服：抬起—砸下，带一点点搓
      const beat = Math.sin(clock * 2.6)
      shoulder.rotation.x = -0.2 + beat * 0.5
      shoulder.rotation.z = Math.sin(clock * 1.3) * 0.1
      torso.rotation.x = 0.42 + Math.sin(clock * 2.6) * 0.03
    },
  }
}
