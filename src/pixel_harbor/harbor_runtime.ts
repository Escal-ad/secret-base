import * as T from 'three'
import { createHarborPastimes } from '../harbor_pastimes/harbor-pastimes'
import type { FishingPhase } from '../harbor_pastimes/harbor-fishing'
import { FISHING, WISHING } from '../harbor_pastimes/harbor-pastimes-config'
import { prepareSceneExtension } from '../harbor_expansion/harbor-scene-extension'
import type { SceneExtension } from '../harbor_expansion/harbor-scene-extension'
import { createFirstCamera } from '../harbor_expansion/harbor-first-camera'
import { createTravelAvatar } from '../harbor_expansion/harbor-traveler'
import { addHarborMayor } from '../harbor_expansion/harbor-mayor'
import { HILL_FLIGHT_VOLUMES, HILL_OBSTACLES } from '../harbor_expansion/harbor-hill'
import { createFarmLife } from '../harbor_expansion/harbor-farm'
import { createCherryPetals } from '../harbor_expansion/harbor-cherry'
import { addMapleTree, createMapleLeaves } from '../harbor_expansion/harbor-maple'
import { addBamboo, createBambooLeaves, createPandas } from '../harbor_expansion/harbor-bamboo'
import { createStarSky, addStargazerTelescope, currentZodiac, SKY, SKY_EYE } from '../harbor_expansion/harbor-stars'
import { createSwordsman } from '../harbor_expansion/harbor-swordsman'
import { createSeabed } from '../harbor_expansion/harbor-seabed'
import { addVegetablePlots } from '../harbor_expansion/harbor-vegetable-plots'
import { addOrchard, ORCHARD } from '../harbor_expansion/harbor-orchard'
import { addItem } from '../harbor_expansion/harbor-inventory'
import { PLOTS } from '../harbor_expansion/harbor-vegetable-plots'
import { SHOPS, createShopLife } from '../harbor_expansion/harbor-shops'
import { NPC_DIALOGUE, FARMER_GIFTS, SHOP_SNACKS, SHOP_FORTUNES } from './harbor_npc_dialogue'
import { createChickens } from '../harbor_expansion/harbor-chicken'
import { addPines } from '../harbor_expansion/harbor-pines'
import { createPenShelters } from '../harbor_expansion/harbor-pen-shelters'
import { addWillows } from '../harbor_expansion/harbor-willow'
import { TRAMPOLINE, TRAMP_GATE } from '../harbor_expansion/harbor-trampoline'
import { FIREWORK, createFireworks } from '../harbor_expansion/harbor-fireworks'
import { createWasher, WASHER } from '../harbor_expansion/harbor-washer'
import { createArcticPeople } from '../harbor_expansion/harbor-arctic'
import { SKY_ISLAND, SWING_SEAT_HEIGHT, CLOUD_GATE } from '../harbor_expansion/harbor-sky-island'
import { createHanfuPeople } from '../harbor_expansion/harbor-siheyuan'
import { createPalacePeople } from '../harbor_expansion/harbor-palace'
import { createHelipadNpcs, HELIPAD_NPCS } from '../harbor_expansion/harbor-helipad-npc'
import { ISLAND_PAD } from '../harbor_expansion/harbor-island-pad'
import { createCottageFlora } from '../harbor_expansion/harbor-flora'
import { createFlightMotion } from '../harbor_flight/harbor-flight-motion'
import { FLIGHT } from '../harbor_flight/harbor-flight-config'
import { createFlightAudio } from '../harbor_flight/harbor-flight-audio'
import { createFlightSpace, flightEdge } from '../harbor_flight/harbor-flight-space'

import { scopeHotspot } from '../harbor_expansion/harbor-scope'
import type { ScopeDisplay } from '../harbor_expansion/harbor-scope'
import type { EmitSound, SetAmbience } from '../harbor_expansion/harbor-ambience'
import type { WeatherFrame } from '../harbor_expansion/harbor-weather'
import type { Settings } from '../harbor_shell/harbor-settings'
import { SAILING } from './harbor_sailing_config'
import { addEvalStation, EVAL_STATION_OBSTACLE } from './eval_station_model'
import { createHarborActivities } from './harbor_activities'
import type { ActivityAction, HarborActivity } from './harbor_activities'
import { createHarborAnimals } from './harbor_animals'
import { ANIMALS } from './harbor_animals_config'
import { addAtmosphere } from './harbor_atmosphere'
import type { HarborArtwork } from './harbor_art'
import { createControls } from './harbor_controls'
import { addHarborCaptain } from './harbor_captain_model'
import { CAPTAIN } from './harbor_captain_config'
import { addHarborForest, FOREST_FLIGHT_VOLUMES, FOREST_OBSTACLES } from './harbor_forest'
import { createHarborGlow } from './harbor_glow'
import { addExhibits } from './harbor_exhibits'
import { LOOKOUT, SUNSET, VILLAGE } from './harbor_exploration_config'
import { createHotspotMarker } from './harbor_hotspot_marker'
import type { HintPosition } from './harbor_hotspot_marker'
import { artHotspot, createHotspotTracker, findHarborHotspot, isInsideHotspot, listHarborPlaces } from './harbor_hotspots'
import type { Exhibit, Hotspot } from './harbor_hotspots'
import { canWalkAt, DECK, findSupportHeight, followObstacle } from './harbor_layout'
import type { Footprint, WorldObstacle } from './harbor_layout'
import { createLabelProjection } from './harbor_label_projection'
import type { ProjectedLabel } from './harbor_label_projection'
import { createModelKit } from './harbor_models'
import { JUMP, MOVEMENT, ORBIT, SWIM } from './harbor_movement_config'
import { NEW_LANDMARK_OBSTACLES } from './harbor_new_landmarks'
import { createOrbitCamera } from './harbor_orbit_camera'
import { createPixelAlignment } from './harbor_pixel_alignment'
import { createPlayerMotion } from './harbor_player_motion'
import type { HarborPlayer } from './harbor_player_motion'
import { addHarborSigns } from './harbor_signs'
import { canSail, createHarborSailing } from './harbor_sailing'
import { createLightTransition, createRenderQuality } from './harbor_render_quality'
import type { TourCue } from './harbor_tour'
import { findTravelLanding } from './harbor_travel'
import { TERRACE_HOUSES, TERRACE_SOLIDS, TERRACE_TRUNKS } from './harbor_village_plan'
import { createHarborWake } from './harbor_wake'
import { addWorld, HARBOR_STRUCTURES, HELIPAD, TERRACE_ROOFS, WORLD_OBSTACLES } from './harbor_world'

type RuntimeOptions = {
  mount: HTMLElement
  artworks: readonly HarborArtwork[]
  onHotspot: (hotspot: Hotspot | null) => void
  onOpen: (hotspot: Hotspot) => void
  onLeave: (id: string) => void
  onHintPosition: (position: HintPosition | null) => void
  onLabels: (labels: readonly ProjectedLabel[]) => void
  onSailing: (sailing: boolean) => void
  onFlight: (flying: boolean) => void
  onFishing: (phase:FishingPhase) => void
  onFlightNotice: (message: string) => void
  onQuality: (message: string) => void
  onMode: (mode: HarborActivity | null) => void
  onActivityRequest: (action: ActivityAction) => void
  onCue: (cue: TourCue | null) => void
  night: boolean
  simplified: boolean
  settings: () => Settings
  onScope: (scope: ScopeDisplay|null) => void
  play: EmitSound
  thunder?: () => void
  setAmbience: SetAmbience
  onError: () => void
}

const INTERNAL_HEIGHT = 400
const INTERNAL_WIDTH = 720
const PIXEL_QUALITY = { high:1, medium:0.83, low:0.65 } as const
const EXHIBIT_CAMERA_HEIGHT = 2.45
const MIN_RENDER_DIMENSION = 1
// 当前夜色强度（0 白天，1 深夜）：望远镜提示要用
let skyNight = 0
// 烟花发射器（交互层拿不到 startHarbor 里的实例，用这个句柄）
let fireworkLaunch: (() => boolean) | null = null
const CAPTAIN_COLLISION_RADIUS = 0.26
const ACTOR_RADIUS = 0.3

