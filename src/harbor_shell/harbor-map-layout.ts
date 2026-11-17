import { MAP, mapPoint } from '../harbor_expansion/harbor-map-config'
import type { HarborPlace } from '../pixel_harbor/harbor_hotspots'

export type Point = { x: number; y: number }
export type MapSize = { width: number; height: number }
export type MapView = { zoom: number; offset: Point }
export const MAP_UI = {
  initial: { zoom: 1, offset: { x: 0, y: 0 } }, maxZoom: 2.5, zoomStep: 0.25,
  markerRadius: 19, markerSpacing: 41, searchRings: 5, searchBearings: 16, dragThreshold: 6,
} as const

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

export function limitMapView(view: MapView, size: MapSize): MapView {
  const zoom = clamp(view.zoom, MAP_UI.initial.zoom, MAP_UI.maxZoom)
  const panX = size.width * (zoom - 1) / 2
  const panY = size.height * (zoom - 1) / 2
  return { zoom, offset: { x: clamp(view.offset.x, -panX, panX), y: clamp(view.offset.y, -panY, panY) } }
}

export function positionOnMap(world: { x: number; z: number }, size: MapSize, view: MapView): Point {
  const { x, y } = mapPoint(world.x, world.z)
  return {
    x: (x - 0.5) * size.width * view.zoom + size.width / 2 + view.offset.x,
    y: (y - 0.5) * size.height * view.zoom + size.height / 2 + view.offset.y,
  }
}

function findMarkerSlot(anchor: Point, size: MapSize, used: readonly Point[]) {
  const { markerRadius, markerSpacing, searchRings, searchBearings } = MAP_UI
  const bound = (p: Point): Point => ({
    x: clamp(p.x, markerRadius, size.width - markerRadius),
    y: clamp(p.y, markerRadius, size.height - markerRadius),
  })
  const free = (point: Point) => used.every(other => Math.hypot(point.x - other.x, point.y - other.y) >= markerSpacing)
  const original = bound(anchor)
  if (free(original)) return original
  for (let ring = 1; ring <= searchRings; ring++) {
    for (let ray = 0; ray < searchBearings; ray++) {
      const angle = ray / searchBearings * Math.PI * 2
      const point = bound({ x: anchor.x + Math.cos(angle) * markerSpacing * ring,
        y: anchor.y + Math.sin(angle) * markerSpacing * ring })
      if (free(point)) return point
    }
  }
  return original
}

export function layoutMapMarkers(places: readonly HarborPlace[], size: MapSize, view: MapView) {
  const used: Point[] = []
  if (!size.width || !size.height) return []
  return places.flatMap(place => {
    const anchor = positionOnMap(place.hotspot, size, view)
    if (anchor.x < 0 || anchor.y < 0 || anchor.x > size.width || anchor.y > size.height) return []
    const point = findMarkerSlot(anchor, size, used)
    used.push(point)
    return [{ place, anchor, point }]
  })
}

export const mapAspect = (MAP.east - MAP.west) / (MAP.south - MAP.north)
