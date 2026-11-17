import type { EmitSound } from '../harbor_expansion/harbor-ambience'
import type { Weather } from '../harbor_shell/harbor-settings'
import { FISHING } from './harbor-pastimes-config'
import type { CatchSpecies } from './harbor-pastimes-config'

export type FishingPhase = 'idle' | 'casting' | 'waiting' | 'bite' | 'reeling' | 'miss'
type FishingWeather = { night:boolean; weather:Weather }

function catchFromPool({ night, weather }: FishingWeather, random: () => number) {
  const pool = FISHING.pool.map(species =>
    species.weight * (night ? species.night : 1) * (weather === 'clear' ? 1 : species[weather]))
  let needle = random() * pool.reduce((total, weight) => total + weight, 0)
  return FISHING.pool[pool.findIndex(weight => (needle -= weight) < 0)] ?? FISHING.pool[0]
}

export function createFishing({ play, change, landed }: {
  play:EmitSound; change:(phase:FishingPhase)=>void; landed:(species:CatchSpecies)=>void
}, random = Math.random) {
  let phase:FishingPhase = 'idle'
  let remaining = 0
  let pending:CatchSpecies | undefined
  function enter(next:FishingPhase, seconds = 0) {
    phase = next
    remaining = seconds
    change(next)
  }
  function cast() {
    play('fishCast')
    enter('casting', FISHING.castSeconds)
  }
  return {
    get phase() { return phase },
    get active() { return phase !== 'idle' },
    get castProgress() {
      if (phase === 'casting') return 1 - remaining/FISHING.castSeconds
      if (phase === 'reeling') return remaining/FISHING.reelSeconds
      return 1
    },
    cast,
    stop() { pending = undefined; if (phase !== 'idle') enter('idle') },
    act(weather:FishingWeather) {
      if (phase === 'miss') return cast()
      if (phase !== 'bite') return
      play('fishReel')
      pending = catchFromPool(weather,random)
      enter('reeling',FISHING.reelSeconds)
    },
    step(seconds:number) {
      if (phase === 'idle' || phase === 'miss') return
      remaining -= seconds
      if (remaining > 0) return
      if (phase === 'casting') {
        play('fishSplash')
        const [min, max] = FISHING.waitSeconds
        enter('waiting', min + (max - min) * random())
      } else if (phase === 'waiting') {
        play('fishBite')
        enter('bite', FISHING.responseSeconds)
      } else if (phase === 'reeling' && pending) {
        const species = pending
        pending = undefined
        enter('idle')
        landed(species)
      } else enter('miss')
    },
  }
}
