import type { CSSProperties } from 'react'
import { config } from '../site-config'
import { hasLocalAsset } from './harbor-local-assets'
import { assetPath } from './harbor-settings'

const LIGHTS = [
  [5, 32, 0], [13, 70, 2], [26, 23, 1], [34, 75, 4], [23, 54, 3],
  [63, 17, 3], [74, 72, 1], [83, 36, 4], [92, 57, 2], [67, 45, 0],
] as const

export function HarborEntryStage() {
  const { heroImage, scarfImage } = config.entry
  const hasHero = hasLocalAsset(heroImage)
  return <div className="entry-stage" aria-hidden="true">
    <div className="entry-lights">{LIGHTS.map(([left, top, delay]) =>
      <i key={left} style={{ left: `${left}%`, top: `${top}%`, '--drift-delay': `-${delay}s` } as CSSProperties} />,
    )}</div>
    <div className="entry-stage-shadow" />
    <div className="entry-platform">
      <div className="entry-deck-side" />
      <div className="entry-deck" />
      <div className="entry-actor">
        {hasHero ? <>
          <img className="entry-hero" src={assetPath(heroImage)} alt="" />
          {hasLocalAsset(scarfImage) && <img className="entry-scarf" src={assetPath(scarfImage)} alt="" />}
        </> : <span className="entry-hero-silhouette" />}
      </div>
      <span className="entry-lantern" />
      <span className="entry-barrel" />
      <span className="entry-float" />
    </div>
  </div>
}
