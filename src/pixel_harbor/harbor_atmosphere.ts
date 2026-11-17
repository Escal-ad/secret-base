import * as T from 'three'
import { makeCanvas, pixelTexture, seededRandom } from './harbor_materials'
import { HARBOR_LIGHTING } from './harbor_lighting_config'
import { SUNSET } from './harbor_exploration_config'
import { SKY_FRAGMENT, WATER_FRAGMENT, WORLD_VERTEX } from './harbor_atmosphere_shaders'
import { WEATHER } from '../harbor_expansion/harbor-weather-config'
import type { WeatherFrame } from '../harbor_expansion/harbor-weather'

const SUN = new T.Vector3(0.93, 0.107, -0.36).normalize()
const HAZE = '#efd6b6'



function makeSky() {
  const material = new T.ShaderMaterial({
    side: T.BackSide,
    depthWrite: false,
    uniforms: {
      sun: { value: SUN.clone() }, blue: { value: new T.Color('#7fadc8') },
      mist: { value: new T.Color(HAZE) }, rose: { value: new T.Color('#f5c9b9') },
      gold: { value: new T.Color('#ffedd0') }, white: { value: new T.Color('#fff6ce') },
      night: { value: 0 }, starDensity: { value: HARBOR_LIGHTING.starDensity },
      dusk: { value: 0 }, sunsetZenith: { value: new T.Color(SUNSET.sunsetZenith) },
      weatherSky: { value: new T.Color(WEATHER.rainSky) }, weatherShade: { value: 0 },
      sunsetHorizon: { value: new T.Color(SUNSET.sunsetHorizon) },
      nightZenith: { value: new T.Color(HARBOR_LIGHTING.nightZenith) },
      nightHorizon: { value: new T.Color(HARBOR_LIGHTING.nightHorizon) },
      moonColor: { value: new T.Color(HARBOR_LIGHTING.moonColor) },
      moon: { value: new T.Vector3(...HARBOR_LIGHTING.moonDirection).normalize() },
    },
    vertexShader: WORLD_VERTEX,
    fragmentShader: SKY_FRAGMENT,
  })
  const sky = new T.Mesh(new T.SphereGeometry(235, 32, 16), material)
  sky.renderOrder = -100
  return sky
}

function makeWater() {
  const material = new T.ShaderMaterial({
    uniforms: {
      time: { value: 0 }, sun: { value: SUN }, mist: { value: new T.Color(HAZE) },
      deep: { value: new T.Color('#4c8791') }, shallow: { value: new T.Color('#82afb0') },
      gleam: { value: new T.Color('#eac795') }, crest: { value: new T.Color('#f9dfa8') },
      night: { value: 0 }, dusk: { value: 0 }, reflections: { value: 1 },
      wet: { value: 0 }, ice: { value: 0 }, rippleFx: { value: 1 }, foamFx: { value: 1 },
      sunsetHaze: { value: new T.Color(SUNSET.sunsetHaze) },
      nightWater: { value: new T.Color(HARBOR_LIGHTING.nightWater) },
      nightCrest: { value: new T.Color(HARBOR_LIGHTING.nightCrest) },
      nightReflection: { value: new T.Color(HARBOR_LIGHTING.nightReflection) },
      nightFog: { value: new T.Color(HARBOR_LIGHTING.nightFog) },
      moon: { value: new T.Vector3(...HARBOR_LIGHTING.moonDirection).normalize() },
      shoreLights: { value: HARBOR_LIGHTING.nightWaterLights.map(point => new T.Vector2(...point)) },
      waveCells: { value: new T.Vector4(HARBOR_LIGHTING.waveCells.near, HARBOR_LIGHTING.waveCells.far,
        HARBOR_LIGHTING.waveCells.blendStart, HARBOR_LIGHTING.waveCells.blendEnd) },
    },
    vertexShader: WORLD_VERTEX,
    fragmentShader: WATER_FRAGMENT,
  })
  const water = new T.Mesh(new T.PlaneGeometry(440, 440), material)
  water.rotation.x = -Math.PI / 2
  return water
}

function makeClouds() {
  const group = new T.Group()
  const { canvas, context } = makeCanvas(100, 22)
  const random = seededRandom(72)
  for (let index = 0; index < 27; index++) {
    const x = 8 + (random() * 76 | 0)
    const y = 3 + (random() * 12 | 0)
    const width = 6 + (random() * 16 | 0)
    context.fillStyle = ['#fbe0c94d', '#ffe6cd70', '#fff0d896'][index % 3]
    context.fillRect(x, y, width, 1 + index % 3)
  }
  const material = new T.SpriteMaterial({ map: pixelTexture(canvas), depthWrite: false, fog: false })
  for (let index = 0; index < 22; index++) {
    const angle = index * 2.39996
    const cloud = new T.Sprite(material)
    cloud.position.set(Math.cos(angle) * 128, 8 + random() * 34, Math.sin(angle) * 128)
    cloud.scale.set(25 + random() * 44, 7 + random() * 5, 1)
    group.add(cloud)
  }
  return group
}

