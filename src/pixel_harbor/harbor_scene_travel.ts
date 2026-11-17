import { useCallback, useEffect, useRef, useState } from 'react'
import type { ActivityAction } from './harbor_activities'
import { TOUR } from './harbor_captain_config'
import { LOOKOUT, SUNSET } from './harbor_exploration_config'
import type { HarborPlace } from './harbor_hotspots'
import { PLACE_TRAVEL } from './harbor_places_config'
import type { useHarborScene } from './harbor_scene_session'
import { fadeHarborTravel } from './harbor_travel'

type Scene = ReturnType<typeof useHarborScene>

function transitionTime(action: ActivityAction) {
  if (action === 'lookout' || action === 'leave-lookout') return LOOKOUT.entryFadeMs
  if (action === 'sunset' || action === 'leave-sunset') return SUNSET.fadeMs
  return TOUR.recoveryFadeMs
}

function useActivityKeys(scene: Pick<Scene,'activity'|'runtime'|'scope'|'panels'>, action: (event: ActivityAction) => void) {
  const { activity:{mode}, runtime, scope, panels:{panel} }=scene
  useEffect(() => {
    if (!mode || mode==='drive' || panel) return
    const controller = new AbortController()
    const options = { capture: true, signal: controller.signal }
    window.addEventListener('keydown', event => {
      if (event.repeat || event.code === 'KeyF' || (mode !== 'sunset' && event.code !== 'Escape')) return
      event.preventDefault()
      event.stopPropagation()
      if(scope && runtime?.scope.close())return
      action(mode === 'sunset' ? 'leave-sunset' : mode === 'tour' ? 'return-tour' : 'leave-lookout')
    }, options)
    if (mode === 'sunset') window.addEventListener('pointerdown', () => action('leave-sunset'), options)
    return () => controller.abort()
  }, [mode, action,runtime,scope,panel])
}

function useMapShortcut(openMap: () => void) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.code === 'KeyM' && !event.repeat && !event.ctrlKey && !event.altKey && !event.metaKey) openMap()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openMap])
}

export function useSceneTravel(scene: Scene) {
  const overlay = useRef<HTMLDivElement>(null)
  const moving = useRef(false)
  const [destination, setDestination] = useState<HarborPlace>()
  const { runtime, setNotice, activity, panels: { open, close } } = scene
  const { mode, request, setRequest, visit } = activity
  const { scope }=scene
  const openMap = useCallback(() => { if (runtime && mode!=='sunset' && !scope && !runtime.pastimes.fishing.active) open('map') }, [runtime, mode, open,scope])
  const perform = useCallback(async (operation: () => boolean, duration?: number) => {
    if (!runtime || moving.current) return false
    moving.current = true
    const scrim = overlay.current
    if (scrim) scrim.dataset.active = 'true'
    close()
    runtime.setTransition(true)
    try { return await fadeHarborTravel(scrim, operation, duration) }
    finally {
      if (scrim) delete scrim.dataset.active
      runtime.setTransition(false)
      moving.current = false
    }
  }, [runtime, close])
  const action = useCallback((event: ActivityAction) => {
    if (!runtime) return
    void perform(() => runtime.performAction(event), transitionTime(event))
  }, [runtime, perform])
  useActivityKeys(scene, action)
  useEffect(() => {
    if (!request) return
    action(request)
    setRequest(null)
  }, [request, action, setRequest])
  useMapShortcut(openMap)
  const cancelGuide = useCallback(() => setDestination(undefined), [])
  async function travel(place: HarborPlace) {
    if (!runtime || mode==='sunset' || scope || moving.current) return
    const success = await perform(() => {
      if(mode==='drive')runtime.performAction('return-drive')
      if(mode==='tour')runtime.performAction('return-tour')
      if(mode==='lookout')runtime.performAction('leave-lookout')
      return runtime.travel(place.hotspot.id)
    })
    if (success) { cancelGuide(); visit(place.hotspot.id) }
    else if (overlay.current) setNotice(PLACE_TRAVEL.missingLanding)
  }
  async function guide(place: HarborPlace) {
    if (!runtime || mode === 'sunset' || scope || moving.current) return
    const exit = mode === 'drive' ? 'return-drive' : mode === 'tour' ? 'return-tour'
      : mode === 'lookout' ? 'leave-lookout' : null
    if (exit && !await perform(() => runtime.performAction(exit), transitionTime(exit))) return
    close()
    setDestination(place)
  }
  return { overlay, openMap, travel, action, guide, destination, cancelGuide }
}
