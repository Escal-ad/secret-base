import * as T from 'three'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import { DECK } from '../pixel_harbor/harbor_terrain'
import { markHarborGlow } from '../pixel_harbor/harbor_glow'
import { WISHING } from './harbor-pastimes-config'
import type { Wish } from './harbor-pastimes-config'

const LAMP = { startY:DECK+1.28, width:0.23, height:0.27, depth:0.21,
  trim:'#9e5a3a', paper:'#fff1c7', warm:'#ffc269', fadeOutAt:0.78, day:0.26, night:0.93,
  retainedRadius:0.80, retainedLift:0.24, retainedStep:0.18 }
const FULL_TURN = Math.PI*2
const LANTERN_SHAPE = [
  [0,0,0,LAMP.width,LAMP.height,LAMP.depth,0],
  [0,0.155,0,0.16,0.04,0.16,1],
  [0,-0.155,0,0.18,0.039,0.17,1],
  [0,0.016,0,0.265,0.035,0.237,1],
] as const

export function addWishAltar(scene:T.Scene, kit:ModelKit) {
  const { altar, altarWidth, altarHeight } = WISHING
  const stone = new T.Group()
  stone.position.set(altar.x, DECK, altar.z)
  stone.add(kit.box([0,0.09,0],[altarWidth,0.18,altarWidth],['#9f9485','brick']))
  stone.add(kit.box([0,0.44,0],[0.54,0.70,0.54],['#b6a390','brick']))
  stone.add(kit.box([0,0.84,0],[0.71,0.14,0.70],['#cbb397','brick']))
  stone.add(markHarborGlow(kit.box([0,0.99,0],[0.22,0.18,0.22],['#ffcd85']),'street'))
  stone.add(kit.box([0,altarHeight,0],[0.29,0.05,0.29],['#956756']))
  scene.add(stone)
  const half = altarWidth / 2
  return { footprint:[altar.x-half,altar.x+half,altar.z-half,altar.z+half] as const, height:altarHeight }
}

function makeLanternSlots(scene:T.Scene, count:number) {
  const geometry = new T.BoxGeometry()
  return Array.from({length:count}, () => {
    const group = new T.Group()
    const paper = new T.MeshBasicMaterial({color:LAMP.paper,transparent:true,depthWrite:false})
    const trim = new T.MeshBasicMaterial({color:LAMP.trim,transparent:true,depthWrite:false})
    const id = { value:'' }
    for (const [x,y,z,w,h,d,edge] of LANTERN_SHAPE) {
      const mesh = new T.Mesh(geometry,edge ? trim : paper)
      mesh.position.set(x,y,z)
      mesh.scale.set(w,h,d)
      group.add(mesh)
    }
    group.visible = false
    scene.add(group)
    return { group, paper, trim, id, opacity:0 }
  })
}

type Slot = ReturnType<typeof makeLanternSlots>[number]
const nightColor = new T.Color(LAMP.warm)
function paint(slot:Slot, alpha:number, night:number) {
  slot.group.visible = alpha > 0
  slot.paper.color.set(LAMP.paper).lerp(nightColor, night)
  slot.paper.opacity = alpha * T.MathUtils.lerp(LAMP.day,LAMP.night,night)
  slot.trim.opacity = alpha
}

function updateRetained(slots:Slot[], wishes:readonly Wish[], frame:{ step:number; low:boolean; reduced:boolean; night:number }) {
  const count = frame.low ? Math.floor(WISHING.lights.retained/2) : WISHING.lights.retained
  const nearby = wishes.slice(0,count)
  for (const slot of slots) {
    const wanted = nearby.some(wish => wish.id === slot.id.value)
    if (!wanted) slot.opacity = frame.reduced ? 0 : Math.max(0,slot.opacity-frame.step/WISHING.lights.fadeSeconds)
    if (!slot.opacity && !wanted) slot.id.value = ''
  }
  for (const wish of nearby) {
    const slot = slots.find(candidate => candidate.id.value === wish.id) ?? slots.find(candidate => !candidate.id.value)
    if (!slot) continue
    slot.id.value = wish.id
    slot.opacity = frame.reduced ? 1 : Math.min(1,slot.opacity+frame.step/WISHING.lights.fadeSeconds)
  }
  slots.forEach((slot,index) => {
    const angle = index/WISHING.lights.retained*FULL_TURN
    slot.group.position.set(WISHING.altar.x + Math.cos(angle)*LAMP.retainedRadius,
      LAMP.startY+LAMP.retainedLift+index*LAMP.retainedStep,WISHING.altar.z+Math.sin(angle)*LAMP.retainedRadius)
    paint(slot,slot.opacity,frame.night)
  })
}

export function createWishLights(scene:T.Scene) {
  const { altar, lights } = WISHING
  const retained = makeLanternSlots(scene,lights.retained+1)
  const flying = makeLanternSlots(scene,lights.flying).map(slot => ({ ...slot, age:Number(lights.flightSeconds) }))
  const ray = new T.Raycaster()
  let pulse = 0
  return {
    release() {
      const slot = flying.reduce((older,next) => next.age > older.age ? next : older)
      slot.age = 0
      pulse = lights.beamSeconds
    },
    get beam() { return pulse/lights.beamSeconds },
    pick(pointer:T.Vector2, camera:T.Camera, wishes:readonly Wish[]) {
      ray.setFromCamera(pointer,camera)
      const slots = retained.filter(slot => slot.group.visible && wishes.some(wish => wish.id === slot.id.value))
      const hit = ray.intersectObjects(slots.map(slot => slot.group),true)[0]
      return slots.find(slot => slot.group === hit?.object.parent)?.id.value
    },
    update(wishes:readonly Wish[], frame:{ step:number; night:number; low:boolean; reduced:boolean }) {
      pulse = Math.max(0,pulse-frame.step)
      updateRetained(retained,wishes,frame)
      const { drift, flightSeconds } = lights
      const budget = frame.low ? Math.max(1,Math.floor(lights.flying/2)) : lights.flying
      flying.forEach(slot => { slot.age += frame.step })
      const active = [...flying].sort((a,b) => a.age-b.age).slice(0,budget)
      flying.forEach(slot => {
        const life = Math.min(1,slot.age/flightSeconds)
        const progress = frame.reduced ? 0.20 : life
        const opacity = active.includes(slot) ? Math.min(1,(1-life)/(1-LAMP.fadeOutAt)) : 0
        slot.group.position.set(altar.x+progress*drift.x,LAMP.startY+progress*drift.y,altar.z+progress*drift.z)
        paint(slot,opacity,frame.night)
      })
    },
  }
}
