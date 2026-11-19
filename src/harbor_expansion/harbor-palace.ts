import * as T from 'three'
import { surfaceY } from '../pixel_harbor/harbor_terrain'
import { updateDrill, drillSpot, type DrillPerson } from './harbor-morning'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 第三层梯田改成「浅紫色宫殿」街区：淡紫墙、白柱、金饰、层叠的檐口。
// 门前一列穿紫白宫装的侍从，晴天会出来走动。
export type PalaceSite = { x: number; y: number; z: number; w: number; h: number; d: number; index: number }

export const PALACE_SITES: PalaceSite[] = []

const LAVENDER: Paint = ['#d9cfe8', 'brick']
const LAVENDER_DEEP: Paint = ['#c3b3d9', 'brick']
const WHITE: Paint = ['#f4f1f7']
const GOLD: Paint = ['#dcb96a']
const ROOF: Paint = ['#b39ccb', 'roof']
const WINDOW: Paint = ['#ffeec2']

export function addPalace(group: T.Object3D, kit: ModelKit, site: PalaceSite) {
  const { x, y, z, w, h, d } = site
  PALACE_SITES[site.index] = site
  // 白色台基
  group.add(kit.box([x, y + 0.16, z], [w + 0.7, 0.32, d + 0.7], WHITE))
  // 浅紫墙体
  group.add(kit.box([x, y + 0.32 + (h - 0.32) / 2, z], [w, h - 0.32, d], LAVENDER))
  group.add(kit.box([x, y + h - 0.3, z], [w + 0.1, 0.3, d + 0.1], LAVENDER_DEEP))
  // 四根白柱 + 金色柱头
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      group.add(kit.box([x + sx * (w / 2 - 0.1), y + h / 2, z + sz * (d / 2 - 0.08)], [0.22, h, 0.22], WHITE))
      group.add(kit.box([x + sx * (w / 2 - 0.1), y + h - 0.2, z + sz * (d / 2 - 0.08)], [0.3, 0.16, 0.3], GOLD))
    }
  }
  // 拱门 + 金色门框（朝北，对灯塔）
  group.add(kit.box([x, y + 0.32 + 0.7, z - d / 2 - 0.02], [1.1, 1.4, 0.1], LAVENDER_DEEP))
  group.add(kit.box([x, y + 0.32 + 1.42, z - d / 2 - 0.05], [1.4, 0.14, 0.14], GOLD))
  // 两扇高窗 + 金线
  for (const side of [-1, 1]) {
    group.add(kit.box([x + side * (w / 2 - 0.8), y + h - 0.86, z - d / 2 - 0.03], [0.5, 0.8, 0.06], WINDOW))
    group.add(kit.box([x + side * (w / 2 - 0.8), y + h - 0.86, z - d / 2 - 0.06], [0.6, 0.06, 0.04], GOLD))
  }
  // 层叠屋檐：两级出檐 + 白色檐口 + 屋脊
  for (const [index, shrink] of [[0, 0], [1, 0.5]] as const) {
    const slabW = w + 0.9 - shrink
    for (const side of [-1, 1]) {
      const slab = kit.box([x, y + h + 0.2 + index * 0.42, z + side * (d / 4 + 0.12)],
        [slabW, 0.14, (d / 2 + 0.42) / Math.cos(0.34)], ROOF)
      slab.rotation.x = side * 0.34
      group.add(slab)
      const trim = kit.box([x, y + h + 0.12 + index * 0.42, z + side * (d / 2 + 0.42)],
        [slabW + 0.12, 0.1, 0.14], WHITE)
      trim.rotation.x = side * 0.34
      group.add(trim)
    }
  }
  group.add(kit.box([x, y + h + 0.62, z], [w + 1.0, 0.12, 0.22], WHITE))
  // 小尖塔
  group.add(kit.box([x, y + h + 0.9, z], [0.4, 0.5, 0.4], LAVENDER_DEEP))
  group.add(kit.box([x, y + h + 1.2, z], [0.16, 0.3, 0.16], GOLD))
}

// 仙侠剑客：束发、披风、背剑。四栋房两位男剑客、两位女剑客。
const ROBE: Paint[] = [['#cdbfe6'], ['#e2d8f0'], ['#b9a7d4'], ['#f0eaf7']]
const SASH: Paint = ['#d8b25e']
const HAIR: Paint = ['#2b2530']
const BLADE: Paint = ['#d7dde3']
const HILT: Paint = ['#b08a4e']
const SKIN: Paint = ['#e6c8ab']
export const MORNING_SPOT = { x: -22.0, z: -0.4 } as const

