# 🚀 Cloudflare Pages + Supabase 部署指南

**更新时间**：2024年12月  
**预计时间**：30-60分钟  
**难度**：简单（我会一步一步指导您）

---

## 📋 第一步：创建 Supabase 项目（数据库）

### 步骤1.1：访问 Supabase 官网
1. 打开浏览器，访问：https://supabase.com
2. 点击右上角 **"Start your project"** 或 **"Sign In"**

### 步骤1.2：注册/登录 Supabase
1. 如果已有账号：直接登录
2. 如果没有账号：点击 **"Sign Up"**
   - 可以使用 GitHub 注册（推荐）
   - 或使用邮箱注册

### 步骤1.3：创建新项目
1. 登录后，点击 **"New Project"**（新建项目）
2. 填写项目信息：
   - **Name（项目名称）**：`zodiac-website`（或您喜欢的名称）
   - **Database Password（数据库密码）**：设置一个强密码
     - 至少12位
     - 包含大小写字母、数字、特殊字符
     - **重要**：务必保存这个密码！
   - **Region（区域）**：选择离您最近的区域
     - 推荐：`Southeast Asia (Singapore)`（新加坡）
     - 或：`Northeast Asia (Seoul)`（首尔）
   - **Pricing Plan（定价计划）**：选择 **"Free"**（免费）

3. 点击 **"Create new project"**（创建新项目）
4. 等待项目创建完成（通常1-2分钟）

### 步骤1.4：获取项目信息
项目创建完成后，记录以下信息：

1. **Project URL（项目URL）**
   - 格式：`https://xxxxx.supabase.co`
   - 在项目设置中可以找到
   - 或：项目首页顶部显示

2. **API Key（API密钥）**
   - **anon key**（公开密钥）：用于前端调用
   - **service_role key**（服务密钥）：用于后端调用（保密）
   - 在项目设置 → API 中可以找到
   - 或：项目首页 → Settings → API

3. **Database Password（数据库密码）**
   - 您刚才设置的密码

---

## 📋 第二步：准备代码（我会帮您修改）

### 步骤2.1：安装 Supabase 客户端库
在您的项目文件夹中，需要添加 Supabase 客户端库。

### 步骤2.2：修改前端代码
我会帮您：
1. 创建 Supabase 连接配置
2. 修改所有 `localStorage` 调用为 Supabase API 调用
3. 添加用户认证功能
4. 配置数据库表结构

---

## 📋 第三步：部署到 Cloudflare Pages

### 方法1：通过 GitHub 部署（推荐）

#### 步骤3.1：创建 GitHub 仓库
1. 在 GitHub 创建新仓库
2. 名称：`zodiac-website`（或您喜欢的名称）
3. 设置为 Public（公开）或 Private（私有）

#### 步骤3.2：上传代码到 GitHub
1. 将修改后的代码上传到 GitHub
2. 可以使用 Git 命令，或直接在 GitHub 网页上传

#### 步骤3.3：在 Cloudflare Pages 创建项目
1. 登录 Cloudflare：https://dash.cloudflare.com
2. 在左侧菜单找到 **"Workers & Pages"**
3. 点击 **"Pages"**
4. 点击 **"Create a project"**（创建项目）
5. 选择 **"Connect to Git"**（连接 Git）
6. 选择您的 GitHub 账号
7. 选择您的仓库（zodiac-website）
8. 点击 **"Begin setup"**（开始设置）

#### 步骤3.4：配置项目
1. **Project name（项目名称）**：保持默认或修改
2. **Production branch（生产分支）**：`main` 或 `master`
3. **Build command（构建命令）**：留空（静态网站不需要构建）
4. **Build output directory（构建输出目录）**：保持默认（`/`）

#### 步骤3.5：添加环境变量
在 **"Environment variables"**（环境变量）中添加：
- **变量名**：`VITE_SUPABASE_URL`
- **值**：您的 Supabase Project URL
- **变量名**：`VITE_SUPABASE_ANON_KEY`
- **值**：您的 Supabase anon key

#### 步骤3.6：部署
1. 点击 **"Save and Deploy"**（保存并部署）
2. 等待部署完成（通常1-2分钟）
3. 部署完成后，会获得一个URL，例如：`https://zodiac-website.pages.dev`

---

### 方法2：直接上传文件（简单）

#### 步骤3.1：准备文件
1. 将项目文件夹压缩为 zip 文件
2. 确保包含所有文件（index.html, css/, js/ 等）

