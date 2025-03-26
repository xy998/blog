<div align="center">
  <img src="./public/vitepress-logo.svg" width="160" />
</div>

# VitePress 是什么？

VitePress 是一个静态站点生成器 (SSG)，专为构建快速、以内容为中心的站点而设计。简而言之，VitePress 获取用 Markdown 编写的内容，对其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。

## 使用场景


- **文档**

  [Vue.js 官方文档](https://cn.vuejs.org/) 就是基于 VitePress。

- 博客、档案和营销网站

  本站就是一个简单的博客页面，可以用来记录一些笔记，配合 vercel 可以直接部署。

## 快捷部署🚀

- 克隆 仓库 [[template](https://github.com/xy998/blog/tree/v0.0.1)](https://github.com/xy998/blog/tree/v0.0.1)
- 提交你的代码到 github
- 打开 [vercel](https://vercel.com/) 部署

## 快速开始

运行 vitepress 安装向导

```
npx vitepress init
```

安装包

```
npm add -D vitepress
```

新增 vercel.json 文件

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

提交你的代码到 github

## vercel

- 访问 Vercel 官网: https://vercel.com/
- 链接 github 仓库，选取提交的项目
- 构建命令： `npm run docs:build`
- 输出目录： `.vitepress/dist`
