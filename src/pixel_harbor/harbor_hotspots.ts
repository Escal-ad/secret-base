import { EXHIBIT_RADIUS } from './harbor_exhibits'
import type { addExhibits } from './harbor_exhibits'
import { HARBOR_DESTINATIONS, LANDMARKS } from './harbor_layout'
import { SEA_LOCATIONS } from './harbor_sailing_config'
import { PLACE_LABELS } from './harbor_places_config'

type Position = { x: number; z: number }
type Place = Position & { id: string; label: string; radius: number }
export type Hotspot = Place & (
  | { kind: 'art' | 'portfolio' | 'notice' | 'eval' | 'mayor' | 'lookout' | 'sunset' | 'animal' | 'captain' | 'telescope' | 'dock' | 'fishing' | 'wishing' | 'chair' | 'heli' | 'cow' | 'dolphin' | 'shell' }
  | { kind: 'resident' | 'gull'; title: string; note?: string }
  | { kind: 'stargaze'; title: string; note: string }
  | { kind: 'pick'; title: string; ready?: boolean }
  | { kind: 'shop'; title: string; note: string }
  | { kind: 'cloudgate'; title: string; note: string }
  | { kind: 'washer'; title: string; note: string }
  | { kind: 'trampoline'; title: string; note: string }
  | { kind: 'landmark'; note: string }
  | { kind: 'sea'; note: string; title: string }
)
export type IconType = keyof typeof PLACE_LABELS.icons
export type HarborPlace = {
  hotspot: Hotspot; title: string; iconType: IconType; blurb: string;
  anchor?: readonly [number, number, number]; requiresBoat: boolean
}
export type Exhibit = ReturnType<typeof addExhibits>['exhibits'][number]

export function artHotspot({ id, x, z, artwork }: Exhibit): Hotspot {
  return { kind: 'art', id, x, z, label: artwork.title, radius: EXHIBIT_RADIUS }
}

function distance(player: Position, point: Position) {
  return Math.hypot(player.x - point.x, player.z - point.z)
}

export function isInsideHotspot(player: Position, point: Place) {
  return distance(player, point) < point.radius
}

export function findHarborHotspot(player: Position & { sailing?: boolean }, exhibits: readonly Exhibit[]): Hotspot | null {
  if (player.sailing) return SEA_LOCATIONS.find(point => isInsideHotspot(player, point)) ?? null
  const destination = Object.values(HARBOR_DESTINATIONS).find(point => isInsideHotspot(player, point))
  if (destination) return destination
  let closest = EXHIBIT_RADIUS
  let choice: Hotspot | null = null
  for (const exhibit of exhibits) {
    const range = distance(player, exhibit)
    if (range < closest) { closest = range; choice = artHotspot(exhibit) }
  }
  if (choice) return choice
  const landmark = LANDMARKS.find(point => isInsideHotspot(player, point))
  return landmark ? { kind: 'landmark', ...landmark } : null
}

export function listHarborPlaces(exhibits: readonly Exhibit[]): HarborPlace[] {
  const places: Hotspot[] = [
    ...Object.values(HARBOR_DESTINATIONS), ...LANDMARKS.map(place => ({ ...place, kind: 'landmark' as const })),
    ...exhibits.map(artHotspot), ...SEA_LOCATIONS,
  ]
  return places.map(hotspot => {
    const info = PLACE_LABELS.places[hotspot.id as keyof typeof PLACE_LABELS.places]
    if (info) return { hotspot, ...info, requiresBoat: false }
    if (hotspot.kind === 'sea') return {
      hotspot, title: hotspot.title, iconType: 'landmark', blurb: hotspot.note,
      anchor: [hotspot.x, 1.18, hotspot.z], requiresBoat: true,
    }
    if (hotspot.kind === 'landmark') return {
      hotspot, title: hotspot.label, iconType: 'landmark', blurb: hotspot.note, requiresBoat: false,
    }
    return { hotspot, title: hotspot.label, iconType: 'artwork',
      blurb: exhibits.find(exhibit => exhibit.id === hotspot.id)?.artwork.description ?? '', requiresBoat: false }
  })
}

export function createHotspotTracker(handlers: {
  open: (hotspot: Hotspot) => void; leave: (id: string) => void
}) {
  let opened: Hotspot | null = null
  let leaving = false
  return {
    open(hotspot: Hotspot) {
      if (opened) return
      opened = hotspot
      handlers.open(hotspot)
    },
    dismiss() { opened = null; leaving = false },
    hasOpen() { return opened !== null },
    update(player: Position) {
      if (!opened || leaving || isInsideHotspot(player, opened)) return
      leaving = true
      handlers.leave(opened.id)
    },
  }
}
