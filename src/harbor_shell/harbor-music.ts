import { AUDIO } from './harbor-audio-config'
import type { Track } from './harbor-settings'

type Voice = { source: AudioBufferSourceNode; gain: GainNode; start: number; offset: number; end: number }
type Playing = { id: Track; voice: Voice; level: GainNode; buffer: AudioBuffer }
const SILENCE = 0.0001

export function createMusicTransport(context: AudioContext, output: AudioNode) {
  const positions = new Map<Track, number>()
  let playing: Playing | undefined
  function start(buffer: AudioBuffer, level: GainNode, options: { time: number; offset: number; fade: number }) {
    const { time, offset, fade } = options
    const source = context.createBufferSource()
    const gain = context.createGain()
    const end = time + buffer.duration - offset
    gain.gain.setValueAtTime(fade ? SILENCE : 1, time)
    if (fade) gain.gain.linearRampToValueAtTime(1, time + fade)
    source.buffer = buffer
    source.connect(gain).connect(level)
    source.start(time, offset)
    source.onended = () => { source.disconnect(); gain.disconnect() }
    return { source, gain, start: time, offset, end }
  }
  function stop(fade: number) {
    if (!playing) return
    const now = context.currentTime
    const { id, level, voice, buffer } = playing
    positions.set(id, (voice.offset + Math.max(0, now - voice.start)) % buffer.duration)
    level.gain.cancelAndHoldAtTime(now)
    level.gain.linearRampToValueAtTime(SILENCE, now + fade)
    voice.source.stop(Math.max(now, Math.min(voice.end, now + fade)))
    window.setTimeout(() => level.disconnect(), (fade + 1) * 1000)
    playing = undefined
  }
  return {
    get current() { return playing?.id },
    switchTo(id: Track, buffer: AudioBuffer) {
      if (playing?.id === id) return
      stop(AUDIO.crossfade)
      const time = context.currentTime
      const level = context.createGain()
      level.connect(output)
      const offset = Math.min(positions.get(id) ?? 0, Math.max(0, buffer.duration - 0.1))
      level.gain.setValueAtTime(SILENCE, time)
      level.gain.linearRampToValueAtTime(1, time + AUDIO.crossfade)
      playing = { id, level, buffer, voice: start(buffer, level, { time, offset, fade: 0 }) }
    },
    tick() {
      if (!playing) return
      const { buffer, level, voice } = playing
      const overlap = Math.min(AUDIO.overlap, buffer.duration / 3)
      if (context.currentTime < voice.end - overlap - AUDIO.scheduleAhead) return
      const time = Math.max(context.currentTime, voice.end - overlap)
      voice.gain.gain.cancelAndHoldAtTime(time)
      voice.gain.gain.linearRampToValueAtTime(SILENCE, Math.max(time, voice.end))
      playing.voice = start(buffer, level, { time, offset: 0, fade: Math.max(0, voice.end - time) })
    },
  }
}
