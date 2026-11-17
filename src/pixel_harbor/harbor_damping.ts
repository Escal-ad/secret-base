const RESPONSE_TARGET = 0.9
export const RESPONSE_FACTOR = -Math.log1p(-RESPONSE_TARGET)
const FULL_TURN = 2 * Math.PI

export function dampingFactor(seconds: number, responseTime: number) {
  return -Math.expm1(-RESPONSE_FACTOR * seconds / responseTime)
}

export function dampAngle(current: number, target: number, weight: number) {
  const offset = target - current
  const shortestTurn = offset - FULL_TURN * Math.round(offset / FULL_TURN)
  return current + shortestTurn * weight
}
