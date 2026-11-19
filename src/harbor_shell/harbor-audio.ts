import { AUDIO, fetchCredits } from './harbor-audio-config'
import type { Credits, Sound } from './harbor-audio-config'
import { addAudioEffect, attenuation } from './harbor-effects'
import { createMusicTransport } from './harbor-music'
import { assetPath, isSmallDevice } from './harbor-settings'
import type { Bus, Settings, Track, Weather } from './harbor-settings'
import { hasLocalAsset } from './harbor-local-assets'
import { createAmbientBus } from './harbor-ambient-audio'
import type { Ambient, AmbientValue } from './harbor-ambient-audio'

export type AudioScene = { night: boolean; weather: Weather; mode?: string | null; dialogue?: boolean }
type AudioState = { scene: AudioScene; settings: Settings }
type Muteable = { gain: GainNode; node: AudioScheduledSourceNode }
const ALL_BUSES: Bus[] = ['master', 'music', 'effects', 'voice']
const MUSIC_IDS = AUDIO.tracks as readonly Track[]

function optionalReverb(context:AudioContext, input:AudioNode, output:AudioNode) {
  if(!AUDIO.sunset.reverb)return null
  const convolver=context.createConvolver()
  const length=Math.round(context.sampleRate*AUDIO.sunset.impulse)
  const impulse=context.createBuffer(2,length,context.sampleRate)
  for(let channel=0;channel<impulse.numberOfChannels;channel++){
    const samples=impulse.getChannelData(channel)
    for(let sample=0;sample<length;sample++)samples[sample]=(Math.random()*2-1)*(1-sample/length)**3
  }
  convolver.buffer=impulse
  const mix=context.createGain()
  mix.gain.value=0
  input.connect(convolver).connect(mix).connect(output)
  return mix
}

export function chooseMusic({ scene, settings }: AudioState) {
  if (settings.track !== 'auto') return settings.track
  const table: Readonly<Record<string, Track | '' | undefined>> = AUDIO.mapping
  // 优先级：场景模式 > 夜晚 > 天气 > 默认
  const mode = scene.mode ? table[scene.mode] : undefined
  if (mode) return mode
  if (scene.night && table.night) return table.night
  return table[scene.weather] || AUDIO.mapping.default
}

function makeAudioOutput(context: AudioContext) {
  const [master, music, effects, voice] = ALL_BUSES.map(() => context.createGain())
  const filter = context.createBiquadFilter()
  filter.type = 'lowpass'
  filter.frequency.value = AUDIO.sunset.openHz
  filter.Q.value = AUDIO.sunset.q
  const warm = context.createGain()
  warm.gain.value = 1
  music.connect(filter).connect(warm).connect(master)
  effects.connect(master); voice.connect(master); master.connect(context.destination)
  return { master, music, effects, voice, filter, warm, reverb:optionalReverb(context,filter,master) }
}

function updateOutput(context: AudioContext, routes: ReturnType<typeof makeAudioOutput>, state: AudioState, previouslySunset: boolean) {
  const { settings, scene } = state
  const now = context.currentTime
  for (const bus of ALL_BUSES) {
    const level = settings.muted[bus] || (bus === 'master' && !settings.sound) ? 0 : settings.volumes[bus]
    routes[bus].gain.setTargetAtTime(level, now, AUDIO.response)
  }
  const sunset = scene.mode === 'sunset'
  if (sunset !== previouslySunset) {
    const duration = sunset ? AUDIO.sunset.enter : AUDIO.sunset.exit
    const { filter, warm, reverb } = routes
    filter.frequency.cancelAndHoldAtTime(now)
    filter.frequency.linearRampToValueAtTime(sunset ? AUDIO.sunset.lowHz : AUDIO.sunset.openHz, now + duration)
    warm.gain.cancelAndHoldAtTime(now)
    warm.gain.linearRampToValueAtTime(sunset ? AUDIO.sunset.gain : 1, now + duration)
    if(reverb){
      reverb.gain.cancelAndHoldAtTime(now)
      reverb.gain.linearRampToValueAtTime(sunset?AUDIO.sunset.wet:0,now+duration)
    }
  }
  const level = sunset ? settings.volumes.music : settings.volumes.music
    * (scene.dialogue || scene.mode === 'telescope' ? AUDIO.dialogueGain : 1)
    * (scene.weather !== 'clear' ? AUDIO.weatherGain : 1)
  routes.music.gain.cancelScheduledValues(now)
  routes.music.gain.setTargetAtTime(settings.muted.music ? 0 : level, now, AUDIO.response)
}

