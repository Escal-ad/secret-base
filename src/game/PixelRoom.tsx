import { useEffect, useRef, useState } from 'react'
import Phaser from 'phaser'
import { PixelIslandScene } from './PixelIslandScene'
import './PixelRoom.css'

type PixelRoomProps = { onClose: () => void; onOpenArtwork: (key: string) => void }

export function PixelRoom({ onClose, onOpenArtwork }: PixelRoomProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<PixelIslandScene | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!mountRef.current) return
    const scene = new PixelIslandScene()
    sceneRef.current = scene
    const game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: mountRef.current,
      width: 800,
      height: 440,
      backgroundColor: '#202942',
      pixelArt: true,
      render: { antialias: false },
      scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
      scene,
    })
    game.events.once('ready', () => setReady(true))
    game.events.on('open-artwork', onOpenArtwork)
    return () => {
      game.events.off('open-artwork', onOpenArtwork)
      sceneRef.current = null
      game.destroy(true)
    }
  }, [onOpenArtwork])

  const holdMotion = (x: number, y: number) => ({
    onPointerDown: (event: React.PointerEvent<HTMLButtonElement>) => { event.currentTarget.setPointerCapture(event.pointerId); sceneRef.current?.setMotion(x, y) },
    onPointerUp: () => sceneRef.current?.setMotion(0, 0),
    onPointerCancel: () => sceneRef.current?.setMotion(0, 0),
    onPointerLeave: () => sceneRef.current?.setMotion(0, 0),
  })

  return (
    <div className="room-backdrop" role="presentation" onClick={onClose}>
      <section className="room-dialog" role="dialog" aria-modal="true" aria-labelledby="room-title" onClick={event => event.stopPropagation()}>
        <header className="room-header"><div><p className="eyebrow">A LITTLE PIXEL WORLD</p><h2 id="room-title">作品小岛</h2></div><button className="room-close" onClick={onClose} type="button" aria-label="关闭小岛">×</button></header>
        <p className="room-help">走近墙上的作品，按 E 键打开；手机上可以用下方方向键移动。</p>
        <div className="phaser-mount" ref={mountRef} aria-label="可操控的像素作品展厅" />
        {!ready && <p className="room-loading">小岛正在加载…</p>}
        <div className="room-footer"><div className="dpad" aria-label="移动角色"><button type="button" aria-label="向上" {...holdMotion(0, -1)}>↑</button><span><button type="button" aria-label="向左" {...holdMotion(-1, 0)}>←</button><button type="button" aria-label="向下" {...holdMotion(0, 1)}>↓</button><button type="button" aria-label="向右" {...holdMotion(1, 0)}>→</button></span></div><button className="interact-button" type="button" onClick={() => sceneRef.current?.interact()}>E　查看附近作品</button><span className="keyboard-tip">键盘：W A S D / ↑ ↓ ← →</span></div>
      </section>
    </div>
  )
}
