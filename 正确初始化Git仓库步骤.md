# ✅ 正确初始化 Git 仓库（不创建新文件夹）

**目标**：让 `D:\星座网站` 文件夹直接成为 Git 仓库

---

## 🎯 关键点

**不要**使用 GitHub Desktop 的 "New Repository"（会创建新文件夹）  
**要**使用命令行先初始化，然后在 GitHub Desktop 中添加

---

## 📋 步骤

### 第一步：在现有文件夹中初始化 Git（命令行）

1. **打开 PowerShell**
   - 在 `D:\星座网站` 文件夹中，按住 `Shift` 键
   - 右键点击空白处
   - 选择 "在此处打开 PowerShell 窗口" 或 "在此处打开终端窗口"

2. **执行以下命令**（一行一行执行）：

```powershell
git init
```

```powershell
git add .
```

```powershell
git commit -m "Initial commit: 星座网站初始版本"
```

3. **完成后**，文件夹中会有一个隐藏的 `.git` 文件夹

---

### 第二步：在 GitHub Desktop 中添加本地仓库

1. **打开 GitHub Desktop**

2. **点击 "File" → "Add Local Repository"**
   - **不要**点击 "New Repository"！

3. **点击 "Choose..." 按钮**

4. **选择 `D:\星座网站` 文件夹**
   - 直接选择这个文件夹，不要选择它的子文件夹

5. **点击 "Add"**

6. **现在应该能看到所有文件了**

---

### 第三步：连接到 GitHub 远程仓库

1. **在 GitHub 网站创建仓库**（如果还没有）
   - 访问：https://github.com
   - 点击右上角 "+" → "New repository"
   - 仓库名：`zodiac-website`
   - **不要**勾选任何初始化选项
   - 点击 "Create repository"

2. **在 GitHub Desktop 中发布**
   - 点击右上角的 "Publish repository" 按钮
   - 填写信息：
     - Name: `zodiac-website`
     - Description: 可选
     - Keep this code private: 根据需要选择
   - 点击 "Publish repository"

---

## ⚠️ 常见错误

### ❌ 错误做法：
- 在 GitHub Desktop 中点击 "New Repository"
- 这样会在 `D:\星座网站` 下创建 `zodiac-website` 文件夹
- 结果：`D:\星座网站\zodiac-website\`（错误！）

### ✅ 正确做法：
- 先用命令行在 `D:\星座网站` 中初始化 Git
- 然后在 GitHub Desktop 中添加这个本地仓库
- 结果：`D:\星座网站\` 就是仓库根目录（正确！）

---

## 🔍 验证是否正确

1. 在 GitHub Desktop 中，应该能看到：
   - 左侧显示 `D:\星座网站`
   - 右侧显示所有文件（css、js、index.html 等）

2. 如果看到的是 `D:\星座网站\zodiac-website`，说明创建了子文件夹（错误）

---

## 💡 如果已经创建了错误的子文件夹

1. **删除子文件夹中的 `.git` 文件夹**（如果存在）
2. **将子文件夹中的所有文件移动到 `D:\星座网站`**
3. **删除空的子文件夹**
4. **重新执行第一步**（在 `D:\星座网站` 中初始化 Git）

---

**按照这个步骤，`D:\星座网站` 就是仓库根目录了！** ✅

