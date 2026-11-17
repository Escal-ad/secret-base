export const AVATAR_APPEARANCE = {
  hair: '#644939',
  shirt: '#a85d48',
  trousers: '#536b70',
  hat: true,
}

export const MOVEMENT = {
  walkSpeed: 3.25,
  sprintMultiplier: 1.5,
  accelerationTime: 0.220,
  decelerationTime: 0.170,
  turnTime: 0.150,
  playerRadius: 0.32,
  maxFrameStep: 0.10,
  maxCollisionStep: 1 / 120,
  movementThreshold: 0.025,
}

export const ORBIT = {
  fov: 59,
  near: 0.06,
  far: 270,
  focusHeight: 1.13,
  distance: 4.15,
  minDistance: 2.05,
  maxDistance: 7.3,
  pitch: 0.18,
  minPitch: -1.45,
  maxPitch: 1.10,
  // 第一人称放开俯仰：负值抬头看天，正值低头。第三人称保持原范围。
  firstMinPitch: -1.50,
  firstMaxPitch: 0.90,
  // 飞行时放开俯仰，便于在空中看天与找落点。
  flightMinPitch: -1.40,
  flightMaxPitch: 1.10,
  verticalLookSensitivity: 0.004,
  floorClearance: 0.28,
  aimTime: 0.55,
  lookSensitivity: 0.004,
  distancePerWheelStep: 0.42,
  followTime: 0.155,
  orbitTime: 0.140,
  zoomTime: 0.180,
  obstacleClearance: 0.23,
  minObstructedDistance: 0.28,
  vesselDistance: 6.6,
  swimDistance: -0.9,
}

export const SWIM = {
  // 海面高度：cameraFloor 在可行走区域之外返回 0，漂浮的船也停在这一水平。
  waterLevel: 0,
  // 人物根节点在水面下方的距离。绘制位置 = DECK + elevation + height，
  // 因此限定的 height 由 harbor_player_motion 里的 FLOAT_HEIGHT 推算，不在这里手写。
  floatSink: 0.7,
  speedFactor: 0.55,
  paddleInterval: 0.85,
  // 划水动作：身体前倾 + 手臂前后划 + 打腿 + 轻微浮沉。
  lean: 0.38,
  armSweep: 0.85,
  armSpread: 0.30,
  kick: 0.42,
  bob: 0.05,
  strokeRate: 2.2,
} as const

export const JUMP = {
  lift: 4.5,
  gravity: 12,
  landingTolerance: 0.012,
  recovery: 0.18,
  launchPoseTime: 0.095,
  launchSquat: 0.075,
  landingSquat: 0.088,
  airArm: 0.53,
  airLeg: 0.32,
  shadowScaleAtPeak: 0.59,
  vaultable: [
    { footprint: [-7.7, -6.56, 15.57, 16.23], height: 0.58 },
    { footprint: [-21.8, -20.66, 2.27, 2.93], height: 0.58 },
    { footprint: [-16.36, -15.64, 8.74, 9.46], height: 0.68 },
  ],
} as const
