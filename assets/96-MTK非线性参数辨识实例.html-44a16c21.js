import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as p,f as n,a as s,b as a}from"./app-daf6f9ff.js";const l={},o=n(`<h1 id="mtk非线性参数辨识实例" tabindex="-1"><a class="header-anchor" href="#mtk非线性参数辨识实例" aria-hidden="true">#</a> MTK非线性参数辨识实例</h1><p>!!! tip<br> Contents：参数辨识、优化、MTK</p><pre><code>Contributor: YJY

Email:522432938@qq.com

如有错误，请批评指正。
</code></pre><p>!!! note</p><pre><code>MTK = ModelingToolkit.jl

NLP = NonlinearnProblem，非线性问题

[OptimizationSystem](https://mtk.sciml.ai/stable/tutorials/optimization/)为MTK中的系统类型之一
</code></pre><h2 id="参数辨识概念" tabindex="-1"><a class="header-anchor" href="#参数辨识概念" aria-hidden="true">#</a> 参数辨识概念</h2><p>系统中的参数作为优化变量，找到一组参数，使得通过模型计算结果与实际值误差最小，实际值一般为一系列数值。参数辨识本质为回归问题。数学表达如下：</p>`,7),c=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y"),s("mo",null,"="),s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"a"),s("mo",{separator:"true"},","),s("mi",null,"b"),s("mo",{stretchy:"false"},")"),s("mspace",{linebreak:"newline"}),s("mi",null,"min"),s("mo",null,"⁡"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"y"),s("mrow",null,[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"a"),s("mi",null,"l")])]),s("mo",null,"−"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")]),s("mspace",{linebreak:"newline"})]),s("annotation",{encoding:"application/x-tex"},"y = f(a,b)\\\\ \\min (y_{real} - y)^2\\\\ ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mclose"},")")]),s("span",{class:"mspace newline"}),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mop"},"min"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"re"),s("span",{class:"mord mathnormal mtight"},"a"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])]),s("span",{class:"mspace newline"})])])])],-1),i=s("h2",{id:"实例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#实例","aria-hidden":"true"},"#"),a(" 实例")],-1),r=s("p",null,"考虑下面的模型：",-1),m=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y"),s("mo",null,"="),s("mi",null,"a"),s("msup",null,[s("mi",null,"x"),s("mn",null,"2")]),s("mo",null,"+"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mi",null,"b"),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mspace",{linebreak:"newline"}),s("mi",null,"a"),s("mo",null,"="),s("mn",null,"1.5"),s("mo",{separator:"true"},","),s("mi",null,"b"),s("mo",null,"="),s("mn",null,"0.8")]),s("annotation",{encoding:"application/x-tex"},"y = ax^2+sin(bx)\\\\a=1.5,b=0.8 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"in"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")")]),s("span",{class:"mspace newline"}),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"1.5"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.8")])])])])],-1),u=s("p",null,[a("采用生成数据的方法构造真实的数据"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"y"),s("mrow",null,[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"a"),s("mi",null,"l")])])]),s("annotation",{encoding:"application/x-tex"},"y_{real}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"re"),s("span",{class:"mord mathnormal mtight"},"a"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("。"),s("br"),a(" 方法为通过模型计算出准确值并加上随机误差。")],-1),k=n(`<div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token comment">##### 生成真实数据 ####</span>
x <span class="token operator">=</span> collect<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">0.01</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">)</span>
N <span class="token operator">=</span> length<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token comment"># 产生随机误差，范围在-0.1~0.1之间</span>
rands <span class="token operator">=</span> rand<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.1</span><span class="token punctuation">:</span><span class="token number">0.01</span><span class="token punctuation">:</span><span class="token number">0.1</span><span class="token punctuation">,</span> N<span class="token punctuation">)</span>
a1 <span class="token operator">=</span> <span class="token number">1.5</span>
a2 <span class="token operator">=</span> <span class="token number">0.8</span>
<span class="token comment"># 计算y值</span>
y <span class="token operator">=</span> @<span class="token punctuation">.</span> a1 <span class="token operator">*</span> x<span class="token operator">^</span><span class="token number">2</span> <span class="token operator">+</span> sin<span class="token punctuation">(</span>a2 <span class="token operator">*</span> x<span class="token punctuation">)</span> <span class="token operator">+</span> rands

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=s("p",null,[a("因为测试数据集"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"y"),s("mrow",null,[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"a"),s("mi",null,"l")])])]),s("annotation",{encoding:"application/x-tex"},"y_{real}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"re"),s("span",{class:"mord mathnormal mtight"},"a"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("本身即来自模型，同时添加的扰动范围不大，可以认为数据集的内涵就是模型"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y"),s("mo",null,"="),s("mi",null,"a"),s("msup",null,[s("mi",null,"x"),s("mn",null,"2")]),s("mo",null,"+"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mi",null,"b"),s("mi",null,"x"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"y = ax^2+sin(bx)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"in"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")")])])]),s("br"),a(" 接下来构建问题并且求解：")],-1),h=n(`<div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token comment"># 计算损失Loss</span>
@variables para<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
errors <span class="token operator">=</span> @<span class="token punctuation">.</span> <span class="token punctuation">(</span>para<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> x<span class="token operator">^</span><span class="token number">2</span> <span class="token operator">+</span> sin<span class="token punctuation">(</span>para<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">*</span> x<span class="token punctuation">)</span> <span class="token operator">-</span> y<span class="token punctuation">)</span><span class="token operator">^</span><span class="token number">2</span>

<span class="token comment"># 计算方差和，采用均方差亦可</span>
Loss <span class="token operator">=</span> sum<span class="token punctuation">(</span>errors<span class="token punctuation">)</span>

<span class="token comment"># 构建问题并求解</span>
@named sys <span class="token operator">=</span> OptimizationSystem<span class="token punctuation">(</span>Loss<span class="token punctuation">,</span> <span class="token punctuation">[</span>para<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
a0 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0.1</span><span class="token punctuation">,</span><span class="token number">0.1</span><span class="token punctuation">]</span>
prob <span class="token operator">=</span> OptimizationProblem<span class="token punctuation">(</span>sys<span class="token punctuation">,</span> a0<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> grad<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">,</span> hess<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">,</span> reltol<span class="token operator">=</span><span class="token number">1e</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span> abstol<span class="token operator">=</span><span class="token number">1e</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">)</span>
s <span class="token operator">=</span> solve<span class="token punctuation">(</span>prob<span class="token punctuation">,</span> Optim<span class="token punctuation">.</span>Newton<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后的结果为:</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>u<span class="token punctuation">:</span> <span class="token number">2</span><span class="token operator">-</span>element Vector<span class="token punctuation">{</span>Float64<span class="token punctuation">}</span><span class="token punctuation">:</span>
 <span class="token number">1.502064883762093</span>
 <span class="token number">0.7908724806965902</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g=s("p",null,[a("和我们的真实值"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"a"),s("mo",null,"="),s("mn",null,"1.5"),s("mo",{separator:"true"},","),s("mi",null,"b"),s("mo",null,"="),s("mn",null,"0.8")]),s("annotation",{encoding:"application/x-tex"},"a=1.5,b=0.8")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"1.5"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.8")])])]),a("比较接近。"),s("br"),a(" 优化成功！")],-1),b=n(`<p>!!! tip<br> 影响优化效果的因素有</p><pre><code>* 初值
* 生成扰动大小

可以尝试修改它们并查看求解效果。
</code></pre><p>全部代码：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">using</span> ModelingToolkit<span class="token punctuation">,</span> OptimizationOptimJL

Loss <span class="token operator">=</span> <span class="token number">0.0</span>
<span class="token comment">#number of samples</span>
ypre <span class="token operator">=</span> <span class="token number">0</span>
<span class="token comment">#y-predict</span>
x <span class="token operator">=</span> collect<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">0.01</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">)</span>
N <span class="token operator">=</span> length<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
rands <span class="token operator">=</span> rand<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.1</span><span class="token punctuation">:</span><span class="token number">0.01</span><span class="token punctuation">:</span><span class="token number">0.1</span><span class="token punctuation">,</span> N<span class="token punctuation">)</span>
a1 <span class="token operator">=</span> <span class="token number">1.5</span>
a2 <span class="token operator">=</span> <span class="token number">0.8</span>
y <span class="token operator">=</span> @<span class="token punctuation">.</span> a1 <span class="token operator">*</span> x<span class="token operator">^</span><span class="token number">2</span> <span class="token operator">+</span> sin<span class="token punctuation">(</span>a2 <span class="token operator">*</span> x<span class="token punctuation">)</span> <span class="token operator">+</span> rands


