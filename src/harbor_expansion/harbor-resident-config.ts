export const RESIDENTS = {
  radius: 1.55, activityRadius: 13, speed: 0.39, cadence: 0.30, greet: '打招呼', placeholder: '待填写',
  // 作息：夜里或雨大时走回最近的屋子躲着，白天再出来。
  homes: [[-3, 17.5], [6, 19.2], [-8, -21], [-24.7, -3]] as const,
  shelterNight: 0.60, shelterRain: 0.40, shelterDistance: 0.75,
  // TODO(reason): 待用户填写姓名、职业和招呼台词。
  people: [
    // build 是体型缩放；headwear 区分渔帽/头巾；apron 是围裙颜色，留空则没有。
    { spot: [-21.2, -8.9], hair: '#443940', skin: '#c59172', shirt: '#ad795e', trousers: '#656a6b', hat: false,
      build: [1.06, 0.94, 1.06], headwear: 'cap', apron: '#8a6a4f', name: '', job: '', line: '' },
    { spot: [-20.4, -5.98], hair: '#7c6046', skin: '#e1b998', shirt: '#7e9d81', trousers: '#62637c', hat: false,
      build: [0.94, 1.02, 0.94], headwear: 'bandana', apron: '#7b8fa0', name: '', job: '', line: '' },
    { spot: [-16.5, 3.8], hair: '#5e4274', skin: '#dca67f', shirt: '#ab9a6a', trousers: '#605145', hat: false,
      build: [0.86, 0.88, 0.86], headwear: 'none', name: '', job: '', line: '' },
    { spot: [-5.3,13.3], hair: '#4b4f52', skin: '#a46f55', shirt: '#6f969f', trousers: '#6e5c55', hat: true,
      build: [1.0, 1.10, 1.0], headwear: 'straw', apron: '#a9705f', name: '', job: '', line: '' },
    { spot: [-16.3,16.1], hair: '#a57c52', skin: '#dfab83', shirt: '#a88292', trousers: '#4e6764', hat: false,
      build: [1.08, 1.0, 1.08], headwear: 'cap', apron: '#5f7f72', name: '', job: '', line: '' },
    { spot: [-37.1,-6.36], hair: '#5d5443', skin: '#d8ae90', shirt: '#707da0', trousers: '#474d52', hat: true,
      build: [0.98, 1.05, 0.98], headwear: 'bandana', name: '', job: '', line: '' },
  ],
} as const
