import * as T from 'three'
import { ANIMALS } from './harbor_animals_config'
import { dampAngle, dampingFactor } from './harbor_damping'
import { canWalkAt } from './harbor_layout'
import type { WorldObstacle } from './harbor_layout'
import { makeAnimalModel } from './harbor_animal_model'
import { seededRandom } from './harbor_materials'
import type { ModelKit } from './harbor_models'
import type { HarborPlayer } from './harbor_player_motion'
import { DECK, groundElevation } from './harbor_terrain'

type Point = { x: number; z: number }
type Resident = typeof ANIMALS.residents[number]
type Animal = ReturnType<typeof makeResident>
type AnimalState = 'idle' | 'walk' | 'sit' | 'sleep'
const ARRIVAL = 0.12

function range(a: Point, b: Point) { return Math.hypot(a.x - b.x, a.z - b.z) }

function makeResident(kit: ModelKit, resident: Resident) {
  const model = makeAnimalModel(kit, resident)
  model.root.position.set(resident.x, DECK + groundElevation(resident.x, resident.z), resident.z)
  return {
    resident, model, position: { x: resident.x, z: resident.z },
    random: seededRandom(Math.abs(Math.floor(resident.x * 7523))), target: null as Point | null,
    facing: 0, state: 'idle' as AnimalState, time: 0, phase: 0, idle: 0,
    follow: 0, cooldown: 0, pet: 0, followCooldown: 0, speed: 0, distant: 0,
  }
}

function chooseTarget(animal: Animal, player: HarborPlayer, night: boolean) {
  const { resident, random, position } = animal
  if (animal.pet > 0) return null
  if (resident.species === 'dog' && !player.sailing && !player.lookout && !animal.followCooldown
    && range(position, player) < ANIMALS.followDistance) {
    if (!animal.follow) animal.follow = ANIMALS.followTime
    return range(position, player) > ANIMALS.followStopDistance ? player : null
  }
  if (night && resident.species === 'cat') return range(position, resident.rest) > ARRIVAL ? resident.rest : null
  if (animal.target && range(position, animal.target) > ARRIVAL) return animal.target
  if (animal.idle > 0) return null
  if (animal.state === 'walk') { animal.idle = 0.9 + random() * 2.0; return null }
  if (range(position, resident) > resident.radius) return resident
  const angle = random() * Math.PI * 2
  const distance = random() * resident.radius
  animal.target = { x: resident.x + Math.cos(angle) * distance, z: resident.z + Math.sin(angle) * distance }
  return animal.target
}

function moveAnimal(animal: Animal, target: Point, navigation: {
  step: number; obstacles: readonly WorldObstacle[]
}) {
  const { position, resident } = animal
  const { step, obstacles } = navigation
  const heading = Math.atan2(target.x - position.x, target.z - position.z)
  const speed = animal.follow > 0 ? ANIMALS.followSpeed : ANIMALS.speed
  const stride = Math.min(range(position, target), speed * step)
  const dx = Math.sin(heading) * stride
  const dz = Math.cos(heading) * stride
  const passable = { obstacles, height: 0, radius: ANIMALS.footprintRadius * resident.size }
  const old = { ...position }
  if (canWalkAt(position.x + dx, position.z, passable)) position.x += dx
  if (canWalkAt(position.x, position.z + dz, passable)) position.z += dz
  animal.speed = range(old, position) / step
  if (animal.speed < 0.02) { animal.idle = 0.65; animal.target = null }
  else animal.facing = dampAngle(animal.facing, Math.atan2(position.x - old.x, position.z - old.z), dampingFactor(step, 0.24))
}

