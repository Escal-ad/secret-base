import * as T from 'three'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import { makeBoat, makeHouse } from '../pixel_harbor/harbor_models'
import { seededRandom } from '../pixel_harbor/harbor_materials'
import { markHarborGlow } from '../pixel_harbor/harbor_glow'
import { ISLANDS } from './harbor-island-config'

type Island = typeof ISLANDS.positions[number]

function islandShape(kit: ModelKit, island: Island, index: number, detail: boolean) {
  const [x,z,width,height] = island
  const points = detail ? ISLANDS.detailedSides : ISLANDS.sides
  const random = seededRandom(ISLANDS.seed + index)
  const irregular = Array.from({length:points},()=>0.72 + random()*0.36)
  const layers = [[-0.17,1.0,'#b1ae9d'],[0.07,0.92,'#a79783'],[0.29,0.78,'#8d8d78'],[0.61,0.54,'#758e7d'],[0.87,0.23,'#677e73']] as const
  const vertices = layers.flatMap(([lift,scale],ring) => irregular.flatMap((radius,i) => {
    const angle = i/points * Math.PI * 2
    const ridge = 0.80 + 0.20 * Math.cos(angle*2+index) + 0.1* Math.sin(angle*3)
    return [x+Math.cos(angle)*radius*width*scale+(ring*0.09)*width,
      lift*height*ridge,z+Math.sin(angle)*radius*width*scale*0.65]
  }))
  const indexList: number[] = [], mesh = new T.BufferGeometry()
  for(let ring=1;ring<layers.length;ring++) {
    const start = indexList.length
    for(let i=0;i<points;i++) {
      const n=(i+1)%points, a=(ring-1)*points+i, b=(ring-1)*points+n, c=ring*points+i, d=ring*points+n
      indexList.push(a,c,b,b,c,d)
    }
    if(ring===layers.length-1) {
      const center=vertices.length/3
      vertices.push(x+width*0.25,height,z)
      for(let i=0;i<points;i++)indexList.push((ring*points)+i,center,(ring*points)+(i+1)%points)
    }
    mesh.addGroup(start,indexList.length-start,ring-1)
  }
  mesh.setAttribute('position',new T.Float32BufferAttribute(vertices,3)); mesh.setIndex(indexList); mesh.computeVertexNormals()
  return new T.Mesh(mesh,layers.slice(0,-1).map(([, ,color])=>kit.surface(color)))
}

export function makeIsland(kit: ModelKit, island: Island, index: number, detail = false) {
  const group=new T.Group()
  group.add(islandShape(kit,island,index,detail))
  const [x,z,w,h]=island
  if (detail || index<4) {
    const cottage = makeHouse(kit,{wall:'#d9b085',roof:'#826059',trim:'#e9d6bc'},[2.3,1.5,1.9])
    cottage.position.set(x+w*0.58,h*0.30,z+1.6); group.add(cottage)
    const base = kit.cylinder([x+w*0.62,h*0.24,z-1.25],[0.35,0.54,2.4,7],['#e4d3b9'])
    const roof = kit.cylinder([x+w*0.62,h*0.24+1.1,z-1.25],[0.13,0.62,0.46,7],['#aa6557'])
    group.add(base,roof,kit.box([x+w*0.65,0.15,z+4],[2.7,0.28,1.2],['#92765f']))
    const leaves = kit.box([0,0,0],[1,1,1],['#6d866f'])
    const trees = new T.InstancedMesh(leaves.geometry, leaves.material, detail?14:5)
    const stem = new T.Object3D()
    for(let i=0;i<trees.count;i++){
      stem.position.set(x+w*0.31 + Math.cos(i*2.4)*w*0.33,h*0.51+Math.sin(i*0.8)*h*0.1,z+Math.sin(i*2.4)*w*0.29)
      stem.scale.set(0.88,1.38,0.89);stem.updateMatrix();trees.setMatrixAt(i,stem.matrix)
    }
    group.add(trees)
  }
  return group
}

export function addHarborIslands(scene: T.Scene, kit: ModelKit) {
  const islands = ISLANDS.positions.slice(0,ISLANDS.count).map((site,index)=> {
    const group = makeIsland(kit,site,index)
    scene.add(group)
    return { id:`island-${index}`,object:group,position:new T.Vector3(site[0],site[3]*0.68,site[1]) }
  })
  const ships = ISLANDS.routes.map((route,index) => {
    const ship = makeBoat(kit,['#697e8b','#b27e63','#738b78','#a68c5e'][index])
    ship.scale.setScalar(0.86)
    const lamp = markHarborGlow(kit.box([0.36,1.8,0],[0.15,0.16,0.14],['#f4d397']),'street')
    lamp.userData.movingGlow=true
    ship.add(lamp)
    scene.add(ship)
    return { id:`distant-ship-${index}`,object:ship,route }
  })
  return {
    islands, ships,
    update(time:number, state:{weather:number; tier:number}) {
      ships.forEach(({object,route:[x,z,u,v]}, i)=>{
        const phase = time*0.115+i*1.03
        const span = (1+Math.sin(phase))/2
        object.position.set(x+(u-x)*span,0.04+Math.sin(time+i)*0.03,z+(v-z)*span)
        object.rotation.y=Math.atan2(-(v-z),u-x)+(Math.cos(phase)<0?Math.PI:0)
        object.visible = i===0 || (state.weather<0.45 && state.tier<3)
      })
      islands.forEach(({object},i)=>{object.visible=state.tier<3 || i%2===0})
    },
  }
}
