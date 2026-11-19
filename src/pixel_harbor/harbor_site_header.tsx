import { harborProfile, PROFILE_UI } from './harbor_profile'
import { useHarborResume } from './harbor_resume'

export function HarborSiteHeader({ onToggle }: { onToggle: () => void }) {
  const { name, namePlaceholder } = harborProfile
  return (
    <header className="harbor-site-header">
      <div className="site-identity">
        <strong>{name.trim() || namePlaceholder}</strong>
      </div>
      <div className="site-actions">
        <button className="site-button mode-toggle" type="button" onClick={onToggle}>返回渔港</button>
      </div>
    </header>
  )
}

export function HarborResumeButton() {
  const path = harborProfile.resumePdf.trim()
  const ready = useHarborResume(path)
  return ready ? <a className="site-button" href={path} download>{PROFILE_UI.download}</a>
    : <button className="site-button" type="button" disabled title={PROFILE_UI.resumeMissing}
      aria-label={PROFILE_UI.resumeMissing}>{PROFILE_UI.download}</button>
}
