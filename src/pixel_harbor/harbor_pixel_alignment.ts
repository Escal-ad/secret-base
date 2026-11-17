import * as T from 'three'

const PIXEL_TIE_EPSILON = 1e-8

function centeredPixel(coordinate: number, size: number) {
  const pixel = (coordinate + 1) * size / 2
  return (Math.floor(pixel + PIXEL_TIE_EPSILON) + 0.5) * 2 / size - 1
}

export function createPixelAlignment() {
  const ndc = new T.Vector3()
  return (camera: T.PerspectiveCamera, anchor: T.Vector3, resolution: { width: number; height: number }) => {
    const { width, height } = resolution
    const matrix = camera.projectionMatrix.elements
    // Anchor the camera's sampling grid at the player's projected position.
    // The half-pixel adjustment leaves the orbit and simulation coordinates continuous.
    camera.updateProjectionMatrix()
    camera.updateMatrixWorld()
    ndc.copy(anchor).project(camera)
    matrix[8] -= centeredPixel(ndc.x, width) - ndc.x
    matrix[9] -= centeredPixel(ndc.y, height) - ndc.y
    camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert()
  }
}
