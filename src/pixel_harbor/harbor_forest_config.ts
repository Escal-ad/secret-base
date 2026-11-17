export const FOREST = {
  clusters: [
    { x: -15.75, z: -24.1, seed: 311, total: 7, radius: 0.76 },
    { x: -10.0, z: -20.45, seed: 591, total: 6, radius: 1.10 },
    // (-5.4, -15.30) 的树丛挡住了守塔人小屋与灯塔之间的视野，已按要求移除。
    { x: -15.4, z: 25.2, seed: 427, total: 6, radius: 1.18 },
  ],
  treeFoot: 0.18,
  trunk: '#765743',
  lower: '#58766a',
  upper: '#728d72',
  shadowColor: '#272f3c',
  shadowDay: 0.12,
  shadowDusk: 0.25,
  shadowLength: 1.0,
  shadowLong: 3.65,
  shadowWidth: 0.42,
} as const
