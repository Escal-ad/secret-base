import type { Footprint } from './harbor_layout'
import type { CameraObstacle } from './harbor_orbit_camera'
import { seededRandom } from './harbor_materials'
import { VILLAGE } from './harbor_exploration_config'

const TERRACE = { seed: 841, count: 4, baseZ: 23.5, stride: 5.3, rise: 1.52, rows: 5,
  startX: -23, widthStep: 6.8, width: 39, depth: 21 } as const

function makeTerraces() {
  const random = seededRandom(TERRACE.seed)
  return Array.from({ length: TERRACE.count }, (_, tier) => {
    const z = TERRACE.baseZ + tier * TERRACE.stride
    const y = VILLAGE.upperY + tier * TERRACE.rise
    const lots = Array.from({ length: TERRACE.rows }, (_, index) => {
      const x = TERRACE.startX + TERRACE.widthStep * index + random() * 1.5
      const house = tier < TERRACE.count - 1 && (index + tier) % TERRACE.rows !== 0
        ? { width: 3.2 + random(), height: 2.2 + random(), color: (index + tier) % 4 } : undefined
      return { x, house, treeScale: 1.15 + random() * 0.85 }
    })
    return { tier, y, z, lots }
  })
}

export const VILLAGE_TERRACES = makeTerraces()

function houseFootprint(x: number, z: number, width: number): Footprint {
  return [x - width / 2, x + width / 2, z - 1.7, z + 1.7]
}

export const TERRACE_HOUSES: CameraObstacle[] = VILLAGE_TERRACES.flatMap(({ y, z, lots }) =>
  lots.flatMap(({ x, house }) => house
    ? [{ footprint: houseFootprint(x, z + 2.3, house.width), base: y, height: house.height + house.width * 0.31 }] : []))

export const TERRACE_TRUNKS: Footprint[] = VILLAGE_TERRACES[0].lots.map(({ x, treeScale }) => {
  const radius = 0.16 * treeScale
  return [x + 2.8 - radius, x + 2.8 + radius,
    VILLAGE_TERRACES[0].z + 2.7 - radius, VILLAGE_TERRACES[0].z + 2.7 + radius]
})

export const TERRACE_SOLIDS: CameraObstacle[] = VILLAGE_TERRACES.slice(1).map(({ tier, y, z }) => {
  const width = TERRACE.width - tier * 2.8
  return { footprint: [-9 - width / 2, -9 + width / 2, z - 0.5, z + 20.5], base: 0, height: y }
})
