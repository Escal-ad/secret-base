import * as T from 'three'
import { makeIsland } from './harbor-islands'
import { ISLANDS } from './harbor-island-config'
import { createModelKit } from '../pixel_harbor/harbor_models'
import type { ScopeTarget } from './harbor-scope'
import { SCOPE } from './harbor-scope-config'
import { makeLivingDetail } from './harbor-scope-living-detail'

export function mountScopeDetails(scene: T.Scene, targets: readonly ScopeTarget[]) {
  const kit = createModelKit()
  const group = new T.Group()
  const entries: T.Group[] = []
  const islandGroups = ISLANDS.positions.map((site,index) => {
    const target = targets.find(entry=>entry.id===`island-${index}`)
    const model = makeIsland(kit,site,index,true)
    if(target?.object) target.object.visible=false
    model.visible=false
    group.add(model)
    return model
  })
  const ships = targets.filter(entry=>entry.object && entry.id.startsWith('distant-ship'))
  ships.forEach(target=>{
    if(!target.object)return
    const node = new T.Group()
    node.add(kit.box([0.73,1.94,0.02],[0.32,0.46,0.039],['#ddb785']),
      kit.box([0.56,1.91,-0.02],[0.04,0.51,0.04],['#674b43']))
    if(SCOPE.titles[target.id]) {
      const surface = document.createElement('canvas'); surface.width=100;surface.height=24
      const context=surface.getContext('2d')
      if(context) {
        context.fillStyle='#745841';context.fillRect(0,0,100,24)
        context.fillStyle='#fff1cb';context.font='bold 14px sans-serif'
        context.fillText(SCOPE.titles[target.id],6,17,88)
        const texture = new T.CanvasTexture(surface);texture.magFilter=T.NearestFilter
        const plaque = new T.Mesh(new T.PlaneGeometry(0.75,0.18),new T.MeshBasicMaterial({map:texture,side:T.DoubleSide}))
        plaque.position.set(0.3,0.55,0.71);node.add(plaque)
      }
    }
    target.object.add(node)
    entries.push(node)
  })
  for(const target of targets){
    if(!target.detailAnchor)continue
    const detail=makeLivingDetail(kit,target.id)
    if(detail){ target.detailAnchor.add(detail);entries.push(detail) }
  }
  scene.add(group)
  return {
    update(zoom: number) {
      islandGroups.forEach((model,index)=>{
        const target=targets.find(entry=>entry.id===`island-${index}`)?.object
        if(target)target.visible=zoom<SCOPE.detailZoom
        model.visible=zoom>=SCOPE.detailZoom
      })
      entries.forEach(node=>{node.visible=zoom>=SCOPE.detailZoom})
    },
    dispose() {
      const geometries=new Set<T.BufferGeometry>(), materials=new Set<T.Material>()
      function clear(root: T.Object3D) {
        root.traverse(object=>{
          if(object instanceof T.InstancedMesh)object.dispose()
          if(!(object instanceof T.Mesh))return
          geometries.add(object.geometry)
          for(const material of Array.isArray(object.material)?object.material:[object.material])materials.add(material)
        })
        root.removeFromParent()
      }
      clear(group)
      entries.forEach(clear)
      geometries.forEach(item=>item.dispose())
      materials.forEach(item=>{
        if('map' in item && item.map instanceof T.Texture)item.map.dispose()
        item.dispose()
      })
      targets.filter(entry=>entry.id.startsWith('island-')).forEach(entry=>{if(entry.object)entry.object.visible=true})
    },
  }
}
