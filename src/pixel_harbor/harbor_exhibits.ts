import * as T from 'three'
import { DECK } from './harbor_layout'
import type { Footprint } from './harbor_layout'
import { makeCanvas, pixelTexture } from './harbor_materials'
import type { HarborArtwork } from './harbor_art'
import type { ModelKit } from './harbor_models'

const SITES = [
  { id: 'moon-cabin', x: -0.35, z: 1.65, yaw: -1.22 },
  { id: 'first-tide', x: 14.85, z: 2.58, yaw: Math.PI },
  { id: 'net-mender', x: -4.85, z: 14.32, yaw: Math.PI },
  { id: 'dune-flowers', x: -17.5, z: 3.8, yaw: Math.PI / 2 },
  { id: 'keeper-map', x: -1.9, z: -21.2, yaw: 0 },
]

export const EXHIBIT_RADIUS = 3.35
const FRAME_WIDTH = 1.74

function makeFrame(kit: ModelKit, artwork: HarborArtwork, cleanup: (() => void)[]) {
  const group = new T.Group()
  const { canvas, context } = makeCanvas(120, 84)
  const texture = pixelTexture(canvas)
  context.fillStyle = '#a7aba0'
  context.fillRect(0, 0, canvas.width, canvas.height)
  const image = new Image()
  image.onload = () => {
    context.imageSmoothingEnabled = false
    const scale = Math.min(canvas.width / image.width, canvas.height / image.height)
    const width = Math.round(image.width * scale)
    const height = Math.round(image.height * scale)
    context.drawImage(image, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height)
    texture.needsUpdate = true
  }
  image.src = artwork.image
  cleanup.push(() => { image.onload = null })
  for (const x of [-0.68, 0.68]) group.add(kit.box([x, 0.56, 0], [0.14, 1.12, 0.17], ['#795947', 'wood']))
  group.add(kit.box([0, 1.44, 0], [FRAME_WIDTH, 1.25, 0.17], ['#92674e', 'wood']))
  group.add(kit.box([0, 1.43, 0.091], [1.63, 1.11, 0.024], ['#dec6a0']))
  group.add(kit.box([0, 2.10, 0], [1.88, 0.14, 0.29], ['#617473', 'wood']))
  const art = new T.Mesh(new T.PlaneGeometry(1.49, 1.043), new T.MeshBasicMaterial({ map: texture }))
  art.position.set(0, 1.43, 0.107)
  group.add(art)
  return group
}

export function addExhibits(scene: T.Scene, kit: ModelKit, artworks: readonly HarborArtwork[]) {
  const cleanup: (() => void)[] = []
  const obstacles: Footprint[] = []
  const exhibits = SITES.flatMap(site => {
    const artwork = artworks.find(item => item.id === site.id)
    if (!artwork) return []
    const { x, z, yaw } = site
    const frame = makeFrame(kit, artwork, cleanup)
    frame.position.set(x, DECK, z)
    frame.rotation.y = yaw
    scene.add(frame)
    const halfX = Math.abs(Math.cos(yaw)) * FRAME_WIDTH / 2 + 0.16
    const halfZ = Math.abs(Math.sin(yaw)) * FRAME_WIDTH / 2 + 0.16
    obstacles.push([x - halfX, x + halfX, z - halfZ, z + halfZ])
    return [{ ...site, artwork, frame }]
  })
  return { exhibits, obstacles, dispose: () => cleanup.forEach(cancel => cancel()) }
}
