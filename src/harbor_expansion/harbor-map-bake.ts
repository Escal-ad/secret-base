import * as T from 'three'
import { MAP } from './harbor-map-config'

export function captureHarborMap(renderer: T.WebGLRenderer, scene: T.Scene) {
  let preview: string | undefined
  return () => {
    if (preview) return preview
    const width=MAP.pixels
    const height=Math.round(width * (MAP.south-MAP.north)/(MAP.east-MAP.west))
    const x=(MAP.east+MAP.west)/2, z=(MAP.south+MAP.north)/2
    const camera = new T.OrthographicCamera(MAP.west-x,MAP.east-x,z-MAP.north,z-MAP.south,MAP.near,MAP.height*2)
    camera.up.set(0,0,-1)
    camera.position.set(x,MAP.height,z)
    camera.lookAt(x,0,z)
    const target = new T.WebGLRenderTarget(width,height)
    target.texture.colorSpace=T.SRGBColorSpace
    const previous = renderer.getRenderTarget()
    const previousFog = scene.fog
    try {
      scene.fog=null
      renderer.setRenderTarget(target)
      renderer.render(scene,camera)
      const pixels = new Uint8Array(width*height*4)
      renderer.readRenderTargetPixels(target,0,0,width,height,pixels)
      const canvas = document.createElement('canvas')
      canvas.width=width;canvas.height=height
      const ctx=canvas.getContext('2d')
      if(!ctx)return undefined
      const data=ctx.createImageData(width,height)
      for(let row=0;row<height;row++)data.data.set(pixels.subarray(row*width*4,(row+1)*width*4),(height-row-1)*width*4)
      ctx.putImageData(data,0,0)
      preview=canvas.toDataURL('image/png')
      return preview
    } catch { return undefined }
    finally { scene.fog=previousFog;renderer.setRenderTarget(previous);target.dispose() }
  }
}
