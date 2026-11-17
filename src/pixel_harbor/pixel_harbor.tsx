import { useEffect, useRef } from 'react'
import type { CSSProperties, RefObject } from 'react'
import { HarborActivityHud } from './harbor-activity-hud'
import { HarborCaptainDialogue } from './harbor-captain-dialogue'
import type { HarborArtwork } from './harbor_art'
import { HarborArtworkDialog } from './harbor_artwork_dialog'
import type { HarborDetail } from './harbor_artwork_dialog'
import { HarborJoystick } from './harbor_joystick'
import type { Hotspot } from './harbor_hotspots'
import { HOTSPOT_MIN_FONT_PX } from './harbor_interaction_config'
import { HARBOR_LIGHTING } from './harbor_lighting_config'
import { HarborPlaceLabels } from './harbor_place_ui'
import { useHarborScene } from './harbor_scene_session'
import { useSceneTravel } from './harbor_scene_travel'
import { HarborMainMenu } from '../harbor_shell/harbor-main-menu'
import type { HarborAudio } from '../harbor_shell/harbor-audio'
import type { Settings } from '../harbor_shell/harbor-settings'
import { HarborLoading } from '../harbor_shell/harbor-entry'
import { config } from '../site-config'
import { PLACE_LABELS } from './harbor_places_config'
import { HarborGuidance } from './harbor-guidance'
import { HarborFlightHud } from '../harbor_flight/harbor-flight-hud'
import { FLIGHT } from '../harbor_flight/harbor-flight-config'
import { SCOPE } from '../harbor_expansion/harbor-scope-config'
import { HarborFishingHud } from '../harbor_pastimes/harbor-fishing-hud'
import { HarborCatchPanel } from '../harbor_pastimes/harbor-catch-panel'
import { HarborWishPanel } from '../harbor_pastimes/harbor-wish-panel'
import './pixel_harbor.css'
import '../harbor_pastimes/harbor-pastimes.css'
import '../harbor_shell/harbor-interactivity.css'

type Scene = ReturnType<typeof useHarborScene>
type Shell = { onRead:()=>void; settings:Settings; updateSettings:(changes:Partial<Settings>)=>void; audio:HarborAudio; warning: string }

function resolveDetail(hotspot: Hotspot, artworks: HarborArtwork[]): HarborDetail | undefined {
  switch (hotspot.kind) {
    case 'portfolio': return { artworks }
    case 'notice': return { label: PLACE_LABELS.places.notice.title, note: PLACE_LABELS.places.notice.blurb }
    case 'eval': return { evaluation: true }
    case 'landmark': return hotspot
    case 'resident': return { label: hotspot.title, note: hotspot.note ?? '待填写' }
    case 'sea': return { label: hotspot.title, note: hotspot.note }
    case 'art': {
      const artwork = artworks.find(item => item.id === hotspot.id)
      return artwork ? { artwork } : undefined
    }
  }
}

function getHarborStyle(night: boolean) {
  const palette = night ? HARBOR_LIGHTING.ui.night : HARBOR_LIGHTING.ui.morning
  const panel = HARBOR_LIGHTING.ui.nightPanel
  return {
    '--harbor-hint-min-font': `${HOTSPOT_MIN_FONT_PX}px`, '--harbor-light-fade': `${HARBOR_LIGHTING.transitionSeconds}s`,
    '--scene-paper': palette.paper, '--scene-ink': palette.ink, '--scene-border': palette.border,
    '--scene-label': palette.label, '--scene-label-ink': palette.labelInk, '--scene-label-border': palette.labelBorder,
    '--scene-hint': palette.hint, '--scene-hint-ink': palette.hintInk, '--scene-overlay': palette.overlay,
    '--scene-night-control': panel.control, '--scene-night-surface': panel.surface, '--scene-night-link': panel.link,
    '--scene-night-control-border': panel.controlBorder, '--scene-night-featured-border': panel.featuredBorder,
  } as CSSProperties
}

function HarborHeader({ scene }: { scene: Scene }) {
  return (
    <header className="harbor-header">
      <div className="harbor-title"><span aria-hidden="true">✳</span><h1 id="harbor-title">{config.siteTitle}</h1></div>
      {scene.status === 'ready' && <div className="harbor-actions">
        <button type="button" aria-label="打开渔港菜单" aria-expanded={Boolean(scene.panels.panel)}
          disabled={Boolean(scene.panels.panel) || scene.fishing !== 'idle'} onClick={()=>scene.panels.open('menu')}>☰ 菜单</button>
      </div>}
    </header>
  )
}

