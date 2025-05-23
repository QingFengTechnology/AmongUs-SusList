import { defineConfig } from 'vitepress'
// 社区插件安装教程、相关语法: https://nolebase-integrations.ayaka.io/pages/zh-CN/guide/getting-
// 导入了多个插件,请自行查找相关内容。
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import { UnlazyImages } from '@nolebase/markdown-it-unlazy-img'
import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

export default defineConfig({
  vite: { 
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
        'vitepress', 
        '@nolebase/ui', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
        '@nolebase/ui',  
      ], 
    },
    plugins: [ 
      GitChangelog({ 
        repoURL: () => 'https://github.com/QingFengTechnology/AmongUs-SusList', 
      }), 
      GitChangelogMarkdownSection(), 
    ],
  }, 
  vue: {
    template: {
      transformAssetUrls: {
        NolebaseUnlazyImg: ['src'], 
      },
    },
  },
  title: "AmongUs SusList",
  titleTemplate: ":title - SusList",
  description: "一个集合了各大模组反作弊信息的网站,包含黑名单列表、各模组及作弊RPC信息等。",
  head: [['link', { rel: 'icon',type: 'image/png', href: '/AmongUs.png' }]],
  lang: 'zh-CN',
  base: '/',
  cleanUrls: true,
  lastUpdated: false,
  themeConfig: {
    logo: '/AmongUs.png',
    siteTitle: 'SusList',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
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
    outline: {
      level: [2, 6],
      label: '页面导航'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/QingFengTechnology/AmongUs-SusList' }
    ],
    footer: {
      message: "使用<a href='https://github.com/QingFengTechnology/AmongUs-SusList/blob/main/LICENSE' target='_blank'>AGPL-3.0</a>协议开源<br>本站由<a href='https://www.rainyun.com/QingFeng_?s=SusList' target='_blank'>雨云</a>提供在线服务",
      copyright: "© 2023-2025 By <a href='https://qingfengawa.top' target='_blank'>QingFeng</a>"
    },
    editLink: {
      pattern: 'https://github.com/QingFengTechnology/AmongUs-SusList/blob/main/docs/:path',
      text: '在GitHub上查看此页'
    },
    lastUpdated: {
      text: '上次更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
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
  },
  markdown: {
    image: {
      lazyLoading: true
    },
    config: (md) => {
      md.use(BiDirectionalLinks()) 
      md.use(UnlazyImages(), { 
        imgElementTag: 'NolebaseUnlazyImg', 
      }) 
    },
  }
})
