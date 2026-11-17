export const MAP = { west: -52, east: 32, north: -37, south: 36, pixels: 720, near: 0.5, height: 52 } as const

export const mapPoint = (x: number, z: number) => ({
  x: (x - MAP.west) / (MAP.east - MAP.west),
  y: (z - MAP.north) / (MAP.south - MAP.north),
})
