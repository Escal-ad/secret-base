export const MAP = { west: -82, east: 106, north: -78, south: 68, pixels: 900, near: 0.5, height: 52 } as const

export const mapPoint = (x: number, z: number) => ({
  x: (x - MAP.west) / (MAP.east - MAP.west),
  y: (z - MAP.north) / (MAP.south - MAP.north),
})
