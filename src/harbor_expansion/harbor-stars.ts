import * as T from 'three'
import { DECK, groundElevation } from '../pixel_harbor/harbor_terrain'
import { seededRandom } from '../pixel_harbor/harbor_materials'
import type { ModelKit } from '../pixel_harbor/harbor_models'

// 夜空：流星 + 十二星座。只在「夜里且晴」的时候出现。
// 星座画在半径 190 米的虚拟天球上，每 45 秒换一个；看星座的望远镜放在山顶长凳旁边。
export const SKY = {
  domeRadius: 190,
  constellationSeconds: 45,
  starSize: 1.5,
  meteorCount: 14,
  meteorPeriod: [3, 7] as const,
  meteorLife: 0.75,
  meteorLength: 16,
  telescope: { x: -45.74, z: -9.17 },
  daytimeLabel: '看星空（白天看不到星星）',
  daytimeNote: '太阳还没落山，星星都被阳光盖住了。等天黑了再来。',
} as const

type Zodiac = { name: string; stars: readonly (readonly [number, number])[]; intro: string }

export const ZODIAC: readonly Zodiac[] = [
  { name: '白羊座', stars: [[0, 0], [1.6, 0.5], [2.7, 0.1], [3.6, 1.0]], intro: '白羊座是黄道第一宫，春分点所在的方向，代表新的开始。' },
  { name: '金牛座', stars: [[0, 0], [1.3, 0.7], [2.2, 1.5], [3.1, 1.2], [2.6, 0.3]], intro: '金牛座里有昴星团和蟹状星云，是冬天最亮眼的星座之一。' },
  { name: '双子座', stars: [[0, 0], [1.1, 0.9], [2.2, 1.6], [0.9, -0.8], [2.0, -1.3]], intro: '双子座的两颗主星北河二、北河三，在夜空中像一对并肩的兄弟。' },
  { name: '巨蟹座', stars: [[0, 0], [1.2, 0.5], [2.3, 0.2], [1.7, -0.9]], intro: '巨蟹座很暗，但中间的蜂巢星团用肉眼就能看到一团朦胧的光。' },
  { name: '狮子座', stars: [[0, 0], [1.4, 0.4], [2.6, 0.7], [2.4, -0.7], [1.2, -1.0]], intro: '狮子座春天的代表星座，轩辕十四是它最亮的那颗星。' },
  { name: '处女座', stars: [[0, 0], [1.5, 0.6], [2.6, 0.3], [3.4, 0.9], [2.2, -0.8]], intro: '处女座是黄道上面积第二大的星座，角宿一是全天第 16 亮星。' },
  { name: '天秤座', stars: [[0, 0], [1.2, 0.6], [2.2, 0.2], [1.4, -0.6]], intro: '天秤座原本是 Scorpius 的一对钳子，后来才独立成"秤"。' },
  { name: '天蝎座', stars: [[0, 0], [0.9, 0.8], [1.5, 1.7], [1.9, 0.9], [2.4, 0.1], [2.9, -0.8]], intro: '天蝎座的心宿二是红色超巨星，夏天南天最漂亮的一串星。' },
  { name: '射手座', stars: [[0, 0], [1.2, 0.7], [2.4, 0.4], [1.0, -0.8], [2.2, -1.1]], intro: '射手座方向就是银河系中心，那里藏着一个超大质量黑洞。' },
  { name: '摩羯座', stars: [[0, 0], [1.3, 0.4], [2.5, 0.1], [2.1, -0.9]], intro: '摩羯座形状像个倒三角，是黄道上最暗的星座之一。' },
  { name: '水瓶座', stars: [[0, 0], [1.4, 0.5], [2.4, 1.0], [2.9, 0.1], [2.0, -0.7]], intro: '水瓶座在秋天出现，附近有著名的宝瓶座流星雨。' },
  { name: '双鱼座', stars: [[0, 0], [1.2, 0.4], [2.3, 0.8], [3.2, 0.4], [2.6, -0.6]], intro: '双鱼座是黄道最后一宫，春分点现在就落在它里面。' },
] as const

