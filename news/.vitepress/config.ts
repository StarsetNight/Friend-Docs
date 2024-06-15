import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "璃虹港报社",
  description: "璃虹港团体的媒体部门",
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
      { text: '报社', link: '/archives/' },
      { text: '加入我们', link: 'https://starset.top/index.php/archives/62/' },
      
    ],

    sidebar:
      [
        {
          text: '报社文章',
          link: "/archives/",
          collapsed: true,
          items: [
            { text: "空空如也", link: "/" },
          ]
        },

      ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/StarsetNight/Riniji-News' }
    ],

    editLink: {
      pattern: 'https://github.com/StarsetNight/Riniji-News/tree/main/:path',
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