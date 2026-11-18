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
  helmHeight: 0.05,
  wakeLimit: 14,
  wakeLife: 0.85,
  wakeInterval: 0.11,
  wakeColor: '#a2cfcb',
  wakeMinimumSpeed: 0.62,
  docks: [
    { id: 'south-dock', title: '南湾码头', note: '绿船初始停泊处。', x: -0.3, z: 8.8,
      yaw: Math.PI / 2 + 0.13, land: { x: -0.3, z: 11.42 }, berthRadius: 2.1 },
    { id: 'pier-dock', title: '栈桥泊位', note: '绿船可在此靠泊。', x: -4.55, z: -5.15,
      yaw: Math.PI / 2, land: { x: -4.55, z: -1.70 }, berthRadius: 2.1 },
    // 东堤是 11.6 米长的石堤，泊位只有一个点，所以靠岸半径必须放得比其它码头大，
    // 否则沿堤停船时永远够不到 2.1 米的范围。
    { id: 'east-dock', title: '东堤码头', note: '南湾东侧的石堤，可在此靠岸与上下船。',
      x: 16, z: 15.35, yaw: Math.PI / 2 - 0.06, land: { x: 16.45, z: 19.39 }, berthRadius: 5.6 },
  ],
  boardLabel: '上船',
  dockLabel: '下船',
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
