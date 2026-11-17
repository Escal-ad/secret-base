import { useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import type { HarborPlace } from '../pixel_harbor/harbor_hotspots'
import { PLACE_TRAVEL } from '../pixel_harbor/harbor_places_config'
import { layoutMapMarkers, MAP_UI, mapAspect, positionOnMap } from './harbor-map-layout'
import { useHarborMapGestures } from './harbor-map-gestures'

type Props = {
  places: readonly HarborPlace[]; player: { x: number; z: number; facing: number }; image?: string
  onTravel: (place: HarborPlace) => void; onGuide: (place: HarborPlace) => void
}
type DestinationProps = Pick<Props,'onTravel'|'onGuide'> & { place: HarborPlace; onClose: () => void }

function MapDestination({ place, onTravel, onGuide, onClose }: DestinationProps) {
  return <aside className="map-destination" aria-label={place.title} aria-live="polite">
    <div className="map-destination-heading">
      <strong>{place.title}</strong>
      <button type="button" aria-label="关闭地点卡片" onClick={onClose}>×</button>
    </div>
    <p>{place.blurb || PLACE_TRAVEL.emptyDescription}</p>
    <div className="map-destination-actions">
      <button type="button" onClick={() => onTravel(place)}>传送到这里</button>
      <button type="button" onClick={() => onGuide(place)}>给我指路</button>
    </div>
  </aside>
}

export function HarborMap({ places, player, image, onTravel, onGuide }: Props) {
  const [selected, setSelected] = useState<HarborPlace>()
  const lastMarker = useRef<HTMLButtonElement>(null)
  const viewport = useRef<HTMLDivElement>(null)
  const map = useHarborMapGestures(viewport)
  const { view, size } = map
  const markers = layoutMapMarkers(places.filter(place => !place.requiresBoat && place.hotspot.kind !== 'art'), size, view)
  const playerPoint = positionOnMap(player, size, view)
  const transform = `translate(${view.offset.x}px,${view.offset.y}px) scale(${view.zoom})`
  return <section className="harbor-map-layout" aria-label="渔港俯视地图" style={{ '--map-aspect': mapAspect } as CSSProperties}>
    <div className="map-toolbar">
      <div className="map-controls">
        <button type="button" onClick={() => map.zoomBy(-MAP_UI.zoomStep)} aria-label="缩小地图">−</button>
        <button type="button" onClick={() => map.zoomBy(MAP_UI.zoomStep)} aria-label="放大地图">＋</button>
        <button type="button" onClick={map.reset}>复原</button>
      </div>
      <small>◆ 地点　▲ 你的位置　·　北 ↑</small>
    </div>
    <div className="map-viewport" ref={viewport} onPointerDown={map.pointerDown} onPointerMove={map.pointerMove}
      onPointerUp={map.pointerEnd} onPointerCancel={map.pointerEnd} onLostPointerCapture={map.pointerEnd}>
      <div className="map-sheet" style={{ transform }}>
        {image ? <img src={image} alt="渔港地形" draggable={false} /> :
          <div className="map-placeholder" aria-label="示意地图"><span aria-hidden="true" /><i /></div>}
      </div>
      {markers.map(({ place, anchor, point }) => {
        const dx = point.x - anchor.x, dy = point.y - anchor.y
        return <div className="map-pin" key={place.hotspot.id}>
          <span className="map-pin-leader" aria-hidden="true" style={{
            left: anchor.x, top: anchor.y, width: Math.hypot(dx, dy), transform: `rotate(${Math.atan2(dy, dx)}rad)`,
          }} />
          <button type="button" className="map-marker" aria-label={place.title}
            aria-pressed={selected === place} style={{ left: point.x, top: point.y }}
            onClick={event => {
              if (event.detail && !map.canSelect()) return
              lastMarker.current = event.currentTarget
              setSelected(place)
            }}><span aria-hidden="true">◆</span></button>
          <span className="map-marker-name" aria-hidden="true" style={{
            left: Math.max(0, Math.min(point.x - MAP_UI.markerSpacing, size.width - MAP_UI.markerSpacing * 2)),
            top: point.y, width: MAP_UI.markerSpacing * 2,
          }}>{place.title}</span>
        </div>
      })}
      <span className="map-player" aria-label="你的位置" style={{ left: playerPoint.x, top: playerPoint.y,
        transform: `translate(-50%, -50%) rotate(${Math.PI - player.facing}rad)` }}>▲</span>
    </div>
    {selected && <MapDestination place={selected} onTravel={onTravel} onGuide={onGuide} onClose={() => {
      setSelected(undefined)
      lastMarker.current?.focus({ preventScroll: true })
    }} />}
  </section>
}
