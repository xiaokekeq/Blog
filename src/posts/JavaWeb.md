---
icon: pen-to-square
date: 2024-03-15
category:
  - JavaWeb
tag:
  - java
star: true
---
# JavaWeb

## 1、基本概念

### 1.1、前言

web开发：

- web：网页的意思
- 静态web
  - html、css
  - 提供给所有人看的数据始终不会发生变化
- 动态web
  - 淘宝，几乎所有的网站
  - 提供给所有人看的数据始终会发生变化，每个人在不同的时间，不同的地点看到的信息各不相同
  - 技术栈：Servlet/JSP，ASP，PHP	

在java中，动态web资源开发的技术统称为JavaWeb

### 1.2、web应用程序

web应用程序：可以提供浏览器访问的程序；

- a.html、b.html……多个web资源，这些web资源可以被外界访问，对外界提供服务
- 能访问到的任何一个页面或者资源，都存在计算机上
- URL
- 这些统一的web资源会被放在同一个文件夹下，web应用程序-->Tomcat：服务器
- 一个web应用由多部分组成(静态web，动态web)
  - html、css、js
  - jsp，sevlet
  - java程序
  - jar包
  - 配置文件（Properties）

web应用程序编写完毕后，若想提供给外界访问：需要一个服务器来统一管理

### 1.3、静态web

- *.htm，\*.html这些都是网页的后端，如果服务器上一直存在这些东西，就可以直接进行读取

![image-20240308104548207](JavaWeb.assets/image-20240308104548207.png)

- 静态web存在的缺点
  - Web页面无法动态更新，所有用户看到都是同一个页面
    - 轮播图，点击特效：伪动态
    - JavaScript[实际开发中，它用的最多]
    - VBScript
  - 它无法和数据库交互(数据无法持久化，用户无法交互)

    ### 1.4、动态web

页面会动态展示：'Web的页面展示的效果因人而异'

![image-20240308105500411](JavaWeb.assets/image-20240308105500411.png)

缺点：

- 假如服务器的动态web资源出现了错误，我们需要重新编写我们的**后台程序**，程序发布；
  - 停机维护
- Web页面可以动态更新，所有用户看到都不是同一个页面
- 可以与数据库交互（数据持久化：注册，商品信息，用户信息……）

![image-20240308105731684](JavaWeb.assets/image-20240308105731684.png)

## 2、web服务器

#### 2.1、技术

ASP：

- 微软
- 在HTML中嵌入了VB脚本，ASP+COM
- 在ASP开发中，基本一个页面都有几千行的业务代码，页面极其混乱
- 维护成本高
- C#
- IIS服务器

PHP：

- PHP开发速度块，功能很强大，跨平台，代码简单
- 无法承载大访问量的问题（局限性）

JSP（Servlet）：

B/S：浏览器和服务器

C/S：客户端和服务器

- sun公司主推的B/S框架
- 基于java语言的
- 可以承载三高（高并发，高可用，高性能）问题带来的影响
- 语法像ASP，ASP->JSP，加强市场强度



#### 2.2web服务器

服务器是一种被动操作，用来处理用户的一些请求和给用户一些响应信息；

Tomcat

IIS

下载Tomcat：

1. 安装or解压
2. 了解配置文件及目录结构
3. 这个东西的作用

## 3、Tomcat

#### 3.1、安装Tomcat

tomcat官网：https://tomcat.apache.org/

#### 3.2、Tomcat启动和配置

文件夹作用：

![image-20240310162854811](JavaWeb.assets/image-20240310162854811.png)

启动、关闭Tomcat

![image-20240310163908523](JavaWeb.assets/image-20240310163908523.png)

访问测试：http://localhost:8080/

可能遇到的问题：

1. java环境变量没有配置
2. 闪退问题：需要配置兼容性
3. 乱码问题：配置文件中设置

#### 3.3配置

![image-20240310164213340](JavaWeb.assets/image-20240310164213340.png)

可以配置启动的端口号

- tomcat的默认端口号：8080
- mysql：3306
- http：80
- https：443

```xml
<Connector port="8080" protocol="HTTP/1.1"
           connectionTimeout="20000"
           redirectPort="8443"
           maxParameterCount="1000"
           />
```

可以配置主机的名称

- 默认的主机名为：localhost->127.0.0.1
- 默认网站应用存放的位置为：webapps

```XML
<Host name="localhost"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">
```

高难度面试题：

网站时如何进行访问的：

1. 输入一个域名；回车

2. 检查本机的C:\Windows\System32\drivers\etc\hosts配置文件下有没有这个域名映射；

   1. 有：直接返回对应的ip地址，这个地址中，有需要访问的web程序，可以直接访问

      ```java
      127.0.0.1       xiaoke
      ```

   2. 没有：去DNS服务器找，找到的话就返回，找不到就返回找不到

![image-20240310165742905](JavaWeb.assets/image-20240310165742905.png)

  		3. 配置一下环境变量

#### 3.4、发布一个Web网站

不会就先模仿

把文件放到webapps文件夹下

网站应该有的结构

```java
--webapps:Tomcat服务器的web目录
    -ROOT
    -xiaoke：网站的目录名
    	-WEB-INF
    		-classes:java程序
            -lib：web应用所依赖的jar包
            -web.xml：网站配置文件
        -index.html默认的首页
        -static
            -css
                -style.css
            -js
            -img
    	-...
```

HTPP协议

Maven：构建工具

- Maven安装包

Servlet入门

- HelloWorld
- Servlet配置
- 原理

## 4、Http

### 4.1、什么是Http

