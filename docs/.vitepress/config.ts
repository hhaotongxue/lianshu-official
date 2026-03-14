import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '炼书 · Lianshu',
  description: 'AI驱动的笔记助手和编辑器 / AI-Powered Note Assistant & Editor',

  // 如果部署到 GitHub Pages 子路径，取消注释下面这行
  // base: '/lianshu-official/',

  // 设置根路径为中文
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      link: '/',
      title: '炼书',
      description: 'AI驱动的笔记助手和编辑器',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '炼书', link: '/lianshu/' },
          { text: '炼书编辑器', link: '/lianshu-editor/' },
          { text: '精选', link: '/featured/' }
        ],
        sidebar: {
          '/lianshu/': [
            {
              text: '炼书',
              items: [
                { text: '介绍', link: '/lianshu/' },
                { text: '快速开始', link: '/lianshu/getting-started' },
                { text: '功能特性', link: '/lianshu/features' },
                { text: '使用指南', link: '/lianshu/guide' },
                { text: 'API文档', link: '/lianshu/api' }
              ]
            }
          ],
          '/lianshu-editor/': [
            {
              text: '炼书编辑器',
              items: [
                { text: '介绍', link: '/lianshu-editor/' },
                { text: '快速开始', link: '/lianshu-editor/getting-started' },
                { text: '功能特性', link: '/lianshu-editor/features' },
                { text: '使用指南', link: '/lianshu-editor/guide' },
                { text: 'API文档', link: '/lianshu-editor/api' }
              ]
            }
          ],
          '/featured/': [
            {
              text: '精选文章',
              items: [
                { text: '所有文章', link: '/featured/' }
              ]
            }
          ]
        },
        footer: {
          message: '基于 MIT 许可发布',
          copyright: 'Copyright © 2026 炼书团队'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Lianshu',
      description: 'AI-Powered Note Assistant & Editor',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Lianshu', link: '/en/lianshu/' },
          { text: 'Lianshu Editor', link: '/en/lianshu-editor/' },
          { text: 'Featured', link: '/en/featured/' }
        ],
        sidebar: {
          '/en/lianshu/': [
            {
              text: 'Lianshu',
              items: [
                { text: 'Introduction', link: '/en/lianshu/' },
                { text: 'Quick Start', link: '/en/lianshu/getting-started' },
                { text: 'Features', link: '/en/lianshu/features' },
                { text: 'User Guide', link: '/en/lianshu/guide' },
                { text: 'API Docs', link: '/en/lianshu/api' }
              ]
            }
          ],
          '/en/lianshu-editor/': [
            {
              text: 'Lianshu Editor',
              items: [
                { text: 'Introduction', link: '/en/lianshu-editor/' },
                { text: 'Quick Start', link: '/en/lianshu-editor/getting-started' },
                { text: 'Features', link: '/en/lianshu-editor/features' },
                { text: 'User Guide', link: '/en/lianshu-editor/guide' },
                { text: 'API Docs', link: '/en/lianshu-editor/api' }
              ]
            }
          ],
          '/en/featured/': [
            {
              text: 'Featured',
              items: [
                { text: 'All Articles', link: '/en/featured/' }
              ]
            }
          ]
        },
        footer: {
          message: 'Released under the MIT License',
          copyright: 'Copyright © 2026 Lianshu Team'
        }
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/lianshu' }
    ],
    search: {
      provider: 'local'
    }
  }
})
