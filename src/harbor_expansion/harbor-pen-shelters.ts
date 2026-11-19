import * as T from 'three'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'
import { FARM } from './harbor-farm'
import { CHICKEN } from './harbor-chicken'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 下雨/雷阵雨时给羊圈、牛圈、鸡圈搭的棚子：四根柱子 + 一片斜顶。
// 只在有雨的时候出现，晴天收起来（不可见，也不占高度图）。
const POST: Paint = ['#7d5f42', 'wood']
const ROOF: Paint = ['#9a6a55', 'roof']

type Shelter = { x: number; z: number; w: number; d: number }

function buildShelter(scene: T.Scene, kit: ModelKit, site: Shelter) {
  const group = new T.Group()
  const y = DECK + groundElevation(site.x, site.z)
  const height = 2.1
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      group.add(kit.box([site.x + sx * (site.w / 2 - 0.2), y + height / 2, site.z + sz * (site.d / 2 - 0.2)],
        [0.14, height, 0.14], POST))
    }
  }
  for (const side of [-1, 1]) {
    const slope = kit.box([site.x, y + height + 0.24, site.z + side * site.d / 4],
      [site.w + 0.3, 0.14, site.d / 2 + 0.3], ROOF)
    slope.rotation.x = side * 0.3
    group.add(slope)
  }
  group.visible = false
  scene.add(group)
  return group
}

export function createPenShelters(scene: T.Scene, kit: ModelKit) {
  const sheep = FARM.sheepPen
  const cow = FARM.cowPen
  const shelters = [
    buildShelter(scene, kit, { x: (sheep.x0 + sheep.x1) / 2, z: (sheep.z0 + sheep.z1) / 2,
      w: sheep.x1 - sheep.x0, d: sheep.z1 - sheep.z0 }),
    buildShelter(scene, kit, { x: (cow.x0 + cow.x1) / 2, z: (cow.z0 + cow.z1) / 2,
      w: cow.x1 - cow.x0, d: cow.z1 - cow.z0 }),
    buildShelter(scene, kit, { x: CHICKEN.yard.x, z: CHICKEN.yard.z, w: CHICKEN.yard.w, d: CHICKEN.yard.d }),
  ]
  return {
    update(rain: number) {
      const wet = rain > 0.22
      for (const shelter of shelters) shelter.visible = wet
    },
  }
}
