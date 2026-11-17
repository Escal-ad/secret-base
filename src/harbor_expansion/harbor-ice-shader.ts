import { WEATHER } from './harbor-weather-config'

const polygon = ([left,right,near,far]: readonly number[]) =>
  `(p.x >= ${left.toFixed(3)} && p.x <= ${right.toFixed(3)} && p.y >= ${near.toFixed(3)} && p.y <= ${far.toFixed(3)})`

export const ICE_SHADER = `
  bool navigableIce(vec2 p, float strength) {
    if (strength <= 0.0 || !${polygon(WEATHER.iceBounds)}
      || ${WEATHER.safeChannels.map(polygon).join(' || ')}) return false;
    float edge = min(min(abs(p.y + 2.55), abs(p.y - 11.0)), min(abs(p.x + 12.0),abs(p.y + 18.0)));
    float noise = 0.14 * sin(p.x * 0.83 + p.y * 0.51) * sin(p.y * 1.25 - p.x * 0.34);
    return edge * 0.16 + noise < strength;
  }
`
