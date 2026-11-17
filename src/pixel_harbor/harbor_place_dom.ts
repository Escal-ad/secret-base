import type { ProjectedLabel } from './harbor_label_projection'

export function updatePlaceLabels(root: HTMLElement | null, labels: readonly ProjectedLabel[]) {
  if (!root) return
  for (const child of root.children) {
    if (!(child instanceof HTMLButtonElement)) continue
    const label = labels.find(item => item.id === child.dataset.place)
    if (!label) {
      if (!child.hidden) child.hidden = true
      continue
    }
    if (child.hidden) child.hidden = false
    child.style.transform = `translate3d(${label.x}px,${label.y}px,0) translate(-50%,-100%)`
    child.style.opacity = String(label.opacity)
    const named = String(label.showName)
    if (child.dataset.named !== named) child.dataset.named = named
  }
}
