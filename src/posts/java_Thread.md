---
icon: pen-to-square
date: 2024-03-05
category:
  - java_Thread
tag:
  - java
star: true
---
# 多线程

## 线程简介

任务，进程，线程，多线程

![image-20240227104105296](C:\Users\xiaoke\AppData\Roaming\Typora\typora-user-images\image-20240227104105296.png)





![image-20240227104159661](C:\Users\xiaoke\AppData\Roaming\Typora\typora-user-images\image-20240227104159661.png)



![image-20240227104251412](C:\Users\xiaoke\AppData\Roaming\Typora\typora-user-images\image-20240227104251412.png)

程序跑起来->进程->包含有多个线程

main主线程，gcc线程

![image-20240227104554941](C:\Users\xiaoke\AppData\Roaming\Typora\typora-user-images\image-20240227104554941.png)

调度器是与操作系统紧密相关的，先后顺序是不能人为干预的

## 线程实现（重点）



|   Thread class   | 继承Thread类         |
| :--------------: | -------------------- |
| **Runnable接口** | **实现Runnable接口** |
|   Callable接口   | 实现Callable接口     |

### Thread

- 自定义线程类继承Thread类
- 重写run()方法，编写线程执行体
- 创建线程对象，调用start()方法启动线程
- 不建议使用：避免OOP单继承局限性

![image-20240227160642096](C:\Users\xiaoke\AppData\Roaming\Typora\typora-user-images\image-20240227160642096.png)

```java
//创建线程方式一：继承Thread类，重写run()方法，调用start开启线程
public class TextThread1 extends Thread{
    @Override
    public void run(){
        //run方法线程体
        for (int i =0;i<20;i++){
            System.out.println("我在学编程"+i);
        }
    }
    public static void main(String[] args){
        //main线程，主线程
        //创建一个线程对象
        TextThread1 test=new TextThread1();
        //调用start()方法开启线程  它们就是同时运行起来的
        test.start();
        for (int i = 0; i < 2000; i++) {
            System.out.println("我在学习多线程"+i);
        }
    }
}
```

**总结：线程开启不一定立即执行，由cpu调度执行**

小案例：图片下载

```java
package com.xiaoke.demo01;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.SplittableRandom;

//练习Thread，实现多线程同步下载图片
public class TestThread02 extends Thread{
    private String url;//网络图片地址
    private String name;//保存的文件名

    public TestThread02(String url, String name) {
        this.url = url;
        this.name = name;
    }

    @Override
    public void run(){
        //下载图片线程的执行体
        WebDownloader down=new WebDownloader();
        down.downloader(url,name);
        System.out.println("下载了文件名为："+name);
    }

    public static void main(String[] args){

        //主线程
        //创建一个线程对象
        TestThread02 test1=new TestThread02("https://xiaokekeq.github.io/vuepress_blog/assets/image-20240205204647045-s5bcQkpN.png","1.jpg");
        TestThread02 test2=new TestThread02("https://xiaokekeq.github.io/vuepress_blog/assets/image-20240206103621866-cCkRwVNb.png","2.jpg");
        TestThread02 test3=new TestThread02("https://xiaokekeq.github.io/vuepress_blog/assets/image-20240206110516527-xJyRCIkn.png","3.jpg");

        test1.start();//启动子线程
        test2.start();
        test3.start();
    }
}
//下载器
class WebDownloader{
    //下载方法
    public void downloader(String url,String fileName){
        try {
            FileUtils.copyURLToFile(new URL(url),new File(fileName));
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("IO异常，downloader方法出现异常");
        }
    }
}


```

### Runnable

- 定义MyRunnable类实现Runnable接口
- 实现Run()方法，编写线程执行体
- 创建线程对象，调用start()方法启动线程

- 传入目标对象+Thread对象.start
- 推荐使用：避免但继承局限性，灵活方便，方便同一个对象被多个线程使用

