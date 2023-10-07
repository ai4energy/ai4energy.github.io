import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "导论课程",
    icon: "chalkboard-user",
    link: "/courses/",
  },
  {
    text: "路线图",
    icon: "chart-line",
    link: "/roadmap/",
  },
  {
    text: "Ai4E文档",
    icon: "book",
    link: "/docs/",
  },
  {
    text: "虚拟实验室",
    icon: "flask",
    link: "/ai4elab/",
  },
  {
    text: "组件库",
    icon: "puzzle-piece",
    link: "/ai4ecomplib/",
  },
  {
    text: "碳中和开源汇编",
    icon: "share-nodes",
    link: "/awesome-carbon-neutrality/",
  },
  {
    text: "新闻",
    icon: "newspaper",
    link: "/news/",
  },
  {
    text: "赞助商专属",
    icon: "trophy",
    link: "/sponsors/",
  },
]);
