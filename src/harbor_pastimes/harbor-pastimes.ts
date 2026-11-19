import type * as T from 'three'
import type { EmitSound } from '../harbor_expansion/harbor-ambience'
import type { Settings } from '../harbor_shell/harbor-settings'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import type { HarborPlayer } from '../pixel_harbor/harbor_player_motion'
import { createFishing } from './harbor-fishing'
import type { FishingPhase } from './harbor-fishing'
import { createFishingModel } from './harbor-fishing-model'
import { createPastimeRecords } from './harbor-pastime-records'
import { WISHING } from './harbor-pastimes-config'
import type { CatchSpecies } from './harbor-pastimes-config'
import { addWishAltar, createWishLights } from './harbor-wish-lights'

export type FishingNotice = { phase:FishingPhase; catch?:CatchSpecies }

export function createHarborPastimes(scene:T.Scene, kit:ModelKit, hooks:{
  play:EmitSound; notice:(message:string)=>void; fishing:(phase:FishingPhase)=>void; landed:(species:CatchSpecies)=>void
}) {
  const altar = addWishAltar(scene,kit)
  const lights = createWishLights(scene)
  const records = createPastimeRecords()
  const showFishing = createFishingModel(scene,kit)
  let result:CatchSpecies | undefined
  let chosenWish:string | undefined
  let weather:{ night:boolean; weather:Settings['weather'] } = { night:false, weather:'clear' }
  const fishing = createFishing({ play:hooks.play, change:hooks.fishing, landed(species) {
    result = species
    records.catchFish(species)
    hooks.landed(species)
  } })
  return {
    altar, fishing,
    reel(){ fishing.act(weather) },
    get result(){ return result },
    get chosenWish(){ return chosenWish },
    showRecords(){ result = undefined; fishing.stop() },
    chooseWish(id?:string){ chosenWish = id },
    get beam(){ return lights.beam },
    pickWish(pointer:T.Vector2,camera:T.Camera){ return lights.pick(pointer,camera,records.wishes().items) },
    catches:records.catches, wishes:records.wishes, deleteWish:records.deleteWish, clearWishes:records.clearWishes,
    releaseWish(text:string){
      if (!records.writeWish(text)) return false
      lights.release()
      hooks.play('wishChime')
      hooks.notice(records.wishes().warning || WISHING.ui.saved)
      return true
    },
    update(player:HarborPlayer, frame:{ step:number; frameTime:number; time:number; night:number; low:boolean;
      reduced:boolean; weather:Settings['weather'] }){
      weather = { night:frame.night >= 0.5, weather:frame.weather }
      fishing.step(frame.frameTime)
      lights.update(records.wishes().items, frame)
      return showFishing(player,{ phase:fishing.phase, cast:fishing.castProgress, time:frame.time, reduced:frame.reduced })
    },
  }
}
