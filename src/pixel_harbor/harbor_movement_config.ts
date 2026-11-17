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
  minPitch: -0.40,
  maxPitch: 0.72,
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
}

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
