# 🔧 修复 Git 远程仓库问题

**错误**：`fatal: unable to access 'https://github.com/baifan7574/-.git/'`  
**原因**：远程仓库名称不正确（显示为 `-`）

---

## 🔍 问题分析

1. **仓库名称错误**：显示为 `-`，应该是 `zodiac-website` 或其他有效名称
2. **可能原因**：
   - GitHub Desktop 自动生成的名称不正确
   - 远程仓库 URL 配置错误

---

## ✅ 解决方案

### 方法1：在 GitHub Desktop 中重新设置远程仓库

1. **打开 GitHub Desktop**

2. **点击 "Repository" → "Repository settings"**

3. **点击 "Remote" 标签**

4. **检查 "Primary remote repository"**
   - 如果显示 `https://github.com/baifan7574/-.git`，这是错误的
   - 需要修改为正确的仓库 URL

5. **修改远程仓库 URL**：
   - 点击 "Edit" 或直接修改
   - 改为：`https://github.com/baifan7574/zodiac-website.git`
   - 或者您实际创建的仓库名称

6. **保存设置**

7. **重新推送**：
   - 点击 "Push origin" 按钮

---

### 方法2：先在 GitHub 网站创建仓库

1. **访问 GitHub**：https://github.com

2. **创建新仓库**：
   - 点击右上角 "+" → "New repository"
   - **Repository name**: `zodiac-website`（或您喜欢的名称，**不要用中文**）
   - **Description**: 可选
   - **Public** 或 **Private**：选择您想要的
   - **不要**勾选任何初始化选项
   - 点击 "Create repository"

3. **复制仓库 URL**：
   - 创建后，GitHub 会显示仓库 URL
   - 格式：`https://github.com/baifan7574/zodiac-website.git`
   - 复制这个 URL

4. **在 GitHub Desktop 中设置**：
   - 打开 GitHub Desktop
   - 点击 "Repository" → "Repository settings" → "Remote"
   - 修改 Primary remote repository 为刚才复制的 URL
   - 保存

5. **推送代码**：
   - 点击 "Push origin" 按钮

---

### 方法3：使用命令行修复（如果方法1、2不行）

1. **打开 PowerShell**（在 `D:\星座网站` 文件夹中）

2. **检查当前远程仓库**：
```powershell
git remote -v
```

3. **删除错误的远程仓库**：
```powershell
git remote remove origin
```

4. **添加正确的远程仓库**：
```powershell
git remote add origin https://github.com/baifan7574/zodiac-website.git
```
（将 `zodiac-website` 替换为您实际创建的仓库名称）

5. **验证**：
```powershell
git remote -v
```
应该显示正确的 URL

6. **推送代码**：
```powershell
git push -u origin main
```
（如果分支是 `master`，改为 `git push -u origin master`）

---

## ⚠️ 关于中文文件夹名称

**Git 本身支持中文文件夹名称**，但：
- ✅ 本地文件夹可以用中文（`D:\星座网站`）
- ✅ Git 仓库可以正常工作
- ⚠️ **GitHub 仓库名称建议用英文**（避免 URL 编码问题）

---

## 🎯 推荐步骤

1. **在 GitHub 网站创建仓库**（名称用英文，如 `zodiac-website`）
2. **在 GitHub Desktop 中设置正确的远程 URL**
3. **推送代码**

---

**按照这些步骤，应该就能解决问题了！** ✅

