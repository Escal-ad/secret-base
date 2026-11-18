import * as T from 'three'
import { DECK } from '../pixel_harbor/harbor_layout'

// 村长小屋的烟囱口。房子在 (-24.7, -3)、yaw = -π/2；
// makeHouse 的烟囱局部坐标是 (width*0.22, height + rise*0.75, depth*0.25)，
// HOUSE_SIZE = [4.4, 2.43, 4] → 局部 (0.968, 3.45, 1.0)，顶面 4.03 米。
// 绕 y 轴转 -π/2 后局部 (x,z) → 世界 (-z, x)，所以烟囱口落在 (-25.70, -2.03)。
export const CHIMNEY = {
  origin: [-25.70, DECK + 4.06, -2.03] as const,
  count: 18,
  life: 4.4,
  rise: 1.7,
  drift: 0.7,
  color: '#d3d7da',
  opacity: 0.42,
  startSize: 0.16,
  endSize: 0.62,
} as const

/** 烟囱冒的白烟：一簇小方块从烟囱口慢慢升起、边升边变大变淡，然后循环。 */
export function createChimneySmoke(scene: T.Scene) {
  const puffs = Array.from({ length: CHIMNEY.count }, (_, index) => {
    const material = new T.MeshBasicMaterial({
      color: CHIMNEY.color, transparent: true, opacity: 0, depthWrite: false,
    })
    const mesh = new T.Mesh(new T.BoxGeometry(), material)
    // 不进高度图、也不挡射线（它只是特效）
    mesh.raycast = () => {}
    mesh.visible = false
    scene.add(mesh)
    return { mesh, material, seed: index * 0.83, age: index * CHIMNEY.life / CHIMNEY.count }
  })

  return {
    update(step: number, reduced: boolean) {
      for (const puff of puffs) {
        puff.age += step
        if (puff.age > CHIMNEY.life) puff.age -= CHIMNEY.life
        const t = puff.age / CHIMNEY.life
        const size = CHIMNEY.startSize + t * (CHIMNEY.endSize - CHIMNEY.startSize)
        puff.mesh.visible = !reduced
        puff.mesh.scale.set(size, size * 0.9, size)
        puff.mesh.position.set(
          CHIMNEY.origin[0] + Math.sin(puff.seed) * CHIMNEY.drift * t + t * t * 0.3,
          CHIMNEY.origin[1] + t * CHIMNEY.rise,
          CHIMNEY.origin[2] + Math.cos(puff.seed) * CHIMNEY.drift * t * 0.7,
        )
        puff.material.opacity = Math.sin(Math.PI * Math.min(1, t * 1.12)) * CHIMNEY.opacity
      }
    },
  }
}
