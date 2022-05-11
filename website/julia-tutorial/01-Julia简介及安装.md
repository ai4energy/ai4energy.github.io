@def title = "Julia简介及安装"
@def hascode = true
@def date = Date(2021, 11, 18)
@def rss = "Julia简介及安装"
@def tags = ["Julia简介及安装", "Julia Introduction"]

# Julia简介及安装

## Julia简介

### 历史

一群拥有各种语言丰富编程经验的Matlab高级用户 ,对现有的科学计算编程工具感到不满——这些软件对自己专长的领域表现得非常棒，但在其它领域却非常糟糕。他们想要的是一个开源的软件，它要像C语言一般快速而有拥有如同Ruby的动态性; 要具有Lisp般真正的同像性而又有Matlab般熟悉的数学记号;要像Python般通用、像R般在统计分析上得心应手、像Perl般自然地处理字符串、像Matlab般具有强大的线性代数运算能力、像shell般胶水语言的能力， 易于学习而又不让真正的黑客感到无聊;还有，它应该是交互式的，同时又是编译型的...

### 特点

- 核心语言非常小。标准库用的是Julia语言本身写的
- 调用许多其它成熟的高性能基础代码。如线性代数、随机数生成、快速傅里叶变换、字符串处理。
- 丰富的用于创建或描述对象的类型语法
- 高性能，接近于静态编译型语言。包括用户自定义类型等
- 为并行计算和分布式计算而设计
- 轻量级协程
- 优雅的可扩展的类型转换/提升
- 支持Unicode，包括但不限于UTF-8
- 可直接调用C函数(不需要包装或是借助特殊的API)
- 有类似shelI的进程管理能力
- 有类似Lisp的宏以及其它元编程工具

### 使用场景

主要用于科学计算

- 机器学习
- 数据处理
- 算法仿真
- 数值分析
- ...

在做开发时，之前很多人先用Python/Matlab完成算法模型验证，再用其他编程语言（如C++）来实现，而有了Julia，则可以一步到位，模型验证和实现是一起的。

## 安装Julia

到[Julia的官方站点](https://julialang.org/)下载最新稳定版的Julia（目前版本是1.7.2），根据自己的操作系统选择合适的版本，下载后根据安装提示选择合适的位置安装即可。我们可以使用[适用于Windows的x64免安装版本](https://julialang-s3.julialang.org/bin/winnt/x64/1.6/julia-1.6.3-win64.zip)。也可以在国内的镜像站点下载，比如直接从[清华的镜像](https://mirrors.tuna.tsinghua.edu.cn/julia-releases/bin/winnt/x64/1.7/julia-1.7.2-win64.zip)下载。

如果使用免安装版本，解压后，Julia并不能直接在终端直接运行，需要先将Julia配置在环境变量中。我们下载完免安装版本后解压到合适的目录。然后按如下操作添加环境变量：在“资源管理器”中“此电脑”内右键点“属性”—>点击“高级系统设置”—>点击“环境变量”—>在上方的“用户变量(U)”中对“Path”进行编辑 —>将Julia安装中“bin”文件夹所在的目录复制粘贴到此即可。如果不清楚什么是环境变量或者什么是PATH，请[参阅此文](https://www.cnblogs.com/qtiger/p/13903609.html)。这样我们就可以在命令行窗口内直接输入julia回车启动julia了。


为了跟Linux的使用习惯一致，我们可以使用Cmder来替换cmd获得更舒服的体验。可以参考[此文](https://www.jianshu.com/p/5b7c985240a7)进行设置。还可以使用Windows Terminal作为[msys2](https://www.msys2.org/)、Cmder的统一界面。我们这里不展开。

## 安装VScode及其julia扩展

Visual Studio Code(简称VSCode/VSC)是当今最流行的免费开源代码编辑器，由微软出品。它支持几乎所有主流的开发语言的语法高亮、智能代码补全、自定义热键、括号匹配、代码片段、代码对比Diff、Git等特性，支持插件扩展，并针对网页开发和云端应用开发做了优化。软件跨平台支持 Win、Mac 以及 Linux，运行流畅。

到[VSCode的官方站点](https://code.visualstudio.com/)下载最新的安装包，根据向导安装即可。可把VSCode加到文件夹和文件的右键菜单中，便于使用。接下来给VSCode装上Julia插件。关于VSCode的入门操作，可以参考[菜鸟教程上的VScode教程](https://www.runoob.com/w3cnote/vscode-tutorial.html)。

## 安装Pluto

为了方便地进行交互式编程，我们选择使用Pluto.jl笔记本进行操作。

首先参考[Julia中文文档](https://docs.juliacn.com/latest/manual/getting-started/)了解一些Julia的入门基础知识。

安装方法为在终端进入Julia后，在julia提示符下，通过以下命令安装Pluto包：
```julia
julia> using Pkg
julia> Pkg.add("Pluto")
```
也可以按]进入Julia的Pkg模式，输入以下命令来安装：
```julia
(@v1.6) pkg>add Pluto
```
安装完之后，按Backspace键回到Julia提示符，输入以下命令启动Pluto：
```julia
julia>using Pluto
julia>Pluto.run()
```
系统会开启相应的默认的浏览器打开Pluto页面。我们可以打开sample notebook看一看先。关于Pluto的更多的一些信息，可以[在这里查看](https://github.com/fonsp/Pluto.jl)。

我们可以在浏览器中打开相应的Pluto文件。一般是以jl为后缀名的文件。

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
julia就会启动Jupyter，并使用默认的浏览器打开网页版的Jupyter环境。可以使用Jupyter进行交互式的编程。（Jupyter是基于python的，IJulia首次使用的时候系统会安装miniconda，通过conda安装Jupyter。）