function makeLocalAudioFiles() {
  const bytes = new Map<string, Promise<ArrayBuffer | null>>()
  let total = 0
  async function request(path: string) {
    if(!hasLocalAsset(path)) return null
    try {
      const response = await fetch(assetPath(path))
      if (!response.ok || !response.headers.get('content-type')?.startsWith('audio/')) return null
      const body = await response.arrayBuffer()
      if (!body.byteLength || total + body.byteLength > AUDIO.bytes) return null
      total += body.byteLength
      return body
    } catch { return null }
  }
  return (path: string) => {
    let pending = bytes.get(path)
    if (!pending) { pending = request(path); bytes.set(path, pending) }
    return pending
  }
}

function makeSoundLoader(context: AudioContext, raw: ReturnType<typeof makeLocalAudioFiles>) {
  const buffers = new Map<Sound, Promise<AudioBuffer | null>>()
  return (sound: Sound) => {
    const saved = buffers.get(sound)
    if (saved) return saved
    const pending = decode(context, raw(AUDIO.sfxFolder + AUDIO.effects[sound].file))
    buffers.set(sound, pending)
    return pending
  }
}

function makeSoundPlayer(context: AudioContext, routes: ReturnType<typeof makeAudioOutput>, options:{
  load:ReturnType<typeof makeSoundLoader>; remaining:()=>number }) {
  const active = new Map<Muteable, Sound>()
  function available(sound: Sound) {
    const sameSound = [...active.values()].filter(id => id === sound).length
    return context.state === 'running' && active.size < options.remaining() && sameSound < AUDIO.effects[sound].limit
  }
  async function play(sound: Sound, opts: { distance?: number; pitch?: number; volume?: number } = {}) {
    const spec = AUDIO.effects[sound]
    const level = attenuation(opts.distance ?? 0, spec.range) * (opts.volume ?? 1) * spec.volume
    if (!available(sound) || level <= 0) return
    const buffer = await options.load(sound)
    if (!available(sound)) return
    const route = sound === 'character' || sound === 'greeting' ? routes.voice : routes.effects
    const effect = buffer ? addRecordedSound(context, { route, buffer, level }) : addAudioEffect(context, sound, route, level, opts.pitch ?? 1)
    if (!effect) return
    const voice = { gain: effect.gain, node: effect.source }
    active.set(voice, sound)
    voice.node.addEventListener('ended', () => { active.delete(voice); voice.gain.disconnect(); voice.node.disconnect() }, { once: true })
  }
  return { play, channels: () => active.size }
}

async function decode(context: AudioContext, raw: Promise<ArrayBuffer | null>) {
  try { const bytes = await raw; return bytes ? await context.decodeAudioData(bytes.slice(0)) : null }
  catch { return null }
}

function addRecordedSound(context: AudioContext, options: { route: AudioNode; buffer: AudioBuffer; level: number }) {
  const source = context.createBufferSource()
  const gain = context.createGain()
  source.buffer = options.buffer
  gain.gain.value = options.level
  source.connect(gain).connect(options.route)
  source.start()
  return { source, gain }
}

function createLiveAudio(context: AudioContext, raw: ReturnType<typeof makeLocalAudioFiles>) {
  const routes = makeAudioOutput(context)
  const music = createMusicTransport(context, routes.music)
  const load=makeSoundLoader(context,raw)
  const capacity=isSmallDevice()?AUDIO.mobileConcurrent:AUDIO.concurrent
  const sounds = makeSoundPlayer(context, routes, {load,remaining:()=>capacity-ambient.channels})
  const ambient=createAmbientBus(context,routes.effects,{load,remaining:()=>Math.min(capacity-sounds.channels(),AUDIO.ambientLimit,capacity-1)})
  const buffers = new Map<Track, Promise<AudioBuffer | null>>()
  return { context, routes, music, play:sounds.play, buffers,ambient }
}

