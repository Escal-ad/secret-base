const HELP_SEEN_KEY = 'pixel_harbor_help_seen'
const LOW_CORE_COUNT = 4
const LOW_MEMORY_GIB = 4

export function hasSeenHarborHelp() {
  try {
    return localStorage.getItem(HELP_SEEN_KEY) === 'yes'
  } catch {
    return false
  }
}

export function markHarborHelpSeen() {
  try {
    localStorage.setItem(HELP_SEEN_KEY, 'yes')
  } catch {
    // Reading and navigation remain available when storage is disabled.
    return
  }
}

export function shouldSuggestReading() {
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory
  return matchMedia('(pointer: coarse)').matches
    || (navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= LOW_CORE_COUNT)
    || (typeof memory === 'number' && memory <= LOW_MEMORY_GIB)
}
