// 预烘焙地形高度图：在 Node 里搭出整个渔村场景，向下打射线，记录每格最高点。
// 不需要 WebGL —— 射线求交是纯数学计算。
// 运行：npm run bake   输出：public/terrain.json
import './canvas-stub'
import * as T from 'three'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { createModelKit } from '../src/pixel_harbor/harbor_models'
import { addWorld } from '../src/pixel_harbor/harbor_world'
import { addEvalStation } from '../src/pixel_harbor/eval_station_model'
import { addHarborForest } from '../src/pixel_harbor/harbor_forest'
import { addHarborIslands } from '../src/harbor_expansion/harbor-islands'
import { MAP } from '../src/harbor_expansion/harbor-map-config'

const RES = 1          // 网格精度（米）
const RAY_TOP = 80     // 射线起点高度
const RAY_BOTTOM = -20 // 射线终点高度（低于即视为海）
const OUT = resolve('public/terrain.json')

function buildScene() {
  const scene = new T.Scene()
  const kit = createModelKit()
  addWorld(scene, kit)
  addEvalStation(scene, kit)
  addHarborForest(scene, kit)
  addHarborIslands(scene, kit)
  scene.updateMatrixWorld(true)
  return scene
}

function main() {
  const started = Date.now()
  const scene = buildScene()
  const { west, east, north, south } = MAP
  const cols = Math.ceil((east - west) / RES)
  const rows = Math.ceil((south - north) / RES)
  const raycaster = new T.Raycaster()
  const origin = new T.Vector3()
  const down = new T.Vector3(0, -1, 0)
  const heights = new Array(cols * rows).fill(-1)

  let land = 0
  for (let row = 0; row < rows; row++) {
    const z = north + (row + 0.5) * RES
    for (let col = 0; col < cols; col++) {
      const x = west + (col + 0.5) * RES
      origin.set(x, RAY_TOP, z)
      raycaster.set(origin, down)
      raycaster.far = RAY_TOP - RAY_BOTTOM
      const hit = raycaster.intersectObjects(scene.children, true)[0]
      if (hit) {
        heights[row * cols + col] = Math.round(hit.point.y * 100) / 100
        land++
      }
    }
    if (row % 20 === 0) process.stdout.write(`  扫描中 ${row}/${rows}\r`)
  }

  const payload = {
    bounds: [west, east, north, south],
    res: RES,
    cols,
    rows,
    heights,
  }
  mkdirSync(dirname(OUT), { recursive: true })
  writeFileSync(OUT, JSON.stringify(payload))
  const size = (JSON.stringify(payload).length / 1024).toFixed(0)
  console.log(`\n完成：${cols}×${rows} 格，命中 ${land} 格陆地，输出 ${size} KB，耗时 ${((Date.now() - started) / 1000).toFixed(1)} s`)
}

main()
