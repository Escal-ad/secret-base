export const WEATHER = {
  transition: 4.2, snowBuild: 18, snowMelt: 14, iceDelay: 9, iceBuild: 25, iceMelt: 15,
  maximumIce: 0.4, wetFog: 0.025, snowFog: 0.018, rainLight: 0.61, snowLight: 0.8,
  rainSky: '#778e9f', snowSky: '#bac6cc', snowTint: '#e8e7dc',
  particles: { high: 490, medium: 250, low: 82 }, volume: [21, 15, 21],
  iceBounds: [-24, 27, -24, 23],
  safeChannels: [[-6, 13, 6, 11], [8, 29, -14, 10], [3.5, 8.5, -8.5, -2.5], [-8, -1.5, -7.4, -2.4]],
} as const

export function iceAt(x: number, z: number, ice: number) {
  const [left, right, north, south] = WEATHER.iceBounds
  if (ice <= 0 || x < left || x > right || z < north || z > south) return false
  if (WEATHER.safeChannels.some(([minX, maxX, minZ, maxZ]) => x >= minX && x <= maxX && z >= minZ && z <= maxZ)) return false
  const edge = Math.min(Math.abs(z + 2.55), Math.abs(z - 11), Math.abs(x + 12), Math.abs(z + 18))
  const noise = 0.14 * Math.sin(x * 0.83 + z * 0.51) * Math.sin(z * 1.25 - x * 0.34)
  return edge * 0.16 + noise < ice
}
