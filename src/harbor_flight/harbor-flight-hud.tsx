import type { ReactNode } from 'react'
import { FLIGHT } from './harbor-flight-config'
import type { HarborRuntime } from '../pixel_harbor/harbor_scene_session'
import './harbor-flight-hud.css'

type Props = { runtime?: HarborRuntime; active: boolean }
type HoldProps = { children: ReactNode; hold: (active: boolean) => void }

function FlightHold({ children, hold }: HoldProps) {
  return <button type="button" onPointerDown={event => {
    if (event.button !== 0) return
    event.currentTarget.setPointerCapture(event.pointerId)
    hold(true)
  }} onLostPointerCapture={() => hold(false)} onPointerCancel={() => hold(false)}
  onKeyDown={event => { if (event.key === ' ' || event.key === 'Enter') hold(true) }}
  onKeyUp={event => { if (event.key === ' ' || event.key === 'Enter') hold(false) }}
  onBlur={() => hold(false)}>{children}</button>
}

export function HarborFlightHud({ runtime, active }: Props) {
  const { launch, land, climb, descend, boost } = FLIGHT.ui
  return <div className="harbor-flight-hud" data-active={active}>
    {active && <>
      <FlightHold hold={held => runtime?.setFlightVertical(1, held)}>{climb}</FlightHold>
      <FlightHold hold={held => runtime?.setFlightVertical(-1, held)}>{descend}</FlightHold>
      <FlightHold hold={held => runtime?.setThrottle(held)}>{boost}</FlightHold>
    </>}
    <button type="button" onClick={() => runtime?.toggleFlight()}>{active ? land : launch}</button>
  </div>
}
