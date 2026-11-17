import type { EmitSound } from '../harbor_expansion/harbor-ambience'
import { FLIGHT } from './harbor-flight-config'

export function createFlightAudio(play: EmitSound) {
  const { baseWind, speedWind, flapInterval, flapThreshold } = FLIGHT.audio
  let clock: number = flapInterval
  return (step: number, active: boolean, speed: number) => {
    if (!active) { clock = flapInterval; return 0 }
    const pace = Math.min(1, speed / FLIGHT.speed)
    clock += step
    if (clock >= flapInterval && pace >= flapThreshold) {
      play('cape', { volume: pace })
      clock = 0
    }
    return baseWind + speedWind * pace
  }
}
