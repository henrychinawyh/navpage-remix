# 使用Node.js 20的alpine版本作为基础镜像
FROM node:20-alpine

# 安装pm2全局依赖
RUN npm install -g pm2
RUN npm install -g pnpm

# 设置工作目录
WORKDIR /app

# 先复制包管理文件以提高构建缓存效率
COPY package.json pnpm-lock.yaml* ./

# 安装项目依赖（使用pnpm）
RUN pnpm install

# 复制项目文件
COPY . .

# 构建项目
RUN npm run build

# 暴露3000端口
EXPOSE 3002

# 设置生产环境变量
ENV NODE_ENV=production

# 使用pm2启动服务（保持日志输出）
CMD ["pm2-runtime", "start", "server.js", "--", "--port", "3002"]