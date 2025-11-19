# 🚀 Oracle Cloud 部署详细步骤指南

**更新时间**：2024年12月  
**预计时间**：2-3小时  
**难度**：中等（我会一步一步指导您）

---

## 📋 第一步：创建VM实例（服务器）

### 步骤1.1：进入计算服务

1. **登录Oracle Cloud控制台**
   - 网址：https://cloud.oracle.com
   - 使用您的账号登录

2. **选择区域（Region）**
   - 在页面右上角，选择一个区域（建议选择离您最近的）
   - 例如：`ap-seoul-1`（首尔）或 `ap-tokyo-1`（东京）

3. **打开导航菜单**
   - 点击左上角的"☰"（三条横线）菜单图标

4. **进入计算服务**
   - 在菜单中找到 **"Compute"**（计算）
   - 点击 **"Instances"**（实例）

---

### 步骤1.2：创建VM实例

1. **点击"Create Instance"（创建实例）按钮**
   - 在Instances页面，点击右上角的蓝色按钮

2. **填写实例名称**
   - **Name（名称）**：输入 `zodiac-website-server`
   - 或者您喜欢的任何名称

3. **选择镜像（Image）**
   - 点击 **"Change image"**（更改镜像）
   - 选择 **"Canonical Ubuntu"**
   - 版本选择：**Ubuntu 22.04** 或 **Ubuntu 20.04**
   - 点击 **"Select image"**（选择镜像）

4. **选择Shape（配置）**
   - 点击 **"Change shape"**（更改配置）
   - 选择 **"VM.Standard.A1.Flex"**（这是免费套餐）
   - 配置：
     - **OCPU count（CPU核心数）**：`1`（或保持默认）
     - **Memory（内存）**：`6 GB`（免费套餐最大）
   - 点击 **"Select shape"**（选择配置）

5. **配置网络**
   - **Virtual cloud network（虚拟云网络）**：
     - 如果没有，点击 **"Create new VCN"**（创建新VCN）
     - 名称：`zodiac-vcn`
     - 其他保持默认
   - **Subnet（子网）**：选择默认子网
   - **Public IP address（公网IP）**：选择 **"Assign a public IPv4 address"**（分配公网IPv4地址）

6. **配置SSH密钥**
   - **Add SSH keys（添加SSH密钥）**：
     - 选择 **"Generate a key pair for me"**（为我生成密钥对）
     - 或者选择 **"Paste public keys"**（粘贴公钥）
   - **重要**：如果选择生成密钥对，**务必下载私钥文件**（.pem文件），这是您登录服务器的唯一方式！

7. **配置引导卷（Boot Volume）**
   - 保持默认设置即可
   - 大小：50GB（免费套餐足够）

8. **创建实例**
   - 检查所有配置
   - 点击页面底部的 **"Create"**（创建）按钮
   - 等待2-3分钟，实例创建完成

---

### 步骤1.3：配置安全组（开放端口）

1. **进入实例详情**
   - 点击刚创建的实例名称，进入详情页

2. **找到安全组**
   - 在左侧菜单找到 **"Security"**（安全）
   - 点击 **"Security Lists"**（安全列表）

3. **编辑入站规则**
   - 点击默认的安全列表
   - 点击 **"Add Ingress Rules"**（添加入站规则）

4. **添加规则（需要添加3条）**

   **规则1：HTTP（端口80）**
   - **Source Type（源类型）**：`CIDR`
   - **Source CIDR（源CIDR）**：`0.0.0.0/0`
   - **IP Protocol（IP协议）**：`TCP`
   - **Destination Port Range（目标端口范围）**：`80`
   - **Description（描述）**：`HTTP`
   - 点击 **"Add Ingress Rules"**（添加入站规则）

   **规则2：HTTPS（端口443）**
   - **Source Type（源类型）**：`CIDR`
   - **Source CIDR（源CIDR）**：`0.0.0.0/0`
   - **IP Protocol（IP协议）**：`TCP`
   - **Destination Port Range（目标端口范围）**：`443`
   - **Description（描述）**：`HTTPS`
   - 点击 **"Add Ingress Rules"**（添加入站规则）

   **规则3：后端API（端口3000）**
   - **Source Type（源类型）**：`CIDR`
   - **Source CIDR（源CIDR）**：`0.0.0.0/0`
   - **IP Protocol（IP协议）**：`TCP`
   - **Destination Port Range（目标端口范围）**：`3000`
   - **Description（描述）**：`Backend API`
   - 点击 **"Add Ingress Rules"**（添加入站规则）

---

### 步骤1.4：获取服务器信息

1. **记录公网IP**
   - 在实例详情页，找到 **"Public IP address"**（公网IP地址）
   - **复制并保存这个IP地址**，例如：`123.45.67.89`

2. **记录SSH连接信息**
   - 在实例详情页，找到 **"Access"**（访问）部分
   - 会显示SSH连接命令，例如：
     ```bash
     ssh opc@123.45.67.89 -i /path/to/your-key.pem
     ```

---

## 📋 第二步：创建数据库（Autonomous Database）

### 步骤2.1：进入数据库服务

1. **打开导航菜单**
   - 点击左上角的"☰"菜单图标

