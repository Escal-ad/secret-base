// 主角的小背包：钓到的鱼、捡的贝壳、摘的果子蔬菜都进这里。
// 只记数量和名字，够用就行；UI 用一句提示显示最近拿到的东西和总数。
const counts = new Map<string, number>()
const order: string[] = []

export function addItem(name: string, amount = 1) {
  if (!counts.has(name)) order.push(name)
  const total = (counts.get(name) ?? 0) + amount
  counts.set(name, total)
  return total
}

export function itemCount(name: string) {
  return counts.get(name) ?? 0
}

export function bagSummary() {
  if (!order.length) return '空'
  return order.map(name => `${name}×${counts.get(name)}`).join('、')
}

export function bagTotal() {
  let total = 0
  for (const value of counts.values()) total += value
  return total
}
