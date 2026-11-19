import * as T from 'three'
import { SCOPE } from './harbor-scope-config'
import { ORBIT } from '../pixel_harbor/harbor_movement_config'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import type { Hotspot } from '../pixel_harbor/harbor_hotspots'
import type { HarborPlayer } from '../pixel_harbor/harbor_player_motion'
import { HARBOR_LIGHTING } from '../pixel_harbor/harbor_lighting_config'

export type ScopeTarget = { id:string;title?:string;object?:T.Object3D;position?:T.Vector3;
  height?:number;night?:boolean;caption?:string;detailAnchor?:T.Object3D }
export type ScopeDisplay = { zoom:number;name:string;caption:string;locked:boolean;loading:boolean }
type Detail = ReturnType<typeof import('./harbor-scope-detail').mountScopeDetails>
const MINIMUM_SEE = 0.35
const SKY_DISTANCE = 208

export function addScopeStand(scene:T.Scene, kit:ModelKit) {
  const [x,y,z]=SCOPE.eye
  const stand=kit.box([x-0.14,y-0.56,z],[0.11,0.88,0.11],['#715b4c'])
  const tube=kit.beam([[x-0.30,y-0.20,z+0.13],[x+0.48,y+0.03,z-0.14]],0.23,['#67817e'])
  scene.add(stand,tube,kit.box([x+0.47,y+0.03,z-0.14],[0.11,0.24,0.26],['#ccab78']))
}

export function scopeHotspot(player:HarborPlayer):Hotspot|null{
  const { x,z } = SCOPE.position
  if(!player.lookout||Math.hypot(player.x-x,player.z-z)>SCOPE.promptRadius)return null
  return {kind:'telescope',id:SCOPE.id,label:SCOPE.action,x,z,radius:SCOPE.promptRadius}
}

export function createScope(scene:T.Scene, options:{camera:T.PerspectiveCamera;onChange:(display:ScopeDisplay|null)=>void;targets:ScopeTarget[]}) {
  const { camera,onChange,targets }=options
  const sunDir = new T.Vector3(0.93,0.107,-0.36)
  const moonDir = new T.Vector3(...HARBOR_LIGHTING.moonDirection)
  const eye = new T.Vector3(...SCOPE.eye)
  targets.push({id:'sun',title:'太阳',position:sunDir.normalize().multiplyScalar(SKY_DISTANCE),night:false},
    {id:'moon',title:'月亮',position:moonDir.normalize().multiplyScalar(SKY_DISTANCE),night:true})
  const aim=new T.Vector3(), view=new T.Vector3(), position=new T.Vector3()
  let active=false, zoom:number=SCOPE.starting, yaw:number=SCOPE.yaw, pitch:number=SCOPE.pitch
  let pitchLimit:number=SCOPE.pitchLimit
  let focus:ScopeTarget|null=null, locked:ScopeTarget|null=null, last='', loading=false, generation=0
  let details:Detail|undefined
  function publish() {
    const id=focus?.id ?? ''
    const stamp=[id,zoom,loading,Boolean(locked)].join(':')
    if(stamp===last)return
    last=stamp
    onChange({zoom,name:SCOPE.titles[id] || focus?.title || (focus ? '观察目标' : ''),
      caption:id==='sun'?(SCOPE.sunHint || SCOPE.captions[id] || '待填写')
        :focus?.caption || SCOPE.captions[id] || (focus?'待填写':''),
      locked:Boolean(locked),loading})
  }
  /** pose 只有山顶看星空那台望远镜会传：换机位、抬头、放宽俯仰。 */
  async function open(pose?: { eye?: [number,number,number]; pitch?: number; pitchLimit?: number }) {
    if (active) return
    const version=++generation
    const sky=Boolean(pose?.eye)
    active=true; loading=!sky;last='';locked=null
    zoom=SCOPE.starting;yaw=SCOPE.yaw;pitch=pose?.pitch ?? SCOPE.pitch
    pitchLimit=pose?.pitchLimit ?? SCOPE.pitchLimit
    // 机位每次都复位：山顶那台用完以后，码头那台还要回到原来的位置
    const seat = pose?.eye ?? SCOPE.eye
    eye.set(seat[0], seat[1], seat[2])
    publish()
    // 看星空不需要码头那套近景模型（海岛细节），直接用天上的星座
    if(sky)return
    try {
      const module=await import('./harbor-scope-detail')
      if(active && version===generation)details=module.mountScopeDetails(scene,targets)
    } catch {
      // TODO(reason): The base scene stays usable if the optional detail chunk cannot load.
      if(version===generation)details=undefined
    } finally { if(version===generation){loading=false;if(active)publish()} }
  }
  function targetPosition(target:ScopeTarget,destination:T.Vector3) {
    if(target.position)return destination.copy(target.position)
    target.object?.getWorldPosition(destination)
    destination.y+=target.height ?? 0.8
    return destination
  }
  function matchTarget(night: boolean, weather:number) {
    let best = SCOPE.aimTolerance/Math.sqrt(zoom)*Math.max(MINIMUM_SEE,1-weather*0.38)
    let target:ScopeTarget|null=null
    for(const entry of targets){
      if(entry.night!==undefined&&entry.night!==night)continue
      if(!entry.position&&entry.object&&!entry.object.visible)continue
      const angle = position.subVectors(targetPosition(entry,position),eye).normalize().angleTo(view)
      if(angle<best){best=angle;target=entry}
    }
    return target
  }
  return {
    get active(){return active},
    open,
    close() {
      if(!active)return false
      active=false;++generation;details?.dispose();details=undefined;focus=locked=null
      camera.fov=ORBIT.fov;camera.updateProjectionMatrix();onChange(null)
      return true
    },
    look(dx:number,dy:number) {
      locked=null
      yaw=T.MathUtils.clamp(yaw-dx*SCOPE.sensitivity,SCOPE.yaw-SCOPE.yawLimit,SCOPE.yaw+SCOPE.yawLimit)
      pitch=T.MathUtils.clamp(pitch+dy*SCOPE.sensitivity,-pitchLimit,pitchLimit)
    },
    zoom(direction:number){zoom=T.MathUtils.clamp(zoom+direction*SCOPE.step,SCOPE.minimum,SCOPE.maximum);publish()},
    lock(){locked=locked?null:focus;publish()},
    update(night:boolean, weather:number) {
      if(!active)return
      camera.position.copy(eye)
      if(locked) view.subVectors(targetPosition(locked,aim),eye).normalize()
      else view.set(-Math.sin(yaw)*Math.cos(pitch),-Math.sin(pitch),-Math.cos(yaw)*Math.cos(pitch))
      camera.lookAt(aim.copy(eye).add(view))
      camera.fov=ORBIT.fov/zoom
      camera.updateProjectionMatrix()
      focus=locked ?? matchTarget(night,weather)
      details?.update(zoom)
      publish()
    },
  }
}
