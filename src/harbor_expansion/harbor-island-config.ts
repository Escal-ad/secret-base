export const ISLANDS = {
  count: 8, sides: 13, detailedSides: 28, seed: 6322,
  positions: [[43,-18,8,4],[96,-6,17,10],[119,21,20,12],[58,47,13,6],[11,84,17,8],
    [-81,41,23,14],[-94,-30,19,11],[-5,-97,18,10]],
  routes: [[57,-34,68,-27],[64,17,81,23],[52,-61,79,-66],[40,57,51,62]],
} as const

export function hitsIsland(x:number,z:number,radius:number) {
  return ISLANDS.positions.some(([cx,cz,width])=>{
    const rx=width*0.93+radius
    const rz=width*0.64+radius
    return ((x-cx)/rx)**2+((z-cz)/rz)**2<1
  })
}