```java
package com.xiaoke.demo01;

//创建线程方式2：实现runnable接口，重写run方法，执行线程需要丢入runnable接口实现类，调用start方法
public class TestThread3 implements Runnable{
//implements是一个类实现一个接口用的关键字
    @Override
    public void run(){
        for (int i = 0; i < 20; i++) {
            System.out.println("我在看代码"+i);
        }
    }

    public static void main(String[] args){
        //创建runnable接口的实现类
        TestThread3 test=new TestThread3();
        //创建线程对象。通过线程对象来开启我们的线程，代理
        Thread thread=new Thread(test);
        thread.start();
        for (int i = 0; i < 2000; i++) {
            System.out.println("我在学习多线程"+i);
        }
    }
}
```

![image-20240227212154024](C:\Users\xiaoke\AppData\Roaming\Typora\typora-user-images\image-20240227212154024.png)

一个对象创建出多个线程

```java
package com.xiaoke.demo01;
//多个线程同时操作同一个对象
//买火车票的例子

//发现问题：多个线程操作同一个资源的情况下，线程不安全，数据紊乱
public class TestThread4 implements Runnable {
    //票数
    private int ticketNums=10;
    @Override
    public void run(){
        while(true){
            if (ticketNums<=0){
                break;
            }
            try {
                Thread.sleep(200);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName()+"-->拿到了第"+ticketNums--+"票");
        }
    }

    public static void main(String[] args) {
        TestThread4 ticket=new TestThread4();
        
        new Thread(ticket,"小明").start();
        new Thread(ticket,"老师").start();
        new Thread(ticket,"黄牛").start();
    }
}
```

### 实现Cllable接口（了解即可）

1. 实现Callable接口，需要返回值类型
2. 重写call方法，需要抛出异常
3. 创建目标对象
4. 创建执行服务：ExecutorService ser=Executors.newFixedThreadPool(1);
5. 提交执行：Future<Boolean> result1=ser.submit(t1);
6. 获取结果：boolean r1 =result1.get();
7. 关闭服务：ser.shutdownNow();

### 静态代理--模式

```java
package com.xiaoke.demo01;
//静态代理模式：
//真实对象和代理对象都要实现同一个接口
//代理对象要代理真实角色

//好处：
    //代理对象可以做很多真实对象做不了的事情
    //真实对象专注做自己的事情
//这个案例就是Runnable接口实现线程的底部原理
public class staticProxy {
    public static void main(String[] args) {
        You you=new You();//你要结婚
        WeddingCompany wedding=new WeddingCompany(you);
        wedding.HappyMarry();
    }
}

interface Marry{
    void HappyMarry();
}
//真实角色，你去结婚
class You implements Marry{
    @Override
    public void HappyMarry(){
        System.out.println("秦老师要结婚，超开心");
    }
}

//代理角色，帮你结婚
class WeddingCompany implements Marry{
    //代理谁-->真实目标角色
    private Marry target;
    public WeddingCompany(Marry target){
        this.target=target;
    }
    @Override
    public void HappyMarry() {
        before();
        this.target.HappyMarry();//这就是真实对象
        after();
    }

    private void after() {
        System.out.println("结婚之后，收尾款");
    }

    private void before() {
        System.out.println("结婚之前，布置现场");
    }
}
```

### Lambda表达式

- 为什么要使用lambda表达式

  - 必满匿名内部类定义过多
  - 可以让代码看起来简洁
  - 去掉一堆没有意义的代码，只留下核心的逻辑

- 理解Functional Interface(函数式接口)

- 函数式接口的定义：

  - 任何接口，如果只包含唯一一个抽象方法，那么它就是一个函数式接口

    ```java
    public interface Runnable{
        public abstract void run();
    }
    ```

  - 对于函数式接口，可以通过lambda表达式来创建该接口的对象

