import { assetPath } from '../harbor_shell/harbor-settings'

export type ArtEntry = {
  id: string
  title: string
  category: string
  year: string
  description: string
  image?: string
}

export const ARTWORKS: ArtEntry[] = [
  { id: 'moon-cabin', title: '月下小屋', category: '像素场景', year: '2026', description: '森林深处的一间小屋。窗户亮着灯，今晚也有人等你回家。', image: assetPath('artwork/moon-cabin.svg') },
  { id: 'first-tide', title: '第一道潮汐', category: '像素场景', year: '2026', description: '用几层青蓝和淡金色，记录太阳越过海平线的那一刻。' },
  { id: 'net-mender', title: '补网的人', category: '角色练习', year: '2025', description: '她常在天刚亮时坐到码头上，穿着一件旧围裙，把昨天的渔网补好。' },
  { id: 'dune-flowers', title: '风里的野花', category: '插画', year: '2025', description: '开在沙丘背风处的野花。起风时，紫色花梗会一起倾向海面。' },
  { id: 'keeper-map', title: '守塔人的航线', category: '创作草图', year: '2026', description: '一张收在灯塔抽屉里的沿岸航线草图，红色小旗标出了安全靠岸的位置。' },
  { id: 'rain-shop', title: '雨天便利店', category: '像素场景', year: '2026', description: '雨停之前，先在便利店门口躲一会儿。霓虹灯把积水照成了紫色。', image: assetPath('artwork/rain-shop.svg') },
  { id: 'sunday-flower', title: '星期天的花', category: '角色练习', year: '2025', description: '一束不着急盛开的花，送给留在星期天的自己。', image: assetPath('artwork/sunday-flower.svg') },
]