function updateResident(animal: Animal, player: HarborPlayer, status: { step: number; night: boolean; obstacles: readonly WorldObstacle[] }) {
  const { step, night, obstacles } = status
  if (!step) return
  animal.speed = 0
  animal.pet = Math.max(0, animal.pet - step)
  animal.idle = Math.max(0, animal.idle - step)
  animal.cooldown = Math.max(0, animal.cooldown - step)
  animal.followCooldown = Math.max(0, animal.followCooldown - step)
  if (animal.follow > 0) {
    animal.follow = Math.max(0, animal.follow - step)
    if (!animal.follow) { animal.followCooldown = ANIMALS.followCooldown; animal.target = null }
  }
  const target = chooseTarget(animal, player, night)
  if (target) moveAnimal(animal, target, { step, obstacles })
  animal.state = animal.speed > 0.02 ? 'walk' : animal.pet > 0 ? 'sit'
    : night && animal.resident.species === 'cat' && range(animal.position, animal.resident.rest) < 0.40
      ? 'sleep' : animal.idle > 1.0 ? 'sit' : 'idle'
}

function poseResident(animal: Animal, viewer: HarborPlayer, style: { step: number; reduced: boolean }) {
  const { position, model, resident } = animal
  model.root.position.set(position.x, DECK + groundElevation(position.x, position.z), position.z)
  model.root.rotation.y = animal.facing
  animal.phase += style.step * animal.speed * 11
  const swing = style.reduced ? 0 : Math.sin(animal.phase) * Math.min(0.48, animal.speed * 0.43)
  model.body.scale.y = animal.state === 'sleep' ? 0.58 : animal.state === 'sit' ? 0.79 : 1
  model.legs.forEach((leg, index) => { leg.rotation.x = index % 2 ? swing : -swing })
  model.tail.rotation.y = animal.pet && resident.species === 'dog' && !style.reduced
    ? Math.sin(animal.pet * 31) * 0.88 : swing
  model.eyes.forEach(eye => { eye.scale.y = animal.pet || animal.state === 'sleep' ? 0.012 : 0.042 })
  model.nameplate.visible = !viewer.sailing && !viewer.lookout && range(position, viewer) <= ANIMALS.nameDistance
  model.heart.visible = animal.pet > 0
  model.heart.position.y = 1.18 + (style.reduced ? 0 : (1 - animal.pet / ANIMALS.reactionSeconds) * 0.35)
  model.updateBoxes()
}

export function createHarborAnimals(options: { scene: T.Scene; kit: ModelKit; obstacles: readonly WorldObstacle[]; simplified: boolean }) {
  const { scene, kit, obstacles, simplified } = options
  const animals = ANIMALS.residents.slice(0, Math.min(ANIMALS.limit, simplified ? ANIMALS.simplifiedLimit : ANIMALS.limit))
    .map(resident => makeResident(kit, resident))
  animals.forEach(animal => scene.add(animal.model.root))
  return {
    targets: animals.map(({ resident, model }) => ({
      id:resident.id,title:resident.name,object:model.root,height:0.5,detailAnchor:model.body,
    })),
    update(player: HarborPlayer, step: number, state: { night: boolean; reduced: boolean; scenery: boolean }) {
      animals.forEach((animal, index) => {
        const enabled = state.scenery || index < ANIMALS.degradedLimit
        animal.model.root.visible = enabled
        if (!enabled) return
        const close = range(animal.position, player) <= ANIMALS.fullUpdateDistance
        animal.distant += step
        if (!close && animal.distant < ANIMALS.distantUpdateInterval) return
        updateResident(animal, player, { step: animal.distant, night: state.night, obstacles })
        poseResident(animal, player, { step: animal.distant, reduced: state.reduced || !close })
        animal.distant = 0
      })
    },
    nearby(player: HarborPlayer) {
      if (player.lookout || player.sailing || player.sitting) return null
      return animals.find(animal => animal.model.root.visible && !animal.cooldown
        && range(animal.position, player) < ANIMALS.interactRadius) ?? null
    },
    pet(animal: Animal) { animal.pet = ANIMALS.reactionSeconds; animal.cooldown = ANIMALS.petCooldown; animal.speed = 0 },
  }
}
