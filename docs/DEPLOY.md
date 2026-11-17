# GitHub Pages 部署说明

目标仓库：`Escal-ad/secret-base`。目标地址：[Escal's Secret Base](https://escal-ad.github.io/secret-base/)。

## 发布路线

| 路线 | 步骤 | 取舍 |
| --- | --- | --- |
| A. 手动（当前采用） | 在已有依赖的本机执行 `npm.cmd run build`，把 `dist/` 内容提交到 `gh-pages` 分支根目录，再由 Pages 发布。 | 只有构建机需要已有依赖；上传现成静态文件的机器和 GitHub 发布端都不用安装项目依赖。每次更新需手动发布。 |
| B. CI（后续再做） | 修复锁文件，在独立目录联网重装并验证 `npm ci`，再配置 GitHub Actions 构建与发布。 | 更新时可自动发布；当前锁文件含指向父目录 pnpm 布局的链接，不能依赖它在干净的 CI 环境安装。 |

**CI 路线本次未验证，锁文件待修复。** 本次只准备配置和说明，未创建仓库、推送或上线。

## 为什么要配置 base

项目页位于 `/secret-base/`，若入口请求 `/assets/...`，浏览器会去域名根目录找文件，可能因 404 无法启动而白屏。

`vite.config.ts` 在生产构建和生产预览中使用 `/secret-base/`，开发服务器仍用 `/`。Vite 给入口脚本、CSS 和预加载地址加前缀；动态 `import()` 从已带前缀的父模块目录解析相对引用。使用 `assetPath` 的本地素材跟随 `import.meta.env.BASE_URL`。以后填写简历、头像和评测录屏等直接使用配置值的媒体字段时，项目内文件用相对页面的路径，例如 `./resume.pdf` 或 `./assets/eval_station/demo.mp4`。

## 首次准备

1. 在 GitHub 创建空仓库 `Escal-ad/secret-base`，不要勾选 README、gitignore 或 license；确认仓库可启用 Pages。
2. 在本项目根目录执行：

   ```powershell
   git remote add origin https://github.com/Escal-ad/secret-base.git
   git push -u origin main
   ```

3. 按下节发布。首次推送 `gh-pages` 后，到仓库 **Settings → Pages → Build and deployment** 选择 **Deploy from a branch → gh-pages → /(root)** 并保存。[GitHub 官方发布源说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 每次手动更新

**推荐用一键脚本**，它把下面第 1–4 步全部做完：

```powershell
.\publish.cmd
```

脚本逻辑在 `publish.ps1`。本机执行策略为 `Restricted`，必须通过 `publish.cmd` 包装调用，不要直接运行 `.ps1`。脚本会：构建、校验 `dist/index.html` 的 `/secret-base/` 前缀、把 `dist/` 内容提交到 `gh-pages`、推送并清理临时工作树；内容无变化时直接退出，不产生空提交。

以下为等价的手动步骤，供排查问题或修改脚本时参考。

在项目根目录的同一个 PowerShell 会话执行以下命令。任何命令失败都先处理再继续；不要强制推送。

1. 查看工作区，确认要上线的改动已提交。构建并验证入口路径；有新的源码提交时，同时同步 `main`。

   ```powershell
   git status --short --branch
   npm.cmd run build
   if ($LASTEXITCODE -ne 0) { throw '构建失败，停止发布' }
   $distPath = (Resolve-Path -LiteralPath '.\dist').Path
   Select-String -LiteralPath (Join-Path $distPath 'index.html') -Pattern '/secret-base/assets/'
   git push origin main
   ```

   两条入口资源路径应都含 `/secret-base/assets/`。可另开终端运行 `npm.cmd run preview`，访问它输出的 `/secret-base/`，测试进入渔港和打开地图。

2. 为发布分支创建独立工作树，保持当前 `main` 工作树不变。命令会复用已有的本地或远程发布分支；首次无发布分支时创建空历史的 `gh-pages`。

   ```powershell
   $pagesDir = Join-Path ([IO.Path]::GetTempPath()) ('secret-base-pages-' + [Guid]::NewGuid().ToString('N'))
   git fetch origin
   if ($LASTEXITCODE -ne 0) { throw '无法获取远程分支' }
   git show-ref --verify --quiet refs/heads/gh-pages
   if ($LASTEXITCODE -eq 0) {
       git worktree add "$pagesDir" gh-pages
       if ($LASTEXITCODE -ne 0) { throw '无法打开发布工作树' }
       git show-ref --verify --quiet refs/remotes/origin/gh-pages
       if ($LASTEXITCODE -eq 0) {
           git -C "$pagesDir" merge --ff-only origin/gh-pages
           if ($LASTEXITCODE -ne 0) { throw '发布分支有分歧，停止发布' }
       }
   } else {
       git show-ref --verify --quiet refs/remotes/origin/gh-pages
       if ($LASTEXITCODE -eq 0) {
           git worktree add --track -b gh-pages "$pagesDir" origin/gh-pages
       } else {
           git worktree add --detach "$pagesDir" main
           if ($LASTEXITCODE -ne 0) { throw '无法创建发布工作树' }
           git -C "$pagesDir" switch --orphan gh-pages
       }
       if ($LASTEXITCODE -ne 0) { throw '无法创建发布分支' }
   }
   ```

3. 替换发布工作树中的旧产物并提交。复制的是 `dist/` **内部内容**，`index.html` 必须直接位于分支根目录。`.nojekyll` 让 Pages 直接处理静态产物，跳过 Jekyll。

   ```powershell
   if ((git -C "$pagesDir" branch --show-current) -ne 'gh-pages' -or (git -C "$pagesDir" status --porcelain)) {
       throw '发布工作树必须位于干净的 gh-pages 分支'
   }
   git -C "$pagesDir" rm -r --ignore-unmatch -- .
   if ($LASTEXITCODE -ne 0) { throw '无法移除旧产物，停止发布' }
   Copy-Item -Path (Join-Path $distPath '*') -Destination "$pagesDir" -Recurse -Force -ErrorAction Stop
   New-Item -Path (Join-Path $pagesDir '.nojekyll') -ItemType File -Force -ErrorAction Stop | Out-Null
   git -C "$pagesDir" add -A
   if ($LASTEXITCODE -ne 0) { throw '无法暂存发布产物' }
   git -C "$pagesDir" diff --cached --stat
   git -C "$pagesDir" diff --cached --quiet
   if ($LASTEXITCODE -eq 1) {
       git -C "$pagesDir" commit -m 'deploy: 更新 GitHub Pages 静态产物'
       if ($LASTEXITCODE -ne 0) { throw '无法提交发布产物' }
   } elseif ($LASTEXITCODE -ne 0) {
       throw '无法检查暂存产物'
   }
   git -C "$pagesDir" push -u origin gh-pages
   if ($LASTEXITCODE -ne 0) { throw '推送失败，保留发布工作树以便检查' }
   git worktree remove "$pagesDir"
   ```

4. 在 GitHub **Actions** 等待 Pages 部署完成，再打开目标地址。确认能进入渔港、打开地图，刷新后资源也没有 404。

## 常见故障

| 症状 | 先检查 |
| --- | --- |
| 白屏 | 查 `dist/index.html` 中脚本和 CSS 是否都有 `/secret-base/assets/...`；在浏览器网络面板确认请求未落到域名根目录。 |
| 站点 404 | 确认地址含 `/secret-base/`；检查 **Settings → Pages** 是否选了 `gh-pages` 和 `/(root)`，以及分支根目录是否有 `index.html`。若仍失败，查最近的 Pages 部署结果。 |
| 首页正常，进入渔港后失败 | 检查 3D 和地图分块的请求状态，确认 `assets/` 已完整提交。入口和分块必须来自同一次构建。 |
