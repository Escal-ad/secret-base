# 项目状态与交接

本页记录首次 Git 基线的当前行为。两份历史实施记录中的旧入口、顶栏和界面曾实际存在，不能直接视为当前行为。访客操作见 [README](../README.md)，维护规则见 [AGENTS.md](../AGENTS.md)。

## 1. 已完成功能

下表路径以仓库根目录为基准；「已完成」指代码中可用的功能，仍需填写的资料见第 4、9 节。

| 模块 | 当前行为 | 主要文件 |
| --- | --- | --- |
| 漫游与碰撞 | 键盘与触屏摇杆移动、跳跃及复位；地形、建筑和水域限制活动范围。 | `src/pixel_harbor/harbor_controls.ts`、`src/pixel_harbor/harbor_player_motion.ts`、`src/pixel_harbor/harbor_layout.ts` |
| 相机 | 第三人称环绕、俯仰、缩放与避障；第一人称复用同一角色状态。 | `src/pixel_harbor/harbor_orbit_camera.ts`、`src/harbor_expansion/harbor-first-camera.ts` |
| 飞行 | 支持起飞、触屏升降、速度缓冲及安全降落；红斗篷随飞行姿态变化。 | `src/harbor_flight/harbor-flight-motion.ts`、`src/harbor_flight/harbor-flight-space.ts`、`src/harbor_flight/harbor-cape.ts` |
| 天气 | 晴、雨、雪切换，粒子和地表变化；积雪后逐步结冰，特定航道留空。 | `src/harbor_expansion/harbor-weather.ts`、`src/harbor_expansion/harbor-ice-shader.ts` |
| 灯塔 | 淡入淡出登塔、瞭望地标、望远镜放大，支持下塔与复位。 | `src/pixel_harbor/harbor_activities.ts`、`src/pixel_harbor/harbor_scene_travel.ts`、`src/harbor_expansion/harbor-scope.ts` |
| 后村 | 坡道连通梯田，村长小屋旁可沿林径登后山；后村和后山有独立地点。 | `src/pixel_harbor/harbor_village_plan.ts`、`src/pixel_harbor/harbor_forest.ts`、`src/harbor_expansion/harbor-hill.ts` |
| 落日 | 后山长椅触发约 25 秒的黄昏过渡，退出后恢复原日夜状态。 | `src/pixel_harbor/harbor_activities.ts`、`src/pixel_harbor/harbor_atmosphere.ts`、`src/pixel_harbor/harbor_exploration_config.ts` |
| 动物 | 猫狗在限制范围内游走、跟随或接受抚摸，海鸥可互动。 | `src/pixel_harbor/harbor_animals.ts`、`src/harbor_expansion/harbor-gulls.ts` |
| 船夫导览 | 提供船夫对话和地点推荐、三站自动巡航、自由驾驶与靠岸。 | `src/pixel_harbor/harbor-captain-dialogue.tsx`、`src/pixel_harbor/harbor_tour.ts`、`src/pixel_harbor/harbor_sailing.ts` |
| 钓鱼 | A1 栈桥船尾侧抛竿、等待和限时收竿；本地按种类记录。 | `src/harbor_pastimes/harbor-fishing.ts`、`src/harbor_pastimes/harbor-catch-panel.tsx`、`src/harbor_pastimes/harbor-pastime-records.ts` |
| 许愿 | B2 灯塔门前输入愿望、放飞并查询纸灯；仅保存在本浏览器。 | `src/harbor_pastimes/harbor-wish-panel.tsx`、`src/harbor_pastimes/harbor-wish-lights.ts`、`src/harbor_pastimes/harbor-pastime-records.ts` |
| 评测站 | 卡片与来源占位、报告及工作台槽位、点按后请求录屏；阅读页复用内容。 | `src/pixel_harbor/eval_station_config.ts`、`src/pixel_harbor/eval_station_content.tsx`、`src/pixel_harbor/eval_station_video.tsx` |
| 作品与地点 | 作品船、展架和阅读共用作品数据；地图的地点卡支持指路和安全传送。 | `src/pixel_harbor/harbor_art_catalog.ts`、`src/pixel_harbor/harbor_exhibits.ts`、`src/harbor_shell/harbor-map.tsx` |
| 阅读模式 | 入口「了解我」、村长小屋和关于页通往 `?mode=read`；阅读时不挂载 3D。 | `src/App.tsx`、`src/pixel_harbor/harbor_reading.tsx`、`src/pixel_harbor/harbor-profile-content.tsx` |
| 音频 | 主音量、音乐、音效、语音四路；手势解锁、场景换曲、落日滤波；无录音时按配置兜底。 | `src/harbor_shell/harbor-audio.ts`、`src/harbor_shell/harbor-music.ts`、`src/harbor_shell/harbor-effects.ts` |
| 设置与存档 | 菜单保存设置与日夜选择；独立保存地点访问、首访帮助状态、渔获及愿望；读取或写入失败按各模块处理。 | `src/harbor_shell/harbor-settings.ts`、`src/pixel_harbor/harbor_lighting_preferences.ts`、`src/pixel_harbor/harbor_visit_history.ts`、`src/pixel_harbor/harbor_help_preferences.ts`、`src/harbor_pastimes/harbor-pastime-records.ts` |

