import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '炼书',
  description: 'AI驱动的笔记助手和编辑器',
  lang: 'zh-CN',

  themeConfig: {
    logo: '/logo.svg',

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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/lianshu' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2026 炼书团队'
    },

    search: {
      provider: 'local'
    }
  }
})
