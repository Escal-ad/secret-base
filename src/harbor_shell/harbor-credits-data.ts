import { useEffect, useState } from 'react'
import type { Credits } from './harbor-audio-config'
import type { HarborAudio } from './harbor-audio'

export function useCredits(audio: HarborAudio) {
  const [credits, setCredits] = useState<Credits | null>(null)
  useEffect(() => {
    let active = true
    async function load() {
      const payload = await audio.credits()
      if (active) setCredits(payload)
    }
    void load()
    return () => { active = false }
  }, [audio])
  return credits
}
