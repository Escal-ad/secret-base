import * as T from 'three'
import { SUNSET, VILLAGE } from './harbor_exploration_config'
import { FOREST } from './harbor_forest_config'
import type { Footprint } from './harbor_layout'
import { seededRandom } from './harbor_materials'
import type { ModelKit, Point } from './harbor_models'
import { DECK, groundElevation } from './harbor_terrain'
import type { CameraObstacle } from './harbor_orbit_camera'

const ACTIVE_INSTANCES_PER_TREE = 4

function growForest() {
  let available = Math.min(VILLAGE.maxNewTrees, Math.floor(VILLAGE.maxNewInstances / ACTIVE_INSTANCES_PER_TREE))
  return FOREST.clusters.map(cluster => {
    const random = seededRandom(cluster.seed)
    const count = Math.min(cluster.total, available)
    available -= count
    const trees = Array.from({ length: count }, (_, index) => {
      const angle = index * Math.PI * 2 / count
      const spread = cluster.radius * (0.65 + random() * 0.35)
      const x = cluster.x + Math.cos(angle) * spread
      const z = cluster.z + Math.sin(angle) * spread
      return { x, z, y: DECK + groundElevation(x, z), size: 0.74 + random() * 0.34 }
    })
    return { ...cluster, trees }
  })
}

const clusters = growForest()
type Tree = typeof clusters[number]['trees'][number]
export const FOREST_OBSTACLES: Footprint[] = clusters.flatMap(cluster => cluster.trees.map(({ x, z, size }) => {
  const radius = FOREST.treeFoot * size
  return [x - radius, x + radius, z - radius, z + radius]
}))
const FOREST_CANOPY = { radius: 0.62, base: 1.42, top: 2.88 }
export const FOREST_FLIGHT_VOLUMES: CameraObstacle[] = clusters.flatMap(cluster => cluster.trees.flatMap(({ x, y, z, size }) => {
  const trunk = FOREST.treeFoot * size, canopy = FOREST_CANOPY.radius * size
  return [
    { footprint: [x - trunk, x + trunk, z - trunk, z + trunk], base: y, height: FOREST_CANOPY.base * size },
    { footprint: [x - canopy, x + canopy, z - canopy, z + canopy], base: y + FOREST_CANOPY.base * size,
      height: (FOREST_CANOPY.top - FOREST_CANOPY.base) * size },
  ]
}))

function treeBatch(kit: ModelKit, trees: readonly Tree[], spec: { y: number; size: Point; color: string }) {
  const prototype = kit.box([0, 0, 0], spec.size, [spec.color])
  const mesh = new T.InstancedMesh(prototype.geometry, prototype.material, trees.length)
  const node = new T.Object3D()
  trees.forEach((tree, index) => {
    node.position.set(tree.x, tree.y + spec.y * tree.size, tree.z)
    node.scale.set(...spec.size.map(side => side * tree.size) as Point)
    node.updateMatrix()
    mesh.setMatrixAt(index, node.matrix)
  })
  return mesh
}

function growChunk(group: T.Group, kit: ModelKit, trees: readonly Tree[], detailed: boolean) {
  group.add(treeBatch(kit, trees, { y: 0.83, size: [0.23, 1.66, 0.24], color: FOREST.trunk }))
  group.add(treeBatch(kit, trees, { y: 1.96, size: [1.23, 1.07, 1.15], color: FOREST.lower }))
  if (detailed) group.add(treeBatch(kit, trees, { y: 2.62, size: [0.79, 0.51, 0.72], color: FOREST.upper }))
}

function addTreeShadows(scene: T.Scene) {
  const trees = clusters.flatMap(cluster => cluster.trees)
  const material = new T.MeshBasicMaterial({ color: FOREST.shadowColor, transparent: true, depthWrite: false })
  const shadows = new T.InstancedMesh(new T.PlaneGeometry(1, 1), material, trees.length)
  shadows.frustumCulled = false
  scene.add(shadows)
  const node = new T.Object3D()
  const [sunX, , sunZ] = SUNSET.direction
  let previous = -1
  return (dusk: number, enabled: boolean) => {
    shadows.visible = enabled
    if (!enabled || dusk === previous) return
    previous = dusk
    const length = T.MathUtils.lerp(FOREST.shadowLength, FOREST.shadowLong, dusk)
    material.opacity = T.MathUtils.lerp(FOREST.shadowDay, FOREST.shadowDusk, dusk)
    node.rotation.set(-Math.PI / 2, 0, Math.atan2(-sunZ, sunX))
    trees.forEach(({ x, y, z, size }, index) => {
      const stretch = length * size
      node.position.set(x - sunX * stretch / 2, y + 0.018, z - sunZ * stretch / 2)
      node.scale.set(stretch, FOREST.shadowWidth * size, 1)
      node.updateMatrix()
      shadows.setMatrixAt(index, node.matrix)
    })
    shadows.instanceMatrix.needsUpdate = true
  }
}

export function addHarborForest(scene: T.Scene, kit: ModelKit) {
  const shadows = addTreeShadows(scene)
  const chunks = clusters.map(cluster => {
    const near = new T.Group()
    const far = new T.Group()
    growChunk(near, kit, cluster.trees, true)
    growChunk(far, kit, cluster.trees, false)
    scene.add(near, far)
    return { x: cluster.x, z: cluster.z, near, far }
  })
  return (position: { x: number; z: number }, dusk: number, effects: { trees: boolean; shadows: boolean }) => {
    shadows(dusk, effects.shadows)
    for (const chunk of chunks) {
      const distance = Math.hypot(position.x - chunk.x, position.z - chunk.z)
      chunk.near.visible = distance < VILLAGE.forestLodDistance
      chunk.far.visible = effects.trees && !chunk.near.visible && distance < VILLAGE.forestLimitDistance
    }
  }
}
