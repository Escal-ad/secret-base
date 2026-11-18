export const SAILING = {
  forwardSpeed: 6,
  reverseSpeed: 2.3,
  accelerationTime: 0.85,
  coastingTime: 1.16,
  turnTime: 0.31,
  maxTurnRate: 1.72,
  minTurnFactor: 0.32,
  invertSteerWhenReversing: false,
  maxBank: 0.14,
  bankTime: 0.28,
  bounds: [-70, 100, -70, 60],
  boundary: [[-68,-30],[-50,-64],[52,-64],[94,-42],[98,-6],[80,46],[48,58],[-48,58],[-68,28]],
  sprint: 1.38,
  berthGrip: 0.39,
  dockPrompt: '靠岸',
  collisionDiscs: [[-1.36, 0.76], [0, 0.80], [1.55, 0.69]],
  berthRadius: 2.1,
  boardingRadius: 1.55,
  // 玩家上船后的站位：height 是脚底离 DECK 的高度（要踩在甲板顶面上），
  // offset 是沿船头方向的位置（负值往船尾），避开车舱。
  helmHeight: 0.05,
  helm: {
    skiff: { height: 0.05, offset: 0 },
    // 游艇中间挖了驾驶舱：舱底顶面在船体局部 0.56、船体整体 y 0.03 → 世界 0.59，
    // 比 DECK 低 6 厘米，所以高度是负的。站位在舱底、驾驶台后面一点。
    yacht: { height: -0.06, offset: 0.25 },
  } as Record<string, { height: number; offset: number }>,
  wakeLimit: 14,
  wakeLife: 0.85,
  wakeInterval: 0.11,
  wakeColor: '#a2cfcb',
  wakeMinimumSpeed: 0.62,
  docks: [
    { id: 'south-dock', title: '南湾码头', note: '绿船初始停泊处。', boat: 'skiff', x: -0.3, z: 8.8,
      yaw: Math.PI / 2 + 0.13, land: { x: -0.3, z: 11.42 }, berthRadius: 2.1 },
    { id: 'pier-dock', title: '栈桥泊位', note: '绿船可在此靠泊。', boat: 'skiff', x: -4.55, z: -5.15,
      yaw: Math.PI / 2, land: { x: -4.55, z: -1.70 }, berthRadius: 2.1 },
    // 东堤是 11.6 米长的石堤，泊位只有一个点，所以靠岸半径必须放得比其它码头大，
    // 否则沿堤停船时永远够不到 2.1 米的范围。泊位放在堤**南**侧、正对靠岸点 (16.45, 19.39)，
    // 船就停在玩家上下船的这一边。
    { id: 'east-dock', title: '东堤码头', note: '南湾东侧的石堤，可在此靠岸与上下船。',
      boat: 'yacht', x: 16.45, z: 21.3, yaw: Math.PI / 2 - 0.06, land: { x: 16.45, z: 19.39 }, berthRadius: 5.6 },
  ],
  boardLabel: '上船',
  dockLabel: '下船',
  // 船不在本泊位时，船夫的"自己开船 / 导览"就开不了。
  noBoatLabel: '船不在这个码头，先把船开回来。',
  requiredLabel: '需乘船前往',
} as const

export const SEA_LOCATIONS = [
  { id: 'sea-east', kind: 'sea', title: '东侧浮标', label: '查看东侧浮标', x: 17, z: -6, radius: 3.5 },
  { id: 'sea-north', kind: 'sea', title: '北湾浮标', label: '查看北湾浮标', x: 23, z: -12, radius: 3.5 },
  { id: 'sea-shoal', kind: 'sea', title: '外湾浮标', label: '查看外湾浮标', x: 30, z: -3, radius: 3.5 },
].map(place => ({
  ...place,
  kind: 'sea' as const,
  // TODO(reason): 待用户填写
  note: '地点介绍待填写',
}))
