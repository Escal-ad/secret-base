import * as T from 'three'
import { surfaceY } from '../pixel_harbor/harbor_terrain'
import { updateDrill, drillSpot, type DrillPerson } from './harbor-morning'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 第二层梯田改成北京四合院风格：青砖墙、红柱红门、出檐的灰瓦大屋顶。
export type SiheyuanSite = { x: number; y: number; z: number; w: number; h: number; d: number; index: number }

export const SIHEYUAN_SITES: SiheyuanSite[] = []

const BRICK: Paint = ['#c9c3b5', 'brick']
const BRICK_DARK: Paint = ['#b3ad9f', 'brick']
const TILE: Paint = ['#6b6f76', 'roof']
const TILE_EDGE: Paint = ['#55585e']
const RED: Paint = ['#a8342c']
const GOLD: Paint = ['#d8b25e']
const PAPER: Paint = ['#ffe6a8']

export function addSiheyuan(group: T.Object3D, kit: ModelKit, site: SiheyuanSite) {
  const { x, y, z, w, h, d } = site
  SIHEYUAN_SITES[site.index] = site
  // 台基
  group.add(kit.box([x, y + 0.14, z], [w + 0.5, 0.28, d + 0.5], BRICK_DARK))
  // 青砖墙体
  group.add(kit.box([x, y + 0.28 + (h - 0.28) / 2, z], [w, h - 0.28, d], BRICK))
  // 四角红柱
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      group.add(kit.box([x + sx * (w / 2 - 0.12), y + h / 2, z + sz * (d / 2 - 0.1)],
        [0.2, h, 0.2], RED))
    }
  }
  // 红门 + 门钉 + 门楣
  group.add(kit.box([x, y + 0.28 + 0.66, z - d / 2 - 0.02], [1.0, 1.32, 0.1], ['#8f2a24']))
  group.add(kit.box([x, y + 1.62, z - d / 2 - 0.06], [1.3, 0.16, 0.12], RED))
  for (const dx of [-0.22, 0, 0.22]) {
    group.add(kit.box([x + dx, y + 0.9, z - d / 2 - 0.08], [0.1, 0.1, 0.04], GOLD))
  }
  // 两扇窗（暖黄纸窗 + 红色窗棂）
  for (const side of [-1, 1]) {
    group.add(kit.box([x + side * (w / 2 - 0.75), y + h - 0.62, z - d / 2 - 0.03], [0.62, 0.62, 0.06], PAPER))
    group.add(kit.box([x + side * (w / 2 - 0.75), y + h - 0.62, z - d / 2 - 0.07], [0.7, 0.06, 0.03], RED))
    group.add(kit.box([x + side * (w / 2 - 0.75), y + h - 0.62, z - d / 2 - 0.07], [0.06, 0.7, 0.03], RED))
  }
  // 大屋顶：出檐（比墙宽 1.0 米）+ 两坡 + 屋脊 + 瓦垄
  const eave = 0.5
  for (const side of [-1, 1]) {
    const slab = kit.box([x, y + h + 0.34, z + side * (d / 4 + 0.1)],
      [w + eave * 2, 0.18, (d / 2 + eave) / Math.cos(0.42)], TILE)
    slab.rotation.x = side * 0.42
    group.add(slab)
    // 檐口压边（深灰）
    const edge = kit.box([x, y + h + 0.2, z + side * (d / 2 + eave * 0.86)], [w + eave * 2, 0.12, 0.16], TILE_EDGE)
    edge.rotation.x = side * 0.42
    group.add(edge)
    // 瓦垄：沿坡面排的细条
    const rows = Math.max(5, Math.round((w + eave * 2) / 0.32))
    for (let index = 0; index < rows; index += 1) {
      const px = x - (w / 2 + eave) + 0.16 + index * ((w + eave * 2) / rows)
      const ridge = kit.box([px, y + h + 0.44, z + side * (d / 4 + 0.1)],
        [0.07, 0.05, (d / 2 + eave) / Math.cos(0.42) * 0.94], TILE_EDGE)
      ridge.rotation.x = side * 0.42
      group.add(ridge)
    }
  }
  // 正脊 + 两端翘起的鸱吻
  group.add(kit.box([x, y + h + 0.72, z], [w + eave * 2 + 0.1, 0.16, 0.3], TILE_EDGE))
  for (const side of [-1, 1]) {
    group.add(kit.box([x + side * (w / 2 + eave), y + h + 0.84, z], [0.22, 0.34, 0.26], TILE_EDGE))
  }
  // 屋檐下两盏红灯笼
  for (const side of [-1, 1]) {
    group.add(kit.box([x + side * (w / 2 - 0.3), y + h - 0.1, z - d / 2 - 0.25], [0.22, 0.28, 0.22], RED))
  }
}

