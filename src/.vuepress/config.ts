import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: '/Blog/',
  lang: "zh-CN",
  title: "博客",
  description: "vuepress-theme-hope 搭建的博客",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
