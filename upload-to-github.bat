@echo off
echo ========================================
echo   Upload DigimetaShop ke GitHub
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git belum terinstall!
    echo Download Git di: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo [1/5] Checking repository...
if not exist .git (
    echo Initializing Git repository...
    git init
    git remote add origin https://github.com/missblossom007-dot/digimetashop.git
)

echo.
echo [2/5] Adding files...
git add .

echo.
echo [3/5] Committing changes...
git commit -m "Add countdown, rich editor, CSV upload, and Midtrans payment"

echo.
echo [4/5] Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo [5/5] Done!
echo ========================================
echo   Upload Berhasil!
echo   Vercel akan auto-deploy dalam 2-3 menit
echo ========================================
echo.
echo Cek status di: https://vercel.com/dashboard
echo.
pause
