import * as T from 'three'
import { surfaceY } from '../pixel_harbor/harbor_terrain'
import { seededRandom } from '../pixel_harbor/harbor_materials'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 第一层梯田改成北极街区：尖顶屋（蓝白为主），每栋门前一位爱斯基摩人。
// 晴天白天他们会出来在门前走动；夜里/下雨下雪就站在门口不动。
const SNOW: Paint = ['#eef3f7']
const ICE: Paint = ['#cfe1ea']
const TRIM: Paint = ['#3f6d8c']
const ROOF: Paint = ['#4a6b86', 'roof']
const DOOR: Paint = ['#2f4a63']
const GLOW: Paint = ['#ffe6a8']
const FUR: Paint = ['#d8d2c4']
const PARKA: Paint[] = [['#4a7fa8'], ['#b4553f'], ['#5f7f5a'], ['#8a6a9c']]
const BOOT: Paint = ['#6b5a49']

export type ArcticSite = { x: number; y: number; z: number; w: number; h: number; d: number; index: number }

export const ARCTIC_SITES: ArcticSite[] = []

export function addArcticHouse(group: T.Object3D, kit: ModelKit, site: ArcticSite) {
  const { x, y, z, w, h, d } = site
  ARCTIC_SITES[site.index] = site
  // 石基 + 冰蓝色墙 + 白色雪檐
  group.add(kit.box([x, y + 0.16, z], [w + 0.2, 0.32, d + 0.2], ['#8b8f94', 'brick']))
  group.add(kit.box([x, y + 0.32 + (h - 0.32) / 2, z], [w, h - 0.32, d], ICE))
  group.add(kit.box([x, y + h - 0.22, z], [w + 0.12, 0.22, d + 0.12], SNOW))
  // 门 + 两扇窗
  // 门朝北（-z），正对灯塔岬角那一边
  group.add(kit.box([x, y + 0.32 + 0.62, z - d / 2 - 0.02], [0.62, 1.24, 0.08], DOOR))
  for (const side of [-1, 1]) {
    group.add(kit.box([x + side * (w / 2 - 0.55), y + h - 0.85, z - d / 2 - 0.03], [0.48, 0.48, 0.06], GLOW))
    group.add(kit.box([x + side * (w / 2 - 0.55), y + h - 0.85, z - d / 2 - 0.06], [0.56, 0.56, 0.02], TRIM))
  }
  // 陡峭的人字尖顶：两片 55° 斜板 + 屋脊 + 雪盖
  const pitch = 0.95
  const slopeLength = (d / 2 + 0.15) / Math.cos(pitch)
  for (const side of [-1, 1]) {
    const slab = kit.box([x, y + h + 0.62, z + side * d / 4],
      [w + 0.4, 0.14, slopeLength], ROOF)
    slab.rotation.x = side * pitch
    group.add(slab)
    const snowSlab = kit.box([x, y + h + 0.72, z + side * d / 4],
      [w + 0.46, 0.08, slopeLength * 0.92], SNOW)
    snowSlab.rotation.x = side * pitch
    group.add(snowSlab)
  }
  group.add(kit.box([x, y + h + 1.02, z], [w + 0.4, 0.14, 0.2], TRIM))
  // 烟囱
  group.add(kit.box([x + w / 4, y + h + 1.05, z - 0.4], [0.3, 0.9, 0.3], ['#7d5f4a', 'brick']))
}

function makeArcticPerson(kit: ModelKit, parka: Paint, index: number) {
  const group = new T.Group()
  group.add(kit.box([0, 0.5, 0], [0.42, 0.72, 0.3], parka))
  // 毛边兜帽
  group.add(kit.box([0, 1.0, 0], [0.4, 0.3, 0.36], parka))
  group.add(kit.box([0, 1.02, 0.16], [0.26, 0.24, 0.06], ['#e3c9a8']))
  group.add(kit.box([0, 1.16, 0], [0.44, 0.12, 0.4], FUR))
  for (const side of [-1, 1]) {
    group.add(kit.box([side * 0.24, 0.54, 0], [0.12, 0.5, 0.12], parka))
    group.add(kit.box([side * 0.1, 0.1, 0], [0.16, 0.2, 0.2], BOOT))
  }
  // 每人身材略有差异
  group.scale.setScalar(0.94 + (index % 3) * 0.05)
  return group
}

export function createArcticPeople(scene: T.Scene, kit: ModelKit) {
  const random = seededRandom(4242)
  const people = ARCTIC_SITES.filter(Boolean).map((site, index) => {
    const model = makeArcticPerson(kit, PARKA[index % PARKA.length], index)
    // 站在门口（房前只有 0.7 米宽的台面，再往前就掉到下一层了）
    // 房前只有 0.7 米宽的窄条（再往前就是下一层梯田），居民就站在这条上
    const home = { x: site.x, z: site.z - site.d / 2 - 0.35 }
    model.position.set(home.x, surfaceY(home.x, home.z), home.z)
    scene.add(model)
    return { model, home, x: home.x, z: home.z, targetX: home.x, targetZ: home.z,
      facing: 0, wait: random() * 3 }
  })

  return {
    update(step: number, night: number, clear: boolean, reduced: boolean) {
      const outside = clear && night < 0.5
      for (const person of people) {
        if (!outside) {
          // 回门口站着
          person.targetX = person.home.x
          person.targetZ = person.home.z
        } else if (Math.hypot(person.targetX - person.x, person.targetZ - person.z) < 0.3) {
          person.wait -= step
          if (person.wait <= 0) {
            person.targetX = person.home.x + (random() - 0.5) * 5.0
            person.targetZ = Math.max(23.6, person.home.z - random() * 0.4)
            person.wait = 2.5 + random() * 4
          }
        }
        const dx = person.targetX - person.x
        const dz = person.targetZ - person.z
        const distance = Math.hypot(dx, dz)
        if (distance > 0.12) {
          const move = Math.min((outside ? 0.55 : 0.4) * step, distance)
          person.x += dx / distance * move
          person.z += dz / distance * move
          person.facing = Math.atan2(dx, dz)
        }
        person.model.position.set(person.x, surfaceY(person.x, person.z), person.z)
        person.model.rotation.y = person.facing
        if (!reduced) person.model.position.y += Math.abs(Math.sin(person.x * 5)) * 0.02
      }
    },
  }
}
