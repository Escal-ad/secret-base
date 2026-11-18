// 预烘焙地形高度图的运行时查询。
// 数据由 `npm run bake` 生成到 public/terrain.json：每个格子记录向下射线的最高命中高度，
// 没有命中（-1）表示那里是海。
type Heightmap = {
  bounds: [number, number, number, number] // west, east, north, south
  res: number
  cols: number
  rows: number
  heights: number[]
}

let data: Heightmap | null = null

export function setHeightmap(next: Heightmap | null) {
  data = next
}

export function heightmapReady() {
  return data !== null
}

export async function loadHeightmap(url = 'terrain.json'): Promise<boolean> {
  try {
    const response = await fetch(url)
    if (!response.ok) return false
    const parsed = (await response.json()) as Heightmap
    if (!parsed.heights || parsed.cols <= 0 || parsed.rows <= 0) return false
    data = parsed
    return true
  } catch {
    return false
  }
}

/** 该点的地面绝对高度；返回 null 表示是海面（没有命中任何东西）。 */
export function terrainHeightAt(x: number, z: number): number | null {
  if (!data) return null
  const [west, east, north, south] = data.bounds
  if (x < west || x > east || z < north || z > south) return null
  const col = Math.min(data.cols - 1, Math.max(0, Math.floor((x - west) / data.res)))
  const row = Math.min(data.rows - 1, Math.max(0, Math.floor((z - north) / data.res)))
  const value = data.heights[row * data.cols + col]
  return value < 0 ? null : value
}

/** 该点是不是陆地（能站）。高度图未加载时返回 undefined，让调用方走旧逻辑。 */
export function isLandAt(x: number, z: number): boolean | undefined {
  if (!data) return undefined
  const [west, east, north, south] = data.bounds
  if (x < west || x > east || z < north || z > south) return false
  return terrainHeightAt(x, z) !== null
}
