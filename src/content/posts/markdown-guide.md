---
title: "Markdown 语法完全指南"
date: "2026-06-08"
updated: "2026-06-08"
summary: "本文展示了 Markdown 支持的各种格式，包括标题、段落、列表、代码块、表格等，帮助你快速掌握 Markdown 写作技巧。"
tags: ["Markdown", "写作", "教程", "语法"]
category: "技术笔记"
draft: false
---

# Markdown 语法完全指南

欢迎阅读这份 **Markdown 语法完全指南**！本文将展示 Markdown 支持的各种格式，帮助你快速掌握 Markdown 写作技巧。

## 一、基础文本格式

### 1.1 粗体和斜体

- **粗体文本**：使用 `**文本**` 或 `__文本__`
- *斜体文本*：使用 `*文本*` 或 `_文本_`
- ***粗斜体文本***：使用 `***文本***`
- ~~删除线文本~~：使用 `~~文本~~`

### 1.2 行内代码

行内代码使用反引号包裹：`npm install astro`

## 二、标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 三、列表

### 3.1 无序列表

- 项目一
- 项目二
  - 嵌套项目 A
  - 嵌套项目 B
- 项目三

### 3.2 有序列表

1. 第一步
2. 第二步
3. 第三步
   1. 子步骤 3.1
   2. 子步骤 3.2
4. 第四步

### 3.3 任务列表

- [x] 完成初稿
- [x] 校对内容
- [ ] 添加示例
- [ ] 发布文章

## 四、引用

> 这是一段引用文本。
> 
> 引用可以包含多个段落，每段开头都需要 `>` 符号。
>
> > 这是嵌套引用

## 五、代码块

### 5.1 普通代码块

```
function hello() {
  console.log("Hello, World!");
}
```

### 5.2 带语法高亮的代码块

```javascript
// JavaScript 示例
const greeting = "Hello";
const name = "World";
console.log(`${greeting}, ${name}!`);
```

```python
# Python 示例
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

```bash
# 命令行示例
npm install
npm run dev
```

## 六、链接

### 6.1 普通链接

[访问 GitHub](https://github.com)

### 6.2 带标题的链接

[访问 GitHub](https://github.com "GitHub - 代码托管平台")

### 6.3 引用式链接

这是一篇关于 [Markdown] 的文章。

[Markdown]: https://daringfireball.net/projects/markdown/

## 七、图片

![示例图片](https://picsum.photos/600/300 "示例图片")

## 八、表格

| 功能 | 语法 | 示例 |
|------|------|------|
| 粗体 | `**文本**` | **粗体** |
| 斜体 | `*文本*` | *斜体* |
| 链接 | `[文本](url)` | [链接](https://example.com) |
| 代码 | `` `代码` `` | `code` |

### 8.1 对齐方式

| 左对齐 | 居中对齐 | 右对齐 |
|:-------|:--------:|-------:|
| 内容一 | 内容二 | 内容三 |
| 短 | 中等长度 | 这是一段比较长的内容 |

## 九、分割线

使用三个或更多的 `*`、`-` 或 `_` 创建分割线：

---

***

___

## 十、脚注

这是一段带脚注的文本。[^1]

[^1]: 这是脚注的内容，可以放在文章的任意位置。

## 十一、表情符号

支持各种表情符号：😄 😊 🎉 🚀 💡 📝

## 十二、定义列表

术语
: 术语的定义说明

Markdown
: 一种轻量级标记语言，用于编写结构化文档

## 十三、自动链接

自动识别 URL 和邮箱：

- https://example.com
- user@example.com

## 结语

通过以上示例，你已经了解了 Markdown 的主要语法。现在开始用 Markdown 写作吧！✍️

---

*本文完*
