@def title = "碳中和相关开源软件汇编"
@def hascode = true
@def date = Date(2021, 11, 19)
@def rss = "碳中和相关开源软件汇编"
@def tags = ["open source", "energy" , "carbon neutrality"]

# 碳中和与能源相关开源软件工具

## 太阳能

- **SAM与ssc** —由美国能源部委托美国国家可再生能源实验室（NREL）开发的可再生能源项目评估模型软件。可针对光伏、光热、风力、地热、生物质等几种可再生能源的发电成本及系统发电特性进行计算。 [点击查看详细介绍](sam-ssc) 

- **REopt\_Lite\_API** —美国国家可再生能源实验室（NREL）开发可再生能源系统优化软件。程序采用的是用基于python的django框架提供网页建模界面，生成的优化问题以json形式描述，通过http api调用JuMP进行优化问题求解。使用了docker-compose来实现建模和优化的连接。JuMP.jl（Julia Math Program）是Julia语言的数学规划建模平台。[点击访问REopt\_Lite\_API源码](https://github.com/NREL/REopt_Lite_API)

## 风能

## 储能

### 电池储能

### 氢储能

## 能源管理系统

