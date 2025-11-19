# 🚀 Supabase 数据库部署步骤

**更新时间**：2024年12月  
**预计时间**：10-15分钟

---

## 📋 第一步：在 Supabase 创建数据库表

### 步骤1.1：登录 Supabase
1. 访问：https://supabase.com
2. 登录您的账号
3. 进入您的项目：`zodiac-website`

### 步骤1.2：打开 SQL Editor
1. 在左侧菜单找到 **"SQL Editor"**（SQL编辑器）
2. 点击进入

### 步骤1.3：执行 SQL 脚本
1. 打开项目中的文件：`supabase-database-schema.sql`
2. 复制所有 SQL 代码
3. 粘贴到 Supabase SQL Editor 中
4. 点击 **"Run"**（运行）按钮
5. 等待执行完成（通常几秒钟）

### 步骤1.4：验证表是否创建成功
1. 在左侧菜单找到 **"Table Editor"**（表编辑器）
2. 应该能看到所有创建的表：
   - users
   - memberships
   - orders
   - posts
   - comments
   - notifications
   - invite_records
   - invite_codes
   - points_records
   - user_points
   - activity_participations
   - daily_checkins
   - user_follows
   - private_messages
   - user_settings
   - user_feedbacks
   - fortune_history
   - fortune_favorites
   - post_likes

---

## 📋 第二步：配置 API 访问权限（重要）

### 步骤2.1：进入 API 设置
1. 在左侧菜单找到 **"Settings"**（设置）
2. 点击 **"API"**

### 步骤2.2：检查 API 密钥
确认以下信息：
- **Project URL**：`https://zrvzgcjpbijrvpzhtbqi.supabase.co`
- **anon public key**：已保存在代码中

### 步骤2.3：配置 Row Level Security（可选）
- 初期可以先不启用 RLS
- 如果启用，需要配置策略才能访问数据
- 建议先测试功能，再配置安全策略

---

## 📋 第三步：测试连接

### 步骤3.1：打开网站
1. 在浏览器中打开您的网站
2. 打开开发者工具（F12）
3. 查看 Console（控制台）

### 步骤3.2：检查连接状态
应该能看到：
- `✅ Supabase 客户端已初始化`
- `✅ Supabase API 封装层已加载`
- 如果表已创建：`✅ Supabase 连接成功`
- 如果表未创建：`⚠️ Supabase 连接检查失败（可能是表还未创建）`

---

## ⚠️ 重要提示

### 如果看到错误
1. **表不存在错误**：
   - 检查是否执行了 SQL 脚本
   - 在 Table Editor 中确认表已创建

2. **权限错误**：
   - 检查 API 密钥是否正确
   - 检查 RLS 是否启用（如果启用，需要配置策略）

3. **连接错误**：
   - 检查网络连接
   - 检查 Supabase 项目是否正常运行

---

## 🎯 下一步

完成数据库表创建后：
1. ✅ 告诉我表是否创建成功
2. ✅ 我会继续修改代码，将 localStorage 改为 Supabase API 调用
3. ✅ 然后指导您部署到 Cloudflare Pages

---

**准备好了吗？让我们开始第一步：执行 SQL 脚本创建数据库表！** 🚀

