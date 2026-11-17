import { useLayoutEffect, useRef } from 'react'
import type { HarborPlace } from './harbor_hotspots'
import type { HarborRuntime } from './harbor_scene_session'

type Props = {
  runtime: Pick<HarborRuntime, 'player'|'viewYaw'>
  place: HarborPlace
  onCancel: () => void
}

export function HarborGuidance({ runtime, place, onCancel }: Props) {
  const arrow = useRef<HTMLSpanElement>(null)
  const distance = useRef<HTMLSpanElement>(null)
  useLayoutEffect(() => {
    let frame = 0
    let last = -1
    function follow() {
      const dx = place.hotspot.x - runtime.player.x
      const dz = place.hotspot.z - runtime.player.z
      const remaining = Math.hypot(dx, dz)
      if (remaining < place.hotspot.radius) { onCancel(); return }
      const bearing = Math.atan2(dx, -dz) + runtime.viewYaw()
      if (arrow.current) arrow.current.style.transform = `rotate(${bearing}rad)`
      const meters = Math.ceil(remaining)
      if (distance.current && meters !== last) distance.current.textContent = `剩余 ${meters} 米`
      last = meters
      frame = requestAnimationFrame(follow)
    }
    follow()
    return () => cancelAnimationFrame(frame)
  }, [place, runtime, onCancel])

  return <aside className="harbor-guidance" aria-label="地点指路">
    <span className="harbor-guidance-arrow" ref={arrow} aria-hidden="true">↑</span>
    <div><strong>{place.title}</strong><span ref={distance} /></div>
    <button type="button" onClick={onCancel}>取消指路</button>
  </aside>
}
