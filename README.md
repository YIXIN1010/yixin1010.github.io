# 一心博客

一个极简个人博客网站，使用 Astro 构建。

## 技术栈

- **框架**: Astro 6.x
- **语言**: TypeScript
- **样式**: 原生 CSS
- **内容**: Markdown / MDX

## 功能特性

- ✅ 极简设计，文字优先
- ✅ 响应式布局，支持移动端
- ✅ RSS/Atom Feed 支持
- ✅ 自动生成 sitemap.xml 和 robots.txt
- ✅ 文章归档和标签分类
- ✅ 文章上一篇/下一篇导航

## 页面结构

- `/` - 首页：最新文章列表
- `/archive` - 归档页：按年份分组展示文章
- `/posts/[slug]` - 文章详情页
- `/tags` - 标签列表页
- `/tags/[tag]` - 标签详情页
- `/about` - 关于页
- `/subscribe` - 订阅页
- `/atom.xml` - RSS Feed
- `/sitemap.xml` - 站点地图
- `/404` - 404 页面

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:4321 查看博客。

### 构建生产版本

```bash
npm run build
```

构建产物在 `dist` 目录。

### 预览生产版本

```bash
npm run preview
```

## 写文章

在 `src/content/posts/` 目录下创建新的 Markdown 文件，格式如下：

```markdown
---
title: "文章标题"
date: "2026-06-04"
updated: "2026-06-04"
slug: "post-slug"
summary: "文章摘要"
tags:
  - 标签1
  - 标签2
draft: false
---

文章内容...
```

### Front Matter 字段说明

- `title`: 文章标题
- `date`: 发布日期
- `updated`: 更新日期（可选）
- `slug`: 文章 URL 路径
- `summary`: 文章摘要
- `tags`: 标签数组
- `draft`: 是否为草稿

## 配置

### 修改站点信息

编辑 `src/layouts/BaseLayout.astro` 文件修改站点名称、描述等信息。

### 修改站点 URL

编辑 `astro.config.mjs` 文件修改 `site` 配置。

## 部署

可以部署到任何静态站点托管服务，如：

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 许可证

MIT