function HarborInteraction({ scene, hint, flightEnabled }: { scene: Scene; hint: RefObject<HTMLDivElement | null>; flightEnabled: boolean }) {
  const { runtime, panels, hotspot, flying, activity: { mode } } = scene
  if (scene.fishing !== 'idle') return <HarborFishingHud phase={scene.fishing}
    onAct={()=>runtime?.interact()} onStop={()=>runtime?.stopFishing()} onRecords={()=>runtime?.openCatchRecords()} />
  return <>
    {mode !== 'tour' && mode !== 'sunset' && !scene.scope && <div className="harbor-controls">
      <p className="harbor-desktop-help">{mode==='drive' ? <>W/↑ 加速 · S/↓ 倒车 · A/D 转向</> :
        flying ? FLIGHT.ui.keys : <><kbd>WASD</kbd> 移动 · <kbd>V</kbd> 视角 · <kbd>M</kbd> 地图{flightEnabled && <> · <kbd>F</kbd> 飞行</>}</>}</p>
      <HarborJoystick onMove={(x, z) => runtime?.moveAnalog(x, z)} />
      <p className="harbor-touch-help">滑动环视</p>
    </div>}
    {!mode && !panels.panel && !flying && <button className="harbor-jump" type="button" onClick={() => runtime?.jump()}>跳跃</button>}
    {!mode && !panels.panel && !scene.scope && (flightEnabled || flying) && <HarborFlightHud runtime={runtime} active={flying} />}
    {mode==='drive' && !panels.panel && <button className="harbor-jump" type="button"
      onPointerDown={event=>{event.currentTarget.setPointerCapture(event.pointerId);runtime?.setThrottle(true)}}
      onLostPointerCapture={()=>runtime?.setThrottle(false)}>加速</button>}
    <div className="harbor-hotspot" ref={hint} aria-live="polite">
      {hotspot && !panels.panel && <button type="button" onClick={() => runtime?.interact()}>
        <span className="harbor-hotspot-key">按 <kbd>E</kbd></span>
        {hotspot.kind === 'art' ? `查看《${hotspot.label}》`
          : hotspot.kind === 'landmark' ? `查看${hotspot.label}` : hotspot.label}
      </button>}
    </div>
  </>
}

function ScenePanel({ scene, shell, travelControls }: {
  scene: Scene; shell: Shell; travelControls: ReturnType<typeof useSceneTravel>
}) {
  const { panel, close, dismiss } = scene.panels
  if (!panel || scene.status !== 'ready') return null
  const places = scene.runtime?.places ?? []
  function travelById(id: string) {
    const place = places.find(candidate => candidate.hotspot.id === id)
    if (place) void travelControls.travel(place)
  }
  const exits = { closing: panel.closing, onClose: close, onExited: dismiss }
  const { selection } = panel
  const mode=scene.activity.mode
  const returnBoat=mode==='drive'?()=>travelControls.action('return-drive'):mode==='tour'?()=>travelControls.action('return-tour'):undefined
  if (typeof selection==='string') return <HarborMainMenu
    initial={selection==='map'?'map':selection==='help'?'help':'settings'} {...exits} onRead={shell.onRead}
    audio={shell.audio} settings={shell.settings} update={shell.updateSettings} night={scene.lighting.night}
    toggleNight={scene.lighting.toggle} places={places} player={scene.runtime?.player}
    capture={scene.runtime?.bakeMap} onTravel={travelControls.travel} onGuide={travelControls.guide} onReturn={returnBoat}
    onCenter={()=>scene.runtime?.center()} onRecover={()=>{
      if(returnBoat){returnBoat();return}
      if(mode==='lookout') travelControls.action('leave-lookout')
      else if(mode==='sunset') travelControls.action('leave-sunset')
      else { close();scene.runtime?.respawn() }
    }} />
  const pastimes = scene.runtime?.pastimes
  if (selection.kind === 'fishing' && pastimes)
    return <HarborCatchPanel result={pastimes.result} records={pastimes.catches()} {...exits} />
  if (selection.kind === 'wishing' && pastimes)
    return <HarborWishPanel records={pastimes.wishes()} chosen={pastimes.chosenWish}
      actions={{ release:pastimes.releaseWish, remove:pastimes.deleteWish, clear:pastimes.clearWishes }} {...exits} />
  if (selection.kind === 'captain') return <HarborCaptainDialogue places={places} visited={scene.activity.history.places}
    onTour={() => travelControls.action('tour')} onDrive={()=>travelControls.action('drive')}
    onCharacter={()=>shell.audio.play('character',{pitch:0.74})} onTravel={travelById} {...exits} />
  const detail = resolveDetail(selection, scene.artworks)
  return detail ? <HarborArtworkDialog detail={detail} {...exits} /> : null
}

