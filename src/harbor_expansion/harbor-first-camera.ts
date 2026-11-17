import * as T from 'three'
import { DECK } from '../pixel_harbor/harbor_terrain'
import { ORBIT } from '../pixel_harbor/harbor_movement_config'
import type { HarborPlayer } from '../pixel_harbor/harbor_player_motion'
import { TRAVELER } from './harbor-traveler-config'

export function createFirstCamera(camera: T.PerspectiveCamera) {
  const { first } = TRAVELER
  const eye = new T.Vector3()
  const look = new T.Vector3()
  const third = new T.Quaternion()
  const firstPose = new T.PerspectiveCamera()
  let blend = 0
  let clock = 0
  let heading = 0
  return {
    get blend() { return blend },
    get heading() { return heading },
    update(player: HarborPlayer, angles: { yaw: number; pitch: number }, state: { enabled: boolean; step: number; instant: boolean; bob: boolean }) {
      const target = Number(state.enabled)
      blend = state.instant ? target : blend + Math.sign(target - blend) * Math.min(Math.abs(target - blend), state.step / first.transition)
      const eased = blend * blend * (3 - 2 * blend)
      const yaw = angles.yaw
      heading = yaw
      clock += state.step * player.speed
      if (!blend) {
        if (camera.near !== ORBIT.near) { camera.near = ORBIT.near; camera.updateProjectionMatrix() }
        return
      }
      const stride = state.bob && !player.airborne && !player.sailing ? Math.sin(clock * first.bobHz) * first.bob : 0
      const height = player.sailing ? first.helmEye : player.sitting ? first.seatEye : first.eye
      eye.set(player.x, DECK + player.elevation + player.height + height + stride, player.z)
      const horizontal = Math.cos(angles.pitch)
      look.set(-Math.sin(yaw) * horizontal, -Math.sin(angles.pitch), -Math.cos(yaw) * horizontal).add(eye)
      firstPose.position.copy(eye)
      firstPose.lookAt(look)
      third.copy(camera.quaternion)
      camera.position.lerp(eye, eased)
      camera.quaternion.copy(third).slerp(firstPose.quaternion, eased)
      camera.near = T.MathUtils.lerp(ORBIT.near, first.near, eased)
      camera.updateProjectionMatrix()
    },
  }
}
