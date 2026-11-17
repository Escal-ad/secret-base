export const CAPTAIN = {
  id: 'captain',
  title: '船夫',
  action: '交谈',
  position: { x: 1.02, z: 12.29 },
  radius: 1.9,
  appearance: { hair: '#655d57', shirt: '#426d78', trousers: '#58483d', hat: false },
  anchor: [1.02, 2.68, 12.29],
  facing: 2.86,
  wavePeriod: 13,
  waveLength: 1.6,
  letterMs: 28,
  visitedKey: 'pixel_harbor_visited',
  storageReadError: '无法读取已访问地点，本次会话仍会记录。',
  storageWriteError: '浏览器未保存已访问地点，本次会话仍会记录。',
  unvisitedPrefix: '你还没去过：',
  noRecommendation: '你已经访问过这些地点。',
  placeholder: '待填写',
  travelLabel: '带我去',
  backLabel: '返回',
  guidePlaces: ['mayor', 'portfolio', 'notice', 'eval', 'lighthouse', 'sunset', 'upper-village'],
  // TODO(reason): 待用户填写介绍、对话和地点讲解。
  note: '',
  placeDescriptions: {} as Record<string, string>,
  dialogue: {
    root: { id: 'root', text: '', options: [
      { text: '乘船游览', next: 'root', action: 'tour' },
      { text: '自己开船', next: 'root', action: 'drive' },
      { text: '介绍一下这里', next: 'guide', action: 'open' },
      { text: '先逛逛', next: 'root', action: 'close' },
    ] },
    guide: { id: 'guide', text: '', options: [
      { text: '返回', next: 'root', action: 'open' },
    ] },
  },
} as const

export const TOUR = {
  title: '导览游船',
  stopLabel: '回到码头',
  finishLabel: '已回到南湾码头',
  failLabel: '航线暂不可用，已返回码头。',
  recoveryFadeMs: 300,
  speed: 5.7,
  turnSeconds: 0.42,
  startResponse: 0.68,
  positionTolerance: 0.032,
  lamp: { position: [-0.48, 1.63, 0.38], size: [0.14, 0.18, 0.14], color: '#f4c27c' },
  // TODO(reason): 待用户填写停靠点讲解。
  route: [
    { x: 9, z: 7.8, wait: 0, title: '', caption: '' },
    { x: 22.3, z: 6.4, wait: 2.2, title: '海上看灯塔', caption: '', lookAt: [6.7, 5.25, -21.55] },
    { x: 27, z: -6.2, wait: 2.3, title: '外湾小岛方向', caption: '', lookAt: [80, 1.8, -34] },
    { x: 23.3, z: -12.1, wait: 2.4, title: '海上观景', caption: '', lookAt: [70, 5, -30] },
    { x: 22.3, z: 6.4, wait: 0, title: '', caption: '' },
    { x: 9, z: 7.8, wait: 0, title: '', caption: '' },
    { x: -0.3, z: 8.8, wait: 0, title: '南湾码头', caption: '' },
  ],
} as const
