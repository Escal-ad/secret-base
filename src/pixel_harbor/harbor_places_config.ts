import { FISHING, WISHING } from '../harbor_pastimes/harbor-pastimes-config'
import { CAPTAIN } from './harbor_captain_config'
import { SUNSET, VILLAGE } from './harbor_exploration_config'
import { PROFILE_UI } from './harbor_profile'
import { HILL, hillElevation } from '../harbor_expansion/harbor-hill-config'

export const PLACE_LABELS = {
  maxVisible: 6,
  nameDistance: 13,
  fadeStart: 20,
  maxDistance: 32,
  width: 114,
  height: 44,
  visibleTop: 118,
  bob: 3.0,
  bobSpeed: 1.45,
  occlusionMargin: 0.28,
  icons: {
    artwork: 'M3 4h18v16H3z M5 16l4-4 3 3 3-4 4 5 M8 9h.01',
    evaluation: 'M4 19V5 M4 19h16 M8 16v-4 M12 16V8 M16 16v-6',
    contact: 'M3 6h18v12H3z M3 7l9 6 9-6',
    landmark: 'M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12z M12 7v6 M9 10h6',
  },
  places: {
    [FISHING.place.id]: { title:FISHING.title, iconType:'landmark', anchor:FISHING.anchor, blurb:FISHING.blurb },
    [WISHING.place.id]: { title:WISHING.title, iconType:'landmark', anchor:WISHING.anchor, blurb:WISHING.blurb },
    portfolio: { title: '作品船', iconType: 'artwork', anchor: [4.8, 2.25, -2.06], blurb: '浏览渔港作品集' },
    notice: { title: '展览公告栏', iconType: 'landmark', anchor: [-22.57, 2.85, 4.54], blurb: '查看渔港展览公告' },
    eval: { title: '评测站', iconType: 'evaluation', anchor: [-23.26, 3.45, 7.71], blurb: '查看工作台演示与报告' },
    lighthouse: { title: '灯塔岬角', iconType: 'landmark', anchor: [6.7, 11.6, -21.55], blurb: '查看灯塔岬角' },
    sunrise: { title: '日出观景台', iconType: 'landmark', anchor: [15.5, 2.21, -0.7], blurb: '查看日出观景台' },
    mayor: { title: PROFILE_UI.title, iconType: 'contact', anchor: PROFILE_UI.anchor, blurb: PROFILE_UI.placeholder },
    sunset: { title: SUNSET.title, iconType: 'landmark', anchor: [SUNSET.sign.x, 1.70+hillElevation(SUNSET.sign.x,SUNSET.sign.z),SUNSET.sign.z], blurb: SUNSET.note },
    [HILL.id]: { title: HILL.title, iconType: 'landmark', anchor: [HILL.position.x, 1.70+hillElevation(HILL.position.x,HILL.position.z),HILL.position.z], blurb: HILL.caption },
    captain: { title: CAPTAIN.title, iconType: 'landmark', anchor: CAPTAIN.anchor, blurb: CAPTAIN.note || CAPTAIN.placeholder },
    'upper-village': { title: VILLAGE.title, iconType: 'landmark', anchor: [9.62, 2.90, 23.65], blurb: VILLAGE.note },
    // 三个停靠点也挂上悬浮名牌（锚点取靠岸点上方 2.4 米），靠近时显示码头名。
    'south-dock': { title: '南湾码头', iconType: 'landmark', anchor: [-0.3, 2.4, 11.42], blurb: '在此上船或靠岸' },
    'pier-dock': { title: '栈桥泊位', iconType: 'landmark', anchor: [-4.55, 2.4, -1.70], blurb: '在此上船或靠岸' },
    'east-dock': { title: '东堤码头', iconType: 'landmark', anchor: [16.45, 2.4, 19.39], blurb: '在此上船或靠岸' },
  },
} as const

export const PLACE_TRAVEL = {
  step: 0.40,
  maxRings: 5,
  bearings: 12,
  fadeMs: 180,
  missingLanding: '当前位置无法抵达这处地点。',
  emptyDescription: '地点介绍待填写',
}
