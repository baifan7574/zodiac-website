@echo off
chcp 65001 >nul
echo ========================================
echo 继续上传所有文件到 GitHub
echo ========================================
echo.

cd /d "D:\星座网站"

echo [1/3] 添加所有文件（包括之前未添加的）...
git add .
echo.

echo [2/3] 提交所有更改...
git commit -m "Add all project files: css, js, html, and other assets"
echo.

echo [3/3] 推送到 GitHub...
git push origin main
echo.

echo ========================================
echo ✅ 完成！
echo 请访问：https://github.com/baifan7574/zodiac-website
echo 查看所有文件是否已上传
echo ========================================
pause

