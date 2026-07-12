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
      { text: '处罚公示', link: 'https://ban.mcfriend.top/' },
      { text: '加入我们', link: '/join' }
    ],

    sidebar:
      [
        { text: '☀️服务器介绍', link: '/about' },
        { text: '😆立即加入', link: '/join' },
        { text: '📖社区公约', link: '/rule' },
        { text: '🖥️玩法手册', link: '/usage' },
        { text: '⭐️星级评定标准', link: '/rating' },
        { text: '💵赞助支持', link: '/donate' },
        {
          text: '公告',
          link: "",
          collapsed: true,
          items: [
            {
              text: '处罚公告',
              link: "",
              collapsed: true,
              items:[
                {},
              ]
            },
            {
              text: '1.21.10周目',
              link: "",
              collapsed: true,
              items:[
                { text: '【反馈】2025年12月20日：1.21.10周目预反馈Q&A', link: '/announcements/1_21_10/20251220_qa' },
                {
                  text: '处罚公告',
                  link: "",
                  collapsed: true,
                  items:[
                    { text: '2025.12.27 处罚公示', link: "/punishments/1_21_10/20251227" },
                  ]
                },
              ]
            },
            {
              text: '1.21周目',
              link: "",
              collapsed: true,
              items:[
                { text: '【更新】2024年7月15日：核心测试与酿酒', link: '/announcements/1_21/20240715_update' },
                { text: '【更新】2024年7月8日：1.21正式更新', link: '/announcements/1_21/20240708_update' },
                { text: '【预告】2024年7月7日：1.21不删档测试更新前瞻', link: '/announcements/1_21/20240707_pre' },
                {
                  text: '处罚公告',
                  link: "",
                  collapsed: true,
                  items:[
                    { text: '2025.12.14 处罚公示', link: "/punishments/1_21/20251214" },
                    { text: '2025.6.8 处罚公示', link: "/punishments/1_21/20250608" },
                    // { text: '2024.11.21 处罚公示', link: "/punishments/1_21/20241121" },
                    { text: '2024.7.31 处罚公示', link: "/punishments/1_21/20240731" },
                    { text: '2024.7.10 处罚公示', link: '/punishments/1_21/20240710' },
                    { text: '2024.7.9 处罚公示', link: '/punishments/1_21/20240709' },
                  ]
                },
              ]
            },
          ]
        },
        {
          text: '社团列表',
          link: "/clubs/index",
          collapsed: true,
          items: [
            {
              text: '历史社团',
              link: "/clubs/history/index",
              collapsed: true,
              items: [
                { text: '璃虹港', link: '/clubs/history/LHG' },
                { text: '暖仓', link: '/clubs/history/NC' },
                { text: '小樱花山', link: '/clubs/history/XYHS' },
                { text: '猫猫社', link: '/clubs/history/MMS' },
                { text: '友谊之舟联盟', link: '/clubs/history/YYZZLM' },
                { text: '秋茗茶庄', link: '/clubs/history/QMCZ' },
                { text: '大秦', link: '/clubs/history/DQ' },
                { text: '蘑菇岛', link: '/clubs/history/MGD' },
                { text: '星社', link: '/clubs/history/XS' },
                { text: '云顶天宫', link: '/clubs/history/YDTG' },
                { text: '时越爱', link: '/clubs/history/SYA' },
              ]
            },
            { text: '废墟图书馆', link: '/clubs/FXTSG' },
            { text: '苏维埃', link: '/clubs/SWA' },
            { text: 'Z镇', link: '/clubs/ZZ' },
          ]
        }
      ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/StarsetNight/Friend-Docs' }
    ],

    editLink: {
      pattern: 'https://github.com/StarsetNight/Friend-Docs/tree/main/docs/:path',
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
