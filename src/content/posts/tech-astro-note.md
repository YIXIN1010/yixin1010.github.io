---
title: "Astro 静态站点开发笔记"
date: "2026-06-03"
category: "技术笔记"
summary: "记录使用 Astro 开发个人博客的技术细节和心得体会。"
tags:
  - 前端
  - Astro
  - 静态站点
draft: false
---

# Astro 静态站点开发笔记

## 为什么选择 Astro

Astro 是一个现代化的静态站点生成器，具有以下优势：

- **零 JavaScript 运行时**：默认不发送任何 JavaScript 到客户端
- **组件岛架构**：可以在页面中嵌入交互式组件
- **多框架支持**：支持 React、Vue、Svelte 等框架
- **优秀的 Markdown 支持**：内置 Markdown 和 MDX 渲染

## 项目结构

```
src/
├── content/
│   └── posts/          # 博客文章
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   └── posts/
└── styles/
    └── global.css
```

## 内容集合

Astro 的内容集合功能提供了类型安全：

```typescript
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    category: z.string().optional(),
    tags: z.array(z.string()),
  }),
});
```

## 总结

Astro 是一个非常适合博客和文档站点的框架，值得尝试。
