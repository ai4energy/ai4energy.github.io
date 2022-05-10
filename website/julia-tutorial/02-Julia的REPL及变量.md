@def title = "02-Julia的REPL及变量"
@def hascode = true
@def date = Date(2021, 11, 19)
@def rss = "Julia的REPL及变量"
@def tags = ["Julia的REPL及变量", "Julia REPL"]


# Julia的REPL及变量

## Julia的REPL使用

在Julia的REPL中共有四种模式，分别是正常模式、package模式、help模式和shell模式。

### （1）help模式

在Julia提示符下按“？”键进入help模式，该模式下可用来查询操作用法。


### （2）shell模式

在Julia提示符下按“;”键进入shell模式，可以在此模式下执行shell命令。

因此，可以在该模式下使用如下代码，运行该文件夹下的“.jl”文件：

```julia
julia hello_julia.jl
```



### （3）package模式

在Julia提示符下按“]”键进入package模式，在该模式下进行安装包和卸载包的操作，通过“add 包名”与“rm 包名”进行操作。


### （4）正常模式

在以上三种模式中，按“backspace”键回到正常模式，在正常模式下可以使用“Pkg”这个包查看安装使用了哪些包，代码如下：

```julia
using Pkg
Pkg.status()
```

可以使用以下代码升级安装的库：

```julia
Pkg.update()
```

使用以下代码查看所在的文件路径，并且切换文件路径

```julia
pwd()
cd("c:\\Users\\DELL\\Desktop")
```


## Julia的整型和浮点类型变量

### 整型类型

**Int64(),可以将浮点类型转为为整数类型**


**使用“typeof()"来查看类型**


**使用“supertype()”逐级查看父类型**

**使用“subtypes()”查看该类型的子类型**

**使用“sizeof()”查看某个类型所占的字节数**


### 浮点数

**Float64()，可以将整数类型转换为浮点类型**

| Type    | Precision | Number of bits |
| ------- | --------- | -------------- |
| Float16 | half      | 16             |
| Float32 | single    | 32             |
| Float64 | double    | 64             |

在32位系统中，整数默认是Int32类型，浮点数默认是Float32类型;在64位系统中， 整数默认是Int64类型，浮点数默认是Float64类型。

### 十六进制

由于Julia的整数中定义了Int和UInt两种大类型，其中Int用十进制表示， UInt类型用十六进制表示， 当然我们也可以以0b开头表示二进制，以0o开头表示八进制


**二进制与十六进制也支持有符号数，直接在前面添加“-”即可，并且可以使用“typemin()”与“typemax()”来查看最小值与最大值**

在浮点数中0.0与-0.0的表示方法也是有分别的


**使用“eps()”可以用来查看精度**

数值越大，精度也就越低，也就是说，浮点数在0附近最稠密，随着数值越来越大，数值越来越稀疏，数值间的距离呈指数增长。


***

## 3. 复数和分数

### 复数的基本运算

```julia
x=1+2im
(1+2im)*(2-3im)

(1+2im)^2

2(1-1im)
```

### 复数运算的优先级

```julia
2/5im
2/5im==-2/5*im
```

### 复数的其他运算

```julia
sqrt(2+3im) 	#开根号
cos(1+2im) 		#cos值
exp(1+2im)		#e的x次方
abs(1+2im)		#求模值
real()				  #求实部
imag()				#求虚部
angle()				#求夹角
```


### 分数操作

### Julia[算数函数](https://blog.csdn.net/andiao1218/article/details/101192640)

***

## 4. 字符串

**用单引号表示字符，双引号表示字符串**

### **julia的下标是从1开始的**


### 特殊编码


<!-- 在UTF-8的编码中，"\u2200'即'v'使用了三个字符，因此str[2]和str[3]都是无效的。 str[4]为空格。 但可以这么使用:

```julia
str[1:4]
```
-->

也可以使用“firstindex()”与“lastindex()”来索引

```julia
for i = firstindex(str):lastindex(str)
	try
		println(s[i])
	catch
	
	end
end
```

也可以直接将字符串当作遍历的对象，并且不需要惊醒异常处理

```julia
for i in str
	println(i)
end
```

