import * as T from 'three'
import { makeGull } from '../pixel_harbor/harbor_models'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import type { HarborPlayer } from '../pixel_harbor/harbor_player_motion'
import type { Hotspot } from '../pixel_harbor/harbor_hotspots'

export const GULL = {
  id: 'pier-gull', title: '栈桥海鸥', action: '逗海鸥', perch: [3.25,1.51,-2.44], cover: [8.05,2.95,-5.02],
  cautious: 3.6, flee: 0.95, interact: 2.15, flight: 7, cooldown: 9, hop: 1.25,
  flock: 5, reducedFlock: 2, route: { x: 5.4, z: -0.4, width: 5.2, depth: 4.3, rise: 3.1 },
} as const

function flock(scene: T.Scene, kit: ModelKit) {
  const box = kit.box([0,0,0],[1,1,1],['#f1e5ce'])
  const mesh = new T.InstancedMesh(box.geometry,box.material,GULL.flock*3)
  mesh.frustumCulled = false
  scene.add(mesh)
  const dummy = new T.Object3D()
  return (time: number, count: number) => {
    mesh.count = count * 3
    for (let i=0;i<count;i++) {
      const angle = time*0.145 + i*1.72
      const x = 2+Math.cos(angle)*12
      const z = -11+Math.sin(angle)*8
      const y = 5.25+i*0.62+Math.sin(angle*2)*0.27
      for (let part=0;part<3;part++) {
        const side = part-1
        dummy.position.set(x+Math.cos(angle)*side*0.31,y+(side?Math.sin(time*4+i)*0.09:0),z+Math.sin(angle)*side*0.31)
        dummy.rotation.set(0,-angle,side*Math.sin(time*4+i)*0.25)
        dummy.scale.set(side?0.35:0.22,side?0.065:0.13,0.23)
        dummy.updateMatrix()
        mesh.setMatrixAt(i*3+part,dummy.matrix)
      }
    }
    mesh.instanceMatrix.needsUpdate=true
  }
}

export function createHarborGulls(scene: T.Scene, kit: ModelKit) {
  const actor = makeGull(kit)
  const updateFlock = flock(scene,kit)
  scene.add(actor.bird)
  const base = new T.Vector3(...GULL.perch)
  const shelter = new T.Vector3(...GULL.cover)
  let flight = 0, cool = 0, hop = 0, ambience = 0
  return {
    actor: actor.bird,
    update(player: HarborPlayer, state: { time: number; step: number; rain: number; snow: number; night: number; reduced: boolean; low: boolean }, play: (distance: number) => void) {
      const { step,time,rain,snow,night }=state
      const distance = Math.hypot(player.x-base.x,player.z-base.z)
      const alert = distance < GULL.cautious && !player.sailing && !player.lookout
      const sheltered = rain > 0.45
      cool = Math.max(0,cool-step)
      hop = Math.max(0,hop-step)
      flight = Math.max(0,flight-step)
      if (!flight && !cool && !hop && alert && distance < GULL.flee && !sheltered) {
        flight=GULL.flight; cool=GULL.flight+GULL.cooldown
      }
      const t = flight ? (1-flight/GULL.flight)*Math.PI*2 : 0
      const scale = Math.sin(t*0.5)
      const route = GULL.route
      actor.bird.position.copy(base).lerp(shelter,Math.min(1,rain*2))
      actor.bird.position.add(new T.Vector3((route.x-base.x+Math.cos(t)*route.width)*scale,
        scale*route.rise + Math.abs(Math.sin(hop*Math.PI*2/GULL.hop))*0.17,
        (route.z-base.z+Math.sin(t)*route.depth)*scale))
      actor.bird.scale.y = 1-snow*0.26
      actor.bird.rotation.y = flight ? -t : alert ? Math.atan2(player.x-base.x,player.z-base.z)+Math.PI : -1.1
      actor.wings.forEach((wing,index) => { wing.scale.x = flight || hop ? 1 : 0.46
        wing.rotation.z = (index?1:-1) * (state.reduced?0.15:(flight||hop?Math.sin(time*12)*0.81:alert?Math.sin(time*9)*0.18:0.3)) })
      updateFlock(time, state.low || sheltered || night>0.5 ? GULL.reducedFlock : GULL.flock)
      ambience += step
      if (ambience > 16) { ambience = 0; if (!state.low && !sheltered && night<0.5) play(distance+4) }
    },
    pet(play: (distance: number) => void) { hop=GULL.hop; cool=GULL.cooldown; play(0) },
    hotspot(player: HarborPlayer): Hotspot | null {
      if (flight || hop || player.sailing || player.lookout || Math.hypot(player.x-actor.bird.position.x,player.z-actor.bird.position.z)>GULL.interact) return null
      return { id:GULL.id, title:GULL.title, kind:'gull', label:GULL.action, x:actor.bird.position.x,z:actor.bird.position.z,radius:GULL.interact }
    },
  }
}