function useSceneShortcuts(scene:Scene, shell:Shell) {
  useEffect(()=>{
    function onKey(event:KeyboardEvent) {
      if(event.repeat || event.defaultPrevented || event.ctrlKey || event.altKey || event.metaKey || scene.status!=='ready')return
      if(event.target instanceof Element && event.target.closest('input,textarea,select'))return
      if (event.code==='Escape' && !scene.panels.panel && !document.pointerLockElement && !scene.scope) {
        if (scene.runtime?.pastimes.fishing.active) { event.preventDefault();scene.runtime.stopFishing() }
        else scene.panels.open('menu')
      }
      if(!scene.panels.panel && !scene.scope && event.code==='KeyV') shell.updateSettings({view:shell.settings.view==='first'?'third':'first'})
      if(!scene.panels.panel && event.code==='KeyT') shell.updateSettings({weather:shell.settings.weather==='clear'?'rain':shell.settings.weather==='rain'?'snow':'clear'})
    }
    window.addEventListener('keydown',onKey)
    return ()=>window.removeEventListener('keydown',onKey)
  },[scene,shell])
}

function ScopeHud({scene}:{scene:Scene}) {
  const state=scene.scope
  if(!state)return null
  return <section className="scope-hud" aria-label={SCOPE.title}>
    <div className="scope-crosshair" aria-hidden="true">＋</div>
    {state.name&&<div className="scope-target"><strong>{state.name}</strong><p>{state.caption}</p>
      <button type="button" onClick={()=>scene.runtime?.scope.lock()}>{state.locked?'解除跟随':'锁定跟随'}</button></div>}
    <div className="scope-buttons">
      <button type="button" aria-label="降低倍率" onClick={()=>scene.runtime?.scope.zoom(-1)}>−</button>
      <output>{state.zoom}×</output>
      <button type="button" aria-label="提高倍率" onClick={()=>scene.runtime?.scope.zoom(1)}>+</button>
      <button type="button" onClick={()=>scene.runtime?.scope.close()}>{SCOPE.exit}</button>
    </div>
    {state.loading&&<p role="status">正在准备远景细节…</p>}
  </section>
}

export function PixelHarbor(shell: Shell) {
  const mount = useRef<HTMLDivElement>(null)
  const labels = useRef<HTMLDivElement>(null)
  const hint = useRef<HTMLDivElement>(null)
  const scene = useHarborScene({ mount, labels, hint }, shell.settings, shell)
  useSceneShortcuts(scene,shell)
  const travelControls = useSceneTravel(scene)
  const { overlay, travel, action, destination, cancelGuide } = travelControls
  const { mode, cue } = scene.activity
  const panel = scene.panels.panel
  const notice = shell.warning || scene.notice
  return (
    <main className="pixel-harbor" aria-labelledby="harbor-title" data-night={scene.lighting.night}
      data-panel-open={Boolean(panel)} data-dialogue={scene.dialogue} data-mode={mode ?? 'walk'} data-view={shell.settings.view}
      data-weather={shell.settings.weather} data-scope={Boolean(scene.scope)} data-reduced={shell.settings.reduced}
      data-flight={scene.flying}
      style={getHarborStyle(scene.lighting.night)}>
      <div ref={mount} className="harbor-viewport" data-ready={scene.status === 'ready'} />
      <HarborHeader scene={scene} />
      {notice && !panel && <p className="harbor-notice" role="status">{notice}</p>}
      {scene.runtime && destination && !panel && !mode && scene.fishing==='idle' && <HarborGuidance runtime={scene.runtime} place={destination} onCancel={cancelGuide} />}
      {scene.status==='loading'&&<HarborLoading progress={scene.progress}/>}
      {scene.status === 'error' && <div className="harbor-status">
        <p role="status">无法显示渔港。请确认浏览器支持并启用了 WebGL 2。</p>
        <button type="button" onClick={scene.retry}>重新加载</button>
      </div>}
      {scene.status === 'ready' && <>
        <div ref={labels} className="harbor-place-labels">
          <HarborPlaceLabels places={scene.runtime?.places ?? []} onTravel={travel} />
        </div>
        <HarborInteraction scene={scene} hint={hint} flightEnabled={shell.settings.flight} />
        {mode && mode!=='drive' && !scene.scope && <HarborActivityHud mode={mode} cue={cue} places={scene.runtime?.places ?? []}
          onFocus={id => scene.runtime?.focusPlace(id) ?? null} onAction={action} />}
      </>}
      <ScopeHud scene={scene}/>
      <ScenePanel scene={scene} shell={shell} travelControls={travelControls} />
      <div ref={overlay} className="harbor-travel-scrim" aria-hidden="true" />
    </main>
  )
}
