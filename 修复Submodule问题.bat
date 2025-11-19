@echo off
chcp 65001 >nul
echo ========================================
echo 修复 Git Submodule 问题
echo ========================================
echo.

cd /d "D:\星座网站"

echo [1/5] 检查并删除 .gitmodules 文件...
if exist ".gitmodules" (
    echo 发现 .gitmodules 文件，正在删除...
    del .gitmodules
    echo ✅ 已删除
) else (
    echo ✅ .gitmodules 文件不存在
)
echo.

echo [2/5] 移除 star 文件夹的 submodule 引用...
git rm --cached star -r 2>nul
if errorlevel 1 (
    echo ⚠️ star 可能不是 submodule，继续...
) else (
    echo ✅ 已移除 submodule 引用
)
echo.

echo [3/5] 移除 start 文件夹的 submodule 引用（如果存在）...
git rm --cached start -r 2>nul
if errorlevel 1 (
    echo ⚠️ start 可能不是 submodule，继续...
) else (
    echo ✅ 已移除 submodule 引用
)
echo.

echo [4/5] 添加所有文件作为普通文件...
git add .
echo.

echo [5/5] 提交更改...
git commit -m "Fix: Remove submodule references, add all files as regular files"
echo.

echo [6/6] 推送到 GitHub...
git push origin main
if errorlevel 1 (
    echo.
    echo ⚠️ 推送失败，请检查网络连接
    echo 可以稍后手动执行：git push origin main
) else (
    echo.
    echo ✅ 修复完成！
    echo 现在可以在 Cloudflare Pages 中重新部署了
)

echo.
echo ========================================
pause

