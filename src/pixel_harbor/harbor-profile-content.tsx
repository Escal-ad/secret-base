import { HarborContactInfo } from './harbor_contact_info'
import { harborProfile, PROFILE_UI } from './harbor_profile'

const READING_ANCHORS: Readonly<Record<string, string>> = { eval: 'evaluation', portfolio: 'works' }

function ProfileIntroduction() {
  const { avatar, tagline, biography, skills } = harborProfile
  const visibleSkills = skills.filter(skill => skill.trim())
  return <>
    {avatar && <img className="mayor-avatar" src={avatar} alt="头像" />}
    <p><strong>{tagline.trim() || PROFILE_UI.placeholder}</strong></p>
    <p>{biography.trim() || PROFILE_UI.placeholder}</p>
    <ul className="mayor-skills">{visibleSkills.length
      ? visibleSkills.map(skill => <li key={skill}>{skill}</li>) : <li>{PROFILE_UI.fieldLabels.skills} · {PROFILE_UI.placeholder}</li>}</ul>
  </>
}

function ProfileProjects() {
  const { projects } = harborProfile
  if (!projects.length) return <p>{PROFILE_UI.placeholder}</p>
  return <ul className="mayor-projects">
    {projects.map((project, index) => <li key={`${project.title}-${index}`}>
      <strong>{project.title || PROFILE_UI.placeholder}</strong>
      <p>{project.summary || PROFILE_UI.placeholder}</p>
      <small>{project.source || PROFILE_UI.placeholder}</small>
      {project.url && <p><a href={project.url} target="_blank" rel="noreferrer">{project.title || '项目链接'}</a></p>}
      {project.jumpTo && <p><a href={`#${READING_ANCHORS[project.jumpTo] ?? project.jumpTo}`}>{PROFILE_UI.visitProject}</a></p>}
    </li>)}
  </ul>
}

function ProfileContact() {
  const links = harborProfile.links.filter(link => link.label.trim() && link.url.trim())
  return <>
    <HarborContactInfo showIntro={false} showEmpty />
    {links.length ? <ul className="mayor-links">{links.map(link =>
      <li key={link.url}><a href={link.url} target="_blank" rel="noreferrer">{link.label}</a></li>)}</ul>
      : <p>{PROFILE_UI.fieldLabels.links} · {PROFILE_UI.placeholder}</p>}
  </>
}

export function HarborProfileContent() {
  return <>
    <h3>{PROFILE_UI.tabs.intro}</h3><ProfileIntroduction />
    <h3>{PROFILE_UI.tabs.projects}</h3><ProfileProjects />
    <h3>{PROFILE_UI.tabs.contact}</h3><ProfileContact />
  </>
}

function listMissingProfileFields() {
  const fields = Object.entries(PROFILE_UI.fieldLabels).flatMap<string>(([key, label]) => {
    const value = harborProfile[key as keyof typeof PROFILE_UI.fieldLabels]
    if (typeof value === 'string') return value.trim() ? [] : [label]
    return value.length && value.some(item => typeof item !== 'string' || item.trim()) ? [] : [label]
  })
  const { links, projects } = harborProfile
  links.forEach(({ label, url }, index) => {
    if (!label.trim()) fields.push(`链接 ${index + 1}名称`)
    if (!url.trim()) fields.push(`链接 ${index + 1}网址`)
  })
  projects.forEach(({ title, summary, url, source }, index) => {
    const projectFields = [[title, '标题'], [summary, '说明'], [url, '网址'], [source, '来源']]
    projectFields.forEach(([value, label]) => {
      if (!value.trim()) fields.push(`项目 ${index + 1}${label}`)
    })
  })
  return fields
}

export function ProfileDiagnostics() {
  if (!import.meta.env.DEV) return null
  const missing = listMissingProfileFields()
  if (!missing.length) return null
  return <details className="profile-diagnostics"><summary>{PROFILE_UI.diagnostics}</summary>
    <ul>{missing.map(field => <li key={field}>{field}</li>)}</ul></details>
}
