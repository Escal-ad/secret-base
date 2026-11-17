import type { Track } from './harbor-settings'

const EFFECT_RANGE = 13

function effect(file: string, volume: number, behavior: { loop?: boolean; range?: number; limit?: number } = {}) {
  return { file, volume, loop: behavior.loop ?? false, range: behavior.range ?? 0, limit: behavior.limit ?? 1 }
}

export const AUDIO = {
  musicFolder: 'assets/audio/music/', sfxFolder: 'assets/audio/sfx/',
  credits: 'assets/audio/music/CREDITS.json', license: 'assets/audio/music/LICENSE_CC0.txt',
  tracks: ['boy', 'baguira', 'sudo'], bytes: 10 * 1024 * 1024,
  mapping: { default: 'boy', night: 'sudo', rain: 'sudo', snow: 'sudo',
    tour: 'baguira', drive: 'baguira', lookout: 'baguira', telescope: 'baguira', flight: '' } satisfies Record<string, Track | ''>,
  overlap: 4, crossfade: 2.5, hold: 30, scheduleMs: 150, scheduleAhead: 0.32,
  dialogueGain: 0.62, weatherGain: 0.78, response: 0.25,
  sunset: { openHz: 20000, lowHz: 2500, q: 0.7, gain: 0.75, enter: 8, exit: 4,
    reverb: false, impulse: 2.5, wet: 0.2 },
  concurrent: 7, mobileConcurrent: 3, ambientLimit: 3,
  // TODO(reason): 待用户填写署名并放入本地对应槽位。
  effects: {
    gull: effect('gull.mp3', 1, { range: EFFECT_RANGE, limit: 2 }),
    cat: effect('cat.mp3', 1, { range: EFFECT_RANGE }),
    dog: effect('dog.mp3', 1, { range: EFFECT_RANGE }),
    greeting: effect('greeting.mp3', 1),
    machine: effect('machine.mp3', 0.13, { loop: true, range: EFFECT_RANGE }),
    engine: effect('engine.mp3', 0.13, { loop: true }),
    knock: effect('knock.mp3', 1, { limit: 3 }),
    rain: effect('rain.mp3', 0.13, { loop: true }),
    wind: effect('wind.mp3', 0.13, { loop: true }),
    cape: effect('cape.mp3', 1),
    fishCast: effect('fish_cast.mp3',0.65), fishSplash: effect('fish_splash.mp3',0.65),
    fishBite: effect('fish_bite.mp3',0.85), fishReel: effect('fish_reel.mp3',0.65),
    wishChime: effect('wish_chime.mp3',0.55),
    character: effect('character.mp3', 1, { limit: 2 }),
  },
} as const

export type Sound = keyof typeof AUDIO.effects
export type Credit = { id: string; file: string; title: string; author: string; source: string; license: string; attribution: string }
export type Credits = { tracks: Credit[]; effects: Credit[] }

export async function fetchCredits(url: string): Promise<Credits> {
  const response = await fetch(url)
  if (!response.ok || !response.headers.get('content-type')?.includes('json')) return { tracks: [], effects: [] }
  const credits: Partial<Credits> & {
    music?: { file: string; title: string; artist: string; source: string; license: string }[]
  } = await response.json()
  const music = credits.music?.map(item => ({
    ...item, id: item.file.replace(/\.mp3$/i, ''), author: item.artist, attribution: '',
  }))
  return { tracks: credits.tracks ?? music ?? [], effects: credits.effects ?? [] }
}
