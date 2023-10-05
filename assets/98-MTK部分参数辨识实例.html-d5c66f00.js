import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-5be717d8.js";const e="/assets/image/06Optimization/DiffEqParamEstim_Li_batter_1.png",p="/assets/image/06Optimization/DiffEqParamEstim_Li_batter_2.png",o="/assets/image/06Optimization/DiffEqParamEstim_Li_batter_3.png",c="/assets/image/06Optimization/DiffEqParamEstim_Li_batter_4.png",i="/assets/image/06Optimization/DiffEqParamEstim_Li_batter_5.png",l="/assets/image/06Optimization/DiffEqParamEstim_Li_batter_6.png",u={},r=t(`<h1 id="mtk部分参数辨识实例" tabindex="-1"><a class="header-anchor" href="#mtk部分参数辨识实例" aria-hidden="true">#</a> MTK部分参数辨识实例</h1><p>!!! tip<br> Contents：MTK模型、优化、DiffEqParamEstim</p><pre><code>Contributor: HY

Email:1171006975@qq.com

如有错误，请批评指正。
</code></pre><p>!!! note<br> DEPE = DiffEqParamEstim.jl(Differential Equation Parameters Estimate)</p><pre><code>[DiffEqParamEstim.jl](https://diffeqparamestim.sciml.ai/dev/)是计算微分方程参数估计的软件包。
</code></pre><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>在进行参数辨识的时候，我们往往会遇到一个问题——实验只能测一到两个关键数据，例如温度、电压电流等。但在咱们的<code>ODEsystem</code>中，状态量<code>states</code>往往不止一两个（甚至有几十个），而在<code>DiffEqParamEstim.jl</code>包中，构建损失函数时要求我们导入所有<code>states</code>的实验数据，显然咱们是办不到的。这个时候，咱们有两种解决方案：1.自己重构损失函数，这个方法显然是最高级的，是真正的治标又治本的方法，但是重构损失函数对初学者可能不够友好（比如说我）。因此，在这里给大家介绍第2种解决方案：引入加权值<code>weight</code>，无法通过实验测得的数据，我们可以将其的<code>weight</code>设为0，其他能测得的<code>states</code>设为1。这样，我们相当于重构了损失函数，程序只会根据我们“指定”的那些数据进行参数辨识，效果跟方案1是一样的。</p><p><strong>下面以三星18650锂电池为例，对锂电池的模型参数进行辨识</strong>。</p><h2 id="等效电路建模" tabindex="-1"><a class="header-anchor" href="#等效电路建模" aria-hidden="true">#</a> 等效电路建模</h2><p>基于ModelingToolkit，建立Thevenin二阶RC等效电路模型，如下图所示。<br> 该等效电路模型是由开路电压Uoc，欧姆内阻R0和两个RC网络结构组成，U1、U2分别为R1、R2的端电压，UT表示电池的端电压。<br><img src="`+e+`" alt="图1" loading="lazy"></p><h2 id="构建组件" tabindex="-1"><a class="header-anchor" href="#构建组件" aria-hidden="true">#</a> 构建组件</h2><p>组件总共有两个，一个是锂电池组件，用来模拟锂电池的伏安特性，另一个是充放电控制器组件，用来模拟锂电池的恒流充放电。</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">using</span> DiffEqParamEstim<span class="token punctuation">,</span> DifferentialEquations<span class="token punctuation">,</span> Random<span class="token punctuation">,</span> ModelingToolkit<span class="token punctuation">,</span> PlotlyJS
<span class="token keyword">using</span> OptimizationOptimJL
<span class="token keyword">using</span> IfElse<span class="token punctuation">:</span> ifelse
<span class="token keyword">import</span> RecursiveArrayTools<span class="token punctuation">.</span>VectorOfArray
@variables t
∂ <span class="token operator">=</span> Differential<span class="token punctuation">(</span>t<span class="token punctuation">)</span>
@connector <span class="token keyword">function</span> Pin<span class="token punctuation">(</span><span class="token punctuation">;</span> name<span class="token punctuation">)</span>
    sts <span class="token operator">=</span> @variables v<span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1.0</span> i<span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1.0</span> <span class="token punctuation">[</span>connect <span class="token operator">=</span> Flow<span class="token punctuation">]</span>
    ODESystem<span class="token punctuation">(</span>Equation<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> t<span class="token punctuation">,</span> sts<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> name<span class="token operator">=</span>name<span class="token punctuation">)</span>
<span class="token keyword">end</span>
<span class="token keyword">function</span> OnePort<span class="token punctuation">(</span><span class="token punctuation">;</span> name<span class="token punctuation">)</span>
    @named p <span class="token operator">=</span> Pin<span class="token punctuation">(</span><span class="token punctuation">)</span>
    @named n <span class="token operator">=</span> Pin<span class="token punctuation">(</span><span class="token punctuation">)</span>
    sts <span class="token operator">=</span> @variables v<span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1.0</span> i<span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1.0</span>
    eqs <span class="token operator">=</span> <span class="token punctuation">[</span>
        v <span class="token operator">~</span> p<span class="token punctuation">.</span>v <span class="token operator">-</span> n<span class="token punctuation">.</span>v
        <span class="token number">0</span> <span class="token operator">~</span> p<span class="token punctuation">.</span>i <span class="token operator">+</span> n<span class="token punctuation">.</span>i
        i <span class="token operator">~</span> p<span class="token punctuation">.</span>i
    <span class="token punctuation">]</span>
    compose<span class="token punctuation">(</span>ODESystem<span class="token punctuation">(</span>eqs<span class="token punctuation">,</span> t<span class="token punctuation">,</span> sts<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> name<span class="token operator">=</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> p<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token keyword">end</span>
<span class="token keyword">function</span> OnePort_key<span class="token punctuation">(</span><span class="token punctuation">;</span> name<span class="token punctuation">,</span> v_start <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">,</span> i_start <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">)</span>
    @named p <span class="token operator">=</span> Pin<span class="token punctuation">(</span><span class="token punctuation">)</span>
    @named n <span class="token operator">=</span> Pin<span class="token punctuation">(</span><span class="token punctuation">)</span>
    sts <span class="token operator">=</span> @variables v<span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token operator">=</span> v_start <span class="token punctuation">[</span>irreducible<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">]</span> i<span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token operator">=</span> i_start <span class="token punctuation">[</span>irreducible<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">]</span>
    eqs <span class="token operator">=</span> <span class="token punctuation">[</span>
        v <span class="token operator">~</span> p<span class="token punctuation">.</span>v <span class="token operator">-</span> n<span class="token punctuation">.</span>v
        <span class="token number">0</span> <span class="token operator">~</span> p<span class="token punctuation">.</span>i <span class="token operator">+</span> n<span class="token punctuation">.</span>i
        i <span class="token operator">~</span> p<span class="token punctuation">.</span>i
    <span class="token punctuation">]</span>
    compose<span class="token punctuation">(</span>ODESystem<span class="token punctuation">(</span>eqs<span class="token punctuation">,</span> t<span class="token punctuation">,</span> sts<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> name<span class="token operator">=</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> p<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token keyword">end</span>
<span class="token keyword">function</span> Ground<span class="token punctuation">(</span><span class="token punctuation">;</span> name<span class="token punctuation">)</span>
    @named g <span class="token operator">=</span> Pin<span class="token punctuation">(</span><span class="token punctuation">)</span>
    eqs <span class="token operator">=</span> <span class="token punctuation">[</span>g<span class="token punctuation">.</span>v <span class="token operator">~</span> <span class="token number">0</span><span class="token punctuation">]</span>
    compose<span class="token punctuation">(</span>ODESystem<span class="token punctuation">(</span>eqs<span class="token punctuation">,</span> t<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> name<span class="token operator">=</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> g<span class="token punctuation">)</span>
<span class="token keyword">end</span>
<span class="token keyword">function</span> Lithium_ion_batteries<span class="token punctuation">(</span><span class="token punctuation">;</span> name<span class="token punctuation">,</span> OCV<span class="token operator">=</span><span class="token number">3.9998</span><span class="token punctuation">,</span> R0<span class="token operator">=</span><span class="token number">0.029031</span><span class="token punctuation">,</span> R1<span class="token operator">=</span><span class="token number">0.00994</span><span class="token punctuation">,</span> R2<span class="token operator">=</span><span class="token number">0.01408</span><span class="token punctuation">,</span> C1<span class="token operator">=</span><span class="token number">147.462</span><span class="token punctuation">,</span> C2<span class="token operator">=</span><span class="token number">902.911</span><span class="token punctuation">)</span>
    @named oneport <span class="token operator">=</span> OnePort<span class="token punctuation">(</span><span class="token punctuation">)</span>
    @unpack v<span class="token punctuation">,</span> i <span class="token operator">=</span> oneport
    sts <span class="token operator">=</span> @variables v_c1<span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0.001</span> v_c2<span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0.001</span> v_b<span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1.0</span> i_b<span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0.0</span>
    ps <span class="token operator">=</span> @parameters<span class="token punctuation">(</span>
        R0 <span class="token operator">=</span> R0<span class="token punctuation">,</span>
        R1 <span class="token operator">=</span> R1<span class="token punctuation">,</span>
        R2 <span class="token operator">=</span> R2<span class="token punctuation">,</span>
        C1 <span class="token operator">=</span> C1<span class="token punctuation">,</span>
        C2 <span class="token operator">=</span> C2<span class="token punctuation">,</span>
        OCV <span class="token operator">=</span> OCV<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    eqs <span class="token operator">=</span> <span class="token punctuation">[</span>
        OCV <span class="token operator">~</span> i_b <span class="token operator">*</span> R0 <span class="token operator">+</span> v_c1 <span class="token operator">+</span> v_c2 <span class="token operator">+</span> v_b
        i_b <span class="token operator">~</span> C1 <span class="token operator">*</span> ∂<span class="token punctuation">(</span>v_c1<span class="token punctuation">)</span> <span class="token operator">+</span> v_c1 <span class="token operator">/</span> R1
        i_b <span class="token operator">~</span> C2 <span class="token operator">*</span> ∂<span class="token punctuation">(</span>v_c2<span class="token punctuation">)</span> <span class="token operator">+</span> v_c2 <span class="token operator">/</span> R2
        v <span class="token operator">~</span> v_b
        i <span class="token operator">~</span> <span class="token operator">-</span>i_b
    <span class="token punctuation">]</span>
    <span class="token keyword">return</span> extend<span class="token punctuation">(</span>ODESystem<span class="token punctuation">(</span>eqs<span class="token punctuation">,</span> t<span class="token punctuation">,</span> sts<span class="token punctuation">,</span> ps<span class="token punctuation">;</span> name<span class="token operator">=</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> oneport<span class="token punctuation">)</span>
<span class="token keyword">end</span>
<span class="token keyword">function</span> charge_controller<span class="token punctuation">(</span><span class="token punctuation">;</span> name<span class="token punctuation">)</span>
    @named oneport <span class="token operator">=</span> OnePort_key<span class="token punctuation">(</span><span class="token punctuation">)</span>
    @unpack v<span class="token punctuation">,</span> i <span class="token operator">=</span> oneport
    equa <span class="token operator">=</span> ifelse<span class="token punctuation">(</span>t <span class="token operator">&lt;=</span> <span class="token number">10.0</span><span class="token punctuation">,</span><span class="token number">16.0</span><span class="token punctuation">,</span>ifelse<span class="token punctuation">(</span>t <span class="token operator">&lt;=</span> <span class="token number">40.0</span><span class="token punctuation">,</span><span class="token number">0.0</span><span class="token punctuation">,</span>ifelse<span class="token punctuation">(</span>t <span class="token operator">&lt;=</span> <span class="token number">50.0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">16.0</span><span class="token punctuation">,</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    eqs <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token operator">~</span> equa<span class="token punctuation">]</span>
    <span class="token keyword">return</span> extend<span class="token punctuation">(</span>ODESystem<span class="token punctuation">(</span>eqs<span class="token punctuation">,</span> t<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> name<span class="token operator">=</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> oneport<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不难发现，系统一共定义有6个参数，分别是欧姆内阻<code>R0</code>,两个RC支路所对应的<code>R1,R2,C1,C2</code>以及开路电压<code>OCV</code>。</p><hr><p>然后，通过连接函数，组建系统</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>@named ground <span class="token operator">=</span> Ground<span class="token punctuation">(</span><span class="token punctuation">)</span>
@named cg <span class="token operator">=</span> charge_controller<span class="token punctuation">(</span><span class="token punctuation">)</span>
@named batter <span class="token operator">=</span> Lithium_ion_batteries<span class="token punctuation">(</span><span class="token punctuation">)</span>
eqs <span class="token operator">=</span> <span class="token punctuation">[</span>
    connect<span class="token punctuation">(</span>batter<span class="token punctuation">.</span>p<span class="token punctuation">,</span> cg<span class="token punctuation">.</span>p<span class="token punctuation">)</span>
    connect<span class="token punctuation">(</span>batter<span class="token punctuation">.</span>n<span class="token punctuation">,</span> cg<span class="token punctuation">.</span>n<span class="token punctuation">,</span> ground<span class="token punctuation">.</span>g<span class="token punctuation">)</span>
<span class="token punctuation">]</span>

@named OdeFun <span class="token operator">=</span> ODESystem<span class="token punctuation">(</span>eqs<span class="token punctuation">,</span> t<span class="token punctuation">)</span>
@named model <span class="token operator">=</span> compose<span class="token punctuation">(</span>OdeFun<span class="token punctuation">,</span> <span class="token punctuation">[</span>batter<span class="token punctuation">,</span> cg<span class="token punctuation">,</span> ground<span class="token punctuation">]</span><span class="token punctuation">)</span>
sys <span class="token operator">=</span> structural_simplify<span class="token punctuation">(</span>model<span class="token punctuation">)</span>
u0 <span class="token operator">=</span> <span class="token punctuation">[</span>
    batter<span class="token punctuation">.</span>v_c1 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">0.024058864</span>
    batter<span class="token punctuation">.</span>v_c2 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">0.002594792</span>
    cg<span class="token punctuation">.</span>v <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">3.928902637</span>
    cg<span class="token punctuation">.</span>i <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">0</span>
    batter<span class="token punctuation">.</span>R0 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">0.037517357</span>
    batter<span class="token punctuation">.</span>R1 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">0.020913201</span>
    batter<span class="token punctuation">.</span>R2 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">0.006915906</span>
    batter<span class="token punctuation">.</span>C1 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">4636.08469</span>
    batter<span class="token punctuation">.</span>C2 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">1292.103841</span>
    batter<span class="token punctuation">.</span>OCV <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">3.955556293</span>
<span class="token punctuation">]</span>
prob <span class="token operator">=</span> ODEProblem<span class="token punctuation">(</span>sys<span class="token punctuation">,</span> u0<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">40.0</span><span class="token punctuation">,</span> <span class="token number">60.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入实验数据" tabindex="-1"><a class="header-anchor" href="#导入实验数据" aria-hidden="true">#</a> 导入实验数据</h2><p>导入实验数据，并对数据的格式进行一定的处理。</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>time <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token number">40.98797751</span>
    <span class="token number">42.00601125</span>
    <span class="token number">42.99980609</span>
    <span class="token number">43.99360093</span>
    <span class="token number">45.01163467</span>
    <span class="token number">46.00542951</span>
    <span class="token number">46.99922436</span>
    <span class="token number">47.9930192</span>
    <span class="token number">50.99864262</span>
    <span class="token number">53.0104712</span>
    <span class="token number">55.99185573</span><span class="token punctuation">]</span>
real_data <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token number">4.511920324</span>
    <span class="token number">4.536819172</span>
    <span class="token number">4.551011516</span>
    <span class="token number">4.570183629</span>
    <span class="token number">4.57665733</span>
    <span class="token number">4.5881108</span>
    <span class="token number">4.593588547</span>
    <span class="token number">4.598817305</span>
    <span class="token number">3.985060691</span>
    <span class="token number">3.94746343</span>
    <span class="token number">3.910364146</span><span class="token punctuation">]</span>

randomized <span class="token operator">=</span> VectorOfArray<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> real_data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">:</span>length<span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> convert<span class="token punctuation">(</span>Array<span class="token punctuation">,</span> randomized<span class="token punctuation">)</span>

weight <span class="token operator">=</span> VectorOfArray<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">:</span>length<span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
data_weight <span class="token operator">=</span> convert<span class="token punctuation">(</span>Array<span class="token punctuation">,</span> weight<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本实例的数据通过getdata软件从文献中扣取。</p><p>系统变量有四个，分别为<code>batter.v_c1</code>,<code>batter.v_c2</code>,<code>cg.v</code>,<code>cg.i</code>。其中<code>cg.v</code>的数据通过实验获得，其权重值<code>weight</code>设为1，其他的变量权重值设为0。</p><p>系统参数有六个，分别为<code>batter.R0</code>,<code>batter.R1</code>,<code>batter.R2</code>,<code>batter.C1</code>,<code>batter.C2</code>,<code>batter.OCV</code>。</p><p>最终生成了<code>data</code>和<code>data_weight</code>矩阵，分别代表实验数据和相应权重值。</p><figure><img src="`+p+`" alt="图2" tabindex="0" loading="lazy"><figcaption>图2</figcaption></figure><p>在不知道参数的顺序时，可以使用parameters和states函数查看系统参数。</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>parameters<span class="token punctuation">(</span>sys<span class="token punctuation">)</span>
states<span class="token punctuation">(</span>sys<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建损失函数并求解" tabindex="-1"><a class="header-anchor" href="#构建损失函数并求解" aria-hidden="true">#</a> 构建损失函数并求解</h2><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>obj <span class="token operator">=</span> build_loss_objective<span class="token punctuation">(</span>prob<span class="token punctuation">,</span> Rosenbrock23<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> L2Loss<span class="token punctuation">(</span>time<span class="token punctuation">,</span> data<span class="token punctuation">,</span> data_weight<span class="token operator">=</span>data_weight<span class="token punctuation">)</span><span class="token punctuation">,</span> maxiters<span class="token operator">=</span><span class="token number">100000</span><span class="token punctuation">)</span>

result <span class="token operator">=</span> OptimizationOptimJL<span class="token punctuation">.</span>optimize<span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">0.037517357</span><span class="token punctuation">,</span> <span class="token number">0.020913201</span><span class="token punctuation">,</span> <span class="token number">0.006915906</span><span class="token punctuation">,</span> <span class="token number">4636.08469</span><span class="token punctuation">,</span> <span class="token number">1292.103841</span><span class="token punctuation">,</span> <span class="token number">3.955556293</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
result<span class="token punctuation">.</span>minimizer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数辨识结果为：</p><figure><img src="`+o+`" alt="图3" tabindex="0" loading="lazy"><figcaption>图3</figcaption></figure><p>至此，锂电池充电阶段的参数辨识完毕。同理可辨识放电阶段的参数。</p><p>放电阶段实验数据：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>time <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token number">1.502811712</span>	
    <span class="token number">3.005623424</span>
    <span class="token number">4.508435137</span>	
    <span class="token number">6.011246849</span>	
    <span class="token number">7.489819663</span>	
    <span class="token number">11.9982548</span>	
    <span class="token number">13.50106651</span>	
    <span class="token number">15.00387822</span>	
    <span class="token number">16.50668994</span>	
    <span class="token number">18.00950165</span>	
    <span class="token number">19.48807446</span>	
    <span class="token number">20.99088617</span>	
    <span class="token number">22.49369789</span>	
    <span class="token number">23.9965096</span>	
    <span class="token number">25.49932131</span>	
    <span class="token number">27.00213302</span>	
    <span class="token number">28.50494474</span>
    <span class="token number">30.00775645</span>	
    <span class="token number">31.51056816</span>	
    <span class="token number">32.98914097</span>
    <span class="token number">34.49195269</span>
    <span class="token number">35.9947644</span><span class="token punctuation">]</span>
real_data <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token number">3.335698724</span>
    <span class="token number">3.31503268</span>
    <span class="token number">3.295860566</span>
    <span class="token number">3.277933396</span>
    <span class="token number">3.266977902</span>
    <span class="token number">3.864799253</span>
    <span class="token number">3.878244631</span>
    <span class="token number">3.880734516</span>
    <span class="token number">3.888702148</span>
    <span class="token number">3.897167756</span>
    <span class="token number">3.898910675</span>
    <span class="token number">3.902645503</span>
    <span class="token number">3.908372238</span>
    <span class="token number">3.911858077</span>
    <span class="token number">3.915094927</span>
    <span class="token number">3.918082789</span>
    <span class="token number">3.91957672</span>
    <span class="token number">3.926797386</span>
    <span class="token number">3.923311547</span>
    <span class="token number">3.92107065</span>
    <span class="token number">3.92107065</span>
    <span class="token number">3.926299409</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>放电阶段参数辨识结果为：</p><figure><img src="`+c+`" alt="图4" tabindex="0" loading="lazy"><figcaption>图4</figcaption></figure><h1 id="模型验证" tabindex="-1"><a class="header-anchor" href="#模型验证" aria-hidden="true">#</a> 模型验证</h1><p>当放电阶段和充电阶段的模型参数全部辨识出来了以后，我们再将模型参数重新带回<code>ODEsystem</code>中，验证一下辨识结果是否有效。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>continuous_events = [
    [t ~ 40.0] =&gt; [batter.R0 ~ 0.037203619
        batter.R1 ~ 0.062205413
        batter.R2 ~ 0.007078411
        batter.C1 ~ 6373.89753
        batter.C2 ~ 407.3465496
        batter.OCV ~ 3.902760964]
]

@named OdeFun = ODESystem(eqs,t,continuous_events=continuous_events)
@named model = compose(OdeFun, [batter, cg, ground])
sys = structural_simplify(model)
u0 = [
    batter.v_c1 =&gt; 0.0
    batter.v_c2 =&gt; 0.0
    cg.v =&gt; 0.0
    cg.i =&gt; 0.0
    batter.R0 =&gt; 0.037517357
    batter.R1 =&gt; 0.020913201
    batter.R2 =&gt; 0.006915906
    batter.C1 =&gt; 4636.08469
    batter.C2 =&gt; 1292.103841
    batter.OCV =&gt; 3.955556293
]
prob = ODEProblem(sys, u0, (0.0, 60.0))
sol = solve(prob)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比锂电池的实验数据和仿真数据，可以得到锂电池模型的端电压响应拟合曲线与实际端电压响应曲线的误差，如下图所示。</p><figure><img src="`+i+'" alt="图5" tabindex="0" loading="lazy"><figcaption>图5</figcaption></figure><figure><img src="'+l+'" alt="图6" tabindex="0" loading="lazy"><figcaption>图6</figcaption></figure><p>可以看到，各点的拟合电压曲线误差范围均在约±0.006 V以内，即0.19%。电压最大误差为0.0059 V，平均误差为0.0021 V。电压误差大小远远较锂电池平台电压的变化范围小。因此从精度上看，模型误差尚在可接受的范围之内。</p><p>!!! note<br> 该参数辨识仍然是优化问题的子集，选择不同的初值很可能得到不同的结果。<br> 完整代码可以在<code>/src</code>目录下查看</p>',44),d=[r];function k(m,v){return s(),a("div",null,d)}const _=n(u,[["render",k],["__file","98-MTK部分参数辨识实例.html.vue"]]);export{_ as default};