```java
package com.xiaoke;

/*
* 推导lambda表达式
* */
public class lambda {
    //3.静态内部类
    static class Like2 implements ILike{
        @Override
        public void lambda(){
            System.out.println("i like lambda2");
        }
    }
    public static void main(String[] args) {

        ILike like=new Like();//接口去调用他的实现类
        like.lambda();
        //静态内部类
        ILike like2=new Like2();
        like2.lambda();
        //局部内部类
        class Like3 implements ILike{
            @Override
            public void lambda(){
                System.out.println("i like lambda3");
            }
        }
        ILike like3=new Like3();
        like3.lambda();
        //4.匿名内部类--没有类的名称，必须借助接口或者父类
        ILike like4=new ILike() {
            @Override
            public void lambda() {
                System.out.println("i like lambda4");
            }
        };
        like4.lambda();
        //lambda表达式
        ILike like5=()->{
            System.out.println("i like lambda5");
        };
        like5.lambda();
    }
}
//1.定义一个函数式接口-- 函数式接口本质就是接口中只含有一个抽象方法
interface ILike{
    void lambda();
}
//2.实现类
class Like implements ILike{
    @Override
    public void lambda(){
        System.out.println("i like lambda");
    }
}


```

**总结**：

               1. lambda表达式只能有一行代码的情况下才能简化成为一行，如果有多行，那么就用代码块包裹
               2. 前提是接口为函数式接口
               3. 多个参数也可以去掉参数类型，要去掉就都去掉。必须加上括号



## 线程状态

**五大状态**

![image-20240228103045649](C:\Users\xiaoke\AppData\Roaming\Typora\typora-user-images\image-20240228103045649.png)

创建状态，就绪状态，阻塞状态，运行状态，死亡状态

 

|              方法              |                    说明                    |
| :----------------------------: | :----------------------------------------: |
| setPriority(int new Priority)  |               更改线程优先级               |
| static void sleep(long millis) |  在指定的毫秒数内让当前正在执行的线程休眠  |
|          void join()           |               等待该线程终止               |
|      static void yield()       | 暂停当前正在执行的线程对象，并执行其他线程 |

### 线程停止

- 不推荐使用JDK提供的stop()、destroy()方法
- 推荐线程自己停止下来
- 建议使用一个标志位进行终止变量当flag=false，则终止线程运行

```java
package com.xiaoke.state;

//测试stop
//1.建议线程正常终止--->利用次数，不建议是循环
//2.建议使用标志位--->设置一个标志位
//3.不要使用stop或者destroy等过时或者JDK不建议使用的方法
public class TestStop implements Runnable{
    //设置一个标志位
    private boolean flag=true;
    @Override
    public void run() {
        int i=0;
        while(flag){
            System.out.println("run...Thread"+i++);
        }
    }
    //设置一个公开的方法停止线程，转换标志位
    public void stop(){
        flag=false;
    }
    public static void main(String[] args) {
        TestStop test=new TestStop();
        new Thread(test).start();
        for (int i = 0; i < 1000; i++) {
            System.out.println("main"+i);
            if (i==900){
                //调用stop方法切换标志位，让线程终止
                test.stop();
                System.out.println("该线程停止了");
            }
        }
    }
}
```

### 线程休眠

- sleep（时间）是定当前线程阻塞的毫秒数---1000ms=1s
- sleep存在异常InterruptionException
- sleep时间打倒后线程进入就绪状态
- sleep可以模拟网络延时，倒计时等
- 每个对象都有一个锁，sleep不会释放锁

```java
package com.xiaoke.state;

import java.text.SimpleDateFormat;
import java.util.Date;

//模拟倒计时
public class TestSleep2 {
    public static void main(String[] args) {
        //tenDown();
        //打印当前系统时间
        Date startTime=new Date(System.currentTimeMillis());//获取系统当前时间
        while(true){
            try {
                Thread.sleep(1000);
                System.out.println(new SimpleDateFormat("HH:mm:ss").format(startTime));
                startTime=new Date(System.currentTimeMillis());
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
    //模拟倒计时
    public static void tenDown(){
        int num=10;
        while(true){
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println(num--);
            if (num<=0){
                break;
            }
        }
    }
}

```

### 线程礼让

- 线程礼让，让当前正在执行的线程停止，但是不阻塞
- 将线程从运行状态转为就绪状态
- **让cpu重新调度，礼让不一定成功，要看cpu**

