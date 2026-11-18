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
import { createFlightMotion } from '../harbor_flight/harbor-flight-motion'
import { createFlightAudio } from '../harbor_flight/harbor-flight-audio'
import { createFlightSpace, flightEdge } from '../harbor_flight/harbor-flight-space'
import { FLIGHT } from '../harbor_flight/harbor-flight-config'
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
import { LOOKOUT, VILLAGE } from './harbor_exploration_config'
import { createHotspotMarker } from './harbor_hotspot_marker'
import type { HintPosition } from './harbor_hotspot_marker'
import { artHotspot, createHotspotTracker, findHarborHotspot, isInsideHotspot, listHarborPlaces } from './harbor_hotspots'
import type { Exhibit, Hotspot } from './harbor_hotspots'
import { canWalkAt, DECK } from './harbor_layout'
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
import { addWorld, HARBOR_STRUCTURES, TERRACE_ROOFS, WORLD_OBSTACLES } from './harbor_world'

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
  setAmbience: SetAmbience
  onError: () => void
}

const INTERNAL_HEIGHT = 400
const INTERNAL_WIDTH = 720
const PIXEL_QUALITY = { high:1, medium:0.83, low:0.65 } as const
const EXHIBIT_CAMERA_HEIGHT = 2.45
const MIN_RENDER_DIMENSION = 1
const CAPTAIN_COLLISION_RADIUS = 0.26

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
  exhibits: readonly Exhibit[]; canvas: HTMLCanvasElement; propObstacles: Footprint[]; vessel: T.Group
  animals: ReturnType<typeof createHarborAnimals>; obstacles: ReturnType<typeof walkingObstacles>
  extension: SceneExtension
  pastimes: ReturnType<typeof createHarborPastimes>
  flightVolumes: ReturnType<typeof addWorld>['flightVolumes']
}

// 落在灯塔瞭望平台上：环形平台半径与 LOOKOUT 一致。
function isOverLookoutRing(point: { x: number; z: number }) {
  const ring = Math.hypot(point.x - LOOKOUT.center.x, point.z - LOOKOUT.center.z)
  return ring >= LOOKOUT.lanternRadius && ring <= LOOKOUT.outerRadius
}

