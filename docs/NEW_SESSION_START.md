# 新会话启动语

把下面的整段复制到新会话，只替换「本次任务」和「相关文件」两处占位。

```text
请接手个人 3D 像素渔村作品集，仓库在 D:\AI\personal_website。

## 项目快照（当前状态，不要推翻）
- 技术栈：React 19 + 原生 three.js 0.187（没有 R3F、没有 drei）+ 纯 CSS + Vite 8。详细规则见 AGENTS.md。
- 站点已上线：https://escal-ad.github.io/secret-base/
- 分支：main 存源码；gh-pages 存构建产物，每次发布会整体替换，不要手改 gh-pages。
- 发布方式：改完代码执行 .\publish.cmd（内部调用 publish.ps1）。本机执行策略是 Restricted，
  不要直接跑 .ps1，也不要手敲多段 PowerShell 发布命令。
- 网络：git 已配置本机代理 127.0.0.1:17891（写在 .git/config）。代理软件 0dcloudCore 没开时
  推送会报 Failed to connect to 127.0.0.1 port 17891，这不是代码问题。
- 已知限制：package-lock.json 含指向父目录 pnpm 仓库的 link 条目，干净环境 npm ci 会失败，
  所以没有 CI，只能本机构建后发布。不要尝试修复锁文件，等所有者单独安排。
- package.json 里 @astryxdesign/* 与 @stylexjs/stylex 零引用，不要启用、不要引用。
- 站名 Escal's Secret Base 已定，唯一来源是 src/site-config.ts 的 config.siteTitle，不要改。

## 本次任务
【填写：一件事 + 可验证的验收标准】

## 相关文件
@【填 1 到 3 个具体文件】

## 纪律
1. 先读 AGENTS.md 与 docs/PROJECT_STATE.md，再读上面列的文件。
2. 先复述你的理解、列出准备修改的文件和最大风险，等我确认后再动代码。
3. 最小 diff：不改无关代码、不新增依赖、不重排格式、不重构存量。
4. 一次只做一件事。完成后单独提交，然后跑 .\publish.cmd 发布。
5. 不确定的地方停下来问我，不要编造坐标、数值或文案。
6. 不读、不搜索 video_eval_workbench/、dist/、node_modules/。
```

## 说明

- 这份启动语只需要改两处：**本次任务** 和 **相关文件**。项目快照部分基本不用动，除非仓库状态变了。
- 任务写得越具体越好：说清「改哪里、现在什么样、期望什么样、不要动什么、怎么算完成」。
- 一次会话只做一件事。做完开新会话，重新粘这份。