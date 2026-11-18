// Node 环境下的最小 canvas 桩：只让材质构建能跑通。
// 烘焙只需要几何体做射线求交，贴图内容是什么完全不影响结果。
type AnyRecord = Record<string, unknown>

function makeContext(): AnyRecord {
  const target: AnyRecord = {}
  const proxy: AnyRecord = new Proxy(target, {
    get(store, key) {
      if (key in store) return store[key]
      // 任何未知方法都返回一个“万能函数”，返回值仍是同一个 context，
      // 这样 createLinearGradient(...).addColorStop(...) 之类的链式调用也不会炸。
      const fn = () => proxy
      store[key as string] = fn
      return fn
    },
    set(store, key, value) {
      store[key as string] = value
      return true
    },
  })
  return proxy
}

function makeCanvas(width: number, height: number) {
  const canvas = {
    width, height,
    getContext: () => makeContext(),
    toDataURL: () => '',
  }
  return canvas
}

const documentStub = {
  createElement(tag: string) {
    if (tag === 'canvas') return makeCanvas(1, 1)
    return { style: {}, appendChild() {}, addEventListener() {} }
  },
}

const scope = globalThis as AnyRecord & { document?: unknown; window?: unknown }
if (!scope.document) scope.document = documentStub
if (!scope.window) scope.window = globalThis
