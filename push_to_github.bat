@echo off
setlocal enabledelayedexpansion

echo ==================================================
echo      Pushing Code to GitHub Repository
echo ==================================================

:: Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in your PATH.
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

:: Initialize Git if not present
if not exist .git (
    echo [INFO] Initializing new Git repository...
    git init
) else (
    echo [INFO] Git repository already initialized.
)

:: Add all files
echo [INFO] Adding files to staging...
git add .

:: Commit (allow empty if needed, or skip if no changes)
echo [INFO] Committing changes...
git commit -m "Update project files" || echo [INFO] No changes to commit or working tree clean.

:: Rename/ensure branch is main
echo [INFO] Setting branch to 'main'...
git branch -M main

:: Configure remote
echo [INFO] Configuring remote 'origin'...
git remote remove origin 2>nul
git remote add origin https://github.com/saiboddu00/BIKE-AND-SPARES.git
if %errorlevel% neq 0 (
    echo [ERROR] Failed to add remote origin.
    pause
    exit /b 1
)

:: Push changes
echo [INFO] Pushing to remote 'origin' (main branch)...
git push -u origin main
if %errorlevel% neq 0 (
    echo [ERROR] Push failed. 
    echo Possible reasons:
    echo  - Network issues
    echo  - Invalid credentials (if prompted)
    echo  - Repository does not exist or no access
    pause
    exit /b 1
)

echo ==================================================
echo [SUCCESS] Code pushed successfully!
echo ==================================================
pause
