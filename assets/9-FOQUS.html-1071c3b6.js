import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as s,a as e,b as l,d as t,f as n}from"./app-ae566971.js";const h={},d=n('<h1 id="foqus" tabindex="-1"><a class="header-anchor" href="#foqus" aria-hidden="true">#</a> FOQUS</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>FOQUS（Framework for Optimization Quantification, Uncertainty, and Surrogates）是一个开源的优化和不确定性分析工具。它旨在为工程师和科学家提供一个集成的框架，用于开展系统优化、参数敏感性分析和不确定性分析。FOQUS提供了一个灵活的、可扩展的平台，用于设计和执行复杂的优化和不确定性分析工作流。</p><h2 id="特点和功能" tabindex="-1"><a class="header-anchor" href="#特点和功能" aria-hidden="true">#</a> 特点和功能</h2><p>FOQUS它的主要特点包括：</p><ol><li><p>多种优化算法支持：FOQUS支持多种优化算法，包括全局优化算法（如遗传算法、粒子群优化）和局部优化算法（如拟牛顿法、共轭梯度法）等。用户可以选择适合自己问题的算法进行优化。</p></li><li><p>参数敏感性分析：FOQUS可以帮助用户分析系统对输入参数的敏感性。通过变化输入参数的值，FOQUS可以评估系统输出的变化情况，从而确定哪些参数对系统性能具有重要影响。</p></li><li><p>不确定性分析：FOQUS支持不确定性分析，可以帮助用户评估系统输出结果的不确定性。通过引入模型不确定性、参数不确定性等，FOQUS可以提供输出结果的概率分布和置信区间。</p></li><li><p>建模和代理模型：FOQUS提供了建模和代理模型的功能，可以帮助用户对复杂系统进行简化和加速。用户可以使用代理模型代替实际系统模型进行优化和分析，从而减少计算开销。</p></li><li><p>可视化和数据分析：FOQUS提供了丰富的可视化工具和数据分析功能，可以帮助用户直观地理解优化和分析结果。用户可以通过图表、曲线和统计分析等方式，深入了解系统的行为和性能。</p></li></ol><h2 id="基础信息" tabindex="-1"><a class="header-anchor" href="#基础信息" aria-hidden="true">#</a> 基础信息</h2>',7),c={href:"https://foqus.readthedocs.io/en/stable/chapt_intro/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/CCSI-Toolset/FOQUS",target:"_blank",rel:"noopener noreferrer"},S=e("li",null,[e("p",null,"开发者：FOQUS是根据美国能源部碳捕获模拟倡议（CCSI）生产的，软件所有者：橡树岭科学与教育研究所（ORISE）、TRIAD国家安全有限责任公司、劳伦斯·利弗莫尔国家安全有限责任公司、加州大学董事会等。")],-1),O=e("li",null,[e("p",null,"起始时间：FOQUS项目的起始时间可以追溯到2018年左右。")],-1),U=e("li",null,[e("p",null,"最后更新时间：截止文档编写，最后更新日期是2023年1月，最后更新的确切时间需要查阅官方网站或源代码仓库的提交历史以获取最新信息。")],-1),_=e("li",null,[e("p",null,"License：Foqus 版权归软件所有者，允许以源代码和二进制形式重新分发和使用。不允许提供任何错误修复、补丁或升级，向任何人提供源代码的特性、功能或性能（“增强功能”）。")],-1),u=n('<h2 id="foqus的系统构成" tabindex="-1"><a class="header-anchor" href="#foqus的系统构成" aria-hidden="true">#</a> FOQUS的系统构成</h2><p>FOQUS（Framework for Optimization Quantification, Uncertainty, and Surrogates）是一个包含多个组件的系统。以下是FOQUS的一般系统构成：</p><ol><li>用户界面（User Interface）：FOQUS提供了一个用户友好的图形界面，使用户能够方便地配置和管理优化、敏感性分析和不确定性分析的任务。用户可以通过界面进行参数设置、数据输入输出、结果可视化等操作。</li><li>优化器（Optimizer）：FOQUS内置了多种优化算法，用于解决参数优化问题。这些算法可以根据用户的选择和需求，自动搜索最优解或近似最优解。FOQUS支持全局优化算法（如遗传算法、粒子群优化）和局部优化算法（如拟牛顿法、共轭梯度法）等。</li><li>敏感性分析器（Sensitivity Analyzer）：FOQUS具备参数敏感性分析的能力。用户可以使用FOQUS进行敏感性分析，评估系统对输入参数的敏感程度。这有助于识别关键参数，了解参数对系统性能的影响，优化设计和决策。</li><li>不确定性分析器（Uncertainty Analyzer）：FOQUS支持不确定性分析，帮助用户评估系统输出结果的不确定性。通过引入模型不确定性和参数不确定性等因素，FOQUS可以提供输出结果的概率分布、置信区间等统计信息。</li><li>代理模型（Surrogate Models）：FOQUS支持建模和代理模型的功能。用户可以使用代理模型来替代实际系统模型进行优化和分析。代理模型是对系统行为的简化和加速模型，可用于减少计算开销，快速评估优化结果。</li><li>数据管理（Data Management）：FOQUS提供数据管理功能，用于管理输入数据、输出数据和中间结果。用户可以导入和导出数据，进行数据预处理和后处理，方便地保存和共享数据。</li><li>可视化和数据分析（Visualization and Data Analysis）：FOQUS提供丰富的可视化工具和数据分析功能。用户可以使用这些工具和功能来直观地理解优化和分析结果，绘制图表、曲线，进行统计分析等。</li></ol>',3),F={href:"https://foqus.readthedocs.io/en/stable/index.html",target:"_blank",rel:"noopener noreferrer"},Q=n('<h2 id="核心库和模块" tabindex="-1"><a class="header-anchor" href="#核心库和模块" aria-hidden="true">#</a> 核心库和模块</h2><ol><li><p>SimSinter 提供了一个包装器，可以在流程模拟器中创建的模型链接到 FOQUS 流程图。</p></li><li><p>FOQUS流程图用于将仿真链接在一起，并将模型变量连接在 流程图上的模拟。FOQUS可以链接来自不同仿真包的模型。</p></li><li><p>模拟通过 Turbine 运行，它管理构建代理所需的多次运行 模型，执行无导数优化或进行不确定性量化 （UQ） 分析。涡轮机提供作业队列功能，并使这些作业能够在 并行使用基于云或群集的计算平台或单个工作站。</p></li><li><p>代理模块可以创建代数代理模型以支持大规模确定性 优化，包括上部结构优化以确定工艺配置。其中之一 可用的代理模型是用于优化的代数模型的自动学习 （阿拉莫）。由于背景知识产权（IP）问题，ALAMO是外部产品。</p></li><li><p>无导数优化 （DFO） 模块可实现无导数（或基于仿真） 直接在FOQUS流程图上链接在一起的过程模型上进行优化。它利用 Excel来计算复杂的目标函数，例如电力成本。</p></li><li><p>UQ模块使不确定性的影响能够在整个系统中传播 模型、要评估的模型的敏感性以及最重要的不确定性来源 确定，以便确定实验资源的优先级以获取其他数据。</p></li><li><p>不确定性优化（OUU）模块结合了DFO和UQ的功能 用于实现基于场景的优化的模块，例如针对一系列操作的优化 场景。</p></li><li><p>实验顺序设计（SDOE）模块目前提供了一种构建灵活 基于用户提供的候选输入点集的空间填充设计。该方法允许 用于构建新设计以及增强现有数据以进行战略性选择 最小化点之间距离的输入组合。该模块的开发是 继续并将很快包括其他设计施工选项。</p></li></ol><h2 id="使用方法极简介绍" tabindex="-1"><a class="header-anchor" href="#使用方法极简介绍" aria-hidden="true">#</a> 使用方法极简介绍</h2><p>使用FOQUS进行优化和不确定性分析的具体步骤可能会因具体的应用和问题而有所不同。下面是一般的使用步骤：</p>',4),f={href:"https://foqus.readthedocs.io/en/stable/chapt_install/index.html",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"定义模型和参数：在FOQUS中，您需要定义您要进行优化或分析的系统模型和相关参数。这包括确定输入参数的范围、目标函数或系统模型的定义等。您可以使用FOQUS提供的界面或配置文件来完成这些定义。",-1),m=e("li",null,"配置优化设置：在FOQUS中，您需要选择适合您问题的优化算法和设置。这包括选择全局优化算法或局部优化算法，设置收敛准则、迭代次数等参数。根据您的具体需求，您可以自定义设置或使用默认设置。",-1),x=e("li",null,"运行优化或分析：一旦您完成了模型和参数的定义，并配置了优化设置，您可以运行FOQUS来执行优化或不确定性分析。FOQUS会根据您的设置和定义，使用适当的算法和方法进行计算，并生成相应的结果。",-1),g=e("li",null,"分析结果：一旦优化或分析过程完成，您可以使用FOQUS提供的可视化工具和数据分析功能来分析结果。这可能包括绘制优化过程的收敛曲线、评估参数敏感性、分析不确定性等。",-1),k={href:"https://foqus.readthedocs.io/en/stable/index.html",target:"_blank",rel:"noopener noreferrer"};function q(I,y){const i=o("ExternalLinkIcon");return r(),s("div",null,[d,e("ul",null,[e("li",null,[e("p",null,[l("项目网址："),e("a",c,[l("https://foqus.readthedocs.io/en/stable/chapt_intro/"),t(i)])])]),e("li",null,[e("p",null,[l("源码网址：FOQUS的源代码托管在GitHub上，可以在以下网址找到："),e("a",p,[l("https://github.com/CCSI-Toolset/FOQUS"),t(i)])])]),S,O,U,_]),u,e("p",null,[l("请注意，以上列出的组件仅是一般的构成，具体的组件和功能可能会根据FOQUS的版本和具体的应用而有所变化。您可以参考"),e("a",F,[l("FOQUS的官方文档"),t(i)]),l("和资料，了解更多关于FOQUS的详细信息和具体的系统构成。")]),Q,e("ol",null,[e("li",null,[l("安装FOQUS：首先，您需要从FOQUS的官方网站或相关的代码托管平台下载和安装FOQUS。安装过程可能因您使用的操作系统和环境而有所不同。请参考"),e("a",f,[l("官方文件"),t(i)]),l("或安装指南以获得详细的安装说明。")]),b,m,x,g]),e("p",null,[l("请注意，以上步骤只是一般指导，具体的步骤和操作可能会因您的具体应用和问题而有所不同。建议您参考"),e("a",k,[l("FOQUS的官方文档"),t(i)]),l("、示例和教程，以获得更详细和针对您问题的指导。")])])}const A=a(h,[["render",q],["__file","9-FOQUS.html.vue"]]);export{A as default};