import { HARBOR_LIGHTING } from './harbor_lighting_config'

export function readHarborNight() {
  try {
    return { night: localStorage.getItem(HARBOR_LIGHTING.storageKey) === 'night', warning: '' }
  } catch {
    return { night: false, warning: HARBOR_LIGHTING.storageReadError }
  }
}

export function saveHarborNight(night: boolean) {
  try {
    localStorage.setItem(HARBOR_LIGHTING.storageKey, night ? 'night' : 'morning')
    return ''
  } catch {
    return HARBOR_LIGHTING.storageWriteError
  }
}
