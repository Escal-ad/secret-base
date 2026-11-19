import * as T from 'three'
import { DECK } from '../pixel_harbor/harbor_terrain'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 海上烟花点：站在浮台上按 E，往天上放一束烟花。
// 升到约 6 米（灯塔高约 11.6 米的一半）炸开。
export const FIREWORK = { x: 19.66, z: -20.64, rise: 7.5, count: 22 } as const

const PAD: Paint = ['#d8c9a0', 'brick']
const COLORS: Paint[] = [['#ff8f6b'], ['#ffd166'], ['#8fd3f4'], ['#c9a6ff'], ['#9be89b'], ['#ff9ecb']]

export function addFireworkPad(group: T.Object3D, kit: ModelKit) {
  const { x, z } = FIREWORK
  group.add(kit.box([x, DECK + 0.06, z], [2.2, 0.12, 2.2], PAD))
  group.add(kit.box([x, DECK + 0.16, z], [1.2, 0.08, 1.2], ['#b8a37a']))
  for (const [dx, dz] of [[-0.9, -0.9], [0.9, -0.9], [-0.9, 0.9], [0.9, 0.9]] as const) {
    group.add(kit.box([x + dx, DECK + 0.28, z + dz], [0.16, 0.4, 0.16], ['#a9855f', 'wood']))
  }
}

type Spark = { mesh: T.Mesh; velocity: T.Vector3; life: number }

export function createFireworks(scene: T.Scene) {
  const sparks: Spark[] = []
  const geometry = new T.BoxGeometry(0.18, 0.18, 0.18)
  for (let index = 0; index < FIREWORK.count; index += 1) {
    const material = new T.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0 })
    const mesh = new T.Mesh(geometry, material)
    mesh.visible = false
    scene.add(mesh)
    sparks.push({ mesh, velocity: new T.Vector3(), life: 0 })
  }
  let cooldown = 0
  return {
    get ready() { return cooldown <= 0 },
    launch() {
      if (cooldown > 0) return false
      cooldown = 2.2
      const { x, z } = FIREWORK
      for (const [index, spark] of sparks.entries()) {
        const angle = (index / sparks.length) * Math.PI * 2 + Math.random() * 0.3
        const speed = 1.6 + Math.random() * 2.4
        spark.mesh.position.set(x, DECK + 0.4, z)
        spark.velocity.set(Math.cos(angle) * speed, FIREWORK.rise + Math.random() * 3, Math.sin(angle) * speed)
        spark.life = 1.6 + Math.random() * 0.6
        ;(spark.mesh.material as T.MeshBasicMaterial).color.set(COLORS[index % COLORS.length][0])
        spark.mesh.visible = true
      }
      return true
    },
    update(step: number) {
      cooldown = Math.max(0, cooldown - step)
      for (const spark of sparks) {
        if (spark.life <= 0) { spark.mesh.visible = false; continue }
        spark.life -= step
        spark.velocity.y -= 6 * step
        spark.mesh.position.addScaledVector(spark.velocity, step)
        const material = spark.mesh.material as T.MeshBasicMaterial
        material.opacity = Math.max(0, Math.min(1, spark.life))
      }
    },
  }
}
