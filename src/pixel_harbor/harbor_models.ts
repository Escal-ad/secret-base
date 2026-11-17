import * as T from 'three'
import { createMaterials } from './harbor_materials'
import { markHarborGlow } from './harbor_glow'
import { LOOKOUT } from './harbor_exploration_config'

export type Point = [x: number, y: number, z: number]
export type Paint = [color: string, pattern?: 'wood' | 'brick' | 'grass' | 'roof']

export function createModelKit() {
  const surface = createMaterials()
  const cube = new T.BoxGeometry()
  function box(position: Point, size: Point, paint: Paint) {
    const mesh = new T.Mesh(cube, surface(...paint))
    mesh.position.set(...position)
    mesh.scale.set(...size)
    return mesh
  }
  function cylinder(position: Point, shape: [top: number, bottom: number, height: number, sides: number], paint: Paint) {
    const mesh = new T.Mesh(new T.CylinderGeometry(...shape), surface(...paint))
    mesh.position.set(...position)
    return mesh
  }
  function beam(ends: [Point, Point], width: number, paint: Paint) {
    const from = new T.Vector3(...ends[0])
    const to = new T.Vector3(...ends[1])
    const axis = to.clone().sub(from)
    const mesh = box(from.lerp(to, 0.5).toArray(), [width, axis.length(), width], paint)
    mesh.quaternion.setFromUnitVectors(T.Object3D.DEFAULT_UP, axis.normalize())
    return mesh
  }
  return { box, cylinder, beam, surface }
}

export type ModelKit = ReturnType<typeof createModelKit>

export function makeHouse(kit: ModelKit, colors: { wall: string; roof: string; trim: string }, size: Point) {
  const group = new T.Group()
  const [width, height, depth] = size
  const { box, surface } = kit
  const rise = width * 0.31
  group.add(box([0, height / 2, 0], size, [colors.wall, 'brick']))
  const gable = new T.Shape()
  gable.moveTo(-width / 2, 0)
  gable.lineTo(width / 2, 0)
  gable.lineTo(0, rise)
  const attic = new T.Mesh(new T.ExtrudeGeometry(gable, { depth, bevelEnabled: false }), surface(colors.wall))
  attic.position.set(0, height, -depth / 2)
  group.add(attic)
  for (const side of [-1, 1]) {
    const slope = Math.atan2(rise, width / 2)
    const roof = box([side * width * 0.25, height + rise / 2, 0],
      [Math.hypot(width / 2, rise) + 0.42, 0.16, depth + 0.48], [colors.roof, 'roof'])
    roof.rotation.z = -side * slope
    group.add(roof)
    const windowX = side * width * 0.29
    const windowZ = -depth / 2 - 0.035
    group.add(box([windowX, height * 0.62, windowZ], [0.79, 0.82, 0.11], [colors.trim]))
    for (const pane of [-0.15, 0.15]) {
      group.add(markHarborGlow(box([windowX + pane, height * 0.62, windowZ - 0.065],
        [0.24, 0.58, 0.035], ['#e6b879']), 'window'))
    }
  }
  group.add(box([0, height * 0.29, -depth / 2], [0.76, height * 0.58, 0.14], ['#455854', 'wood']))
  group.add(box([width * 0.22, height + rise * 0.75, depth * 0.25], [0.40, 1.15, 0.45], ['#835e58', 'brick']))
  return group
}

function addLanternGallery(group: T.Group, kit: ModelKit, height: number) {
  const { box, beam, cylinder } = kit
  const red: Paint = ['#a74338', 'roof']
  const metal: Paint = ['#544b49']
  group.add(cylinder([0, height, 0], [LOOKOUT.outerRadius, 1.04, 0.25, 12], red))
  group.add(markHarborGlow(cylinder([0, height + 0.36, 0], [0.61, 0.64, 0.57, 12], ['#fff1ad']), 'lighthouse'))
  group.add(cylinder([0, height + 0.71, 0], [0.86, 0.86, 0.15, 12], red))
  group.add(cylinder([0, height + 1.04, 0], [0.21, 0.83, 0.53, 12], red))
  group.add(cylinder([0, height + 1.34, 0], [0.06, 0.19, 0.10, 10], red))
  group.add(box([0, height + 1.47, 0], [0.077, 0.23, 0.077], metal))
  for (let index = 0; index < 12; index++) {
    const angle = index * Math.PI / 6
    const next = angle + Math.PI / 6
    const x = Math.cos(angle)
    const z = Math.sin(angle)
    group.add(box([x * 0.62, height + 0.4, z * 0.62], [0.07, 0.62, 0.07], metal))
    const rail = LOOKOUT.outerRadius - 0.067
    group.add(box([x * rail, height + 0.37, z * rail], [0.06, 0.54, 0.06], metal))
    for (const y of [height + 0.36, height + 0.62]) {
      group.add(beam([[x * rail, y, z * rail], [Math.cos(next) * rail, y, Math.sin(next) * rail]], 0.045, metal))
    }
  }
}

