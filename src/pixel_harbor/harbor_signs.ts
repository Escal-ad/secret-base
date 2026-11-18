import * as T from 'three'
import { evalStation } from './eval_station_config'
import { DECK, HARBOR_DESTINATIONS } from './harbor_layout'
import type { Footprint } from './harbor_layout'
import { makeCanvas, pixelTexture } from './harbor_materials'
import type { ModelKit } from './harbor_models'

const WOOD = ['#805b45', 'wood'] as const
const SIGN_BOARDS = [
  { x: -0.15, z: -1.97, yaw: -0.94, width: 1.48, height: 0.87, elevation: 2.16, kind: 'wayfinding' },
  { x: HARBOR_DESTINATIONS.notice.x, z: HARBOR_DESTINATIONS.notice.z, yaw: Math.PI / 2, width: 1.88, height: 1.18, elevation: 1.38, kind: 'notice' },
] as const

type SignBoard = typeof SIGN_BOARDS[number]

function signTexture(kind: SignBoard['kind']) {
  const { canvas, context } = makeCanvas(176, kind === 'notice' ? 112 : kind === ('boat' as string) ? 55 : 106)
  const height = canvas.height
  context.fillStyle = '#735847'
  context.fillRect(0, 0, 176, height)
  context.fillStyle = '#b28a63'
  context.fillRect(3, 3, 170, height - 6)
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.font = 'bold 23px "Microsoft YaHei", "PingFang SC", sans-serif'
  if (kind === 'notice') {
    context.fillStyle = '#e8cf9f'
    context.fillRect(10, 9, 156, 94)
    context.fillStyle = '#674d3d'
    context.fillText('展览公告栏', 88, 29)
    context.fillStyle = '#bda277'
    for (const y of [55, 65, 75, 85]) context.fillRect(29, y, y === 85 ? 73 : 118, 2)
    context.fillStyle = '#a46047'
    context.fillRect(14, 12, 5, 5)
    context.fillRect(157, 12, 5, 5)
  } else {
    context.fillStyle = '#f9e6bb'
    context.fillText(kind === ('boat' as string) ? '作品船' : '↑  作品船', 88, kind === ('boat' as string) ? 29 : 23)
    if (kind === 'wayfinding') {
      context.fillRect(14, 38, 148, 2)
      context.fillText('↶  展览公告栏', 88, 55)
      context.fillRect(14, 70, 148, 2)
      context.fillText(`↶  ${evalStation.title}`, 88, 88)
    }
  }
  return pixelTexture(canvas)
}

function makeSign(kit: ModelKit, board: SignBoard) {
  const { x, z, yaw, width, height, elevation, kind } = board
  const group = new T.Group()
  const legs = kind === 'notice' ? [-width * 0.39, width * 0.39] : [0]
  const postHeight = elevation + height * 0.32
  for (const offset of legs) {
    group.add(kit.box([offset, postHeight / 2, -0.08], [0.15, postHeight, 0.16], [...WOOD]))
  }
  group.add(kit.box([0, elevation, 0], [width + 0.09, height + 0.10, 0.13], [...WOOD]))
  const face = new T.Mesh(new T.PlaneGeometry(width, height), new T.MeshBasicMaterial({ map: signTexture(kind) }))
  face.position.set(0, elevation, 0.069)
  group.add(face)
  group.position.set(x, DECK, z)
  group.rotation.y = yaw
  return group
}

export function addHarborSigns(scene: T.Scene, kit: ModelKit): Footprint[] {
  return SIGN_BOARDS.map(board => {
    scene.add(makeSign(kit, board))
    const halfWidth = board.width / 2 + 0.065
    const halfX = Math.abs(Math.cos(board.yaw)) * halfWidth + 0.09
    const halfZ = Math.abs(Math.sin(board.yaw)) * halfWidth + 0.09
    return [board.x - halfX, board.x + halfX, board.z - halfZ, board.z + halfZ]
  })
}
