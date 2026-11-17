import type { Sound } from './harbor-audio-config'

const ENVELOPES: Partial<Record<Sound, readonly [number,number,OscillatorType]>> = {
  fishBite:[580,0.15,'sine'], wishChime:[784,0.64,'sine'],
  knock: [92, 0.11, 'sine'], character: [260, 0.052, 'square'], greeting: [310, 0.125, 'triangle'],
  engine: [37, 0.4, 'sawtooth'], machine: [56, 0.4, 'sine'],
} as const
const DEFAULT_NOISE = [340,0.6] as const
const FILTERED_NOISE: Partial<Record<Sound, readonly [number,number]>> = {
  fishCast:[1830,0.13], fishSplash:[840,0.26], fishReel:[1320,0.22], rain: [1150, 0.6], wind: [340, 0.6], cape: [620, 0.17] } as const

export function addAudioEffect(context: AudioContext, sound: Sound, output: AudioNode, level: number, pitch: number) {
  if (sound === 'gull' || sound === 'cat' || sound === 'dog') return null
  const now = context.currentTime
  const gain = context.createGain()
  gain.gain.setValueAtTime(0.0001, now)
  gain.connect(output)
  const noise = FILTERED_NOISE[sound]
  const envelope = ENVELOPES[sound]
  const duration = envelope?.[1] ?? noise?.[1] ?? 0.6
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, level * (noise ? 0.13 : 0.15)), now + 0.016)
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)
  const source = envelope ? context.createOscillator() : context.createBufferSource()
  if (source instanceof OscillatorNode && envelope) {
    source.type = envelope[2]
    source.frequency.value = envelope[0] * pitch
    source.connect(gain)
  } else if (source instanceof AudioBufferSourceNode) {
    const noiseBuffer = context.createBuffer(1, Math.round(context.sampleRate * duration), context.sampleRate)
    const samples = noiseBuffer.getChannelData(0)
    for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1
    source.buffer = noiseBuffer
    const filter = context.createBiquadFilter()
    filter.frequency.value = noise?.[0] ?? DEFAULT_NOISE[0]
    source.connect(filter).connect(gain)
    source.onended = () => filter.disconnect()
  }
  source.start(now)
  source.stop(now + duration)
  return { source, gain }
}

export function attenuation(distance: number, range: number) {
  return range > 0 ? Math.max(0, 1 - distance / range) : 1
}
