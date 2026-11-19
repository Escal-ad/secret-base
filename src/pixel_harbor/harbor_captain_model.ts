import * as T from 'three'
import { createHarborAvatar } from './harbor_avatar'
import { CAPTAIN, TOUR } from './harbor_captain_config'
import { markHarborGlow } from './harbor_glow'
import { DECK } from './harbor_terrain'
import { makeUmbrella } from '../harbor_expansion/harbor-umbrella'
import type { ModelKit } from './harbor_models'
import type { HarborPlayer } from './harbor_player_motion'

export function addHarborCaptain(scene: T.Scene, { kit, vessel }: { kit: ModelKit; vessel: T.Group }) {
  const captain = createHarborAvatar(kit, CAPTAIN.appearance)
  // 坐守渔船：不再站在码头上挥手，改成坐在凳子上看着自己的船。
  const pose: HarborPlayer = { ...CAPTAIN.position, facing: CAPTAIN.guardYaw, speed: 0,
    height: CAPTAIN.seatHeight, elevation: 0, airborne: false, jumpAge: 0, landing: 0,
    sailing: false, sitting: true, lookout: false, swimming: false }
  const lamp = markHarborGlow(kit.box([...TOUR.lamp.position], [...TOUR.lamp.size], [TOUR.lamp.color]), 'street')
  lamp.userData.movingGlow = true
  vessel.add(lamp)
  // 凳子：和守塔人、东堤钓位同款（0.42 高的圆凳，坐面 0.30）。
  scene.add(kit.cylinder([CAPTAIN.position.x, DECK + 0.22, CAPTAIN.position.z],
    [0.23, 0.25, 0.42, 10], ['#8a6a4a']))
  // 夜里点的小灯：灯杆 + 灯头 + 光晕，和守塔人那盏同款，天黑才亮。
  const { x: lampX, z: lampZ, color: lampColor } = CAPTAIN.guardLamp
  scene.add(kit.box([lampX, DECK + 0.45, lampZ], [0.10, 0.90, 0.10], ['#595655']))
  const lampLight = new T.Mesh(new T.BoxGeometry(), new T.MeshBasicMaterial({ color: lampColor }))
  lampLight.scale.set(0.24, 0.24, 0.24)
  lampLight.position.set(lampX, DECK + 0.98, lampZ)
  const lampHalo = new T.Mesh(new T.BoxGeometry(),
    new T.MeshBasicMaterial({ color: lampColor, transparent: true, opacity: 0.24 }))
  lampHalo.scale.set(0.66, 0.66, 0.66)
  lampHalo.position.copy(lampLight.position)
  const guardLamp = new T.Group()
  guardLamp.add(lampLight, lampHalo)
  guardLamp.visible = false
  scene.add(guardLamp)
  // 下雨天撑伞（和村民同一套伞）
  const umbrella = makeUmbrella(kit)
  umbrella.position.set(0.3, 1.36, 0.12)
  umbrella.visible = false
  captain.avatar.add(umbrella)
  scene.add(captain.avatar)
  return (elapsed: number, night: number, reduced: boolean, rain = 0) => {
    guardLamp.visible = night > CAPTAIN.guardLamp.nightFrom
    umbrella.visible = rain > 0.32
    // 坐着几乎不动：只留一点点上身朝向的慢摆，避免像块石头。
    pose.facing = CAPTAIN.guardYaw + (reduced ? 0 : Math.sin(elapsed * 0.31) * 0.06)
    captain.update(pose, 0, reduced)
  }
}
