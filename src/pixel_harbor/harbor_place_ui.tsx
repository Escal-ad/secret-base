import type { HarborPlace, IconType } from './harbor_hotspots'
import { PLACE_LABELS } from './harbor_places_config'

function PlaceIcon({ type }: { type: IconType }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={PLACE_LABELS.icons[type]} /></svg>
}

export function HarborPlaceLabels({ places, onTravel }: { places: readonly HarborPlace[]; onTravel: (place: HarborPlace) => void }) {
  return <>{places.filter(place => place.anchor).map(place => (
    <button key={place.hotspot.id} type="button" hidden data-place={place.hotspot.id} data-named="false"
      aria-label={place.title} title={place.blurb} onClick={() => onTravel(place)} className="harbor-place-label">
      <PlaceIcon type={place.iconType} />
      <span>{place.title}</span>
    </button>
  ))}</>
}

