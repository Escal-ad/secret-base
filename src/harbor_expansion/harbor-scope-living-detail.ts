import { Group } from 'three'
import type { ModelKit, Point } from '../pixel_harbor/harbor_models'

type Mark = [position: Point, size: Point, color: string]
const CHEEKS: Mark[] = [
  [[-0.159,1.19,0.199],[0.04,0.014,0.006],'#ad775f'],
  [[0.159,1.19,0.199],[0.04,0.014,0.006],'#ad775f'],
  [[-0.104,1.259,0.206],[0.011,0.013,0.006],'#e6bb94'],
  [[0.118,1.259,0.206],[0.011,0.013,0.006],'#e6bb94'],
]
const COLLAR: Mark[] = [
  [[0,0.484,0.24],[0.465,0.065,0.12],'#77554c'],
  [[0.01,0.456,0.306],[0.05,0.063,0.01],'#ccae64'],
]
const CAT_EARS: Mark[] = [
  [[-0.15,0.848,0.445],[0.052,0.077,0.012],'#a7776d'],
  [[0.15,0.848,0.445],[0.052,0.077,0.012],'#a7776d'],
  [[0,0.596,0.608],[0.052,0.023,0.02],'#93655e'],
]

export function makeLivingDetail(kit: ModelKit, id: string) {
  const marks = id.startsWith('resident-') ? CHEEKS
    : id.startsWith('animal-cat') ? [...COLLAR,...CAT_EARS]
    : id.startsWith('animal-dog') ? COLLAR : null
  if (!marks) return null
  const node = new Group()
  for (const [position,size,color] of marks) node.add(kit.box(position,size,[color]))
  return node
}
