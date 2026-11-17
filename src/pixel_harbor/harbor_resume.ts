import { useEffect, useState } from 'react'

export function useHarborResume(path: string) {
  const [confirmed, setConfirmed] = useState('')
  useEffect(() => {
    const controller = new AbortController()
    if (!path) return
    async function checkPdf() {
      try {
        const response = await fetch(path, { method: 'HEAD', signal: controller.signal })
        const type = response.headers.get('content-type')?.split(';')[0]
        if (!controller.signal.aborted && response.ok && type === 'application/pdf') setConfirmed(path)
      } catch {
        if (!controller.signal.aborted) setConfirmed('')
      }
    }
    void checkPdf()
    return () => controller.abort()
  }, [path])
  return Boolean(path && confirmed === path)
}