```java
package com.xiaoke.state;

//测试礼让线程
//礼让不一定成功，要看cpu
public class TestYield {
    public static void main(String[] args) {
        MyYield yield=new MyYield();
        new Thread(yield,"a").start();
        new Thread(yield,"b").start();
    }
}
class MyYield implements Runnable{

    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName()+"线程开始执行");
        Thread.yield();//礼让
        System.out.println(Thread.currentThread().getName()+"线程停止执行");
    }
}

```

### Join

- Join合并线程，待此线程执行完成后，再执行其他线程，其他线程阻塞
- 可以想象成插队

```java
package com.xiaoke.state;

//测试Join方法//想象为插队
public class TestJoin implements Runnable{
    @Override
    public void run(){
        for (int i = 0; i < 1000; i++) {
            System.out.println("线程vip来了"+i);
        }
    }

    public static void main(String[] args) throws InterruptedException {
        //启动线程
        TestJoin join =new TestJoin();
        Thread thread=new Thread(join);
        thread.start();
        //主线程
        for (int i = 0; i < 500; i++) {
            if (i==200){
                    thread.join();
            }
            System.out.println("main"+i);
        }
    }
}
```

### 线程状态观测

- Thread.State
  - 线程状态，线程可以处于以下状态之一
    - NEW 尚未启动的线程处于此状态
  - Runnable
    - 在java虚拟机中执行的线程处于此状态
  - BLOCKED
    - 被阻塞等待监视器锁定的线程处于此状态
  - WAITING
    - 正在等待另一个线程执行待定动作的线程处于此状态
  - TIMED WAITING
    - 正在等待另一个线程执行动作达到指定等待时间的线程处于此状态
  - TERMINATED
    - 已退出的线程处于此状态
- 一个线程可以在给定时间点处于一个状态，这些状态时不反应任何操作系统线程状态的虚拟机状态

```java
package com.xiaoke.state;

//观察测试线程状态
public class TestState {
    public static void main(String[] args) {
        Thread thread=new Thread(()->{
            for (int i = 0; i < 5; i++) {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
            System.out.println("///////");
        });
        //观测状态
        Thread.State state=thread.getState();
        System.out.println(state);//NEW

        //观察启动后
        thread.start();//启动线程
        state=thread.getState();
        System.out.println(state);//Run

        while (state!=Thread.State.TERMINATED){
            //只要线程不终止，就一致输出状态
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            state=thread.getState();//更新线程状态
            System.out.println(state);//输出状态
        }
       // thread.start();//死亡之后的线程时不能在启动的
    }
}
```

### 线程的优先级

- java提供一个线程调度器来监控程序中启动后进入就绪状态的所有线程，线程调度器按照优先级决定应该调度那个线程来执行
- 线程的优先级用数字表示，范围从1~10
  - Thread.MIN_PRIORITY=1;
  - Thread.MAX_PRIORITY=10;
  - Thread.NORM_PRIORITY=5；
- 使用一下方式改变或获取优先级
  - getPriority()，setpriority(int xxx)

**优先级低只是意味着获得调度的概率低，并不是优先级低就不会被调用了。这都是看CPU的调度**

**优先级的设定建议在start()调度之前**

### 守护(daemon)线程

- 线程分为**用户线程**和**守护线程**
- 虚拟机必须确保用户线程执行完毕(main())
- 虚拟机不用等待守护线程执行完毕(gc())
- 如：后台记录操作日志，监控内存，垃圾回收等待...

```java
package com.xiaoke.state;
//测试守护线程
//上帝守护你
public class TestDaemon {
    public static void main(String[] args) {
        God god=new God();
        You you=new You();
        Thread thread=new Thread(god);
        thread.setDaemon(true);//默认时false表示时用户线程，正常的线程都是用户线程
        thread.start();//上帝守护线程
        new Thread(you).start();//你 用户线程启动
    }
}
//上帝
class God implements Runnable{
    @Override
    public void run() {
        while(true){
            System.out.println("上帝保护着你");
        }
    }
}
// 你
class You implements Runnable{
    @Override
    public void run() {
        for (int i = 0; i < 36500; i++) {
            System.out.println("你一生都开心的活着");
        }
        System.out.println("-====goodbye！world======");
    }
}
```