### 字符串的其他操作

#### 拼接:string()

```julia
x="Hello"
y="World"
string(x,",",y,"\n")

x*','*y			#效果等同于上一步代码

string("$x $y !")			#效果等同于上一步代码
```

#### 全部大写变小写：lowercase()

```julia
lowercase("HELLO")
```

#### 全部小写变大写：uppercase()

```julia
uppercase("hello")
```

#### 替换：replace()

```julia
replace("I want to learn Python", "Python" => "Julia")
replace("ABCD", 'A'=>'E')
```

#### 以字符串开始：startswith()

```julia
startswith("ni hao","ni")
```

注意开头不能有空格

#### 以字符串结束：endswith()

```julia
endswith("ni hao","hao")
```

#### 删去字符串中空格：strip()

```julia
strip(" julia is interesting")
```

#### 分割字符串：split()

```julia
s=split("one two three")
```

<!-- 默认以“\t”也就是空格作为分隔符，也可以指定分隔符 -->

```julia
s=split("one|two|three","|")
```

#### 合并Array中的字符串：join()

```julia
join(s)
join(s," ")
join(["abcd","efg","kmn","xyz"],","," and ")
	>>"abcd,efg,kmn and xyz"
```

#### 字符串重复：repeat()或者“^”

```julia
repeat('a',10)
repeat("abcd...",10)
"abc"^3
```

#### 数学运算

```julia
"abcde"<"xyz"
"abcde" != "abcde"
"1+2=3"=="1+2=$(1+2)"
```

#### 判断是否有某个字符串：occursin()

```julia
occursin("ni","ni hao ")
```

#### 查询某个字符在字符串中的位置：findfirst()或者findnext()

```julia
findfirst(isequal('x'),"xilinx")
	>>1
findnext(isequal('x'),"xilinx",1)
	>>1
findnext(isequal('x'),"xilinx",2)
	>>6
```

#### 字符串长度与索引：length()与index()

```julia
x="abcdefgh"
length(x)
firstindex(x)
lastindex(x)
```

#### 跨多行字符串

```julia
"""
hello
world
!
"""
```

#### 支持正则表达式

***

## 5. Tuple元组

元组类型使用()表示，其内容不可更改

```julia
x1=(1,2,3,4)
x1[1]		#索引序号仍从1开始
length(x1)
x1[2:end]
x2=(1,2.4,'a',"hello")
x3=(a=1,b=2)
x3.a
	>>1
```

## 6. Dict字典

### 字典基础操作

```julia
dic=Dict("aa"=>1,"bb"=>2,"cc"=>3)
dic.count
dic.keys
dic.vals
dic["aa"]
```

### 将Array转成字典

```julia
ary=["one"=>1,"two"=>2]
dic=Dict(ary)
```

### 将Array中的Tuple转成字典

```julia
ary=[("one",1),("two",2)]
dic=Dict(ary)
```

### 将两个Array组合成字典：zip()

```julia
vas=[1,2,3]
kes=["one","two","three"]
dic=Dict(zip(kes,vas))
```

### 新建一个字典

```julia
d=Dict()
d["one"]=1
```

### 在新建空字典时指定类型

```julia
d=Dict{String,Int64}()
```

### 字典遍历

```julia
d=Dict("one"=>1,"two"=>2,"three"=>3)
for (k,v) in d
	println("value is $v for key $k")
end

for v in values(d)
	println(v)
end
```

### 字典的其他用法

```julia
d=Dict("one"=>1,"two"=>2)
get(d,"three",-1)
get(d,"one",-1)
delete!(d,"one")

#使用fieldnames查看该类型的fieldname
fieldnames(typeof(d))
```

## 7. Set集合

```julia
S=Set([1,2,3,4])
S=Set(1:3:10)
2 in S
3 in S
issubset([1,4],S) 		#[1,4]包含于S当中

A=Set([1,2,3,4])
B=Set([2,4,6,7])
# A 交 B
intersect(A,B)

# A 或 B
union(A,B)

#不是Set也可进行交/或操作，但返回的不是Set
intersect([1,2,3,4],[2,4,6,7])
```

 