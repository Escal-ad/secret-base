import * as T from 'three'
import { createHarborAvatar } from '../pixel_harbor/harbor_avatar'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'
import { nameplate } from '../pixel_harbor/harbor_nameplate'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 岬角上并排的两间小铺子：云港小卖部 和 算子铺。
// 前脸和「守塔人小屋」对齐，尺寸比小屋小一圈（3.2 × 3.4 米）。
export const SHOPS = {
  store: { x: -17.9, z: -21.21, w: 3.2, d: 3.4, h: 2.3, label: '云港小卖部' },
  fortune: { x: -13.1, z: -21.21, w: 3.2, d: 3.4, h: 2.3, label: '算子铺' },
  counter: 0.86,
} as const

const WALL: Paint = ['#b08a63', 'wood']
const WALL_DARK: Paint = ['#96724f', 'wood']
const ROOF: Paint = ['#8a5348', 'roof']
const COUNTER: Paint = ['#7d5f42', 'wood']
const FLOOR: Paint = ['#8c7154', 'wood']

export const SHOP_OBSTACLES: [number, number, number, number][] = [SHOPS.store, SHOPS.fortune].map(shop =>
  [shop.x - shop.w / 2, shop.x + shop.w / 2, shop.z - shop.d / 2, shop.z + shop.d / 2])

/** 一间铺子：后墙 + 两侧墙 + 坡屋顶 + 前面一条柜台（敞口，坐着的人看得见）。 */
type Shop = { readonly x: number; readonly z: number; readonly w: number; readonly d: number; readonly h: number; readonly label: string }

function buildShop(group: T.Group, kit: ModelKit, shop: Shop, interior: (group: T.Group, y: number, kit: ModelKit) => void) {
  const { x, z, w, d, h } = shop
  const y = DECK + groundElevation(x, z)
  group.add(kit.box([x, y + 0.03, z], [w, 0.06, d], FLOOR))
  group.add(kit.box([x, y + h / 2, z - d / 2 + 0.1], [w, h, 0.2], WALL))
  for (const side of [-1, 1]) {
    group.add(kit.box([x + side * (w / 2 - 0.1), y + h / 2, z], [0.2, h, d], WALL_DARK))
  }
  // 屋顶：两片斜坡
  for (const side of [-1, 1]) {
    const slope = kit.box([x, y + h + 0.34, z + side * d / 4], [w + 0.36, 0.18, d / 2 + 0.5], ROOF)
    slope.rotation.x = side * 0.36
    group.add(slope)
  }
  // 前柜台 + 台面上的木招牌
  group.add(kit.box([x, y + SHOPS.counter / 2, z + d / 2 - 0.25], [w - 0.3, SHOPS.counter, 0.28], COUNTER))
  // 柜台面上的小商品，让店看起来是开着的
  if (shop === SHOPS.store) {
    const goods: Paint[] = [['#c8402f'], ['#e0b64a'], ['#4a7fb5'], ['#5f9b56'], ['#d35242'], ['#8a5bb0']]
    for (let index = 0; index < 6; index += 1) {
      const px = x - (w - 1.0) / 2 + index * ((w - 1.0) / 5)
      const tall = index % 2 === 0
      group.add(kit.box([px, y + SHOPS.counter + 0.16, z + d / 2 - 0.25],
        tall ? [0.16, 0.3, 0.16] : [0.26, 0.16, 0.24], goods[index]))
    }
  }
  group.add(kit.box([x, y + SHOPS.counter + 0.1, z + d / 2 - 0.25], [w - 0.2, 0.1, 0.4], COUNTER))
  interior(group, y, kit)
  const sign = nameplate(shop.label, [x, y + h + 0.95, z + d / 2 - 0.1], 0)
  sign.scale.setScalar(1.1)
  group.add(sign)
  return y
}

/** 小卖部里面：两排货架，摆着零食和饮料。 */
function storeInterior(group: T.Group, y: number, kit: ModelKit) {
  const { x, z } = SHOPS.store
  for (const side of [-1, 1]) {
    group.add(kit.box([x + side * 1.05, y + 1.0, z - 0.7], [0.5, 1.9, 1.7], ['#6b5136', 'wood']))
    const goods: Paint[] = [['#d35242'], ['#4a7fb5'], ['#e0b64a'], ['#5f9b56'], ['#c9713f']]
    for (let row = 0; row < 3; row += 1) {
      for (let index = 0; index < 3; index += 1) {
        group.add(kit.box([x + side * 1.05, y + 0.55 + row * 0.52, z - 1.15 + index * 0.55],
          [0.34, 0.34, 0.34], goods[(row + index + (side > 0 ? 2 : 0)) % goods.length]))
      }
    }
  }
}

