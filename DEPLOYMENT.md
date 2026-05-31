# 部署指南

## 1. 前置准备

### 1.1 注册云服务
- **数据库**：注册 [MongoDB Atlas](https://www.mongodb.com/atlas) 或使用其他云数据库服务
- **后端部署**：选择 [Render](https://render.com/)、[Railway](https://railway.app/) 或其他 PaaS 平台
- **前端部署**：可以使用 [Vercel](https://vercel.com/)、[Netlify](https://www.netlify.com/) 等

### 1.2 安装依赖
```bash
npm install
```

## 2. 配置环境变量

### 2.1 创建 .env 文件
在项目根目录创建 `.env` 文件（参考 `.env.example`）：

```env
# 后端配置
PORT=3001
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/my-college-life
ADMIN_SECRET_KEY=your-strong-secret-key-here
ALLOWED_ORIGINS=https://your-frontend-domain.com,http://localhost:5173

# 前端配置
VITE_API_BASE_URL=https://your-backend-domain.com
```

## 3. 部署步骤

### 3.1 部署后端

#### 使用 Render 部署后端：
1. 将代码推送到 GitHub/GitLab
2. 在 Render 上创建新的 Web Service
3. 连接到你的仓库
4. 配置：
   - Build Command: `npm install`
   - Start Command: `npx ts-node server/server.ts` (或者使用你配置的启动命令)
5. 添加环境变量（与 .env 文件相同）
6. 部署

#### 其他平台部署方式类似。

### 3.2 部署前端

#### 使用 Vercel 部署前端：
1. 在 Vercel 上导入项目
2. 配置环境变量：`VITE_API_BASE_URL` 设置为你的后端域名
3. 部署

#### 或者先构建再部署：
```bash
npm run build
# 然后将 dist 目录部署到你的托管服务
```

## 4. 安全说明

### 4.1 管理员删除操作
要删除留言，需要在请求头中添加：
```
Authorization: Bearer <ADMIN_SECRET_KEY>
```

### 4.2 速率限制
每个 IP 地址在 15 分钟内最多可以发送 20 条留言。

### 4.3 输入验证
所有输入都会经过验证，防止恶意内容。

## 5. 本地开发

要在本地运行开发环境：

```bash
# 后端（需要在单独的终端）
cd server && npx ts-node server.ts

# 前端
npm run dev
```