function createPixelOutput(renderer: T.WebGLRenderer, getQuality: () => Settings['quality']) {
  const target = new T.WebGLRenderTarget(1, 1, {
    magFilter: T.NearestFilter, minFilter: T.NearestFilter, generateMipmaps: false,
  })
  const output = new T.Scene()
  const screen = new T.Mesh(new T.PlaneGeometry(2, 2), new T.MeshBasicMaterial({ map: target.texture, depthTest: false }))
  const displayCamera = new T.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  const alignPixels = createPixelAlignment()
  const anchor = new T.Vector3()
  screen.frustumCulled = false
  output.add(screen)
  const measure = { width: 1, height: 1 }
  let quality = getQuality()
  function resizeTarget() {
    const {width,height}=measure
    const scale = PIXEL_QUALITY[quality]
    const pixelRatio = Math.min(INTERNAL_WIDTH*scale / width, INTERNAL_HEIGHT*scale / height, 1)
    target.setSize(Math.max(MIN_RENDER_DIMENSION, Math.round(width * pixelRatio)),
      Math.max(MIN_RENDER_DIMENSION, Math.round(height * pixelRatio)))
  }
  return {
    resize(width: number, height: number) {
      renderer.setPixelRatio(1)
      renderer.setSize(width, height, false)
      Object.assign(measure,{ width,height })
      resizeTarget()
    },
    draw(scene: T.Scene, camera: T.PerspectiveCamera, options: { player: HarborPlayer; align: boolean }) {
      const next=getQuality()
      if(next!==quality){quality=next;resizeTarget()}
      const { player,align } = options
      ;(window as unknown as { __harborPlayer?: typeof player }).__harborPlayer = player
    anchor.set(player.x, DECK + ORBIT.focusHeight + player.height + player.elevation, player.z)
      if(align) alignPixels(camera, anchor, target)
      renderer.setRenderTarget(target)
      renderer.render(scene, camera)
      renderer.setRenderTarget(null)
      renderer.render(output, displayCamera)
    },
    dispose() { target.dispose(); screen.geometry.dispose(); screen.material.dispose() },
  }
}

function disposeScene(scene: T.Scene) {
  const geometry = new Set<T.BufferGeometry>()
  const materials = new Set<T.Material>()
  const textures = new Set<T.Texture>()
  scene.traverse(object => {
    if (object instanceof T.InstancedMesh) object.dispose()
    if (object instanceof T.Mesh || object instanceof T.Sprite) {
      if (object instanceof T.Mesh) geometry.add(object.geometry)
      const entries = Array.isArray(object.material) ? object.material : [object.material]
      for (const material of entries) {
        materials.add(material)
        if ('map' in material && material.map instanceof T.Texture) textures.add(material.map)
      }
    }
  })
  geometry.forEach(item => item.dispose())
  materials.forEach(item => item.dispose())
  textures.forEach(item => item.dispose())
  scene.clear()
}

type SceneTick = (step: number, elapsed: number, reduced: boolean, frameTime: number) => void

function createLoop(tick: SceneTick) {
  const listeners = new AbortController()
  const { signal } = listeners
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
  // ?debug=1 时在角落显示玩家坐标，方便精确定位物件
  const debugLabel = /[?&]debug/.test(location.search) ? (() => {
    const node = document.createElement('div')
    node.style.cssText = 'position:fixed;left:14px;bottom:78px;z-index:9999;background:rgba(20,28,32,.82);' +
      'color:#f2ead8;font:14px/1.4 ui-monospace,monospace;padding:6px 10px;border-radius:6px;pointer-events:none'
    document.body.appendChild(node)
    return node
  })() : null

  let frame = 0
  let previous: number | undefined
  let elapsed = 0
  let stopped = false

  function run(now: number) {
    const frameTime = previous === undefined ? 0 : (now - previous) / 1000
    const step = Math.min(frameTime, MOVEMENT.maxFrameStep)
    previous = now
    if (!preference.matches) elapsed += step
    if (debugLabel) {
      const spot = (window as unknown as { __harborPlayer?: { x: number; z: number } }).__harborPlayer
      if (spot) debugLabel.textContent = "x " + spot.x.toFixed(2) + "   z " + spot.z.toFixed(2)
    }
    tick(step, elapsed, preference.matches, frameTime)
    frame = requestAnimationFrame(run)
  }
  function sync() {
    cancelAnimationFrame(frame)
    previous = undefined
    if (!stopped && !document.hidden && document.hasFocus()) frame = requestAnimationFrame(run)
  }
  window.addEventListener('blur', sync, { signal })
  window.addEventListener('focus', sync, { signal })
  document.addEventListener('visibilitychange', sync, { signal })
  return {
    start() { sync() },
    stop() { stopped = true; sync(); listeners.abort() },
  }
}

function installExhibitPicking(exhibits: readonly Exhibit[], camera: T.PerspectiveCamera, session: {
  player: HarborPlayer; tracker: ReturnType<typeof createHotspotTracker>
}) {
  const ray = new T.Raycaster()
  const frames = exhibits.map(exhibit => exhibit.frame)
  return (pointer: T.Vector2) => {
    if (session.player.sailing) return
    ray.setFromCamera(pointer, camera)
    const hits = ray.intersectObjects(frames, true)
    const exhibit = exhibits.find(item => hits[0]?.object.parent === item.frame)
    if (!exhibit) return
    const hotspot = artHotspot(exhibit)
    if (isInsideHotspot(session.player, hotspot)) session.tracker.open(hotspot)
  }
}

// Roof tops of landable structures. The lighthouse is excluded on purpose:
// its platform belongs to the lookout activity, which teleports the player.
const LANDABLE_ROOFS = [...HARBOR_STRUCTURES.slice(1), ...TERRACE_ROOFS]

// 树干：这些障碍原本没有高度，按规则会「无论多高都挡」，导致站在树冠上无法移动。
// 给一个约等于树干的高度，站到树冠上就能正常走。
const TRUNK_HEIGHT = 2.2
const TRUNK_TOPS = new Map<string, number>()
for (const footprint of [...TERRACE_TRUNKS, ...HILL_OBSTACLES]) TRUNK_TOPS.set(footprint.join(','), TRUNK_HEIGHT)

function roofTop(footprint: Footprint) {
  return LANDABLE_ROOFS.find(item => item.footprint.every((value, index) => value === footprint[index]))?.height
}

function walkingObstacles(propObstacles: readonly Footprint[], treeTops: readonly WorldObstacle[] = []): WorldObstacle[] {
  const { x, z } = CAPTAIN.position
  const radius = CAPTAIN_COLLISION_RADIUS
  const captain: Footprint = [x - radius, x + radius, z - radius, z + radius]
  const ground = [...WORLD_OBSTACLES, EVAL_STATION_OBSTACLE.footprint, ...FOREST_OBSTACLES, ...NEW_LANDMARK_OBSTACLES,
    captain, ...propObstacles].map(footprint => ({
    footprint, height: JUMP.vaultable.find(item => item.footprint.every((value, index) => value === footprint[index]))?.height
      ?? roofTop(footprint)
      ?? TRUNK_TOPS.get(footprint.join(',')),
  }))
  return [...ground, ...treeTops]
}

function resolveInteraction(player: HarborPlayer, animals: ReturnType<typeof createHarborAnimals>, exhibits: readonly Exhibit[]) {
  const place = findHarborHotspot(player, exhibits)
  const animal = animals.nearby(player)
  if (place?.kind === 'fishing' || place?.kind === 'wishing') return place
  if (place?.kind === 'captain' || place?.kind === 'lookout' || place?.kind === 'sunset' || !animal) return place
  return { id: animal.resident.id, ...animal.position, radius: ANIMALS.interactRadius,
    kind: 'animal', label: `${ANIMALS.petLabel} ${animal.resident.name}` } satisfies Hotspot
}

