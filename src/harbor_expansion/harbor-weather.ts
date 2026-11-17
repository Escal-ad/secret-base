import * as T from 'three'
import { WEATHER } from './harbor-weather-config'
import type { Quality, Weather } from '../harbor_shell/harbor-settings'
import { seededRandom } from '../pixel_harbor/harbor_materials'

export type WeatherFrame = { rain: number; snow: number; cover: number; ice: number; low: boolean }
const PARTICLE_SEED = 193
const DROP_WIDTH = 0.024
const DROP_HEIGHT = 0.42
const FLAKE_WIDTH = 0.075

function mixToward(value: number, target: number, step: number, duration: number) {
  return value + Math.sign(target - value) * Math.min(Math.abs(target - value), step / duration)
}

function addParticles(scene: T.Scene) {
  const random = seededRandom(PARTICLE_SEED)
  const [width, height, depth] = WEATHER.volume
  const seeds = Array.from({ length: WEATHER.particles.high }, () => ({
    x: random() * width - width / 2, y: random() * height, z: random() * depth - depth / 2, drift: random(),
  }))
  const material = new T.MeshBasicMaterial({ color: '#d9e4df', transparent: true, opacity: 0.64, depthWrite: false })
  const mesh = new T.InstancedMesh(new T.BoxGeometry(), material, seeds.length)
  mesh.instanceMatrix.setUsage(T.DynamicDrawUsage)
  mesh.frustumCulled = false
  scene.add(mesh)
  const transform = new T.Object3D()
  return (camera: T.Camera, time: number, state: { frame: WeatherFrame; limit: number }) => {
    const { frame, limit } = state
    const rain = frame.rain > frame.snow
    mesh.count = Math.min(seeds.length, Math.round(limit * Math.max(frame.rain, frame.snow)))
    mesh.visible = mesh.count > 0
    if (!mesh.visible) return
    material.color.set(rain ? '#a7bfca' : '#ecebe0')
    material.opacity = rain ? 0.46 : 0.81
    transform.scale.set(rain ? DROP_WIDTH : FLAKE_WIDTH, rain ? DROP_HEIGHT : FLAKE_WIDTH, FLAKE_WIDTH)
    transform.rotation.z = rain ? -0.16 : 0
    for (let index = 0; index < mesh.count; index++) {
      const seed = seeds[index]
      const y = T.MathUtils.euclideanModulo(seed.y - time * (rain ? 12 : 1.2 + seed.drift), height)
      const drift = rain ? (y - height / 2) * 0.18 : Math.sin(time + seed.drift * 8) * 0.64
      transform.position.set(camera.position.x + seed.x + drift,
        camera.position.y + y - height / 2, camera.position.z + seed.z)
      transform.updateMatrix()
      mesh.setMatrixAt(index, transform.matrix)
    }
    mesh.instanceMatrix.needsUpdate = true
  }
}

function attachSurfaceWeather(scene: T.Scene, uniforms: {
  snow:{value:number}; ripple:{value:number}; time:{value:number}
}) {
  const visited = new Set<T.Material>()
  scene.traverse(node => {
    if (!(node instanceof T.Mesh)) return
    const materials = Array.isArray(node.material) ? node.material : [node.material]
    for (const material of materials) {
      if (!(material instanceof T.MeshLambertMaterial) || visited.has(material)) continue
      visited.add(material)
      const before = material.onBeforeCompile.bind(material)
      material.onBeforeCompile = (shader, renderer) => {
        before(shader, renderer)
        shader.uniforms.harborSnow=uniforms.snow
        shader.uniforms.harborRain=uniforms.ripple
        shader.uniforms.harborWeatherTime=uniforms.time
        shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 harborWorld;')
          .replace('#include <project_vertex>',`
            vec4 harborPoint=vec4(transformed,1.0);
            #ifdef USE_INSTANCING
              harborPoint=instanceMatrix*harborPoint;
            #endif
            harborWorld=(modelMatrix*harborPoint).xyz;
            #include <project_vertex>`)
        shader.fragmentShader = shader.fragmentShader.replace('#include <common>',
          '#include <common>\nvarying vec3 harborWorld;\nuniform float harborSnow, harborRain, harborWeatherTime;')
          .replace('#include <opaque_fragment>',
            `float snowFace = smoothstep(0.48, 0.86, dot(normal, normalize((viewMatrix * vec4(0.,1.,0.,0.)).xyz)));
             if(harborRain>0.01){
                vec2 drop=harborWorld.xz*1.78;
                float ring=length(fract(drop)-0.5);
                float phase=fract(harborWeatherTime*1.23+sin(dot(floor(drop),vec2(7.92,13.17)))*19.02);
                float trace=1.0-smoothstep(0.021,0.055,abs(ring-phase*0.43));
                float nearby=1.0-smoothstep(7.0,18.0,distance(cameraPosition,harborWorld));
                outgoingLight+=vec3(0.25,0.33,0.37)*(1.0-phase)*trace*snowFace*harborRain*nearby*0.29;
             }
             outgoingLight = mix(outgoingLight, mix(outgoingLight, vec3(0.78,0.81,0.79),0.76), snowFace * harborSnow);
             #include <opaque_fragment>`)
      }
      material.customProgramCacheKey = () => 'harbor-surface-weather'
      material.needsUpdate = true
    }
  })
}

export function createHarborWeather(scene: T.Scene) {
  const coverUniform = { value: 0 }
  const rippleUniform={value:0}, timeUniform={value:0}
  attachSurfaceWeather(scene,{snow:coverUniform,ripple:rippleUniform,time:timeUniform})
  const particles = addParticles(scene)
  const frame: WeatherFrame = { rain: 0, snow: 0, cover: 0, ice: 0, low: false }
  let snowAge = 0
  let clock = 0
  return {
    frame,
    update(weather: Weather, camera: T.Camera, options: { step: number; quality: Quality; tier: number; reduced: boolean }) {
      const { step, quality, tier, reduced } = options
      frame.low = quality === 'low' || tier >= 2
      frame.rain = mixToward(frame.rain, Number(weather === 'rain'), step, WEATHER.transition)
      frame.snow = mixToward(frame.snow, Number(weather === 'snow'), step, WEATHER.transition)
      snowAge = weather === 'snow' ? snowAge + step : 0
      frame.cover = mixToward(frame.cover, Number(weather === 'snow'), step, weather === 'snow' ? WEATHER.snowBuild : WEATHER.snowMelt)
      const freeze = snowAge >= WEATHER.iceDelay
      frame.ice = mixToward(frame.ice, freeze ? WEATHER.maximumIce : 0, step,
        (freeze ? WEATHER.iceBuild : WEATHER.iceMelt) / WEATHER.maximumIce)
      coverUniform.value = frame.low ? Number(frame.cover >= 0.6) * 0.66 : frame.cover
      clock += reduced ? 0 : step
      rippleUniform.value=frame.low?0:frame.rain
      timeUniform.value=clock
      particles(camera, clock, { frame, limit: tier >= 1 || reduced ? WEATHER.particles.low : WEATHER.particles[quality] })
      return frame
    },
  }
}