export function makeLighthouse(kit: ModelKit) {
  const group = new T.Group()
  const { box, cylinder } = kit
  const stripeHeight = 1.7
  group.add(cylinder([0, 0.13, 0], [1.46, 1.55, 0.26, 12], ['#ada191', 'brick']))
  for (let index = 0; index < 5; index++) {
    const bottom = 1.23 - index * 0.092
    const color = index % 2 === 0 ? '#eee4cc' : '#ba5147'
    const y = 0.24 + (index + 0.5) * stripeHeight
    group.add(cylinder([0, y, 0], [bottom - 0.092, bottom, stripeHeight, 12], [color, 'brick']))
    if (index > 0) {
      group.add(box([0, y + 0.22, bottom - 0.004], [0.39, 0.59, 0.1], ['#886e65']))
      group.add(box([0, y + 0.22, bottom + 0.057], [0.25, 0.45, 0.05], ['#f0c583']))
    }
  }
  group.add(box([0, 0.85, 1.18], [0.65, 1.36, 0.17], ['#52605a', 'wood']))
  addLanternGallery(group, kit, 8.84)
  return group
}

function makeHull(kit: ModelKit, color: string) {
  const outline = new T.Shape()
  outline.moveTo(-2.05, -0.64)
  outline.lineTo(0.85, -0.78)
  outline.lineTo(1.65, -0.55)
  outline.lineTo(2.48, 0)
  outline.lineTo(1.65, 0.55)
  outline.lineTo(0.85, 0.78)
  outline.lineTo(-2.05, 0.64)
  outline.closePath()
  const group = new T.Group()
  const bands = [
    { y: 0.08, height: 0.15, scale: 0.86, paint: ['#774942', 'wood'] },
    { y: 0.23, height: 0.31, scale: 0.96, paint: ['#e5d9bd', 'wood'] },
    { y: 0.54, height: 0.12, scale: 1, paint: [color, 'wood'] },
  ] as const
  for (const { y, height, scale, paint } of bands) {
    const hull = new T.Mesh(new T.ExtrudeGeometry(outline, { depth: height, bevelEnabled: false }), kit.surface(paint[0], paint[1]))
    hull.rotation.x = -Math.PI / 2
    hull.position.y = y
    hull.scale.set(scale, scale, 1)
    group.add(hull)
  }
  return group
}

export function makeBoat(kit: ModelKit, color: string) {
  const group = makeHull(kit, color)
  const { box, beam, cylinder } = kit
  group.add(box([-0.53, 1.01, 0], [1.02, 0.83, 1.02], ['#f3dfc1', 'wood']))
  group.add(box([-0.53, 1.48, 0], [1.2, 0.15, 1.22], [color]))
  for (const side of [-1, 1]) {
    group.add(box([-0.49, 1.18, side * 0.53], [0.70, 0.32, 0.045], ['#587981']))
    group.add(box([-0.48, 1.18, side * 0.56], [0.055, 0.35, 0.035], ['#ecd8b6']))
    const fender = cylinder([-1.18, 0.43, side * 0.72], [0.19, 0.19, 0.12, 10], ['#465456'])
    fender.rotation.x = Math.PI / 2
    group.add(fender)
  }
  group.add(box([0, 1.17, 0], [0.05, 0.32, 0.67], ['#688890']))
  group.add(beam([[0.78, 0.66, 0], [0.51, 2.56, 0]], 0.074, ['#8c6b51']))
  group.add(box([0.37, 2.43, 0], [0.31, 0.19, 0.045], ['#c97155']))
  group.add(box([1.38, 0.77, 0.17], [0.48, 0.24, 0.45], ['#c08a58', 'wood']))
  group.add(cylinder([0.85, 0.74, -0.28], [0.24, 0.3, 0.16, 8], ['#668c76', 'grass']))
  return group
}

export function makeGull(kit: ModelKit) {
  const { box } = kit
  const bird = new T.Group()
  bird.add(box([0, 0, 0], [0.27, 0.16, 0.39], ['#fff0d5']))
  bird.add(box([0, 0.11, -0.15], [0.15, 0.15, 0.15], ['#fff7e2']))
  bird.add(box([0, 0.08, -0.25], [0.08, 0.055, 0.13], ['#d89c4f']))
  bird.add(box([0.079, 0.13, -0.17], [0.025, 0.028, 0.028], ['#354a52']))
  const wings = [-1, 1].map(side => {
    const wing = new T.Group()
    wing.add(box([side * 0.205, 0.03, 0.018], [0.28, 0.065, 0.16], ['#aab9bc']))
    wing.add(box([side * 0.39, 0.03, 0.074], [0.16, 0.052, 0.10], ['#6c7f8a']))
    bird.add(wing)
    return wing
  })
  return { bird, wings }
}
