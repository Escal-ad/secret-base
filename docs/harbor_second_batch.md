# 渔港历史记录 · 第二批维护记录

本批保留 React、Vite、TypeScript 和 Three.js，没有新增依赖。旧版在首屏直接加载 3D、在顶栏并排放多个按钮；这次先进入独立入口，再按需挂载渲染器，场景操作收进菜单，提示条在窄屏折行。原作品、评测、联系和普通阅读继续共用已有资料。

## 技术决策

- 后山使用分段斜面与共用的高度查询。既有陆地是显式可走区域；采用分段坡面可以沿用人物、动物和相机的查询，也便于校核路径与坡度。整张高度图更适合连续的大地图，需要额外的采样和过渡处理。
- 积雪用材质叠加到朝上的表面，避免成倍增加物体。冰面由港内限界、航道保留区和岸边噪声遮罩决定；船碰撞用同一个遮罩公式。没有新增物理库或大量冰块网格。水面按视距和像素覆盖范围衰减高频细节。
- 地图首次打开时由正交相机离屏生成 720 像素底图；缓存到退出场景，同一坐标转换用于底图、地点和人物位置。望远镜另行加载船只和岛屿细节，离开时释放；村民和猫狗在现有骨架上按倍率叠加面部与项圈细节。
- 外观沿用人物原尺寸、动作骨架和碰撞体，雨伞是独立挂件。第一人称输出使用同一移动状态，在眼睛高度附加相机；两种视角共用地点和交互系统。
- 入口预取默认曲，手势解锁后才播放。场景就绪后加载其余曲目，场景模式、日夜和天气直接驱动映射。音乐四秒重叠循环，换曲交叉淡化。落日对音乐专线滤波，不改变环境音或音效。村长小屋在敲门声之后打开菜单首页。
- 这批按一次交付执行；文案保留 TODO；采用已提供的配色制作人物，缺失图片和声音按各槽位的说明回退。

## 变更位置

| 文件或模块 | 用途 |
| --- | --- |
| `src/App.tsx`、`harbor-entry.tsx`、`harbor-shell.css` | 入口、进度、延迟加载与普通阅读切换 |
| `harbor-main-menu.tsx`、`harbor-settings.ts`、`harbor-settings-form.tsx`、`harbor-interactivity.css` | 共享个人资料、设置持久化、菜单和窄屏提示 |
| `harbor-local-assets.ts`、`virtual-assets.d.ts`、`vite.config.ts`、`.gitignore` | 本地素材清单、部署路径和参考图排除规则 |
| `harbor-audio-config.ts`、`harbor-audio.ts`、`harbor-music.ts`、`harbor-effects.ts`、`harbor-ambient-audio.ts`、`harbor-ambience.ts` | 声音清单、四路混音、曲目传输、环境与程序化音效 |
| `harbor-credits.tsx`、`harbor-credits-data.ts`、`public/assets/audio/music/` | 按原样保存三首曲目和署名，供关于页读取 |
| `harbor-traveler-config.ts`、`harbor-traveler.ts`、`harbor-umbrella.ts`、`harbor-first-camera.ts`、`harbor_avatar.ts` | 三套外观、雨伞、围巾和第一人称切换 |
| `harbor-hill-config.ts`、`harbor-hill.ts`、`harbor-resident-config.ts`、`harbor-residents.ts`、`harbor-gulls.ts` | 后山地形与步道、人和海鸥的日程与互动 |
| `harbor-map.tsx`、`harbor-map-config.ts`、`harbor-map-bake.ts` | 正交底图、地图交互与坐标换算 |
| `harbor-scope-config.ts`、`harbor-scope.ts`、`harbor-scope-detail.ts`、`harbor-scope-living-detail.ts`、`harbor-island-config.ts`、`harbor-islands.ts` | 望远镜、远船、岛屿、按需加载的细节 |
| `harbor-weather-config.ts`、`harbor-weather.ts`、`harbor-ice-shader.ts`、`harbor_atmosphere.ts` | 雨雪和地表效果、海面过滤、与航行共享的结冰模型 |
| `harbor_sailing.ts`、`harbor_sailing_config.ts`、`harbor_captain_config.ts`、`harbor_scene_travel.ts` | 自由驾驶、保护航道、靠岸及恢复 |
| `harbor-scene-extension.ts`、`harbor_runtime.ts`、`harbor_scene_session.ts`、`pixel_harbor.tsx` | 各系统的装载、逐帧调度、降级、状态传递与清理 |
| `harbor_controls.ts`、`harbor_layout.ts`、`harbor_animals.ts`、`harbor_terrain.ts`、`harbor_world.ts`、`harbor_places_config.ts` | 输入、地形碰撞与地点标记接入 |
| `harbor_panel.tsx`、`harbor_site_header.tsx`、`harbor-profile-content.tsx`、`harbor_help.tsx` | 菜单复用现有面板、个人资料和简历界面 |
| `README.md` | 访客操作、素材路径、配置入口 |

## 本地素材

已提供的音乐合计 7,572,148 字节（约 7.22 MiB）。`CREDITS.json` 原样保留，包含协议名称；独立的 `LICENSE_CC0.txt` 未提供，页面在本地文件存在后再显示链接。入口图、菜单图与角色参考图未提供。猫、狗、海鸥暂无录音，不播放录音；发动机、机器、敲门、字符、雨和风使用程序化声音。复制素材的路径及重建方式见 README。

## 验收记录

旧版基线见 [第一批报告](harbor_expansion.md)。本批目标：桌面常用场景至少 60 FPS、最多 460 次 draw call、26,000 个三角形；模拟移动低档至少 45 FPS、最多 210 次 draw call、18,000 个三角形。样本来自同一台 AMD Radeon 电脑上的 Chrome；手机尺寸是模拟，没有测低端真机。Chrome 的 JS 堆估计不包含显存和解码音频缓冲区。

已通过生产构建与 lint。浏览器抽测覆盖：入口和普通阅读不加载 3D、供稿音乐解码、曲目设置、关于页、视角和外观切换、天气保存、地图、村长小屋、落日滤波进入和恢复、望远镜放大与关闭、自由驾驶和返航。音频测试观察浏览器播放与滤波节点，未评估交叉循环的主观听感。

后山使用实际人物移动逻辑走到海拔 5.61 的山顶；验证积雪、冰面出现和融化，受保护航道未结冰，自动导览完成三个停靠点。海鸥完成互动、起飞和返回；六位村民在模拟雨天保持在可走范围内，近处可触发招呼。模拟触屏设备实际点按了入口、跳跃、地图标记和传送；320 像素宽时没有横向溢出。

| 场景 | FPS | draw call | 三角形 | JS 堆估计 |
| --- | ---: | ---: | ---: | ---: |
| 桌面高档，清晨栈桥，1280×720 | 90 | 318 | 14,899 | 37.1 MiB |
| 桌面高档，夜晚评测站，1280×720 | 90 | 441 | 17,671 | 33.3 MiB |
| 桌面高档，夜雨后山，1280×720 | 90 | 416–417 | 24,118–24,130 | 34.8 MiB |
| 模拟触屏低档，清晨栈桥，390×844 | 90 | 148 | 10,359 | 52.6 MiB |

这是单台电脑短时采样，不能当作手机或长时间运行的性能保证。生产入口 HTML、JS 和 CSS 共约 88 kB gzip，不含按需加载的 3D 和媒体；默认先预取 2.61 MB MP3，其他两首在场景空闲时预取，播放前才解码。
