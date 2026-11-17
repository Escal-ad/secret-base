import { HARBOR_LIGHTING, RENDER_QUALITY } from './harbor_lighting_config'

export function createLightTransition(night: boolean) {
  let current = Number(night)
  let from = current
  let target = current
  let elapsed: number = HARBOR_LIGHTING.transitionSeconds
  return {
    setNight(next: boolean) {
      if (Number(next) === target) return
      from = current
      target = Number(next)
      elapsed = 0
    },
    step(seconds: number) {
      elapsed = Math.min(HARBOR_LIGHTING.transitionSeconds, elapsed + seconds)
      const ratio = elapsed / HARBOR_LIGHTING.transitionSeconds
      current = from + (target - from) * (ratio * ratio * (3 - 2 * ratio))
      return current
    },
  }
}

export function createRenderQuality(simplified: boolean, report: (message: string) => void) {
  const flags = { particles:true, snow:true, islands:true, residents:true, scenery: true, gulls:true, cloth:true,
    shadows: !simplified, beam: true, reflections: true, halos: true, wake: !simplified }
  let elapsed = 0
  let frames = 0
  let tier = 0
  return {
    flags, simplified, get tier() { return tier },
    sample(seconds: number) {
      if (!seconds || tier >= RENDER_QUALITY.order.length) return
      elapsed += Math.min(seconds, RENDER_QUALITY.maxSampleSeconds)
      frames++
      if (elapsed < RENDER_QUALITY.sampleSeconds) return
      const fps = frames / elapsed
      elapsed = 0
      frames = 0
      if (fps >= RENDER_QUALITY.minimumFps) return
      while (tier < RENDER_QUALITY.order.length && !flags[RENDER_QUALITY.order[tier]]) tier++
      if (tier >= RENDER_QUALITY.order.length) return
      flags[RENDER_QUALITY.order[tier]] = false
      report(`${RENDER_QUALITY.noticePrefix}${RENDER_QUALITY.notices[tier]}。`)
      tier++
    },
  }
}
