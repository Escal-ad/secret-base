import * as T from 'three'
import { HARBOR_LIGHTING } from './harbor_lighting_config'
import { makeCanvas, pixelTexture } from './harbor_materials'

type GlowKind = keyof typeof HARBOR_LIGHTING.glow
const HALO_SIZE = 24
const HALO_RINGS = [11, 8, 5, 2]
const HALO_OPACITY = 0.26

export function markHarborGlow<Mesh extends T.Mesh>(mesh: Mesh, type: GlowKind): Mesh {
  mesh.userData.harborGlow = type
  return mesh
}

function makeHaloTexture() {
  const { canvas, context } = makeCanvas(HALO_SIZE, HALO_SIZE)
  for (const radius of HALO_RINGS) {
    context.fillStyle = 'rgba(255,255,255,0.20)'
    const center = HALO_SIZE / 2
    for (let y = -radius; y <= radius; y++) {
      const half = Math.floor(Math.sqrt(radius * radius - y * y))
      context.fillRect(center - half, center + y, half * 2 + 1, 1)
    }
  }
  return pixelTexture(canvas)
}

function makeBeam(scene: T.Scene) {
  const config = HARBOR_LIGHTING.beam
  const pivot = new T.Group()
  const beam = new T.Mesh(new T.ConeGeometry(config.radius, config.length, config.facets, 1, true),
    new T.MeshBasicMaterial({ color: config.color, transparent: true, depthWrite: false,
      side: T.DoubleSide, blending: T.AdditiveBlending }))
  beam.position.x = config.length / 2
  beam.rotation.z = Math.PI / 2
  pivot.position.set(...config.position)
  pivot.add(beam)
  scene.add(pivot)
  return (night: number, time: number, effects: { beam:boolean; pulse:number }) => {
    pivot.visible = effects.beam && (night > 0 || effects.pulse > 0)
    pivot.rotation.y = time * config.turnSpeed
    beam.material.opacity = config.opacity * Math.min(1, night + effects.pulse) * (1 + effects.pulse)
  }
}

function collectEmitters(scene: T.Scene) {
  const surfaces: { kind: GlowKind; material: T.MeshLambertMaterial }[] = []
  const anchors: { kind: GlowKind; point: T.Vector3 }[] = []
  scene.updateMatrixWorld(true)
  scene.traverse(object => {
    if (!(object instanceof T.Mesh) || !object.userData.harborGlow) return
    const kind = object.userData.harborGlow as GlowKind
    const config = HARBOR_LIGHTING.glow[kind]
    if (object.material instanceof T.MeshLambertMaterial) {
      object.material = object.material.clone()
      object.material.emissive.set(config.color)
      surfaces.push({ kind, material: object.material })
    }
    if (object.userData.movingGlow) return
    const points = object.userData.glowPoints as T.Vector3[] | undefined
    for (const point of points ?? [object.getWorldPosition(new T.Vector3())]) anchors.push({ kind, point })
  })
  return { surfaces, anchors }
}

export function createHarborGlow(scene: T.Scene, simplified: boolean) {
  const texture = makeHaloTexture()
  const { surfaces, anchors } = collectEmitters(scene)
  const maxHalos = simplified ? HARBOR_LIGHTING.simplifiedHaloLimit : HARBOR_LIGHTING.haloLimit
  anchors.sort((left, right) => HARBOR_LIGHTING.glow[right.kind].size - HARBOR_LIGHTING.glow[left.kind].size)
  const halos = anchors.slice(0, maxHalos).map(({ kind, point }) => {
    const config = HARBOR_LIGHTING.glow[kind]
    const halo = new T.Sprite(new T.SpriteMaterial({ map: texture, color: config.color,
      transparent: true, depthWrite: false, blending: T.AdditiveBlending }))
    halo.position.copy(point)
    halo.scale.setScalar(config.size)
    halo.visible = false
    scene.add(halo)
    return { kind, halo }
  })
  const beam = makeBeam(scene)
  let lastNight = -1
  let lastHalos = false
  return (night: number, time: number, effects: { beam: boolean; halos: boolean; pulse?:number }) => {
    beam(night, time, { beam:effects.beam, pulse:effects.pulse ?? 0 })
    if (night === lastNight && lastHalos === effects.halos) return
    lastNight = night
    lastHalos = effects.halos
    for (const { kind, material } of surfaces) {
      const config = HARBOR_LIGHTING.glow[kind]
      material.emissiveIntensity = T.MathUtils.lerp(config.day, config.night, night)
    }
    for (const { kind, halo } of halos) {
      const config = HARBOR_LIGHTING.glow[kind]
      const intensity = T.MathUtils.lerp(config.day, config.night, night)
      halo.visible = effects.halos && night > 0
      halo.material.opacity = intensity * night * HALO_OPACITY
    }
  }
}
