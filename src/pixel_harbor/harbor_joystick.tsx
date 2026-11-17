import { useRef } from 'react'
import type { PointerEvent } from 'react'

const RANGE_RATIO = 0.34
const DEAD_ZONE = 0.12

export function HarborJoystick({ onMove }: { onMove: (x: number, z: number) => void }) {
  const pointer = useRef<number | null>(null)

  function update(event: PointerEvent<HTMLDivElement>) {
    if (pointer.current !== event.pointerId) return
    const element = event.currentTarget
    const bounds = element.getBoundingClientRect()
    const range = Math.min(bounds.width, bounds.height) * RANGE_RATIO
    const dx = (event.clientX - bounds.left - bounds.width / 2) / range
    const dy = (event.clientY - bounds.top - bounds.height / 2) / range
    const length = Math.hypot(dx, dy)
    const knobScale = 1 / Math.max(1, length)
    const travel = length > DEAD_ZONE ? (Math.min(1, length) - DEAD_ZONE) / (1 - DEAD_ZONE) / length : 0
    element.style.setProperty('--stick-x', `${dx * knobScale * range}px`)
    element.style.setProperty('--stick-y', `${dy * knobScale * range}px`)
    onMove(dx * travel, -dy * travel)
  }

  function release(event: PointerEvent<HTMLDivElement>) {
    if (pointer.current !== event.pointerId) return
    pointer.current = null
    event.currentTarget.style.removeProperty('--stick-x')
    event.currentTarget.style.removeProperty('--stick-y')
    onMove(0, 0)
  }

  return <div className="harbor-joystick" role="group" aria-label="拖动摇杆移动人物"
    onPointerDown={event => {
      if (pointer.current !== null || event.button !== 0) return
      pointer.current = event.pointerId
      event.currentTarget.setPointerCapture(event.pointerId)
      update(event)
    }} onPointerMove={update} onPointerUp={release} onPointerCancel={release} onLostPointerCapture={release}>
    <span aria-hidden="true" />
  </div>
}
