# Next App

1. 初始化 next 项目

   ```bash
   pnpm create next-app@14
   ```

2. 安装 `@cloudflare/next-on-pages`

   ```bash
   pnpm add -D @cloudflare/next-on-pages
   ```

3. 设置 `package.json` 脚本

   ```json
   {
     "scripts": {
       "pages:build": "pnpx @cloudflare/next-on-pages"
     }
   }
   ```

4. 边缘计算的页面设置 `runtime = 'edge'`

   ```ts
   export const runtime = 'edge'
   ```

5. cloudflare 构建配置：

   - 构建命令：`pnpm pages:build`
   - 构建输出目录：`.vercel/output/static`

6. cloudflare 运行时：

   - 兼容性标志：`nodejs_compat`
