import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AmongUs SusList",
  titleTemplate: ":title - SusList",
  description: "一个集合了各大模组反作弊信息的网站,包含黑名单列表、各模组及作弊RPC信息等。",
  head: [['link', { rel: 'icon',type: 'image/png', href: '/AmongUs.png' }]],
  lang: 'zh-cn',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/AmongUs.png',
    siteTitle: 'SusList',
    nav: [
      { text: '首页', link: '/' }
    ],

    /*sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],*/

    socialLinks: [
      { icon: 'github', link: 'https://github.com/QingFengTechnology/AmongUs-SusList' }
    ],
    footer: {
      copyright: '© 2023-2025 By QingFeng'
    },
    editLink: {
      pattern: 'https://github.com/QingFengTechnology/AmongUs-SusList/blob/main/docs/:path',
      text: '在GitHub上查看此页'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    docFooter: {
      prev: false,
      next: false
    },
    darkModeSwitchLabel: '主题颜色',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '语言',
    externalLinkIcon: true,
  }
})
