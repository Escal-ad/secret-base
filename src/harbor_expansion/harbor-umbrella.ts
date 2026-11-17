import * as T from 'three'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import { TRAVELER } from './harbor-traveler-config'

export function makeUmbrella(kit: ModelKit) {
  const group = new T.Group()
  const canopy = kit.cylinder([0,0.58,0],[0.18,0.65,0.24,8],[TRAVELER.umbrella])
  group.add(canopy,kit.box([0,0.30,0],[0.045,0.57,0.045],['#725c4a']))
  group.visible = false
  return group
}
