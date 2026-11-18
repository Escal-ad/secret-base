// 钓鱼点移到东堤渔民身旁，面朝南侧水域
const FISH_STAND = { x: 21.39, z: 18.11 }
const WISH_STAND = { x: 5.70, z: -16.60 }
const WISH_ALTAR = { x: WISH_STAND.x + 0.90, z: WISH_STAND.z - 0.38 }

export const FISHING = {
  place: { id: 'fishing', kind: 'fishing', ...FISH_STAND, radius: 0.60, label: '钓鱼' },
  title: '钓鱼点', blurb: '在栈桥边抛竿，浮漂下沉时收竿。', anchor: [FISH_STAND.x, 1.9, FISH_STAND.z] as const,
  float: { x: 23.60, z: 18.11 }, castSeconds: 0.58, reelSeconds: 0.28, waitSeconds: [3, 10], responseSeconds: 1.5,
  storageKey: 'pixel_harbor_catches', pitch: 0.54,
  ui: { casting: '正在抛竿…', waiting: '留意水面上的浮漂', reeling: '正在收竿…', bite: '咬钩了！按 E 或点击收竿', miss: '鱼跑了',
    reel: '收竿', recast: '再抛一竿', record: '渔获记录', exit: '结束钓鱼', result: '钓到了！',
    empty: '还没有钓到过渔获。', openBottle: '打开瓶中信', pending: '待填写',
    readError: '无法读取渔获记录，本次仍可钓鱼。', writeError: '浏览器未能保存本次渔获记录。' },
  // TODO(reason): 待用户填写渔获介绍和瓶中信正文。
  pool: [
    { id:'mullet', name:'鲻鱼', rarity:'常见', icon:'fish', note:'', weight:44, night:0.85, rain:1, snow:0.8 },
    { id:'sardine', name:'沙丁鱼', rarity:'常见', icon:'fish', note:'', weight:30, night:1, rain:1.2, snow:1 },
    { id:'sea-bass', name:'海鲈', rarity:'少见', icon:'fish', note:'', weight:13, night:1.7, rain:1.4, snow:0.85 },
    { id:'shell', name:'贝壳', rarity:'常见', icon:'shell', note:'', weight:9, night:1, rain:1.15, snow:1.3 },
    { id:'bottle', name:'瓶中信', rarity:'稀有', icon:'bottle', note:'', letter:'', weight:4, night:1.6, rain:1.2, snow:1.6 },
  ],
} as const

export const WISHING = {
  place: { id:'wishing', kind:'wishing', ...WISH_STAND, radius:1.06, label:'许愿' },
  title: '许愿台', blurb: '点亮一盏纸灯。愿望只保存在本浏览器。', anchor: [WISH_ALTAR.x, 2.7, WISH_ALTAR.z] as const,
  altar: WISH_ALTAR, altarWidth:0.78, altarHeight:1.1,
  storageKey:'pixel_harbor_wishes', maxCharacters:30, maxRecords:20,
  lights:{ retained:4, flying:2, flightSeconds:13, fadeSeconds:1.25, beamSeconds:2.5,
    drift:{ x:8, y:5.2, z:9 } },
  ui: { privacy:'仅保存在本浏览器，不会上传', prompt:'写下一句愿望', release:'放飞纸灯', saved:'纸灯已升空',
    records:'我的愿望', lights:'读最近的纸灯', empty:'还没有保存愿望。', delete:'删除这条', clear:'清空愿望',
    pendingClear:'清空本浏览器里的所有愿望？', confirmClear:'确认清空', cancel:'取消', close:'关闭',
    readError:'无法读取以前的愿望，本次仍可许愿。', writeError:'浏览器未能保存此次改动，本次访问仍可查看。' },
  // TODO(reason): 待用户填写可选的愿望示例。
  examples: [] as readonly string[],
} as const

export type CatchSpecies = typeof FISHING.pool[number]
export type Wish = { id:string; text:string }
export const PASTIME_PLACES = [FISHING, WISHING] as const
