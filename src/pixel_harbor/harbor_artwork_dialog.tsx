import { useLayoutEffect, useRef, useState } from 'react'
import type { HarborArtwork } from './harbor_art'
import { evalStation } from './eval_station_config'
import { EvalStationContent } from './eval_station_content'
import { HarborPanel } from './harbor_panel'

export type HarborDetail =
  | { artwork: HarborArtwork }
  | { artworks: HarborArtwork[] }
  | { evaluation: true }
  | { label: string; note: string }

function PortfolioGrid({ artworks, onSelect }: {
  artworks: HarborArtwork[]
  onSelect: (artwork: HarborArtwork) => void
}) {
  return (
    <ul className="harbor-gallery">
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <button type="button" onClick={() => onSelect(artwork)}>
            <img src={artwork.image} alt="" loading="lazy" />
            <strong>{artwork.title}</strong>
            <small>{artwork.category} · {artwork.year}</small>
          </button>
        </li>
      ))}
    </ul>
  )
}

function getPanelTitle(detail: HarborDetail) {
  if ('label' in detail) return detail.label
  if ('artworks' in detail) return '作品船'
  if ('evaluation' in detail) return evalStation.title
  return '作品'
}

export function HarborArtworkDialog({ detail, closing, onClose, onExited }: {
  detail: HarborDetail; closing: boolean; onClose: () => void; onExited: () => void
}) {
  const heading = useRef<HTMLHeadingElement>(null)
  const [selected, setSelected] = useState<HarborArtwork>()

  const artworks = 'artworks' in detail ? detail.artworks : undefined
  const artwork = 'artwork' in detail ? detail.artwork : selected
  const title = artwork?.title ?? getPanelTitle(detail)

  useLayoutEffect(() => {
    if (artworks) heading.current?.focus({ preventScroll: true })
  }, [artworks, artwork])

  return (
    <HarborPanel wide={Boolean((artworks && !artwork) || 'evaluation' in detail)}
      closing={closing} onClose={onClose} onExited={onExited}>
      <article>
        <div className="harbor-panel-heading">
          <h2 id="harbor-detail-title" ref={heading} tabIndex={-1}>{title}</h2>
          <button type="button" className="harbor-detail-close" onClick={onClose} aria-label="关闭详情">×</button>
        </div>
        {artwork && <>
          <img className="harbor-artwork-large" src={artwork.image} alt={artwork.title} />
          <p className="harbor-detail-meta">{artwork.category} · {artwork.year}</p>
          <p>{artwork.description}</p>
          {artworks && <button type="button" className="harbor-gallery-back" onClick={() => setSelected(undefined)}>← 返回作品集</button>}
        </>}
        {artworks && !artwork && <PortfolioGrid artworks={artworks} onSelect={setSelected} />}
        {'evaluation' in detail && <EvalStationContent />}
        {'note' in detail && <p>{detail.note}</p>}
      </article>
    </HarborPanel>
  )
}
