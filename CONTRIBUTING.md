## 贡献指南

### 本地运行

> 贡献之前,请先Fork此仓库。

```bash

git clone git@github.com:<你的GitHub用户名>/AmongUs-SusList.git
cd AmongUs-SusList
npm install
npm run docs:dev

```
执行后,npm会在在localhost:5173启动一个本地服务器,你可以在浏览器中访问此服务器。

### 本地构建

考虑到Pr将自动触发构建测试,此处不再赘述。\
参阅[VitePress: 部署 VitePress 站点](https://vitepress.dev/zh/guide/deploy)。

### 文档语法

参阅[VitePress: Markdown扩展](https://vitepress.dev/zh/guide/markdown)。

### 注意事项

由于此项目一般而言只有我一个人维护,因此我在更新文档时(除非功能包含破坏性更改)一般会直接推送到主分支,即使其被保护。\
因此,当你有新想法的时候,请**先打开一个Pull Request**,这一定程度避免了代码冲突的可能性。
> 即使他是一个新功能,但万一我们想到同一个方向了呢?