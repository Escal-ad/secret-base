export const HILL = {
  id: 'west-hill', title: '枫林小径', action: '查看后山林径', position: { x: -44.1, z: -6.2 },
  radius: 1.55, riseFrom: -27, summitAt: -44, maxSlope: 0.33,
  // 四块平台改写成互不重叠的长条：原来 A/B、B/C、C/D 三处都有 x 方向的重叠，
  // 两块坡面完全共面，渲染时互相闪烁（就是山顶那些一块深一块浅的方块）。
  // 下面这五条 x 区间首尾相接，z 范围取并集，覆盖面一点没变，但不再有任何重合。
  // 最东边那条收到 x = -27：再往东海拔已经是 0，坡面和西岸草皮同高共面，会打架。
  footprints: [[-49, -45, -9.7, -2.45], [-45, -39, -8.9, -3], [-39, -38, -12.3, -3],
    [-38, -32, -12.3, -4.5], [-32, -27, -12.3, -8.4]],
  trail: [[-24.5, -10.5], [-27, -10.5], [-31.5, -10.5], [-35.8, -10.7], [-36.1, -6.25],
    [-41.2, -5.65], [-44, -6], [-46.7, -6.62]],
  trailWidth: 1.25, treeCount: 34, treeSeed: 776,
  stairRuns: [2, 3, 5], treadCount: 4, treadWidth: 1.10, treadDepth: 0.21, treadHeight: 0.08,
  railOffset: 0.94, railHeight: 0.78, railThickness: 0.10, railEndGap: 0.72,
  // TODO(reason): 待用户填写
  caption: '待填写',
} as const

export function hillElevation(x: number, z: number) {
  if (!HILL.footprints.some(([west, east, north, south]) => x >= west && x <= east && z >= north && z <= south)) return 0
  return Math.max(0, Math.min(HILL.riseFrom - HILL.summitAt, HILL.riseFrom - x) * HILL.maxSlope)
}