**超文本传输协议**（英语：**H**yper**T**ext **T**ransfer **P**rotocol，缩写：**HTTP**）是一种用于分布式、协作式和[超媒体](https://zh.m.wikipedia.org/wiki/超媒體)信息系统的[应用层](https://zh.m.wikipedia.org/wiki/应用层)[协议](https://zh.m.wikipedia.org/wiki/网络传输协议)。HTTP是[万维网](https://zh.m.wikipedia.org/wiki/全球資訊網)的数据通信的基础。

- 文本：html，字符串
- 超文本：图片，音乐，视频，定位，地图...
- 80

Https:安全的

- 443

### 4.2、两个时代

- http1.0
  - HTTP/1.0：客服端可以与web服务器连接后，只能获得一个web资源，断开连接
- http2.0
  - HTTP/1.1：客服端可以与web服务器连接后，可以获得多个web资源

### 4.3、Http请求

- 客户端---发请求---服务器

百度：

```java
Request URL:https://www.baidu.com/	请求地址
Request Method:GET	get方法/post方法
Status Code:200 OK	状态码：200
Remote（远程） Address:182.61.200.7:443	远程地址
```

```java
Accept:text/html
Accept-Encoding:gzip, deflate, br, zstd
Accept-Language:zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7	语言
Cache-Control:max-age=0
Connection:keep-alive
```

#### 1、请求行

- 请求行中的请求方式：Get
- 请求方式：Get/Post
  - get：请求能够携带的参数比较少，大小有限制，会在浏览器的URL地址栏显示数据内容，不安全。但高效
  - Post：请求能够携带的参数没有限制，大小没有限制，不会在浏览器的URL地址栏显示数据内容，安全。但不高效

#### 2、消息头：

```java
Accept：告诉浏览器，它所支持的数据类型
Accept-Encoding：支持那种编码格式 GBK	UTF-8	GB2312	ISO8859-1
Accept-Language：告诉浏览器，它的语言环境
Cache-Control：缓存控制
Connection：告诉浏览器请求完成是断开还是保持连接
Host：主机
```



### 4.4、Http响应

- 服务器---发请求---客户端

百度：

```java
Cache-Contral:private：缓存控制
Connection:keep-alive：连接
Content-Encoding:gzip：编码
Content-Type:text/html; charset=utf-8：类型
```

#### 1、响应体

```java
Accept：告诉浏览器，它所支持的数据类型
Accept-Encoding：支持那种编码格式 GBK	UTF-8	GB2312	ISO8859-1
Accept-Language：告诉浏览器，它的语言环境
Cache-Control：缓存控制
Connection：告诉浏览器请求完成是断开还是保持连接
Host：主机
Reflesh：告诉客户端，多久刷新一次
Location：让网页重新定位
```

#### 2、响应状态码

200：请求响应成功

3xx：请求重定向

- 重定向：你重新到我的新位置

4xx：找不到资源	404

- 资源不存在

5xx：服务器代码错误	500	502网关错误

**常见面试题：**

当你的浏览器中地址栏输入地址并回车的一瞬间到页面能够展示回来，经历了什么？

## 5、Maven

1、在javaweb中，需要使用大量的jar包，手动导入

2、如何能够让一个东西自动帮忙导入和配置这个jar包

​	由此，Maven诞生了

### 5.1、Maven项目架构管理工具

目前用来就是方便导入jar包

核心思想：**约定大于配置**

- 有约束，不要去违反

Maven会规定好如何去编写java代码，必须要按照这个规范来

### 5.2、下载安装Maven

下载完成后，解压即可

建议：电脑上的所环境都放在同一个文件夹下

5.3、配置环境变量

配置如下：

- M2_HOME	maven目录下的bin目录
- MAVEN_HOME    maven的目录
- 在系统的path中配置    %MAVEN_HOME%\bin

![image-20240311134507049](JavaWeb.assets/image-20240311134507049.png)

测试maven是否安装成功，保证必须配置完毕

### 5.3阿里云镜像

- 镜像mirrors
  - 作用：加上我们的下载

```java
<mirror>
      <id>alimaven</id>
      <mirrorOf>central</mirrorOf>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
    </mirror>
```

### 5.5、本地仓库

在本地的仓库，远程仓库；

**建立一个仓库：**localRepositor

```xml
<localRepository>D:\Cesium\javaWeb\apache-maven-3.9.6\maven-repo</localRepository>
```

### 5.6、在IDEA中使用Maven

1. 启动idea
2. 创建一个Maven项目
3. 创建完毕后，检查一下设置

![image-20240311141119068](JavaWeb.assets/image-20240311141119068.png)

### 5.7、创建一个普通maven项目

![image-20240311141501031](JavaWeb.assets/image-20240311141501031.png)

只有在web应用才有

![image-20240311141554756](JavaWeb.assets/image-20240311141554756.png)

### 5.8、标记文件夹功能

![image-20240311141720427](JavaWeb.assets/image-20240311141720427.png)

![image-20240311142053132](JavaWeb.assets/image-20240311142053132.png)

### 5.9、在IDEA中配置Tomcat

![image-20240311142315210](JavaWeb.assets/image-20240311142315210.png)

![image-20240311142453541](JavaWeb.assets/image-20240311142453541.png)

解决警告问题

**为什么会有这个问题：访问一个网站，需要指定一个文件夹名字**（必须的）

![image-20240311142547099](JavaWeb.assets/image-20240311142547099.png)

![image-20240311142813477](JavaWeb.assets/image-20240311142813477.png)

war:就是一个网站，war exploded：热部署

![image-20240311142926623](JavaWeb.assets/image-20240311142926623.png)

![image-20240311143115094](JavaWeb.assets/image-20240311143115094.png)

### 5.10、pom文件

pom.xml是maven的核心项目

![image-20240311143600723](JavaWeb.assets/image-20240311143600723.png)

![image-20240311143524875](JavaWeb.assets/image-20240311143524875.png)

![image-20240311143736749](JavaWeb.assets/image-20240311143736749.png)

maven由于约定大于配置，之后可能会遇到自己写的配置文件，无法被导出或者生效的问题，解决方案：

```xml
<build>
    <!--解决资源导出问题-->
    <resources>
      <resource>
        <directory>src/main/resources</directory>
        <includes>
          <include>**/*.properties</include>
          <include>**/*.xml</include>
        </includes>
        <filtering>true</filtering>
      </resource>
      <resource>
        <directory>src/main/java</directory>
        <includes>
          <include>**/*.properties</include>
          <include>**/*.xml</include>
        </includes>
        <filtering>true</filtering>
      </resource>
    </resources>
</build>
```

![image-20240311143940417](JavaWeb.assets/image-20240311143940417.png)

![image-20240311144025565](JavaWeb.assets/image-20240311144025565.png)

### 5.11、解决遇到的问题

1. 镜像下载文件错误导致出现404，替换完阿里镜像之后就可以了

2. 每次都要设置maven环境，所有直接在idea中全局设置好就行

### 5.12Maven仓库的使用

直接在pom.xml中导入依赖（idea不能自动导入的话，就在网上找依赖然后复制到pom.xml中）

```xml
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>3.1.0</version>
</dependency>
```

### 第一个maven项目：

HttpServlet以前是在javax中现在是在Jakarta中

![image-20240312142530165](JavaWeb.assets/image-20240312142530165.png)

```java

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class HelloServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {
        //响应的类型
        response.setContentType("text/html");
        response.setCharacterEncoding("utf-8");
        //获取响应的输出流
        PrintWriter out = response.getWriter();
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Hello World!</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>你好</h1>");
        out.println("</body>");
        out.println("</html>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    }
}
```

## 6、Servlet

### 6.1、Servlet简介

- Servlet就是sun公司开发动态web的一门技术（每个人请求网页能看到不一样的页面）
- sun公司在这些API中提供了一个接口叫做：Servlet，如果要开发一个Servlet程序，只需要完成两个小步骤
  - 编写一个类，实现Servlet接口
  - 把开发好的java类部署到web服务器中

把实现了Servlet接口的java程序叫做，Servlet

### 6.2HelloServlet

Servlet接口sun公司有两个默认的实现类：HttpServlet，GenericServlet

1. 构建一个普通的Maven项目，删掉里面的src目录，以后学习就在这个项目里面建立module；这个空的工程就是Maven主工程

2. 关于Maven父子工程的理解：

   1. 主程序可以含有多个module，在pom.xml中会写入

   父项目

   ```xml
   <modules>
       <module>servlet-01</module>
   </modules>
   ```

   子项目

   ```xml
   <parent>
       <groupId>com.xiaoke</groupId>
       <artifactId>javaweb-02-servlet</artifactId>
       <version>1.0-SNAPSHOT</version>
   </parent>
   ```

   父项目中的java，子项目可以直接使用

   ```java
   son extends father
   ```

​			

3. Maven环境优化

   1. 修改web.xml为最新的
   2. 将Maven的结构搭建完成
   3. ![image-20240312160147152](JavaWeb.assets/image-20240312160147152.png)

4. 编写一个Servlet接口

   1. 编写一个普通类
   2. 实现Servlet接口    HttpServlet

      ```java
      package com.xiaoke;
      
      import jakarta.servlet.ServletException;
      import jakarta.servlet.http.HttpServlet;
      import jakarta.servlet.http.HttpServletRequest;
      import jakarta.servlet.http.HttpServletResponse;
      
      import java.io.IOException;
      import java.io.PrintWriter;
      
      public class servlet extends HttpServlet {
             //由于get或者post只是请求实现的不同的方式，可以相互调用，业务逻辑都一样
          @Override
          protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
              PrintWriter writer = resp.getWriter();//响应流
              writer.println("Hello,Servlet");
          }
          @Override
          protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
              doGet(req,resp);
          }
      }			
      ```

5. 编写Servlet的映射

​		为什么要映射：写的是java程序，但是要通过浏览器访问，而浏览器需要连接web服务器，所以要在web服务中注册写的serlvet，还需要给他一个浏览器能够访问的路径

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
                      https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd"
         version="6.0"
         metadata-complete="true">
<!--    注册servlet-->
<servlet>
    <servlet-name>hello</servlet-name>
    <servlet-class>com.xiaoke.servlet</servlet-class>
</servlet>
<!--    servlet的请求路径-->
    <servlet-mapping>
        <servlet-name>hello</servlet-name>
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>
</web-app>

```

6. 配置Tomcat

注意：配置项目发布的路径

![image-20240312164145379](JavaWeb.assets/image-20240312164145379.png)

7. 启动测试

一个war包就是一个网站

### 6.3、Servlet原理

servlet是由web服务器调用，web服务器在接收到浏览器请求之后会：

![image-20240312165350542](JavaWeb.assets/image-20240312165350542.png)

### 6.4Mapping问题

1. 一个Servlet可以指定一个映射路径

   ```xml
   <!--    注册servlet-->
   <servlet>
       <servlet-name>hello</servlet-name>
       <servlet-class>com.xiaoke.servlet</servlet-class>
   </servlet>
   <!--    servlet的请求路径-->
   <servlet-mapping>
       <servlet-name>hello</servlet-name>
       <url-pattern>/hello</url-pattern>
   </servlet-mapping>
   ```

2. 一个Servlet可以指定多个映射路径

   ```xml
   <!--    注册servlet-->
   <servlet>
       <servlet-name>hello</servlet-name>
       <servlet-class>com.xiaoke.servlet</servlet-class>
   </servlet>
   <!--    servlet的请求路径-->
   <servlet-mapping>
       <servlet-name>hello</servlet-name>
       <url-pattern>/hello</url-pattern>
   </servlet-mapping>
   <servlet-mapping>
       <servlet-name>hello</servlet-name>
       <url-pattern>/hello1</url-pattern>
   </servlet-mapping>
   <servlet-mapping>
       <servlet-name>hello</servlet-name>
       <url-pattern>/hello2</url-pattern>
   </servlet-mapping>
   ```

3. 一个Servlet可以指定通用映射路径

   ```xml
   <servlet-mapping>
           <servlet-name>hello</servlet-name>
           <url-pattern>/hello/*</url-pattern>
       </servlet-mapping>
   ```

4. ​    默认请求路径

   ```xml
   <servlet-mapping>
       <servlet-name>hello</servlet-name>
       <url-pattern>/*</url-pattern>
   </servlet-mapping>
   ```

5. 一个Servlet可以指定一些后缀或者前缀

   ```xml
   <!--    可以自定义后缀实现请求映射
       注意：*前面不能加映射的路径(/)
       -->
   <servlet-mapping>
       <servlet-name>hello</servlet-name>
       <url-pattern>*.xiaoke</url-pattern>
   </servlet-mapping>
   ```

6. 优先级问题

   1. 制定了固有的映射路径优先级最高，如果找不到就会走默认的处理请求

   ```xml
   <!--404-->
   <servlet>
       <servlet-name>Error</servlet-name>
       <servlet-class>com.xiaoke.ErrorServlet</servlet-class>
   </servlet>
   <servlet-mapping>
       <servlet-name>Error</servlet-name>
       <url-pattern>/*</url-pattern>
   </servlet-mapping>
   ```

### 6.5、ServletContext

![image-20240312211338324](JavaWeb.assets/image-20240312211338324.png)

idea乱码：IDEA的bin目录下的idea64.exe.vmoptions。在里面加上

-Dfile.encoding=UTF-8

web容器在启动的时候，它会为每个web程序都创建一个对应的ServletContext对象，它代表了当前的web应用（web应用由ServletContext来控制）；

#### **1、共享数据**（以后是session）

- 一个Servlet中保存的数据，可以在另一个Servlet中拿到

  ```java
  package com.xiaoke;
  
  import jakarta.servlet.ServletContext;
  import jakarta.servlet.ServletException;
  import jakarta.servlet.http.HttpServlet;
  import jakarta.servlet.http.HttpServletRequest;
  import jakarta.servlet.http.HttpServletResponse;
  
  import java.io.IOException;
  
  public class HelloServlet extends HttpServlet {
      @Override
      protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
          System.out.println("Hello");
  
          //this.getInitParameter();  初始化参数
          //this.getServletConfig();  Servlet配置
          //this.getServletInfo();    Servlet信息
          ServletContext servletContext=this.getServletContext();   //Servlet上下文
          String username="小可";//数据
          servletContext.setAttribute("username",username);//将一个数据保存在了ServletContext中，名字为username，值为username
  
      }
      @Override
      protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
          doGet(req, resp);
      }
  }
  ```

  ```java
  public class GetUserName extends HttpServlet {
      @Override
      protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
          ServletContext servletContext = this.getServletContext();
          String username=(String) servletContext.getAttribute("username");
          //处理编码以及网页响应
          resp.setContentType("text/html");
          resp.setCharacterEncoding("utf-8");
          resp.getWriter().println("名字："+username);
      }
      @Override
      protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
          doGet(req, resp);
      }
  }
  ```

  ```xml
  <servlet>
      <servlet-name>hello</servlet-name>
      <servlet-class>com.xiaoke.HelloServlet</servlet-class>
  </servlet>
  <servlet-mapping>
      <servlet-name>hello</servlet-name>
      <url-pattern>/hello</url-pattern>
  </servlet-mapping>
  <servlet>
      <servlet-name>get</servlet-name>
      <servlet-class>com.xiaoke.GetUserName</servlet-class>
  </servlet>
  <servlet-mapping>
      <servlet-name>get</servlet-name>
      <url-pattern>/get</url-pattern>
  </servlet-mapping>
  ```

  测试访问结果

![image-20240312211217373](JavaWeb.assets/image-20240312211217373.png)

![image-20240312211231661](JavaWeb.assets/image-20240312211231661.png)

#### 2、获取初始化参数（以后几乎不用）

```xml
<context-param>
    <param-name>url</param-name>
    <param-value>jdbc:mysql://localhost:3306/mybatis</param-value>
</context-param>
<servlet>
    <servlet-name>gp</servlet-name>
    <servlet-class>com.xiaoke.ServletDemo03</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>gp</servlet-name>
    <url-pattern>/gp</url-pattern>
</servlet-mapping>
```

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    ServletContext context = this.getServletContext();
    String url=context.getInitParameter("url");
    resp.getWriter().println(url);
}
```

#### 3、请求转发（以后是request）

```java
@Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ServletContext context = this.getServletContext();
        //RequestDispatcher requestDispatcher = context.getRequestDispatcher("/gp");//转发的请求路径
        //requestDispatcher.forward(req,resp);//调用forward实现请求转发
        context.getRequestDispatcher("/gp").forward(req,resp);
    }
```

![image-20240312213500640](JavaWeb.assets/image-20240312213500640.png)

#### 4、读取资源文件（以后是使用类加载器，反射）

Properties

- 在java目录下新建properties
- 在resources目录下新建properties

发现：都被打包到了同一个路径下：classes，俗称类路径：classpath

思路：需要一个文件流

```properties
username=xiaoke
password=1234567
```

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    InputStream is = this.getServletContext().getResourceAsStream("/WEB-INF/classes/com/xiaoke/aa.properties");
    Properties prop = new Properties();
    prop.load(is);
    String user=prop.getProperty("username");
    String psd=prop.getProperty("password");
    resp.getWriter().println(user+":"+psd);
}
@Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    doGet(req, resp);
}
```

测试访问呢即可;

### 6.6、HttpServletRequest

web服务器接收到客户端的http请求，针对这个请求，分别创建一个代表请求的HttpServletRequest，创建代表响应的一个HttpServletResponse

- 如果要获取客服端请求过来的参数：找HttpServletRequest
- 如果要给客户端响应一些信息：找HttpServletResponse

#### 1、简单分类

负责向浏览器发送数据的方法

```java
ServletOutputStream getOutputStream() throws IOException;//平常流用这个

PrintWriter getWriter() throws IOException;//中文用这个

```

负责向浏览器发送响应头的方法

```java
void setCharacterEncoding(String var1);
void setContentLength(int var1);
void setContentLengthLong(long var1);
void setContentType(String var1);
void setDateHeader(String var1, long var2);
void addDateHeader(String var1, long var2);
void setHeader(String var1, String var2);
void addHeader(String var1, String var2);
void setIntHeader(String var1, int var2)
void addIntHeader(String var1, int var2);
```

#### 2、常见应用

1. 向浏览器输出信息

2. 下载文件

   1. 要获取下载文件的路径
   2. 下载的文件名是啥
   3. 设置想办法让浏览器能够支持下载需要的东西
   4. 获取下载文件的输入流
   5. 创建缓冲区
   6. 获取OutputStream对象
   7. 将FileOutputStream流写入到buffer缓冲区
   8. 使用OutputStream将缓冲区中的数据输出到客户端

   ```java
   @Override
   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       //1. 要获取下载文件的路径
       String realPath="D:\\Cesium\\javaWeb\\javaweb-02-servlet\\response\\src\\main\\resources\\小可.png";
       System.out.println("下载文件的路径："+realPath);
       //2. 下载的文件名是啥
       String fileName=realPath.substring(realPath.lastIndexOf("\\")+1);
       //3. 设置想办法让浏览器能够支持下载需要的东西
       resp.setHeader("Content-Disposition", "attachment;fileName="+ URLEncoder.encode(fileName,"utf-8"));
       //4. 获取下载文件的输入流
       FileInputStream is = new FileInputStream(realPath);
       //5. 创建缓冲区
       byte[] buffer = new byte[1024];
       int len=0;
       //6. 获取OutputStream对象
       ServletOutputStream out = resp.getOutputStream();
       //7. 将FileOutputStream流写入到buffer缓冲区, 使用OutputStream将缓冲区中的数据输出到客户端
       while((len=is.read(buffer))!=0){
           out.write(buffer,0,len);
       }
       //关闭流
       out.close();
       is.close();
   }
   ```

#### 3、验证码功能

验证码怎么来的？

- 前端实现
- 后端实现，需要用到java的图片类，生产一个图片

#### 4、实现重定向

![image-20240313113229940](JavaWeb.assets/image-20240313113229940.png)

一个web资源收到客户端请求后，它会通知客户端去访问另一个web资源，这个过程叫重定向（页面登录）

常见场景：

- 用户登录界面

```java
void sendRedirect(String location) throws IOException {
    sendRedirect(location, SC_FOUND, true);
}
```

测试

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    /*
        resp.setHeader("Location","/r/image");
        resp.setStatus(HttpServletResponse.SC_MOVED_TEMPORARILY);
        */
    resp.sendRedirect("/image");//重定向
}
```

![image-20240313124000406](JavaWeb.assets/image-20240313124000406.png)

面试题：重定向和转发的区别

相同点：页面都会实现跳转

不同点：

- 请求转发的时候，url不会变化
- 重定向时候，url地址栏会发生变化



### 6.7、HttpServletResponse 

HttpServletResponse 代表客户端的请求，用户通过Http协议访问服务器，HTTP请求中的所有信息会被封装到HttpServletResponse 中，通过这个HttpServletResponse 的方法，获得客户端的所有信息

![image-20240313131151600](JavaWeb.assets/image-20240313131151600.png)

![image-20240313131213350](JavaWeb.assets/image-20240313131213350.png)

1、获取前端传递的参数，请求转发

![image-20240313131306031](JavaWeb.assets/image-20240313131306031.png)

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    req.setCharacterEncoding("utf-8");
    resp.setCharacterEncoding("utf-8");
    String username=req.getParameter("username");
    String password=req.getParameter("password");
    String[] hobbies = req.getParameterValues("hobbies");
    System.out.println("=================================");
    System.out.println(username);
    System.out.println(password);
    System.out.println(Arrays.toString(hobbies));
    System.out.println("=================================");

    //通过请求转发
    //这个的/代表当前的web应用
    req.getRequestDispatcher("/Success.jsp").forward(req,resp);
}
```

