import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import { createHarborArt } from './harbor_art'
import { hasSeenHarborHelp, markHarborHelpSeen, shouldSuggestReading } from './harbor_help_preferences'
import type { Hotspot } from './harbor_hotspots'
import type { ActivityAction, HarborActivity } from './harbor_activities'
import type { TourCue } from './harbor_tour'
import { LOOKOUT, SUNSET } from './harbor_exploration_config'
import { HARBOR_LIGHTING, RENDER_QUALITY } from './harbor_lighting_config'
import { readHarborNight, saveHarborNight } from './harbor_lighting_preferences'
import { updatePlaceLabels } from './harbor_place_dom'
import type { mountHarbor } from './harbor_runtime'
import { readVisitHistory, saveVisitHistory } from './harbor_visit_history'
import type { Settings } from '../harbor_shell/harbor-settings'
import type { HarborAudio } from '../harbor_shell/harbor-audio'
import type { ScopeDisplay } from '../harbor_expansion/harbor-scope'
import type { FishingPhase } from '../harbor_pastimes/harbor-fishing'
import { FLIGHT } from '../harbor_flight/harbor-flight-config'

export type HarborRuntime = ReturnType<typeof mountHarbor>
type RuntimeOptions = Parameters<typeof mountHarbor>[0]
type OpenPanel = { selection: Hotspot | 'help' | 'map' | 'menu'; closing: boolean }

function attachHarbor(options: Omit<RuntimeOptions, 'onError'>, handlers: {
  onStatus: (status: 'ready' | 'error') => void
  onProgress: (progress: number) => void
  onRuntime: (runtime: HarborRuntime | undefined) => void
}) {
  let active = true
  let runtime: HarborRuntime | undefined
  async function load() {
    try {
      const { mountHarbor } = await import('./harbor_runtime')
      if (!active) return
      handlers.onProgress(RENDER_QUALITY.moduleProgress)
      await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
      if (!active) return
      runtime = mountHarbor({ ...options, onError: () => handlers.onStatus('error') })
      handlers.onRuntime(runtime)
      handlers.onProgress(RENDER_QUALITY.completeProgress)
      handlers.onStatus('ready')
    } catch {
      if (active) handlers.onStatus('error')
    }
  }
  void load()
  return () => { active = false; runtime?.dispose() }
}

function usePanelState(runtime: HarborRuntime | undefined) {
  const [panel, setPanel] = useState<OpenPanel | null>(() =>
    hasSeenHarborHelp() ? null : { selection: 'help', closing: false })
  const isHelp = panel?.selection === 'help'
  const close = useCallback(() => {
    if (isHelp) markHarborHelpSeen()
    setPanel(current => current && !current.closing ? { ...current, closing: true } : current)
  }, [isHelp])
  const dismiss = useCallback(() => {
    runtime?.dismissPanel()
    setPanel(null)
    const focused = document.activeElement
    if (focused === document.body || focused?.closest('.harbor-detail')) runtime?.focus()
  }, [runtime])
  const open = useCallback((selection: OpenPanel['selection']) =>
    setPanel(previous => previous ?? { selection, closing: false }), [])
  const leave = useCallback((id: string) => setPanel(previous =>
    previous && typeof previous.selection !== 'string' && previous.selection.id === id
      ? { ...previous, closing: true } : previous), [])
  const reset = useCallback(() => setPanel(null), [])
  useLayoutEffect(() => {
    const selection = panel?.selection
    const locked = typeof selection === 'string' || selection?.kind === 'wishing' || selection?.kind === 'fishing'
    runtime?.setPanelOpen(Boolean(panel), locked)
  }, [runtime, panel])
  return { panel, open, close, dismiss, leave, reset }
}

function useNightSelection(runtime: HarborRuntime | undefined) {
  const [selection, setSelection] = useState(readHarborNight)
  const night = useRef(selection.night)
  function toggle() {
    night.current = !night.current
    setSelection({ night: night.current, warning: saveHarborNight(night.current) })
    runtime?.setNight(night.current)
  }
  return { lighting: { ...selection, toggle }, requestedNight: night }
}

type ElementRef = RefObject<HTMLDivElement | null>

function useSceneActivity() {
  const [mode, setMode] = useState<HarborActivity | null>(null)
  const [cue, setCue] = useState<TourCue | null>(null)
  const [request, setRequest] = useState<ActivityAction | null>(null)
  const [history, setHistory] = useState(readVisitHistory)
  const visited = useRef(history.places)
  const visit = useCallback((id: string) => {
    if (visited.current.has(id)) return
    const places = new Set(visited.current).add(id)
    visited.current = places
    setHistory({ places, warning: saveVisitHistory(places) })
  }, [])
  return { mode, setMode, cue, setCue, request, setRequest, history, visit }
}

