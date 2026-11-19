import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// 注册 service worker：满足「添加到主屏幕后全屏启动」的条件。
// 不做缓存，改了站点手机端打开就是最新版。
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', () => {
    const url = `${import.meta.env.BASE_URL}sw.js`
    void navigator.serviceWorker.register(url).catch(() => undefined)
  })
}
