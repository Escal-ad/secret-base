# Publishes dist/ to the gh-pages branch of Escal-ad/secret-base.
# ASCII-only on purpose: Windows PowerShell 5.1 reads non-BOM files as ANSI,
# so Chinese text in a .ps1 would be garbled.
# Run it through publish.cmd, or:
#   powershell -NoProfile -ExecutionPolicy Bypass -File .\publish.ps1

$ErrorActionPreference = 'Continue'
Set-Location -LiteralPath $PSScriptRoot

function Fail([string]$message) {
    Write-Host "[FAIL] $message" -ForegroundColor Red
    exit 1
}

Write-Host "== 0/6 bake terrain ==" -ForegroundColor Cyan
# 场景改动后必须重新烘焙，否则高度图与画面不一致
& npm.cmd run bake
if ($LASTEXITCODE -ne 0) { Fail 'terrain bake failed' }

Write-Host "== 1/6 build ==" -ForegroundColor Cyan
& npm.cmd run build
if ($LASTEXITCODE -ne 0) { Fail 'build failed' }

Write-Host "== 2/5 verify dist ==" -ForegroundColor Cyan
$dist = Join-Path $PSScriptRoot 'dist'
$indexHtml = Join-Path $dist 'index.html'
if (-not (Test-Path -LiteralPath $indexHtml)) { Fail 'dist/index.html is missing' }
$html = Get-Content -LiteralPath $indexHtml -Raw
if ($html -notmatch '/secret-base/assets/') {
    Fail 'dist/index.html has no /secret-base/ prefix; check vite.config.ts base'
}
Write-Host "  ok: /secret-base/assets/ found in index.html"

Write-Host "== 2b/5 push source ==" -ForegroundColor Cyan
# Push source alongside the build, otherwise main stays behind gh-pages.
git push origin main 2>&1 | ForEach-Object { Write-Host "  $_" }
if ($LASTEXITCODE -ne 0) { Fail 'push of main failed' }

Write-Host "== 3/5 prepare worktree ==" -ForegroundColor Cyan
git fetch origin 2>&1 | Out-Null
$pages = Join-Path $env:TEMP ('sb-pages-' + [guid]::NewGuid().ToString('N'))
$remotePages = git ls-remote --heads origin gh-pages 2>$null
if ($remotePages) {
    git worktree add -B gh-pages $pages origin/gh-pages 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) { Fail 'worktree add onto origin/gh-pages failed' }
} else {
    git worktree add --detach $pages main 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) { Fail 'worktree add failed' }
    git -C $pages switch --orphan gh-pages 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) { Fail 'switch --orphan gh-pages failed' }
}
Write-Host "  worktree: $pages"

Write-Host "== 4/5 copy build output ==" -ForegroundColor Cyan
Get-ChildItem -LiteralPath $pages -Force |
    Where-Object { $_.Name -ne '.git' } |
    Remove-Item -Recurse -Force
Copy-Item -Path (Join-Path $dist '*') -Destination $pages -Recurse -Force
New-Item -Path (Join-Path $pages '.nojekyll') -ItemType File -Force | Out-Null
git -C $pages add -A 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) { Fail 'git add failed' }

git -C $pages diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host "  no changes to publish; nothing to do"
    git worktree remove --force $pages 2>&1 | Out-Null
    git worktree prune
    exit 0
}
git -C $pages commit -m 'deploy: publish static build' 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) { Fail 'commit failed' }

Write-Host "== 5/5 push gh-pages ==" -ForegroundColor Cyan
git -C $pages push -u origin gh-pages 2>&1 | ForEach-Object { Write-Host "  $_" }
if ($LASTEXITCODE -ne 0) {
    Fail "push failed; worktree kept for inspection: $pages"
}
git worktree remove --force $pages 2>&1 | Out-Null
git worktree prune

Write-Host ""
Write-Host "done -> https://escal-ad.github.io/secret-base/" -ForegroundColor Green
Write-Host "GitHub Pages needs 1-3 minutes, then hard-refresh with Ctrl+Shift+R." -ForegroundColor Green
