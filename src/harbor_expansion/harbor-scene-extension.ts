import type * as T from 'three'
import { addHarborIslands } from './harbor-islands'
import { createHarborGulls,GULL } from './harbor-gulls'
import { addHarborResidents } from './harbor-residents'
import { addScopeStand,createScope } from './harbor-scope'
import type { ScopeDisplay } from './harbor-scope'
import { createHarborWeather } from './harbor-weather'
import { createAmbience } from './harbor-ambience'
import type { SetAmbience } from './harbor-ambience'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import type { WorldObstacle } from '../pixel_harbor/harbor_layout'
import type { createHarborAnimals } from '../pixel_harbor/harbor_animals'

type View = { scene:T.Scene; camera:T.PerspectiveCamera; kit:ModelKit }
type Options = { obstacles:readonly WorldObstacle[]; onChange:(display:ScopeDisplay|null)=>void;
  setAmbience:SetAmbience; animals:ReturnType<typeof createHarborAnimals> }

export function prepareSceneExtension({scene,camera,kit}:View, options:Options) {
  const residents=addHarborResidents(scene,kit,options.obstacles)
  const islands=addHarborIslands(scene,kit)
  const gulls=createHarborGulls(scene,kit)
  addScopeStand(scene,kit)
  const weather=createHarborWeather(scene)
  const scope=createScope(scene,{camera,onChange:options.onChange, targets:[
    ...islands.islands,...islands.ships,...residents.targets,...options.animals.targets,
    { id:GULL.id,title:GULL.title,object:gulls.actor,height:0.10 },
  ]})
  const ambience=createAmbience(options.setAmbience)
  return { residents,islands,gulls,weather,scope,ambience }
}
export type SceneExtension=ReturnType<typeof prepareSceneExtension>
