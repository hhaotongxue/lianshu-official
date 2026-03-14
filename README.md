# 炼书官网

炼书产品的官方网站，展示炼书AI助手和炼书编辑器。

## 技术栈

- **VitePress**: 静态站点生成器
- **Vue 3**: UI框架
- **TypeScript**: 编程语言
- **Bun**: 包管理器和运行时
- **GitHub Actions**: CI/CD
- **GitHub Pages**: 部署平台

## 本地开发

### 安装依赖

```bash
bun install
```

### 启动开发服务器

```bash
bun run dev
```

访问 http://localhost:5173

### 构建

```bash
bun run build
```

### 预览构建结果

```bash
bun run preview
```

## 项目结构

```
.
├── docs/                    # 文档源文件
│   ├── .vitepress/         # VitePress配置
│   │   ├── config.ts       # 站点配置
│   │   └── theme/          # 自定义主题
│   ├── index.md            # 首页
│   ├── lianshu/            # 炼书文档
│   ├── lianshu-editor/     # 炼书编辑器文档
│   └── featured/           # 精选文章
├── .github/
│   └── workflows/          # GitHub Actions
└── package.json
```

## 部署

推送到main分支后，GitHub Actions会自动构建并部署到GitHub Pages。

## 贡献

欢迎贡献！

## 许可

MIT
