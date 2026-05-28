# 仙麗科技企业官网

基于 Next.js App Router、TypeScript、Tailwind CSS 和 lucide-react 实现的 B2B 纸业企业官网。

## 本地启动

```bash
npm install
npm run dev
```

默认访问：

```text
http://localhost:3000
```

## 构建

```bash
npm run build
```

## 主要目录

- `app/`：页面路由、SEO metadata、robots、sitemap
- `components/`：Header、Footer、表单、CTA、占位图等通用组件
- `data/`：导航、产品、证书、资料、站点配置等可维护内容

## 后期维护

- 公司联系方式：`data/site.ts`
- 产品资料卡片：`data/resources.ts`
- 环保认证内容：`data/certifications.ts`
- 表单提交 API：`components/ContactForm.tsx` 的 `submitLead`
