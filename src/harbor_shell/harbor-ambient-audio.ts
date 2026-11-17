import { AUDIO } from './harbor-audio-config'

export type Ambient = 'engine' | 'machine' | 'rain' | 'wind'
export type AmbientValue = { volume: number; pitch?: number }
type Voice = { node: AudioScheduledSourceNode; pitch?: OscillatorNode; gain: GainNode; stops: () => void }
const AMBIENT_TONES = { engine: 39, machine: 55, rain: 0, wind: 0 } as const
const FILTERS = { engine: 170, machine: 160, rain: 1250, wind: 390 } as const
const SECONDS = 2.6

function noiseLoop(context: AudioContext, output: AudioNode, cutoff: number) {
  const buffer = context.createBuffer(1,Math.round(context.sampleRate*SECONDS),context.sampleRate)
  const samples=buffer.getChannelData(0)
  for(let i=0;i<samples.length;i++) samples[i]=Math.random()*2-1
  const source=context.createBufferSource()
  const filter=context.createBiquadFilter()
  filter.frequency.value=cutoff
  source.buffer=buffer
  source.loop=true
  source.connect(filter).connect(output)
  source.start()
  return {source,stop(){source.stop();source.disconnect();filter.disconnect()}}
}

function attachLoop(context: AudioContext, id: Ambient, params: { output: AudioNode; buffer: AudioBuffer|null }) {
  const gain=context.createGain()
  gain.gain.value=0
  gain.connect(params.output)
  if(params.buffer){
    const source=context.createBufferSource()
    source.buffer=params.buffer
    source.loop=AUDIO.effects[id].loop
    source.connect(gain);source.start()
    return {node:source,gain,stops(){source.stop();source.disconnect()}}
  }
  const hz=AMBIENT_TONES[id]
  if(!hz){
    const loop=noiseLoop(context,gain,FILTERS[id])
    return {node:loop.source,gain,stops:loop.stop}
  }
  const oscillator=context.createOscillator()
  const filter=context.createBiquadFilter()
  filter.frequency.value=FILTERS[id]
  oscillator.type=id==='engine'?'sawtooth':'sine'
  oscillator.frequency.value=hz
  oscillator.connect(filter).connect(gain);oscillator.start()
  const bed=id==='engine'?noiseLoop(context,filter,FILTERS[id]):null
  return {node:oscillator,pitch:oscillator,gain,
    stops(){bed?.stop();oscillator.stop();oscillator.disconnect();filter.disconnect()}}
}

export function createAmbientBus(context: AudioContext, output: AudioNode, options:{ load:(id:Ambient)=>Promise<AudioBuffer|null>; remaining:()=>number }) {
  const active=new Map<Ambient,Voice>()
  const pending=new Set<Ambient>()
  const values=new Map<Ambient,AmbientValue>()
  function level(id:Ambient, voice:Voice, value:AmbientValue) {
    const now=context.currentTime
    voice.gain.gain.setTargetAtTime(value.volume*AUDIO.effects[id].volume,now,AUDIO.response)
    if(voice.pitch)voice.pitch.frequency.setTargetAtTime(AMBIENT_TONES[id]*(value.pitch ?? 1),now,AUDIO.response)
    else if(voice.node instanceof AudioBufferSourceNode && id==='engine')
      voice.node.playbackRate.setTargetAtTime(value.pitch ?? 1,now,AUDIO.response)
  }
  async function start(id:Ambient) {
    if(pending.has(id)||active.size+pending.size>=options.remaining())return
    pending.add(id)
    const buffer=await options.load(id)
    pending.delete(id)
    const value=values.get(id)
    if(!value?.volume||context.state!=='running'||active.size>=options.remaining())return
    const voice=attachLoop(context,id,{output,buffer})
    active.set(id,voice)
    level(id,voice,value)
  }
  return {
    get channels(){return active.size},
    dispose() {
      for(const voice of active.values()){voice.stops();voice.gain.disconnect()}
      active.clear()
      values.clear()
    },
    set(id:Ambient,value:AmbientValue) {
      const prior=values.get(id)
      if(prior && Math.abs(prior.volume-value.volume)<0.025 && Math.abs((prior.pitch??1)-(value.pitch??1))<0.05
        && (value.volume===0||active.has(id)||pending.has(id)))return
      values.set(id,value)
      const voice=active.get(id)
      if(voice) {
        level(id,voice,value)
        if(!value.volume)window.setTimeout(()=>{
          if(values.get(id)?.volume||active.get(id)!==voice)return
          active.delete(id);voice.stops();voice.gain.disconnect()
        },700)
      } else if(value.volume && context.state==='running')void start(id)
    },
  }
}
