import { useState } from 'react'
import type { ComponentProps, FormEvent } from 'react'
import { HarborPanel } from '../pixel_harbor/harbor_panel'
import type { Wish } from './harbor-pastimes-config'
import { WISHING } from './harbor-pastimes-config'
import { limitWish } from './harbor-pastime-records'

type Records = { items:readonly Wish[]; warning:string }
type WishAccess = {
  release:(text:string)=>boolean; remove:(id:string)=>Records; clear:()=>Records
}
type Exits = Pick<ComponentProps<typeof HarborPanel>,'closing'|'onClose'|'onExited'>

function WishForm({ submit }: { submit:(wish:string)=>void }) {
  const [draft,setDraft] = useState('')
  const { ui, examples, maxCharacters } = WISHING
  function handleSubmit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (draft.trim()) submit(draft)
  }
  return <form onSubmit={handleSubmit} className="harbor-wish-form">
    <label htmlFor="harbor-wish">{ui.prompt}</label>
    <textarea id="harbor-wish" value={draft} onChange={event=>setDraft(limitWish(event.target.value))}
      aria-describedby="harbor-wish-privacy harbor-wish-length" rows={2} required />
    <small id="harbor-wish-privacy">{ui.privacy}</small>
    <small id="harbor-wish-length">{Array.from(draft).length}/{maxCharacters}</small>
    {examples.map(example=><button type="button" key={example} onClick={()=>setDraft(limitWish(example))}>{example}</button>)}
    <button type="submit" disabled={!draft.trim()}>{ui.release}</button>
  </form>
}

function WishList({ records, chosen, actions }: { records:Records; chosen?:string; actions:WishAccess }) {
  const [snapshot,setSnapshot] = useState(records)
  const [selected,setSelected] = useState(chosen)
  const [ask,setAsk] = useState(false)
  const { ui, lights } = WISHING
  return <section>
    <h3>{ui.records}</h3>
    {snapshot.warning && <p role="status">{snapshot.warning}</p>}
    {!snapshot.items.length ? <p>{ui.empty}</p> : <>
      <p>{ui.lights}</p>
      <div className="harbor-pastime-actions">{snapshot.items.slice(0,lights.retained).map((wish,index)=>
        <button type="button" key={wish.id} aria-expanded={selected===wish.id}
          onClick={()=>setSelected(selected===wish.id ? undefined : wish.id)}>纸灯 {index+1}</button>)}</div>
      <ul className="harbor-pastime-list">{snapshot.items.map((wish,index)=><li key={wish.id}>
        {(index>=lights.retained || selected===wish.id) ? <span className="harbor-wish-text">{wish.text}</span> :
          <span>纸灯 {index+1}</span>}
        <button type="button" onClick={()=>setSnapshot(actions.remove(wish.id))}>{ui.delete}</button>
      </li>)}</ul>
      {ask ? <div className="harbor-pastime-actions">
        <span>{ui.pendingClear}</span><button type="button" onClick={()=>{setSnapshot(actions.clear());setAsk(false)}}>{ui.confirmClear}</button>
        <button type="button" onClick={()=>setAsk(false)}>{ui.cancel}</button>
      </div> : <button type="button" onClick={()=>setAsk(true)}>{ui.clear}</button>}
    </>}
  </section>
}

export function HarborWishPanel({ records, chosen, actions, ...exits }: Exits & { records:Records; chosen?:string; actions:WishAccess }) {
  return <HarborPanel {...exits} wide={false}><article className="harbor-pastime-panel">
    <header className="harbor-panel-heading"><h2 id="harbor-detail-title" tabIndex={-1}>{WISHING.title}</h2>
      <button className="harbor-detail-close" aria-label={WISHING.ui.close} onClick={exits.onClose}>×</button></header>
    <WishForm submit={text=>{if(actions.release(text)) exits.onClose()}} />
    <WishList records={records} chosen={chosen} actions={actions} />
  </article></HarborPanel>
}
