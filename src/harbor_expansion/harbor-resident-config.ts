export const RESIDENTS = {
  // speed 决定走路动画的步幅与步频（stride = speed / 玩家步速 3.25）：
  // 原来 0.39 只有 6° 摆腿，看着像滑行，提到 1.5 后约 15°，走起来才像迈步。
  radius: 1.55, activityRadius: 13, speed: 1.35, cadence: 0.30, greet: '打招呼', placeholder: '待填写',
  // 作息：夜里或雨大时走回最近的屋子躲着，白天再出来。
  homes: [[-3, 17.5], [6, 19.2], [-2.69, -21.21], [-24.7, -3]] as const,
  shelterNight: 0.60, shelterRain: 0.40, shelterDistance: 0.75,
  // 踱步节奏：轨迹点沿椭圆走的角速度。角速度 × 半径 ≈ 目标点速度，
  // 要略小于 speed（1.35），他才能一直"追着走"，腿的摆动和位移才对得上。
  patrolRate: 0.8,
  // 守塔人：固定在灯塔东岸的岗位上，不巡逻。
  // post 是站立位置，seat 是他身后 0.35 米的凳子（坐上去的位置），lamp 是夜里的小夜灯。
  // 海在岗位东侧（+x），所以 gazeYaw = π/2，他始终面朝海。carryArm/watchArm 是手臂垂着/举镜的角度。
  gazeYaw: Math.PI / 2, carryArm: -0.15, watchArm: -1.75,
  post: { x: 6.57, z: -13.90 }, seat: { x: 6.22, z: -13.90 }, lamp: { x: 6.95, z: -14.45 },
  seatHeight: 0.30, sitSeconds: 11, standSeconds: 7, lookEvery: 8, lookLength: 3,
  // TODO(reason): 待用户填写姓名、职业和招呼台词。
  people: [
    // build 是体型缩放；headwear 区分渔帽/头巾；apron 是围裙颜色，留空则没有。
    // 这位是船夫造型的渔民：站在东堤北缘、面朝海钓鱼，不再四处走动。
    { spot: [-37.1,-6.36], hair: '#5d5443', skin: '#d8ae90', shirt: '#707da0', trousers: '#474d52', hat: true,
      build: [0.98, 1.05, 0.98], headwear: 'bandana', name: '', job: '', line: '' },
  // homeDoor：收工时走回的门口（渔民小屋北墙外，门朝 -z）。到了门口才进屋消失。
  { spot: [13.5, 16.30], facing: Math.PI, homeDoor: [6.0, 16.60], hair: '#655d57', skin: '#c89773',
    shirt: '#426d78', trousers: '#58483d', hat: false,
    build: [1.0, 1.02, 1.0], headwear: 'straw', fishing: true, name: '', job: '', line: '' },
  // 守塔人：海军军服 + 铁盔 + 背枪 + 双筒望远镜，固定在灯塔东岸的岗位上（面朝海）。
  // post 的人不巡逻、不回家：晴/夜在岗亭凳子上坐坐站站，雨天打伞，雪天站着不动。
  { spot: [6.57, -13.90], facing: Math.PI / 2, hair: '#463a30', skin: '#d8ae90', shirt: '#2f3f57',
    trousers: '#243040', hat: false, build: [1.04, 1.06, 1.04], headwear: 'helmet', apron: '#e6e2d4',
    guard: true, post: true, name: '守塔人', job: '', line: '' },
  ],
} as const
