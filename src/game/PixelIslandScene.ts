import Phaser from 'phaser'

type Exhibit = { x: number; y: number; title: string; key: string; color: number }

export class PixelIslandScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Container
  private keys!: Record<string, Phaser.Input.Keyboard.Key>
  private message!: Phaser.GameObjects.Text
  private exhibits: Exhibit[] = []
  private motion = { x: 0, y: 0 }
  private interacting = false

  constructor() { super('pixel-island') }

  create() {
    this.drawRoom()
    this.drawExhibits()
    this.player = this.add.container(400, 280)
    this.drawPlayer()
    this.message = this.add.text(400, 410, '方向键 / WASD 移动 · 靠近展品按 E', { fontFamily: 'monospace', fontSize: '13px', color: '#fff4cf', backgroundColor: '#211e36', padding: { x: 12, y: 8 } }).setOrigin(0.5).setDepth(20)
    this.keys = this.input.keyboard!.addKeys('W,A,S,D,UP,DOWN,LEFT,RIGHT,E') as Record<string, Phaser.Input.Keyboard.Key>
  }

  private drawRoom() {
    this.add.rectangle(400, 220, 800, 440, 0x202942)
    this.add.rectangle(400, 110, 800, 170, 0x313a58)
    this.add.rectangle(400, 196, 800, 8, 0xd38b91)
    for (let row = 0; row < 6; row++) for (let col = 0; col < 10; col++) {
      const x = 60 + col * 76 + (row % 2) * 38
      const y = 265 + row * 31
      this.add.polygon(x, y, [0, -16, 38, 0, 0, 16, -38, 0], (row + col) % 2 ? 0xc5b9a4 : 0xd5c9b2).setStrokeStyle(1, 0xb5aa98)
    }
    this.add.rectangle(154, 126, 96, 82, 0xa0bac1).setStrokeStyle(7, 0x805d62)
    this.add.circle(646, 72, 22, 0xf0ca87)
    this.add.rectangle(642, 72, 6, 34, 0xf8e4bb)
    this.add.rectangle(623, 72, 36, 6, 0xf8e4bb)
  }

  private drawExhibits() {
    const graphics = this.add.graphics()
    const items: Exhibit[] = [
      { x: 230, y: 242, title: '月下小屋', key: 'moon-cabin', color: 0xe5bb76 },
      { x: 405, y: 204, title: '雨天便利店', key: 'rain-shop', color: 0xd8809d },
      { x: 570, y: 238, title: '星期天的花', key: 'sunday-flower', color: 0x8caa7b },
    ]
    this.exhibits = items
    items.forEach((item, index) => {
      graphics.fillStyle(0x37334b).fillRect(item.x - 38, item.y - 31, 76, 58)
      graphics.lineStyle(5, item.color).strokeRect(item.x - 34, item.y - 27, 68, 48)
      graphics.fillStyle([0x52668b, 0x635078, 0x786050][index]).fillRect(item.x - 27, item.y - 20, 54, 34)
      graphics.fillStyle(item.color).fillRect(item.x - 5, item.y - 18, 10, 30)
      this.add.text(item.x, item.y + 35, item.title, { fontFamily: 'sans-serif', fontSize: '12px', color: '#fff4df', backgroundColor: '#39354c', padding: { x: 6, y: 3 } }).setOrigin(0.5).setDepth(5)
    })
    this.add.rectangle(400, 347, 116, 34, 0x80645e).setStrokeStyle(3, 0xe4c391).setDepth(3)
    this.add.rectangle(400, 326, 104, 26, 0xd1b58f).setDepth(3)
  }

  private drawPlayer() {
    const shadow = this.add.ellipse(0, 14, 34, 12, 0x263046, 0.45)
    const body = this.add.rectangle(0, 0, 23, 26, 0x7394a0).setStrokeStyle(2, 0x28364b)
    const head = this.add.rectangle(0, -16, 20, 19, 0xf0c49f).setStrokeStyle(2, 0x28364b)
    const hair = this.add.rectangle(0, -24, 22, 7, 0x504255)
    const eyes = this.add.rectangle(4, -16, 3, 3, 0x28364b)
    const scarf = this.add.rectangle(0, -4, 24, 5, 0xe98288)
    this.player.add([shadow, body, head, hair, eyes, scarf])
    this.player.setDepth(10)
  }

  setMotion(x: number, y: number) { this.motion = { x, y } }
  interact() { this.interacting = true }

  update(_time: number, delta: number) {
    const keyboard = this.keys
    const x = this.motion.x + Number(keyboard.LEFT.isDown || keyboard.A.isDown) * -1 + Number(keyboard.RIGHT.isDown || keyboard.D.isDown)
    const y = this.motion.y + Number(keyboard.UP.isDown || keyboard.W.isDown) * -1 + Number(keyboard.DOWN.isDown || keyboard.S.isDown)
    const magnitude = Math.hypot(x, y) || 1
    this.player.x = Phaser.Math.Clamp(this.player.x + (x / magnitude) * delta * 0.16, 78, 722)
    this.player.y = Phaser.Math.Clamp(this.player.y + (y / magnitude) * delta * 0.12, 170, 365)
    const nearest = this.exhibits.map(item => ({ item, distance: Phaser.Math.Distance.Between(this.player.x, this.player.y, item.x, item.y) })).sort((a, b) => a.distance - b.distance)[0]
    const ready = nearest.distance < 72
    this.message.setText(ready ? `靠近了「${nearest.item.title}」· 按 E 查看` : '方向键 / WASD 移动 · 靠近展品按 E')
    if (ready && (keyboard.E.isDown || this.interacting)) {
      this.game.events.emit('open-artwork', nearest.item.key)
      keyboard.E.reset()
    }
    this.interacting = false
  }
}
