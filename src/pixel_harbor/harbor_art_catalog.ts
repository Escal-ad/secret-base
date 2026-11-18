
export type ArtEntry = {
  id: string
  title: string
  category: string
  year: string
  description: string
  image?: string
}

// 暂时没有要展示的作品：作品船的展位由这份列表生成，清空后不再出现展位。
// 想恢复时把条目加回来即可，格式参考 git 历史里的旧版本。
export const ARTWORKS: ArtEntry[] = []
