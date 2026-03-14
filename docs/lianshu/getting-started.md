# 快速开始

## 安装

### 使用Bun（推荐）

```bash
bun install -g lianshu
```

### 使用npm

```bash
npm install -g lianshu
```

## 初始化

安装完成后，运行以下命令初始化炼书：

```bash
lianshu init
```

这将创建必要的配置文件和目录结构。

## 启动

```bash
lianshu start
```

炼书将在本地启动，你可以通过浏览器访问 `http://localhost:3000`

## 配置AI模型

炼书支持多种AI模型，你可以在配置文件中设置：

```json
{
  "ai": {
    "provider": "local",
    "model": "llama3",
    "apiKey": ""
  }
}
```

## 下一步

- 了解[功能特性](/lianshu/features)
- 阅读[使用指南](/lianshu/guide)
- 查看[API文档](/lianshu/api)
