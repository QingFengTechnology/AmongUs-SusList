import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'

import {  
  NolebaseHighlightTargetedHeading,  
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'

import { 
  NolebaseGitChangelogPlugin 
} from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

import { 
  NolebaseEnhancedReadabilitiesMenu, 
  // NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import './styles/main.css'

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      /* 启用这一条将允许小屏幕(通常是小于iPad Mini)显示阅读增强按钮。
       * 但我认为通常这类屏幕多为手机,也就是不使用鼠标,
       * 而阅读增强插件的功能在手机的效果并未达到预期,因此暂不考虑启用。
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), */
      'layout-top': () => [ 
        h(NolebaseHighlightTargetedHeading), 
      ], 
    })
  },
  enhanceApp({ app }) {
    app.use(NolebaseGitChangelogPlugin)  
  },
}

export default Theme