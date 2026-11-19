import * as T from 'three'
import { surfaceY } from '../pixel_harbor/harbor_terrain'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 停机坪这层平地上的两个 NPC：果农和飞行员。
// 之前用 createHarborAvatar 搭的版本在场景里没显示出来，这里改成纯方块拼，
// 和北极街区、四合院街区的人物同一套做法，保证能看到。
export const HELIPAD_NPCS = {
  farmer: { x: -4.66, z: 49.52, label: '果农', line: '「来点水果和蔬菜吗？刚摘的。」' },
  // 飞行员站到停机坪围栏外面，否则玩家隔着围栏够不到 3 米内
  pilot: { x: -14.2, z: 42.4, label: '飞行员', line: '「想要开飞机吗？」' },
} as const

const SKIN: Paint = ['#e0bd97']
const STRAW: Paint = ['#d9b866', 'grass']
const SHIRT: Paint = ['#7f8f5a']
const APRON: Paint = ['#c9b78f']
const TROUSER: Paint = ['#5a4a3a']
const LEATHER: Paint = ['#6b4a3a']
const JACKET: Paint = ['#4a5a6b']
const GOGGLE: Paint = ['#2a2a30']
const APPLE: Paint = ['#c8402f']
const BASKET: Paint = ['#a9805a', 'wood']

function body(kit: ModelKit, shirt: Paint, trousers: Paint) {
  const group = new T.Group()
  group.add(kit.box([0, 1.36, 0], [0.22, 0.24, 0.22], SKIN))
  group.add(kit.box([0, 1.02, 0], [0.46, 0.5, 0.28], shirt))
  for (const side of [-1, 1]) {
    group.add(kit.box([side * 0.3, 0.98, 0], [0.14, 0.44, 0.16], shirt))
    group.add(kit.box([side * 0.12, 0.38, 0], [0.16, 0.72, 0.2], trousers))
    group.add(kit.box([side * 0.12, 0.06, 0.03], [0.18, 0.12, 0.26], ['#3a3230']))
  }
  for (const side of [-1, 1]) {
    group.add(kit.box([side * 0.08, 1.38, 0.11], [0.04, 0.04, 0.03], ['#3a3030']))
  }
  // 头发
  group.add(kit.box([0, 1.5, -0.01], [0.24, 0.1, 0.24], ['#4a3b2f']))
  return group
}

export function createHelipadNpcs(scene: T.Scene, kit: ModelKit) {
  const models: T.Group[] = []

  const farmer = body(kit, SHIRT, TROUSER)
  farmer.add(kit.box([0, 1.56, 0], [0.92, 0.08, 0.92], STRAW))
  farmer.add(kit.box([0, 1.66, 0], [0.44, 0.2, 0.44], STRAW))
  farmer.add(kit.box([0, 1.0, 0.16], [0.4, 0.56, 0.05], APRON))
  farmer.add(kit.box([0.55, 0.22, 0.3], [0.5, 0.44, 0.5], BASKET))
  for (const [dx, dz] of [[-0.1, 0], [0.1, 0.08], [0, -0.12]] as const) {
    farmer.add(kit.box([0.55 + dx, 0.5, 0.3 + dz], [0.16, 0.16, 0.16], APPLE))
  }
  farmer.add(kit.box([0.26, 0.96, 0.22], [0.14, 0.14, 0.14], APPLE))
  const farmerY = surfaceY(HELIPAD_NPCS.farmer.x, HELIPAD_NPCS.farmer.z)
  farmer.position.set(HELIPAD_NPCS.farmer.x, farmerY, HELIPAD_NPCS.farmer.z)
  farmer.rotation.y = Math.PI * 0.15
  scene.add(farmer)
  models.push(farmer)

  const pilot = body(kit, JACKET, ['#3a4a55'])
  pilot.add(kit.box([0, 1.6, 0], [0.44, 0.2, 0.44], LEATHER))
  pilot.add(kit.box([0, 1.54, 0.22], [0.34, 0.1, 0.06], GOGGLE))
  pilot.add(kit.box([0, 1.5, 0.21], [0.4, 0.04, 0.1], ['#8a7a68']))
  pilot.add(kit.box([0, 1.18, 0], [0.5, 0.14, 0.34], ['#6b5540', 'wood']))
  // 飞行员站在停机坪的混凝土板上（板面比土高 6~9 厘米）
  const pilotY = surfaceY(HELIPAD_NPCS.pilot.x, HELIPAD_NPCS.pilot.z) + 0.09
  pilot.position.set(HELIPAD_NPCS.pilot.x, pilotY, HELIPAD_NPCS.pilot.z)
  pilot.rotation.y = Math.PI * 0.85
  scene.add(pilot)
  models.push(pilot)

  let clock = 0
  return {
    update(step: number, reduced: boolean) {
      clock += step
      if (reduced) return
      for (const [index, model] of models.entries()) {
        model.rotation.z = Math.sin(clock * (0.9 + index * 0.2) + index * 1.6) * 0.02
      }
    },
  }
}
