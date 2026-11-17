import * as T from 'three'
import type { HarborPlayer } from '../pixel_harbor/harbor_player_motion'
import { DECK } from '../pixel_harbor/harbor_terrain'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import type { FishingPhase } from './harbor-fishing'
import { FISHING } from './harbor-pastimes-config'

const ROD = {
  armPivot:0.995, armReach:0.36, gripX:0.267, length:1.24,
  sweep:1.05, readyArm:-0.98, castArm:-1.62, pitch:0.45, handle:0.23, width:0.036,
  wood:'#7c4b37', tip:'#eac17e', grip:'#46352e', line:'#fff4d8',
}
const FLOAT = { waterline:0.065, sink:-0.12, rock:0.026, arc:1.38, hitch:0.038, scale:0.95 }

function makeRod(kit:ModelKit) {
  const rod = new T.Group()
  rod.add(kit.box([0,0,ROD.handle/2],[ROD.width*2,ROD.width*2,ROD.handle],[ROD.grip]))
  rod.add(kit.box([0,0,ROD.length/2],[ROD.width,ROD.width,ROD.length],[ROD.wood]))
  rod.add(kit.box([0,0,ROD.length-ROD.handle/2],[ROD.width*0.7,ROD.width*0.7,ROD.handle],[ROD.tip]))
  return rod
}

function makeFloat(kit:ModelKit) {
  const float = new T.Group()
  float.add(kit.box([0,-0.025,0],[0.12,0.095,0.12],['#fff4ca']))
  float.add(kit.box([0,0.045,0],[0.093,0.06,0.093],['#c54a3f']))
  float.add(kit.box([0,0.097,0],[0.036,0.06,0.036],['#ffcf69']))
  float.scale.setScalar(FLOAT.scale)
  return float
}

export function createFishingModel(scene:T.Scene, kit:ModelKit) {
  const rig = new T.Group()
  const rod = makeRod(kit)
  const float = makeFloat(kit)
  const thread = kit.box([0,0,0],[FLOAT.hitch,1,FLOAT.hitch],[ROD.line])
  rig.name = 'harbor-fishing-rig'
  rig.add(rod,float,thread)
  rig.visible = false
  scene.add(rig)
  const tip = new T.Vector3()
  const span = new T.Vector3()
  const endpoint = new T.Vector3()
  return (player:HarborPlayer, frame:{ phase:FishingPhase; cast:number; time:number; reduced:boolean }) => {
    rig.visible = frame.phase !== 'idle'
    if (!rig.visible) return undefined
    const swing = frame.reduced ? 0 : Math.sin(Math.PI * frame.cast)
    const arm = T.MathUtils.lerp(ROD.readyArm, ROD.castArm, swing)
    const x = Math.cos(player.facing) * ROD.gripX - Math.sin(player.facing)*Math.sin(arm)*ROD.armReach
    const z = -Math.sin(player.facing) * ROD.gripX - Math.cos(player.facing)*Math.sin(arm)*ROD.armReach
    rod.position.set(player.x+x, DECK + ROD.armPivot - Math.cos(arm)*ROD.armReach,player.z+z)
    rod.rotation.set(-ROD.pitch - swing*ROD.sweep,player.facing,0,'YXZ')
    rod.updateMatrixWorld(true)
    rod.localToWorld(tip.set(0,0,ROD.length))
    endpoint.set(FISHING.float.x,frame.phase === 'bite' ? FLOAT.sink : FLOAT.waterline,FISHING.float.z)
    float.position.copy(tip).lerp(endpoint, frame.reduced ? 1 : frame.cast)
    float.position.y += swing*FLOAT.arc + Math.sin(frame.time*3)*FLOAT.rock
    float.rotation.z = Math.sin(frame.time*2)*FLOAT.rock
    thread.visible = frame.phase !== 'miss'
    float.visible = thread.visible
    span.subVectors(float.position,tip)
    thread.position.copy(tip).lerp(float.position,0.5)
    thread.scale.y = span.length()
    thread.quaternion.setFromUnitVectors(T.Object3D.DEFAULT_UP,span.normalize())
    return arm
  }
}
