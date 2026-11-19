import type * as T from 'three'
import { addHarborIslands } from './harbor-islands'
import { createHarborGulls,GULL } from './harbor-gulls'
import { createHarborSeaLife } from './harbor-sea-life'
import { addHarborResidents } from './harbor-residents'
import { addScopeStand,createScope } from './harbor-scope'
import type { ScopeDisplay } from './harbor-scope'
import { createHarborWeather } from './harbor-weather'
import { createChimneySmoke } from './harbor-chimney-smoke'
import { zodiacTargets } from './harbor-stars'
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
  const seaLife=createHarborSeaLife(scene,kit)
  addScopeStand(scene,kit)
  const weather=createHarborWeather(scene)
  const chimney=createChimneySmoke(scene)
  const scope=createScope(scene,{camera,onChange:options.onChange, targets:[
    ...islands.islands,...islands.ships,...residents.targets,...options.animals.targets,
    ...zodiacTargets(),
    { id:GULL.id,title:GULL.title,object:gulls.actor,height:0.10 },
  ]})
  const ambience=createAmbience(options.setAmbience)
  return { residents,islands,gulls,seaLife,weather,chimney,scope,ambience }
}
export type SceneExtension=ReturnType<typeof prepareSceneExtension>