// Navigation input shares one lock with panels and activities, including travel during a fade.
function installInteraction(options: RuntimeOptions, camera: T.PerspectiveCamera, world: NavigationWorld) {
  const { exhibits, canvas, propObstacles, vessel, animals, obstacles, extension } = world
  const { scope }=extension
  const { pastimes } = world
  const { fishing } = pastimes
  const tracker = createHotspotTracker({ open: options.onOpen, leave: options.onLeave })
  const cameraObstacles = [...HARBOR_STRUCTURES, EVAL_STATION_OBSTACLE, ...TERRACE_HOUSES, ...TERRACE_SOLIDS, pastimes.altar,
    ...propObstacles.map(footprint => ({ footprint, height: EXHIBIT_CAMERA_HEIGHT }))]
  const motion = createPlayerMotion(obstacles)
  const { player } = motion
  // 由活动模块在创建后接管：降落平台等同于「登塔」，这样下塔方式与原来一致。
  let landOnPlatform: () => boolean = () => false
  const flight = createFlightMotion(player, createFlightSpace(obstacles, [
    ...cameraObstacles, ...world.flightVolumes, ...FOREST_FLIGHT_VOLUMES, ...HILL_FLIGHT_VOLUMES,
  ]), { change: options.onFlight, notice: options.onFlightNotice,
    land: (point: { x: number; y: number; z: number }) => {
      if (isOverLookoutRing(point)) return landOnPlatform()
      return canWalkAt(point.x, point.z, { obstacles: [], height: 0 })
        ? motion.teleport(point, point.y)
        : motion.swim(point)
    },
    recover: motion.respawn })
  const sailing = createHarborSailing(vessel, player, () => extension.weather.frame.ice)
  const orbit = createOrbitCamera(camera, cameraObstacles)
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
    if(activity.mode)return null
    const nearby = resolveInteraction(player, animals, exhibits)
    if (nearby?.kind === 'fishing' || nearby?.kind === 'wishing') return nearby
    return extension.gulls.hotspot(player) ?? extension.residents.hotspot(player) ?? nearby
  }
  function startFishing() {
    const { x, z } = FISHING.place
    if (player.airborne || !motion.teleport({ x,z })) return
    controls.clear()
    if (document.pointerLockElement === canvas) document.exitPointerLock()
    player.facing = Math.atan2(FISHING.float.x-player.x,FISHING.float.z-player.z)
    orbit.aim(null,{ yaw:player.facing+Math.PI, pitch:FISHING.pitch })
    canvas.focus({ preventScroll:true })
    fishing.cast()
  }
  function interact() {
    if (transitionLocked || panelOpen || tracker.hasOpen()) return
    if(scope.active){scope.close();return}
    if(fishing.active){pastimes.reel();return}
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
    if (hotspot.kind==='dock'){options.onActivityRequest('dock');return}
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
        person.height = Number((hotspot as { note?: string }).note) || 0.72
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
      if (animal) { animals.pet(animal); options.play(animal.resident.species) }
    } else tracker.open(hotspot)
  }
  const controls = createControls({
    canvas, motion, orbit, sailing, flight,
    canFly: () => !fishing.active && !panelOpen && !tracker.hasOpen() && !transitionLocked && !activity.mode && !scope.active && !door,
    flightEnabled: () => options.settings().flight,
    canJump: () => !fishing.active && !panelOpen && !tracker.hasOpen() && !transitionLocked && !activity.mode,
    canMove: () => !motion.player.sitting && !fishing.active && !transitionLocked && !menuOpen && !scope.active && (activity.mode === null || activity.mode === 'lookout' || activity.mode==='drive'),
    canLook: () => !transitionLocked && !panelOpen && (activity.mode !== 'sunset' && activity.mode !=='tour'),
    canSteer: () => !transitionLocked && !menuOpen && activity.mode==='drive',
    sprintEnabled: ()=>!menuOpen,
    lockPointer: () => options.settings().view==='first' && !fishing.active && !panelOpen && !scope.active,
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
    viewYaw: () => orbit.yaw,
    pastimes,
    stopFishing() { fishing.stop(); canvas.focus({ preventScroll:true }) },
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
      first.update(player,orbit.angles,{enabled:settings.view==='first' && activity.mode!=='sunset' && !scope.active,
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
  extension: SceneExtension
}) {
  const { session, avatar, animate, animals, forest, extension, mayor } = frame
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
    avatar(player, { fishingArm, settings: prefs, rain: weather.rain, first: first.blend, seconds: step, reduced,
      simplified: !quality.flags.cloth, yaw: first.yaw, flying: flight.active, bank: flight.bank })
    extension.residents.update(player,step,{night,rain:weather.rain,reduced,limit:low?3:!quality.flags.residents?4:Infinity})
    mayor(night, weather.rain, step, reduced)
    extension.gulls.update(player,{time:motionTime,step,rain:weather.rain,snow:weather.snow,night,reduced,low:low||!quality.flags.gulls},
      distance=>options.play('gull',{distance}))
    extension.islands.update(motionTime,{weather:storm,tier:low?3:quality.tier})
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
  const mayor = addHarborMayor(scene, kit)
  const captain = addHarborCaptain(scene, { kit, vessel: world.vessel })
  const exhibitSet = addExhibits(scene, kit, options.artworks)
  cleanup.push(exhibitSet.dispose)
  const signObstacles = addHarborSigns(scene, kit)
  const canvas = renderer.domElement
  const pastimes = createHarborPastimes(scene,kit,{ play:options.play, notice:options.onQuality,
    fishing:options.onFishing, landed:()=>options.onOpen(FISHING.place) })
  const propObstacles = [...exhibitSet.obstacles, ...signObstacles]
  const obstacles = [...walkingObstacles(propObstacles, world.treeTops), pastimes.altar]
  const animals = createHarborAnimals({ scene, kit, obstacles, simplified: options.simplified })
  const extension=prepareSceneExtension({scene,camera,kit},{obstacles,animals,onChange:options.onScope,setAmbience:options.setAmbience})
  const session = installInteraction(options, camera, {
    exhibits: exhibitSet.exhibits, canvas, propObstacles, vessel: world.vessel, animals, obstacles, extension,
    flightVolumes: world.flightVolumes, pastimes,
  })
  cleanup.push(session.dispose)
  const avatar = createTravelAvatar(scene,kit)
  const { draw, setNight } = createSceneFrame(options, { scene, camera, output, canvas }, {
    session, avatar, forest, animals,extension, mayor,
    animate(elapsed, night, settings) {
      world.animate(elapsed, settings.bank)
      captain(elapsed, settings.reduced)
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
