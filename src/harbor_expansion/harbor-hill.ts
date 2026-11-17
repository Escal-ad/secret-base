import * as T from 'three'
import { HILL, hillElevation } from './harbor-hill-config'
import { DECK } from '../pixel_harbor/harbor_terrain'
import type { Footprint } from '../pixel_harbor/harbor_layout'
import type { ModelKit, Point } from '../pixel_harbor/harbor_models'
import { makeCanvas, pixelTexture, seededRandom } from '../pixel_harbor/harbor_materials'
import { markHarborGlow } from '../pixel_harbor/harbor_glow'
import type { CameraObstacle } from '../pixel_harbor/harbor_orbit_camera'

const GRASS = '#819471'
const ROCK = '#8c8878'
const TRAIL = '#b7a384'
const RAIL = '#896a50'
const PATH_CLEARANCE = 0.016
const PATH_THICKNESS = 0.06

function surface(x: number, z: number) { return DECK + hillElevation(x, z) }

function makeSlope(kit: ModelKit, footprint: Footprint) {
  const [left, right, near, far] = footprint
  const points = [[left, near], [right, near], [right, far], [left, far]]
  const vertices = points.flatMap(([x, z]) => [x, surface(x, z), z])
    .concat(points.flatMap(([x, z]) => [x, -0.72, z]))
  const mesh = new T.BufferGeometry()
  mesh.setAttribute('position', new T.Float32BufferAttribute(vertices, 3))
  mesh.setAttribute('uv', new T.Float32BufferAttribute([0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1], 2))
  mesh.setIndex([0,2,1,0,3,2, 0,1,5,0,5,4, 1,2,6,1,6,5, 2,3,7,2,7,6, 3,0,4,3,4,7])
  mesh.addGroup(0,6,0)
  mesh.addGroup(6,24,1)
  mesh.computeVertexNormals()
  return new T.Mesh(mesh, [kit.surface(GRASS, 'grass'), kit.surface(ROCK, 'brick')])
}

const summitCells: Footprint[] = HILL.footprints.flatMap(([left, right, near, far]): Footprint[] => {
  const cuts = [left, ...[HILL.summitAt, HILL.riseFrom].filter(x => x > left && x < right), right]
  return cuts.slice(1).map((x, index) => [cuts[index], x, near, far])
})

function plants() {
  const random = seededRandom(HILL.treeSeed)
  return Array.from({ length: HILL.treeCount }, (_, index) => {
    const [left, right, near, far] = HILL.footprints[index % HILL.footprints.length]
    const x = left + (right - left) * (0.08 + random() * 0.84)
    const z = index % 2 === 0 ? near + 0.48 : far - 0.48
    return { x, z, size: 0.8 + random() * 0.45 }
  }).filter(({ x, z }) => Math.hypot(x + 47.1, z + 7.8) > 2.1)
}

const TREES = plants()

function railEnds(from: Point, to: Point): [Point, Point] {
  const yaw = Math.atan2(to[0]-from[0],to[2]-from[2])
  const ox=Math.cos(yaw)*HILL.railOffset,oz=-Math.sin(yaw)*HILL.railOffset
  function cap([x,,z]:Point, offset: number):Point {
    const px=x+ox+Math.sin(yaw)*offset, pz=z+oz+Math.cos(yaw)*offset
    return [px,surface(px,pz)+HILL.railHeight,pz]
  }
  return [cap(from,HILL.railEndGap),cap(to,-HILL.railEndGap)]
}

function squareFootprint(x:number,z:number,radius:number):Footprint {
  return [x-radius,x+radius,z-radius,z+radius]
}

export const HILL_OBSTACLES: Footprint[] = [
  ...TREES.map(({ x, z })=>squareFootprint(x,z,0.14)),
  ...HILL.stairRuns.flatMap(index=>{
    const [x,z]=HILL.trail[index-1], [u,v]=HILL.trail[index]
    return railEnds([x,0,z],[u,0,v]).map(([px,,pz])=>squareFootprint(px,pz,HILL.railThickness/2))
  }),
]