面试题：重定向和转发的区别

相同点：页面都会实现跳转

不同点：

- 请求转发的时候，url不会变化	307
- 重定向时候，url地址栏会发生变化    302

## 7、Cookie、Session

### 7.1、会话

会话：用户打开一个浏览器，点击了很多超链接，访问多个web资源，关闭浏览器，这个过程可以称为会话

  **有状态会话：**

 **一个网站，怎么证明你来过**

客户端			服务端

1. 服务端给客户端一个信件，客户端下次访问服务端带上信件就可以了；cookie
2. 服务器登记来过，下次来的时候服务器匹配；session

### 7.2、保存会话的两种技术

**cookie：**

- 客户端技术	（响应，请求）

**session：**

- 服务器技术，利用这个技术，可以保存用户的会话信息？可以把信息或者数据放在Session中 



1. 存储位置不同: cookie是保存在客户端, session是保存服务器端 2. 存储数据量大小不同: cookie存储是有限的, 不超过4KB, seesion是无限制的;

常见场景：网站登录之后，下次不用再登录，第二次直接就登录了

### 7.3、Cookie

1. 从请求中拿到cookie信息
2. 服务器响应给客户端cookie

```java
Cookie[] cookies = req.getCookies();//获得cookie
Cookie cookie=cookies[i];//遍历cookie
cookie.getName().equals("LastLoginTime");//获得cookie的key
//服务器给客户端响应一个cookie
Cookie cookie=new Cookie("LastLoginTime",System.currentTimeMillis()+"");
resp.addCookie(cookie);
//cookie有效期1天
cookie.setMaxAge(24*60*60);
cookie.getValue()//获取cookie中的value
```

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    //服务器，告诉你，你来的时间，把这个时间封装成为一个信件，你下一次带来，服务器就知道了
    //解决中文乱码问题
    req.setCharacterEncoding("utf-8");
    resp.setCharacterEncoding("utf-8");
    resp.setContentType("text/html");
    PrintWriter out=resp.getWriter();
    //cookie 服务器从客户端获取
    //客户端请求
    Cookie[] cookies = req.getCookies();//获得cookie
    if (cookies!=null){
        out.write("你上次访问的时间是：");
        /*for (Cookie cookie : cookies) {
             }*/
        for(int i=0;i<cookies.length;i++){
            Cookie cookie=cookies[i];
            if (cookie.getName().equals("LastLoginTime")){
                //获取cookie中的值
                //先把字符串解析为长整型，再把长整型解析成为字符串
                long lastLoginTime=Long.parseLong(cookie.getValue());
                Date date=new Date(lastLoginTime);
                out.write(date.toLocaleString());
            }
        }
    }else{
        out.println("这是你第一次访问该网站");
    }
    //服务器给客户端响应一个cookie
    Cookie cookie=new Cookie("LastLoginTime",System.currentTimeMillis()+"");
    resp.addCookie(cookie);
    //cookie有效期1天
    cookie.setMaxAge(24*60*60);
}
```

**cookie：一般会保存在本地的用户目录下AppData**

一个网站cookie是否存在上限：

- 一个Cookie只能保存一个信息
- 一个web站点可以给浏览器发送多个cookie，最多能存放20个cookie
- Cookie大小有限制4kb
- 300个cookie是浏览器的上限

删除Cookie：

- 不设置有效期，关闭浏览器，自动失效
- 设置有效期时间为0

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    //创建一个cookie，名字必须要和要删除的名字一样
    Cookie cookie=new Cookie("LastLoginTime",System.currentTimeMillis()+"");
    //将cookie有效期设置为0，立马过期
    cookie.setMaxAge(0);
    resp.addCookie(cookie);
}
```

