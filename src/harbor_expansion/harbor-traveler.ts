import * as T from 'three'
import { createHarborAvatar } from '../pixel_harbor/harbor_avatar'
import type { ModelKit } from '../pixel_harbor/harbor_models'
import type { HarborPlayer } from '../pixel_harbor/harbor_player_motion'
import type { Settings } from '../harbor_shell/harbor-settings'
import { DECK } from '../pixel_harbor/harbor_terrain'
import { TRAVELER } from './harbor-traveler-config'
import { makeUmbrella } from './harbor-umbrella'
import { dampingFactor } from '../pixel_harbor/harbor_damping'
import { createHarborCape } from '../harbor_flight/harbor-cape'
import { FLIGHT } from '../harbor_flight/harbor-flight-config'

function createPreset(kit: ModelKit, variant: boolean) {
  const ref = TRAVELER.reference
  const fallback = TRAVELER.variantPreview
  const appearance = variant ? { ...ref, ...TRAVELER.variant,
    hair: TRAVELER.variant.hair || fallback.hair, coat: TRAVELER.variant.coat || fallback.coat,
    scarf: TRAVELER.variant.scarf || fallback.scarf } : ref
  const shade = (color: string) => '#' + new T.Color(color).lerp(new T.Color(TRAVELER.neutral),TRAVELER.mutedMix).getHexString()
  const actor = createHarborAvatar(kit, { hair: shade(appearance.hair), shirt: shade(appearance.coat),
    trousers: appearance.trousers, boots: appearance.boots, hat: false, skin: appearance.skin,
    badge: appearance.badge, hairstyle: appearance.hairstyle, traveler: true, shoulderBag: appearance.shoulderBag })
  return { ...actor, scarfColor: appearance.scarf }
}

function makeScarf(kit: ModelKit, color: string) {
  const root = new T.Group()
  const width = TRAVELER.scarfWidth
  root.add(kit.box([0,0,0.01],[0.41,0.088,0.40],[color]))
  const segments = Array.from({ length: TRAVELER.scarfSegments }, () => {
    const joint = new T.Group()
    joint.add(kit.box([0,-0.056,0],[width,0.133,0.046],[color]))
    return joint
  })
  let previous = root
  segments.forEach((joint,index) => {
    joint.position.set(index ? 0 : -0.14, index ? -0.106 : 0, index ? 0 : -0.195)
    previous.add(joint); previous = joint
  })
  return { root, segments }
}
function setScarf(scarf: ReturnType<typeof makeScarf>, player: HarborPlayer, pose: { time: number; step: number; rain: number; reduced: boolean; low: boolean; turn: number; vertical: number }) {
  scarf.root.position.set(0,1.10 + player.height,0)
  const swing = pose.reduced ? 0.10 : pose.rain > 0.3 ? 0.38 : 1
  scarf.segments.forEach((joint,index) => {
    joint.visible = !pose.low || index < TRAVELER.lowSegments
    const wind = Math.sin(pose.time * 1.5 + index * 0.54) * TRAVELER.wind
    const riding = Math.min(player.speed * 0.17, 0.54)
    const lift = player.airborne ? Math.max(-0.27,Math.min(0.32,pose.vertical * 0.095)) : 0
    const requested = (index ? wind * 0.7 : -riding - lift + wind) * swing
    const a = dampingFactor(pose.step,TRAVELER.scarfResponse + index * 0.035)
    joint.rotation.x = T.MathUtils.lerp(joint.rotation.x,requested,a)
    joint.rotation.z = T.MathUtils.lerp(joint.rotation.z,(wind + pose.turn * 0.8) * swing,a)
  })
}

export function createTravelAvatar(scene: T.Scene, kit: ModelKit) {
  const actors = { traveler: createPreset(kit,false), variant: createPreset(kit,true), original: createHarborAvatar(kit) }
  const scarves = { traveler: makeScarf(kit,actors.traveler.scarfColor), variant: makeScarf(kit,actors.variant.scarfColor) }
  actors.traveler.avatar.add(scarves.traveler.root)
  actors.variant.avatar.add(scarves.variant.root)
  const umbrella = makeUmbrella(kit)
  umbrella.name = 'harbor-player-umbrella'
  const cape = createHarborCape(kit)
  scene.add(...Object.values(actors).map(actor => actor.avatar),umbrella)
  let time = 0, lastHeight = 0, lastFacing = 0
  let flyBlend = 0
  // Keep the cape, scarf and flight pose on the same selected avatar.
  return (player: HarborPlayer, state: { settings: Settings; rain: number; first: number; seconds: number; reduced: boolean;
    simplified: boolean; yaw: number; flying: boolean; bank: number; fishingArm?: number }) => {
    const { appearance } = state.settings
    const actor = actors[appearance]
    const low = state.simplified || state.settings.quality === 'low'
    for (const candidate of Object.values(actors)) candidate.avatar.visible = candidate === actor && state.first < TRAVELER.first.hideBlend
    time += state.seconds
    const vertical = (player.height - lastHeight) / Math.max(state.seconds,0.016)
    const turn = Math.atan2(Math.sin(player.facing-lastFacing),Math.cos(player.facing-lastFacing))
    lastHeight = player.height; lastFacing = player.facing
    const desired = Number(state.flying)
    const change = state.seconds / FLIGHT.cape.transition
    flyBlend = state.reduced ? desired : flyBlend + Math.sign(desired - flyBlend) * Math.min(change, Math.abs(desired - flyBlend))
    const ease = flyBlend * flyBlend * (3 - 2 * flyBlend)
    if (cape.mesh.parent !== actor.detailAnchor) actor.detailAnchor.add(cape.mesh)
    cape.update({ open: ease, time, low, speed: player.speed, reduced: state.reduced, bank: state.bank })
    actor.setFlightPose({ blend: ease, lean: ease * FLIGHT.pose.lean * Math.min(1, player.speed / FLIGHT.speed),
      bank: -ease * state.bank * FLIGHT.pose.bank, arms: ease * FLIGHT.pose.arms })
    actor.setFishingArm(state.fishingArm)
    actor.update(player,state.seconds,state.reduced)
    actor.swingCoat(low || state.reduced ? 0 : Math.sin(time * 6.6) * Math.min(player.speed * 0.015,TRAVELER.coatSwing))
    if (appearance !== 'original') setScarf(scarves[appearance],player,{time,step:state.seconds,rain:state.rain,
      reduced:state.reduced,low,turn,vertical})
    umbrella.visible = !state.flying && state.fishingArm === undefined && state.rain > 0.25
    const first = state.first > TRAVELER.first.hatBlend
    const yaw = first ? state.yaw + Math.PI : player.facing
    const dx = Math.cos(yaw)*0.29+Math.sin(yaw)*(first ? 0.41 : 0.08)
    const dz = -Math.sin(yaw)*0.29+Math.cos(yaw)*(first ? 0.41 : 0.08)
    umbrella.position.set(player.x+dx, DECK+player.elevation+player.height+(first?1.30:1.01),player.z+dz)
    umbrella.rotation.set(0,yaw,state.reduced?0:Math.sin(time*6)*player.speed*0.012)
  }
}
