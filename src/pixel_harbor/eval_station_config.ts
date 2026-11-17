type SourceLabel = '实战复现' | '方案演示'
type ResourceLink = { label: string; url: string }
type EvalModule = {
  id: string
  title: string
  description: string
  thumbnail: string
  source: SourceLabel | null
  links: ResourceLink[]
}

const MEBIBYTE = 1024 * 1024
const VIDEO_LIMIT_MIB = 25

export const evalStation = {
  title: '评测站',
  prompt: '查看评测站',
  disclosure: '演示数据，所有数字由工作台按演示数据实时计算，不代表真实项目数据',
  introduction: '用公开数据复现视频评测流程的演示。详细说明待填写。',
  introTitle: '简介',
  modulesTitle: '评测模块',
  resourcesTitle: '资料',
  modulePlaceholder: '模块说明待填写',
  sourcePlaceholder: '来源标签待填写',
  thumbnailPlaceholder: '缩略图待提供',
  resourcePlaceholder: '演示资料待填写',
  videoLabel: '播放演示录屏',
  videoLoading: '正在加载演示录屏…',
  videoError: '无法读取演示录屏，请检查文件路径后重试。',
  videoTooLarge: `演示录屏超过 ${VIDEO_LIMIT_MIB} MiB 上限。`,
  workbenchLabel: '打开视频数据评测工作台',
  // TODO(reason): 待用户填写简介、三张卡片的说明、缩略图、来源和链接。
  modules: [
    { id: 'caption', title: '视频 Caption', description: '', thumbnail: '', source: null, links: [] },
    { id: 't2v', title: 'T2V 评测', description: '', thumbnail: '', source: null, links: [] },
    { id: 'world-model', title: '世界模型评测', description: '', thumbnail: '', source: null, links: [] },
  ] as EvalModule[],
  // TODO(reason): 待用户填写公开工作台地址、报告链接及 /assets/eval_station/ 下的 MP4 和封面。
  workbenchUrl: '',
  methods: [] as ResourceLink[],
  video: { src: '', poster: '', maxBytes: VIDEO_LIMIT_MIB * MEBIBYTE },
}