编码解码：

```java
URLEncoder.encode("value","utf-8");//编码
URLDecoder.decode(cookie.getValue);//解码
```

有中文数据传输

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    //req.setCharacterEncoding("utf-8");
    resp.setCharacterEncoding("utf-8");
    resp.setContentType("text/html");
    Cookie[] cookies = req.getCookies();
    PrintWriter out = resp.getWriter();
    if (cookies!=null){
        for (int i=0;i<cookies.length;i++){
            Cookie cookie=cookies[i];
            if (cookie.getName().equals("name")){
                out.write("你访问过了"+cookie.getValue());
            }
        }
    }else {
        out.write("你是第一次访问");
    }

    //有中文最好就是使用URLEncoder.encode("value","utf-8");
    //然后再到要用的地方进行解码URLDecoder.decode(cookie.getValue);

    Cookie cookie=new Cookie("name","小柯");
    resp.addCookie(cookie);
}
```

![image-20240313220745250](JavaWeb.assets/image-20240313220745250.png)

### 7.4、Session(重点)

什么是Session：

- 服务器会给每一个用户的浏览器创建一个Session对象

- 一个Session独占一个浏览器，只要浏览器没有关闭，这个Session就存在；
- 用户登录之后，整个网站它都可以访问-->保存用户的信息；保存购物车的信息...

![image-20240313180337447](JavaWeb.assets/image-20240313180337447.png)

Session和cookie的区别：

- Cookie是把用户数据写给用户的浏览器，浏览器保存（可以保存多个）
- Session把用户的数据写到用户独占Session中，服务器端保存（保存重要的信息，减少服务器资源的浪费）
- Session对象由服务创建 

使用场景：

- 保存一个登录用户的信息；
- 购物车信息
- 在整个网站中经常会使用的数据，将它保存在Session中

使用Session：

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    //解决乱码问题
    req.setCharacterEncoding("utf-8");
    resp.setCharacterEncoding("utf-8");
    resp.setContentType("text/html;charset=utf-8");

    //得到session
    HttpSession session = req.getSession();
    Person person = (Person)session.getAttribute("name");
    System.out.println(person.toString());
}
```

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    //解决乱码问题
    req.setCharacterEncoding("utf-8");
    resp.setCharacterEncoding("utf-8");
    resp.setContentType("text/html;charset=utf-8");
    //得到Session
    HttpSession session = req.getSession();
    //给Session中存东西
    session.setAttribute("name",new Person("小可",10));
    //获取Session的Id
    String id=session.getId();
    //判断Session是否是新创建的
    if (session.isNew()){
        resp.getWriter().write("Session创建成功，ID为："+id);
    }else {
        resp.getWriter().write("session已经在服务器中存在了，ID："+id);
    }

    //Session创建的时候做了什么事情
    /*Cookie cookie = new Cookie("JSESSIONID", "232CDB0B3CB3025348ED2F070C8CAE78");
        resp.addCookie(cookie);*/
}
```

手动注销Session

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    HttpSession session = req.getSession();
    session.removeAttribute("name");
    session.invalidate();
}
```

