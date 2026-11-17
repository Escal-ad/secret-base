@echo off
REM Wrapper so the script runs even though this machine's execution policy is Restricted.
REM Usage: publish.cmd
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0publish.ps1" %*
set EXITCODE=%ERRORLEVEL%
if not "%EXITCODE%"=="0" (
  echo.
  echo Publish failed with exit code %EXITCODE%.
)
pause
