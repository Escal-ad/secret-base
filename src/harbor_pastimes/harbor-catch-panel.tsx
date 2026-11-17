import { useState } from 'react'
import type { ComponentProps } from 'react'
import { HarborPanel } from '../pixel_harbor/harbor_panel'
import { FISHING } from './harbor-pastimes-config'
import type { CatchSpecies } from './harbor-pastimes-config'

const ICONS = {
  fish:'M1 3h2v1h2V3h2V2h4v1h2v1h1v3h-1v1h-2v1H7V8H5V7H3v1H1z M11 4v1h1V4z',
  shell:'M3 3h2V2h6v1h2v2h1v3h-2v2H5V9H2V6h1z M7 4v3h1V4z M10 4v3h1V4z',
  bottle:'M6 1h4v2H9v2h2v1h1v5H4V6h1V5h2V3H6z M6 7v3h4V7z',
} as const
type Exits = Pick<ComponentProps<typeof HarborPanel>,'closing'|'onClose'|'onExited'>
type CatchRecords = { items:readonly string[]; warning:string }

function CatchIcon({icon}:{icon:CatchSpecies['icon']}) {
  return <svg className="harbor-catch-icon" viewBox="0 0 16 12" shapeRendering="crispEdges" aria-hidden="true">
    <path fillRule="evenodd" d={ICONS[icon]} />
  </svg>
}

function CatchResult({ species, onRecords }: { species:CatchSpecies; onRecords:()=>void }) {
  const [letter,setLetter] = useState(false)
  const { ui } = FISHING
  return <>
    <div className="harbor-catch-row"><CatchIcon icon={species.icon}/>
      <div><h3>{species.name}</h3><small>{species.rarity}</small></div>
    </div>
    <p>{species.note || ui.pending}</p>
    {'letter' in species && <><button type="button" onClick={()=>setLetter(!letter)} aria-expanded={letter}>{ui.openBottle}</button>
      {letter && <p>{species.letter || ui.pending}</p>}</>}
    <button type="button" onClick={onRecords}>{ui.record}</button>
  </>
}

export function HarborCatchPanel({ result, records, ...exits }: Exits & { result?:CatchSpecies; records:CatchRecords }) {
  const [showResult,setShowResult] = useState(Boolean(result))
  const { ui } = FISHING
  return <HarborPanel {...exits} wide={false}><article className="harbor-pastime-panel">
    <header className="harbor-panel-heading"><h2 id="harbor-detail-title" tabIndex={-1}>{showResult ? ui.result : ui.record}</h2>
      <button className="harbor-detail-close" aria-label="关闭渔获面板" onClick={exits.onClose}>×</button></header>
    {records.warning && <p role="status">{records.warning}</p>}
    {showResult && result ? <CatchResult species={result} onRecords={()=>setShowResult(false)} /> :
      records.items.length ? <ul className="harbor-pastime-list">{FISHING.pool.filter(species=>records.items.includes(species.id))
        .map(species=><li key={species.id} className="harbor-catch-row"><CatchIcon icon={species.icon}/>
          <span>{species.name} · {species.rarity}</span></li>)}</ul> : <p>{ui.empty}</p>}
  </article></HarborPanel>
}