会话自动过期

```xml
<!--设置Session默认的失效时间-->
<session-config>
    <!--以分钟为单位-->
    <session-timeout>1</session-timeout>
</session-config>
```

![image-20240313223110410](JavaWeb.assets/image-20240313223110410.png)

客户端第一次请求，服务器会创建一个session，每个session都会有唯一一个sessionid用户区分不同的session，服务器在产生一个cookie，cookie的name是sessionid，值sessionid

![image-20240313221102793](JavaWeb.assets/image-20240313221102793.png)

## 8、JSP

### 8.1、是什么

Java Server Pages：java服务器端页面，也和servlet一样，用于动态web技术

最大的特点：

- 写JSP就像再写HTML
- 区别：
  - HTML只给用户提供静态的数据
  - JSP页面中可以嵌入java代码，为用户提供动态数据

### 8.2、JSP原理

思路：JSP如何执行的

- 代码层面没有任何问题
- 服务器内部工作

​		tomcat中有一个work目录

​		IDEA中使用Tomcat的会在IDEA的tomcat中生产一个work目录

![image-20240313231734178](JavaWeb.assets/image-20240313231734178.png)

```java
C:\Users\xiaoke\AppData\Local\JetBrains\IntelliJIdea2023.1\tomcat\9c559fc5-72c7-44c7-bb55-b66ac170be11\work\Catalina\localhost\ROOT\org\apache\jsp
```

发现页面转变成了java

![image-20240313232447293](JavaWeb.assets/image-20240313232447293.png)

**浏览器向服务器发送请求，不管访问什么资源，其实都是在访问Servlet**

JSP最终也会被转换成为一个java类

![image-20240313233135273](JavaWeb.assets/image-20240313233135273.png)

继承了HttpJspBase，HttpJspBase又继承了HttpServlet

![image-20240313233644355](JavaWeb.assets/image-20240313233644355.png)

Jsp本质上就是Servlet

```java
//初始化
public void _jspInit() 
//销毁
public void _jspDestroy()
//JspService
public void _jspService(final jakarta.servlet.http.HttpServletRequest request, final jakarta.servlet.http.HttpServletResponse response)
```

1. 判断请求

2. 内置了一些对象

   ```java
   final jakarta.servlet.jsp.PageContext pageContext;//页面上下文
   jakarta.servlet.http.HttpSession session = null;//session
   final jakarta.servlet.ServletContext application;//applicationContext
   final jakarta.servlet.ServletConfig config;//config
   jakarta.servlet.jsp.JspWriter out = null;//out
   final java.lang.Object page = this;//page：当前页
   final jakarta.servlet.http.HttpServletRequest request;//请求
   final jakarta.servlet.http.HttpServletResponse response;//响应
   ```

3. 输出页面前增加的代码

   ```java
   response.setContentType("text/html");//设置响应的页面类型
   pageContext = _jspxFactory.getPageContext(this, request, response,
                                             null, true, 8192, true);
   _jspx_page_context = pageContext;
   application = pageContext.getServletContext();
   config = pageContext.getServletConfig();
   session = pageContext.getSession();
   out = pageContext.getOut();
   _jspx_out = out;
   ```

4. 以上的这些个对象都可以在JSP页面中直接使用

![image-20240314090811744](JavaWeb.assets/image-20240314090811744.png)

在JSP页面中：

只要是javadiamagnetic就会原封不动的输出；

如果是HTML代码，就会被转化为一个个out.print()的对象如下：

```java
out.write("\r\n");
out.write("<html>\r\n");
out.write("<head>\r\n");
out.write("    <title>Title</title>\r\n");
out.write("</head>\r\n");
out.write("<body>\r\n");
out.write("hello123\r\n");
out.write("</body>\r\n");
out.write("</html>\r\n");
```

这样的格式，输出到前端

### 8.3、JSP基础语法

JSP作为java技术的一种应用，它拥有一些自己扩充的语法（了解即可），java所有语法都支持

#### **JSP表达式**

```jsp
<%--JSP表达式
    作用：用来将程序的输出，输出到客户端
    <%= 变量或表达式%>
--%>
<%= new java.util.Date()%>
```

#### **jsp脚本片段**

```jsp
<%
int sum=0;
for(int i=0;i<=100;i++){
    sum+=i;
}
out.println("<h1>Sum="+sum+"</h1>");
%>
```

