import * as T from 'three'
import type { Footprint } from '../pixel_harbor/harbor_layout'
import type { ModelKit, Paint } from '../pixel_harbor/harbor_models'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'
import { seededRandom } from '../pixel_harbor/harbor_materials'

// 落日观景点那棵超级大枫树：树冠 10.5 米宽，正好把下面的长凳整个罩住。
// 位置就是用户站的 (-48.12, -4.79)，长凳在 (-47.92, -7.15)，在树冠范围内。
export const MAPLE = {
  x: -48.12, z: -4.79,
  trunkHeight: 3.8,
  crown: 10.5,
  leafCount: 44,
  fallTop: 9.9,
  fallSpeed: 0.52,
  driftRadius: 4.4,
  colors: ['#c0562f', '#cf7a34', '#d9a13d', '#a8432a'] as const,
} as const

const BARK: Paint = ['#6b4f43', 'wood']

export const MAPLE_OBSTACLE: Footprint = [MAPLE.x - 0.5, MAPLE.x + 0.5, MAPLE.z - 0.5, MAPLE.z + 0.5]

function leafPaint(index: number): Paint {
  return [MAPLE.colors[index % MAPLE.colors.length], 'grass']
}

/** 静态部分：粗树干 + 四根主枝 + 四层橙红树冠。树在山上，基座按地形高度抬起来。 */
export function addMapleTree(group: T.Object3D, kit: ModelKit) {
  const { x, z } = MAPLE
  const base = DECK + groundElevation(x, z)
  const trunk = MAPLE.trunkHeight
  group.add(kit.box([x, base + trunk / 2, z], [0.72, trunk, 0.72], BARK))
  for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]] as const) {
    group.add(kit.beam([[x, base + trunk * 0.72, z],
      [x + sx * 3.1, base + trunk + 1.9, z + sz * 1.5]], 0.3, BARK))
  }
  const tiers = [
    { y: 6.0, width: MAPLE.crown, depth: MAPLE.crown * 0.95, height: 1.7 },
    { y: 7.3, width: MAPLE.crown * 0.82, depth: MAPLE.crown * 0.78, height: 1.6 },
    { y: 8.4, width: MAPLE.crown * 0.6, depth: MAPLE.crown * 0.57, height: 1.4 },
    { y: 9.3, width: MAPLE.crown * 0.34, depth: MAPLE.crown * 0.32, height: 1.1 },
  ]
  tiers.forEach((tier, index) => {
    group.add(kit.box([x, base + tier.y, z], [tier.width, tier.height, tier.depth], leafPaint(index)))
  })
}

/** 飘落的枫叶：每片按自己的相位从树冠往下落，边落边打转，落到底再从顶上重来。 */
export function createMapleLeaves(scene: T.Scene) {
  const random = seededRandom(5527)
  const base = DECK + groundElevation(MAPLE.x, MAPLE.z)
  const leaves = Array.from({ length: MAPLE.leafCount }, (_, index) => {
    const material = new T.MeshBasicMaterial({
      color: MAPLE.colors[index % MAPLE.colors.length], side: T.DoubleSide,
    })
    const mesh = new T.Mesh(new T.BoxGeometry(), material)
    mesh.raycast = () => {}
    scene.add(mesh)
    return { mesh, offset: random() * MAPLE.fallTop, angle: random() * Math.PI * 2,
      radius: 1.2 + random() * MAPLE.driftRadius, spin: 0.8 + random() * 1.8,
      size: 0.2 + random() * 0.12 }
  })
  let time = 0
  return {
    update(step: number, reduced: boolean) {
      time += step
      for (const leaf of leaves) {
        if (reduced) { leaf.mesh.visible = false; continue }
        leaf.mesh.visible = true
        const fall = (time * MAPLE.fallSpeed + leaf.offset) % MAPLE.fallTop
        const sway = Math.sin(time * 0.8 + leaf.angle) * 0.6
        leaf.mesh.position.set(
          MAPLE.x + Math.cos(leaf.angle + sway * 0.5) * (leaf.radius + fall * 0.1),
          base + MAPLE.fallTop - fall,
          MAPLE.z + Math.sin(leaf.angle + sway * 0.5) * (leaf.radius + fall * 0.1),
        )
        leaf.mesh.rotation.set(time * leaf.spin + leaf.angle, time * leaf.spin * 0.8, sway)
        leaf.mesh.scale.set(leaf.size, leaf.size * 0.16, leaf.size * 0.8)
      }
    },
  }
}