let visibleZodiac: Zodiac = ZODIAC[0]
/** 此刻天上亮着的星座（望远镜面板要用）。 */
export function currentZodiac() { return visibleZodiac }

/** 每个星座在天球上的基准方位与高度（望远镜瞄准点用同一套）。 */
function baseAzimuth(index: number) { return index * (Math.PI * 2 / ZODIAC.length) + 0.4 }
function baseElevation(index: number) { return 0.62 + (index % 3) * 0.12 }

/** 望远镜要用的一组「星座瞄准点」：位置和天上画的星星完全一致。 */
export function zodiacTargets() {
  return ZODIAC.map((zodiac, index) => ({
    id: 'zodiac-' + zodiac.name, title: zodiac.name, night: true, caption: zodiac.intro,
    position: domePoint(baseAzimuth(index), baseElevation(index), SKY.domeRadius * 0.8),
  }))
}

function domePoint(azimuth: number, elevation: number, distance: number) {
  return new T.Vector3(
    Math.cos(elevation) * Math.cos(azimuth) * distance,
    Math.sin(elevation) * distance,
    Math.cos(elevation) * Math.sin(azimuth) * distance,
  )
}

/** 十二星座的星空：每个星座一组小白点，同一时间只亮一个，45 秒换下一个。 */
export function createStarSky(scene: T.Scene) {
  const groups = ZODIAC.map((zodiac, index) => {
    const group = new T.Group()
    // 每个星座占天上一块固定位置，离地平线 30°~60°
    const azimuth0 = baseAzimuth(index)
    const elevation0 = baseElevation(index)
    for (const [dx, dy] of zodiac.stars) {
      const azimuth = azimuth0 + dx * 0.045
      const elevation = elevation0 + dy * 0.045
      const point = domePoint(azimuth, elevation, SKY.domeRadius)
      const star = new T.Mesh(new T.BoxGeometry(), new T.MeshBasicMaterial({
        color: '#fdf6e3', transparent: true, opacity: 0, depthWrite: false,
      }))
      star.raycast = () => {}
      star.position.copy(point)
      star.scale.setScalar(SKY.starSize)
      star.lookAt(0, 0, 0)
      group.add(star)
    }
    group.visible = false
    scene.add(group)
    return { group, stars: group.children as T.Mesh[] }
  })

  // 流星：几条预置的划线，按周期随机从天上斜着划过
  const random = seededRandom(4711)
  const meteors = Array.from({ length: SKY.meteorCount }, () => {
    const material = new T.MeshBasicMaterial({ color: '#fff6dd', transparent: true, opacity: 0, depthWrite: false })
    const mesh = new T.Mesh(new T.BoxGeometry(), material)
    mesh.raycast = () => {}
    scene.add(mesh)
    return { mesh, material, age: 1, wait: random() * 6, from: new T.Vector3(), direction: new T.Vector3() }
  })

  let time = 0
  return {
    update(step: number, state: { night: number; clear: boolean; reduced: boolean }) {
      time += step
      // 流星只要天黑了就有，不再要求晴天（原先是 night>0.55 && clear）
      const visible = state.night > 0.5
      const active = Math.floor(time / SKY.constellationSeconds) % ZODIAC.length
      visibleZodiac = ZODIAC[active]
      groups.forEach((entry, index) => {
        entry.group.visible = visible
        // 淡入淡出：每次切换前后 3 秒做过渡
        const phase = (time % SKY.constellationSeconds) / SKY.constellationSeconds
        const fade = Math.min(1, Math.min(phase, 1 - phase) * 6)
        for (const star of entry.stars) {
          const material = star.material as T.MeshBasicMaterial
          material.opacity = visible && index === active ? 0.55 + fade * 0.45 : 0
        }
      })
      for (const meteor of meteors) {
        if (!visible || state.reduced) { meteor.material.opacity = 0; meteor.age = 1; continue }
        if (meteor.age > SKY.meteorLife) {
          meteor.wait -= step
          if (meteor.wait > 0) { meteor.material.opacity = 0; continue }
          // 重新出发：从天顶偏一侧斜着划向另一侧
          const azimuth = random() * Math.PI * 2
          const elevation = 0.85 + random() * 0.5
          meteor.from.copy(domePoint(azimuth, elevation, SKY.domeRadius * 0.9))
          meteor.direction.set(random() * 2 - 1, -0.45 - random() * 0.3, random() * 2 - 1).normalize()
          meteor.age = 0
          // 有时单发、有时两三发、偶尔来一场流星雨
          const burst = random()
          const size = burst < 0.62 ? 1 : burst < 0.88 ? 2 + Math.floor(random() * 2) : 5 + Math.floor(random() * 5)
          let started = 0
          for (const other of meteors) {
            if (started >= size) break
            if (other.age <= SKY.meteorLife) continue
            other.from.copy(domePoint(random() * Math.PI * 2, 0.8 + random() * 0.55, SKY.domeRadius * 0.9))
            other.direction.set(random() * 2 - 1, -0.45 - random() * 0.35, random() * 2 - 1).normalize()
            other.age = -started * 0.12
            other.wait = SKY.meteorPeriod[0] + random() * (SKY.meteorPeriod[1] - SKY.meteorPeriod[0])
            started += 1
          }
          meteor.wait = SKY.meteorPeriod[0] + random() * (SKY.meteorPeriod[1] - SKY.meteorPeriod[0])
        }
        meteor.age += step
        if (meteor.age < 0) { meteor.material.opacity = 0; continue }
        const t = Math.min(1, meteor.age / SKY.meteorLife)
        const head = meteor.from.clone().addScaledVector(meteor.direction, t * 90)
        meteor.mesh.position.copy(head)
        meteor.mesh.quaternion.setFromUnitVectors(new T.Vector3(0, 0, 1), meteor.direction)
        const length = SKY.meteorLength * (1 - t * 0.35)
        meteor.mesh.scale.set(0.5, 0.5, length)
        meteor.material.opacity = (1 - t) * 0.9
      }
    },
    /** 此刻天上亮着的是哪个星座 */
    current() {
      const index = Math.floor(time / SKY.constellationSeconds) % ZODIAC.length
      return ZODIAC[index]
    },
  }
}