export function addAtmosphere(scene: T.Scene) {
  const config = HARBOR_LIGHTING
  const fog = new T.FogExp2(HAZE, 0.009)
  scene.fog = fog
  const ambient = new T.HemisphereLight(config.ambientColor, '#9b9aa0', config.ambient)
  const light = new T.DirectionalLight(config.sunColor, config.sun)
  light.position.set(40, 14, -12)
  const water = makeWater()
  const clouds = makeClouds()
  const sky = makeSky()
  scene.add(sky, water, clouds, light, ambient)
  const colors = {
    dawn: new T.Color(HAZE), nightFog: new T.Color(config.nightFog),
    ambient: new T.Color(config.ambientColor), nightAmbient: new T.Color(config.nightAmbientColor),
    sun: new T.Color(config.sunColor), nightSun: new T.Color(config.nightSunColor),
    duskFog: new T.Color(SUNSET.sunsetHaze), duskSun: new T.Color(SUNSET.sunsetLight),
    duskAmbient: new T.Color(SUNSET.sunsetAmbient),
  }
  const rain = new T.Color(WEATHER.rainSky)
  const snow = new T.Color(WEATHER.snowSky)
  return (elapsed: number, night: number, settings: { reflections: boolean; dusk: number; weather?: WeatherFrame; edgeFog: number }) => {
    const { dusk, reflections } = settings
    sky.material.uniforms.night.value = night
    sky.material.uniforms.dusk.value = dusk
    const sunY = T.MathUtils.lerp(SUNSET.maxSunY, SUNSET.minSunY, dusk)
    sky.material.uniforms.sun.value.set(SUNSET.direction[0], sunY, SUNSET.direction[2]).normalize()
    water.material.uniforms.time.value = elapsed
    water.material.uniforms.night.value = night
    water.material.uniforms.dusk.value = dusk
    water.material.uniforms.reflections.value = Number(reflections)
    fog.color.copy(colors.dawn).lerp(colors.nightFog, night).lerp(colors.duskFog, dusk)
    fog.density = T.MathUtils.lerp(0.009, SUNSET.duskFog, dusk)
    ambient.color.copy(colors.ambient).lerp(colors.nightAmbient, night).lerp(colors.duskAmbient, dusk)
    light.color.copy(colors.sun).lerp(colors.nightSun, night).lerp(colors.duskSun, dusk)
    light.position.y = T.MathUtils.lerp(14, SUNSET.sunsetLightHeight, dusk)
    ambient.intensity = T.MathUtils.lerp(T.MathUtils.lerp(config.ambient, config.nightAmbient, night), SUNSET.sunsetAmbientPower, dusk)
    light.intensity = T.MathUtils.lerp(T.MathUtils.lerp(config.sun, config.nightSun, night), SUNSET.sunsetMainPower, dusk)
    clouds.rotation.y = elapsed * 0.0013
    const weather = settings.weather
    const wet = weather?.rain ?? 0, snowing = weather?.snow ?? 0
    const amount = Math.max(wet, snowing)
    sky.material.uniforms.weatherShade.value = amount
    sky.material.uniforms.weatherSky.value.copy(rain).lerp(snow,snowing/(wet+snowing||1))
    water.material.uniforms.wet.value = wet
    water.material.uniforms.ice.value = weather?.ice ?? 0
    water.material.uniforms.rippleFx.value = weather?.low ? 0 : 1
    water.material.uniforms.foamFx.value = weather?.low ? 0 : 1
    fog.color.lerp(night > 0.5 ? colors.nightFog : sky.material.uniforms.weatherSky.value, amount * 0.67)
    fog.density = T.MathUtils.lerp(fog.density, snowing > wet ? WEATHER.snowFog : WEATHER.wetFog, amount)
    fog.density = Math.max(fog.density, settings.edgeFog)
    light.intensity *= T.MathUtils.lerp(1, snowing > wet ? WEATHER.snowLight : WEATHER.rainLight, amount)
    for (const cloud of clouds.children) (cloud as T.Sprite).material.opacity = (1 - night * 0.91) * (1 - amount * 0.55)
  }
}