#### 步骤3.2：上传到 Cloudflare Pages
1. 登录 Cloudflare：https://dash.cloudflare.com
2. 在左侧菜单找到 **"Workers & Pages"**
3. 点击 **"Pages"**
4. 点击 **"Create a project"**（创建项目）
5. 选择 **"Upload assets"**（上传资源）
6. 上传您的 zip 文件
7. 填写项目名称
8. 点击 **"Deploy site"**（部署网站）

#### 步骤3.3：配置环境变量（重要）
1. 部署完成后，进入项目设置
2. 找到 **"Environment variables"**（环境变量）
3. 添加：
   - **变量名**：`VITE_SUPABASE_URL`
   - **值**：您的 Supabase Project URL
   - **变量名**：`VITE_SUPABASE_ANON_KEY`
   - **值**：您的 Supabase anon key

---

## 📋 第四步：配置数据库表结构

### 步骤4.1：在 Supabase 创建表
我需要在 Supabase 数据库中创建以下表：

1. **users**（用户表）
2. **memberships**（会员表）
3. **orders**（订单表）
4. **posts**（帖子表）
5. **comments**（评论表）
6. **notifications**（通知表）
7. **invite_records**（邀请记录表）
8. **points_records**（积分记录表）
9. **fortune_history**（运势历史表）
10. **fortune_favorites**（运势收藏表）
11. 等等...

### 步骤4.2：我会提供 SQL 脚本
我会创建完整的 SQL 脚本，您只需要在 Supabase 的 SQL Editor 中运行即可。

---

## 📋 第五步：绑定自定义域名（可选）

### 步骤5.1：在 Cloudflare Pages 添加域名
1. 进入项目设置
2. 找到 **"Custom domains"**（自定义域名）
3. 点击 **"Set up a custom domain"**（设置自定义域名）
4. 输入您的域名
5. 按照提示配置 DNS

### 步骤5.2：配置 DNS（如果域名在 Cloudflare）
- Cloudflare 会自动配置 DNS
- 等待几分钟生效

### 步骤5.3：配置 DNS（如果域名不在 Cloudflare）
- 需要在域名注册商添加 CNAME 记录
- 指向 Cloudflare Pages 提供的地址

---

## 📋 第六步：测试和验证

### 步骤6.1：测试网站
1. 访问 Cloudflare Pages 提供的 URL
2. 测试所有功能：
   - 用户注册/登录
   - 会员功能
   - 社区发帖
   - 消息通知
   - 等等...

### 步骤6.2：检查数据
1. 在 Supabase 的 Table Editor 中查看数据
2. 确认数据正确保存

---

## ⚠️ 重要提示

### Cloudflare Pages 免费套餐
- ✅ 无限网站数量
- ✅ 无限带宽
- ✅ 自动 HTTPS
- ✅ 自定义域名
- ✅ 全球 CDN
- ✅ 完全免费

### Supabase 免费套餐限制
- ✅ 500MB 数据库
- ✅ 2GB 带宽/月
- ✅ 50,000 月活跃用户
- ✅ 500MB 文件存储
- ⚠️ 如果超过限制，可能需要付费

### 对于您的网站
- 初期完全够用
- 如果流量增长，再考虑升级

---

## 🎯 下一步行动

### 现在您可以：
1. ✅ 创建 Supabase 项目
2. ✅ 告诉我您获得的信息

### 然后我会：
1. ✅ 帮您修改前端代码
2. ✅ 创建数据库表结构
3. ✅ 指导您部署到 Cloudflare Pages
4. ✅ 测试所有功能

---

## 📝 需要记录的信息

完成 Supabase 项目创建后，请告诉我：

### Supabase：
- ✅ 项目名称
- ✅ Project URL（项目URL）
- ✅ anon key（公开密钥）
- ✅ Database Password（数据库密码）

### Cloudflare：
- ✅ 您已经有账户，可以直接使用

---

## 💡 Cloudflare Pages 的优势

### 相比 Vercel：
- ✅ **无限带宽**（Vercel 100GB/月）
- ✅ **国内访问更快**（Cloudflare 在国内有节点）
- ✅ **您已有账户**（不需要注册）
- ✅ **完全免费**

### 功能完全一样：
- ✅ 静态网站托管
- ✅ 自动 HTTPS
- ✅ 自定义域名
- ✅ GitHub 集成
- ✅ 环境变量配置

---

**准备好了吗？让我们开始第一步：创建 Supabase 项目！** 🚀

