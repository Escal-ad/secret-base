export const FLIGHT = {
  enabledByDefault: true,
  speed: 5.4, sprintMultiplier: 1.55, accelerationTime: 0.38, brakingTime: 0.31, turnTime: 0.30,
  climbSpeed: 3.35, descentSpeed: 2.85, verticalResponse: 0.24, launchSpeed: 2.25, landingSpeed: 5.2,
  groundClearance: 0.75, waterClearance: 0.85, maximumAltitude: 17,
  mapMargin: 6, edgeBrake: 5, edgeFog: 0.041, bodyHeight: 1.57,
  propHeight: 1.10,
  camera: { distance: 1.45, pitch: 0.23 },
  // 开直升机：镜头额外拉远 cameraPull、俯角再压 pitchPull；lift 是驾驶舱离机腹起落橇的高度
  heli: { cameraPull: 4.2, pitchPull: 0.1, lift: 0.05, label: '驾驶直升机', start: '直升机已发动',
    home: '已回到停机坪', missing: '直升机停在停机坪上，先走过去再按 F' },
  cape: {
    color: '#C0392B', rows: 4, maxSegments: 8, alwaysVisible: false, transition: 0.4,
    shoulder: 1.09, rootBack: -0.21, width: 0.244, length: 0.22, thickness: 0.058,
    spread: 0.085, flow: 0.96, breeze: 0.08, waveRate: 4.2, bank: 0.31,
  },
  pose: { lean: 0.39, bank: 0.31, arms: 0.32 },
  audio: { baseWind: 0.15, speedWind: 0.68, flapInterval: 0.59, flapThreshold: 0.22 },
  ui: {
    noticeMs: 3600,
    enable: '飞行', launch: '飞行', land: '降落', climb: '上升', descend: '下降', boost: '加速',
    water: '下面是大海，先飞回岸边', blocked: '下方没有安全落点，先飞到空旷地面',
    roof: '落在屋顶上', swim: '落入水中，开始游泳', shore: '上岸', platform: '落在灯塔平台上',
    recovered: '飞行已关闭，已返回安全地点。',
    keys: 'F 起飞或降落 · WASD 移动 · 空格上升 · Ctrl / C 下降 · Shift 加速',
  },
} as const
