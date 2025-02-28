import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "vue简介",
        icon: "pen-to-square",
        prefix: "vue简介/",
        children: [
          { text: "vue简介_1", icon: "pen-to-square", link: "1" },
          { text: "vue简介_2", icon: "pen-to-square", link: "2" },
          "3"
        ],
      },
      
      { text: "git_教程", icon: "pen-to-square", link: "git_use" },
      { text: "大前端", icon: "pen-to-square", link: "大前端" },
      { text: "网络编程", icon: "pen-to-square", link: "web_coding" },
      { text: "docker", icon: "pen-to-square", link: "docker" },
      {
        text: "java教程",
        icon: "pen-to-square",
        prefix: "java教程/",
        children: [
          { text: "java_Thread", icon: "pen-to-square", link: "java_Thread" },
          { text: "JavaWeb", icon: "pen-to-square", link: "JavaWeb" },
          { text: "注解(Annotation)和反射(Reflection)", icon: "pen-to-square", link: "注解(Annotation)和反射(Reflection)" },
          { text: "web_coding", icon: "pen-to-square", link: "web_coding" },
          { text: "Spring", icon: "pen-to-square", link: "Spring" },
          { text: "SpringMVC", icon: "pen-to-square", link: "SpringMVC" },
          { text: "SpringBoot", icon: "pen-to-square", link: "SpringBoot" },
          { text: "SpringCloud", icon: "pen-to-square", link: "SpringCloud" },
          { text: "SpringSecurity", icon: "pen-to-square", link: "SpringSecurity" },
          { text: "Mybatis", icon: "pen-to-square", link: "Mybatis" },
          { text: "MybatisPlus", icon: "pen-to-square", link: "MybatisPlus" },
          { text: "常见错误", icon: "pen-to-square", link: "常见错误" },
        ],
      },
      // "tomato",,
      // "strawberry",
    ],
  },
]);
