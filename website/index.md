@def title = "Ai4Energy: 奔向智慧能源新时代"
@def tags = ["home", "ai4energy"]

# Ai4Energy: 致力于发展人工智能在能源领域的应用

我们致力于发展人工智能在能源领域的应用，包括从微分代数方程（DAEs）到运筹学（OR），以及机器学习（深度学习、强化学习）等。

我们项目实践方面目前着眼于能源系统的建模、仿真、优化与控制（DAEs和OR），以期为能源系统优化设计、优化运行提供基础的软件支撑方案。在机器学习方面主要探索新方法的应用。项目基于强大的[Julia](https://julialang.org/)生态构建。针对优化设计问题，主要发展综合能源系统优化问题的建模与求解。针对优化运行问题，则开展仿真引擎、参数识别、模型预测控制方面的开发工作。

我们也开设了相关研究生课程，请访问[智慧能源：从概念到实践](https://enpocourses.github.io/enpo811203/)获取更多相关信息。

## 核心能力

- **能源系统仿真引擎**。[元流程仿真引擎Ai4EMetaPSE](https://github.com/ai4energy/Ai4EMetaPSE.jl)，采用基于方程的面向对象建模，基于微分代数方程（DAE），对能源系统组件进行建模，用以对能源系统进行稳态、动态仿真。能够处理连续时间及离散事件问题。

- **能源系统优化引擎**。基于分等级组件化建模方法，使用[JuMP.jl](https://github.com/jump-dev/JuMP.jl)等优化包处理能源系统优化设计问题。

- **能源系统模型预测控制**。基于仿真引擎，利用优化引擎进行参数辨识（模型校准），开发能源系统模型预测控制软件。我们已经写了一个最优控制包[OptControl](https://github.com/ai4energy/OptControl.jl)，相应的文档请点击[这里](https://ai4energy.github.io/OptControl.jl/dev/)。

- **可再生能源组件库**。适用于综合能源系统仿真的[可再生能源组件库（renewable energy library）](https://github.com/ai4energy/Ai4EComponentLib.jl)，持续更新中。

- **综合能源系统虚拟仿真实验室**。适用于综合能源系统仿真的[综合能源系统虚拟仿真实验室](https://github.com/ai4energy/Ai4ELab)，持续更新中。

- **机器学习方法的应用**。

- **智慧能源管理信息系统**。
