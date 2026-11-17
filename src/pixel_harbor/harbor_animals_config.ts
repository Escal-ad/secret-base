export type AnimalSpecies = 'cat' | 'dog'

export const ANIMALS = {
  limit: 5,
  simplifiedLimit: 2,
  degradedLimit: 1,
  speed: 1.04,
  followSpeed: 1.32,
  footprintRadius: 0.23,
  followDistance: 4.2,
  followTime: 4.7,
  followStopDistance: 1.18,
  followCooldown: 8,
  fullUpdateDistance: 19,
  distantUpdateInterval: 0.25,
  interactRadius: 1.28,
  nameDistance: 2.9,
  reactionSeconds: 1.0,
  petCooldown: 4.3,
  petLabel: '摸摸',
  palette: { shadow: '#42352d', face: '#322a2a', heart: '#da805f', plate: '#332c29' },
  // TODO(reason): 待用户填写动物名字。
  residents: [
    { id: 'animal-cat-1', species: 'cat', name: '猫 1', x: -22, z: -1.2, radius: 2.0,
      rest: { x: -22.1, z: -0.42 }, fur: '#cd9564', accent: '#f0d3ac', size: 0.71 },
    { id: 'animal-dog-1', species: 'dog', name: '狗 1', x: -14.6, z: 12.46, radius: 2.6,
      rest: { x: -15.6, z: 12.25 }, fur: '#bd936b', accent: '#745e4f', size: 0.88 },
    { id: 'animal-cat-2', species: 'cat', name: '猫 2', x: 7.3, z: 1.38, radius: 2.1,
      rest: { x: 8.9, z: -1.75 }, fur: '#93a2a3', accent: '#d7d2c0', size: 0.72 },
  ] satisfies { id: string; species: AnimalSpecies; name: string; x: number; z: number; radius: number;
    rest: { x: number; z: number }; fur: string; accent: string; size: number }[],
} as const
