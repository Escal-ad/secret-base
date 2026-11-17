type ProfileLink = { label: string; url: string }
type ProfileProject = { title: string; summary: string; url: string; source: string; jumpTo?: string }

export const harborProfile = {
  // TODO(reason): 待用户填写
  name: '',
  role: '',
  resumePdf: '',
  tagline: '',
  biography: '',
  avatar: '',
  skills: [] as string[],
  email: '',
  links: [] as ProfileLink[],
  projects: [] as ProfileProject[],
  namePlaceholder: '姓名待填写',
  rolePlaceholder: '目标岗位待填写',
}

export const PROFILE_UI = {
  id: 'mayor',
  title: '村长小屋',
  action: '查看村长小屋',
  anchor: [-22.6, 3.25, -3] as const,
  position: { x: -21.7, z: -3 },
  radius: 2.15,
  tabs: { intro: '简介', projects: '项目', contact: '联系' },
  placeholder: '待填写',
  copyEmail: '复制邮箱',
  copySuccess: '邮箱已复制',
  copyFailure: '无法自动复制，请选择邮箱手动复制。',
  visitProject: '带我去',
  download: '下载简历 PDF',
  resumeMissing: '简历 PDF 待填写或文件缺失',
  diagnostics: '待填写资料',
  fieldLabels: {
    name: '姓名', role: '目标岗位', tagline: '一句话简介', biography: '简介段落',
    avatar: '头像', skills: '技能关键词', email: '邮箱', resumePdf: '简历 PDF',
    links: '链接列表', projects: '项目卡片',
  },
} as const