/** 算子铺里面：一张方桌、一只水晶球、两幅挂着的纸签。 */
function fortuneInterior(group: T.Group, y: number, kit: ModelKit) {
  const { x, z } = SHOPS.fortune
  group.add(kit.box([x, y + 0.42, z - 0.55], [1.5, 0.08, 0.9], ['#6e4f39', 'wood']))
  for (const side of [-1, 1]) {
    group.add(kit.box([x + side * 0.6, y + 0.2, z - 0.55], [0.1, 0.4, 0.1], ['#5b4130']))
  }
  group.add(kit.box([x, y + 0.58, z - 0.55], [0.3, 0.26, 0.3], ['#cfe3e8']))
  group.add(kit.box([x - 0.5, y + 1.9, z - 1.2], [0.32, 0.5, 0.02], ['#e0cf9b']))
  group.add(kit.box([x + 0.5, y + 1.9, z - 1.2], [0.32, 0.5, 0.02], ['#e0cf9b']))
}

export function addShops(group: T.Group, kit: ModelKit) {
  buildShop(group, kit, SHOPS.store, storeInterior)
  buildShop(group, kit, SHOPS.fortune, fortuneInterior)
}

// 夜里：小卖部屋顶挂灯亮起来，店员打瞌睡但不下班；算子铺关门，挂一块「白日再来」。
export function createShopLife(scene: T.Scene, kit: ModelKit) {
  const storeY = DECK + groundElevation(SHOPS.store.x, SHOPS.store.z)
  const seerY = DECK + groundElevation(SHOPS.fortune.x, SHOPS.fortune.z)

  const clerk = createHarborAvatar(kit, { hair: '#3b2f2a', shirt: '#3f6b78', trousers: '#3a3a40', hat: false })
  clerk.avatar.position.set(SHOPS.store.x, storeY, SHOPS.store.z + 0.95)
  const cap: Paint = ['#c0392b']
  clerk.avatar.add(kit.box([0, 1.72, 0], [0.58, 0.14, 0.58], cap))
  clerk.avatar.add(kit.box([0, 1.66, 0.3], [0.5, 0.05, 0.3], cap))
  scene.add(clerk.avatar)

  const seer = createHarborAvatar(kit, { hair: '#5a5348', shirt: '#4a3f56', trousers: '#3a3440', hat: false })
  seer.avatar.position.set(SHOPS.fortune.x, seerY, SHOPS.fortune.z + 0.9)
  seer.avatar.add(kit.box([0, 1.62, 0.26], [0.44, 0.12, 0.06], ['#1c1c20']))
  seer.avatar.add(kit.box([0, 1.62, 0.2], [0.5, 0.03, 0.12], ['#2a2a30']))
  scene.add(seer.avatar)

  // 小卖部屋檐下的吊灯
  const lamp = new T.Group()
  const shop = SHOPS.store
  lamp.add(kit.box([shop.x, storeY + shop.h + 0.5, shop.z + shop.d / 2 - 0.1], [0.08, 0.5, 0.08], ['#5b4130']))
  const bulb = new T.Mesh(new T.BoxGeometry(0.3, 0.34, 0.3),
    new T.MeshBasicMaterial({ color: '#ffe4a3' }))
  bulb.position.set(shop.x, storeY + shop.h + 0.26, shop.z + shop.d / 2 - 0.1)
  lamp.add(bulb)
  const glow = new T.Mesh(new T.BoxGeometry(1.1, 1.1, 1.1),
    new T.MeshBasicMaterial({ color: '#ffd98a', transparent: true, opacity: 0.14, depthWrite: false }))
  glow.position.copy(bulb.position)
  lamp.add(glow)
  lamp.visible = false
  scene.add(lamp)

  // 算子铺夜里的告示
  const notice = nameplate('白日再来', [SHOPS.fortune.x, seerY + 1.55, SHOPS.fortune.z + SHOPS.fortune.d / 2 - 0.05], 0)
  notice.visible = false
  scene.add(notice)

  let time = 0
  return {
    update(step: number, night: number, reduced: boolean) {
      time += step
      const closed = night > 0.5
      lamp.visible = closed
      notice.visible = closed
      // 店员打瞌睡：整个身子往前栽一点，慢慢晃
      const doze = reduced ? 0 : Math.sin(time * 0.9) * 0.05
      clerk.avatar.rotation.x = closed ? 0.16 + doze : 0
      clerk.avatar.position.y = storeY - (closed ? 0.03 : 0)
      // 算命先生关铺以后就静坐着
      seer.avatar.rotation.x = 0
    },
  }
}