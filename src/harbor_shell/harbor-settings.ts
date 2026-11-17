import { useState } from 'react'
import { FLIGHT } from '../harbor_flight/harbor-flight-config'

export const SETTINGS = {
  key: 'harbor_settings_v2', storageWarning: '无法保存或读取渔港设置，本次访问仍可调整。',
  qualities: ['high', 'medium', 'low'], weather: ['clear', 'rain', 'snow'],
  appearances: ['traveler', 'variant', 'original'], tracks: ['auto', 'boy', 'baguira', 'sudo'],
  loadLines: ['正在布置码头', '正在加载渔港场景'], loadingLineMs: 1700,
  lowQualityNotice: '当前设备建议使用低画质，可在设置中调整。',
  tabs: { settings: '设置', map: '地图', help: '帮助', about: '关于' },
} as const

export type Track = Exclude<typeof SETTINGS.tracks[number], 'auto'>
export type Quality = typeof SETTINGS.qualities[number]
export type Weather = typeof SETTINGS.weather[number]
export type Appearance = typeof SETTINGS.appearances[number]
export type Bus = 'master' | 'music' | 'effects' | 'voice'
export type Settings = {
  quality: Quality; weather: Weather; appearance: Appearance; view: 'third' | 'first';
  reduced: boolean; lock: boolean; bob: boolean; sound: boolean; track: Track | 'auto'; flight: boolean;
  volumes: Record<Bus, number>; muted: Record<Bus, boolean>;
}

export function isSmallDevice() {
  return matchMedia('(pointer: coarse), (max-width: 640px)').matches || navigator.hardwareConcurrency <= 4
}

const defaults = (): Settings => ({
  quality: isSmallDevice() ? 'low' : 'high', weather: 'clear', appearance: 'traveler',
  view: 'third', reduced: false, lock: false, bob: true, sound: true, track: 'auto', flight: FLIGHT.enabledByDefault,
  volumes: { master: 0.75, music: 0.52, effects: 0.55, voice: 0.45 },
  muted: { master: false, music: false, effects: false, voice: false },
})

function readSettings() {
  const original = defaults()
  try {
    const stored = localStorage.getItem(SETTINGS.key)
    if (!stored) return { values: original, warning: '' }
    const values: Partial<Settings> = JSON.parse(stored)
    const track = values.track && SETTINGS.tracks.includes(values.track) ? values.track : original.track
    return { values: { ...original, ...values, track, muted: { ...original.muted, ...values.muted },
      volumes: { ...original.volumes, ...values.volumes } }, warning: '' }
  } catch { return { values: original, warning: SETTINGS.storageWarning } }
}

export function assetPath(path: string) { return import.meta.env.BASE_URL + path.replace(/^\/+/, '') }

export function useHarborSettings() {
  const [state, setState] = useState(readSettings)
  function update(changes: Partial<Settings>) {
    const values={...state.values,...changes}
    try {
      localStorage.setItem(SETTINGS.key,JSON.stringify(values))
      setState({values,warning:''})
    } catch {setState({values,warning:SETTINGS.storageWarning})}
  }
  return {...state,update}
}
