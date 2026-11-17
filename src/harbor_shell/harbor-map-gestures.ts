import { useLayoutEffect, useRef, useState } from 'react'
import type { PointerEvent, RefObject } from 'react'
import { limitMapView, MAP_UI } from './harbor-map-layout'
import type { MapSize, MapView, Point } from './harbor-map-layout'

function measurePointers(points: Map<number, Point>) {
  const [first, second] = points.values()
  if (!second) return { center: first, span: 0 }
  return {
    center: { x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 },
    span: Math.hypot(first.x - second.x, first.y - second.y),
  }
}

function transformGesture(view: MapView, size: MapSize, gesture: {
  before: ReturnType<typeof measurePointers>; after: ReturnType<typeof measurePointers>
}) {
  const { before, after } = gesture
  const ratio = before.span > 0 ? after.span / before.span : 1
  const { zoom } = limitMapView({ ...view, zoom: view.zoom * ratio }, size)
  const scale = zoom / view.zoom
  return limitMapView({ zoom, offset: {
    x: after.center.x - size.width / 2 - (before.center.x - size.width / 2 - view.offset.x) * scale,
    y: after.center.y - size.height / 2 - (before.center.y - size.height / 2 - view.offset.y) * scale,
  } }, size)
}

function localPoint(event: PointerEvent<HTMLDivElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  return { x: event.clientX - rect.left, y: event.clientY - rect.top }
}

export function useHarborMapGestures(viewport: RefObject<HTMLDivElement | null>) {
  const pointers = useRef(new Map<number, Point>())
  const blockedClick = useRef(false)
  const distance = useRef(0)
  const [size, setSize] = useState<MapSize>({ width: 0, height: 0 })
  const [view, setView] = useState<MapView>(MAP_UI.initial)

  useLayoutEffect(() => {
    const element = viewport.current
    if (!element) return
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [viewport])

  function pointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0 || pointers.current.size >= 2) return
    if (!pointers.current.size) { blockedClick.current = false; distance.current = 0 }
    else blockedClick.current = true
    pointers.current.set(event.pointerId, localPoint(event))
    const marker = event.target instanceof Element ? event.target.closest('.map-marker') : null
    const capture = marker ?? event.currentTarget
    capture.setPointerCapture(event.pointerId)
  }

  function pointerMove(event: PointerEvent<HTMLDivElement>) {
    const active = pointers.current
    const last = active.get(event.pointerId)
    if (!last) return
    const before = measurePointers(active)
    const next = localPoint(event)
    active.set(event.pointerId, next)
    distance.current += Math.hypot(next.x - last.x, next.y - last.y)
    if (distance.current >= MAP_UI.dragThreshold) blockedClick.current = true
    if (!blockedClick.current) return
    const after = measurePointers(active)
    setView(previous => transformGesture(limitMapView(previous, size), size, { before, after }))
  }

  const pointerEnd = (event: PointerEvent<HTMLDivElement>) => pointers.current.delete(event.pointerId)
  const zoomBy = (by: number) => setView(current => limitMapView({ ...current, zoom: current.zoom + by }, size))
  return {
    size, view: limitMapView(view, size), zoomBy, reset: () => setView(MAP_UI.initial),
    canSelect: () => !blockedClick.current, pointerDown, pointerMove, pointerEnd,
  }
}
