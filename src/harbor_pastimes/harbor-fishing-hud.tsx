import { FISHING } from './harbor-pastimes-config'
import type { FishingPhase } from './harbor-fishing'

export function HarborFishingHud({ phase, onAct, onStop, onRecords }: {
  phase:FishingPhase; onAct:()=>void; onStop:()=>void; onRecords:()=>void
}) {
  if (phase === 'idle') return null
  const message = phase === 'bite' ? FISHING.ui.bite : FISHING.ui[phase]
  return <section className="activity-hud harbor-fishing-hud" data-fishing-phase={phase} aria-label={FISHING.title}>
    <strong role="status">{message}</strong>
    <div className="activity-buttons">
      {(phase === 'miss' || phase === 'bite') && <button type="button" onClick={onAct}>
        {phase === 'bite' ? FISHING.ui.reel : FISHING.ui.recast}
      </button>}
      <button type="button" onClick={onRecords}>{FISHING.ui.record}</button>
      <button type="button" onClick={onStop}>{FISHING.ui.exit}</button>
    </div>
  </section>
}