/** 山顶那台望远镜：三脚架 + 镜筒，站到旁边按 E 就能看星空。 */
export function addStargazerTelescope(scene: T.Scene, kit: ModelKit) {
  const { x, z } = SKY.telescope
  const base = DECK + groundElevation(x, z)
  const group = new T.Group()
  for (const [dx, dz] of [[0.34, 0.2], [-0.34, 0.2], [0, -0.38]] as const) {
    group.add(kit.beam([[x, base + 1.05, z], [x + dx, base, z + dz]], 0.09, ['#6b5a49', 'wood']))
  }
  const tube = kit.cylinder([x, base + 1.28, z], [0.19, 0.24, 1.5, 8], ['#8a7a63'])
  tube.rotation.z = Math.PI / 2
  tube.rotation.y = -0.55
  group.add(tube)
  group.add(kit.cylinder([x - 0.72, base + 1.3, z + 0.42], [0.15, 0.13, 0.22, 8], ['#3f4a52']))
  group.add(kit.box([x, base + 1.06, z], [0.34, 0.1, 0.34], ['#7a6a58', 'wood']))
  scene.add(group)
}

export const SKY_EYE: [number, number, number] = [SKY.telescope.x + 0.2, DECK + groundElevation(SKY.telescope.x, SKY.telescope.z) + 1.32, SKY.telescope.z - 0.15]

export const TELESCOPE_OBSTACLE: [number, number, number, number] =
  [SKY.telescope.x - 0.5, SKY.telescope.x + 0.5, SKY.telescope.z - 0.5, SKY.telescope.z + 0.5]
