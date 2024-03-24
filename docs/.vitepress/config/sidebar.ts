import { DefaultTheme } from "vitepress/theme";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/posts/base/": [
    {
      text: "java",
      collapsed: false,
      items: [
        { text: "设计模式", link: "/posts/base/java/设计模式" },
        { text: "排序算法", link: "/posts/base/java/排序算法" },
      ],
    },
    {
      text: "vue",
      items: [
        { text: "vue1", link: "/posts/base/vue/vue1" },
        { text: "vue2", link: "/posts/base/vue/vue2" },
      ],
      collapsed: true,
    },
    {
      text: "mysql",
      items: [{ text: "50道经典SQL", link: "/posts/base/mysql/50" }],
      collapsed: true,
    },
  ],
  "/posts/pro/": [
    {
      text: "java3",
      items: [],
    },
  ],
};
