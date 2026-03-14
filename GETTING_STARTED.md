# 炼书官网 - 快速开始指南

## 项目概述

这是炼书产品的官方网站，使用VitePress构建，展示炼书AI助手和炼书编辑器两个产品。

## 已完成的工作

### 1. 基础架构
- ✅ VitePress + Vue 3 + TypeScript
- ✅ Bun作为包管理器
- ✅ 自定义主题和CSS变量
- ✅ GitHub Actions自动部署

### 2. 页面结构
- ✅ 首页（展示两个产品）
- ✅ 炼书产品页面
  - 介绍页
  - 快速开始
  - 功能特性
- ✅ 炼书编辑器页面
  - 介绍页
  - 快速开始
  - 功能特性
- ✅ 精选文章页面
  - 文章列表
  - 示例文章

### 3. 配置文件
- ✅ 导航菜单配置
- ✅ 侧边栏配置
- ✅ 搜索功能（本地搜索）
- ✅ 社交链接

## 本地开发

```bash
# 安装依赖
bun install

# 启动开发服务器
bun run dev

# 访问 http://localhost:5173
```

## 构建和部署

```bash
# 构建静态文件
bun run build

# 预览构建结果
bun run preview
```

推送到GitHub后，GitHub Actions会自动部署到GitHub Pages。

## 下一步工作

### 必须完成
1. **替换GitHub链接**
   - 更新 `docs/.vitepress/config.ts` 中的GitHub链接
   - 替换所有 `yourusername` 为实际的用户名

2. **添加Logo**
   - 在 `docs/public/` 目录添加 `logo.svg`
   - 添加 `favicon.ico`

3. **完善文档内容**
   - 补充使用指南（guide.md）
   - 补充API文档（api.md）
   - 根据实际产品功能更新内容

### 可选增强
1. **集成Markprompt**
   - 添加AI语义搜索
   - 配置API密钥

2. **添加更多精选文章**
   - 创建更多示例文章
   - 添加文章分类页面

3. **自定义组件**
   - 创建产品展示组件
   - 添加交互式Demo

4. **SEO优化**
   - 添加meta标签
   - 配置sitemap
   - 添加robots.txt

## 目录结构

```
lianshu-official/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # 站点配置
│   │   └── theme/
│   │       ├── index.ts       # 主题入口
│   │       └── custom.css     # 自定义样式
│   ├── public/                # 静态资源
│   ├── index.md               # 首页
│   ├── lianshu/               # 炼书文档
│   │   ├── index.md
│   │   ├── getting-started.md
│   │   └── features.md
│   ├── lianshu-editor/        # 编辑器文档
│   │   ├── index.md
│   │   ├── getting-started.md
│   │   └── features.md
│   └── featured/              # 精选文章
│       ├── index.md
│       └── ai-note-taking.md
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions配置
├── package.json
└── README.md
```

## 技术栈

- **VitePress 1.6.4**: 静态站点生成器
- **Vue 3.5.30**: UI框架
- **TypeScript 5.9.3**: 类型支持
- **Bun 1.3.8**: 包管理器
- **GitHub Actions**: CI/CD
- **GitHub Pages**: 部署平台

## 注意事项

1. 所有文档使用Markdown格式
2. 图片等静态资源放在 `docs/public/` 目录
3. 配置修改后需要重启开发服务器
4. 部署前确保所有链接都是正确的

## 联系方式

如有问题，请通过以下方式联系：
- GitHub Issues
- 邮箱：contact@lianshu.com
