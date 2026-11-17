import * as T from 'three'
import type { Hotspot } from './harbor_hotspots'
import { DECK } from './harbor_layout'
import { groundElevation } from './harbor_terrain'
import { HARBOR_LIGHTING } from './harbor_lighting_config'
import { LOOKOUT } from './harbor_exploration_config'

const MARKER_HEIGHT = 0.018
const HINT_HEIGHT = 1.82
const SEGMENTS = 32
const RIM = { inner: 0.48, outer: 0.57, color: HARBOR_LIGHTING.glow.ring.color as string, opacity: 0.98 }
const HALO = { inner: 0.39, outer: 0.66, color: '#ffb752', opacity: 0.34 }
export type HintPosition = { x: number; y: number }

function makeRing(spec: typeof RIM) {
  const ring = new T.Mesh(new T.RingGeometry(spec.inner, spec.outer, SEGMENTS),
    new T.MeshBasicMaterial({ color: spec.color, transparent: true, opacity: spec.opacity, depthWrite: false }))
  ring.rotation.x = -Math.PI / 2
  return ring
}

export function createHotspotMarker(scene: T.Scene) {
  const marker = new T.Group()
  const anchor = new T.Vector3()
  const halo = makeRing(HALO)
  const rim = makeRing(RIM)
  rim.position.y = MARKER_HEIGHT
  marker.add(halo, rim)
  marker.visible = false
  scene.add(marker)
  return {
    setHotspot(hotspot: Hotspot | null) {
      marker.visible = Boolean(hotspot)
      if (hotspot) marker.position.set(hotspot.x,
        (hotspot.kind === 'sea' ? 0 : DECK + (hotspot.kind==='telescope' ? LOOKOUT.platformOffset
          : groundElevation(hotspot.x, hotspot.z))) + MARKER_HEIGHT, hotspot.z)
    },
    setNight(night: number, halos: boolean) {
      const config = HARBOR_LIGHTING.glow.ring
      rim.material.opacity = T.MathUtils.lerp(config.day, config.night, night)
      halo.visible = halos || night === 0
    },
    project(camera: T.Camera): HintPosition | null {
      if (!marker.visible) return null
      anchor.copy(marker.position)
      anchor.y += HINT_HEIGHT
      anchor.project(camera)
      if (Math.abs(anchor.x) > 1 || Math.abs(anchor.y) > 1 || Math.abs(anchor.z) > 1) return null
      return { x: (anchor.x + 1) * 50, y: (1 - anchor.y) * 50 }
    },
  }
}
