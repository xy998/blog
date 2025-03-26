import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 大标题
  title: "Blog",
  description: "A VitePress Site",
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }]
  ],
  // srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
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
