import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 大标题
  title: "xy的博客",
  description: "xy的博客,xy的笔记,xy的website",
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }]
  ],
  // srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    nav: [
      { text: "📝笔记", link: "/" },
      { text: "🌏website", link: "https://xy998.uk" }
    ],

    sidebar: [
      {
        text: "我的 🌏",
        items: [
          { text: "搭建本站", link: "/build" },
          { text: "我和前端", link: "/me" },
          { text: "前端模板推荐", link: "/template" },

        ],
      },
      {
        text: "Notes 📝",
        items: [
          { text: "npm发包", link: "/npm" },
          { text: "zb-trans包", link: "/zb-trans" },
          { text: "PM2用法", link: "/pm2" },
          { text: "项目更新提醒", link: "/plugin-build-time" },
          { text: "websocket", link: "/websocket" },
        ],
      },
      {
        text: "工具 🛠",
        items: [
          { text: "idea 激活", link: "/idea" },
          { text: "字体提取", link: "/font-zip" },
          { text: "window激活", link: "/window-activation" },
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
