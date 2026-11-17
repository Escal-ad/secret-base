import type * as T from 'three'
import { RESIDENTS } from './harbor-resident-config'
import { createHarborAvatar } from '../pixel_harbor/harbor_avatar'
import { canWalkAt } from '../pixel_harbor/harbor_layout'
import type { WorldObstacle } from '../pixel_harbor/harbor_layout'
import type { Hotspot } from '../pixel_harbor/harbor_hotspots'
import type { HarborPlayer } from '../pixel_harbor/harbor_player_motion'
import { groundElevation } from '../pixel_harbor/harbor_terrain'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import { makeUmbrella } from './harbor-umbrella'
import { dampAngle, dampingFactor } from '../pixel_harbor/harbor_damping'

function makeResident(kit: ModelKit, entry: typeof RESIDENTS.people[number], index: number) {
  const [x, z] = entry.spot
  const actor = createHarborAvatar(kit, { ...entry, traveler: false, faceVariant: index })
  const umbrella = makeUmbrella(kit)
  umbrella.position.set(0.25, 1.02, 0.13)
  actor.avatar.add(umbrella)
  const pose: HarborPlayer = { x, z, facing: index, elevation: groundElevation(x,z), speed: 0, height: 0,
    landing: 0, jumpAge: 0, airborne: false, lookout: false, sitting: false, sailing: false, swimming: false }
  return { actor, pose, umbrella, spot: {x,z}, index, time: index * 3, accumulated: 0,
    title: entry.name || `村民 ${index + 1}`, note: [entry.job, entry.line].filter(Boolean).join(' · ') || RESIDENTS.placeholder }
}

function walkResident(person: ReturnType<typeof makeResident>, player: HarborPlayer, nav: { step: number; obstacles: readonly WorldObstacle[] }) {
  const { pose, spot, time, index } = person
  const pace = RESIDENTS.speed * nav.step
  const desiredX = spot.x + Math.sin(time * 0.18 + index) * 1.6
  const desiredZ = spot.z + Math.cos(time * 0.18) * 0.7
  const dx = desiredX - pose.x
  const dz = desiredZ - pose.z
  const distance = Math.hypot(dx, dz)
  const close = Math.hypot(player.x - pose.x, player.z - pose.z) < 1.02 && !player.lookout
  const heading = close ? Math.atan2(pose.x - player.x, pose.z - player.z) : Math.atan2(dx,dz)
  const x = pose.x + Math.sin(heading) * Math.min(pace, distance)
  const z = pose.z + Math.cos(heading) * Math.min(pace, distance)
  const options = { obstacles: nav.obstacles, height: 0, radius: 0.23 }
  pose.speed = 0
  if (canWalkAt(x, z, options)) {
    pose.speed = distance > 0.05 ? RESIDENTS.speed : 0
    Object.assign(pose, { x,z,elevation: groundElevation(x,z),
      facing: dampAngle(pose.facing,heading,dampingFactor(nav.step,0.28)) })
  }
}

export function addHarborResidents(scene: T.Scene, kit: ModelKit, obstacles: readonly WorldObstacle[]) {
  const residents = RESIDENTS.people.map((entry,index) => makeResident(kit,entry,index))
  residents.forEach(({ actor, pose }) => { actor.update(pose,0,true); scene.add(actor.avatar) })
  return {
    update(player: HarborPlayer, step: number, options: { night: number; rain: number; reduced: boolean; limit: number }) {
      for (const person of residents) {
        const { index, pose, actor } = person
        actor.avatar.visible = index < options.limit && (options.night < 0.75 || index % 2 === 1)
        if (!actor.avatar.visible) continue
        const close = Math.hypot(player.x-pose.x,player.z-pose.z) < RESIDENTS.activityRadius
        person.accumulated += step
        if (!close && person.accumulated < RESIDENTS.cadence) continue
        const elapsed = person.accumulated; person.accumulated = 0
        person.time += elapsed
        pose.sitting = index % 3 === 0 && Math.sin(person.time * 0.22) < -0.28
        pose.speed = 0
        if (!pose.sitting && index % 3 !== 2) walkResident(person,player,{step:elapsed,obstacles})
        person.umbrella.visible = options.rain > 0.32
        actor.update(pose,elapsed,options.reduced || !close)
      }
    },
    hotspot(player: HarborPlayer): Hotspot | null {
      const person = residents.find(({ actor, pose }) => actor.avatar.visible && Math.hypot(player.x-pose.x,player.z-pose.z)<RESIDENTS.radius)
      if (!person) return null
      return { id: `resident-${person.index}`, kind: 'resident', title: person.title, label: RESIDENTS.greet,
        note: person.note, x: person.pose.x, z: person.pose.z, radius: RESIDENTS.radius }
    },
    targets: residents.map(person => ({ id: `resident-${person.index}`, object: person.actor.avatar,
      detailAnchor: person.actor.detailAnchor, title: person.title, height: 1.28 })),
  }
}
