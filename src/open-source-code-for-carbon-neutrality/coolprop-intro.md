@def title = "CoolProp"
@def tags = ["CoolProp"]

# 从热力学图表说起

# RefProp

- RefProp的介绍，用途。

- RefProp的接口

- RefProp这样的程序是如何做出来的

# CoolProp

- CoolProp的介绍

- CoolProp的接口

# 使用Julia来使用CoolProp

现在在julia下使用CoolProp真是简单极了。

```julia
add CoolProp
```
系统就会自动的去下载CoolProp的源代码，并调用jll编译成dll。说真的，什么都不用管。
```julia
using CoolProp
PropsSI("T", "P", 101325.0, "Q", 0.0, "Water")
373.1242958476844
```

甚至，你可以直接带单位进行计算
```julia
using CoolProp
using Unitful: °C, Pa

HAPropsSI("H", "Tdb", 20°C, "RH", 0.5, "P", 101325Pa)
38622.83892391293 J kg⁻¹
```