type NavigationWorld = {
  exhibits: readonly Exhibit[]; canvas: HTMLCanvasElement; propObstacles: Footprint[]
  vessel: T.Group; yacht: T.Group; helicopter: T.Group
  animals: ReturnType<typeof createHarborAnimals>; obstacles: ReturnType<typeof walkingObstacles>
  extension: SceneExtension
  pastimes: ReturnType<typeof createHarborPastimes>
  seabed: ReturnType<typeof createSeabed>
  flightVolumes: ReturnType<typeof addWorld>['flightVolumes']
}

// 落在灯塔瞭望平台上：环形平台半径与 LOOKOUT 一致。
function isOverLookoutRing(point: { x: number; z: number }) {
  const ring = Math.hypot(point.x - LOOKOUT.center.x, point.z - LOOKOUT.center.z)
  return ring >= LOOKOUT.lanternRadius && ring <= LOOKOUT.outerRadius
}

// Navigation input shares one lock with panels and activities, including travel during a fade.
function installInteraction(options: RuntimeOptions, camera: T.PerspectiveCamera, world: NavigationWorld) {
  const { exhibits, canvas, propObstacles, yacht, animals, obstacles, extension, seabed } = world
  const { scope }=extension
  const { pastimes } = world
  const { fishing } = pastimes
  const tracker = createHotspotTracker({ open: options.onOpen, leave: options.onLeave })
  const cameraObstacles = [...HARBOR_STRUCTURES, EVAL_STATION_OBSTACLE, ...TERRACE_HOUSES, ...TERRACE_SOLIDS, pastimes.altar,
    ...propObstacles.map(footprint => ({ footprint, height: EXHIBIT_CAMERA_HEIGHT }))]
  const motion = createPlayerMotion(obstacles)
  const { player } = motion
  // 由活动模块在创建后接管：降落平台等同于「登塔」，这样下塔方式与原来一致。
  // 直升机：停在停机坪上的那架。站到机身旁按 F 上机；飞行中按 R 一键回到停机坪。
  const heli = { riding: false, home: { x: HELIPAD.x, y: HELIPAD.top + 0.09, z: HELIPAD.z } }
  // 两个停机点：村里梯田上的老停机场，和外岛山顶新修的那个
  const PADS = [heli.home, { x: ISLAND_PAD.x, y: ISLAND_PAD.top, z: ISLAND_PAD.z }]
  const nearestPad = (point: { x: number; z: number }) => PADS.reduce((best, pad) =>
    Math.hypot(point.x - pad.x, point.z - pad.z) < Math.hypot(point.x - best.x, point.z - best.z) ? pad : best, PADS[0])
  const nearHelicopter = () => Math.hypot(player.x - world.helicopter.position.x,
    player.z - world.helicopter.position.z) < 5.5
  function parkHelicopter() {
    // 停在离它最近的那个停机点：在岛上就留在岛上，不会自己飞回村里
    const pad = nearestPad(world.helicopter.position)
    world.helicopter.position.set(pad.x, pad.y, pad.z)
    world.helicopter.rotation.y = Math.PI
    world.helicopter.visible = true
  }  let landOnPlatform: () => boolean = () => false
  const flight = createFlightMotion(player, createFlightSpace(obstacles, [
    ...cameraObstacles, ...world.flightVolumes, ...FOREST_FLIGHT_VOLUMES, ...HILL_FLIGHT_VOLUMES,
  ]), { change: (active: boolean) => {
    options.onFlight(active)
    heli.riding = active && nearHelicopter()
    orbit.setHeli(heli.riding)
  }, notice: options.onFlightNotice,
    land: (point: { x: number; y: number; z: number }) => {
      if (isOverLookoutRing(point)) return landOnPlatform()
      // 云岛：高度图不一定每格都烘到，这里直接按岛的台面高度落下
      if (Math.hypot(point.x - SKY_ISLAND.x, point.z - SKY_ISLAND.z) < SKY_ISLAND.size * 0.58
        && point.y > SKY_ISLAND.top - 6) {
        return motion.teleport(point, SKY_ISLAND.top + 0.1)
      }
      // 降落点必须真的能站：带上障碍盒判定，别落进房子/石头里
      if (!canWalkAt(point.x, point.z, { obstacles, height: 0 })) {
        let landed = false
        for (let radius = 0.8; radius <= 4 && !landed; radius += 0.8) {
          for (let step = 0; step < 12 && !landed; step += 1) {
            const angle = (step / 12) * Math.PI * 2
            const x = point.x + Math.cos(angle) * radius
            const z = point.z + Math.sin(angle) * radius
            if (!canWalkAt(x, z, { obstacles, height: 0 })) continue
            const near = findSupportHeight(x, z, { obstacles, height: point.y })
            motion.teleport({ x, z }, DECK + near)
            landed = true
          }
        }
        if (!landed) return motion.swim(point)
        return true
      }
      // 落到「脚下真正能站的高度」，而不是停下来的那个飞行高度：
      // 屋顶、树冠、梯田、停机坪都算在内（高度图里已经有它们的顶面）。
      const support = findSupportHeight(point.x, point.z, { obstacles, height: point.y })
      return motion.teleport(point, DECK + support)
    },
    recover: motion.respawn })
  const sailing = createHarborSailing([{ id: 'skiff', group: world.vessel }, { id: 'yacht', group: yacht }],
    player, () => extension.weather.frame.ice)
  const orbit = createOrbitCamera(camera, cameraObstacles)
  /** 飞行中把直升机挂到玩家脚下；不开的时候它停在停机坪上。 */
  function syncHelicopter(step: number, firstPerson: boolean) {
    const craft = world.helicopter
    const rotor = craft.userData.rotor as T.Group | undefined
    const tailRotor = craft.userData.tailRotor as T.Group | undefined
    // 停机时怠速慢转，起飞后高速转
    const spin = (heli.riding ? 26 : 3) * Math.min(step, 0.1)
    if (rotor) rotor.rotation.y += spin
    if (tailRotor) tailRotor.rotation.x += spin * 1.7
    if (!heli.riding) { craft.visible = true; return }
    craft.position.set(player.x, DECK + player.elevation + player.height - FLIGHT.heli.lift, player.z)
    // 模型机头朝 -z，而玩家前进方向是 +z，所以要补半个圆周，否则按 W 会倒着飞
    craft.rotation.y = player.facing + Math.PI
    // 第一视角直接收起机身，视野零遮挡（和斗篷飞行一致）
    craft.visible = !firstPerson
  }
  /** R 键：一键回到停机坪（连人带机） */
  function returnToHelipad() {
    if (!heli.riding) { parkHelicopter(); options.onFlightNotice(FLIGHT.heli.home); return }
    heli.riding = false
    orbit.setHeli(false)
    flight.reset()
    const pad = nearestPad(player)
    parkHelicopter()
    motion.teleport({ x: pad.x, z: pad.z + 3.6 })
    options.onFlightNotice(FLIGHT.heli.home)
  }
  const onHeliKey = (event: KeyboardEvent) => {
    if (event.code !== 'KeyR') return
    const pad = nearestPad(world.helicopter.position)
    const away = Math.hypot(world.helicopter.position.x - pad.x, world.helicopter.position.z - pad.z) > 0.2
    if (heli.riding || away) returnToHelipad()
  }
  window.addEventListener('keydown', onHeliKey)
  // 站在蹦床上按 H 起跳
  const onBounceKey = (event: KeyboardEvent) => {
    if (event.code !== 'KeyH' || event.repeat) return
    const person = motion.player
    if (Math.hypot(person.x - TRAMPOLINE.x, person.z - TRAMPOLINE.z) > TRAMPOLINE.size * 0.62) return
    motion.boost(TRAMPOLINE.launch)
    options.play('cape', { pitch: 1.35 })
  }
  window.addEventListener('keydown', onBounceKey)
  const first = createFirstCamera(camera)
  const places = listHarborPlaces(exhibits)
  const activity = createHarborActivities({ motion, orbit, sailing,
    onMode: options.onMode, onRequest: options.onActivityRequest, onCue: options.onCue, onNotice: options.onQuality })
  landOnPlatform = () => activity.act('lookout', false)
  let panelOpen = false
  let menuOpen = false
  let transitionLocked = false
  let door = 0
  let secondKnock = 0
  const updateTravel = () => { controls.clear(); options.onSailing(player.sailing) }
  function getInteraction() {
    if (flight.active || fishing.active || scope.active || door) return null
    if(activity.mode==='lookout')return scopeHotspot(player)
    if(activity.mode==='drive'){
      const dock=sailing.nearbyDock()
      return dock ? { kind:'dock',id:dock.id,label:SAILING.dockPrompt,x:dock.x,z:dock.z,radius:dock.berthRadius } satisfies Hotspot : null
    }
    if(activity.mode==='sunset'){
      // 坐着看落日时仍然给一条提示：按 E 起身（镜头是自由的，和摇椅一样）
      return { kind:'sunset', id:'sunset', label: SUNSET.exit, x: player.x, z: player.z, radius: 1 } satisfies Hotspot
    }
    if(activity.mode)return null
    // 山顶望远镜：夜里才能看星空
    if (Math.hypot(player.x - SKY.telescope.x, player.z - SKY.telescope.z) < 2.4) {
      const dark = skyNight > 0.55
      const zodiac = currentZodiac()
      return { kind: 'stargaze', id: 'stargaze', x: SKY.telescope.x, z: SKY.telescope.z, radius: 2.4,
        label: dark ? '看星空' : SKY.daytimeLabel,
        title: dark ? zodiac.name : '星空',
        note: dark ? zodiac.intro : SKY.daytimeNote } satisfies Hotspot
    }
    // 海上烟花点：站上去按 E 放一束
    if (Math.hypot(player.x - FIREWORK.x, player.z - FIREWORK.z) < 2.0) {
      return { kind: 'washer', id: 'firework', label: '放一束烟花', title: '海上烟花点',
        note: '按 E 放一束，升到灯塔一半高再炸开。', x: FIREWORK.x, z: FIREWORK.z, radius: 2.0 } satisfies Hotspot
    }
    // 栈桥上的蹦床传送点：只有光圈，按 E 直接上蹦床
    if (Math.hypot(player.x - TRAMP_GATE.x, player.z - TRAMP_GATE.z) < 2.1 && player.height < 5) {
      return { kind: 'cloudgate', id: 'tramp-gate', label: '蹦床传送点',
        title: '蹦床传送点', note: '踩上光圈就能到海上的蹦床。',
        x: TRAMP_GATE.x, z: TRAMP_GATE.z, radius: 2.1 } satisfies Hotspot
    }
    // 海上蹦床：站上去按 E 弹起来
    if (Math.hypot(player.x - TRAMPOLINE.x, player.z - TRAMPOLINE.z) < TRAMPOLINE.size * 0.55) {
      return { kind: 'trampoline', id: 'trampoline', label: '按 H 开始起蹦', title: '海上蹦床',
        note: '按 H 起跳（弹得比灯塔还高），按 E 回栈桥。', x: TRAMPOLINE.x, z: TRAMPOLINE.z,
        radius: TRAMPOLINE.size * 0.55 } satisfies Hotspot
    }
    // 云迁层传输点：桥上按 E 上岛，岛上按 E 回渔村
    if (Math.hypot(player.x - CLOUD_GATE.x, player.z - CLOUD_GATE.z) < 2.1 && player.height < 5) {
      return { kind: 'cloudgate', id: 'cloud-gate-up', label: CLOUD_GATE.label,
        title: CLOUD_GATE.label, note: '踩上光圈就能升到云上的小教堂。',
        x: CLOUD_GATE.x, z: CLOUD_GATE.z, radius: 2.1 } satisfies Hotspot
    }
    if (Math.hypot(player.x - SKY_ISLAND.x, player.z - SKY_ISLAND.z) < SKY_ISLAND.size * 0.9
      && player.elevation + player.height > 20) {
      return { kind: 'cloudgate', id: 'cloud-gate-down', label: '返回渔村',
        title: '云迁层传输点', note: '按 E 顺着云缝滑回栈桥。',
        x: player.x, z: player.z, radius: 2 } satisfies Hotspot
    }
    // 洗衣服的老妇人
    if (Math.hypot(player.x - WASHER.x, player.z - WASHER.z) < 2.1) {
      return { kind: 'washer', id: 'washer', label: '和洗衣妇说话',
        title: '洗衣服的老妇', note: '她抬头笑笑：「等我把这件捶完。」',
        x: WASHER.x, z: WASHER.z, radius: 2.1 } satisfies Hotspot
    }
    // 浮岛上的花秋千：坐上去（相机完全自由，和摇椅一样）
    if (Math.hypot(player.x - SKY_ISLAND.swing.x, player.z - SKY_ISLAND.swing.z) < 1.7
      && player.elevation + player.height > 20) {
      return { kind: 'chair', id: 'sky-swing', label: player.sitting ? '起身' : '坐上花秋千',
        x: SKY_ISLAND.swing.x + 0.35, z: SKY_ISLAND.swing.z,
        note: String(SWING_SEAT_HEIGHT), radius: 1.7 } as unknown as Hotspot
    }
    for (const npc of [HELIPAD_NPCS.farmer, HELIPAD_NPCS.pilot]) {
      if (Math.hypot(player.x - npc.x, player.z - npc.z) < 2.1) {
        return { kind: 'washer', id: 'helipad-npc', label: '和' + npc.label + '说话',
          title: npc.label, note: npc.line, x: npc.x, z: npc.z, radius: 3.2 } satisfies Hotspot
      }
    }
    // 岬角上两间铺子：走到柜台前按 E
    for (const shop of [SHOPS.store, SHOPS.fortune]) {
      if (Math.hypot(player.x - shop.x, player.z - (shop.z + shop.d / 2 + 0.9)) < 1.9) {
        const store = shop === SHOPS.store
        const late = skyNight > 0.5
        return { kind: 'shop', id: store ? 'shop-store' : 'shop-fortune',
          title: shop.label, label: '进店看看',
          note: store
            ? late
              ? '檐下的灯亮着。店员趴在柜台上打瞌睡，含混地说：「汽水在架子上……自己拿，钱放罐子里。」'
              : '柜台上摆着冰汽水、饼干和晒干的鱼干。戴红鸭舌帽的店员问你要不要来一瓶。'
            : late
              ? '算子铺已经打烊，一块木牌挂在门口：「白日再来」。里头只剩一盏灯还亮着。'
              : '戴墨镜的先生正摆弄水晶球，头也不抬：「坐吧，先说说你最近在愁什么。」',
          x: shop.x, z: shop.z, radius: 2.0 } satisfies Hotspot
      }
    }
    // 果树 / 椰子树 / 菜田：靠近就能摘
    const orchard = ORCHARD.trees.reduce<{ name: string; d: number } | null>((best, tree) => {
      const d = Math.hypot(player.x - tree.x, player.z - ORCHARD.rowZ)
      return d < 2.6 && (!best || d < best.d) ? { name: tree.name, d } : best
    }, null)
    if (orchard) {
      return { kind: 'pick', id: 'pick-fruit', label: '摘' + orchard.name, title: orchard.name,
        x: player.x, z: player.z, radius: 2.6 } satisfies Hotspot
    }
    const coconut = ORCHARD.coconuts.some(tree => Math.hypot(player.x - tree.x, player.z - tree.z) < 2.8)
    if (coconut) {
      return { kind: 'pick', id: 'pick-coconut', label: '摘椰子', title: '椰子',
        x: player.x, z: player.z, radius: 2.8 } satisfies Hotspot
    }
    const bed = PLOTS.beds.find(item => Math.abs(player.x - item.x) < item.w / 2 + 0.6
      && Math.abs(player.z - item.z) < item.d / 2 + 0.6)
    if (bed) {
      const kind: string = bed.crops[0]
      const crop = kind === 'cabbage' ? '白菜' : kind === 'radish' ? '萝卜'
        : kind === 'chili' ? '辣椒' : kind === 'strawberry' ? '草莓' : '西瓜'
      return { kind: 'pick', id: 'pick-crop', label: '摘' + crop, title: crop,
        x: player.x, z: player.z, radius: 1.2 } satisfies Hotspot
    }
    // 海豚：游到旁边就能摸
    const dolphin = seabed.nearestDolphin(player.x, player.z)
    if (dolphin) {
      return { kind: 'dolphin', id: 'dolphin', label: '摸摸海豚', x: player.x, z: player.z, radius: 1.2 } satisfies Hotspot
    }
    // 泡在内湾浅水里：可以摸一摸水面上漂着的螃蟹、虾和贝壳
    if (player.swimming && seabed.inBed(player.x, player.z)) {
      return { kind: 'shell', id: 'shell', label: '捡贝壳', x: player.x, z: player.z, radius: 1.2 } satisfies Hotspot
    }
    const nearby = resolveInteraction(player, animals, exhibits)
    if (nearby?.kind === 'fishing' || nearby?.kind === 'wishing') return nearby
    const special = extension.gulls.hotspot(player) ?? extension.residents.hotspot(player)
    if (special) return special
    if (nearby && nearby.kind !== 'landmark') return nearby
    // 站在直升机旁边（村里的停机坪或外岛停机点）：按 E 驾驶
    if (Math.hypot(player.x - world.helicopter.position.x, player.z - world.helicopter.position.z) < 4.6) {
      return { kind: 'heli', id: 'heli', label: FLIGHT.heli.label,
        x: world.helicopter.position.x, z: world.helicopter.position.z, radius: 4.6 } satisfies Hotspot
    }
    // 站在码头岸上：按 E 上船（泊位决定哪条船）。
    const berth = sailing.nearbyDock()
    if (berth) return { kind: 'dock', id: berth.id, label: SAILING.boardLabel,
      x: berth.land.x, z: berth.land.z, radius: SAILING.boardingRadius } satisfies Hotspot
    return nearby
  }
  function startFishing() {
    const { x, z } = FISHING.place
    if (player.airborne || !motion.teleport({ x,z })) return
    controls.clear()
    if (document.pointerLockElement === canvas) document.exitPointerLock()
    player.sitting = true
    player.height = 0.30
    player.facing = Math.atan2(FISHING.float.x-player.x,FISHING.float.z-player.z)
    orbit.aim(null,{ yaw:player.facing+Math.PI, pitch:FISHING.pitch })
    canvas.focus({ preventScroll:true })
    fishing.cast()
  }
  function interact() {
    if (transitionLocked || panelOpen || tracker.hasOpen()) return
    if(scope.active){scope.close();return}
    if(fishing.active){pastimes.reel();return}
    if (activity.mode === 'sunset') { options.onActivityRequest('leave-sunset'); return }
    const hotspot = getInteraction()
    if (!hotspot) {
      if(activity.mode==='lookout')options.onActivityRequest('leave-lookout')
      return
    }
    if (hotspot.kind === 'fishing') { startFishing(); return }
    if (hotspot.kind === 'wishing') pastimes.chooseWish()
    if (hotspot.kind==='telescope') {
      if(document.pointerLockElement===canvas)document.exitPointerLock()
      void scope.open().catch(()=>options.onQuality('望远镜细节暂不可用。'))
      return
    }
    if (hotspot.kind==='dock'){options.onActivityRequest(player.sailing?'dock':'board');return}
    if (hotspot.kind === 'heli') {
      if (flight.active) return
      motion.clear()
      canvas.focus({ preventScroll: true })
      flight.toggle()
      options.onFlightNotice(FLIGHT.heli.start)
      return
    }
    if (hotspot.kind === 'dolphin') {
      const dolphin = seabed.nearestDolphin(player.x, player.z)
      if (dolphin) {
        seabed.pet(dolphin)
        options.play('greeting', { pitch: 1.18 })
        options.onQuality('海豚转了个圈，蹭了蹭你的手。')
      }
      return
    }
    if (hotspot.kind === 'shell') {
      const got = seabed.pick(player.x, player.z)
      if (got) {
        const total = addItem(got)
        options.onQuality(`你从水里摸到了${got}（背包：${got}×${total}）`)
      } else {
        options.onQuality('水里晃了晃，什么也没摸到。')
      }
      return
    }
    if (hotspot.kind === 'shop' && hotspot.id === 'shop-store') {
      const snack = SHOP_SNACKS[Math.floor(Math.random() * SHOP_SNACKS.length)]
      const total = addItem(snack)
      options.onQuality('你拿了一' + snack + '，放进背包（' + snack + '×' + total + '）。')
      return
    }
    if (hotspot.kind === 'shop' && hotspot.id === 'shop-fortune') {
      if (skyNight > 0.5) { options.onQuality('算子铺已经打烊，门口挂着「白日再来」。'); return }
      options.onQuality('先生掐了掐指头：' + SHOP_FORTUNES[Math.floor(Math.random() * SHOP_FORTUNES.length)])
      return
    }
    if (hotspot.kind === 'trampoline') {
      // 这里只提示按 H 起蹦，E 不再做任何事
      return
    }
    if (hotspot.kind === 'cloudgate') {
      if (hotspot.id === 'tramp-gate') {
        motion.teleport({ x: TRAMPOLINE.x, z: TRAMPOLINE.z }, 0.9)
        options.onQuality('光圈把你送到了蹦床上。')
      } else if (hotspot.id === 'cloud-gate-up') {
        motion.teleport({ x: SKY_ISLAND.x, z: SKY_ISLAND.z + 3.5 }, SKY_ISLAND.top + 0.15)
        options.onQuality('云层把你托了上去。')
      } else {
        motion.teleport({ x: CLOUD_GATE.x, z: CLOUD_GATE.z }, DECK)
        options.onQuality('云缝送你回了栈桥。')
      }
      return
    }
    if (hotspot.kind === 'washer' && hotspot.id === 'firework') {
      if (fireworkLaunch?.()) {
        options.play('wishChime', { pitch: 1.2 })
        options.onQuality('烟花升起来了。')
      } else options.onQuality('上一束还没放完。')
      return
    }
    if (hotspot.kind === 'washer' && hotspot.id === 'npc-farmer') {
      const gift = FARMER_GIFTS[Math.floor(Math.random() * FARMER_GIFTS.length)]
      const total = addItem(gift)
      options.onQuality('果农塞给你一份' + gift + '（背包：' + gift + '×' + total + '）')
      return
    }
    if (hotspot.kind === 'washer' && hotspot.id === 'npc-pilot') {
      options.onQuality(NPC_DIALOGUE.pilot.say[0])
      return
    }
    if (hotspot.kind === 'washer') {
      options.play('greeting', { pitch: 1.05 })
      const line = NPC_DIALOGUE.washer.say[Math.floor(Math.random() * NPC_DIALOGUE.washer.say.length)]
      const total = addItem('洗好的衣裳')
      options.onQuality(line + '（背包：洗好的衣裳×' + total + '）')
      return
    }
    if (hotspot.kind === 'pick') {
      const name = (hotspot as { title?: string }).title ?? '东西'
      const total = addItem(name)
      options.onQuality('摘到了' + name + '（背包：' + name + '×' + total + '）')
      return
    }
    if (hotspot.kind === 'stargaze') {
      // 山顶望远镜：直接进 scope 的放大视角，瞄准哪个星座就显示哪个星座的介绍
      if (skyNight <= 0.55) { options.onQuality(SKY.daytimeNote); return }
      void scope.open({ eye: SKY_EYE, pitch: -0.62, pitchLimit: 1.2 })
        .catch(() => options.onQuality('望远镜细节暂不可用。'))
      return
    }
    if (hotspot.kind === 'cow') {
      options.onQuality('挤好了一桶牛奶。')
    }
    if (hotspot.kind==='chair') {
      const person = motion.player
      if (person.sitting) {
        person.sitting = false
        person.x = hotspot.x + 0.9
        person.z = hotspot.z
        person.height = 0
        person.facing = Math.PI
      } else {
        person.sitting = true
        person.x = hotspot.x
        person.z = hotspot.z
        person.height = Number((hotspot as { note?: string }).note) || 0.35
        person.facing = Math.PI / 2
      }
      return
    }
    if (hotspot.kind==='gull'){extension.gulls.pet(distance=>options.play('gull',{distance}));return}
    if (hotspot.kind==='resident') options.play('greeting',{pitch:0.84+Number(hotspot.id.slice(-1))*0.09})
    if (hotspot.kind==='captain') options.play('greeting',{pitch:0.76})
    if (hotspot.kind==='mayor') {
      options.play('knock')
      secondKnock=window.setTimeout(()=>options.play('knock'),115)
      door=window.setTimeout(()=>{door=0;tracker.open(hotspot)},245)
      return
    }
    if (hotspot.kind === 'lookout' || hotspot.kind === 'sunset') {
      if (!player.airborne) options.onActivityRequest(hotspot.kind)
    } else if (hotspot.kind === 'animal') {
      const animal = animals.nearby(player)
      if (animal) {
        animals.pet(animal)
        // 音效库里只有 cat / dog 两个，狐狸借猫的、狮子借狗的
        const species = animal.resident.species
        options.play(species === 'dog' || species === 'lion' ? 'dog' : 'cat')
      }
    } else tracker.open(hotspot)
  }
  const controls = createControls({
    canvas, motion, orbit, sailing, flight,
    canFly: () => !fishing.active && !panelOpen && !tracker.hasOpen() && !transitionLocked && !activity.mode && !scope.active && !door,
    flightEnabled: () => options.settings().flight,
    canJump: () => !fishing.active && !panelOpen && !tracker.hasOpen() && !transitionLocked && !activity.mode,
    canMove: () => !motion.player.sitting && !fishing.active && !transitionLocked && !menuOpen && !scope.active && (activity.mode === null || activity.mode === 'lookout' || activity.mode==='drive'),
    canLook: () => !transitionLocked && !panelOpen && activity.mode !=='tour',
    canSteer: () => !transitionLocked && !menuOpen && activity.mode==='drive',
    sprintEnabled: ()=>!menuOpen,
    lockPointer: () => !fishing.active && !panelOpen && !scope.active,
    // 左键只在第一人称时锁定；右键两种视角都能锁
    leftLock: () => options.settings().view === 'first' && !fishing.active && !panelOpen && !scope.active,
    specialLook: { active:()=>scope.active,look:scope.look,zoom:scope.zoom },
    onInteract:interact,
    onPick(pointer) {
      if (flight.active || fishing.active || panelOpen || tracker.hasOpen() || activity.mode || transitionLocked) return
      const chosen = isInsideHotspot(player,WISHING.place) ? pastimes.pickWish(pointer,camera) : undefined
      if (!chosen) { pick(pointer);return }
      pastimes.chooseWish(chosen)
      tracker.open(WISHING.place)
    },
  })
  const pick = installExhibitPicking(exhibits, camera, { player, tracker })
  const toPlace = installTravel({ motion, obstacles, sailing }, places, id => {
    flight.reset()
    orbit.setFlight(false)
    updateTravel()
    orbit.setSailing(player.sailing)
    if (id === VILLAGE.id) {
      player.facing = VILLAGE.arrivalYaw + Math.PI
      orbit.center(player.facing)
    }
    orbit.update(player, 0, true)
  })
  return { ...controls, player, places, sailing, flight, tracker, cameraObstacles, activity, getInteraction, scope,
    syncHelicopter, heliRiding: () => heli.riding,
    viewYaw: () => orbit.yaw,
    pastimes,
    stopFishing() {
      fishing.stop()
      player.sitting = false
      player.height = 0
      canvas.focus({ preventScroll:true })
    },
    openCatchRecords() {
      if (!fishing.active) return
      pastimes.showRecords()
      tracker.open(FISHING.place)
    },
    dispose() { controls.dispose();scope.close();window.clearTimeout(door);window.clearTimeout(secondKnock) },
    setPanelOpen(value: boolean, navigationLocked=false) {
      panelOpen=value
      if ((navigationLocked && !menuOpen) || (flight.active && value && !panelOpen)) controls.clear()
      menuOpen=navigationLocked
      if(value && document.pointerLockElement===canvas)document.exitPointerLock()
    },
    setTransition(value: boolean) { transitionLocked = value; if (value) controls.clear() },
    advanceActivity(seconds: number) { if (!transitionLocked) activity.step(seconds) },
    performAction(action: ActivityAction) {
      if (flight.active || fishing.active) return false
      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
      const changed = activity.act(action, reduced)
      if (changed) {
        updateTravel()
        if (action !== 'sunset' || reduced) orbit.update(player, 0, true)
      }
      return changed
    },
    focusPlace(id?: string) { return activity.focusAt(places.find(place => place.hotspot.id === id)) },
    updateFirst(step:number, settings:Settings, reduced:boolean) {
      orbit.setFirstPerson(settings.view === 'first')
      first.update(player,orbit.angles,{enabled:settings.view==='first' && !scope.active,
        step,instant:reduced,bob:settings.bob && !reduced && !flight.active})
      return { blend:first.blend,yaw:first.heading }
    },
    travel(id: string) { return !activity.mode && !fishing.active && toPlace(id) },
  }
}

