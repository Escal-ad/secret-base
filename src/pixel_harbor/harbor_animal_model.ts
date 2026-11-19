import * as T from 'three'
import { batchActorBoxes } from './harbor_actor_boxes'
import { ANIMALS } from './harbor_animals_config'
import { makeCanvas, pixelTexture } from './harbor_materials'
import type { ModelKit } from './harbor_models'

type Resident = typeof ANIMALS.residents[number]
const LEGS = [[-0.19, -0.32], [0.19, 0.29], [0.19, -0.32], [-0.19, 0.29]]

function addNameplate(name: string) {
  const { canvas, context } = makeCanvas(64, 19)
  context.fillStyle = ANIMALS.palette.plate
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = '#f7e2bb'
  context.font = '12px "Microsoft YaHei",sans-serif'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillText(name, canvas.width / 2, canvas.height / 2)
  const sprite = new T.Sprite(new T.SpriteMaterial({ map: pixelTexture(canvas), depthWrite: false }))
  sprite.scale.set(0.54, 0.17, 1)
  sprite.position.y = 0.93
  return sprite
}

function addHeart() {
  const { canvas, context } = makeCanvas(9, 9)
  context.fillStyle = ANIMALS.palette.heart
  context.fillRect(1, 1, 3, 4); context.fillRect(5, 1, 3, 4)
  context.fillRect(2, 4, 5, 2); context.fillRect(3, 6, 3, 1); context.fillRect(4, 7, 1, 1)
  const sprite = new T.Sprite(new T.SpriteMaterial({ map: pixelTexture(canvas), transparent: true, depthWrite: false }))
  sprite.scale.setScalar(0.22)
  return sprite
}

function makeLimbs(kit: ModelKit, animal: Resident) {
  return LEGS.map(([x, z]) => kit.box([x, 0.19, z], [0.14, 0.36, 0.15], [animal.accent]))
}

export function makeAnimalModel(kit: ModelKit, animal: Resident) {
  const root = new T.Group()
  const body = new T.Group()
  const { box } = kit
  const dog = animal.species === 'dog'
  const fox = animal.species === 'fox'
  const lion = animal.species === 'lion'
  const legs = makeLimbs(kit, animal)
  const eyes = [-0.115, 0.115].map(x => box([x, 0.66, 0.61], [0.037, 0.042, 0.017], [ANIMALS.palette.face]))
  // 尾巴：狐狸是蓬松白尾带深色尖，狮子是细尾带一撮毛，猫狗保持原样
  const tail = fox ? box([0, 0.53, -0.62], [0.21, 0.24, 0.58], [animal.fur])
    : lion ? box([0, 0.56, -0.62], [0.09, 0.09, 0.54], [animal.fur])
      : box([0, 0.55, -0.57], [0.095, 0.10, 0.43], [animal.accent])
  body.add(box([0, 0.40, -0.06], [0.45, 0.39, 0.81], [animal.fur]),
    box([0, 0.61, 0.39], [0.44, 0.39, 0.42], [animal.fur]), tail, ...legs, ...eyes)
  if (fox) {
    body.add(box([0, 0.53, -0.93], [0.19, 0.2, 0.14], [animal.accent]))
    body.add(box([0, 0.55, 0.615], [0.2, 0.14, 0.2], [animal.fur]))
  }
  if (lion) {
    // 鬃毛：一圈比头更大的方块，把脸露在前半截
    body.add(box([0, 0.62, 0.21], [0.68, 0.6, 0.34], [animal.accent]))
    body.add(box([0, 0.55, 0.62], [0.22, 0.16, 0.22], [animal.accent]))
    body.add(box([0, 0.56, -0.9], [0.14, 0.14, 0.14], [animal.accent]))
  }
  if (dog) body.add(box([0, 0.55, 0.615], [0.24, 0.17, 0.21], [animal.accent]))
  for (const side of [-1, 1]) {
    const earY = fox ? 0.93 : lion ? 0.86 : dog ? 0.75 : 0.83
    const ear: [number, number, number] = fox ? [0.1, 0.26, 0.09]
      : lion ? [0.13, 0.12, 0.12] : [0.115, dog ? 0.19 : 0.16, 0.16]
    body.add(box([side * 0.15, earY, 0.36], ear, [animal.accent]))
  }
  const shadow = new T.Mesh(new T.CircleGeometry(0.32, 8),
    new T.MeshBasicMaterial({ color: ANIMALS.palette.shadow, transparent: true, opacity: 0.23, depthWrite: false }))
  shadow.rotation.x = -Math.PI / 2
  shadow.position.y = 0.013
  const heart = addHeart()
  const nameplate = addNameplate(animal.name)
  heart.visible = nameplate.visible = false
  root.scale.setScalar(animal.size)
  root.add(body, shadow, heart, nameplate)
  return { root, body, legs, eyes, tail, heart, nameplate, updateBoxes: batchActorBoxes(body) }
}