#### 脚本片段的再实现

```jsp
<%
int x=10;
out.println(x);
%>
<p>这是一个JSP文档</p>
<%
//int x=10;//错误是因为后面jsp会自动生成的java文件中会把这里的java代码放在同一个方法下
int y=20;
out.println(y);
%>
<hr>
<%--在代码嵌入HTML元素--%>
<%
for(int i=0;i<5;i++){
    %>
<h1>Hello, World <%=i%></h1>
<%
}
%>
```

上面这些用`<%%>`最终都是在jspService的方法中进行写的

#### JSP声明

`<%!%>`就会在全局中写入

![image-20240314101358332](JavaWeb.assets/image-20240314101358332.png)

```jsp
<%!
    static {
    System.out.println("Loading Servlet!");
}
private int globalVar=0;
public void xiaoke(){
    System.out.println("进入了方法xiaoke");
}
%>
```

JSP声明：会被编译到JSP生成的java的类中，其他的，就会生成到_jspService方法中

在JSP中嵌入java代码即可

el表达式

```java
${xxx}
<%
    for(int i=0;i<5;i++){
        request.setAttribute("i",String.valueOf(i));
%>
<h1>Hello, World ${i}</h1>
<%
    }
%>
```

```jsp
<%=%>
<%%>
<%!%>
<%--注释--%>
```

JSP的注释，不会再客户端显示，HTML就会

### 8.4、JSP指令

```jsp
<%--    定制错误页面--%>
<%--<%@ page errorPage="error/500.jsp" %>--%>
<%--如果出错就自动跳转到error/500.jsp页面中去--%>
<%--显示的声明这是一个错误页面--%>
<%--<%@ page isErrorPage="true" %>--%>
<%@ page pageEncoding="utf-8" %>
<%@ page args...%>
<%@ include file="">
```

```jsp
<%--    @include会将两个页面合二为一--%>
    <%@ include file="/common/Header.jsp"%>
    <h1>这是主题页面</h1>
    <%@ include file="/common/Footer.jsp"%>
    <hr>
    <%--    jsp标签--%>
<%--    jsp:include 拼接页面，本质还是三个页面--%>
    <jsp:include page="common/Header.jsp"/>
    <h1>这是主题页面</h1>
    <jsp:include page="common/Footer.jsp"/>
```

` <%@ include file="/common/Header.jsp"%>`与`<jsp:include page="common/Header.jsp"/>`的区别：

`<%@ include file="">`合二为一

![image-20240314113018468](JavaWeb.assets/image-20240314113018468.png)

![image-20240314112625575](JavaWeb.assets/image-20240314112625575.png)

但是`<jsp include page=""/>`只是引用

![image-20240314112756218](JavaWeb.assets/image-20240314112756218.png)



### 8.5、9大内置对象

- PageContext    存东西
- Request    存东西
- Response
- Session    存东西
- Application    [ServletContext]    存东西
- config    [ServletConfig]    存东西
- out
- page
- exception

双亲委派机制指当一个类加载器收到一个class字节码文件请求时，该类加载器首先会把请求委派给父类加载器，一直递归这个操作，当在父类加载器内找不到指定类时，子类加载器才会尝试自己去加载这个class

只要父类有的就用父类的如果每个父类都有那就用最顶级的那么父类的 如果父类都没有才会用自己的

![image-20240314141554827](JavaWeb.assets/image-20240314141554827.png)

```jsp
<%--内置对象--%>
<%
pageContext.setAttribute("name1","小柯1号",PageContext.APPLICATION_SCOPE);//保存的数据只在一个页面上有效
request.setAttribute("name2","小柯2号");//保存的数据只在一次请求中有效，请求转发会携带
session.setAttribute("name3","小柯3号");//保存的数据只在一次会话中有效，从打开浏览器到关闭浏览器
application.setAttribute( "name4","小柯4号");//保存的数据只在服务器中有效，从打开服务器到关闭服务器
%>
<%--脚本片段中的代码，会被原封不动的生成到*jsp.java中
    要素：这里免得代码，必须保证java语法的正确性
    --%>
<%
//从pageContext取出,通过寻找的方式来取值
//从底层到高层（作用域）page->request->session->application
//与双亲委派机制一样
String name1=(String) pageContext.getAttribute("name1");
String name2=(String) pageContext.getAttribute("name2");
String name3=(String) pageContext.getAttribute("name3");
String name4=(String) pageContext.getAttribute("name4");
String name5=(String) pageContext.getAttribute("name5");//不存在
String hello1=(String) pageContext.findAttribute("hello1");
%>
<%--使用EL表达式进行输出  ${}--%>
<h1>取出的值为：</h1>
<h3>${name1}</h3>
<h3>${name2}</h3>
<h3>${name3}</h3>
<h3>${name4}</h3>
<h3>${name5}</h3>
<hr>
<h3><%=name1%></h3>
<h3><%=name2%></h3>
<h3><%=name3%></h3>
<h3><%=name4%></h3>
<h3><%=name5%></h3>
<hr>
<h3>${hello1}</h3>
<h3><%=hello1%></h3>
```

```jsp
<%
pageContext.setAttribute("hello1","hello2",PageContext.REQUEST_SCOPE);
%>
<%
String hello1=(String) pageContext.findAttribute("hello1");
%>
```

request：客户端向服务器发送请求，产生的数据，用户看完就没有了

session：客户端向服务器发送请求，产生的数据，用户用一会还有，只要浏览器不关闭

application：客户端向服务器发送请求，产生的数据，一个用户用完了，其他用户还可能使用，比如：聊天数据

### 8.6、JSP标签、JSTL标签、EL表达式

```xml
<!-- JSTL表达式的依赖 -->
<dependency>
    <groupId>org.glassfish.web</groupId>
    <artifactId>jakarta.servlet.jsp.jstl</artifactId>
    <version>2.0.0</version>
</dependency>
<!-- standard标签库 -->
<dependency>
    <groupId>org.apache.taglibs</groupId>
    <artifactId>taglibs-standard-spec</artifactId>
    <version>1.2.5</version>
</dependency>
```

EL表达式：${}

- **获取数据**
- **执行运算**
- **获取web开发的常用对象**

------

- 调用java方法

**JSP标签**

```jsp
<%--<jsp:include page=""/>--%>
<h1>1</h1>
<%--http://localhost:8080/jsptag/jsp?name=小柯&age=22--%>
<jsp:forward page="jsptag2.jsp">
    <jsp:param name="name" value="小柯"/>
    <jsp:param name="age" value="22"/>
</jsp:forward>
```

**JSTL表达式**

JSTL标签库的使用就是为了弥补HTML标签的不足，它自定义许多标签，可以供我们使用，标签的功能和java代码一样

**格式化标签**

**SQL标签**

**XML标签**

**核心标签（掌握部分即可）**

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```

![image-20240314152259363](JavaWeb.assets/image-20240314152259363.png)

JSTL标签库使用步骤：

- 引入对应的taglib
- 使用其中的方法

- 在Tomcat也需要引入jstl的包，否则会报错L:JSTL解析错误

**c:if**

```jsp
<h4>if测试</h4>
<form action="coreif.jsp" method="get">
    <%--    
    EL表达式获取表单中的数据
    ${param.参数名}
    --%>
    <input type="text" name="username" value="${param.username}">
    <input type="submit">
</form>
<%--判断提交的用户名是管理员，则登录成功--%>
<%--<%
    if(request.getParameter("username").equals("admin")){
        out.println("登录成功");
    }
%>--%>
<c:if test="${param.username=='admin'}" var="isAdmin">
    <c:out value="管理员欢迎"/>
    <%--    这里的var相当于定义了一个变量如果为真isAdmin=true，否则为false--%>
