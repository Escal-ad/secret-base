import { PROFILE_UI } from './harbor_profile'
import { HarborProfileContent } from './harbor-profile-content'
import { config } from '../site-config'

// 文字阅读页：按用户要求只保留「了解我」这一节，其它内容一律不渲染。
export function HarborReading() {
  return (
    <main className="harbor-reader" aria-labelledby="harbor-reader-title">
      <h1 id="harbor-reader-title">{config.siteTitle}</h1>
      <section id={PROFILE_UI.id}>
        <h2>了解我</h2>
        <HarborProfileContent />
      </section>
    </main>
  )
}
