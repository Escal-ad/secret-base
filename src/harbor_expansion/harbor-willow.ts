import * as T from 'three'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'
import { seededRandom } from '../pixel_harbor/harbor_materials'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'

// 西岸一条南北向的柳树带：从 (-29.2, 20.6) 到 (-29.2, -7.8) 之间均匀稀疏地种。
export const WILLOWS = {
  x: -29.2,
  zFrom: 20.6,
  zTo: -7.8,
  count: 7,
  trunk: ['#6b5540', 'wood'] as Paint,
}

const LEAF: Paint[] = [['#7fa855', 'grass'], ['#6d9a4a', 'grass'], ['#8cb35f', 'grass']]

export const SWING = { x: -26.2, z: -4.2, width: 2.0, height: 2.4 }

function makeWillow(kit: ModelKit, scale: number, random: () => number) {
  const group = new T.Group()
  group.add(kit.box([0, 1.6 * scale, 0], [0.42 * scale, 3.2 * scale, 0.42 * scale], WILLOWS.trunk))
  const crown = kit.box([0, 3.5 * scale, 0], [2.6 * scale, 1.0 * scale, 2.4 * scale], LEAF[0])
  group.add(crown)
  group.add(kit.box([0, 4.1 * scale, 0], [1.7 * scale, 0.7 * scale, 1.6 * scale], LEAF[1]))
  // 垂下来的柳条：一圈细长盒子，绕树冠下沿挂下来
  const strands: T.Object3D[] = []
  const count = 14
  for (let index = 0; index < count; index += 1) {
    const angle = (index / count) * Math.PI * 2
    const radius = (1.0 + random() * 0.25) * scale
    const length = (0.9 + random() * 0.9) * scale
    const strand = kit.box([Math.cos(angle) * radius, 3.3 * scale - length / 2, Math.sin(angle) * radius],
      [0.09 * scale, length, 0.09 * scale], LEAF[2])
    strand.userData.phase = random() * Math.PI * 2
    strand.userData.base = 3.3 * scale - length / 2
    group.add(strand)
    strands.push(strand)
  }
  return { group, strands }
}

export function addWillows(scene: T.Scene, kit: ModelKit) {
  const random = seededRandom(5151)
  const trees = Array.from({ length: WILLOWS.count }, (_, index) => {
    const t = WILLOWS.count === 1 ? 0.5 : index / (WILLOWS.count - 1)
    const z = WILLOWS.zFrom + (WILLOWS.zTo - WILLOWS.zFrom) * t
    const x = WILLOWS.x + (random() - 0.5) * 0.3
    const scale = 0.85 + random() * 0.3
    const { group, strands } = makeWillow(kit, scale, random)
    group.position.set(x, DECK + groundElevation(x, z), z)
    // 树冠统一朝东（朝岸内），像一排垂柳立在岸边
    group.rotation.y = Math.PI / 2 + (random() - 0.5) * 0.2
    scene.add(group)
    return strands
  })

  let clock = 0
  return {
    update(step: number, reduced: boolean) {
      clock += step
      if (reduced) return
      for (const strands of trees) {
        for (const strand of strands) {
          const phase = strand.userData.phase as number
          strand.rotation.z = Math.sin(clock * 1.4 + phase) * 0.06
          strand.rotation.x = Math.cos(clock * 1.1 + phase) * 0.05
        }
      }
    },
  }
}
