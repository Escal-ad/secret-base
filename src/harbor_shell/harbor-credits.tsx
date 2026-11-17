import { AUDIO } from './harbor-audio-config'
import type { Credits } from './harbor-audio-config'
import { assetPath } from './harbor-settings'
import { hasLocalAsset } from './harbor-local-assets'
import { config } from '../site-config'

export function HarborCredits({ credits, onRead }: { credits: Credits | null; onRead: () => void }) {
  const missing = import.meta.env.DEV ? [...Object.values(AUDIO.effects).map(({ file })=>AUDIO.sfxFolder+file),
    ...AUDIO.tracks.map(id=>AUDIO.musicFolder+id+'.mp3')].filter(item=>!hasLocalAsset(item)) : []
  return <div className="harbor-credits">
    <h3>{config.siteTitle}</h3>
    <button type="button" onClick={onRead}>了解我</button>
    <p>演示数据 · 此站的展示数字用于演示。</p>
    <h3>素材署名</h3>
    <ul>{[...credits?.tracks ?? [], ...credits?.effects ?? []].map(credit => <li key={credit.id}>
      <strong>{credit.title || credit.id}</strong> · {credit.author || '作者待填写'} · {credit.license || '协议待填写'}
      {credit.source && <a href={credit.source} rel="noreferrer" target="_blank"> 来源</a>}
      {credit.attribution && <p>{credit.attribution}</p>}
    </li>)}</ul>
    {hasLocalAsset(AUDIO.license) ? <a href={assetPath(AUDIO.license)} target="_blank" rel="noreferrer">查看协议文本</a> : <p>协议文本待提供</p>}
    {missing.length>0&&<details><summary>开发素材缺失项</summary><ul>{missing.map(path=><li key={path}>{path}</li>)}</ul></details>}
  </div>
}
