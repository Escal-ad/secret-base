import * as T from 'three'
import { makeCanvas, pixelTexture } from './harbor_materials'

// 全站门牌统一这一套样子：棕色底 + 米白字，双面可见。
// 村长小屋、后村、落日、守塔人小屋都从这里出，别再各写一份。
export const NAMEPLATE = {
  background: '#8a694c',
  text: '#fff0d4',
  font: '"Microsoft YaHei", sans-serif',
  width: 1.38,
  height: 0.34,
  // 门牌离墙脚（DECK）的安装高度：四栋同规格的房子都用这一个值。
  mountHeight: 1.83,
  canvas: [144, 35],
  fontSize: 19,
} as const

export function nameplate(text: string, position: readonly [number, number, number], yaw: number) {
  const { canvas, context } = makeCanvas(NAMEPLATE.canvas[0], NAMEPLATE.canvas[1])
  context.fillStyle = NAMEPLATE.background
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = NAMEPLATE.text
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.font = `bold ${NAMEPLATE.fontSize}px ${NAMEPLATE.font}`
  context.fillText(text, canvas.width / 2, canvas.height / 2)
  const sign = new T.Mesh(new T.PlaneGeometry(NAMEPLATE.width, NAMEPLATE.height),
    new T.MeshBasicMaterial({ map: pixelTexture(canvas), side: T.DoubleSide }))
  sign.position.set(position[0], position[1], position[2])
  sign.rotation.y = yaw
  return sign
}
