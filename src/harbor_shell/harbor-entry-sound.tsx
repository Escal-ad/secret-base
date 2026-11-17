import { useEffect, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import type { Settings } from './harbor-settings'

const HOLD_MS = 450
const MAX_PERCENT = 100

type Props = { settings: Settings; onUpdate: (next: Partial<Settings>) => void }

function useVolumePopup() {
  const control = useRef<HTMLDivElement>(null)
  const held = useRef(false)
  const timer = useRef<number | undefined>(undefined)
  const [expanded, setExpanded] = useState(false)
  const stop = () => window.clearTimeout(timer.current)

  useEffect(() => () => window.clearTimeout(timer.current), [])
  useEffect(() => {
    if (!expanded) return
    function outside(event: globalThis.PointerEvent) {
      if (event.target instanceof Node && !control.current?.contains(event.target)) setExpanded(false)
    }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [expanded])

  function start(event: PointerEvent<HTMLButtonElement>) {
    stop()
    held.current = false
    if (event.pointerType === 'mouse' || event.button !== 0) return
    timer.current = window.setTimeout(() => {
      held.current = true
      setExpanded(true)
    }, HOLD_MS)
  }

  function toggleAllowed(keyboard: boolean) {
    const allowed = keyboard || !held.current
    held.current = false
    return allowed
  }

  return { control, expanded, close: () => setExpanded(false), start, stop, toggleAllowed }
}

export function HarborEntrySound({ settings, onUpdate }: Props) {
  const { control, expanded, close, start, stop, toggleAllowed } = useVolumePopup()
  const muted = !settings.sound || settings.muted.master
  const volume = Math.round(settings.volumes.master * MAX_PERCENT)
  return <div className="entry-volume" ref={control} data-expanded={expanded}
    onKeyDown={event => { if (event.key === 'Escape') close() }}>
    <button className="entry-sound-button" type="button" aria-label="静音" aria-pressed={muted}
      aria-describedby="entry-sound-help" onPointerDown={start} onPointerUp={stop} onPointerCancel={stop}
      onContextMenu={event => event.preventDefault()} onClick={event => {
        if (!toggleAllowed(event.detail === 0)) return
        onUpdate(muted ? { sound: true, muted: { ...settings.muted, master: false } } : { sound: false })
      }}>
      <span className="entry-speaker" aria-hidden="true" />
    </button>
    <span className="entry-assistive" id="entry-sound-help">悬停、长按或用 Tab 聚焦可以调节音量</span>
    <label className="entry-volume-popup">
      <span className="entry-assistive">总音量</span>
      <input type="range" min={0} max={MAX_PERCENT} value={volume}
        onChange={event => onUpdate({ volumes: { ...settings.volumes, master: event.target.valueAsNumber / MAX_PERCENT } })} />
      <span aria-hidden="true">{volume}%</span>
    </label>
  </div>
}
