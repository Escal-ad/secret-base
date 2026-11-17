import { makeCanvas, seededRandom } from './harbor_materials'

import { ARTWORKS } from './harbor_art_catalog'
import type { ArtEntry } from './harbor_art_catalog'

export type HarborArtwork = Omit<ArtEntry, 'image'> & { image: string }
type Pixel = (color: string, x: number, y: number, width: number, height: number) => void

const WIDTH = 80
const HEIGHT = 56

function paintScenery(pixel: Pixel, variant: number) {
  const night = variant === 0
  const sky = night ? ['#253451', '#475472', '#826c84'] : ['#719ba5', '#aac2b7', '#f1cba0']
  sky.forEach((color, index) => pixel(color, 0, index * 10, WIDTH, 11))
  pixel(night ? '#f4dcad' : '#fff0b1', 57, 8, 11, 11)
  pixel(night ? '#f4dcad' : '#fff0b1', 59, 6, 7, 15)
  pixel(night ? '#34485e' : '#688e8e', 0, 28, WIDTH, 28)
  for (let x = 0; x < WIDTH; x += 2) {
    const ridge = 26 - Math.floor(Math.abs(Math.sin(x * 0.094) + Math.cos(x * 0.033)) * 6)
    pixel(night ? '#34435d' : '#779b99', x, ridge, 2, 29 - ridge)
    if (night) pixel('#253f4b', x, 40 - Math.floor(Math.abs(Math.sin(x * 1.8)) * 8), 3, 24)
    else pixel(x % 4 ? '#a5b8a0' : '#e5c998', x, 32 + (x * 11 % 23), 5, 1)
  }
  if (night) {
    pixel('#a37669', 25, 36, 23, 13)
    for (let row = 0; row < 9; row++) pixel('#503d50', 35 - row, 28 + row, 3 + row * 2, 1)
    pixel('#ffe0a2', 29, 39, 6, 5)
    pixel('#422f43', 39, 39, 5, 10)
    pixel('#c4a492', 22, 49, 30, 2)
  } else {
    pixel('#d5a478', 35, 38, 23, 2)
    pixel('#415b61', 38, 40, 17, 3)
    pixel('#e7d3a9', 42, 33, 9, 5)
    pixel('#a16354', 40, 32, 13, 2)
    pixel('#775f54', 47, 26, 1, 6)
  }
}

function paintCharacter(pixel: Pixel) {
  pixel('#cfac94', 0, 0, WIDTH, HEIGHT)
  pixel('#c39c8b', 0, 38, WIDTH, 18)
  pixel('#855e50', 32, 11, 17, 4)
  pixel('#9e7058', 29, 15, 22, 6)
  pixel('#624750', 26, 21, 28, 3)
  pixel('#e5b18c', 33, 24, 15, 10)
  pixel('#694c4e', 36, 26, 2, 2)
  pixel('#694c4e', 44, 26, 2, 2)
  pixel('#677e78', 26, 35, 29, 14)
  pixel('#87928a', 30, 36, 21, 13)
  pixel('#eee0b9', 34, 38, 13, 11)
  pixel('#d5a080', 26, 43, 8, 5)
  pixel('#d5a080', 47, 43, 8, 5)
  pixel('#5e5159', 30, 49, 9, 3)
  pixel('#5e5159', 43, 49, 9, 3)
  for (let row = 0; row < 5; row++) pixel('#927a71', 54, 37 + row * 3, 17 - row * 2, 1)
}

function paintFlowers(pixel: Pixel) {
  const random = seededRandom(36)
  pixel('#d5caa7', 0, 0, WIDTH, HEIGHT)
  pixel('#b5b28f', 0, 35, WIDTH, 21)
  for (let index = 0; index < 19; index++) {
    const x = 3 + (random() * 72 | 0)
    const y = 12 + (random() * 32 | 0)
    pixel('#7b8b70', x, y + 4, 1, HEIGHT - y)
    pixel('#879472', x - 4, y + 10, 6, 2)
    pixel(index % 3 ? '#a08090' : '#e7d09b', x - 3, y + 1, 7, 4)
    pixel('#f2d4a1', x - 1, y + 2, 2, 2)
  }
}

function paintMap(pixel: Pixel) {
  pixel('#cebc9a', 0, 0, WIDTH, HEIGHT)
  pixel('#e4d0ad', 3, 3, 74, 50)
  for (let y = 4; y < 52; y += 2) {
    const shore = 22 + Math.floor(Math.sin(y * 0.17) * 8)
    pixel('#819c94', shore, y, 76 - shore, 2)
    pixel('#b4b394', shore - 4, y, 5, 2)
    if (y % 4 === 0) pixel('#ead3ae', 32 + Math.floor(y * 0.62), y, 3, 1)
  }
  for (const [x, y] of [[21, 16], [36, 25], [50, 40]]) {
    pixel('#6e6d63', x, y, 1, 8)
    pixel('#aa6e60', x, y, 6, 4)
  }
}

export function createHarborArt(): HarborArtwork[] {
  const painters = [(pixel: Pixel) => paintScenery(pixel, 0), (pixel: Pixel) => paintScenery(pixel, 1),
    paintCharacter, paintFlowers, paintMap]
  return ARTWORKS.map((artwork, index) => {
    if (artwork.image) return { ...artwork, image: artwork.image }
    const { canvas, context } = makeCanvas(WIDTH, HEIGHT)
    painters[index]((color, x, y, width, height) => {
      context.fillStyle = color
      context.fillRect(x, y, width, height)
    })
    return { ...artwork, image: canvas.toDataURL('image/png') }
  })
}
