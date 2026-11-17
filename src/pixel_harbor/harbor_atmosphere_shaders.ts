export const WORLD_VERTEX = `
varying vec3 world;
void main() {
  world = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}`

export const SKY_FRAGMENT = `
      varying vec3 world;
      uniform vec3 sun, blue, mist, rose, gold, white;
      uniform vec3 moon, moonColor, nightZenith, nightHorizon;
      uniform vec3 sunsetZenith, sunsetHorizon;
      uniform vec3 weatherSky;
      uniform float weatherShade;
      uniform float night, dusk, starDensity;
      void main() {
        vec3 direction = normalize(world - cameraPosition);
        float height = floor(max(direction.y, 0.0) * 27.0) / 27.0;
        float facing = pow(max(dot(normalize(direction.xz), normalize(sun.xz)), 0.0), 3.0);
        vec3 tone = mix(mist, mix(rose, gold, facing), smoothstep(0.0, 0.12, height));
        tone = mix(tone, blue, smoothstep(0.035, 0.55, height));
        float angle = length(direction - sun);
        float halo = floor((1.0 - smoothstep(0.035, 0.23, angle)) * 7.0) / 7.0;
        tone = mix(tone, gold, halo * 0.72);
        if (angle < 0.037) tone = white;
        vec3 darkSky = mix(nightHorizon, nightZenith, smoothstep(0.0, 0.53, height));
        vec2 starCoord = vec2(atan(direction.z, direction.x), direction.y) * vec2(98.0, 125.0);
        vec2 starCell = floor(starCoord);
        float seed = fract(sin(dot(starCell, vec2(12.9898, 78.233))) * 43758.5453);
        float star = step(1.0 - starDensity, seed) * step(0.19, direction.y)
          * (1.0 - step(0.22, max(abs(fract(starCoord.x) - 0.5), abs(fract(starCoord.y) - 0.5))));
        darkSky = mix(darkSky, moonColor, star * 0.84);
        float moonAngle = length(direction - moon);
        float moonHalo = floor((1.0 - smoothstep(0.033, 0.14, moonAngle)) * 5.0) / 5.0;
        float moonTexture = 0.78 + 0.19 * sin(floor(direction.x * 450.0)) * cos(floor(direction.y * 390.0));
        darkSky = mix(darkSky, moonColor, moonAngle < 0.031 ? moonTexture : moonHalo * 0.21);
        vec3 sunsetSky = mix(sunsetHorizon, sunsetZenith, smoothstep(0.0, 0.5, height));
        sunsetSky = mix(sunsetSky, white, direction.y >= 0.0 && angle < 0.037 ? 1.0 : halo * 0.45);
        vec3 sky = mix(mix(tone, darkSky, night), sunsetSky, dusk);
        gl_FragColor = vec4(mix(sky, weatherSky * (1.0 - night * 0.62), weatherShade * 0.72), 1.0);
        #include <colorspace_fragment>
      }`

