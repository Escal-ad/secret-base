import * as T from 'three'
import { evalStation } from './eval_station_config'
import { DECK, HARBOR_DESTINATIONS } from './harbor_layout'
import type { Footprint } from './harbor_layout'
import { makeCanvas, pixelTexture } from './harbor_materials'
import type { ModelKit } from './harbor_models'
import { markHarborGlow } from './harbor_glow'

const BOOTH_X = HARBOR_DESTINATIONS.eval.x
const BOOTH_Z = 9.26
const HALF_WIDTH = 1.8
const HALF_DEPTH = 1.44
const HEIGHT = 2.65
const CANVAS_WIDTH = 112
const CANVAS_HEIGHT = 40
const POSTS = [-1, 1]

export const EVAL_STATION_OBSTACLE = {
  footprint: [BOOTH_X - HALF_WIDTH, BOOTH_X + HALF_WIDTH,
    BOOTH_Z - HALF_DEPTH, BOOTH_Z + HALF_DEPTH] as Footprint,
  height: HEIGHT,
}

function makeStationSign() {
  const { canvas, context } = makeCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
  context.fillStyle = '#755440'
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  context.fillStyle = '#ac875e'
  context.fillRect(3, 3, 106, 34)
  context.fillStyle = '#fff0c9'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.font = 'bold 22px "Microsoft YaHei", "PingFang SC", sans-serif'
  context.fillText(evalStation.title, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)
  const mesh = new T.Mesh(new T.PlaneGeometry(1.72, 0.59), new T.MeshBasicMaterial({ map: pixelTexture(canvas) }))
  mesh.position.set(0, 2, -1.52)
  mesh.rotation.y = Math.PI
  return markHarborGlow(mesh, 'station')
}

export function addEvalStation(scene: T.Scene, kit: ModelKit) {
  const booth = new T.Group()
  const { box } = kit
  booth.add(box([0, 0.12, 0], [3.6, 0.24, 2.88], ['#9a7153', 'wood']))
  booth.add(box([0, 1.1, 1.23], [3.34, 1.8, 0.2], ['#bdad88', 'wood']))
  booth.add(box([0, 0.71, -1.12], [3.38, 0.87, 0.58], ['#9c7457', 'wood']))
  booth.add(box([0, 1.17, -1.15], [3.52, 0.12, 0.64], ['#cda77b', 'wood']))
  for (const side of POSTS) {
    for (const end of POSTS) booth.add(box([1.56 * side, 1.2, 1.17 * end],
      [0.17, 2.4, 0.17], ['#765848', 'wood']))
    const awning = box([side * 0.82, 2.42, 0], [1.9, 0.16, 3.05], ['#6b8279', 'roof'])
    awning.rotation.z = -0.22 * side
    booth.add(awning)
  }
  booth.add(box([-0.84, 1.25, -1.16], [0.44, 0.09, 0.29], ['#d8c8a2']))
  booth.add(makeStationSign())
  booth.position.set(BOOTH_X, DECK, BOOTH_Z)
  scene.add(booth)
}
