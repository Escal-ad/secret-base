import { useEffect, useRef, useState } from 'react'
import { evalStation } from './eval_station_config'

class VideoSizeError extends Error {}
const MP4_MIME = 'video/mp4'

async function readVideo(src: string, maxBytes: number, signal: AbortSignal) {
  const response = await fetch(src, { signal })
  if (!response.ok || !response.body || response.headers.get('content-type')?.includes('text/html')) {
    throw new Error(evalStation.videoError)
  }
  if (Number(response.headers.get('content-length')) > maxBytes) {
    await Promise.allSettled([response.body.cancel()])
    throw new VideoSizeError()
  }
  const reader = response.body.getReader()
  const parts: BlobPart[] = []
  let size = 0
  try {
    for (;;) {
      const { value, done } = await reader.read()
      if (done) return new Blob(parts, { type: MP4_MIME })
      size += value.byteLength
      if (size > maxBytes) throw new VideoSizeError()
      parts.push(value.slice().buffer)
    }
  } finally {
    await Promise.allSettled([reader.cancel()])
    reader.releaseLock()
  }
}

function useEvalRecording() {
  const [url, setUrl] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const controller = useRef<AbortController | null>(null)
  const objectUrl = useRef('')
  const { src, maxBytes } = evalStation.video
  useEffect(() => () => {
    controller.current?.abort()
    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current)
  }, [])

  async function play() {
    const request = new AbortController()
    controller.current = request
    setLoading(true)
    setStatus(evalStation.videoLoading)
    try {
      const blob = await readVideo(src, maxBytes, request.signal)
      if (request.signal.aborted) return
      objectUrl.current = URL.createObjectURL(blob)
      setUrl(objectUrl.current)
      setStatus('')
    } catch (error) {
      if (!request.signal.aborted) setStatus(error instanceof VideoSizeError ? evalStation.videoTooLarge : evalStation.videoError)
    } finally {
      if (!request.signal.aborted) setLoading(false)
    }
  }

  function reportPlaybackError() {
    URL.revokeObjectURL(objectUrl.current)
    objectUrl.current = ''
    setUrl('')
    setStatus(evalStation.videoError)
  }

  return { url, status, loading, play, reportPlaybackError }
}

export function EvalStationVideo({ textOnly }: { textOnly: boolean }) {
  const { url, status, loading, play, reportPlaybackError } = useEvalRecording()
  const { poster } = evalStation.video
  return <div className="eval-video-preview">
      {url ? <video className="eval-video" src={url} poster={textOnly ? undefined : poster || undefined} controls autoPlay playsInline
        aria-label={evalStation.videoLabel} onError={reportPlaybackError} /> : <>
        {poster && !textOnly && <img src={poster} alt="" loading="lazy" />}
        <button type="button" disabled={loading} onClick={play}>{evalStation.videoLabel}</button>
      </>}
      <p role="status">{status}</p>
    </div>
}
