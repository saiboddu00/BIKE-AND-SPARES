@echo off
setlocal enabledelayedexpansion

echo ==================================================
echo      Pushing Code to GitHub Repository
echo ==================================================

:: Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in your PATH.
    echo Please ensure Git is installed and available in your command prompt.
    pause
    exit /b 1
)

:: Ensure we are in the right directory
cd /d "c:\Users\Admin\Desktop\Auto moblie"

:: Initialize Git if not present
if not exist .git (
    echo [INFO] Initializing new Git repository...
    git init
)

:: Add all files
echo [INFO] Adding files to staging...
git add .

:: Commit
echo [INFO] Committing changes...
git commit -m "Update project configuration for Render deployment"

:: Set branch
git branch -M main

:: Configure remote (force update)
echo [INFO] Configuring remote 'origin'...
git remote remove origin 2>nul
git remote add origin https://github.com/saiboddu00/BIKE-AND-SPARES.git

:: Push changes
echo [INFO] Pushing to remote 'origin' (main branch)...
git push -u origin main

if %errorlevel% neq 0 (
    echo [ERROR] Push failed. 
    echo Please check your internet connection or credentials.
    pause
    exit /b 1
)

echo ==================================================
echo [SUCCESS] Code pushed successfully!
echo ==================================================
pause
