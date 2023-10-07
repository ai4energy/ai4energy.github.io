import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c as d,a as s,b as e,d as a,f as r}from"./app-2af96935.js";const c={},m=s("h1",{id:"mtk为什么比de慢",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mtk为什么比de慢","aria-hidden":"true"},"#"),e(" MTK为什么比DE慢？")],-1),o=s("p",null,[e("!!! tip"),s("br"),e(" Contents：代码优化")],-1),p=s("pre",null,[s("code",null,`Contributor: HY

Email:1171006975@qq.com

如有错误，请批评指正。
`)],-1),v=s("h2",{id:"前言",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),e(" 前言")],-1),u=s("p",null,"SCIML是一个非常强大的开源社区，提供了从建模到仿真的一条龙计算工具链。",-1),b={href:"https://mtk.sciml.ai/stable/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://diffeq.sciml.ai/dev_/",target:"_blank",rel:"noopener noreferrer"},g=s("h2",{id:"mtk和de计算时间对比",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mtk和de计算时间对比","aria-hidden":"true"},"#"),e(" MTK和DE计算时间对比")],-1),_=s("p",null,"以一个简单的ODE为例：",-1),x=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"T")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"t")])]),s("mo",null,"="),s("mi",null,"p"),s("mo",null,"∗"),s("mi",null,"t"),s("mo",null,"∗"),s("mi",null,"T")]),s("annotation",{encoding:"application/x-tex"}," \\frac{\\partial T}{\\partial t}=p*t*T ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0574em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3714em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord mathnormal"},"t")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6597em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6151em"}}),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T")])])])])],-1),y=s("p",null,"一个ODE算的太快了，体现不出来差距，我们重复这个方程n次，组成一个n维的ODEs。",-1),f=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"t")])]),s("mo",null,"="),s("mi",null,"p"),s("mo",null,"∗"),s("mi",null,"t"),s("mo",null,"∗"),s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")"),s("mo",{separator:"true"},","),s("mi",null,"i"),s("mo",null,"∈"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{separator:"true"},","),s("mn",null,"2"),s("mo",{separator:"true"},","),s("mn",null,"3..."),s("mo",{separator:"true"},","),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," \\frac{\\partial T(i)}{\\partial t}=p*t*T(i),i∈(1,2,3...,n) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.113em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.427em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord mathnormal"},"t")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6597em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6151em"}}),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},")"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"3..."),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])])],-1),k=r(`<p>然后我们用MTK方法和DE方法分别建模：</p><h3 id="de方法" tabindex="-1"><a class="header-anchor" href="#de方法" aria-hidden="true">#</a> DE方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>using ModelingToolkit, DifferentialEquations
n=10000
#DE
function de_test!(dT, T, p, t)
    n=length(T)
    for i in 1:n
        dT[i]=p[i]*t*T[i]
    end
    nothing
end
u0 = [1.0 for i in 1:n]
p = [1e-3 for i in 1:n]
prob_de = ODEProblem(de_test!, u0, (0, 100), p, saveat=1)
@time sol_de=solve(prob_de);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mtk方法" tabindex="-1"><a class="header-anchor" href="#mtk方法" aria-hidden="true">#</a> MTK方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#ModelingToolkit
@variables t 
∂ = Differential(t)
sts = @variables T(t)[1:n]=1.0 
par = @parameters p[1:n]=1e-3
eqs=[∂(T[i])~p[i]*t*T[i] for i in 1:n]
@named sys_mtk = ODESystem(eqs,t,sts...,par...)
@named prob_mtk = ODEProblem(sys_mtk,[],(0,100))
@time sol_mtk=solve(prob_mtk);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#第一次计算(包含预编译时间)
#@time sol_de=solve(prob_de);
 0.265494 seconds (217.39 k allocations: 21.561 MiB, 95.65% compilation time: 100% of which was recompilation)
 #@time sol_mtk=solve(prob_mtk);
 507.240792 seconds (193.00 M allocations: 6.895 GiB, 0.84% gc time, 100.00% compilation time)

 #第二次计算(不需要预编译)
 #@time sol_de=solve(prob_de);
0.013862 seconds (453 allocations: 10.783 MiB)
 #@time sol_mtk=solve(prob_mtk);
0.009364 seconds (451 allocations: 10.489 MiB)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以很惊奇的发现，MTK的编译时间竟然要500秒！而DE却只要0.26秒。但是在第二次计算时，MTK却实现了弯道超车，时间只需要0.009秒，而DE需要0.013秒。</p><p>这是什么原因导致的呢？有同学可能会说，是不是符号运算导致系统额外的开销？尤其是编译时，符号运算会不会导致编译时间大幅增加？但是，我们只统计了<code>solve</code>这个步骤的时间，符号运算确实很费时间，但主要是体现在<code>ODESystem</code>和<code>structural_simplify</code>这些步骤上。到了<code>solve</code>时，其实符号运算已经完成了，已经生成了对应的函数了，在接下来的运算中，应该是基于生成的函数进行计算，而不是进行符号计算。那么，编译时间慢，到底是不是符号运算导致的呢？</p><p>或许，我们可以尝试将MTK中生成的函数剥离出来，直接进行DE运算，彻底摒弃MTK中所有与符号相关的东西。</p><p>简单写一个函数，把MTK中生成的函数取出来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#get_expr_from_mtk
using RuntimeGeneratedFunctions
_cache_lock = Threads.SpinLock()
_cachename = Symbol(&quot;#_RuntimeGeneratedFunctions_cache&quot;)
_tagname = Symbol(&quot;#_RGF_ModTag&quot;)
function get_expr(f::RuntimeGeneratedFunction{argnames, cache_tag, context_tag, id}) where {
    argnames,
    cache_tag,
    context_tag,
    id,
}
    return Expr(:-&gt;, Expr(:tuple, argnames...), _lookup_body(cache_tag, id))
end
function _lookup_body(cache_tag, id)
    lock(_cache_lock) do
        cache = getfield(parentmodule(cache_tag), _cachename)
        body = cache[id]
        body isa WeakRef ? body.value : body
    end
end
mtk_expr = get_expr(prob_mtk.f.f.f_iip);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提取出来的代码比较长，我大概展示一下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:(
    (_-out, -arg1,-arg2,t)-&gt;
    begin
    ˍ₋out[1] = (*)((*)(t, ˍ₋arg2[1]), ˍ₋arg1[1])
    ˍ₋out[2] = (*)((*)(t, ˍ₋arg2[2]), ˍ₋arg1[2])
    ˍ₋out[3] = (*)((*)(t, ˍ₋arg2[3]), ˍ₋arg1[3])
    ...
    ˍ₋out[9997] = (*)((*)(t, ˍ₋arg2[9997]), ˍ₋arg1[9997])
    ˍ₋out[9998] = (*)((*)(t, ˍ₋arg2[9998]), ˍ₋arg1[9998])
    ˍ₋out[9999] = (*)((*)(t, ˍ₋arg2[9999]), ˍ₋arg1[9999])
    ˍ₋out[10000] = (*)((*)(t, ˍ₋arg2[10000]), ˍ₋arg1[10000])
    end
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个<code>Expr</code>，我们<code>eval</code>一下，就是一个函数了，然后我们生成对应的<code>ODEProblem</code>，再<code>solve</code>一下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>u0 = [1.0 for i in 1:n]
p = [1e-3 for i in 1:n]
prob_mtk_expr = ODEProblem(eval(mtk_expr), u0, (0, 100), p, saveat=1)
@time sol_mtk_expr=solve(prob_mtk_expr);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#@time sol_mtk_expr=solve(prob_mtk_expr);
#第一次
513.691586 seconds (129.78 M allocations: 4.903 GiB, 0.36% gc time, 100.00% compilation time)
#第二次
0.020437 seconds (453 allocations: 10.783 MiB)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>抛掉了MTK中所有的符号运算，只保留DE最原汁的本味，我们发现，编译时间竟然还需要513秒！这说明，导致MTK编译时间长的&quot;罪魁祸首&quot;不是符号运算！</p><p>真正的&quot;罪魁祸首&quot;是什么呢？我们对比一下手搓的DE和MTK自动生成的DE：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#手搓DE
function de_test!(dT, T, p, t)
    n=length(T)
    for i in 1:n
        dT[i]=p[i]*t*T[i]
    end
    nothing
end

#MTK自动生成DE
(_-out, -arg1,-arg2,t)-&gt;
    begin
    ˍ₋out[1] = (*)((*)(t, ˍ₋arg2[1]), ˍ₋arg1[1])
    ˍ₋out[2] = (*)((*)(t, ˍ₋arg2[2]), ˍ₋arg1[2])
    ˍ₋out[3] = (*)((*)(t, ˍ₋arg2[3]), ˍ₋arg1[3])
    ...
    ˍ₋out[9997] = (*)((*)(t, ˍ₋arg2[9997]), ˍ₋arg1[9997])
    ˍ₋out[9998] = (*)((*)(t, ˍ₋arg2[9998]), ˍ₋arg1[9998])
    ˍ₋out[9999] = (*)((*)(t, ˍ₋arg2[9999]), ˍ₋arg1[9999])
    ˍ₋out[10000] = (*)((*)(t, ˍ₋arg2[10000]), ˍ₋arg1[10000])
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家看出区别了吗？手搓DE用的是<code>for</code>循环，而MTK生成的DE将方程组全部展开了！在Julia中，<code>for</code>能够很好的被编译优化，而将方程组展开，会消耗大量的计算资源用于编译优化！</p><p>因此，我们可以得出一个结论：在DE中，适当运用<code>for</code>，能够显著提高编译速度！</p><p>进一步的，既然<code>for</code>可以，那<code>broadcast</code>可以不可以呢？咱们试试：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function de_broadcast_test!(dT, T, p, t)
    dT .= p*t.*T
    nothing
end
u0 = [1.0 for i in 1:n]
p = [1e-3 for i in 1:n]
prob_de = ODEProblem(de_broadcast_test!, u0, (0, 100), p, saveat=1)
@time sol_de=solve(prob_de);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#第一次
 0.605884 seconds (1.17 M allocations: 75.106 MiB, 97.80% compilation time)
#第二次
 0.013741 seconds (603 allocations: 16.509 MiB)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比<code>for</code>和<code>broadcast</code>的计算结果，我们发现两者相差不大，编译时间都远远小于MTK生成的代码。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>1.MTK编译慢的原因不全是因为符号计算，还有一部分原因是自动生成的函数不利于编译优化。</p><p>2.在编写函数的过程中，适当运用<code>for</code>和<code>broadcast</code>可以显著提高代码性能，减少编译时间。</p>`,31);function T(M,E){const n=l("ExternalLinkIcon");return t(),d("div",null,[m,o,p,v,u,s("p",null,[e("建模用"),s("a",b,[e("ModelingToolkit.jl"),a(n)]),e("；求解用"),s("a",h,[e("DifferentialEquations.jl"),a(n)]),e("。")]),g,_,x,y,f,k])}const K=i(c,[["render",T],["__file","benchmark_de_mtk.html.vue"]]);export{K as default};
