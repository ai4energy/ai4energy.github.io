import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-ca7bc292.js";const e={},p=t(`<h1 id="mtk常见问题" tabindex="-1"><a class="header-anchor" href="#mtk常见问题" aria-hidden="true">#</a> MTK常见问题</h1><p>!!! tip<br> Contents：建模、MTK、外部函数</p><pre><code>Contributor: YYB

Email: 812987139@qq.com

如有错误，请批评指正。
</code></pre><h2 id="undefvarerror" tabindex="-1"><a class="header-anchor" href="#undefvarerror" aria-hidden="true">#</a> UndefVarError</h2><p>目前官方在此方面可能有bug，可以关注模型边界条件尝试避开问题</p><h2 id="key-not-found" tabindex="-1"><a class="header-anchor" href="#key-not-found" aria-hidden="true">#</a> key not found</h2><p>在structural_simplify后，有些等式条件会自动微分，导致变量数没变，但是方程增加，进而导致模型不平衡</p><h2 id="xxx-are-missing-from-variables-map" tabindex="-1"><a class="header-anchor" href="#xxx-are-missing-from-variables-map" aria-hidden="true">#</a> xxx are missing from variables map</h2><p>可能是初值没有设置。建议所有模型均设置初值，动态模型初值直接输入至defaults参数。</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>@connector <span class="token keyword">function</span> flowPortNode<span class="token punctuation">(</span><span class="token punctuation">;</span> name<span class="token punctuation">)</span>
    <span class="token comment">#通流元件节点，在热力学节点上包装了体积、质量流量 </span>
    <span class="token comment">#如果同时需要标记connect类型，还要赋值，那么一定要括起来</span>
    <span class="token comment">#initialValue写作Dict或者数组都可以</span>
    sts <span class="token operator">=</span> @variables <span class="token keyword">begin</span>
        p<span class="token punctuation">(</span>t<span class="token punctuation">)</span>
        T<span class="token punctuation">(</span>t<span class="token punctuation">)</span>
        <span class="token punctuation">(</span>qm<span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>connect <span class="token operator">=</span> Flow<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>rho<span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>connect <span class="token operator">=</span> Stream<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>mu<span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>connect <span class="token operator">=</span> Stream<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>qv<span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>connect <span class="token operator">=</span> Stream<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">end</span>
    initialValue <span class="token operator">=</span> <span class="token punctuation">[</span>
        p <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">1.013e5</span>
        T <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">300</span>
        qm <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">0</span>
        rho <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">1.2</span>
        mu <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">1.819e-5</span>
        qv <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">0</span>
    <span class="token punctuation">]</span>
    eqs <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token number">0</span> <span class="token operator">~</span> stateEquation<span class="token punctuation">(</span>p<span class="token punctuation">,</span> rho<span class="token punctuation">,</span> T<span class="token punctuation">)</span>
        mu <span class="token operator">~</span> <span class="token number">1.819e-5</span>
        <span class="token comment">#qm ~ rho * qv</span>
        qv <span class="token operator">~</span> qm <span class="token operator">/</span> rho
    <span class="token punctuation">]</span>
    ODESystem<span class="token punctuation">(</span>eqs<span class="token punctuation">,</span> t<span class="token punctuation">,</span> sts<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> name<span class="token operator">=</span>name<span class="token punctuation">,</span> defaults<span class="token operator">=</span>initialValue<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在生成问题前再统一传入初值。</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>u01 <span class="token operator">=</span> <span class="token punctuation">[</span>
    d_temp <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">0</span>
<span class="token punctuation">]</span>

a <span class="token operator">=</span> ModelingToolkit<span class="token punctuation">.</span>defaults<span class="token punctuation">(</span>sys1<span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> keys<span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token keyword">global</span> u01
    u01 <span class="token operator">=</span> <span class="token punctuation">[</span>u01<span class="token punctuation">;</span> i <span class="token operator">=</span><span class="token operator">&gt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该问题的产生原因与DAE问题的求解算法有关。将DAE问题降指数为ODE问题后，模型可能需要更多的初始条件作为输入。</p>`,13),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","MTK_tips.html.vue"]]);export{d as default};
