export const SCOPE = {
  id: 'lookout-scope', title: '望远镜', action: '使用望远镜', exit: '退出望远镜',
  position: { x: 8.03, z: -21.60 }, eye: [8.14,10.69,-21.6],
  promptRadius: 1.96, minimum: 2, maximum: 8, starting: 3, step: 1,
  sensitivity: 0.0026, yawLimit: 2.58, pitchLimit: 0.72, yaw: -1.18, pitch: -0.015,
  aimTolerance: 0.062,
  detailZoom: 4,
  // TODO(reason): 待用户填写望远镜目标名与介绍。
  titles: {} as Record<string,string>,
  captions: {} as Record<string,string>,
  sunHint: '',
} as const
