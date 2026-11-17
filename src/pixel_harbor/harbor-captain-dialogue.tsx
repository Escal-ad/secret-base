import { useEffect, useRef, useState } from 'react'
import { CAPTAIN } from './harbor_captain_config'
import type { HarborPlace } from './harbor_hotspots'
import { HarborPanel } from './harbor_panel'

function CaptainLine({ line, onCharacter }: { line: string; onCharacter: () => void }) {
  const [count, setCount] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches ? [...line].length : 0)
  const chars = [...line]
  const complete = count >= chars.length
  const emit=useRef(onCharacter)
  useEffect(()=>{emit.current=onCharacter},[onCharacter])
  useEffect(() => {
    if (complete) return
    let beat=0
    const timer = window.setInterval(() => {
      if(++beat%3===0)emit.current()
      setCount(value => value + 1)
    }, CAPTAIN.letterMs)
    const skip = (event: KeyboardEvent) => {
      if (event.code === 'KeyE' && !event.repeat) { event.preventDefault(); setCount(chars.length) }
    }
    window.addEventListener('keydown', skip, true)
    return () => { window.clearInterval(timer); window.removeEventListener('keydown', skip, true) }
  }, [complete, chars.length])
  return <p className="captain-line" onClick={() => setCount(chars.length)} aria-label={line}>
    <span aria-hidden="true">{chars.slice(0, count).join('')}</span>
    {!complete && <button type="button" onClick={() => setCount(chars.length)}>跳过逐字显示</button>}
  </p>
}

type CaptainProps = {
  places: readonly HarborPlace[]; visited: ReadonlySet<string>; closing: boolean;
  onClose: () => void; onExited: () => void; onTour: () => void; onDrive: () => void; onTravel: (id: string) => void
  onCharacter: () => void
}
type Node = keyof typeof CAPTAIN.dialogue

function GuidePlaces({ places, selected, onSelect, onTravel }: {
  places: readonly HarborPlace[]; selected: HarborPlace | undefined;
  onSelect: (id: string | null) => void; onTravel: (id: string) => void
}) {
  if (selected) return <div className="captain-options">
    <button type="button" onClick={() => onTravel(selected.hotspot.id)}>{CAPTAIN.travelLabel}</button>
    <button type="button" onClick={() => onSelect(null)}>{CAPTAIN.backLabel}</button>
  </div>
  return <div className="captain-options">
    {places.map(place => <button type="button" key={place.hotspot.id}
      onClick={() => onSelect(place.hotspot.id)}>{place.title}</button>)}
  </div>
}

export function HarborCaptainDialogue(props: CaptainProps) {
  const { places, visited, closing, onClose, onExited, onTour, onDrive, onTravel,onCharacter } = props
  const [node, setNode] = useState<Node>('root')
  const [guideId, setGuideId] = useState<string | null>(null)
  const guide = CAPTAIN.guidePlaces.flatMap(id => places.find(place => place.hotspot.id === id) ?? [])
  const selected = guide.find(place => place.hotspot.id === guideId)
  const suggestion = guide.find(place => !visited.has(place.hotspot.id))
  const config = CAPTAIN.dialogue[node]
  const line = (guideId && CAPTAIN.placeDescriptions[guideId]) || config.text || CAPTAIN.placeholder
  return (
    <HarborPanel wide closing={closing} onClose={onClose} onExited={onExited} placement="bottom">
      <article>
        <div className="harbor-panel-heading">
          <h2 id="harbor-detail-title" tabIndex={-1}>{selected?.title ?? CAPTAIN.title}</h2>
          <button type="button" className="harbor-detail-close" onClick={onClose} aria-label="结束交谈">×</button>
        </div>
        <CaptainLine key={guideId || node} line={line} onCharacter={onCharacter}/>
        {node === 'root' && <p>{suggestion ? CAPTAIN.unvisitedPrefix + suggestion.title : CAPTAIN.noRecommendation}</p>}
        {node === 'guide' && <GuidePlaces places={guide} selected={selected} onSelect={setGuideId} onTravel={onTravel} />}
        {!selected && <div className="captain-options">{config.options.map(option =>
          <button type="button" key={option.text} onClick={() => {
            if (option.action === 'tour') onTour()
            else if (option.action === 'drive') onDrive()
            else if (option.action === 'close') onClose()
            else { setGuideId(null); setNode(option.next) }
          }}>{option.text}</button>)}</div>}
      </article>
    </HarborPanel>
  )
}
