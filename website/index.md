@def title = "Ai4Energy: 奔向智慧能源新时代"
@def tags = ["home", "ai4energy"]

# Ai4Energy: 致力于发展智慧能源开源软件

我们致力于发展智慧能源开源软件。目前尚处于计划的早期阶段。

我们着眼于能源系统的建模、仿真、优化与控制，以期为能源系统优化设计、优化运行提供基础的软件支撑方案。项目将基于强大的[Julia](https://julialang.org/)生态构建。针对优化设计问题，主要发展综合能源系统优化问题的建模与求解。针对优化运行问题，则开展仿真引擎、参数识别、模型预测控制方面的开发工作。

我们也开设了相关研究生课程，请访问[智慧能源系统导论—综合能源系统建模、仿真、优化与控制](https://ai4energy.github.io/enpo811203/)获取更多相关信息。

## 核心能力

- **能源系统仿真引擎**。面向对象的基于图论的建模，基于微分代数方程（DAE）求解处理能源系统仿真问题。能够处理连续时间及离散事件问题。

- **能源系统优化引擎**。基于图论的分等级建模，基于[Julia](https://julialang.org/)处理能源系统优化设计问题。

- **能源系统模型预测控制**。基于仿真引擎，利用优化引擎进行参数辨识（模型校准），开发能源系统模型预测控制软件。我们已经写了一个最优控制包，其代码库在[这里](https://github.com/ai4energy/OptControl.jl)，相应的文档请点击[这里](https://ai4energy.github.io/OptControl.jl/dev/)。

- **可再生能源组件库**。适用于综合能源系统仿真的可再生能源组件库（renewable energy library）。

- **智慧能源管理信息系统**。