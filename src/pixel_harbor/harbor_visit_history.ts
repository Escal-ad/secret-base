import { CAPTAIN } from './harbor_captain_config'

export function readVisitHistory() {
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(CAPTAIN.visitedKey) ?? '[]')
    const places = new Set(Array.isArray(stored) ? stored.filter((id): id is string => typeof id === 'string') : [])
    return { places, warning: '' }
  } catch {
    return { places: new Set<string>(), warning: CAPTAIN.storageReadError }
  }
}

export function saveVisitHistory(places: ReadonlySet<string>) {
  try {
    localStorage.setItem(CAPTAIN.visitedKey, JSON.stringify([...places]))
    return ''
  } catch {
    return CAPTAIN.storageWriteError
  }
}
