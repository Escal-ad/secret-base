import * as T from 'three'

const TILE_SIZE = 64

export function seededRandom(seed: number) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
    return seed / 4294967296
  }
}

export function makeCanvas(width: number, height: number) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')
  if (!context) throw new Error('无法生成像素纹理')
  return { canvas, context }
}

export function pixelTexture(canvas: HTMLCanvasElement) {
  const texture = new T.CanvasTexture(canvas)
  texture.colorSpace = T.SRGBColorSpace
  texture.magFilter = T.NearestFilter
  texture.minFilter = T.NearestFilter
  texture.generateMipmaps = false
  return texture
}

type Pattern = 'wood' | 'brick' | 'grass' | 'roof'

function paintTile(pattern: Pattern) {
  const { canvas, context } = makeCanvas(TILE_SIZE, TILE_SIZE)
  const random = seededRandom(67)
  context.fillStyle = '#dacaba'
  context.fillRect(0, 0, TILE_SIZE, TILE_SIZE)
  if (pattern === 'brick' || pattern === 'roof') {
    const height = pattern === 'brick' ? 12 : 8
    const width = pattern === 'brick' ? 22 : 12
    for (let y = 0; y < TILE_SIZE; y += height) {
      for (let x = -width + (y / height % 2) * (width / 2); x < TILE_SIZE; x += width) {
        context.fillStyle = ['#fff7e2', '#ebdeca', '#e9d8c6', '#c3b1a9'][Math.floor(random() * 4)]
        context.fillRect(x + 1, y + 1, width - 1, height - 1)
        context.fillStyle = '#fdf1d7'
        context.fillRect(x + 1, y + 1, width - 2, 1)
      }
    }
  } else {
    context.fillStyle = pattern === 'grass' ? '#ede8cf' : '#ebd5be'
    context.fillRect(0, 0, TILE_SIZE, TILE_SIZE)
    for (let index = 0; index < 55; index++) {
      context.fillStyle = ['#fdf1d7', '#d6c7aa', '#c4b39f'][Math.floor(random() * 3)]
      context.fillRect(random() * TILE_SIZE | 0, random() * TILE_SIZE | 0,
        pattern === 'wood' ? 3 + random() * 21 | 0 : 1 + random() * 4 | 0, 1)
    }
    if (pattern === 'wood') {
      context.fillStyle = '#ab9688'
      context.fillRect(0, 0, TILE_SIZE, 2)
      context.fillRect(0, 32, TILE_SIZE, 1)
    }
  }
  return pixelTexture(canvas)
}

export function createMaterials() {
  const tiles = new Map<Pattern, T.CanvasTexture>()
  const materials = new Map<string, T.MeshLambertMaterial>()
  function surface(color: string, pattern?: Pattern) {
    const key = color + (pattern ?? '')
    const cached = materials.get(key)
    if (cached) return cached
    if (pattern && !tiles.has(pattern)) tiles.set(pattern, paintTile(pattern))
    const material = new T.MeshLambertMaterial({ color, map: pattern ? tiles.get(pattern) : null })
    materials.set(key, material)
    return material
  }
  return surface
}