2. **进入数据库服务**
   - 在菜单中找到 **"Oracle Database"**（Oracle数据库）
   - 点击 **"Autonomous Database"**（自治数据库）

---

### 步骤2.2：创建数据库

1. **点击"Create Autonomous Database"（创建自治数据库）按钮**
   - 在Autonomous Database页面，点击 **"Create Autonomous Database"**

2. **选择配置类型**
   - **Compartment（区间）**：选择默认（root）
   - **Display name（显示名称）**：`zodiac-database`
   - **Database name（数据库名称）**：`ZODIACDB`（自动生成）

3. **选择工作负载类型**
   - 选择 **"Transaction Processing"**（事务处理）

4. **选择部署类型**
   - 选择 **"Shared Infrastructure"**（共享基础设施）

5. **配置数据库**
   - **Always Free（始终免费）**：**勾选** ✅
   - **Database version（数据库版本）**：保持默认
   - **OCPU count（CPU核心数）**：`1`（免费套餐固定）
   - **Storage（存储）**：`20 GB`（免费套餐固定）

6. **创建管理员用户**
   - **Username（用户名）**：`ADMIN`（默认，不能改）
   - **Password（密码）**：**设置一个强密码**（至少12位，包含大小写字母、数字、特殊字符）
   - **Confirm password（确认密码）**：再次输入密码
   - **重要**：**务必保存这个密码！**

7. **选择网络访问**
   - **Choose network access（选择网络访问）**：
     - 选择 **"Allow secure access from everywhere"**（允许从任何地方安全访问）
     - 或者选择 **"Allow secure access from specified IPs and VCNs"**（允许从指定IP和VCN访问）

8. **创建数据库**
   - 检查所有配置
   - 点击 **"Create Autonomous Database"**（创建自治数据库）
   - 等待5-10分钟，数据库创建完成

---

### 步骤2.2：获取数据库连接信息

1. **进入数据库详情**
   - 点击刚创建的数据库名称，进入详情页

2. **打开数据库连接信息**
   - 点击 **"DB Connection"**（数据库连接）按钮
   - 选择 **"TLS"** 或 **"Mutual TLS (mTLS)"**（推荐TLS）

3. **记录连接信息**
   - **Connection String（连接字符串）**：复制并保存
   - 格式类似：`zodiacdb_high.adb.ap-seoul-1.oraclecloud.com:1522`
   - **Username（用户名）**：`ADMIN`
   - **Password（密码）**：您刚才设置的密码

4. **下载Wallet文件（可选）**
   - 点击 **"Download Wallet"**（下载Wallet）
   - 输入密码（用于加密Wallet文件）
   - 下载并保存Wallet文件（.zip格式）

---

## 📋 第三步：测试连接

### 步骤3.1：测试SSH连接到服务器

1. **打开终端（Windows用户使用PowerShell或Git Bash）**

2. **连接到服务器**
   ```bash
   ssh opc@您的公网IP -i /path/to/your-key.pem
   ```
   例如：
   ```bash
   ssh opc@123.45.67.89 -i C:\Users\YourName\Downloads\your-key.pem
   ```

3. **如果连接成功**
   - 您会看到类似这样的提示：
     ```
     Welcome to Ubuntu 22.04 LTS
     ```

4. **测试服务器**
   ```bash
   # 查看系统信息
   uname -a
   
   # 查看IP地址
   ip addr show
   ```

---

## 📋 第四步：告诉我您获得的信息

完成以上步骤后，请告诉我以下信息：

### 服务器信息：
1. **公网IP地址**：`_________________`
2. **SSH密钥文件路径**：`_________________`
3. **服务器用户名**：通常是 `opc`

### 数据库信息：
1. **数据库连接字符串**：`_________________`
2. **数据库用户名**：`ADMIN`
3. **数据库密码**：`_________________`
4. **数据库端口**：通常是 `1522`

---

## ⚠️ 常见问题

### Q1: 找不到"Create Instance"按钮？
**A**: 确保您选择了正确的区域（Region），并且有足够的权限。

### Q2: 创建实例时提示资源不足？
**A**: Oracle Cloud的免费资源可能在某些区域已满，尝试选择其他区域。

### Q3: 忘记保存SSH密钥？
**A**: 如果选择了"Generate a key pair"，密钥只能下载一次。如果丢失，需要删除实例重新创建。

### Q4: 无法SSH连接到服务器？
**A**: 
- 检查安全组是否开放了SSH端口（22）
- 检查公网IP是否正确
- 检查SSH密钥文件权限（Linux/Mac需要：`chmod 400 your-key.pem`）

### Q5: 数据库创建失败？
**A**: 
- 确保选择了"Always Free"
- 检查是否有足够的配额
- 尝试选择其他区域

---

## 🎯 下一步

完成以上步骤后，告诉我您获得的信息，我会：
1. ✅ 帮您安装后端环境（Node.js/Python）
2. ✅ 编写后端API代码
3. ✅ 配置数据库连接
4. ✅ 部署后端服务
5. ✅ 改造前端代码
6. ✅ 部署前端网站

---

**准备好了吗？让我们开始第一步！** 🚀