@variables para<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
errors <span class="token operator">=</span> @<span class="token punctuation">.</span> <span class="token punctuation">(</span>para<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> x<span class="token operator">^</span><span class="token number">2</span> <span class="token operator">+</span> sin<span class="token punctuation">(</span>para<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">*</span> x<span class="token punctuation">)</span> <span class="token operator">-</span> y<span class="token punctuation">)</span><span class="token operator">^</span><span class="token number">2</span>
Loss <span class="token operator">=</span> sum<span class="token punctuation">(</span>errors<span class="token punctuation">)</span>

<span class="token comment">#Opt</span>
@named sys <span class="token operator">=</span> OptimizationSystem<span class="token punctuation">(</span>Loss<span class="token punctuation">,</span> <span class="token punctuation">[</span>para<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
a0 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">]</span>
prob <span class="token operator">=</span> OptimizationProblem<span class="token punctuation">(</span>sys<span class="token punctuation">,</span> a0<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> grad<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">,</span> hess<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">,</span> reltol<span class="token operator">=</span><span class="token number">1e</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span> abstol<span class="token operator">=</span><span class="token number">1e</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">)</span>
s <span class="token operator">=</span> solve<span class="token punctuation">(</span>prob<span class="token punctuation">,</span> Optim<span class="token punctuation">.</span>Newton<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=[o,c,i,r,m,u,k,d,h,g,b];function y(x,_){return e(),p("div",null,v)}const M=t(l,[["render",y],["__file","96-MTK非线性参数辨识实例.html.vue"]]);export{M as default};
