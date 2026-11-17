import type * as T from 'three'
import { createHarborAvatar } from './harbor_avatar'
import { CAPTAIN, TOUR } from './harbor_captain_config'
import { markHarborGlow } from './harbor_glow'
import type { ModelKit } from './harbor_models'
import type { HarborPlayer } from './harbor_player_motion'

export function addHarborCaptain(scene: T.Scene, { kit, vessel }: { kit: ModelKit; vessel: T.Group }) {
  const captain = createHarborAvatar(kit, CAPTAIN.appearance)
  const pose: HarborPlayer = { ...CAPTAIN.position, facing: CAPTAIN.facing, speed: 0, height: 0,
    elevation: 0, airborne: false, jumpAge: 0, landing: 0, sailing: false, sitting: false, lookout: false, swimming: false }
  const lamp = markHarborGlow(kit.box([...TOUR.lamp.position], [...TOUR.lamp.size], [TOUR.lamp.color]), 'street')
  lamp.userData.movingGlow = true
  vessel.add(lamp)
  scene.add(captain.avatar)
  return (elapsed: number, reduced: boolean) => {
    const wave = elapsed % CAPTAIN.wavePeriod
    pose.facing = CAPTAIN.facing + (reduced ? 0 : Math.sin(elapsed * 0.31) * 0.24)
    captain.wave(!reduced && wave < CAPTAIN.waveLength ? -Math.sin(wave / CAPTAIN.waveLength * Math.PI) * 0.82 : 0)
    captain.update(pose, 0, reduced)
  }
}
