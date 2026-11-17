import * as T from 'three'
import type { HarborPlace } from './harbor_hotspots'
import { makeCameraBoxes } from './harbor_orbit_camera'
import type { CameraObstacle } from './harbor_orbit_camera'
import { PLACE_LABELS } from './harbor_places_config'

export type ProjectedLabel = {
  id: string; x: number; y: number; opacity: number; showName: boolean
}

function labelOverlap(x: number, y: number, visible: readonly ProjectedLabel[]) {
  return visible.some(other => Math.abs(other.x - x) < PLACE_LABELS.width
    && Math.abs(other.y - y) < PLACE_LABELS.height)
}

export function createLabelProjection(places: readonly HarborPlace[], obstacles: readonly CameraObstacle[]) {
  const anchors = places.flatMap(place => place.anchor
    ? [{ place, anchor: new T.Vector3(...place.anchor) }] : [])
  const boxes = makeCameraBoxes(obstacles, 0)
  const ray = new T.Ray()
  const point = new T.Vector3()
  const screen = new T.Vector3()
  function isOccluded(camera: T.Camera, anchor: T.Vector3) {
    ray.origin.copy(camera.position)
    ray.direction.copy(anchor).sub(camera.position).normalize()
    const distance = camera.position.distanceTo(anchor) - PLACE_LABELS.occlusionMargin
    return boxes.some(box => !box.containsPoint(ray.origin)
      && ray.intersectBox(box, point) !== null && point.distanceTo(ray.origin) < distance)
  }

  return (camera: T.Camera, player: { x: number; z: number }, options: { width: number; height: number; elapsed: number }) => {
    const sorted = anchors.map(({ place, anchor }) => ({
      place, anchor, distance: Math.hypot(player.x - place.hotspot.x, player.z - place.hotspot.z),
    })).filter(item => item.distance < PLACE_LABELS.maxDistance).sort((a, b) => a.distance - b.distance)
    const visible: ProjectedLabel[] = []
    for (const { place, anchor, distance } of sorted) {
      if (visible.length >= PLACE_LABELS.maxVisible) break
      screen.copy(anchor).project(camera)
      if (Math.abs(screen.z) > 1 || Math.abs(screen.x) > 1 || Math.abs(screen.y) > 1) continue
      const x = (screen.x + 1) * options.width / 2
      const y = (1 - screen.y) * options.height / 2 + Math.sin(options.elapsed * PLACE_LABELS.bobSpeed) * PLACE_LABELS.bob
      if (y < PLACE_LABELS.visibleTop || labelOverlap(x, y, visible) || isOccluded(camera, anchor)) continue
      const opacity = T.MathUtils.clamp((PLACE_LABELS.maxDistance - distance)
        / (PLACE_LABELS.maxDistance - PLACE_LABELS.fadeStart), 0, 1)
      visible.push({ id: place.hotspot.id, x, y, opacity, showName: distance <= PLACE_LABELS.nameDistance })
    }
    return visible
  }
}