## 线程同步（重点）

多个线程操作同一个资源

并发：同一个对象被多个线程同时操作

线程同步其实是一种等待机制，多个需要同时访问此对象的线程进入这个对象的等待池形成队列，等待前面线程使用完毕，下一个线程再使用。

**队列与锁**--线程同步（synchronized）才能解决线程不安全的问题

- 一个线程持有锁会导致其他所有需要此锁的线程挂起
- 在多线程竞争下，枷锁、释放锁会导致比较多的上下文切换和调度延时。引起性能问题
- 如果一个优先级高的线程等待一个优先级低的线程释放锁，会导致优先级倒置，引起性能问题

**线程不安全的原因在于：每个线程在自己的工作内存交互，内存控制不当会造成数据不一致**

### 同步的方法

- 由于我们可以通过private关键字来保证数据对象只能被方法访问，所以我们只需要针对方法提出一套机制，这套机制就是synchronized关键字，它包含两种用法：

  synchronized方法和synchronized块

  `同步方法：public synchronized void method(int args){}`

  ```java
  package com.xiaoke.syn;
  
  //不安全的买票
  //线程不安全
  public class UnsafeBuyTicket {
  
  }
  class BuyTicket implements Runnable{
      public static void main(String[] args) {
          BuyTicket station=new BuyTicket();
  
          new Thread(station,"小明").start();
          new Thread(station,"小琴").start();
          new Thread(station,"小黄").start();
      }
      private int ticketNum=10;
      boolean flag=true;
      @Override
      public void run() {
          //买票
          while(flag){
              Buy();
          }
      }
      //使用synchronized修饰后变成 同步方法，锁的是this
      private synchronized void Buy(){
          //判断是否邮票
          if (ticketNum<=0) {
              flag=false;
              return;
          }
          //模拟延时：放大存在的问题
          try {
              Thread.sleep(100);
          } catch (InterruptedException e) {
              throw new RuntimeException(e);
          }
          //买票
          System.out.println(Thread.currentThread().getName()+"拿到了"+ticketNum--+"票");
      }
  }
  ```

  

- synchronized方法控制‘对象’的访问，每个对象对应一把锁，每个synchronized方法都必须获得调用该方法的对象的锁才能执行，否则线程胡hi阻塞，方法一旦执行，就独占该锁，知道该方法返回才释放锁，后面被阻塞的线程才能获得这个锁，继续执行

  `缺陷：若将一个大的方法申明为synchronized将会影响效率`

  ```java
  package com.xiaoke.syn;
  
  import java.util.ArrayList;
  import java.util.List;
  //线程不安全的集合
  public class UnsafeList {
      public static void main(String[] args) {
  
          List<String> list=new ArrayList<String>();
          for (int i = 0; i < 10000; i++) {
                  new Thread(()->{
                      synchronized(list){
                      list.add(Thread.currentThread().getName());
                      }
                  }).start();
  
          }
          try {
              Thread.sleep(1000);
          } catch (InterruptedException e) {
              throw new RuntimeException(e);
          }
          System.out.println(list.size());
      }
  }
  ```

### 同步方法弊端

方法里面需要修改的内容才需要锁，锁的太多，浪费资源

### 同步块

- 同步块：synchronized(Obj){}-->Obj是要进行增删改的那个对象
- Obj 称之为**同步监视器**
  - Obj可以是任何对象，但是推荐使用共享资源作为同步监视器
  - 同步方法中无需指定同步监视器，因为同步方法的同步监视器就是this，就是这个对象本身，或者是class[反射中讲解]
- 同步监视器的执行过程
  - 第一个线程访问，锁定同步监视器，执行其中代码
  - 第二个线程访问，发现同步监视器被锁定，无法访问
  - 第一个线程访问完毕，解锁同步监视器
  - 第二个线程访问，发现同步监视器没有锁，任何锁定并访问

### 死锁

某一个同步块同时拥有”两个以上对象的锁“时，就可能会发生”死锁“的问题

