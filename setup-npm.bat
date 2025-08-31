@echo off
echo ========================================
echo NPM User-Wide Setup for BonnevalSolutions
echo ========================================
echo.

REM Set PATH for user-wide npm installation
set "NPM_PATH=%APPDATA%\npm"
set "PATH=%NPM_PATH%;%PATH%"

echo Current npm configuration:
echo.

REM Check if npm is available
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm not found in PATH
    echo.
    echo Please install Node.js first from: https://nodejs.org/
    echo Choose the LTS version for Windows
    echo.
    pause
    exit /b 1
)

echo Found npm at: %NPM_PATH%
echo.

REM Configure npm for user-wide installation
echo Configuring npm for user-wide installation...
npm config set prefix "%APPDATA%\npm"
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to configure npm
    pause
    exit /b 1
)

echo NPM configured successfully!
echo.

REM Verify the configuration
echo Verifying configuration...
npm config get prefix
echo.

REM Create the npm directory if it doesn't exist
if not exist "%NPM_PATH%" (
    echo Creating npm directory...
    mkdir "%NPM_PATH%"
)

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo You can now run the development server with:
echo - run-dev.bat (full setup + server)
echo - start-dev.bat (just start server)
echo.
echo The app will be available at:
echo - Main Site: http://localhost:3000
echo - Tools: http://localhost:3000/tools-domain
echo.

pause
