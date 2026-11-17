import { FISHING, WISHING } from './harbor-pastimes-config'
import type { CatchSpecies, Wish } from './harbor-pastimes-config'

type RecordConfig<Item> = {
  storageKey: string; ui:{ readError:string; writeError:string }; decode:(value:unknown)=>Item[]
}

function createBrowserRecords<Item>({ storageKey, ui, decode }: RecordConfig<Item>) {
  let items: Item[] = []
  let warning = ''
  try {
    const stored = localStorage.getItem(storageKey)
    if (stored !== null) items = decode(JSON.parse(stored))
  } catch { warning = ui.readError }
  const snapshot = () => ({ items: items as readonly Item[], warning })
  return {
    snapshot,
    replace(next: Item[]) {
      items = next
      try {
        localStorage.setItem(storageKey, JSON.stringify(items))
        if (warning !== ui.readError) warning = ''
      } catch { warning = ui.writeError }
      return snapshot()
    },
  }
}

function decodeCatches(value: unknown) {
  if (!Array.isArray(value)) throw new TypeError('Catch records must be an array')
  return FISHING.pool.filter(species => value.includes(species.id)).map(species => species.id)
}

export function limitWish(text: string) {
  return Array.from(text).slice(0, WISHING.maxCharacters).join('')
}

function decodeWishes(value: unknown) {
  if (!Array.isArray(value)) throw new TypeError('Wish records must be an array')
  const clean: Wish[] = []
  for (const entry of value as unknown[]) {
    if (!entry || typeof entry !== 'object' || !('id' in entry) || !('text' in entry)) continue
    const { id, text } = entry
    if (typeof id !== 'string' || typeof text !== 'string' || !text.trim()
      || clean.some(wish => wish.id === id)) continue
    clean.push({ id, text:limitWish(text.trim()) })
    if (clean.length === WISHING.maxRecords) break
  }
  return clean
}

export function createPastimeRecords() {
  const catches = createBrowserRecords({ ...FISHING, decode:decodeCatches })
  const wishes = createBrowserRecords({ ...WISHING, decode:decodeWishes })
  return {
    catches:catches.snapshot, wishes:wishes.snapshot,
    catchFish(species:CatchSpecies) {
      const collected = catches.snapshot().items
      if (!collected.includes(species.id)) return catches.replace([...collected, species.id])
      return catches.snapshot()
    },
    writeWish(text:string) {
      const prepared = limitWish(text.trim())
      if (!prepared) return null
      const id = Array.from(crypto.getRandomValues(new Uint32Array(2))).join('-')
      const wish = { id, text:prepared }
      wishes.replace([wish, ...wishes.snapshot().items].slice(0, WISHING.maxRecords))
      return wish
    },
    deleteWish(id:string) { return wishes.replace(wishes.snapshot().items.filter(wish => wish.id !== id)) },
    clearWishes() { return wishes.replace([]) },
  }
}
