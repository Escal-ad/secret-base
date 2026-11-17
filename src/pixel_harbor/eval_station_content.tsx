import { evalStation } from './eval_station_config'
import { EvalStationVideo } from './eval_station_video'

function EvalLinks({ links }: { links: readonly { label: string; url: string }[] }) {
  const visible = links.filter(({ label, url }) => label.trim() && url.trim())
  if (!visible.length) return null
  return <ul className="eval-links">{visible.map(({ label, url }) =>
    <li key={url}><a href={url} target="_blank" rel="noreferrer">{label}</a></li>)}</ul>
}

function EvalModules({ textOnly }: { textOnly: boolean }) {
  return (
    <section aria-label={evalStation.modulesTitle}>
      <h3>{evalStation.modulesTitle}</h3>
      <div className="eval-modules">
        {evalStation.modules.map(module => <article key={module.id} data-featured={module.id === 'world-model'}>
          {!textOnly && (module.thumbnail ? <img src={module.thumbnail} alt="" loading="lazy" />
            : <div className="eval-thumb-placeholder">{evalStation.thumbnailPlaceholder}</div>)}
          <h4>{module.title}</h4>
          <span className="eval-source">{module.source ?? evalStation.sourcePlaceholder}</span>
          <p>{module.description || evalStation.modulePlaceholder}</p>
          <EvalLinks links={module.links} />
        </article>)}
      </div>
    </section>
  )
}

export function EvalStationContent({ textOnly = false }: { textOnly?: boolean }) {
  const showWorkbench = Boolean(evalStation.workbenchUrl.trim())
  const showMethods = evalStation.methods.some(link => link.label.trim() && link.url.trim())
  const showVideo = Boolean(evalStation.video.src.trim())
  return (
    <div className="eval-station" data-text-only={textOnly}>
      <p className="eval-disclosure">{evalStation.disclosure}</p>
      <section>
        <h3>{evalStation.introTitle}</h3>
        <p>{evalStation.introduction}</p>
      </section>
      <EvalModules textOnly={textOnly} />
      <section>
        <h3>{evalStation.resourcesTitle}</h3>
        {showVideo && <EvalStationVideo textOnly={textOnly} />}
        <EvalLinks links={evalStation.methods} />
        {showWorkbench && <a className="eval-workbench" href={evalStation.workbenchUrl} target="_blank" rel="noreferrer">{evalStation.workbenchLabel}</a>}
        {!showVideo && !showWorkbench && !showMethods && <p>{evalStation.resourcePlaceholder}</p>}
      </section>
    </div>
  )
}
