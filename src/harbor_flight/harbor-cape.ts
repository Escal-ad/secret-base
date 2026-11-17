import * as T from 'three'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import { FLIGHT } from './harbor-flight-config'

type Pose = { open: number; speed: number; bank: number; time: number; low: boolean; reduced: boolean }
const COLUMNS = 2
const MIN_VISIBLE = 0.015

export function createHarborCape(kit: ModelKit) {
  const config = FLIGHT.cape
  const rows = Math.min(config.rows, Math.floor(config.maxSegments / COLUMNS))
  const material = kit.surface(config.color)
  const mesh = new T.InstancedMesh(new T.BoxGeometry(), material, rows * COLUMNS)
  mesh.name = 'harbor-flight-cape'
  mesh.instanceMatrix.setUsage(T.DynamicDrawUsage)
  mesh.visible = false
  mesh.frustumCulled = false
  const segment = new T.Object3D()

  function update(pose: Pose) {
    mesh.visible = pose.open > MIN_VISIBLE || config.alwaysVisible
    if (!mesh.visible) return
    const count = pose.low ? Math.ceil(rows / 2) : rows
    const speed = Math.min(1, pose.speed / FLIGHT.speed)
    const length = config.length * rows / count * (0.23 + pose.open * 0.77)
    const flow = pose.open * (0.16 + config.flow * speed)
    let y = config.shoulder, z = config.rootBack
    mesh.count = count * COLUMNS
    for (let row = 0; row < count; row++) {
      const wave = pose.reduced ? 0 : Math.sin(pose.time * config.waveRate - row) * config.breeze
      const pitch = flow + wave * pose.open
      const sway = -pose.bank * config.bank * pose.open * row / count
      for (let column = 0; column < COLUMNS; column++) {
        const width = config.width + pose.open * config.spread * row / count
        segment.position.set(sway + (column - 0.5) * width, y - Math.cos(pitch) * length / 2, z - Math.sin(pitch) * length / 2)
        segment.rotation.set(pitch, 0, wave)
        segment.scale.set(width, length + config.thickness / 4, config.thickness)
        segment.updateMatrix()
        mesh.setMatrixAt(row * COLUMNS + column, segment.matrix)
      }
      y -= Math.cos(pitch) * length
      z -= Math.sin(pitch) * length
    }
    mesh.instanceMatrix.needsUpdate = true
  }

  return { mesh, update }
}
