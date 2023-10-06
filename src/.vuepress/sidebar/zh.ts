import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
  "/docs/": [
    "",
    {
      text: "不一样例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
  "/docs/01CSBase/": [
    "编程基础入门知识",
    {
      text: "Windows的命令提示符简介",
      icon: "book",
      prefix: "demo/",
      link: "1-Windows命令提示符介绍/",
      children: "structure",
    },
    {
      text: "PowerShell和Windows Terminal",
      icon: "book",
      prefix: "guide/",
      link: "2-PowerShell和WindowsTerminal/",
      children: "structure",
    },
    {
      text: "环境变量简介",
      icon: "book",
      prefix: "guide/",
      link: "3-环境变量及其设置/",
      children: "structure",
    },
    {
      text: "gcc编译器和CLion",
      icon: "book",
      prefix: "guide/",
      link: "4-Windows下安装gcc编译器和CLion/",
      children: "structure",
    },
    {
      text: "make和Makefile介绍",
      icon: "book",
      prefix: "guide/",
      link: "5-make和Makefile介绍/",
      children: "structure",
    },
    {
      text: "以SAM为例实操",
      icon: "book",
      prefix: "guide/",
      link: "7-以SAM为例整体实操一下/",
      children: "structure",
    },
    {
      text: "以CoolProp为例实操",
      icon: "book",
      prefix: "guide/",
      link: "8-以CoolProp为例的实操/",
      children: "structure",
    },
    {
      text: "动态链接库的生成与调用实操",
      icon: "book",
      prefix: "guide/",
      link: "9-dll生成与调用实操/",
      children: "structure",
    },    
  ],
});
