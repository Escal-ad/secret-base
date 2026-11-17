import type { HarborPlayer } from '../pixel_harbor/harbor_player_motion'
import { LOOKOUT } from '../pixel_harbor/harbor_exploration_config'
import type { Sound } from '../harbor_shell/harbor-audio-config'
import type { Ambient, AmbientValue } from '../harbor_shell/harbor-ambient-audio'
import type { HarborActivity } from '../pixel_harbor/harbor_activities'
import type { WeatherFrame } from './harbor-weather'
import { AUDIO } from '../harbor_shell/harbor-audio-config'

export type EmitSound = (sound:Sound, options?:{distance?:number;pitch?:number;volume?:number})=>void
export type SetAmbience = (sound:Ambient, value:AmbientValue)=>void
const MOBILE_MACHINE_RANGE = 5
export function createAmbience(set: SetAmbience) {
  return (player:HarborPlayer,state:{mode:HarborActivity|null;speed:number;weather:WeatherFrame;mobile:boolean;flightWind:number})=>{
    const speed=Math.abs(state.speed)
    set('engine',{volume:player.sailing?(state.mode==='tour'?0.29:0.67)*Math.min(1,0.28+speed*0.11):0,
      pitch:0.77+speed*0.13})
    const distance=Math.hypot(player.x-LOOKOUT.center.x,player.z-LOOKOUT.center.z)
    const limit=state.mobile?MOBILE_MACHINE_RANGE:AUDIO.effects.machine.range
    set('machine',{volume:Math.max(0,1-distance/limit)*(player.lookout?0.30:0.52),pitch:player.lookout?0.73:1})
    const {rain,snow}=state.weather
    set('rain',{volume:rain*0.66})
    set('wind',{volume:Math.max(snow*0.41,state.flightWind)})
  }
}
