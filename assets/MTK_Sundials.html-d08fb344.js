import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as s}from"./app-40ae522b.js";const l={},d=s(`<h1 id="mtk调用sundials计算" tabindex="-1"><a class="header-anchor" href="#mtk调用sundials计算" aria-hidden="true">#</a> MTK调用Sundials计算</h1><p>!!! tip<br> Contents：MTK、Sundials</p><pre><code>Contributor: HY

Email:1171006975@qq.com

如有错误，请批评指正。
</code></pre><p>!!! note</p><pre><code>MTK = ModelingToolkit.jl

[Sundials](https://computing.llnl.gov/projects/sundials)基于Fortran/C的求解器

[ModelingToolkit.jl ](https://mtk.sciml.ai/stable/)符号建模包
</code></pre><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>Sundials是一款非常成熟和受欢迎的开源求解器，它在求解速度和适用范围上领先绝大多数求解器。当我们使用传统求解器遇到困难时，不妨调用Sundials试试。</p><p>Sundials可以求解ODEs，DAEs和NonlinearEqs等问题。接下来，我将以锂电池的P2D模型为例，分别介绍如何调用Sundials计算<code>DAEProblem</code>，<code>ODEProblem</code>，<code>NonlinearProblem</code>：</p><h2 id="_1-odeproblem" tabindex="-1"><a class="header-anchor" href="#_1-odeproblem" aria-hidden="true">#</a> 1.ODEProblem</h2><p>选取锂电池P2D模型中的ODEs部分进行计算：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>using ModelingToolkit, DifferentialEquations,Sundials
include(&quot;P2D_并行_固液相模型.jl&quot;)
include(&quot;P2D_并行_电路模型.jl&quot;)

#ODEProblem
@named batter_chemistry = P2D_Libatter_chemistry(n_mesh_neg=8, n_mesh_sep=8, n_mesh_pos=8)
@named OdeFun_chemistry = ODESystem([], t)
@named model_chemistry = compose(OdeFun_chemistry, [batter_chemistry])
sys_chemistry = structural_simplify(model_chemistry)
prob_chemistry = ODEProblem(sys_chemistry, [], (0.0, 100.0))
#不调用Sundials
@time sol_chemistry = solve(prob_chemistry);
#调用Sundials
@time sol_chemistry = solve(prob_chemistry, CVODE_Adams());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#不调用Sundials
0.000980 seconds (171 allocations: 828.094 KiB)
#调用Sundials
0.000151 seconds (111 allocations: 37.734 KiB)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-nonlinearproblem" tabindex="-1"><a class="header-anchor" href="#_2-nonlinearproblem" aria-hidden="true">#</a> 2.NonlinearProblem</h2><p>选取锂电池P2D模型中的NonlinearEqs部分进行计算：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#NonlinearProblem
@named batter_electric = P2D_Libatter_electric()
@named current = Constant(U=20)
@named current_source = Current_source()
@named ground = Ground()
eqs = [
    connect(batter_electric.n, ground.g, current_source.n)
    connect(batter_electric.p, current_source.p)
    connect(current.u, current_source.u)]
@named OdeFun_electric = ODESystem(eqs, t)
@named model_electric = compose(OdeFun_electric, [batter_electric, current, current_source, ground])
sys_electric = structural_simplify(model_electric)
prob_electric = NonlinearProblem(ODEProblem(sys_electric, [], (0.0, 0.0), []))
#不调用Sundials
@time sol_electric = solve(prob_electric);
#调用Sundials
@time sol_electric = solve(prob_electric, KINSOL());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#不调用Sundials
0.000283 seconds (92 allocations: 31.922 KiB)
#调用Sundials
0.000487 seconds (270 allocations: 11.703 KiB)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-daeproblem" tabindex="-1"><a class="header-anchor" href="#_3-daeproblem" aria-hidden="true">#</a> 3.DAEProblem</h2><p>选取锂电池P2D模型(DAEs)进行计算：</p><h3 id="note-如果之前建模生成的是odesystem-需要生成对应的daeproblem才能调用sundials进行求解-不调用sundials的话-直接生成odeproblem即可。" tabindex="-1"><a class="header-anchor" href="#note-如果之前建模生成的是odesystem-需要生成对应的daeproblem才能调用sundials进行求解-不调用sundials的话-直接生成odeproblem即可。" aria-hidden="true">#</a> NOTE:如果之前建模生成的是ODESystem，需要生成对应的DAEProblem才能调用Sundials进行求解，不调用Sundials的话，直接生成ODEProblem即可。</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#DAEProblem
include(&quot;P2D组件 copy.jl&quot;)

series_num=1;
parallel_num=1;
batters = [@named batter[(i-1)*series_num+j]= P2D_Libatter() for i in 1:parallel_num, j in 1:series_num]
@named current = Constant(U = 20);
@named current_source = Current_source();
@named ground = Ground();


eqs = [
    [connect(batters[i,j].n, batters[i,j+1].p) for i in 1:parallel_num, j in 1:series_num-1]...
    [connect(batters[i,1].p, batters[i+1,1].p) for i in 1:parallel_num-1]...
    [connect(batters[i,end].n, batters[i+1,end].n) for i in 1:parallel_num-1]...
    connect(batters[end,end].n, ground.g, current_source.n)
    connect(batters[1,1].p, current_source.p)
    connect(current.u, current_source.u)

]

@named OdeFun = ODESystem(eqs, t)
@named model = compose(OdeFun, [batters..., current, current_source, ground])

sys = structural_simplify(model)

prob = DAEProblem(sys, zeros(length(states(sys))),[], (0.0, 2500.0),[])
prob_ode = ODEProblem(sys,[], (0.0, 2500.0),[])
#不调用Sundials
@time sol = solve(prob_ode);
#调用Sundials
@time sol = solve(prob,IDA());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#不调用Sundials
0.313776 seconds (13.57 k allocations: 7.203 MiB)
#调用Sundials
0.095321 seconds (38.60 k allocations: 1.576 MiB)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>Sundials求解器和SCIML默认的求解器各有胜负。总的来说，对于一些简单的方程组，SCIML默认的求解器更快，对于一些较为复杂的方程组，Sundials求解器更快。</p>`,26),r=[d];function a(c,t){return n(),i("div",null,r)}const m=e(l,[["render",a],["__file","MTK_Sundials.html.vue"]]);export{m as default};
