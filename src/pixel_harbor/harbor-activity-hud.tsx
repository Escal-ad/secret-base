import { useState } from 'react'
import type { ActivityAction, HarborActivity } from './harbor_activities'
import { TOUR } from './harbor_captain_config'
import { LOOKOUT, SUNSET } from './harbor_exploration_config'
import type { HarborPlace } from './harbor_hotspots'
import type { TourCue } from './harbor_tour'

function LookoutHud({ places, onFocus, onExit }: {
  places: readonly HarborPlace[]; onFocus: (id?: string) => string | null; onExit: () => void
}) {
  const [active, setActive] = useState<string | null>(null)
  const landmarks = LOOKOUT.landmarkIds.flatMap(id => places.find(place => place.hotspot.id === id) ?? [])
  return <section className="activity-hud lookout-hud" aria-label={LOOKOUT.title}>
    <strong>{LOOKOUT.title}</strong>
    <div className="activity-buttons">
      {landmarks.map(place => <button type="button" key={place.hotspot.id} aria-pressed={active === place.hotspot.id}
        onClick={() => setActive(onFocus(place.hotspot.id))}>{place.title}</button>)}
      {active && <button type="button" onClick={() => setActive(onFocus())}>{LOOKOUT.restoreView}</button>}
      <button type="button" onClick={onExit}>{LOOKOUT.exit}</button>
    </div>
  </section>
}

export function HarborActivityHud({ mode, cue, places, onFocus, onAction }: {
  mode: HarborActivity; cue: TourCue | null; places: readonly HarborPlace[];
  onFocus: (id?: string) => string | null; onAction: (action: ActivityAction) => void
}) {
  if (mode === 'lookout') return <LookoutHud places={places} onFocus={onFocus} onExit={() => onAction('leave-lookout')} />
  if (mode === 'sunset') return <div className="sunset-hud">
    {SUNSET.caption && <p>{SUNSET.caption}</p>}
    <button type="button" onClick={() => onAction('leave-sunset')}>{SUNSET.exit}</button>
  </div>
  return <section className="activity-hud tour-hud" aria-label={TOUR.title}>
    <strong>{cue?.title || TOUR.title}</strong>
    {cue?.caption && <p aria-live="polite">{cue.caption}</p>}
    <button type="button" onClick={() => onAction('return-tour')}>{TOUR.stopLabel}</button>
  </section>
}
