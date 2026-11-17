import { existsSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import { config } from './src/site-config.ts'

const LOCAL_ASSETS = 'virtual:harbor-local-assets'
const ASSET_FOLDERS = ['assets/entry', 'assets/audio/music', 'assets/audio/sfx']

function harborLocalAssets(): Plugin {
  return {
    name: 'harbor-local-assets',
    resolveId(id) { return id === LOCAL_ASSETS ? '\0' + id : undefined },
    load(id) {
      if (id !== '\0' + LOCAL_ASSETS) return
      const available=ASSET_FOLDERS.flatMap(folder=>{
        const path=resolve('public',folder)
        if(!existsSync(path))return []
        return readdirSync(path,{withFileTypes:true}).filter(item=>item.isFile()).map(item=>folder+'/'+item.name)
      })
      return 'export default '+JSON.stringify(available)
    },
  }
}

export default defineConfig({
  plugins: [react(), harborLocalAssets(), {
    name: 'harbor-site-title',
    transformIndexHtml(html) { return html.replace('%SITE_TITLE%', () => config.siteTitle) },
  }],
})