</c:if>
<%--自闭合标签--%>
<c:out value="${isAdmin}"/>
```

**c:when：c:choose与c:when一起使用**

```jsp
<%--定义一个变量score 职位85--%>
<c:set var="score" value="20"/>
<c:choose>
  <c:when test="${score>=90}">
    你的成绩为优秀
  </c:when>
  <c:when test="${score>=80}">
    你的成绩为良好
  </c:when>
  <c:when test="${score>=70}">
    你的成绩为一般
  </c:when>
  <c:when test="${score<=60}">
    你的成绩为不及格
  </c:when>
</c:choose>
```

**c:foreach**

```jsp
<%
  ArrayList<String> people = new ArrayList<>();
  people.add(0,"张三");
  people.add(1,"李四");
  people.add(2,"王五");
  people.add(3,"小六");
  people.add(4,"田七");
  request.setAttribute("list",people);
%>
<%--
  var ,每一次遍历出来的变量
  item，要遍历的对象
  begin:哪里开始
  end:到哪里
  step:步长
--%>
<c:forEach var="people" items="${list}">
  <c:out value="${people}"/><br>
</c:forEach>
<hr>
<c:forEach begin="0" end="3" step="2" var="people" items="${list}">
  <c:out value="${people}"/><br>
</c:forEach>

```

## 9、JavaBean

实体类

JavaBean有特定的写法：

- 必须要有一个无参构造器
- 属性必须私有化
- 必须有对应的get/set方法

一般用来和数据库的字段做映射 ORM；

ORM：对象关系映射

- 表-->类
- 字段-->属性
- 行记录-->对象

**people表**

| id   | name  | age  | address |
| ---- | ----- | ---- | ------- |
| 1    | 小柯1 | 18   | 广东    |
| 2    | 小柯2 | 22   | 广东    |

```java
class People{
    private int id;
    private String name;
    private int age;
    private String address;
}
class A{
    new People(1,"小柯1",18,"广东")
}
```

```jsp
<%--<%
  People people=new People();
  people.setId(1);
  people.setName("小柯");
  people.setAge(18);
  people.setAddress("广东");
%>--%>
<jsp:useBean id="people" class="com.xiaoke.pojo.People" scope="page"/>
<jsp:setProperty name="people" property="id" value="1"/>
<jsp:setProperty name="people" property="name" value="小柯"/>
<jsp:setProperty name="people" property="age" value="18"/>
<jsp:setProperty name="people" property="address" value="广东"/>
<%--<%
  people.getId();
  people.getName();
  people.getAge();
  people.getAddress();
%>--%>
id:<jsp:getProperty name="people" property="id"/>
name:<jsp:getProperty name="people" property="name"/>
age:<jsp:getProperty name="people" property="age"/>
address:<jsp:getProperty name="people" property="address"/>

```

使用jsp进行创建对象，给对象赋值

## 10、MVC三层架构

什么是MVC：model view controller 模型（实体类对应数据库中一个个字段），视图（JSP页面），控制器（Servlet）

### 10.1、早些年架构

![image-20240314183802016](JavaWeb.assets/image-20240314183802016.png)

用户直接访问控制层，控制层就可以直接操作数据库

```java
servlet-->CRUD(增删改查)-->数据库
弊端：CRUD代码写到servlet中程序很臃肿，不利于维护
servlet的代码中：处理请求、响应、视图跳转、处理JDBC、处理业务代码、处理逻辑代码
架构：没有什么是加一层解决不了的
JDBC（数据库同一连接接口）
```

### 10.2、MVC三层架构

![image-20240314195240834](JavaWeb.assets/image-20240314195240834.png)

model

- 业务处理：业务逻辑（service）
- 数据持久层：CRUD（Dao）

view

- 展示数据
- 提供连接发起Servlet请求（a、form、img...）

controller

- 接受用户的请求：request：请求参数，session信息...
- 交给业务层处理对应的代码
- 控制视图的跳转

```java
登录--->接收用户的登录请求--->处理用户的请求（获取用户登录的参数，username，password）--->交给业务层处理登录业务（判断用户名密码是否正确；事务）--->Dao层查询用户密码是否正确--->数据库
```

## 11、Filter（重点）

Filter：过滤器，用来过滤网站的数据

- 处理中文乱码
- 登录验证...

![image-20240314202312637](JavaWeb.assets/image-20240314202312637.png)

Filter开发步骤：

1. 导包

2. 编写过滤器

   1. 导包不要错

      ![image-20240314205751168](JavaWeb.assets/image-20240314205751168.png)

   2. 实现filter接口，重写对应的方法

      ```java
      public class CharacterEncodingFilter implements Filter {
          //初始化:web服务器启动，就已经初始化，随时等待
          @Override
          public void init(FilterConfig filterConfig) throws ServletException {
              System.out.println("CharacterEncodingFilter初始化");
          }
          //Chain：链条
          /*
           * 1.过滤中的所有代码，在过滤特定请求的时候都会执行
           * 2.必须要让过滤器继续通行chain.doFilter(req,resp);
           * */
          @Override
          public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException {
              req.setCharacterEncoding("utf-8");
              resp.setCharacterEncoding("utf-8");
              resp.setContentType("text/html");
              System.out.println("CharacterEncodingFilter执行前");
              chain.doFilter(req,resp);//让请求继续走，如果不写，程序到这里停止了
              System.out.println("CharacterEncodingFilter执行后");
          }
          //销毁：web服务器关闭，过滤会销毁
          @Override
          public void destroy() {
              System.out.println("CharacterEncodingFilter销毁");
          }
      }
      ```

   3. 在web.xml中配置Filter

   ```xml
   <filter>
       <filter-name>CharacterEncodingFilter</filter-name>
       <filter-class>com.xiaoke.filter.CharacterEncodingFilter</filter-class>
   </filter>
   <filter-mapping>
       <filter-name>CharacterEncodingFilter</filter-name>
       <!--        只要是/Servlet下的任何请求，都会经过整个过滤器-->
       <url-pattern>/Servlet/*</url-pattern>
   </filter-mapping>
   ```

## 12、监听器

实现一个监听器的接口：（有N种）

1. 编写一个监听器

​	实现监听器的接口

```java
//统计网站在线人数：统计session
public class OnlineCountListener implements HttpSessionListener {
    //创建session监听：看你的一举一动
    //一旦创建一个session就会触发一次这个事件
    @Override
    public void sessionCreated(HttpSessionEvent se) {
        ServletContext ctx = se.getSession().getServletContext();
        
        Integer onlineCount = (Integer) ctx.getAttribute("OnlineCount");
        System.out.println(se.getSession().getId());
        if (onlineCount==null){
            onlineCount=Integer.valueOf(1);
        }else{
            int count=onlineCount.intValue();
            onlineCount =Integer.valueOf(count+1);
        }
        ctx.setAttribute("OnlineCount",onlineCount);
        System.out.println("已经走完");
    }
    
    //销毁session监听
    //一旦session销毁就会触发这个事件
    /*
        session的销毁：
            手动销毁：se.getSession().invalidate();
            自动销毁：在web.xml中实现
            <session-config>
                <session-timeout>1</session-timeout>
            </session-config>
    */
    @Override
    public void sessionDestroyed(HttpSessionEvent se) {
        ServletContext ctx = se.getSession().getServletContext();
        Integer onlineCount = (Integer) ctx.getAttribute("OnlineCount");
        System.out.println(se.getSession().getId());
        if (onlineCount==null){
            System.out.println(0);
            onlineCount=Integer.valueOf(0);
        }else{
            System.out.println(12);
            int count=onlineCount.intValue();
            onlineCount =Integer.valueOf(count-1);
        }
        ctx.setAttribute("OnlineCount",onlineCount);

    }
}
```

	2. 配置监听器在web.xml中注册监听器

```xml
<listener>
    <listener-class>com.xiaoke.listener.OnlineCountListener</listener-class>