## 2. 架构与接口

| 层 | 文件与对外接口 | 职责 |
| --- | --- | --- |
| 路径与加载 | `src/App.tsx` 的 `App`；`src/pixel_harbor/harbor_scene_session.ts` 的 `useHarborScene` | React 切换入口、场景和阅读；场景会话按需导入运行时，将加载进度、地点、活动和面板状态传给 React。 |
| 渲染 | `src/pixel_harbor/harbor_runtime.ts` 的公开 `mountHarbor(options)` 与内部 `createPixelOutput` | 接收挂载节点、配置及回调，返回移动、交互、传送、地图烘焙和释放等操作；近邻采样放大低分辨率渲染目标至画布。 |
| 相机 | `src/pixel_harbor/harbor_orbit_camera.ts` 的 `createOrbitCamera(camera, obstacles)` | 输出镜头角度；提供 `update`、`look`、`zoom`、`center`、`aim`。第三人称计算贴地与障碍退让，第一人称由扩展模块混合。 |
| 输入 | `src/pixel_harbor/harbor_controls.ts` 的 `createControls(options)` | 注册键盘与指针监听，归一化方向，限制活动期间可用动作；提供 `moveAnalog`、`update`、`clear`、`dispose` 等。 |
| 地形与碰撞 | `src/pixel_harbor/harbor_layout.ts`：`WALKABLE`、`canWalkAt`、`findSupportHeight`；`src/pixel_harbor/harbor_terrain.ts`：`groundElevation`、`cameraFloor` | X/Z 为水平位置、Y 为高度；以可走区域与障碍占地判定移动，坡道和高地高度由共享函数计算。 |
| 地点与地图 | `src/pixel_harbor/harbor_layout.ts` 的 `HARBOR_DESTINATIONS`；`src/pixel_harbor/harbor_places_config.ts` 的 `PLACE_LABELS`；`src/pixel_harbor/harbor_hotspots.ts` 的 `findHarborHotspot`、`listHarborPlaces`、`createHotspotTracker` | 合并交互坐标、标签锚点、展架及海上地点，输出给场景、悬浮标签和地图。普通阅读从对应数据入口组装目录。 |
| 音频 | `src/harbor_shell/harbor-audio.ts` 的 `createHarborAudio()`、`chooseMusic` | 将设置和场景状态映射到曲目、各混音通道与本地或程序化音效；公开 `prepare`、`unlock`、`sync`、`play`、`dispose` 等操作。 |
| 天气 | `src/harbor_expansion/harbor-weather.ts` 的 `createHarborWeather(scene)` | 每帧 `update` 输出雨、雪、积雪覆盖和结冰强度；`harbor-weather-config.ts` 的 `iceAt` 与冰面着色器共用航道范围。 |
| 面板 | `src/pixel_harbor/harbor_panel.tsx` 的 `HarborPanel`、`src/pixel_harbor/pixel_harbor.tsx` 的 `PixelHarbor` 和 `src/pixel_harbor/pixel_harbor.css` | 处理面板淡入淡出、关闭及焦点，与场景页、菜单、作品和活动面板协作；暂停移动由会话按面板类型控制。 |

## 3. 配置索引

`src/` 中全部 21 个 `*config*.ts`。行数按首次基线物理行（含空行）；「高频」表示优先从此处调参或补资料。

