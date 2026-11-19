import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { HarborReading } from './pixel_harbor/harbor_reading'
import { HarborSiteHeader } from './pixel_harbor/harbor_site_header'
import { ProfileDiagnostics } from './pixel_harbor/harbor-profile-content'
import { HarborEntry, HarborLoading } from './harbor_shell/harbor-entry'
import { createHarborAudio } from './harbor_shell/harbor-audio'
import { useHarborSettings } from './harbor_shell/harbor-settings'
import { lockLandscape } from './harbor_shell/harbor-mobile'
import './pixel_harbor/harbor_site.css'
import './harbor_shell/harbor-shell.css'

const PixelHarbor = lazy(async () => ({ default: (await import('./pixel_harbor/pixel_harbor')).PixelHarbor }))
type Page = 'entry' | 'read' | 'scene'

function startingPage(): Page {
  const query = new URLSearchParams(location.search)
  if (query.get('mode') === 'read') return 'read'
  // 入口页按所有者决定保持跳过：默认直接进 3D 场景，不再重新设计。需要时加 ?entry=1 才显示入口页。
  if (query.get('entry') === '1') return 'entry'
  return 'scene'
}

export default function App() {
  const [page, setPage] = useState(startingPage)
  const [audio] = useState(createHarborAudio)
  const settings = useHarborSettings()
  const { values, warning, update } = settings
  useEffect(() => {
    if (page === 'entry') audio.prepare()
    // 直接进 3D 场景时没有点击事件，先把音频上下文建起来，第一次点击就能出声
    if (page === 'scene') void audio.unlock()
    if (page !== 'scene') audio.sync({ settings: values, scene: { night: false, weather: 'clear' } })
  }, [audio, page, values])
  useEffect(() => {
    document.addEventListener('visibilitychange', audio.visibility)
    document.addEventListener('pointerup', audio.resumeOnGesture)
    document.addEventListener('keydown', audio.resumeOnGesture)
    return () => {
      document.removeEventListener('visibilitychange',audio.visibility)
      document.removeEventListener('pointerup',audio.resumeOnGesture)
      document.removeEventListener('keydown',audio.resumeOnGesture)
      audio.dispose()
    }
  }, [audio])
  const switchPage = useCallback((next: Page) => {
    const url = new URL(location.href)
    if (next === 'read') url.searchParams.set('mode','read')
    else url.searchParams.delete('mode')
    url.hash=''
    history.replaceState(history.state,'',url)
    window.scrollTo(0,0)
    setPage(next)
  }, [])
  const read = useCallback(() => switchPage('read'), [switchPage])
  // 手机上首次点击时请求全屏 + 锁横屏（浏览器要求用户手势）
  function enter() { void audio.unlock(); void lockLandscape(); switchPage('scene') }
  if (page === 'entry') return <>
    {warning && <p className="site-warning" role="status">{warning}</p>}
    <HarborEntry settings={values} onUpdate={update} onEnter={enter} onRead={read} />
  </>
  if (page === 'read') return <>
    <HarborSiteHeader onToggle={enter} />
    <ProfileDiagnostics />
    {warning && <p className="site-warning" role="status">{warning}</p>}
    <HarborReading />
  </>
  return <Suspense fallback={<HarborLoading progress={5} />}>
    <PixelHarbor onRead={read} settings={values} updateSettings={update} audio={audio} warning={warning} />
  </Suspense>
}
