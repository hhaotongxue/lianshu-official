# 快速开始

## 安装

### 使用Bun（推荐）

```bash
bun install -g lianshu-editor
```

### 使用npm

```bash
npm install -g lianshu-editor
```

## 启动编辑器

```bash
lianshu-editor
```

编辑器将在浏览器中打开。

## 打开文件

你可以通过以下方式打开文件：

```bash
# 打开单个文件
lianshu-editor path/to/file.md

# 打开目录
lianshu-editor path/to/directory
```

## 基本使用

### 创建新文件

1. 点击左上角的"新建"按钮
2. 输入文件名
3. 开始编辑

### 编辑Markdown

编辑器支持标准Markdown语法：

```markdown
# 标题1
## 标题2

**粗体** *斜体* ~~删除线~~

- 列表项1
- 列表项2

1. 有序列表1
2. 有序列表2

[链接](https://example.com)

![图片](image.png)
```

### 快捷键

- `Ctrl/Cmd + S`: 保存
- `Ctrl/Cmd + N`: 新建文件
- `Ctrl/Cmd + O`: 打开文件
- `Ctrl/Cmd + P`: 命令面板
- `Ctrl/Cmd + /`: 切换预览

## 配置

编辑器的配置文件位于 `~/.lianshu-editor/config.json`：

```json
{
  "theme": "dark",
  "fontSize": 14,
  "autoSave": true,
  "preview": "side"
}
```

## 下一步

- 了解[功能特性](/lianshu-editor/features)
- 阅读[使用指南](/lianshu-editor/guide)
- 查看[API文档](/lianshu-editor/api)
