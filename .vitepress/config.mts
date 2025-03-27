import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 大标题
  title: "xxyu's 博客",
  description: "xxyu小窝，xxyu笔记，xxyu's 博客",
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }]
  ],
  // srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    nav: [
      { text: "📝笔记", link: "/" },
      { text: "🌏website", link: "https://xxyu.online" }
    ],

    sidebar: [
      {
        text: "搭建本站",
        items: [
          { text: "示例", link: "/build" },
        ],
      },
      {
        text: "Notes",
        items: [
          { text: "我和前端", link: "/me" },
        ],
      },
      {
        text: "Nuxt网站",
        items: [
          { text: "PM2示例", link: "/pm2" },
        ],
      },
    ],

    socialLinks: [
      /**
       * github 链接
       * @see https://vitepress.dev/reference/default-theme-config#sociallinks
       */
      { icon: "github", link: "https://github.com/xy998" },
    ],

    footer: {
      copyright: "Copyright © 2024-present xy998",
    },
  },
});
