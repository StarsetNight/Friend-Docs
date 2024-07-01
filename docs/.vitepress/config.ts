import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Friend-友谊",
  description: "良心的原版联机平台",
  lang: 'zh-CN',
  // cleanUrls: true,
  // metaChunk: true,
  lastUpdated: true,
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {

    search: {
      provider: 'local',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      { text: '公约', link: '/rule' },
      { text: '加入我们', link: '/join' }
    ],

    sidebar:
      [
        { text: '☀️服务器介绍', link: '/about' },
        { text: '😆立即加入', link: '/join' },
        { text: '📋玩家公约', link: '/rule' },
        { text: '🤵玩家筛选', link: '/applicability' },
        { text: '💵赞助支持', link: '/support' },
        { text: '🖥️玩家功能用法', link: '/usage' },
        {
          text: '更新公告',
          link: "",
          collapsed: true,
          items: [
            {},
          ]
        },
        {
          text: '社团列表',
          link: "",
          collapsed: true,
          items: [
            { text: '璃虹港', link: '/clubs/LHG' },
          ]
        },

      ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/StarsetNight/Friend-Docs' }
    ],

    editLink: {
      pattern: 'https://github.com/StarsetNight/Friend-Docs/tree/main/news/:path',
      text: '编辑'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      level: [2, 3], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '页面导航' // 文字显示
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})