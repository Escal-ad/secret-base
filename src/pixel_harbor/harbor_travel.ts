import { PLACE_TRAVEL } from './harbor_places_config'

type Position = { x: number; z: number }
const CIRCLE = Math.PI * 2

export function findTravelLanding(place: Position & { radius: number }, clearAt: (x: number, z: number) => boolean) {
  if (clearAt(place.x, place.z)) return { x: place.x, z: place.z }
  for (let ring = 1; ring <= PLACE_TRAVEL.maxRings; ring++) {
    const range = ring * PLACE_TRAVEL.step
    if (range >= place.radius) break
    for (let point = 0; point < PLACE_TRAVEL.bearings; point++) {
      const angle = point * CIRCLE / PLACE_TRAVEL.bearings
      const x = place.x + Math.cos(angle) * range
      const z = place.z + Math.sin(angle) * range
      if (clearAt(x, z)) return { x, z }
    }
  }
  return null
}

export async function fadeHarborTravel(overlay: HTMLElement | null, move: () => boolean, duration: number = PLACE_TRAVEL.fadeMs) {
  if (!overlay || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return move()
  const first = overlay.animate([{ opacity: 0 }, { opacity: 1 }], { duration, fill: 'forwards' })
  try {
    await first.finished
    if (!overlay.isConnected) return false
    const completed = move()
    const second = overlay.animate([{ opacity: 1 }, { opacity: 0 }], { duration })
    first.cancel()
    await second.finished
    return completed
  } catch {
    return false
  } finally {
    first.cancel()
  }
}
