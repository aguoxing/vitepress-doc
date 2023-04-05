import DefaultTheme from "vitepress/theme";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/posts/base/": [
    {
      text: "java",
      items: [
        { text: "java1", link: "/posts/base/java/java第一篇" },
        { text: "java2", link: "/posts/base/java/java第二篇" },
      ],
      collapsible: true,
      collapsed: true,
    },
    {
      text: "vue",
      items: [
        { text: "vue1", link: "/posts/base/vue/vue1" },
        { text: "vue2", link: "/posts/base/vue/vue2" },
      ],
      collapsible: true,
      collapsed: true,
    },
    {
      text: "mysql",
      items: [{ text: "50道经典SQL", link: "/posts/base/mysql/50" }],
      collapsible: true,
      collapsed: true,
    },
  ],
  "/posts/pro/": [
    {
      text: "java3",
      items: [
        { text: "java", link: "/posts/base/java/index" },
        { text: "vue", link: "/posts/base/vue/index" },
      ],
    },
    {
      text: "java3",
      items: [
        { text: "java2", link: "/posts/base/java/index" },
        { text: "vue2", link: "/posts/base/vue/index" },
      ],
    },
  ],
};
