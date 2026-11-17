# 变更记录

本文件建立于项目首次纳入 Git 版本控制时。以下内容依据 [扩展实施记录](docs/harbor_expansion.md)、[第二批维护记录](docs/harbor_second_batch.md)及首次提交的代码现状回溯整理，不是逐次提交记录。各功能的实际完成日期待确认，未补写版本号。

## 基线包含的功能

| 功能 | 做了什么 | 涉及文件 |
| --- | --- | --- |
| 个人资料 | 共用个人介绍、项目、邮箱和简历数据；村长小屋打开同一阅读页，简历缺失时禁用下载。 | `src/pixel_harbor/harbor_profile.ts`、`src/pixel_harbor/harbor-profile-content.tsx`、`src/pixel_harbor/harbor_resume.ts` |
| 相机与灯塔 | 支持俯仰、缩放、避障和第一人称；可经淡入淡出登塔、聚焦地标并操作望远镜。 | `src/pixel_harbor/harbor_orbit_camera.ts`、`src/pixel_harbor/harbor_activities.ts`、`src/harbor_expansion/harbor-first-camera.ts`、`src/harbor_expansion/harbor-scope.ts` |
| 后村与落日 | 连通后村坡道、梯田和后山；长椅触发黄昏过渡，退出后恢复日夜状态。 | `src/pixel_harbor/harbor_terrain.ts`、`src/pixel_harbor/harbor_forest.ts`、`src/harbor_expansion/harbor-hill.ts`、`src/pixel_harbor/harbor_atmosphere.ts` |
| 小动物 | 猫狗游走、跟随和可抚摸；加入可互动的海鸥。 | `src/pixel_harbor/harbor_animals.ts`、`src/pixel_harbor/harbor_animals_config.ts`、`src/harbor_expansion/harbor-gulls.ts` |
| 船夫与导览 | 船夫提供地点推荐、传送、三站自动导览和自由驾驶；倒车也采用船头优先的转向。 | `src/pixel_harbor/harbor-captain-dialogue.tsx`、`src/pixel_harbor/harbor_tour.ts`、`src/pixel_harbor/harbor_sailing.ts`、`src/pixel_harbor/harbor_sailing_config.ts` |
| 天气与飞行 | 加入雨雪、积雪和港内结冰；保留航道；加入斗篷飞行、地形碰撞和安全降落。 | `src/harbor_expansion/harbor-weather.ts`、`src/harbor_expansion/harbor-ice-shader.ts`、`src/harbor_flight/harbor-flight-motion.ts`、`src/harbor_flight/harbor-flight-space.ts` |
| 钓鱼与许愿 | A1 栈桥可钓鱼并记录渔获，B2 灯塔门前可放飞纸灯及管理愿望；记录留在本浏览器。 | `src/harbor_pastimes/harbor-pastimes-config.ts`、`src/harbor_pastimes/harbor-fishing.ts`、`src/harbor_pastimes/harbor-wish-lights.ts`、`src/harbor_pastimes/harbor-pastime-records.ts` |
| 评测站 | 提供三张演示模块卡、报告和工作台链接槽位，按需加载录屏；内容和部分素材待所有者填写。 | `src/pixel_harbor/eval_station_config.ts`、`src/pixel_harbor/eval_station_content.tsx`、`src/pixel_harbor/eval_station_video.tsx` |
| 音频 | 手势解锁、分路混音、随场景自动换曲、落日滤波、可选录音及程序化音效。 | `src/harbor_shell/harbor-audio.ts`、`src/harbor_shell/harbor-music.ts`、`src/harbor_shell/harbor-effects.ts`、`public/assets/audio/music/CREDITS.json` |
| 入口与阅读 | 展台入口按需加载 3D，普通阅读无需 WebGL；地图提供地点标记、指路和传送，作品船及展架复用作品数据。 | `src/App.tsx`、`src/harbor_shell/harbor-entry-stage.tsx`、`src/harbor_shell/harbor-map.tsx`、`src/pixel_harbor/harbor_reading.tsx`、`src/pixel_harbor/harbor_art_catalog.ts` |

## [未发布]

- 站名改为 Escal's Secret Base，唯一运行时来源为 `src/site-config.ts` 的 `config.siteTitle`。
- 生产构建和预览使用 GitHub Pages 项目页路径 `/secret-base/`，开发仍使用 `/`；本地作品图也跟随同一前缀。
- 新增 [GitHub Pages 部署说明](docs/DEPLOY.md)，记录手动发布步骤及 CI 路线的锁文件前置条件。