function installTravel(session: {
  motion: ReturnType<typeof createPlayerMotion>; sailing: ReturnType<typeof createHarborSailing>;
  obstacles: ReturnType<typeof walkingObstacles>
}, places: ReturnType<typeof listHarborPlaces>, onTravel: (id: string) => void) {
  const { motion, obstacles, sailing } = session
  return (id: string) => {
    const place = places.find(item => item.hotspot.id === id)
    if (!place || (place.requiresBoat && !motion.player.sailing)) return false
    const clear = place.requiresBoat
      ? (x: number, z: number) => canSail(x, z, sailing.vessel.yaw)
      : (x: number, z: number) => canWalkAt(x, z, { obstacles, height: 0 })
    const landing = findTravelLanding(place.hotspot, clear)
    if (!landing) return false
    if (place.requiresBoat) sailing.teleport(landing)
    else {
      if (motion.player.sailing) sailing.disembark()
      motion.teleport(landing)
    }
    onTravel(id)
    return true
  }
}

// A frame samples its clocks once, then uses the same light and quality state for each render system.
function createSceneFrame(options: RuntimeOptions, view: {
  scene: T.Scene; camera: T.PerspectiveCamera; output: ReturnType<typeof createPixelOutput>; canvas: HTMLCanvasElement
}, frame: {
  session: ReturnType<typeof installInteraction>; avatar: ReturnType<typeof createTravelAvatar>;
  animate: (elapsed: number, night: number, settings: {
    reflections: boolean; dusk: number; reduced: boolean; weather: WeatherFrame; bank: number; edgeFog: number
  }) => void;
  animals: ReturnType<typeof createHarborAnimals>; forest: ReturnType<typeof addHarborForest>
  mayor: ReturnType<typeof addHarborMayor>
  farm: ReturnType<typeof createFarmLife>
  cherryPetals: ReturnType<typeof createCherryPetals>
  mapleLeaves: ReturnType<typeof createMapleLeaves>
  pandas: ReturnType<typeof createPandas>
  stars: ReturnType<typeof createStarSky>
  swordsman: ReturnType<typeof createSwordsman>
  bambooLeaves: ReturnType<typeof createBambooLeaves>
  seabed: ReturnType<typeof createSeabed>
  shopLife: ReturnType<typeof createShopLife>
  chickens: ReturnType<typeof createChickens>
  penShelters: ReturnType<typeof createPenShelters>
  fireworks: ReturnType<typeof createFireworks>
  willows: ReturnType<typeof addWillows>
  washer: ReturnType<typeof createWasher>
  arctic: ReturnType<typeof createArcticPeople>
  hanfu: ReturnType<typeof createHanfuPeople>
  palacePeople: ReturnType<typeof createPalacePeople>
  helipadNpcs: ReturnType<typeof createHelipadNpcs>
  extension: SceneExtension
  /** 长按空格滑翔 */
  glide: (active: boolean) => void
  /** 落进障碍时把人推出来 */
  unstuck: () => boolean
  /** NPC 走完这一步后，把各自的碰撞盒挪过去 */
  syncActors: () => void
}) {
  let lastFlash = 0
  // 长按空格滑翔：只记录按键状态，真正的减速在 motion 里做
  let spaceHeld = false
  let glideNoticed = false
  const onGlideDown = (event: KeyboardEvent) => { if (event.code === 'Space') spaceHeld = true }
  const onGlideUp = (event: KeyboardEvent) => { if (event.code === 'Space') spaceHeld = false }
  window.addEventListener('keydown', onGlideDown)
  window.addEventListener('keyup', onGlideUp)
  const { session, avatar, animate, animals, forest, extension, mayor, syncActors, farm, cherryPetals, mapleLeaves, pandas, bambooLeaves, stars, swordsman, seabed, shopLife, chickens, penShelters, willows, washer, arctic, hanfu, palacePeople, glide, helipadNpcs, unstuck, fireworks } = frame
  const { player, tracker, places, cameraObstacles, sailing, activity, flight, pastimes } = session
  const { scene, camera, output, canvas } = view
  const marker = createHotspotMarker(scene)
  const projectLabels = createLabelProjection(places, cameraObstacles)
  const light = createLightTransition(options.night)
  const quality = createRenderQuality(options.simplified, options.onQuality)
  const glow = createHarborGlow(scene, options.simplified)
  const wake = createHarborWake(scene)
  let lastHotspot: string | undefined
  let swimming = false
  let paddle = 0
  const flightAudio = createFlightAudio(options.play)
  const draw: SceneTick = (step, elapsed, reduced, frameTime) => {
    const prefs=options.settings()
    reduced ||= prefs.reduced
    session.advanceActivity(activity.mode === 'sunset' ? Math.min(frameTime, 0.25) : step)
    session.update(step)
    if (player.swimming !== swimming) {
      swimming = player.swimming
      options.onFlightNotice(swimming ? FLIGHT.ui.swim : FLIGHT.ui.shore)
    }
    if (player.swimming) {
      paddle += step
      if (paddle >= SWIM.paddleInterval) {
        paddle = 0
        if (player.speed > MOVEMENT.movementThreshold) {
          options.play('swim', { volume: Math.min(0.85, 0.35 + player.speed * 0.14) })
        }
      }
    } else paddle = 0
    quality.sample(frameTime)
    const night = light.step(Math.min(frameTime, 0.25))
    const dusk = activity.dusk
    const first=session.updateFirst(step,prefs,reduced)
    const weather=extension.weather.update(prefs.weather,camera,{ step,quality:prefs.quality,tier:quality.tier,reduced })
    const storm=Math.max(weather.rain,weather.snow)
    const low=prefs.quality==='low'
    const motionTime=reduced?0:elapsed
    const fishingArm = pastimes.update(player,{ step,frameTime,time:motionTime,night,low:low||!quality.flags.cloth,
      reduced,weather:prefs.weather })
    session.syncHelicopter(step, first.blend > 0.5)
    avatar(player, { fishingArm, settings: prefs, rain: weather.rain, first: first.blend, seconds: step,
      mounted: session.heliRiding(), reduced,
      simplified: !quality.flags.cloth, yaw: first.yaw, flying: flight.active, bank: flight.bank })
    extension.residents.update(player,step,{night,rain:weather.rain,snow:weather.snow,reduced,
      limit:low?3:!quality.flags.residents?4:Infinity})
    mayor.update(night, weather.rain, step, reduced)
    syncActors()
    extension.gulls.update(player,{time:motionTime,step,rain:weather.rain,snow:weather.snow,night,reduced,low:low||!quality.flags.gulls},
      distance=>options.play('gull',{distance}))
    extension.islands.update(motionTime,{weather:storm,tier:low?3:quality.tier})
    extension.seaLife.update(motionTime, { reduced: reduced || low })
    extension.chimney.update(step, reduced || low)
    farm.update(step, { night: night > 0.5, reduced: reduced || low })
    cherryPetals.update(step, reduced || low)
    mapleLeaves.update(step, reduced || low)
    pandas.update(step, { night: night > 0.5, reduced: reduced || low })
    bambooLeaves.update(step, reduced || low)
    swordsman.update(step, reduced)
    stars.update(step, { night, clear: weather.rain < 0.2 && weather.snow < 0.2, reduced: reduced || low })
    seabed.update(step, reduced || low)
    shopLife.update(step, night, reduced)
    chickens.update(step, reduced || low, weather.rain)
    // 滑翔：收起斗篷后在空中长按空格；按住时 WASD 可以带方向
    const canGlide = spaceHeld && !player.sailing && !player.swimming && player.airborne
    glide(canGlide)
    if (canGlide && !glideNoticed) { glideNoticed = true; options.onQuality('滑翔中——按住空格保持滑翔，WASD 调整方向。') }
    if (!canGlide) glideNoticed = false
    // 兜底：万一还是落进了障碍里，每秒检查一次把人推出来
    if (!player.sitting && !player.sailing && !player.swimming) unstuck()
    penShelters.update(weather.rain)
    fireworks.update(step)
    willows.update(step, reduced)
    washer.update(step, reduced, night)
    arctic.update(step, night, weather.rain < 0.2 && weather.snow < 0.2, reduced)
    hanfu.update(step, night, weather.rain < 0.2 && weather.snow < 0.2, reduced)
    palacePeople.update(step, night, weather.rain < 0.2 && weather.snow < 0.2, reduced)
    helipadNpcs.update(step, reduced)
    // 雷阵雨：闪电的起跳那一帧打一声雷
    const flash = weather.flash ?? 0
    if (flash > lastFlash + 0.4) options.thunder?.()
    lastFlash = flash
    skyNight = night
    extension.ambience(player, { mode: activity.mode, speed: sailing.vessel.speed, weather, mobile: options.simplified,
      flightWind: flightAudio(step, flight.active, flight.speed) })
    extension.scope.update(night>0.5,storm)
    animate(motionTime, night, { reflections: quality.flags.reflections, dusk, reduced, weather,
      bank: reduced ? 0 : sailing.vessel.bank, edgeFog: flight.active ? flightEdge(player) * FLIGHT.edgeFog : 0 })
    glow(Math.max(night * (1 - dusk), dusk * 0.86, storm*0.36), motionTime, { ...quality.flags, pulse:pastimes.beam })
    animals.update(player, step, { night: night > 0.5 || weather.rain>0.54, reduced, scenery: quality.flags.scenery })
    forest(player, dusk, { trees: quality.flags.scenery, shadows: quality.flags.shadows })
    wake(step, sailing.vessel, player.sailing && quality.flags.wake && !reduced && !low)
    tracker.update(player)
    const hotspot = session.getInteraction()
    const current = hotspot && `${hotspot.kind}:${hotspot.id}`
    if ((current ?? undefined) !== lastHotspot) {
      lastHotspot = current ?? undefined
      marker.setHotspot(hotspot)
      options.onHotspot(hotspot)
    }
    if (hotspot?.kind === 'animal' || hotspot?.kind==='resident' || hotspot?.kind==='gull') marker.setHotspot(hotspot)
    marker.setNight(night, quality.flags.halos)
    output.draw(scene, camera, {player,align: first.blend<0.35 && !extension.scope.active})
    options.onHintPosition(marker.project(camera))
    options.onLabels(activity.mode || flight.active || pastimes.fishing.active ? [] : projectLabels(camera, player, { width: canvas.width, height: canvas.height, elapsed }))
  }
  return { draw, setNight: light.setNight }
}

