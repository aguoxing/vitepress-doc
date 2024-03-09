import { DefaultTheme } from "vitepress/theme";

export const nav: DefaultTheme.Config["nav"] = [
  { text: "基础", link: "/posts/base/index", activeMatch: "/posts/base/" },
  { text: "提升", link: "/posts/pro/index", activeMatch: "/posts/pro/" },
  { text: "关于", link: "/pages/about", activeMatch: "/pages/about" },
  // {
  //   text: "关于",
  //   items: [
  //     { text: "关于本站", link: "/pages/site" },
  //     { text: "关于我", link: "/pages/me" },
  //   ],
  // },
];