| 文件 | 行数 | 管什么 | 频度 |
| --- | ---: | --- | --- |
| `src/harbor_expansion/harbor-hill-config.ts` | 18 | 后山地点、活动范围及高度函数 | 常规 |
| `src/harbor_expansion/harbor-island-config.ts` | 14 | 远景岛屿与海上剪影 | 常规 |
| `src/harbor_expansion/harbor-map-config.ts` | 6 | 地图边界、像素尺寸与坐标转换 | 常规 |
| `src/harbor_expansion/harbor-resident-config.ts` | 12 | 村民活动、样貌和台词 | 高频 |
| `src/harbor_expansion/harbor-scope-config.ts` | 12 | 望远镜倍率、目标和提示 | 常规 |
| `src/harbor_expansion/harbor-traveler-config.ts` | 12 | 主角变体、围巾和第一人称相机 | 常规 |
| `src/harbor_expansion/harbor-weather-config.ts` | 17 | 雨雪、覆盖、结冰和保护航道 | 高频 |
| `src/harbor_flight/harbor-flight-config.ts` | 23 | 飞行速度、高度限制、斗篷和操作提示 | 高频 |
| `src/harbor_pastimes/harbor-pastimes-config.ts` | 42 | 钓鱼与许愿地点、计时、概率、文字和容量 | 高频 |
| `src/harbor_shell/harbor-audio-config.ts` | 53 | 曲目、音效槽位、场景映射和音频预算 | 高频 |
| `src/pixel_harbor/eval_station_config.ts` | 42 | 演示卡、来源、录屏、报告和工作台地址 | 高频 |
| `src/pixel_harbor/harbor_animals_config.ts` | 32 | 猫狗数量、外形、活动和互动 | 常规 |
| `src/pixel_harbor/harbor_captain_config.ts` | 59 | 船夫外观、推荐、对话、航线和站点 | 高频 |
| `src/pixel_harbor/harbor_exploration_config.ts` | 78 | 灯塔、后村、落日位置、画面和文案 | 高频 |
| `src/pixel_harbor/harbor_forest_config.ts` | 18 | 树丛布置、颜色和树影 | 常规 |
| `src/pixel_harbor/harbor_interaction_config.ts` | 2 | 面板淡入淡出与提示最小字号 | 常规 |
| `src/pixel_harbor/harbor_lighting_config.ts` | 59 | 清晨和夜间颜色、光束及性能降级 | 高频 |
| `src/pixel_harbor/harbor_movement_config.ts` | 60 | 走路、跳跃、基础角色和环绕相机 | 高频 |
| `src/pixel_harbor/harbor_places_config.ts` | 47 | 地点标签、图例、锚点和传送 | 高频 |
| `src/pixel_harbor/harbor_sailing_config.ts` | 46 | 泊位、航行阻挡、船速和倒车转向 | 高频 |
| `src/site-config.ts` | 11 | 站名、入口按钮和两层角色图路径 | 高频 |

另有三个不匹配文件名索引的常用数据入口：`src/pixel_harbor/harbor_profile.ts`（个人资料）、`src/pixel_harbor/harbor_art_catalog.ts`（作品）和 `src/harbor_shell/harbor-settings.ts`（设置默认值及保存）。

## 4. 数据与素材现状

| 内容 | 已有 | 待填或缺失 |
| --- | --- | --- |
| 个人资料 | `src/pixel_harbor/harbor_profile.ts` 为单一数据源；阅读页共用。 | 姓名、岗位、两段简介、头像、技能、邮箱、简历、链接及项目为空；`public/resume.pdf` 不存在。 |
| 作品 | `src/pixel_harbor/harbor_art_catalog.ts` 有 7 项示例；`public/artwork/` 有 3 个作品 SVG，另外 4 项无静态 `image` 字段，由 `src/pixel_harbor/harbor_art.ts` 负责生成预览。 | 是否替换为正式作品及图文待所有者确认。 |
| 地点与人物 | 坐标及标签已接入场景、地图和阅读；重点字段来自 `harbor_places_config.ts` 及各模块配置。 | `src/harbor_expansion/harbor-resident-config.ts` 的 6 位村民 `name/job/line` 都为空；`src/pixel_harbor/harbor_captain_config.ts` 的船夫介绍、地点讲解、对话正文与停靠讲解待填；`src/pixel_harbor/harbor_exploration_config.ts` 的灯塔、后村和落日说明或字幕仍为占位。另有后山介绍、望远镜目标名及介绍、海上浮标介绍和猫狗名字待填，配置路径见第 9 节。 |
| 钓鱼与许愿 | `src/harbor_pastimes/harbor-pastimes-config.ts` 提供 5 类渔获、本地记录和纸灯。 | 渔获介绍、瓶中信正文为空；可选愿望示例为空。 |
| 评测站 | `src/pixel_harbor/eval_station_config.ts` 已配置 Caption、T2V、世界模型三个标题及演示免责声明。 | 三个模块的介绍、缩略图、来源和链接未填；工作台、报告、录屏及封面未提供。 |
| 音乐和音效 | `public/assets/audio/music/` 有三首 MP3 及 `CREDITS.json`；`src/harbor_shell/harbor-audio-config.ts` 定义本地音效槽位。 | 单独的 `LICENSE_CC0.txt` 和本地 SFX 未发现；缺录音时按现有程序化方案回退或静默。 |
| 入口和角色 | `public/assets/entry/hero.png` 和 `hero-scarf.png` 是当前入口两层图； 游戏内角色由 `src/harbor_expansion/harbor-traveler.ts` 生成。 | `src/harbor_expansion/harbor-traveler-config.ts` 的变体配色待确认。仅供参考的原图不在提交范围。 |

