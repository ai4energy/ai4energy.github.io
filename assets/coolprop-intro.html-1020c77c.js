import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as o}from"./app-ca8ddae6.js";const e={},p=o(`<p>@def title = &quot;CoolProp&quot;<br> @def tags = [&quot;CoolProp&quot;]</p><h1 id="从热力学图表说起" tabindex="-1"><a class="header-anchor" href="#从热力学图表说起" aria-hidden="true">#</a> 从热力学图表说起</h1><h1 id="refprop" tabindex="-1"><a class="header-anchor" href="#refprop" aria-hidden="true">#</a> RefProp</h1><ul><li><p>RefProp的介绍，用途。</p></li><li><p>RefProp的接口</p></li><li><p>RefProp这样的程序是如何做出来的</p></li></ul><h1 id="coolprop" tabindex="-1"><a class="header-anchor" href="#coolprop" aria-hidden="true">#</a> CoolProp</h1><ul><li><p>CoolProp的介绍</p></li><li><p>CoolProp的接口</p></li></ul><h1 id="使用julia来使用coolprop" tabindex="-1"><a class="header-anchor" href="#使用julia来使用coolprop" aria-hidden="true">#</a> 使用Julia来使用CoolProp</h1><p>现在在julia下使用CoolProp真是简单极了。</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>add CoolProp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>系统就会自动的去下载CoolProp的源代码，并调用jll编译成dll。说真的，什么都不用管。</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">using</span> CoolProp
PropsSI<span class="token punctuation">(</span><span class="token string">&quot;T&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;P&quot;</span><span class="token punctuation">,</span> <span class="token number">101325.0</span><span class="token punctuation">,</span> <span class="token string">&quot;Q&quot;</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token string">&quot;Water&quot;</span><span class="token punctuation">)</span>
<span class="token number">373.1242958476844</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>甚至，你可以直接带单位进行计算</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">using</span> CoolProp
<span class="token keyword">using</span> Unitful<span class="token punctuation">:</span> °C<span class="token punctuation">,</span> Pa

HAPropsSI<span class="token punctuation">(</span><span class="token string">&quot;H&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tdb&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span>°C<span class="token punctuation">,</span> <span class="token string">&quot;RH&quot;</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token string">&quot;P&quot;</span><span class="token punctuation">,</span> <span class="token number">101325</span>Pa<span class="token punctuation">)</span>
<span class="token number">38622.83892391293</span> J kg⁻¹
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),t=[p];function l(i,u){return a(),s("div",null,t)}const d=n(e,[["render",l],["__file","coolprop-intro.html.vue"]]);export{d as default};