export function createHarborAudio() {
  const raw = makeLocalAudioFiles()
  let live: ReturnType<typeof createLiveAudio> | undefined
  let state: AudioState | undefined
  let timer = 0
  let idle = 0
  let lastSwitch = -Infinity
  let pending: Track | undefined
  let selection: Track | 'auto' = 'auto'
  let sunset = false
  let catalog: Promise<Credits> | undefined
  const credits = () => catalog ??= fetchCredits(assetPath(AUDIO.credits)).catch(() => ({ tracks: [], effects: [] }))
  async function fetchTrack(id: Track) {
    const book = await credits()
    const file = book.tracks.find(track => track.id === id)?.file ?? id + '.mp3'
    return raw(AUDIO.musicFolder + file)
  }
  function loadTrack(id: Track) {
    if (!live) return Promise.resolve(null)
    const cached = live.buffers.get(id)
    if (cached) return cached
    const loading = decode(live.context, fetchTrack(id))
    live.buffers.set(id, loading)
    return loading
  }
  async function select(id: Track, immediate: boolean, initial = false) {
    if (!live || pending !== undefined || live.music.current === id) return
    if (!immediate && live.context.currentTime - lastSwitch < AUDIO.hold) return
    pending = id
    const buffer = await loadTrack(id)
    const selected = buffer ? id : AUDIO.mapping.default
    const actual = buffer ?? await loadTrack(selected)
    pending = undefined
    if (!actual || !live || !state || sunset || (!initial && chooseMusic(state) !== id)) return
    live.music.switchTo(selected, actual)
    lastSwitch = live.context.currentTime
  }
  return {
    credits,
    prepare() { void fetchTrack(AUDIO.mapping.default) },
    preload() {
      const prefetch = () => MUSIC_IDS.forEach(id => { void fetchTrack(id) })
      if ('requestIdleCallback' in window) idle = window.requestIdleCallback(prefetch)
      else prefetch()
    },
    async unlock() {
      try {
        const initial = !live && state ? chooseMusic(state) : undefined
        if (!live) {
          live = createLiveAudio(new AudioContext(), raw)
          timer = window.setInterval(() => {
            if (!live || document.hidden) return
            live.music.tick()
            if (state && !sunset) void select(chooseMusic(state), !live.music.current)
          }, AUDIO.scheduleMs)
        }
        if (!document.hidden) {
          const resume = live.context.resume()
          if(initial) void select(initial,true,true)
          await resume
        }
      } catch { return }
    },
    resumeOnGesture() {
      if (live?.context.state === 'suspended' && !document.hidden) void live.context.resume().catch(() => undefined)
    },
    sync(next: AudioState) {
      state = next
      const active = next.scene.mode === 'sunset'
      if (live) updateOutput(live.context, live.routes, next, sunset)
      sunset = active
      const changed = selection !== next.settings.track
      selection = next.settings.track
      if (!sunset) void select(chooseMusic(next), changed || !live?.music.current)
    },
    visibility() {
      if (!live) return
      const update = document.hidden ? live.context.suspend() : live.context.resume()
      void update.catch(() => undefined)
    },
    play(sound: Sound, options?: { distance?: number; pitch?: number; volume?: number }) {
      if (!state?.settings.sound || document.hidden) return
      void live?.play(sound, options)
    },
    // 雷声（合成，不用音频文件）：一段低通噪声 + 低频隆隆
    thunder() {
      const context = live?.context
      const route = live?.routes.effects
      if (!context || !route || context.state !== 'running') return
      const now = context.currentTime
      const length = Math.floor(context.sampleRate * 2.4)
      const buffer = context.createBuffer(1, length, context.sampleRate)
      const data = buffer.getChannelData(0)
      for (let index = 0; index < length; index += 1) {
        data[index] = (Math.random() * 2 - 1) * Math.pow(1 - index / length, 2.2)
      }
      const source = context.createBufferSource()
      source.buffer = buffer
      const filter = context.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.value = 300
      const gain = context.createGain()
      gain.gain.setValueAtTime(0.0001, now)
      gain.gain.linearRampToValueAtTime(0.85, now + 0.07)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.3)
      source.connect(filter)
      filter.connect(gain)
      gain.connect(route)
      source.start(now)
      source.stop(now + 2.4)
      const rumble = context.createOscillator()
      rumble.type = 'sine'
      rumble.frequency.setValueAtTime(58, now)
      rumble.frequency.exponentialRampToValueAtTime(30, now + 1.9)
      const rumbleGain = context.createGain()
      rumbleGain.gain.setValueAtTime(0.0001, now)
      rumbleGain.gain.exponentialRampToValueAtTime(0.3, now + 0.14)
      rumbleGain.gain.exponentialRampToValueAtTime(0.0001, now + 2)
      rumble.connect(rumbleGain)
      rumbleGain.connect(route)
      rumble.start(now)
      rumble.stop(now + 2.1)
    },    ambient(sound:Ambient,value:AmbientValue) { live?.ambient.set(sound,value) },
    clearAmbience() {
      for(const sound of ['engine','machine','rain','wind'] as const) live?.ambient.set(sound,{volume:0})
    },
    dispose() {
      window.clearInterval(timer)
      if ('cancelIdleCallback' in window) window.cancelIdleCallback(idle)
      live?.ambient.dispose()
      if (live) void live.context.close().catch(() => undefined)
      live = undefined
    },
  }
}
export type HarborAudio = ReturnType<typeof createHarborAudio>
