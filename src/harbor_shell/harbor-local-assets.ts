import filenames from 'virtual:harbor-local-assets'
export function hasLocalAsset(path:string) { return filenames.includes(path) }
