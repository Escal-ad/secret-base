import type { Credits } from './harbor-audio-config'
import { SETTINGS } from './harbor-settings'
import { FLIGHT } from '../harbor_flight/harbor-flight-config'
import type { Bus, Settings } from './harbor-settings'

const BUS_LABELS: Record<Bus, string> = { master: '主音量', music: '音乐', effects: '环境与音效', voice: '语音' }
const QUALITY_LABELS = { high: '高', medium: '中', low: '低' }
const WEATHER_LABELS = { clear: '晴', rain: '雨', snow: '雪' }
const APPEARANCE_LABELS = { traveler: '星旅人（参考版）', variant: '星旅人（变体版）', original: '原外观' }
type Props = { values: Settings; update: (next: Partial<Settings>) => void; night: boolean; toggleNight: () => void; credits: Credits | null }

function AudioControls({ values, update, credits }: Pick<Props, 'values' | 'update' | 'credits'>) {
  return <fieldset><legend>声音</legend>
    <label><input type="checkbox" checked={values.sound} onChange={event => update({ sound: event.target.checked })} />启用声音</label>
    {(Object.keys(BUS_LABELS) as Bus[]).map(bus => <div key={bus} className="settings-volume">
      <label>{BUS_LABELS[bus]}<input type="range" min={0} max={1} step={0.01} value={values.volumes[bus]}
        onChange={event => update({ volumes: { ...values.volumes, [bus]: event.target.valueAsNumber } })} /></label>
      <label><input type="checkbox" checked={values.muted[bus]}
        onChange={event => update({ muted: { ...values.muted, [bus]: event.target.checked } })} />静音</label>
    </div>)}
    <label>曲目<select aria-label="曲目播放偏好" value={values.track} onChange={event => update({ track: event.target.value as Settings['track'] })}>
      {SETTINGS.tracks.map(track => <option value={track} key={track}>{track === 'auto' ? '随场景自动' : credits?.tracks.find(item => item.id === track)?.title || track}</option>)}
    </select></label>
  </fieldset>
}

export function HarborSettingsForm(props: Props) {
  const { values, update, night, toggleNight } = props
  return <div className="settings-form">
    <AudioControls {...props} />
    <fieldset><legend>场景与操作</legend>
      <label>画质<select value={values.quality} onChange={event => update({ quality: event.target.value as Settings['quality'] })}>
        {SETTINGS.qualities.map(quality => <option key={quality} value={quality}>{QUALITY_LABELS[quality]}</option>)}</select></label>
      <label>视角<select value={values.view} onChange={event => update({ view: event.target.value as Settings['view'] })}>
        <option value="third">第三人称</option><option value="first">第一人称</option></select></label>
      <label>角色外观<select value={values.appearance} onChange={event => update({ appearance: event.target.value as Settings['appearance'] })}>
        {SETTINGS.appearances.map(skin => <option value={skin} key={skin}>{APPEARANCE_LABELS[skin]}</option>)}</select></label>
      <label>天气<select value={values.weather} onChange={event => update({ weather: event.target.value as Settings['weather'] })}>
        {SETTINGS.weather.map(weather => <option key={weather} value={weather}>{WEATHER_LABELS[weather]}</option>)}</select></label>
      <label><input type="checkbox" checked={night} onChange={toggleNight} />夜晚</label>
      <label><input type="checkbox" checked={values.flight} onChange={event => update({ flight: event.target.checked })} />{FLIGHT.ui.enable}</label>
      <label><input type="checkbox" checked={values.reduced} onChange={event => update({ reduced: event.target.checked })} />减少动画</label>
      <label><input type="checkbox" checked={values.bob} onChange={event => update({ bob: event.target.checked })} />第一人称步行起伏</label>
      <label><input type="checkbox" checked={values.lock} onChange={event => update({ lock: event.target.checked })} />第一人称点击锁定指针</label>
    </fieldset>
  </div>
}
