import { useEffect, useState } from 'react'
import { HarborPanel } from '../pixel_harbor/harbor_panel'
import { HarborHelp } from '../pixel_harbor/harbor_help'
import type { HarborPlace } from '../pixel_harbor/harbor_hotspots'
import type { HarborAudio } from './harbor-audio'
import { HarborCredits } from './harbor-credits'
import { useCredits } from './harbor-credits-data'
import { HarborSettingsForm } from './harbor-settings-form'
import { SETTINGS } from './harbor-settings'
import type { Settings } from './harbor-settings'
import { HarborMap } from './harbor-map'

export type MenuTab = keyof typeof SETTINGS.tabs
type Props = {
  initial: MenuTab; closing: boolean; onClose: () => void; onExited: () => void; onRead: () => void;
  audio: HarborAudio; settings: Settings; update: (changes: Partial<Settings>) => void; night: boolean; toggleNight: () => void;
  places: readonly HarborPlace[]; player?: {x:number; z:number; facing:number}; capture?: () => Promise<string | undefined>;
  onTravel: (place: HarborPlace) => void; onGuide: (place: HarborPlace) => void;
  onRecover: () => void; onCenter: () => void; onReturn?: () => void;
}

function MapPage({ places, player, capture, onTravel, onGuide }: Pick<Props, 'places'|'player'|'capture'|'onTravel'|'onGuide'>) {
  const [image, setImage] = useState<string>()
  useEffect(() => {
    let active = true
    async function bake() {
      try {
        const encoded = await capture?.()
        if (active) setImage(encoded)
      } catch {
        if (active) setImage(undefined)
      }
    }
    const frame = window.requestAnimationFrame(() => { void bake() })
    return () => { active = false; window.cancelAnimationFrame(frame) }
  }, [capture])
  if (!player) return null
  return <HarborMap places={places} player={player} image={image} onTravel={onTravel} onGuide={onGuide} />
}

function MenuPage({ tab, credits, ...props }: Props & { tab: MenuTab; credits: ReturnType<typeof useCredits> }) {
  if (tab === 'map') return <MapPage {...props} />
  if (tab === 'about') return <HarborCredits credits={credits} onRead={props.onRead} />
  if (tab === 'settings') return <HarborSettingsForm values={props.settings} update={props.update}
    night={props.night} toggleNight={props.toggleNight} credits={credits} />
  return <>
    <HarborHelp />
    <div className="scene-menu-controls">
      <button type="button" onClick={props.onCenter}>重置视角</button>
      <button type="button" onClick={props.onRecover}>我卡住了</button>
    </div>
  </>
}

export function HarborMainMenu(props: Props) {
  const [tab, setTab] = useState(props.initial)
  const credits = useCredits(props.audio)
  const { closing, onClose, onExited } = props
  return <HarborPanel wide closing={closing} onClose={onClose} onExited={onExited} placement={tab === 'map' ? 'full' : undefined}>
    <article data-menu-tab={tab}>
      <div className="harbor-panel-heading">
        <h2 id="harbor-detail-title" tabIndex={-1}>渔港菜单</h2>
        {props.onReturn && <button className="harbor-menu-return" type="button" onClick={props.onReturn}>回码头</button>}
        <button type="button" className="harbor-detail-close" aria-label="关闭菜单" onClick={onClose}>×</button>
      </div>
      <nav className="harbor-menu-tabs" role="tablist" aria-label="渔港菜单页签">
        {(Object.keys(SETTINGS.tabs) as MenuTab[]).map(key => <button key={key} type="button" role="tab"
          id={`harbor-tab-${key}`} aria-selected={key === tab} aria-controls="harbor-menu-page"
          onClick={() => setTab(key)}>{SETTINGS.tabs[key]}</button>)}
      </nav>
      <div role="tabpanel" id="harbor-menu-page" aria-labelledby={`harbor-tab-${tab}`}>
        <MenuPage {...props} tab={tab} credits={credits} />
      </div>
    </article>
  </HarborPanel>
}
