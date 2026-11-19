type ProfileLink = { label: string; url: string }
type ProfileProject = { title: string; summary: string; url: string; source: string; jumpTo?: string }

export const harborProfile = {
  // 村长小屋里只放这四样：名字、邮箱、小红书、个人网站
  name: '千年万亿大人',
  email: 'escal_ad@163.com',
  links: [{
    label: '小红书',
    url: 'https://www.rednote.com/user/profile/6657dd890000000007007a76?xsec_token=YBJ6KjkHOBMVJ3ZEQTgkyD-xJbTztT5Lea0ZOd3OdABgk%3D&xsec_source=app_share&xhsshare=WeixinSession&shareRedId=ODhDQzhLSE02NzUyOTgwNjc8OTlFPjg7&apptime=1795086259&share_id=92953633bc1b45eba4434213db0340db&share_channel=wechat&track_code=99MMWP3Vfmd',
  }, {
    label: '个人网站',
    url: 'https://escal-ad.github.io/secret-base/',
  }] as ProfileLink[],
  // 下面这些字段暂时不用（面板已经不渲染了），留着防止其它地方引用报错
  role: '',
  resumePdf: '',
  tagline: '',
  biography: '',
  avatar: '',
  skills: [] as string[],
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
