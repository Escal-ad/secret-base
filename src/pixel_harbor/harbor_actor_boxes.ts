import * as T from 'three'

const LIMB_SWEEP = 0.35

function relativeMatrix(part: T.Object3D, root: T.Group, result: T.Matrix4) {
  part.updateMatrix()
  result.copy(part.matrix)
  for (let joint = part.parent; joint && joint !== root; joint = joint.parent) {
    joint.updateMatrix()
    result.premultiply(joint.matrix)
  }
  return result
}

export function batchActorBoxes(root: T.Group) {
  const groups = new Map<T.Material, T.Mesh[]>()
  root.traverse(part => {
    if (!(part instanceof T.Mesh) || part.geometry.type !== 'BoxGeometry' || Array.isArray(part.material)) return
    const group = groups.get(part.material)
    if (group) group.push(part)
    else groups.set(part.material, [part])
  })
  const matrix = new T.Matrix4()
  const batches = [...groups.entries()].filter(([, parts]) => parts.length > 1).map(([material, parts]) => {
    const mesh = new T.InstancedMesh(parts[0].geometry, material, parts.length)
    mesh.instanceMatrix.setUsage(T.DynamicDrawUsage)
    parts.forEach(part => { part.visible = false })
    root.add(mesh)
    return { mesh, parts }
  })
  function update() {
    for (const { mesh, parts } of batches) {
      parts.forEach((part, index) => mesh.setMatrixAt(index, relativeMatrix(part, root, matrix)))
      mesh.instanceMatrix.needsUpdate = true
    }
  }
  update()
  for (const { mesh } of batches) {
    mesh.computeBoundingSphere()
    if (mesh.boundingSphere) mesh.boundingSphere.radius += LIMB_SWEEP
  }
  return update
}