## 5. 决策记录

| 决策 | 依据与原因 |
| --- | --- |
| 用 `groundElevation` 查询高度，沿用显式可走区 | `src/pixel_harbor/harbor_terrain.ts` 将坡面和高度查询集中起来。[第二批记录的技术决策](harbor_second_batch.md#技术决策)说明分段斜面可共用人物、动物、相机查询并方便核对坡度；大范围高度图需要额外采样和过渡。 |
| 先积雪再结冰，保护航道 | `src/harbor_expansion/harbor-weather-config.ts` 分设积雪和冰的时序，`harbor-ice-shader.ts` 使用保护航道遮罩。第二批记录说明材质覆盖及共享遮罩避免堆叠大量冰雪对象；先后延迟的具体取值依据待确认。 |
| 夜景用自发光与像素光晕 | `src/pixel_harbor/harbor_glow.ts` 读取发光标记，更新自发光、像素光晕及灯塔光束；`harbor_lighting_config.ts` 设新增动态点光源预算为 0。实现与 [README](../README.md) 一致；选择这一具体预算的原始对照测量待确认。 |
| 画质按顺序降级 | `src/pixel_harbor/harbor_render_quality.ts` 按帧率窗口，每次关闭配置指定的一档并提示。历史记录确认逐项降级；当前完整顺序见第 8 节，每一档先后取舍的单项数据待确认。 |

## 6. 已知限制与部署

| 项 | 当前状态 |
| --- | --- |
| Git | 此前没有提交历史，本次从首个现状基线开始；两份历史文档不是 Git 提交记录。初始基线 166 个文件，暂存对象内容合计 8,129,113 字节（不计 Git 对象压缩和索引开销）。 |
| 依赖 | 5 个当前未引用的直接声明：`@astryxdesign/core`、`@astryxdesign/theme-neutral`、`@astryxdesign/build`、`@astryxdesign/cli`、`@stylexjs/stylex`。锁文件部分条目为指向父目录 pnpm 布局的链接；独立目录全新安装的可复现性待确认，本次未安装。 |
| 内容 | 第 4 节所列配置仍有占位。站名是否涉及原作角色名称待所有者确认，现状未改。 |
| 最大素材 | `public/assets/audio/music/` 的 `boy.mp3`（2,610,149 字节）、`baguira.mp3`（2,486,851 字节）、`sudo.mp3`（2,475,148 字节），共 7,572,148 字节（约 7.57 MB / 7.22 MiB）。 |
| 部署 | 据所有者说明，本站从未上线；[另一个已上线的纯 HTML 站点](https://escal-ad.github.io)来自 `escal-ad.github.io` 仓库，与本站无关。本次未联网验证。本站计划后续用 GitHub Pages 项目页部署；当前 `vite.config.ts` 未设置该项目页的 `base`，也未提交部署工作流。部署不属本次范围。 |

## 7. 尚待完成

阶段编号沿用 [渔港扩展实施记录](harbor_expansion.md)：阶段 1 个人资料、阶段 2–3 相机与灯塔、阶段 4 后村与落日、阶段 5 小动物、阶段 6 船夫与导览。这里列的是后续填充与复核事项，不表示上述阶段功能尚未实现。

| 优先级 | 事项 | 关联阶段或文件 |
| --- | --- | --- |
| 高 | 补个人资料、可公开简历和项目链接；确认站名是否符合内容规则。 | 阶段 1；`src/pixel_harbor/harbor_profile.ts`、`src/site-config.ts` |
| 高 | 补评测公开素材、来源标签与录屏等，替换正式作品。 | `src/pixel_harbor/eval_station_config.ts`、`src/pixel_harbor/harbor_art_catalog.ts` |
| 中 | 补灯塔、后村、落日、船夫和路线讲解；核对动物显示用名及阶段交互。 | 阶段 2–3、4、5、6；`harbor_exploration_config.ts`、`harbor_animals_config.ts`、`harbor_captain_config.ts`（均在 `src/pixel_harbor/`） |
| 中 | 低端手机真机重测；为后续部署验证干净安装、项目页资源路径和构建。 | `src/pixel_harbor/harbor_lighting_config.ts`、`package-lock.json`、`vite.config.ts` |
| 低 | 完善村民台词、渔获介绍、瓶中信、可选愿望示例和可选声音素材。 | `src/harbor_expansion/harbor-resident-config.ts`、`src/harbor_pastimes/harbor-pastimes-config.ts`、`src/harbor_shell/harbor-audio-config.ts` |

## 8. 历史性能基线与当前降级

| 来源 | 样本 | 结果 |
| --- | --- | --- |
| [扩展实施验收](harbor_expansion.md#验收记录) | Windows AMD Radeon / D3D11 桌面与触屏模拟 | 约 90 FPS；1280×720 夜间评测站附近 365–373 次绘制调用、16,256–16,352 个三角形；后村、瞭望及落日样本均低于 390 次绘制调用。 |
| [第二批验收](harbor_second_batch.md#验收记录) | 1280×720 高档夜晚评测站；390×844 低档触屏模拟清晨栈桥 | 分别为 90 FPS / 441 次绘制调用 / 17,671 三角形，以及 90 FPS / 148 次绘制调用 / 10,359 三角形。 |

当前实现以 `src/pixel_harbor/harbor_lighting_config.ts` 的 `RENDER_QUALITY.order` 为准：**雨雪粒子 → 积雪/结冰地面效果 → 远景岛屿 → 村民 → 动物与远处树林 → 海鸥 → 衣物动画 → 树影 → 灯塔光束 → 船尾迹 → 水面反光 → 光晕**。每 4.2 秒采样窗口低于 24 FPS 时前进一档（已关闭档位会跳过），低档的部分效果可从开始就关闭。上表是旧批次单机短时样本；本次文档工作未重跑性能，低端手机真机数据待确认。

## 9. 所有者需手动准备

| 内容 | 放置位置或填写处 |
| --- | --- |
| 姓名、岗位、简介、技能、邮箱、链接和项目 | 填 `src/pixel_harbor/harbor_profile.ts`；简历可放 `public/resume.pdf`，将 `resumePdf` 设为 `/resume.pdf`；头像放在 `public/` 下的自选图片路径，填入 `avatar`。 |
| 实际作品、图片与著录 | 图片放 `public/artwork/harbor/`，在 `src/pixel_harbor/harbor_art_catalog.ts` 填图文及对外路径（不含 `public/`）；保留既有 ID 可复用展位。 |
| 公开评测图、录屏、报告及链接 | 图片、MP4 和封面放 `public/assets/eval_station/`；录屏不超过 25 MiB。编辑 `src/pixel_harbor/eval_station_config.ts` 的 `modules`、`methods`、`workbenchUrl` 和 `video`。 |
| 村民、船夫及陆上地点介绍 | 分别填 `src/harbor_expansion/harbor-resident-config.ts`、`src/pixel_harbor/harbor_captain_config.ts`、`src/pixel_harbor/harbor_exploration_config.ts`。 |
| 后山、望远镜、浮标和猫狗 | 填 `src/harbor_expansion/harbor-hill-config.ts` 的后山介绍、`src/harbor_expansion/harbor-scope-config.ts` 的目标名及提示、`src/pixel_harbor/harbor_sailing_config.ts` 的海上地点介绍、`src/pixel_harbor/harbor_animals_config.ts` 的动物名字。 |
| 渔获描述、瓶中信及可选愿望示例 | 填 `src/harbor_pastimes/harbor-pastimes-config.ts` 的 `FISHING.pool` 和 `WISHING.examples`。 |
| 可选录音和协议正文 | 录音放 `public/assets/audio/sfx/`，按 `src/harbor_shell/harbor-audio-config.ts` 的 `effects` 槽位命名；协议正文放 `public/assets/audio/music/LICENSE_CC0.txt`，音乐及署名也在该目录。 |
| 可选入口图或角色变体 | 替换 `public/assets/entry/hero.png`、`hero-scarf.png` 时保持画布尺寸一致；路径在 `src/site-config.ts`，游戏内变体配色在 `src/harbor_expansion/harbor-traveler-config.ts`。 |