export const WATER_FRAGMENT = `
      varying vec3 world;
      uniform float time;
      uniform vec3 sun, mist, deep, shallow, gleam, crest;
      uniform vec3 nightWater, nightCrest, nightReflection, nightFog, moon;
      uniform vec2 shoreLights[3];
      uniform vec4 waveCells;
      uniform vec3 sunsetHaze;
      uniform float night, dusk, reflections;
      uniform float wet, ice, rippleFx, foamFx;
      ${ICE_SHADER}
      float hash(vec2 point) {
        return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453);
      }
      vec2 wavePattern(vec2 ripple, float spacing) {
        vec2 cell = floor(ripple / spacing);
        float stagger = hash(vec2(cell.y, 13.0)) * 10.0;
        float broken = hash(vec2(floor((cell.x + stagger) / 4.0), cell.y));
        float crossWave = sin(cell.x * spacing * 1.28 + cell.y * spacing * 0.27) * 0.68;
        float swell = sin(cell.y * spacing * 4.4 + crossWave - time * 1.4);
        float stripe = floor((swell * 0.61 + broken * 1.06) * 3.2) / 7.0;
        return vec2(stripe, broken);
      }
      void main() {
        vec2 relative = world.xz - cameraPosition.xz;
        float distanceToEye = length(relative);
        vec2 acrossSun = vec2(-sun.z, sun.x);
        vec2 ripple = vec2(dot(world.xz, acrossSun), dot(world.xz, sun.xz));
        ripple += time * vec2(0.12, 0.083);
        vec2 wave = mix(wavePattern(ripple, waveCells.x), wavePattern(ripple + vec2(time*0.16,-time*0.024), waveCells.y),
          smoothstep(waveCells.z, waveCells.w, distanceToEye));
        float coverage = 1.0 - max(smoothstep(0.21, 1.3, length(fwidth(ripple))),
          smoothstep(24.0, 88.0, distanceToEye));
        float swell = sin(ripple.y * 0.57 - time * 0.69) * 0.053;
        float drops = sin(22.0 * length(fract(world.xz * 1.61) - 0.5) - time * 9.0);
        float stripe = (wave.x * coverage + swell * (1.0 - coverage)) * (1.0 + wet * 0.44);
        stripe += drops * wet * rippleFx * coverage * 0.035;
        float broken = wave.y;
        vec3 tone = mix(deep, shallow, clamp(0.36 + stripe, 0.0, 1.0));
        vec3 darkWater = mix(nightWater, nightCrest, clamp(0.19 + stripe, 0.0, 1.0));
        vec3 duskWater = mix(tone, sunsetHaze, 0.53);
        if (reflections > 0.5) {
          vec2 viewDirection = normalize(relative);
          float align = max(dot(viewDirection, normalize(sun.xz)), 0.0);
          float reflection = pow(align, 215.0) * clamp(distanceToEye / 8.0, 0.0, 1.0);
          tone = mix(tone, gleam, pow(align, 13.0) * smoothstep(6.0, 95.0, distanceToEye) * 0.6);
          tone = mix(tone, stripe > 0.5 ? crest : gleam, reflection * (0.22 + max(stripe, 0.0)));
          duskWater = mix(duskWater, gleam, reflection * (0.43 + max(stripe, 0.0)));
          if (night > 0.0) {
            float moonAlign = pow(max(dot(viewDirection, normalize(moon.xz)), 0.0), 110.0);
            float shore = 0.0;
            for (int light = 0; light < 3; light++) {
              shore = max(shore, (1.0 - smoothstep(0.4, 4.5, length(world.xz - shoreLights[light]))) * step(0.68, broken));
            }
            darkWater = mix(darkWater, nightReflection, moonAlign * max(stripe, 0.0));
            darkWater = mix(darkWater, gleam, shore * 0.64);
          }
        }
        tone = mix(tone, mist, smoothstep(34.0, 200.0, distanceToEye));
        darkWater = mix(darkWater, nightFog, smoothstep(34.0, 200.0, distanceToEye));
        duskWater = mix(duskWater, sunsetHaze, smoothstep(34.0, 200.0, distanceToEye));
        vec3 water = mix(mix(tone,darkWater,night),duskWater,dusk);
        float nearBank = abs(world.x + 12.0) + max(0.0,abs(world.z) - 20.0);
        float nearCape = abs(world.z + 12.0) + max(0.0,abs(world.x + 4.5) - 12.5);
        float nearQuay = abs(world.z - 11.0) + max(0.0,abs(world.x + 3.5) - 14.5);
        float foam = (1.0-smoothstep(0.1,0.45,min(nearBank,min(nearCape,nearQuay)))) * max(0.0,swell*12.0);
        water = mix(water,crest,foam*coverage*foamFx*0.24*(1.0-night*0.6));
        if (navigableIce(world.xz, ice)) {
          vec2 cells = world.xz * vec2(2.2,3.0);
          vec2 fissures = abs(fract(cells + floor(cells.yx) * 0.38) - 0.5);
          float cracks = step(0.478,max(fissures.x,fissures.y))*coverage*rippleFx;
          bool sparse = !navigableIce(world.xz + vec2(0.17,-0.21), ice);
          vec3 frozen = mix(vec3(0.48,0.62,0.67), vec3(0.69,0.77,0.76), hash(floor(cells))*0.3 + (sparse?0.3:0.65));
          water = mix(water,mix(frozen,vec3(0.36,0.54,0.58),cracks*0.72)*(1.0-night*0.55),sparse?0.78:0.96);
        }
        gl_FragColor = vec4(water, 1.0);
        #include <colorspace_fragment>
      }`
import { ICE_SHADER } from '../harbor_expansion/harbor-ice-shader'

