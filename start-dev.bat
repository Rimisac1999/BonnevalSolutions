@echo off
echo ========================================
echo Starting BonnevalSolutions Dev Server
echo ========================================
echo.

REM Set PATH for user-wide npm installation
set "NPM_PATH=%APPDATA%\npm"
set "PATH=%NPM_PATH%;%PATH%"

REM Start the development server
npm run dev

pause
