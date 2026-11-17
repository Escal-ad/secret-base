import { useEffect, useLayoutEffect, useRef } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { PANEL_FADE_MS } from './harbor_interaction_config'

type PanelProps = {
  wide: boolean
  closing: boolean
  onClose: () => void
  onExited: () => void
  children: ReactNode
  placement?: 'bottom' | 'full'
}

const PANEL_STYLE = { '--harbor-panel-fade': `${PANEL_FADE_MS}ms` } as CSSProperties

export function HarborPanel({ wide, closing, onClose, onExited, children, placement }: PanelProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  const layer = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = dialog.current
    element?.querySelector<HTMLElement>('h2')?.focus({ preventScroll: true })
    element?.getBoundingClientRect()
    layer.current?.setAttribute('data-entered', 'true')
  }, [])

  useEffect(() => {
    if (closing) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !event.defaultPrevented) { event.preventDefault(); onClose() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closing, onClose])

  useLayoutEffect(() => {
    if (!closing) return
    const animations = dialog.current?.getAnimations() ?? []
    if (!animations.length) return onExited()
    let active = true
    async function finishFade() {
      await Promise.allSettled(animations.map(animation => animation.finished))
      if (active) onExited()
    }
    void finishFade()
    return () => { active = false }
  }, [closing, onExited])

  return (
    <div ref={layer} className="harbor-panel-layer" data-closing={closing} style={PANEL_STYLE}>
      <div className="harbor-panel-scrim" aria-hidden="true" />
      <dialog open ref={dialog} className="harbor-detail" data-wide={wide} data-placement={placement} inert={closing}
        aria-labelledby="harbor-detail-title">{children}</dialog>
    </div>
  )
}
