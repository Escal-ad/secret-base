// 手机上把网页锁成横屏全屏：必须先进入全屏，浏览器才允许锁定方向。
// 任何一步失败都静默跳过，桌面浏览器不受影响。
export async function lockLandscape() {
  if (!window.matchMedia('(pointer: coarse)').matches) return false
  try {
    const root = document.documentElement
    if (!document.fullscreenElement) await root.requestFullscreen?.()
    const orientation = screen.orientation as ScreenOrientation & { lock?: (o: string) => Promise<void> }
    await orientation?.lock?.('landscape')
    return true
  } catch {
    return false
  }
}

export function isPortraitPhone() {
  return window.matchMedia('(pointer: coarse)').matches
    && window.matchMedia('(orientation: portrait)').matches
}
