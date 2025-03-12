# 构建阶段
FROM node:latest

WORKDIR /app

# 复制package.json和pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 安装pnpm
RUN npm install -g pnpm

# 安装依赖
RUN pnpm install

# 复制源代码
COPY . .

# 构建应用
RUN pnpm run build

# 设置环境变量
ENV NODE_ENV=production
ENV PORT=3002

# 暴露端口
EXPOSE 3002

# 启动应用
CMD ["pnpm", "start"]