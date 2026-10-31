import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Ai4Energy",
      description: "Heading Towards a New Era of Smart Energy",
    },
    "/": {
      lang: "zh-CN",
      title: "Ai4Energy",
      description: "奔向智慧能源新时代",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