// React owns the runtime lifetime and the subscriptions attached to that instance.
export function useHarborScene({ mount, labels, hint }: { mount: ElementRef; labels: ElementRef; hint: ElementRef },
  settings: Settings, { audio, onRead }: { audio: HarborAudio; onRead: () => void }) {
  const [runtime, setRuntime] = useState<HarborRuntime>()
  const [artworks] = useState(createHarborArt)
  const [attempt, setAttempt] = useState(0)
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [hotspot, setHotspot] = useState<Hotspot | null>(null)
  const [sailing, setSailing] = useState(false)
  const [flying, setFlying] = useState(false)
  const [fishing, setFishing] = useState<FishingPhase>('idle')
  const [flightNotice, setFlightNotice] = useState('')
  const [scope,setScope]=useState<ScopeDisplay|null>(null)
  const prefs=useRef(settings)
  useLayoutEffect(()=>{prefs.current=settings},[settings])
  const [notice, setNotice] = useState('')
  const panels = usePanelState(runtime)
  const activity = useSceneActivity()
  const { setMode, setCue, setRequest, visit } = activity
  const { lighting, requestedNight } = useNightSelection(runtime)
  const { open, leave, reset } = panels
  useEffect(() => {
    if (!mount.current) return
    const detach=attachHarbor({
      mount: mount.current, artworks, night: requestedNight.current,
      simplified: shouldSuggestReading(), onHotspot: setHotspot,
      settings:()=>prefs.current, onScope:setScope, play:audio.play,setAmbience:audio.ambient,
      onOpen(spot) {
        visit(spot.id)
        if (spot.kind === 'mayor') onRead()
        else open(spot)
      },
      onLeave: leave, onCue: setCue, onActivityRequest: setRequest,
      onMode(mode) {
        setMode(mode)
        if (mode === 'lookout') visit(LOOKOUT.id)
        if (mode === 'sunset') visit(SUNSET.id)
      },
      onHintPosition(position) {
        if (!hint.current) return
        hint.current.dataset.projected = String(Boolean(position))
        if (!position) return
        hint.current.style.setProperty('--harbor-hint-x', `${position.x}%`)
        hint.current.style.setProperty('--harbor-hint-y', `${position.y}%`)
      },
      onLabels: visible => updatePlaceLabels(labels.current, visible),
      onFishing:setFishing, onSailing: setSailing, onQuality: setNotice, onFlight: setFlying, onFlightNotice: setFlightNotice,
    }, {
      onRuntime: setRuntime, onProgress: setProgress,
      onStatus(next) { setStatus(next); if (next === 'error') { setHotspot(null); reset() } },
    })
    return ()=>{detach();audio.clearAmbience()}
  }, [artworks, attempt, open, leave, requestedNight, reset, mount, labels, hint, setMode, setCue, setRequest, visit, audio, onRead])
  useEffect(()=>{ if(status==='ready') audio.preload() },[audio,status])
  useEffect(() => {
    if (!flightNotice) return
    const timer = window.setTimeout(() => setFlightNotice(''), FLIGHT.ui.noticeMs)
    return () => window.clearTimeout(timer)
  }, [flightNotice])
  const selected=panels.panel?.selection
  const dialogue=typeof selected==='object' && (selected.kind==='captain' || selected.kind==='resident')
  const mode = scope ? 'telescope' : flying ? 'flight' : activity.mode
  useEffect(()=>{ audio.sync({ settings,scene:{ night:lighting.night,weather:settings.weather,mode,dialogue } }) },
    [audio,settings,lighting.night,mode,dialogue])
  return { runtime, artworks, progress, status, hotspot, sailing, flying, fishing, panels, lighting, activity, scope, dialogue,
    notice: flightNotice || lighting.warning || activity.history.warning || notice, setNotice,
    retry() {
      setRuntime(undefined); setSailing(false); setFishing('idle'); setFlying(false); setFlightNotice(''); setMode(null); setCue(null); setRequest(null)
      setProgress(0); setStatus('loading'); setAttempt(value => value + 1)
    },
    toggleLabel: lighting.night ? HARBOR_LIGHTING.toggleMorning : HARBOR_LIGHTING.toggleNight,
  }
}