// 少林/武林风：光头、念珠、僧袍
const MONK_ROBE: Paint[] = [['#b8642f'], ['#a8863f'], ['#8f5a3c'], ['#c9a05a']]
const BEADS: Paint = ['#7a4a2a']
const BALD: Paint = ['#e2c2a2']

function makeMonk(kit: ModelKit, robe: Paint, index: number) {
  const group = new T.Group()
  group.add(kit.box([0, 0.34, 0], [0.48, 0.68, 0.34], robe))
  group.add(kit.box([0, 0.86, 0], [0.42, 0.4, 0.3], robe))
  group.add(kit.box([0, 0.98, 0.15], [0.28, 0.2, 0.06], ['#e8d8b8']))
  // 两臂做成可动枢轴，方便练功时挥
  const arms: T.Group[] = []
  for (const side of [-1, 1]) {
    const pivot = new T.Group()
    pivot.position.set(side * 0.28, 0.98, 0)
    pivot.add(kit.box([0, -0.18, 0], [0.18, 0.36, 0.22], robe))
    group.add(pivot)
    arms.push(pivot)
  }
  group.add(kit.box([0, 1.0, 0.17], [0.34, 0.08, 0.08], BEADS))
  group.add(kit.box([0, 0.92, 0.2], [0.16, 0.1, 0.06], BEADS))
  group.add(kit.box([0, 1.2, 0], [0.3, 0.3, 0.28], BALD))
  for (const dx of [-0.06, 0, 0.06]) group.add(kit.box([dx, 1.33, 0.02], [0.03, 0.03, 0.03], ['#b98a6a']))
  for (const side of [-1, 1]) group.add(kit.box([side * 0.1, 1.2, 0.14], [0.04, 0.04, 0.04], ['#3a3030']))
  group.scale.setScalar(0.94 + (index % 3) * 0.05)
  return { group, arms }
}

/** 白天去西岸空地练功，晚上回家。 */
export const MORNING = { x: -16.72, z: -10.67, radius: 2.6 } as const

export function createHanfuPeople(scene: T.Scene, kit: ModelKit) {
  const sites = SIHEYUAN_SITES.filter(Boolean)
  const people = sites.map((site, index) => {
    const built = makeMonk(kit, MONK_ROBE[index % MONK_ROBE.length], index)
    const model = built.group
    const home = { x: site.x, z: site.z + site.d / 2 + 0.95 }
    model.position.set(home.x, surfaceY(home.x, home.z), home.z)
    scene.add(model)
    return { model, arms: built.arms, home, x: home.x, z: home.z, facing: Math.PI,
      spot: drillSpot(index, sites.length), route: 0, exercising: 0,
      role: 'monk' as const, clock: index * 1.7 } as DrillPerson & { model: T.Group; arms: T.Group[]; clock: number }
  })
  return {
    update(step: number, night: number, clear: boolean, reduced: boolean) {
      const day = clear && night < 0.5
      for (const person of people) {
        updateDrill(person, day, step, reduced, 2.5, 'walk')
        // 到操练场之后：练功 / 打坐 交替
        if (day && person.route >= 5) {
          person.clock += step
          const cycle = person.clock % 16
          if (cycle < 8) {
            // 练功：弓步 + 双拳交替推出
            if (reduced) continue
            const punch = Math.sin(person.clock * 6)
            person.arms[0].rotation.x = -1.5 + punch * 0.9
            person.arms[1].rotation.x = -1.5 - punch * 0.9
            person.model.position.y = surfaceY(person.x, person.z) - 0.08
          } else {
            // 打坐：蹲下、双手合十
            person.arms[0].rotation.x = -0.9
            person.arms[1].rotation.x = -0.9
            person.model.position.y = surfaceY(person.x, person.z) - 0.28
          }
        }
      }
    },
  }
}