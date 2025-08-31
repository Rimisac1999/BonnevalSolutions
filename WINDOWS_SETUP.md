# Windows Setup Guide for BonnevalSolutions

This guide helps you run the BonnevalSolutions app on Windows with user-wide npm installation.

## Prerequisites

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Choose the LTS version for Windows
   - Install with default settings

## Quick Start

### Option 1: Full Setup (Recommended for first time)
1. Double-click `setup-npm.bat` to configure npm for user-wide installation
2. Double-click `run-dev.bat` to install dependencies and start the server

### Option 2: Just Start Server (if dependencies already installed)
1. Double-click `start-dev.bat` to start the development server

## What Each Script Does

### `setup-npm.bat`
- Configures npm to install packages user-wide (in `%APPDATA%\npm`)
- Creates necessary directories
- Verifies the configuration

### `run-dev.bat`
- Sets up PATH for user-wide npm
- Installs dependencies if needed
- Starts the development server
- Full error checking and guidance

### `start-dev.bat`
- Simple script to just start the server
- Assumes dependencies are already installed

## Accessing the App

Once the server is running, open your browser to:

- **Main Site**: http://localhost:3000
- **Tools Platform**: http://localhost:3000/tools-domain

## Troubleshooting

### "npm not found" Error
- Run `setup-npm.bat` first
- Ensure Node.js is installed
- Check that the PATH is set correctly

### "Failed to install dependencies" Error
- Check your internet connection
- Try running `run-dev.bat` again
- Delete `node_modules` folder and try again

### Port Already in Use
- The app will automatically try the next available port
- Check the console output for the actual port number

### Permission Issues
- Ensure you're running the scripts from the BonnevalSolutions directory
- Check that you have write permissions to the current directory

## Manual Commands

If you prefer to run commands manually:

```cmd
REM Configure npm for user-wide installation
npm config set prefix "%APPDATA%\npm"

REM Install dependencies
npm install

REM Start development server
npm run dev
```

## File Locations

- **npm packages**: `%APPDATA%\npm`
- **Project dependencies**: `.\node_modules`
- **Logs**: Check the console output when running the scripts

## Support

If you encounter issues:
1. Check the console output for error messages
2. Ensure you're on the `test-cursor-agent` branch (preview version)
3. Verify Node.js version (should be 18+ for Next.js 14)

