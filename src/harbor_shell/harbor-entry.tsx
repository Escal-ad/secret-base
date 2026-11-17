import { useEffect, useState } from 'react'
import { config } from '../site-config'
import { SETTINGS, isSmallDevice } from './harbor-settings'
import type { Settings } from './harbor-settings'
import { HarborEntryStage } from './harbor-entry-stage'
import { HarborEntrySound } from './harbor-entry-sound'
import './harbor-entry.css'

type EntryProps = { settings: Settings; onUpdate: (next: Partial<Settings>) => void; onEnter: () => void; onRead: () => void }

export function HarborEntry({ settings, onUpdate, onEnter, onRead }: EntryProps) {
  const { entry, siteTitle } = config
  return <main className="harbor-entry" data-reduced={settings.reduced} aria-label={siteTitle}>
    <div className="entry-horizon" aria-hidden="true" />
    <div className="entry-waves" aria-hidden="true" />
    <section className="entry-showcase" aria-label={siteTitle}>
      {entry.showSiteTitle && <h1 className="entry-title">{siteTitle}</h1>}
      <div className="entry-layout">
        <HarborEntryStage />
        <div className="entry-actions">
          <button type="button" aria-label={entry.enterLabel} onClick={onEnter}>
            {entry.enterLabel}<span className="entry-arrow" aria-hidden="true" />
          </button>
          <button type="button" aria-label={entry.readLabel} onClick={onRead}>
            {entry.readLabel}<span className="entry-arrow" aria-hidden="true" />
          </button>
        </div>
        <HarborEntrySound settings={settings} onUpdate={onUpdate} />
      </div>
      {isSmallDevice() && <label className="entry-quality" title={SETTINGS.lowQualityNotice}>{entry.qualityLabel}
        <select aria-label="进入前画质" value={settings.quality} onChange={event => onUpdate({ quality: event.target.value as Settings['quality'] })}>
          <option value="high">高</option><option value="medium">中</option><option value="low">低</option>
        </select></label>}
    </section>
  </main>
}

export function HarborLoading({ progress }: { progress: number }) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => setIndex(current => (current + 1) % SETTINGS.loadLines.length), SETTINGS.loadingLineMs)
    return () => window.clearInterval(timer)
  }, [])
  return <div className="entry-loading" role="status">
    <p>{SETTINGS.loadLines[index]}</p>
    <progress aria-label="渔港加载进度" value={progress} max={100} />
  </div>
}
