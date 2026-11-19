import { harborProfile, PROFILE_UI } from './harbor_profile'

// 村长小屋面板：只放「名字 / 邮箱 / 小红书 / 个人网站」四样
function ProfileContact() {
  const { name, email, links } = harborProfile
  const visible = links.filter(link => link.url.trim())
  return <ul className="mayor-contact">
    <li><strong>名字</strong><span>{name.trim() || PROFILE_UI.placeholder}</span></li>
    <li><strong>邮箱</strong><span>{email.trim() || PROFILE_UI.placeholder}</span></li>
    {visible.map(link => <li key={link.url}><strong>{link.label}</strong>
      <span><a href={link.url} target="_blank" rel="noreferrer">{link.label}</a></span></li>)}
  </ul>
}

export function HarborProfileContent() {
  return <ProfileContact />
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