</listener>
<!--session的存活时长-->
<session-config>
    <session-timeout>1</session-timeout>
</session-config>
```

3. 看情况是否使用

## 13、过滤器、监听器常见应用

监听器：GUI编程中经常使用

```java
public class TestPanel {
    public static void main(String[] args) {
        Frame frame=new Frame("我要学java");//新建一个窗体
        Panel panel=new Panel();//面板
        frame.setLayout(null);//设置窗体布局
        frame.setBounds(300,300,500,500);
        frame.setBackground(new Color(20, 170, 220));//设置背景颜色
        panel.setBounds(0,20,300,300);
        panel.setBackground(new Color(234, 164, 24));
        frame.add(panel);
        frame.setVisible(true);
        //监听事件，监听关闭事件
        frame.addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                System.out.println("windowClosing");
                System.exit(0);
            }
        }
                               );
    }
}
```

过滤器实现：用户登录之后还能进入主页，用户注销后就不能进入主页

1. 用户登录之后，向Session中放入用户的数据
2. 进入主页的时候要判断用户是否已经登录，要求：在过滤器中实现

```java
public class SysFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException {
        //把如果没有登录，就不能进行访问主页面
        HttpServletRequest req1 = (HttpServletRequest) req;
        HttpServletResponse resp1 = (HttpServletResponse) resp;
        if(req1.getSession().getAttribute(Constant.USER_SESSION)==null){
            resp1.sendRedirect("/sys/error.jsp");
        }
        chain.doFilter(req,resp);
    }
}
```

登录请求响应：

```java
public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //获取前端请求的参数
        String username = req.getParameter("username");
        if (username.equals("admin")){//登录成功
            req.getSession().setAttribute(Constant.USER_SESSION,req.getSession().getId());
            resp.sendRedirect("/sys/success.jsp");
        }else{
            //登录失败
            resp.sendRedirect("/sys/error.jsp");
        }

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

注销：

```java
public class LogoutServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if (req.getSession().getAttribute(Constant.USER_SESSION)!=null){
            req.getSession().removeAttribute(Constant.USER_SESSION);
            resp.sendRedirect("/login.jsp");
        }
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

## 14、JDBC

什么是JDBC：java连接数据库

![image-20240315142307578](JavaWeb.assets/image-20240315142307578.png)

需要jar包的支持：

- java.sql
- javax.sql
- mysql-connector-java连接驱动（必须要导入的）



实现环境搭建

![image-20240315151115752](JavaWeb.assets/image-20240315151115752.png)



导入数据库依赖

```xml
<!--        连接数据库-->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.33</version>
</dependency>
```

IDEA中连接数据库

![image-20240315151228208](JavaWeb.assets/image-20240315151228208.png)

JDBC固定步骤：

1. 加载驱动
2. 连接驱动
3. 向数据库发送SQL的对象Statement：CRUD
4. 编写SQL（根据业务，不同的SQL）
5. 执行SQL
6. 关闭连接

```java
public class TestJdbc {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        //配置信息
        //useUnicode=true&characterEncoding=utf8解决中文乱码
        String url="jdbc:mysql://localhost:3306/jdbc?serverTimezone=UTC&useUnicode=true&characterEncoding=utf8&useSSl=true";
        String username="root";
        String password="123456";
        //1. 加载驱动
        Class.forName("com.mysql.cj.jdbc.Driver");
        //2. 连接数据库 connection代表数据库了
        Connection connection = DriverManager.getConnection(url, username, password);
        //3.向数据库发送SQL的对象（Statement）:CRUD
        Statement statement = connection.createStatement();
        //4.编写SQL
        String sql="select * from users;";
        //5.执行查询SQL，返回一个ResultSet ：结果集
        ResultSet rs = statement.executeQuery(sql);

        while(rs.next()){
            System.out.println(rs.getInt("id"));
            System.out.println(rs.getString("name"));
            System.out.println(rs.getString("password"));
            System.out.println(rs.getString("email"));
            System.out.println(rs.getDate("birthday"));
        }
        //6.关闭连接(一定要做的) 先开的后关
        rs.close();
        statement.close();
        connection.close();

    }
}
```

预编译SQL

```java
public class TestJDBC2 {
    public static void main(String[] args) throws Exception{
        //connection.prepareStatement()更安全，预编译
        //配置信息
        //useUnicode=true&characterEncoding=utf8解决中文乱码
        String url="jdbc:mysql://localhost:3306/jdbc?serverTimezone=UTC&useUnicode=true&characterEncoding=utf8&useSSl=true";
        String username="root";
        String password="123456";
        //1. 加载驱动
        Class.forName("com.mysql.cj.jdbc.Driver");
        //2. 连接数据库 connection代表数据库了
        Connection connection = DriverManager.getConnection(url, username, password);

        //3. 编写SQL
        String sql="insert into users (id,name,password,email,birthday) values (?,?,?,?,?);";
        //4.预编译
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setInt(1,8);//给第一个占位符? 赋值为8
        ps.setString(2,"田七");//给第二占位符? 赋值为田七
        ps.setString(3,"123456");//给第三个占位符? 赋值为123456
        ps.setString(4,"tq@qq.com");//给第四个占位符? 赋值为tq@qq.com
        ps.setDate(5,new Date(2002,05,05));//给第五个占位符? 赋值为2005-02-04
        //5. 执行SQL语句
        int i = ps.executeUpdate();
        if (i>0){
            System.out.println("插入成功");
        }
        //6. 关闭数据库连接
        ps.close();
        connection.close();
    }
}
```

**事务**

要么都成功，要么都失败

ACID原则：保证数据的安全（原子性、一致性、隔离性、持久性）

```java
开启事务
事务提交	commit()
事务回滚	rollback()
关闭事务

转账：
A：1000
B：1000
A(900)	--100-->	B(1100)

```



**junit单元测试**

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>3.8.1</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>RELEASE</version>
    <scope>compile</scope>
</dependency>
```

简单使用

@Test注解只有在方法上有效，只要家里这个注解的方法，就可以直接运行

```java
package com.xiaoke.test;
import org.junit.Test;
public class TestJDBC3 {
    @Test
    public void test(){
        System.out.println("Hello");
    }
}
```

成功：

![image-20240315153829740](JavaWeb.assets/image-20240315153829740.png)

失败：

![image-20240315153852010](JavaWeb.assets/image-20240315153852010.png)

搭建一个环境，测试事务

```java
public class TestJDBC3 {
    @Test
    public void test() throws Exception {
        Connection connection =null;
        try{
            //配置信息
            String url="jdbc:mysql://localhost:3306/jdbc?serverTimezone=UTC&useUnicode=true&characterEncoding=utf8&useSSl=true";
            String username="root";
            String password="123456";
            //1. 加载驱动
            Class.forName("com.mysql.cj.jdbc.Driver");
            //2. 连接数据库，代表数据库
            connection = DriverManager.getConnection(url, username, password);
            //3. 通知数据库开启事务  false是开启事务
            connection.setAutoCommit(false);
            //SQL编写
            String sql="update account set money=money-100 where name='小a';";
            //执行
            connection.prepareStatement(sql).executeUpdate();
            int i=1/0;
            String sql1="update account set money=money+100 where name='小o';";
            connection.prepareStatement(sql1).executeUpdate();
            connection.commit();//以上两天sql都执行成功了，就提交事务
            System.out.println("提交成功");
        }catch (Exception e){

            e.printStackTrace();
        }finally {
            connection.close();
        }


    }
}
```