const HILL_TREE_PARTS = [[0.62, 0.24, 1.24, '#725440'], [1.39, 0.92, 0.77, '#5d7764'], [1.89, 0.63, 0.41, '#79906e']] as const
export const HILL_FLIGHT_VOLUMES: CameraObstacle[] = TREES.flatMap(({ x, z, size }) =>
  HILL_TREE_PARTS.map(([y, width, height]) => ({
    footprint: squareFootprint(x, z, width * size / 2), base: surface(x, z) + (y - height / 2) * size, height: height * size,
  })))

function addTrees(group: T.Group, kit: ModelKit) {
  const bone = new T.Object3D()
  for (const [y, width, height, color] of HILL_TREE_PARTS) {
    const box = kit.box([0,0,0],[1,1,1],[color])
    const mesh = new T.InstancedMesh(box.geometry, box.material, TREES.length)
    TREES.forEach(({ x, z, size }, index) => {
      bone.position.set(x, surface(x,z) + y * size, z)
      bone.scale.set(width * size, height * size, width * size)
      bone.updateMatrix()
      mesh.setMatrixAt(index, bone.matrix)
    })
    group.add(mesh)
  }
}

function addStairRun(kit: ModelKit, [from, to]: [Point, Point]) {
  const group = new T.Group()
  const dx = to[0] - from[0], dz = to[2] - from[2]
  const yaw = Math.atan2(dx, dz)
  for(let index=1;index<=HILL.treadCount;index++){
    const progress=index/(HILL.treadCount+1)
    const x=from[0]+dx*progress,z=from[2]+dz*progress
    const tread=kit.box([x,surface(x,z),z],[HILL.treadWidth,HILL.treadHeight,HILL.treadDepth],[ROCK,'brick'])
    tread.rotation.y=yaw
    group.add(tread)
  }
  const caps=railEnds(from,to)
  const [start,end]=caps
  group.add(kit.beam([start,end],HILL.railThickness,[RAIL,'wood']))
  for(const [x,y,z] of caps) group.add(kit.box([x,y-HILL.railHeight/2,z],
    [HILL.railThickness,HILL.railHeight,HILL.railThickness],[RAIL,'wood']))
  return group
}

function addTrail(group: T.Group, kit: ModelKit) {
  for (let index = 1; index < HILL.trail.length; index++) {
    const [x,z] = HILL.trail[index - 1]
    const [u,v] = HILL.trail[index]
    const from: Point = [x, surface(x,z) + PATH_CLEARANCE, z]
    const to: Point = [u, surface(u,v) + PATH_CLEARANCE, v]
    const road = kit.beam([from,to], HILL.trailWidth, [TRAIL,'brick'])
    road.scale.z = PATH_THICKNESS
    road.rotateY(Math.PI / 2)
    group.add(road)
    if (HILL.stairRuns.some(run=>run===index)) group.add(addStairRun(kit,[from,to]))
    const px = x + 0.52; const pz = z - 0.91; const py = surface(px,pz)
    group.add(kit.box([px, py + 0.49,pz],[0.11,0.98,0.11],[RAIL]))
    if (index % 2) group.add(markHarborGlow(kit.box([px,py+1.04,pz],[0.19,0.20,0.19],['#f2c48b']),'street'))
  }
}

export function addHarborHill(group: T.Group, kit: ModelKit) {
  for (const footprint of summitCells) group.add(makeSlope(kit, footprint))
  addTrees(group, kit)
  addTrail(group, kit)
  const { canvas, context } = makeCanvas(128, 32)
  context.fillStyle = RAIL; context.fillRect(0,0,128,32)
  context.fillStyle = '#fff0d4'; context.font = 'bold 19px sans-serif'; context.textAlign = 'center'
  context.fillText(HILL.title,64,23)
  const sign = new T.Mesh(new T.PlaneGeometry(1.12,0.28),new T.MeshBasicMaterial({map:pixelTexture(canvas),side:T.DoubleSide}))
  sign.position.set(-24.8,DECK+1.26,-11.88)
  sign.rotation.y = Math.PI / 2
  group.add(sign, kit.box([-24.8,DECK+0.61,-11.88],[0.12,1.22,0.12],[RAIL]))
}