function setupRenderSurface({ mount, onError }: RuntimeOptions, view: {
  renderer: T.WebGLRenderer; camera: T.PerspectiveCamera; output: ReturnType<typeof createPixelOutput>
}, controls: ReturnType<typeof createControls>) {
  const { renderer: { domElement: canvas }, camera, output } = view
  const resize = () => {
    const width = Math.max(MIN_RENDER_DIMENSION, mount.clientWidth)
    const height = Math.max(MIN_RENDER_DIMENSION, mount.clientHeight)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    output.resize(width, height)
  }
  const observer = new ResizeObserver(resize)
  const listeners = new AbortController()
  const { signal } = listeners
  canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); onError() }, { signal })
  window.addEventListener('blur', controls.clear, { signal })
  document.addEventListener('visibilitychange', controls.clear, { signal })
  canvas.tabIndex = 0
  canvas.setAttribute('aria-label', '渔港场景，拖动环绕人物，使用方向键移动')
  mount.append(canvas)
  observer.observe(mount)
  resize()
  return () => { listeners.abort(); observer.disconnect() }
}

// Register resources in creation order so partial startup can release them in reverse order.
function startHarbor(options: RuntimeOptions, view: { renderer: T.WebGLRenderer; scene: T.Scene },
  cleanup: (() => void)[]) {
  const { renderer, scene } = view
  const camera = new T.PerspectiveCamera(ORBIT.fov, 1, ORBIT.near, ORBIT.far)
  const output = createPixelOutput(renderer,()=>options.settings().quality)
  cleanup.push(output.dispose)
  const kit = createModelKit()
  const animateAtmosphere = addAtmosphere(scene)
  const world = addWorld(scene, kit)
  addEvalStation(scene, kit)
  const forest = addHarborForest(scene, kit)
  const captain = addHarborCaptain(scene, { kit, vessel: world.vessel })
  const exhibitSet = addExhibits(scene, kit, options.artworks)
  cleanup.push(exhibitSet.dispose)
  const signObstacles = addHarborSigns(scene, kit)
  const canvas = renderer.domElement
  const pastimes = createHarborPastimes(scene,kit,{ play:options.play, notice:options.onQuality,
    fishing:options.onFishing, landed:(species)=>{ addItem(species.name); options.onOpen(FISHING.place) } })
  const propObstacles = [...exhibitSet.obstacles, ...signObstacles]
  const obstacles = [...walkingObstacles(propObstacles, world.treeTops), pastimes.altar]
  // 村长要按障碍表判断能不能走（不然会走进自己屋里），传副本避免把 NPC 跟随盒算进去。
  const mayor = addHarborMayor(scene, kit, [...obstacles])
  const animals = createHarborAnimals({ scene, kit, obstacles: [...obstacles], simplified: options.simplified })
  // 牧场上的羊、牛和牧羊犬，以及岬角樱花树飘下来的花瓣、村长屋前的野花。
  // 这些都是会动 / 只有几十厘米高的装饰，全部加在 scene 上，不进静态世界。
  const farm = createFarmLife(scene, kit, (x, z) => canWalkAt(x, z, { obstacles, height: 0, radius: 0.3 }))
  const cherryPetals = createCherryPetals(scene)
  const mapleLeaves = createMapleLeaves(scene)
  // 大枫树本身也放运行时：树冠会探到海面之上，进了烘焙会在水面上留"天面"。
  addMapleTree(scene, kit)
  // 岬角西南角的竹林 + 三只大熊猫：竹子细，进烘焙会在竹林里戳出一堆 6 米高的格子。
  const bamboo = addBamboo(scene, kit)
  const pandas = createPandas(scene, kit, bamboo.stalks)
  const bambooLeaves = createBambooLeaves(scene)
  // 夜空：流星与十二星座；山顶那台望远镜；后山林径的护卫「宁归一」。
  const stars = createStarSky(scene)
  addStargazerTelescope(scene, kit)
  // 内湾浅水：螃蟹、虾、贝壳 + 两只可以摸的海豚
  const seabed = createSeabed(scene, kit)
  // 顶层平台的三块菜田（白菜/萝卜/辣椒/草莓/西瓜）
  addVegetablePlots(scene, kit)
  // 果树一排 + 围栏外六棵椰子树
  addOrchard(scene, kit)
  // 两间铺子的夜间状态：吊灯、打瞌睡的店员、'白日再来' 的告示
  const shopLife = createShopLife(scene, kit)
  // 平台上四处走的小鸡
  const chickens = createChickens(scene, kit)
  // 北侧栅栏边的一排松树 + 松鼠
  addPines(scene, kit)
  // 下雨时羊圈/牛圈/鸡圈的棚子
  const penShelters = createPenShelters(scene, kit)
  // 海上烟花点
  const fireworks = createFireworks(scene)
  fireworkLaunch = () => fireworks.launch()
  // 西岸的柳树（枝条随风摆）和村长小屋旁的小秋千
  const willows = addWillows(scene, kit)
  // 西岸沙滩上洗衣服的老妇人
  const washer = createWasher(scene, kit)
  // 北极街区的居民
  const arctic = createArcticPeople(scene, kit)
  // 四合院街区的居民（汉服）
  const hanfu = createHanfuPeople(scene, kit)
  // 紫宫殿街区的侍从
  const palacePeople = createPalacePeople(scene, kit)
  // 停机坪平台上的果农与飞行员
  const helipadNpcs = createHelipadNpcs(scene, kit)
  const swordsman = createSwordsman(scene, kit)
  createCottageFlora(scene, kit)
  const extension=prepareSceneExtension({scene,camera,kit},
    {obstacles:[...obstacles],animals,onChange:options.onScope,setAmbience:options.setAmbience})
  // NPC 的碰撞：每个村民、村长各挂一个跟随碰撞盒，玩家撞不过去。
  // 注意传给动物和村民的障碍表都是副本——不然他们会把自己的盒子当成墙，原地卡住。
  const actors = [{ pose: mayor.pose, avatar: mayor.avatar }, { pose: swordsman.pose, avatar: swordsman.avatar },
    ...extension.residents.followers]
    .map(item => ({ ...item, follow: followObstacle(ACTOR_RADIUS) }))
  for (const { follow } of actors) obstacles.push(follow.obstacle)
  const syncActors = () => {
    for (const { pose, avatar, follow } of actors) {
      if (avatar.visible) follow.move(pose)
      else follow.hide()
    }
  }
  syncActors()
  const session = installInteraction(options, camera, {
    exhibits: exhibitSet.exhibits, canvas, propObstacles, vessel: world.vessel, yacht: world.yacht,
    helicopter: world.helicopter,
    animals, obstacles, extension, flightVolumes: world.flightVolumes, pastimes, seabed,
  })
  cleanup.push(session.dispose)
  const avatar = createTravelAvatar(scene,kit)
  const { draw, setNight } = createSceneFrame(options, { scene, camera, output, canvas }, {
    session, avatar, forest, animals,extension, mayor, syncActors, farm, cherryPetals, mapleLeaves, pandas, bambooLeaves, stars, swordsman, seabed, shopLife, chickens, penShelters, fireworks, willows, washer, arctic, hanfu, palacePeople, helipadNpcs,
    glide: (active: boolean) => session.glide(active),
    unstuck: () => session.unstuck(),
    animate(elapsed, night, settings) {
      world.animate(elapsed, settings.bank)
      captain(elapsed, night, settings.reduced, settings.weather.rain)
      animateAtmosphere(elapsed, night, settings)
    },
  })
  const loop = createLoop(draw)
  cleanup.push(loop.stop)
  cleanup.push(setupRenderSurface({ ...options, onError() { loop.stop(); options.onError() } },
    { renderer, camera, output }, session))
  draw(0, 0, true, 0)
  loop.start()
  let baked: (()=>string|undefined)|undefined
  return { ...session, setNight, dismissPanel: session.tracker.dismiss,
    async bakeMap() {
      const module=await import('../harbor_expansion/harbor-map-bake')
      baked ??= module.captureHarborMap(renderer,scene)
      return baked()
    },
  }
}

export function mountHarbor(options: RuntimeOptions) {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('webgl2', { antialias: false, powerPreference: 'low-power' })
  if (!context) throw new Error('WebGL 2 unavailable')
  const renderer = new T.WebGLRenderer({ canvas, context })
  const scene = new T.Scene()
  const cleanup: (() => void)[] = []
  const dispose = () => {
    for (const release of cleanup.reverse()) release()
    disposeScene(scene)
    renderer.dispose()
    renderer.forceContextLoss()
    canvas.remove()
  }
  try {
    const controls = startHarbor(options, { renderer, scene }, cleanup)
    return { ...controls, focus: () => canvas.focus({ preventScroll: true }), dispose }
  } catch (error) {
    dispose()
    throw error
  }
}
