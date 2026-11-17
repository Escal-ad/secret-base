import { PASTIME_PLACES } from '../harbor_pastimes/harbor-pastimes-config'
import { evalStation } from './eval_station_config'
import { EvalStationContent } from './eval_station_content'
import { ARTWORKS } from './harbor_art_catalog'
import { CAPTAIN } from './harbor_captain_config'
import { config } from '../site-config'
import { PLACE_LABELS } from './harbor_places_config'
import { LOOKOUT, SUNSET, VILLAGE } from './harbor_exploration_config'
import { LANDMARKS } from './harbor_layout'
import { PROFILE_UI } from './harbor_profile'
import { HarborProfileContent } from './harbor-profile-content'
import { SEA_LOCATIONS } from './harbor_sailing_config'
import { HILL } from '../harbor_expansion/harbor-hill-config'

const READING_LOCATIONS = [LOOKOUT, VILLAGE, SUNSET, CAPTAIN, ...SEA_LOCATIONS]

export function HarborReading() {
  return (
    <main className="harbor-reader" aria-labelledby="harbor-reader-title">
      <h1 id="harbor-reader-title">{config.siteTitle}</h1>
      <nav aria-label="地点目录">
        <a href="#works">作品船</a><a href="#evaluation">{evalStation.title}</a><a href="#notice">展览公告栏</a>
        {LANDMARKS.map(place => <a key={place.id} href={`#${place.id}`}>{place.label}</a>)}
        <a href={`#${PROFILE_UI.id}`}>了解我</a>
        {READING_LOCATIONS.map(place => <a key={place.id} href={`#${place.id}`}>{place.title}</a>)}
        {PASTIME_PLACES.map(({ place, title }) => <a key={place.id} href={`#${place.id}`}>{title}</a>)}
        <a href={`#${HILL.id}`}>{HILL.title}</a>
      </nav>
      <section id={PROFILE_UI.id}>
        <h2>了解我</h2>
        <HarborProfileContent />
      </section>
      <section id="works">
        <h2>作品船</h2>
        <ul className="reading-works">
          {ARTWORKS.map(work => <li key={work.id} id={work.id}>
            <h3>{work.title}</h3>
            <small>{work.category} · {work.year}</small>
            <p>{work.description}</p>
          </li>)}
        </ul>
      </section>
      <section id="evaluation">
        <h2>{evalStation.title}</h2>
        <EvalStationContent textOnly />
      </section>
      <section id="notice">
        <h2>展览公告栏</h2>
        <p>{PLACE_LABELS.places.notice.blurb}</p>
      </section>
      {LANDMARKS.map(place => <section key={place.id} id={place.id}>
        <h2>{place.label}</h2><p>{place.note}</p>
      </section>)}
      {READING_LOCATIONS.map(place => <section key={place.id} id={place.id}>
        <h2>{place.title}</h2><p>{place.note || PROFILE_UI.placeholder}</p>
      </section>)}
      {PASTIME_PLACES.map(({ place, title, blurb }) => <section id={place.id} key={place.id}>
        <h2>{title}</h2><p>{blurb}</p>
      </section>)}
      <section id={HILL.id}><h2>{HILL.title}</h2><p>{HILL.caption}</p></section>
    </main>
  )
}
