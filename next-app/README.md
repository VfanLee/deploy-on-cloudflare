# Next App

1. 安装 `@cloudflare/next-on-pages`

   ```bash
   npm i -D @cloudflare/next-on-pages
   ```

2. 设置 `package.json` 脚本

   ```json
   {
     "scripts": {
       "pages:build": "npx @cloudflare/next-on-pages"
     }
   }
   ```

3. 边缘计算的页面设置 `runtime = 'edge'`

   ```ts
   export const runtime = 'edge'
   ```

4. cloudflare 构建设置：

   - 构建命令：`npx @cloudflare/next-on-pages@1`
   - 构建输出目录：`.vercel/output/static`

5. 设置 **兼容性标志（compatibility flags）**：`nodejs_compat`