- 产生死锁的四个必要条件
  - 互斥条件：一个资源每次只能被一个进程使用（资源使用static修饰）
  - 请求与保持条件：一个进程因请求资源而阻塞时，对已获得的资源保持不放
  - 步剥夺条件：进程已获得的资源，在未使用完之前，不能强行剥夺
  - 循环等待条件：若干进程之间形成一种头尾相接的循环等待资源关系
- 上面列出了死锁的四个必要条件，我们只要想办法破其中的任意一个或多个条件就可以避免死锁发生

```java
package com.xiaoke.syn;

//死锁：多个线程互相抱着对方需要的资源，然后形成僵持
public class DeadLock {
    public static void main(String[] args) {
        Makeup g1=new Makeup(0,"灰姑娘");
        Makeup g2=new Makeup(1,"白雪公主");
        g1.start();
        g2.start();
    }
}
//口红
class Lipstick{

}

//镜子
class Mirror{

}

//化妆
class Makeup extends Thread{
    //需要的资源只有一份，用static修饰来保证只有一份
    static Lipstick lipstick=new Lipstick();
    static Mirror mirror=new Mirror();
    int choice;//选择
    String girlName;
    public Makeup(int choice,String girlName){
    this.choice=choice;
    this.girlName=girlName;
    }

    @Override
    public void run(){
        //化妆
        try {
            makeup();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
    //化妆,互相持有对方的锁，就是需要拿到对方的资源
    private void makeup() throws InterruptedException {
        if (choice==0){
            synchronized (lipstick){
                //获得口红的锁
                System.out.println(this.girlName+"获得口红的锁");
                Thread.sleep(1000);

            }
            synchronized (mirror){
                //一秒钟后获得镜子的锁
                System.out.println(this.girlName+"获得镜子的锁");
            }
        }else{
            synchronized (mirror){
                //获得镜子的锁
                System.out.println(this.girlName+"获得镜子的锁");
                Thread.sleep(2000);
            }
            synchronized (lipstick){
                //一秒钟后获得口红的锁
                System.out.println(this.girlName+"获得口红的锁");
            }
        }
    }
}
```



### Lock（锁）

- 从JDK5.0开始，java提供了更强大的线程同步机制---通过显式定义同步锁对象来实现同步，同步锁使用Lock对象充当
- java.util.concurrent.locks.Lock接口时控制多个线程对共享资源进行访问的工具，锁提供了对共享资源的独占访问，每次只能有一个线程对Lock对象加锁，线程开始访问共享资源之前应先获得Lock对象
- ReentrantLock(可重入锁)类实现了Lock，它拥有与synchronized相同的并发性和内存语义，在实现线程安全的控制中，比较常用的时ReentrantLock，可以显式加锁，释放锁

```java
package com.xiaoke.gaoji;

import java.util.concurrent.locks.ReentrantLock;

//测试Lock锁
public class TestLock {
    public static void main(String[] args) {
        TestLock2 testLock2=new TestLock2();
        new Thread(testLock2).start();
        new Thread(testLock2).start();
        new Thread(testLock2).start();
    }

}
class TestLock2 implements Runnable{
    //定义lock锁
    private final ReentrantLock lock=new ReentrantLock();
    int ticketNums=10;
    @Override
    public void run() {
        while(true){
            try{
                lock.lock();
                if (ticketNums>0){
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    System.out.println(ticketNums--);
                }else
                    break;
            }finally {
                //解锁
                lock.unlock();
            }

        }
    }
}
```

#### synchronized与Lock的对比

- Lock是显式锁（手动开启和关闭锁，别忘记关闭锁）synchronized是隐式锁，出了作用域自动释放
- Lock只有代码块锁，synchronized有代码块锁和方法锁
- 使用Lock锁，JVM将花费较少的时间来调度线程，性能更好，并且具有更好的扩展性（提供更多的子类）
- 优先使用顺序：
  - Lock>同步代码块（已经进入了方法体，分配了相应的资源）》同步方法（在方法体之外）

## 线程通信问题

