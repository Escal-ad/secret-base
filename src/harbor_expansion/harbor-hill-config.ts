export const HILL = {
  id: 'west-hill', title: '后山林径', action: '查看后山林径', position: { x: -44.1, z: -6.2 },
  radius: 1.55, riseFrom: -27, summitAt: -44, maxSlope: 0.33,
  footprints: [[-33, -24.6, -12.3, -8.4], [-39, -32, -12.3, -4.5],
    [-46, -38, -8.9, -3], [-49, -45, -9.7, -2.45]],
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
