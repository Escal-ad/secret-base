import * as T from 'three'
import { SAILING } from './harbor_sailing_config'

const STERN_LENGTH = 2.15
const WAKE_LEVEL = 0.018
const WAKE_WIDTH = 0.74
const WAKE_DEPTH = 0.17

export function createHarborWake(scene: T.Scene) {
  const geometry = new T.PlaneGeometry(WAKE_WIDTH, WAKE_DEPTH)
  const particles = Array.from({ length: SAILING.wakeLimit }, () => {
    const material = new T.MeshBasicMaterial({ color: SAILING.wakeColor, transparent: true, depthWrite: false })
    const mesh = new T.Mesh(geometry, material)
    mesh.rotation.x = -Math.PI / 2
    mesh.visible = false
    scene.add(mesh)
    return { mesh, remaining: 0 }
  })
  let index = 0
  let clock = 0
  return (step: number, vessel: { x: number; z: number; yaw: number; speed: number }, enabled: boolean) => {
    clock += step
    if (enabled && clock >= SAILING.wakeInterval && vessel.speed > SAILING.wakeMinimumSpeed) {
      const particle = particles[index++ % particles.length]
      particle.remaining = SAILING.wakeLife
      particle.mesh.position.set(vessel.x - Math.sin(vessel.yaw) * STERN_LENGTH,
        WAKE_LEVEL, vessel.z - Math.cos(vessel.yaw) * STERN_LENGTH)
      particle.mesh.rotation.z = vessel.yaw
      clock = 0
    }
    for (const particle of particles) {
      particle.remaining -= step
      particle.mesh.visible = enabled && particle.remaining > 0
      if (particle.mesh.visible) {
        const lifetime = particle.remaining / SAILING.wakeLife
        particle.mesh.material.opacity = lifetime * 0.58
        particle.mesh.scale.x = 2 - lifetime
      }
    }
  }
}