## 生产者消费者模式--问题

- 应用场景：生产者和消费者问题
  - 假设仓库中只能存放一件产品，生产者将生产出来的产品放入仓库，消费者将仓库中产品取走消费
  - 如果仓库中没有产品，则生产者将产品放入仓库，否则停止生产并等待，直到仓库中的产品被消费者取走为止
  - 如果仓库中放有产品，则消费者可以将产品取走消费，否则停止消费并等待，直到仓库中再次放入产品为止

**这是一个线程同步问题，生产者和消费者共享同一个资源，并且生产者和消费者之间相互依赖，互为条件**

- 对于生产者，没有生产产品之前，要通知消费者等待，而生产了产品之后，又需要马上通知消费者消费
- 对于消费者，在消费之后，要通知生产者已经结束消费，需要生产新的产品以供消费
- 在生产者消费者问题中，仅有synchronized是不够的
  - synchronized可阻止并发更新同一个共享资源，实现了同步
  - synchronized不能用来实现不同线程之间消息传递（通信）

#### 解决方式1：

- 并发协作模型”生产者/消费者模式“-->管程法
- 生产者：负责生产数据的模块（可能是方法，对象，线程，进程）
- 消费者：负责处理数据的模块（可能是方法，对象，线程，进程）
- 缓冲区：消费者不能直接使用生产者的数据，它们之间有个”缓冲区“
- **生产者将生产好的数据放入缓冲区，消费者从缓冲区拿出数据’**

```java
package com.xiaoke.gaoji;

//测试：生产者消费者模型-->利用缓冲区解决：管程法
//生产者，消费者，产品，缓冲区
public class TestPC {
    public static void main(String[] args) {
        Buffer buffer=new Buffer();
        new Thread(new Productor(buffer)).start();
        new Thread(new Consumer(buffer),"小明").start();
        new Thread(new Consumer(buffer),"小王").start();

    }
}

//生产者
class Productor implements Runnable{
    Buffer container;
    public Productor(Buffer container){
        this.container=container;
    }
    @Override
    public void run() {
        for (int i = 1; i <=100; i++) {
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            container.push(new Chicken(i));
        }
    }
}

//消费者
class Consumer implements Runnable{
    Buffer container;
    public Consumer(Buffer container){
        this.container=container;
    }

    @Override
    public void run() {
        for (int i = 1; i <=50; i++) {
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            container.pop();
        }
    }
}

//产品
class Chicken{
    int id;
    public Chicken(int id){
        this.id=id;
    }
}

//缓冲区
class Buffer{
    //需要一个容器大小
    Chicken[] chickens=new Chicken[10];
    //容器计数器
    int count=0;
    //生产者放入产品
    public synchronized Chicken push(Chicken chicken){
        //如果容器满了，就需要等待消费者消费
        while (count==chickens.length){
            //通知消费者消费，生产等待
            try {
                this.wait();
            } catch (InterruptedException e) {
               e.printStackTrace();
            }
        }
        //如果没有满，就需要丢入产品
        chickens[count]=chicken;
        count++;
        System.out.println("生产了"+chicken.id+"只鸡");
        //可以通知消费者消费
        this.notifyAll();
        return chicken;
    }
    //消费者消费产品
    public  synchronized Chicken pop(){
        //判断能否消费
        while(count==0){
            //等待生产者生产，消费者等待
            try {
                this.wait();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
        //如果可消费
        count--;
        Chicken chicken=chickens[count];
        System.out.println(Thread.currentThread().getName()+"消费了第-->"+chicken.id+"只鸡");
        //吃完了，通知生产者生产
        this.notifyAll();
        return chicken;
    }
}
```

#### 解决方式2：

信号灯发

- 并发协作模型“生产者/消费者模式”-->信号灯法

