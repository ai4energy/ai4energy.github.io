@def title = "Julia简介及安装"
@def hascode = true
@def date = Date(2021, 11, 18)
@def rss = "Julia简介及安装"
@def tags = ["Julia简介及安装", "Julia Introduction"]

# Julia简介及安装


## Julia简介

### 历史

一群拥有各种语言丰富编程经验的Matlab高级用户 ,对现有的科学计算编程工具感到不满——这些软件对自己专长的领域表现得非常棒，但在其它领域却非常糟糕。他们想要的是一个开源的软件，它要像C语言一般快速而有拥有如同Ruby的动态性; 要
具有Lisp般真正的同像性而又有Matlab般熟悉的数学记号;要像Python般通用、像R般在统计分析上得心应手、像Perl般自然地处理字符串、像Matlab般具有强大的线性代数运算能力、像shell般胶水语言的能力， 易于学习而又不让真正的黑客感到无聊;还有，它应该是交互式的，同时又是编译型的...

### 特点

- 核心语言非常小。标准库用的是Julia语言本身写的
- 调用许多其它成熟的高性能基础代码。如线性代数、随机数生成、快速傅里叶变换、字符串处理。
- 丰富的用于创建或描述对象的类型语法
- 高性能，接近于静态编译型语言。包括用户自定义类型等
- 为并行计算和分布式计算而设计
- 轻量级协程
- 优雅的可扩展的类型转换/提升
- 支持Unicode,包括但不限于UTF-8
- 可直接调用C函数(不需要包装或是借助特殊的API)
- 有类似shelI的进程管理能力
- 有类似Lisp的宏以及其它元编程工具

### 使用场景

主要用于科学计算

- 机器学习
- 数据处理
- 算法仿真
- 数值分析
- etc

在做项目时，先用Python/Matlab完成算法模型验证，再用其他编程语言（如C++）来实现，而有了Julia，则可以一步到位，模型验证和实现是一起的。

## 安装Julia
可以到[Julia官网](https://julialang.org/)下载最新稳定版1.6.3，也可以在[Julia中文社区](https://cn.julialang.org/)进行下载。请根据自己的操作系统选择合适的版本。根据安装提示选择合适的位置安装即可。本文档使用的Julia版本为1.6.3，运行环境为Windows10。

如果使用免安装版本，解压后，Julia并不能直接在终端直接运行，需要先将Julia配置在环境变量中。具体操作为：在“资源管理器”中“此电脑”内右键点“属性”—>点击“高级系统设置”—>点击“环境变量”—>在上方的“用户变量(U)”中对“Path”进行编辑 —>将Julia安装中“bin”文件夹所在的目录复制粘贴即可。这样我们就可以在命令行窗口内直接输入julia回车启动julia了。

为了跟Linux的使用习惯一致，我们可以使用Cmder来替换cmd获得更舒服的体验。可以参考[此文](https://www.jianshu.com/p/5b7c985240a7)进行设置。还可以使用Windows Terminal作为[msys2](https://www.msys2.org/)、Cmder的统一界面。我们这里不展开。

## 安装VScode及其julia扩展

## 安装Pluto

为了方便地进行交互式编程，我们选择使用Pluto.jl笔记本进行操作。

安装方法为在终端进入Julia后，输入英文中的"]"进入package模式，然后输入

```julia
julia>add Pluto
```
即可安装。

安装完毕后，使用“backspace”键返回正常模式，然后输如下命令

```julia
using Pluto
Pluto.run()
```
julia就会启动Pluto，并使用默认的浏览器打开网页版的环境。可以看一看其中的sample notebook来获得对Pluto的认识。

## 安装IJulia
当然，也可以使用Jupyter进行交互式编程。安装方法为在终端进入Julia后，输入英文中的"]"进入package模式，然后输入

```julia
julia>add IJulia
```
安装完毕后，使用“backspace”键返回正常模式，然后输如下命令

```julia
using IJulia
notebook()
```
julia就会启动Pluto，并使用默认的浏览器打开网页版的Jupyter环境。可以使用Jupyter进行交互式的编程。