function makeSwordsman(kit: ModelKit, robe: Paint, female: boolean, index: number) {
  const group = new T.Group()
  group.add(kit.box([0, 0.34, 0], [female ? 0.44 : 0.5, 0.68, 0.34], robe))
  group.add(kit.box([0, 0.86, 0], [0.42, 0.4, 0.3], robe))
  group.add(kit.box([0, 0.98, 0.15], [0.28, 0.2, 0.06], ['#f7f2ff']))
  const arms: T.Group[] = []
  for (const side of [-1, 1]) {
    const pivot = new T.Group()
    pivot.position.set(side * 0.3, 0.98, 0)
    pivot.add(kit.box([0, -0.18, 0], [0.16, 0.36, 0.2], robe))
    group.add(pivot)
    arms.push(pivot)
  }
  group.add(kit.box([0, 0.7, 0], [0.44, 0.1, 0.32], SASH))
  group.add(kit.box([0, 1.18, 0], [0.26, 0.26, 0.24], SKIN))
  group.add(kit.box([0, 1.34, -0.02], [0.3, 0.14, 0.28], HAIR))
  if (female) {
    group.add(kit.box([0, 1.44, -0.1], [0.34, 0.14, 0.16], HAIR))
    group.add(kit.box([0, 1.36, 0.12], [0.3, 0.1, 0.06], HAIR))
  } else {
    group.add(kit.box([0, 1.44, -0.08], [0.16, 0.16, 0.16], HAIR))
  }
  for (const side of [-1, 1]) group.add(kit.box([side * 0.09, 1.18, 0.13], [0.04, 0.04, 0.04], ['#3a3240']))
  const sheath = kit.box([0, 0.95, -0.22], [0.09, 1.15, 0.1], ['#4a4250'])
  sheath.rotation.z = 0.55
  group.add(sheath)
  const hilt = kit.box([0.36, 1.42, -0.22], [0.08, 0.3, 0.08], HILT)
  hilt.rotation.z = 0.55
  group.add(hilt)
  group.add(kit.box([0.42, 1.56, -0.22], [0.16, 0.05, 0.08], BLADE))
  // 脚下的宝剑板：剑尖朝前（局部 +z）
  const board = new T.Group()
  board.add(kit.box([0, 0, 0.1], [0.22, 0.05, 1.7], BLADE))
  board.add(kit.box([0, 0, 1.02], [0.15, 0.04, 0.26], BLADE))
  board.add(kit.box([0, 0, -0.82], [0.34, 0.07, 0.1], HILT))
  board.add(kit.box([0, 0, -0.98], [0.11, 0.08, 0.26], HILT))
  board.visible = false
  group.add(board)
  group.scale.setScalar(0.94 + (index % 3) * 0.05)
  return { group, arms, board }
}

export function createPalacePeople(scene: T.Scene, kit: ModelKit) {
  const sites = PALACE_SITES.filter(Boolean)
  const people = sites.map((site, index) => {
    const female = index % 2 === 1
    const built = makeSwordsman(kit, ROBE[index % ROBE.length], female, index)
    const model = built.group
    const home = { x: site.x, z: site.z + site.d / 2 + 1.0 }
    model.position.set(home.x, surfaceY(home.x, home.z), home.z)
    scene.add(model)
    return { model, arms: built.arms, board: built.board, female, home, x: home.x, z: home.z, facing: Math.PI,
      spot: drillSpot(index + 0.4, sites.length), route: 0, exercising: 0, clock: index * 2.1,
      partner: -1 } as DrillPerson & { model: T.Group; arms: T.Group[]; board: T.Group; clock: number; female: boolean; partner: number }
  })
  // 两位仙子结伴：0 号男、1 号女、2 号男、3 号女 → 1 和 3 互为搭档
  const femaleIndexes = people.map((p, i) => (p.female ? i : -1)).filter(i => i >= 0)
  if (femaleIndexes.length === 2) {
    people[femaleIndexes[0]].partner = femaleIndexes[1]
    people[femaleIndexes[1]].partner = femaleIndexes[0]
  }
  return {
    update(step: number, night: number, clear: boolean, reduced: boolean) {
      const day = clear && night < 0.5
      for (const [index, person] of people.entries()) {
        // 仙子御剑飞过来（快），男剑客也御剑（稍慢一点点）
        updateDrill(person, day, step, reduced, person.female ? 2.8 : 2.6, 'fly')
        // 御剑飞行途中脚下踩剑，落地操练时收起
        person.board.visible = person.route < 5
        if (person.board.visible) person.board.position.y = -0.44
        if (!day || person.route < 5) { person.model.position.y = surfaceY(person.x, person.z); continue }
        person.clock += step
        if (person.partner >= 0) {
          // 仙子对练：两人对面站，交替挥剑
          const mate = people[person.partner]
          const angle = Math.atan2(mate.x - person.x, mate.z - person.z)
          person.facing = angle
          person.model.rotation.y = angle
          const swing = Math.sin(person.clock * 5 + (index % 2) * Math.PI)
          person.arms[0].rotation.x = -1.2 + swing * 1.1
          person.arms[1].rotation.x = -0.4 - swing * 0.5
          if (!reduced) person.model.position.y = surfaceY(person.x, person.z) + Math.abs(swing) * 0.12
        } else {
          // 男剑客：单人剑式，转身 + 挥剑
          if (reduced) continue
          const swing = Math.sin(person.clock * 4.2)
          person.arms[0].rotation.x = -1.6 + swing * 1.0
          person.arms[1].rotation.x = -0.6
          person.model.rotation.y = Math.atan2(person.x - (-16.72), person.z - (-10.67)) + swing * 0.6
          person.model.position.y = surfaceY(person.x, person.z) + Math.abs(swing) * 0.08
        }
      }
    },
  }
}