```java
package com.xiaoke.gaoji;

import java.security.PublicKey;

//测试生产者消费者问题2：信号灯法，标志位解决
public class TestPC2 {
    public static void main(String[] args) {
        TV tv=new TV();
        new Player(tv).start();
        new Watcher(tv).start();
    }

}

//生产者-->演员
class Player extends Thread{
    TV tv;
    public Player(TV tv){
        this.tv=tv;
    }

    @Override
    public void run() {
        for (int i = 0; i < 20; i++) {
            if (i%2==0) {
                tv.play("快乐大本营");
            }
            else {
                tv.play("抖音记录美好生活");
            }
        }


    }
}
//消费者-->观众
class Watcher extends Thread{
    TV tv;
    public Watcher(TV tv){
        this.tv=tv;
    }

    @Override
    public void run() {
        for (int i = 0; i < 20; i++) {
            tv.Watch();
        }
    }
}
//产品-->节目
class TV{
    //演员表演，观众等待 T
    //观众观看，演员等待 F
    String voice;//表演的界面
    boolean flag=true;
    //表演
    public synchronized void play(String voice) {
        if (!flag){
            try {
                this.wait();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
        System.out.println("演员表演了:"+voice);
        //通知观众观看
        this.notifyAll();
        this.voice=voice;
        this.flag=!this.flag;
    }
    //观看

    public synchronized void Watch(){
        if (flag){
            try {
                this.wait();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
        System.out.println("观看了："+voice);
        //通知演员表演了
        this.notifyAll();
        this.flag=!this.flag;
    }
}
```

#### 使用线程池

- 背景：经常创建和销毁，是哦那个量特别大的资源，比如并发情况下的线程，对性能影响很大
- 思路：提前创建好多个线程，放入线程池中，使用时直接获取，使用完放回池中，可以避免频繁创建销毁，实现重复利用，类似生活中的交通工具
- 好处：
  - 提高响应速度（减少了创建新线程的时间）
  - 降低资源消耗（重复利用线程池中线程，不需要每次都创建）
  - 便于线程管理
    - corePoolSize：核心池的大小
    - maximumPoolSize：最大线程数
    - keepAliveTime：线程没有任务时最多保持多长时间后会停止

- JDK5.0起提供了线程池相关API：ExecutorService和Executors
- ExecutorService：真正的线程池接口，常见子类ThreadPoolExecutor
  - void execute(Runnable command)：执行任务/命令，没有返回值。一般用来执行Runnabble
  - <T>Future<T>submit(Callable<T>task)：执行任务，有返回值，一般用来执行Callable
  - void sutdown()：关闭连接池
- Executors：工具类、线程池的工厂类，用于创建并返回不同类型的线程池

```java
package com.xiaoke.gaoji;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

//测试线程池
public class TestPool {
    public static void main(String[] args) {
        //1.创建服务，创建线程池
        //newFixedThreadPool参数为：线程池的大小
        ExecutorService service= Executors.newFixedThreadPool(10);
        //执行
        service.execute(new MyThread());
        service.execute(new MyThread());
        service.execute(new MyThread());
        service.execute(new MyThread());
        //关闭连接
        service.shutdownNow();
    }
}

class MyThread implements Runnable{
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName());

    }
}
```

## 总结

```java
package com.xiaoke.gaoji;

import java.util.concurrent.*;

//回顾总结线程的创建
public class ThreadNew {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        new MyThread1().start();
        new Thread(new MyThread2()).start();
        MyThread3 myThread3=new MyThread3();
        FutureTask<Integer> futureTask=new FutureTask<Integer>(new MyThread3());
        new Thread(futureTask).start();
        System.out.println(futureTask.get());
    }

}
//1.继承Thread类
class MyThread1 extends Thread{
    @Override
    public void run() {
        System.out.println("MyThread1");
    }
}
//2.实现Runnable接口
class MyThread2 implements Runnable{
    @Override
    public void run() {
        System.out.println("MyThread2");
    }
}
//3.实现Callable接口
class MyThread3 implements Callable<Integer>{

    @Override
    public Integer call() throws Exception {
        System.out.println("MyThread3");
        return 100;
    }
}
```

`FutureTask<Integer> futureTask=new FutureTask<Integer>(new MyThread3());`

`new Thread(futureTask).start();`

`System.out.println(futureTask.get());`

**Callable实现接口可以这样调用**

