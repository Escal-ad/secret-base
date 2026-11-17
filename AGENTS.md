# 项目简介

这是一个个人 3D 像素渔村作品集：访客从入口页选择进入 3D 漫游或普通阅读，也可在漫游中切到普通阅读。

## 技术栈与版本

| 依赖 | `package.json` 声明 | `package-lock.json` 记录 |
| --- | --- | --- |
| Three.js | `0.187.0` | 0.187.0 |
| React | `^19.3.1` | 19.3.1 |
| React DOM | `^19.3.1` | 19.3.1 |
| Phaser | `^4.2.1` | 4.2.1 |
| Vite | `^8.3.6` | 8.3.8 |
| TypeScript | `~7.0.2` | 7.0.2 |
| Oxlint | `^1.90.0` | 1.93.0 |

- 不引入 React Three Fiber 或 drei；3D 使用原生 Three.js 命令式搭建。
- 不引入路由库；`src/App.tsx` 用 `useState`、`?mode=read` 和浏览器 History API 切页。
- 不启用未用的 `@astryxdesign/core`、`@astryxdesign/theme-neutral`、`@astryxdesign/build`、`@astryxdesign/cli`、`@stylexjs/stylex`。保留现有依赖声明，样式使用纯 CSS，不引入 Tailwind。

## 目录结构

| 目录 | 职责 |
| --- | --- |
| `src/pixel_harbor/` | 渔港核心运行时、世界与碰撞、相机、地点和面板。 |
| `src/harbor_shell/` | React/CSS 入口展台、菜单、地图、设置和音频。 |
| `src/harbor_expansion/` | 后山、村民、天气、岛屿、望远镜和第一人称等扩展。 |
| `src/harbor_flight/` | 飞行规则、空间限制、斗篷表现和触屏操作。 |
| `src/harbor_pastimes/` | 钓鱼、许愿、道具、面板与本地记录。 |
| `src/game/` | 旧 Phaser 像素展厅模块；当前入口展台未引用它。 |
| `public/` | 部署时原样复制的图片、音频、公开演示素材。 |
| `docs/` | 历史实施、验收、项目状态和交接指引。 |

## 运行与构建

| 命令 | 用途 |
| --- | --- |
| `npm install` | 安装现有依赖；不要因文档任务改依赖或锁文件。 |
| `npm run dev` | 启动 Vite 本地开发服务器。 |
| `npm run build` | 执行 `tsc -b && vite build`，先类型检查，再构建。 |
| `npm run lint` | 用 `oxlint` 检查源码。 |
| `npm run preview` | 用 Vite 预览已生成的生产构建，不作为生产服务。 |

## 代码规范

- 目录名用 snake_case。核心逻辑沿用 `src/pixel_harbor/` 的 snake_case；`src/harbor_shell/` 新文件默认用 snake_case，延续既有连字符文件族时跟随其命名。`src/harbor_expansion/`、`src/harbor_flight/`、`src/harbor_pastimes/` 中的文件用 kebab-case。不为统一风格批量改名。
- 每个文件一个主要模块，导出入口显式命名。函数最多 40 行、参数最多 3 个；超出参数数量用选项对象。常量命名，禁止空 `catch`，业务逻辑不用 `console.log`，不保留注释掉的旧代码。不确定处写 `TODO(reason): 待确认…`。
- 规则只约束新增与修改的代码；不因历史超长函数等问题强制重构存量（例如 `harbor_runtime.ts` 的 `installInteraction`）。
- 数据与逻辑分离：可调参数、配色和文案放入 `*config*.ts`，逻辑从配置读取。维护现有统一资料入口 `harbor_profile.ts`。
- 新增像素造型仅使用 ModelKit 的 `kit.box` / `kit.beam`，用 `Paint` 二元组指定材质、用 `makeCanvas` / `pixelTexture` 生成贴图。禁止外部 glTF/GLB、球体、圆角等非方块几何。原有灯塔、渲染平面等存量实现不因此重写。

## 素材规则

不联网下载素材。音频与图片由项目所有者提供；缺失时用占位或程序化兜底，沿用已有素材槽位，不编造已提供的文件名。仅供参考的原图存入已忽略的 `assets/reference/`，不进公开素材。

## 内容规则

全站不使用原作角色名称，不展示手机号，不放任何腾讯内部项目材料；数字类展示必须标注「演示数据」。站名自 2026-11 起为 `Escal's Secret Base`（所有者决定，取代此前的 `Little Prince's Secret Base`）。站名的唯一来源是 `src/site-config.ts` 的 `config.siteTitle`，不要在别处硬编码。

## 工作方式

先分析再修改；有多种可行方案时列出取舍，请所有者选择。一次做一个任务；每次提交前列出变更文件。任务完成后同步 [项目状态](docs/PROJECT_STATE.md) 和 [变更记录](CHANGELOG.md)。不读、不搜索、不提交 `video_eval_workbench/`、`dist/`、`node_modules/`。

## 文档索引

| 文档 | 用途 |
| --- | --- |
| [docs/PROJECT_STATE.md](docs/PROJECT_STATE.md) | 查当前功能、配置、限制、验收和待办。 |
| [docs/harbor_expansion.md](docs/harbor_expansion.md) | 查阶段 1–6 的扩展改动与早期性能基线。 |
| [docs/harbor_second_batch.md](docs/harbor_second_batch.md) | 查第二批外壳、天气、航行、音频与性能记录。 |
| [docs/NEW_SESSION_START.md](docs/NEW_SESSION_START.md) | 复制到新会话，约定阅读与确认流程。 |
