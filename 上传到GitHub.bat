@echo off
chcp 65001 >nul
echo ========================================
echo 上传文件到 GitHub
echo ========================================
echo.

cd /d "D:\星座网站"

echo [1/5] 检查 Git 仓库...
if not exist ".git" (
    echo Git 仓库不存在，正在初始化...
    git init
) else (
    echo Git 仓库已存在
)
echo.

echo [2/5] 添加所有文件...
git add .
echo.

echo [3/5] 提交更改...
git commit -m "Update: 上传所有文件到 GitHub"
echo.

echo [4/5] 检查远程仓库...
git remote -v
echo.

echo [5/5] 推送到 GitHub...
git branch -M main 2>nul
git push -u origin main
if errorlevel 1 (
    echo.
    echo 如果推送失败，请检查：
    echo 1. 远程仓库 URL 是否正确
    echo 2. 是否有权限推送
    echo 3. 网络连接是否正常
    echo.
    echo 如果分支是 master，请执行：
    echo git push -u origin master
) else (
    echo.
    echo ✅ 推送成功！
    echo 请访问：https://github.com/baifan7574/zodiac-website
)

echo.
echo ========================================
pause

