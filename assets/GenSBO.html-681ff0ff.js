import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as l,a as n,b as s,d as e,f as t}from"./app-6b5c54ef.js";const c="/assets/image/06Optimization/GenSBO1.jpg",u="/assets/image/06Optimization/GenSBO2.jpg",r="/assets/image/06Optimization/GenSBO3.jpg",d="/assets/image/06Optimization/GenSBO4.jpg",m="/assets/image/06Optimization/GenSBO5.jpg",k="/assets/image/06Optimization/GenSBO6.jpg",v={},b=n("h1",{id:"gensbo—a-general-simulation-based-optimizer",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gensbo—a-general-simulation-based-optimizer","aria-hidden":"true"},"#"),s(" GenSBO—a General "),n("strong",null,"S"),s("imulation "),n("strong",null,"B"),s("ased "),n("strong",null,"O"),s("ptimizer")],-1),g=n("h2",{id:"gensbo简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gensbo简介","aria-hidden":"true"},"#"),s(" GenSBO简介")],-1),h={href:"https://github.com/ai4energy/gensbo",target:"_blank",rel:"noopener noreferrer"},_=t('<p>GenSBO 支持单目标优化和多目标优化，并分别实现了基于改进简化小波粒子群算法的单目标优化引擎和基于改进小波全面学习粒子群算法的多目标优化引擎。该优化器还能够处理混合整数非线性优化问题，并且允许用户方便地自定义目标函数。</p><p>通过使用 GenSBO，用户可以灵活地进行面向仿真的优化，将智能优化算法与仿真模型相结合，实现高效、可靠的优化方案，从而优化设计和决策过程。</p><h2 id="模块组成" tabindex="-1"><a class="header-anchor" href="#模块组成" aria-hidden="true">#</a> 模块组成</h2><ol><li><strong>问题定义模块</strong> (<code>Problem</code>): 该模块用于定义优化问题，包括目标函数、约束函数以及变量的类型和范围等信息。</li><li><strong>优化评估模块</strong> (<code>UserFunction</code>): 用于评估优化问题的目标函数和约束函数值。它与实际的优化问题相关联，通过调用仿真模拟器来获取当前方案的评价值。</li><li><strong>优化算法模块</strong> (<code>PSO</code>): 优化算法模块实现了多种优化算法，如粒子群算法（PSO）。用户可以根据需要选择合适的优化算法来解决特定的优化问题。</li><li><strong>GenSBO主程序</strong> (<code>GenSBO</code>): GenSBO主程序是整个优化系统的核心部分。它将问题定义模块、仿真模拟器和优化算法模块进行整合，并负责执行优化过程。</li><li><strong>结果保存和可视化模块</strong>: GenSBO支持将优化结果保存为多种格式，如 np.array 和 xls。此外，它还提供了可视化功能，可以绘制寻优历史图和帕累托前沿图。</li></ol><p>通过这些组成部分，GenSBO实现了面向仿真的优化功能，将智能优化算法与仿真模拟器相结合，以获得高效、可靠的优化方案结果。用户可以根据自己的需求，选择合适的目标函数、约束函数、变量类型以及优化算法来解决各类优化问题。</p><h2 id="算法组成" tabindex="-1"><a class="header-anchor" href="#算法组成" aria-hidden="true">#</a> 算法组成</h2><p>GenSBO结合了SPSO算法（粒子群优化算法）和PSOWM算法（粒子群优化算法）</p><h3 id="对于单目标优化" tabindex="-1"><a class="header-anchor" href="#对于单目标优化" aria-hidden="true">#</a> 对于单目标优化</h3><p>在传统的PSO算法中，粒子通过维护位置和速度两个信息来进行搜索。在每次迭代中，粒子根据自身和邻域最优解的信息，更新自己的速度和位置。这样的设计可以使得粒子向着较优解的方向移动，逐渐收敛到全局最优解或局部最优解。</p><p>速度和位置更新公式：</p><figure><img src="'+c+'" alt="GenSBO1" tabindex="0" loading="lazy"><figcaption>GenSBO1</figcaption></figure><p>SPSO算法的改进了PSO算法，它只保留粒子的位置更新公式，省略速度的更新，减少了计算成本；同时引入反向搜索机制，增强了算法的全局寻优能力，可以更好地找到全局最优解。</p><p>反向搜索公式：</p><figure><img src="'+u+'" alt="GenSBO2" tabindex="0" loading="lazy"><figcaption>GenSBO2</figcaption></figure><figure><img src="'+r+'" alt="GenSBO3" tabindex="0" loading="lazy"><figcaption>GenSBO3</figcaption></figure><p>PSOWM算法引入小波变异操作。在每一次迭代过程中，以一定的概率对部分粒子的位置进行小波变异。这个小波变异操作会在当前位置附近产生一个随机的扰动，从而增加了粒子的多样性和随机性。</p><p>小波变异公式：</p><figure><img src="'+d+'" alt="GenSBO4" tabindex="0" loading="lazy"><figcaption>GenSBO4</figcaption></figure><figure><img src="'+m+'" alt="GenSBO5" tabindex="0" loading="lazy"><figcaption>GenSBO5</figcaption></figure><figure><img src="'+k+'" alt="GenSBO6" tabindex="0" loading="lazy"><figcaption>GenSBO6</figcaption></figure><p>通过这种方式，SPSO算法和PSOWM算法的结合使GenSBO既保留了传统PSO的粒子群协作和学习的特性，又提供了运算速度，增强了全局寻优能力，增加了算法的探索性和多样性。这样一种改进可以提高算法在复杂优化问题中的表现，并有可能找到更优的解。</p><h3 id="对于多目标优化" tabindex="-1"><a class="header-anchor" href="#对于多目标优化" aria-hidden="true">#</a> 对于多目标优化</h3><p>对于多目标优化，GenSBO采取了基于MOPSO算法（多目标粒子群优化算法）的CLPSOWM算法（小波粒子群优化算法）</p><p>MOPSO算法相比于PSO算法，它是在多个目标函数下寻找一组非劣解（Pareto前沿）用于解决多目标优化问题，研究者可以根据自己的需求选择最合适的解。其适应度函数是一个多目标函数，它衡量解向量在多个目标下的优劣程度。</p><p>总的来说，MOPSO算法是PSO的扩展，用于解决多目标优化问题。MOPSO考虑了多个目标函数下的优化，并寻找一组非劣解来提供决策者多样的选择。</p><p>而CLPSOWM算法是对MOPSO算法的改进，它对位置信息增加小波变异操作，增加粒子的多样性和随机性。</p><h3 id="约束处理" tabindex="-1"><a class="header-anchor" href="#约束处理" aria-hidden="true">#</a> 约束处理</h3><p>GenSBO有普通罚函数方法和Oracle罚函数法可供选择。</p><p>普通罚函数是一种在优化问题中常用的约束处理方法，用于将含约束的优化问题转化为无约束的优化问题。在普通罚函数中，通过在目标函数中添加罚项来惩罚违反约束条件的解，从而将约束条件考虑进优化过程中。</p><p>Oracle罚函数是一种使用Oracle模型（也称为信赖域模型）的罚函数方法。在这种方法中，使用罚函数来惩罚违反约束的解，并在优化过程中使用Oracle模型来选择罚因子。Oracle模型是用于近似代替原始目标函数的模型，它在当前解附近进行局部逼近。通过使用Oracle模型来确定罚因子，可以更好地平衡罚函数的影响，从而提高优化的效率和稳定性。</p><h2 id="算法流程" tabindex="-1"><a class="header-anchor" href="#算法流程" aria-hidden="true">#</a> 算法流程</h2><ol><li>设置算法参数；</li><li>初始化粒子位置；</li><li>评价粒子的适应值；</li><li>更新粒子个体历史最优和全局最优信息；</li><li>执行小波变异操作；</li><li>按SPSO公式更新粒子的位置；</li><li>重复（3）、（4）、（5）、（6），直到满足收敛条件。</li></ol><h2 id="gensbo的使用" tabindex="-1"><a class="header-anchor" href="#gensbo的使用" aria-hidden="true">#</a> GenSBO的使用</h2><p>GenSBO只需要在python下载安装gensbo包即可，gensbo包的使用包含</p><ul><li>导入所需模块</li><li>编写变量类型</li><li>确定目标函数和约束函数</li><li>设置PSO优化算法参数</li><li>运行寻优模块</li></ul>',35),f={href:"https://github.com/ai4energy/gensbo/tree/main/examples/user_function",target:"_blank",rel:"noopener noreferrer"},y=t(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># pip 安装</span>
pip install gensbo
<span class="token comment"># 下载代码</span>
python setup<span class="token punctuation">.</span>py install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以用pip 安装命令来安装它，通过输入上述代码，下载安装gensbo包。</p><h3 id="导入所需模块" tabindex="-1"><a class="header-anchor" href="#导入所需模块" aria-hidden="true">#</a> 导入所需模块</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#从sys模块中导入path</span>
<span class="token keyword">from</span> sys <span class="token keyword">import</span> path
path<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;..\\\\..\\\\&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#导入gensbo模块</span>
<span class="token keyword">from</span> gensbo<span class="token punctuation">.</span>gensbo <span class="token keyword">import</span> GenSBO
<span class="token keyword">from</span> gensbo<span class="token punctuation">.</span>core <span class="token keyword">import</span> Problem
<span class="token keyword">from</span> gensbo<span class="token punctuation">.</span>simulators<span class="token punctuation">.</span>userfunction <span class="token keyword">import</span> UserFunction
<span class="token keyword">from</span> gensbo<span class="token punctuation">.</span>optimizers<span class="token punctuation">.</span>pso <span class="token keyword">import</span> PSO

<span class="token comment">#导入 NumPy 库</span>
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编写变量类型" tabindex="-1"><a class="header-anchor" href="#编写变量类型" aria-hidden="true">#</a> 编写变量类型</h3><p>使用 Problem 模块定义您的优化问题。您需要指定变量的类型（连续、离散等）、变量的范围、约束函数以及目标函数。同时，您可以选择性地为变量提供初始值。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 创建问题实例</span>
problem <span class="token operator">=</span> Problem<span class="token punctuation">(</span><span class="token string">&quot;function_name&quot;</span><span class="token punctuation">)</span>

problem<span class="token punctuation">.</span>_TotalNumVar <span class="token operator">=</span> <span class="token number">5</span>         <span class="token comment"># 总变量数</span>
problem<span class="token punctuation">.</span>_TotalNumConstraint <span class="token operator">=</span> <span class="token number">3</span>  <span class="token comment"># 总约束数</span>
problem<span class="token punctuation">.</span>_NumObjFunc <span class="token operator">=</span> <span class="token number">1</span>	         <span class="token comment"># 总目标函数数(1：单目标优化;  &gt;=2：多目标优化)</span>

<span class="token comment"># 添加变量</span>
problem<span class="token punctuation">.</span>add_var<span class="token punctuation">(</span><span class="token string">&quot;x1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;continuous&quot;</span><span class="token punctuation">,</span> lowbound<span class="token operator">=</span><span class="token operator">-</span><span class="token number">15.0</span><span class="token punctuation">,</span> upbound<span class="token operator">=</span><span class="token number">15.0</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>      <span class="token comment"># 连续变量&quot;continuous&quot;</span>
problem<span class="token punctuation">.</span>add_var<span class="token punctuation">(</span><span class="token string">&quot;x2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;discrete&quot;</span><span class="token punctuation">,</span> lowbound<span class="token operator">=</span><span class="token operator">-</span><span class="token number">5.0</span><span class="token punctuation">,</span> upbound<span class="token operator">=</span><span class="token number">9.0</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>             <span class="token comment"># 离散连续整型变量&quot;discrete&quot;</span>
problem<span class="token punctuation">.</span>add_var<span class="token punctuation">(</span><span class="token string">&quot;x3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;discrete_disconti&quot;</span><span class="token punctuation">,</span> 	<span class="token builtin">set</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 	value<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token comment"># 离散非连续变量&quot;discrete_disconti&quot;(从传入取值集合set中取值)</span>
problem<span class="token punctuation">.</span>add_var<span class="token punctuation">(</span><span class="token string">&quot;x4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;binary&quot;</span><span class="token punctuation">,</span> lowbound<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> upbound<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>                    <span class="token comment"># 二元整型变量&quot;binary&quot;</span>

<span class="token comment">#传入变量初始值</span>
if_batch_add_var_ini <span class="token operator">=</span> <span class="token boolean">True</span>        <span class="token comment">#是否批量传入变量初始值</span>
<span class="token keyword">if</span> if_batch_add_var_ini <span class="token operator">==</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
     <span class="token comment"># 加载上次寻优导出的可行解</span>
    var_ini <span class="token operator">=</span> np<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&#39;%s_so.npy&#39;</span><span class="token operator">%</span>name<span class="token punctuation">,</span>allow_pickle<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>  
    problem<span class="token punctuation">.</span>batch_add_var_ini<span class="token punctuation">(</span>var_ini<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：</p><ol><li><p>lowbound,upbound为变量最大值与最小值</p></li><li><p>初值value的选取应尽可能有助于提供最优解的信息，否则应将其设为‘None’（建议均设为‘None’）请谨慎使用</p></li><li><p>在多目标优化中，通过设置某已知非支配解作为初值，同时减小寻优代数（‘step_max’）或增大外部档案容量（‘pareto_size’），可以在较短时间内获得该解周围的详细非支配解信息。</p></li><li><p>导入值支持 list 和 np.array 格式</p></li><li><p><code>var_ini = np.load(&#39;%s_so.npy&#39;%name, allow_pickle=True)[0][-1]</code>:</p><p><code>np.load()</code>函数用于从<code>.npy</code>文件中加载数据，根据文件名<code>&#39;%s_so.npy&#39; % name</code>加载上次寻优导出的可行解，参数<code>allow_pickle=True</code>表示允许加载包含Python对象的<code>.npy</code>文件。</p></li><li><p>每个解向量初值中变量顺序应与添加变量顺序一致（与寻优结果导出的解向量中变量顺序相同）</p></li></ol><h3 id="定义优化问题-目标函数和约束函数" tabindex="-1"><a class="header-anchor" href="#定义优化问题-目标函数和约束函数" aria-hidden="true">#</a> 定义优化问题（目标函数和约束函数）</h3><p>在 <code>problem_function</code> 函数中添加目标函数和约束函数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 添加目标函数和约束函数</span>
<span class="token keyword">def</span> <span class="token function">problem_function</span><span class="token punctuation">(</span>varset<span class="token punctuation">,</span>if_cal_cons_only<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    添加目标函数和约束函数
    :param varset: 变量集,字典（&#39;var_name&#39;:value）
    :param if_cal_cons_only：布尔值，是否只计算约束函数值而不计算评价函数值，用于产生可行解
    :return: 目标函数值list、约束值list，参考值flag
    &quot;&quot;&quot;</span>
    objfunc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>problem<span class="token punctuation">.</span>_NumObjFunc<span class="token punctuation">)</span><span class="token punctuation">]</span>
    constraint <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>problem<span class="token punctuation">.</span>_TotalNumConstraint<span class="token punctuation">)</span><span class="token punctuation">]</span>

    <span class="token comment"># 给变量名赋值（x1 = value)</span>
    <span class="token builtin">globals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span>varset<span class="token punctuation">)</span>

    <span class="token keyword">if</span> if_cal_cons_only <span class="token operator">==</span> <span class="token boolean">False</span><span class="token punctuation">:</span>
        <span class="token comment"># 添加目标函数</span>
        objfunc<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token punctuation">(</span><span class="token operator">-</span> x1 <span class="token operator">*</span> np<span class="token punctuation">.</span>cos<span class="token punctuation">(</span>np<span class="token punctuation">.</span>pi <span class="token operator">*</span> x1<span class="token punctuation">)</span> <span class="token operator">+</span> x1 <span class="token operator">*</span> x2 <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">*</span> x3 <span class="token operator">-</span> <span class="token number">5</span> <span class="token operator">*</span> x4<span class="token punctuation">)</span> <span class="token operator">-</span> x5

    <span class="token comment"># 添加约束函数</span>
    constraint<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>x1 <span class="token operator">+</span> x2<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">50</span><span class="token punctuation">]</span>
    constraint<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>x1 <span class="token operator">+</span> x1 <span class="token operator">*</span> x3<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">34</span><span class="token punctuation">]</span>
    constraint<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>x4 <span class="token operator">+</span> x3<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">33.3</span><span class="token punctuation">]</span>
     <span class="token comment">######################################################</span>
    <span class="token comment"># 第i个约束条件：constraint[i] = [cons_type,cons_value]</span>
    <span class="token comment"># 约束类型：cons_type=[&#39;i&#39;,&#39;e&#39;]</span>
    <span class="token comment"># 约束函数计算值：cons_value=[g(x),h[x]]</span>
    <span class="token comment"># &#39;i&#39;：不等式约束，形式为g(x)&lt;=0</span>
    <span class="token comment"># &#39;e&#39;：等式约束，形式为|h(x)|-ϵ &lt;= 0, ϵ默认值为1e-5。</span>
    <span class="token comment">######################################################</span>

    <span class="token comment"># 参考信息</span>
    flag <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">return</span> objfunc<span class="token punctuation">,</span> constraint<span class="token punctuation">,</span> flag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pso优化算法参数设置" tabindex="-1"><a class="header-anchor" href="#pso优化算法参数设置" aria-hidden="true">#</a> PSO优化算法参数设置</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>参数设置方式：
	<span class="token comment"># 创建优化器实例</span>
	optimizer <span class="token operator">=</span> PSO<span class="token punctuation">(</span>problem<span class="token punctuation">)</span>

	<span class="token comment"># 设置参数</span>
	optimizer<span class="token punctuation">.</span>set_options<span class="token punctuation">(</span><span class="token string">&#39;para_name&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>公用参数：
<span class="token string">&#39;if_ini_cons&#39;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
    <span class="token comment"># 是否要求初始化的粒子必须含有可行解（不违反约束）,False：不要求；True:要求。</span>

<span class="token string">&#39;swarm_size&#39;</span><span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>  
	<span class="token comment"># 粒子数量</span>
<span class="token string">&#39;step_max&#39;</span><span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
	<span class="token comment"># 最大寻优代数</span>
<span class="token string">&#39;w_type&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;linear&#39;</span><span class="token punctuation">,</span>
	<span class="token comment"># 惯性权重方式，&#39;linear&#39;-线性，&#39;fixed&#39;-定值，&#39;chaos&#39;-混沌惯性权重</span>
	
<span class="token comment"># {{{惩罚函数相关参数</span>
<span class="token string">&#39;penalty_type&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;common&#39;</span><span class="token punctuation">,</span>
<span class="token comment"># 选择罚函数方法，字符串（default：&#39;common&#39;）</span>
<span class="token comment"># &#39;common&#39; - 普通（动态）罚函数，&#39;oracle&#39; - oracle罚函数</span>
<span class="token comment"># 粒子群多目标优化算法不支持oracle罚函数方法</span>
<span class="token string">&#39;penalty_times&#39;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token comment"># penalty_type = &#39;common&#39;时生效，惩罚倍数，浮点数（default：100）</span>
<span class="token comment"># 使违反约束的解受到惩罚后的函数值一定大于全局最优适应函数值</span>
<span class="token string">&#39;oracle&#39;</span><span class="token punctuation">:</span> <span class="token number">1e9</span><span class="token punctuation">,</span>
<span class="token comment"># penalty_type = &#39;oracle&#39;时生效，Ω初始值，浮点数（default：1e9）</span>
<span class="token comment"># 该值必须大于全局最优适应函数值</span>
<span class="token comment"># }}}惩罚函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单目标粒子群算法sopso：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token string">&#39;pso_mode&#39;</span><span class="token punctuation">:</span> <span class="token string">&quot;ispsowm&quot;</span><span class="token punctuation">,</span>
	<span class="token comment"># 选择用于运算的单目标pso方法，字符串（default：&#39;ispsowm&#39;）</span>
	<span class="token comment"># 目前提供：</span>
	<span class="token comment"># &quot;standard_pso&#39;-标准粒子群算法</span>
	<span class="token comment"># &#39;ispsowm&#39;-改进小波简化粒子群算法（复杂问题推荐）</span>
	<span class="token comment"># 选择ispsowm时，</span>
	<span class="token comment"># c（反向搜索阈值）, pm（变异阈值）, xi_wm（形状因子）,g（函数a的上限值） 参数生效。</span>
	<span class="token comment"># 若搜索过程表明粒子群明显陷入早熟，则适当增大c，pm的值。具体参数设置请参考说明文档。</span>

<span class="token string">&#39;w&#39;</span><span class="token punctuation">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
<span class="token comment"># 惯性权重（default：0.8）</span>
<span class="token string">&#39;w_range_so&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0.4</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment"># 惯性权重变化范围，数组（浮点数）（default：[0.4, 1.2]）</span>
<span class="token string">&#39;c1&#39;</span><span class="token punctuation">:</span> <span class="token number">2.0</span><span class="token punctuation">,</span>
<span class="token comment"># 加速因子中的认知因子（default：2）</span>
<span class="token string">&#39;c2&#39;</span><span class="token punctuation">:</span> <span class="token number">2.0</span><span class="token punctuation">,</span>
<span class="token comment"># 加速因子中的社会因子（default：2）</span>

<span class="token string">&#39;precision&#39;</span><span class="token punctuation">:</span> <span class="token number">0.001</span><span class="token punctuation">,</span>
<span class="token comment"># 收敛精度，浮点数（default：1e-3）</span>
<span class="token comment"># 寻优程序设定当种群粒子的个体历史最好目标函数值（集合）的标准差小于收敛精度时收敛。</span>
<span class="token comment"># 问题规模较小时，可将precision调大</span>

<span class="token string">&#39;neighborhood&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;star&#39;</span><span class="token punctuation">,</span>
<span class="token comment"># 粒子群邻域结构，&#39;star&#39;（全互连型），&#39;ring&#39;（环型）（搜索速度较慢，但更不容易陷入早熟）	</span>

<span class="token comment"># {{{小波相关参数</span>
<span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>
<span class="token comment"># 反向搜索概率，浮点数（default：0.2）</span>
<span class="token string">&#39;pm&#39;</span><span class="token punctuation">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span>
<span class="token comment"># 执行小波变异的概率阈值，浮点数（default：0.7），取值范围[0,1]</span>
<span class="token string">&#39;xi_wm&#39;</span><span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
<span class="token comment"># 形状参数，浮点数（default：0.5）</span>
<span class="token string">&#39;g&#39;</span><span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token comment"># 小波函数中a的上限值，浮点数（default：1000），常取1000或10000</span>
<span class="token comment"># }}}小波</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多目标粒子群算法mopso：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>	<span class="token string">&#39;x_pareto_size&#39;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
	<span class="token comment"># 外部档案大小（存放非支配解），整数（default：100）</span>
    
    <span class="token string">&#39;if_use_former_x&#39;</span><span class="token punctuation">:</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    <span class="token comment"># 是否利用前次寻优得到的pareto前沿（稀疏部分）引导本次寻优</span>

	<span class="token string">&#39;w_mo&#39;</span><span class="token punctuation">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span>
	<span class="token comment"># 惯性权重（default：0.4）</span>
	<span class="token string">&#39;w_range_mo&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">0.6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token comment"># 惯性权重变化范围，数组（浮点数）（default：[0.2, 0.6]）</span>
	<span class="token string">&#39;c_mo&#39;</span><span class="token punctuation">:</span> <span class="token number">2.0</span><span class="token punctuation">,</span>
	<span class="token comment"># 加速因子，浮点数（default：2）</span>

	<span class="token string">&#39;run_number&#39;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
	<span class="token comment"># 独立寻优次数，整数（default：5），合并各次寻优结果pareto前沿</span>

	<span class="token string">&#39;pm_mo&#39;</span><span class="token punctuation">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span>
	<span class="token comment"># 执行小波变异的概率阈值，浮点数（default：0.7），取值范围[0,1]</span>
	<span class="token string">&#39;xi_wm_mo&#39;</span><span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
	<span class="token comment"># 形状参数，浮点数（default：0.5）</span>
	<span class="token string">&#39;g_mo&#39;</span><span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
	<span class="token comment"># 小波函数中a的上限值，浮点数（default：1000），常取1000或10000</span>
	<span class="token string">&#39;pe_mo&#39;</span><span class="token punctuation">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span>
	<span class="token comment"># 精英概率，浮点数（default：0.4），取值范围[0,1]</span>
	<span class="token string">&#39;pl_mo&#39;</span><span class="token punctuation">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
	<span class="token comment"># 学习概率，浮点数（default：0.1），取值范围[0,1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行寻优模块" tabindex="-1"><a class="header-anchor" href="#运行寻优模块" aria-hidden="true">#</a> 运行寻优模块</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token comment"># 执行主程序</span>
    gensbo <span class="token operator">=</span> GenSBO<span class="token punctuation">(</span>problem<span class="token punctuation">,</span> simulator<span class="token punctuation">,</span> optimizer<span class="token punctuation">)</span>

    <span class="token comment"># 记录当前寻优结果，防止意外报错使得进程结束--代码有误</span>
    result_temp <span class="token operator">=</span> gensbo<span class="token punctuation">.</span>result_temp

    <span class="token comment"># 记录当前寻优可行解结果，防止意外报错使得进程结束</span>
    feasible_f_temp <span class="token operator">=</span> gensbo<span class="token punctuation">.</span>feasible_f_temp
    feasible_x_temp <span class="token operator">=</span> gensbo<span class="token punctuation">.</span>feasible_x_temp

    gensbo<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 获取寻优结果</span>
    result <span class="token operator">=</span> gensbo<span class="token punctuation">.</span>result
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    单目标优化结果
    result = [f, x, constraint_info， f_history, feasible_f, feasible_x]
               [寻优结果函数值（浮点数），寻优结果解向量（一维数组），
                [解向量违反的约束序号数组，解向量所有约束函数的值],
                寻优历史全局最优函数值（一维数组），
                可行解的函数值集合（一维数组），可行解集合（二维数组）]
    
    
    多目标优化结果
    result = [f_pareto, x_pareto, feasible_f, feasible_x]
               [寻优结果非支配解集（pareto前沿）的目标函数值集合（数组（浮点数））,
                寻优结果非支配解向量（数组（浮点数））,
                可行解的函数值集合（二维数组），可行解集合（二维数组）]
    &#39;&#39;&#39;</span>

    <span class="token comment"># 保存数据</span>
    gensbo<span class="token punctuation">.</span>save_data<span class="token punctuation">(</span>filename<span class="token operator">=</span>problem<span class="token punctuation">.</span>name<span class="token punctuation">,</span> filepath<span class="token operator">=</span><span class="token string">&#39;.\\\\&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># 结果可视化，若需保存图片则需输入文件名及保存文件路径</span>
    gensbo<span class="token punctuation">.</span>visualize<span class="token punctuation">(</span>filename<span class="token operator">=</span>problem<span class="token punctuation">.</span>name<span class="token punctuation">,</span> filepath<span class="token operator">=</span><span class="token string">&#39;.\\\\&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),O={href:"https://github.com/ai4energy/gensbo",target:"_blank",rel:"noopener noreferrer"},x=n("h2",{id:"小结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#小结","aria-hidden":"true"},"#"),s(" 小结")],-1),S=n("p",null,"GenSBO是一个功能丰富的仿真类问题的优化器。它提供了智能的优化算法，以及灵活的问题定义方式，使其适用于解决各种实际优化问题。在使用 GenSBO 进行优化时，可以实现更快的运算速度和可靠的优化结果。",-1),B=n("p",null,"使用 GenSBO 和其他通用型优化器类似，首先需要定义问题类型，然后补充变量、约束条件、目标函数等优化问题的基本要素。接着，可以根据问题的特点和复杂程度选择合适的优化算法，并对其进行调参。通过合理设置算法参数，可以提高优化效率和寻找更优解的能力。",-1);function G(w,q){const a=o("ExternalLinkIcon");return i(),l("div",null,[b,g,n("p",null,[n("a",h,[s("GenSBO"),e(a)]),s("（General Simulation Based Optimizer）是由Ai4Energy开发的一个面向仿真的优化器。它利用智能优化算法，在优化过程中通过调用仿真器获取当前方案的评价值，从而帮助算法获得可靠的优化结果。")]),_,n("p",null,[s("这几个部分。相关示例可以参考"),n("a",f,[s("官方文档"),e(a)]),s("，以下是对这几部分的详细说明。")]),y,n("p",null,[s("如果需要更多相关信息，请参考"),n("a",O,[s("官方文档"),e(a)]),s("。")]),x,S,B])}const N=p(v,[["render",G],["__file","GenSBO.html.vue"]]);export{N as default};
