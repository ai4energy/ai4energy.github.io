import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,f as n,a}from"./app-d575bd6c.js";const l={},t=n(`<h1 id="csv-jl使用简介" tabindex="-1"><a class="header-anchor" href="#csv-jl使用简介" aria-hidden="true">#</a> CSV.jl使用简介</h1><p>!!! tip<br> Contents：CSV文本读入</p><pre><code>Contributor: YJY

Email:522432938@qq.com

如有错误，请批评指正。
</code></pre><p>!!! note</p><pre><code>[CSV.jl](https://csv.juliadata.org/stable/)是一个快速灵活的纯 Julia包，用于处理带分隔符的文本文件。
</code></pre><p>在建立模型与模型计算的过程中，可以很好的解决数据导入问题，它能<strong>自动辨识文本数据类型，并将数据分隔</strong>。</p><p>它的应用场景是：使用数据之前的输入导入。</p><h2 id="基本实现" tabindex="-1"><a class="header-anchor" href="#基本实现" aria-hidden="true">#</a> 基本实现</h2><p>文件内容：</p><div class="language-file line-numbers-mode" data-ext="file"><pre class="language-file"><code>col1,col2,col3,col4,col5,col6,col7,col8
,1,1.0,1,one,2019-01-01,2019-01-01T00:00:00,true
,2,2.0,2,two,2019-01-02,2019-01-02T00:00:00,false
,3,3.0,3.14,three,2019-01-03,2019-01-03T00:00:00,true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用以下代码导入文件</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>CSV<span class="token punctuation">.</span>File<span class="token punctuation">(</span><span class="token string">&quot;data.txt&quot;</span><span class="token punctuation">)</span> <span class="token comment">#file为文件名，如&quot;data.csv&quot;、&quot;data.txt&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认情况下，CSV.File会自动检测这个文件的分隔符&#39;,&#39;，以及每列的类型。默认情况下，它将“空字段”视为missing（本示例中的整个第一列）。它还自动处理提升类型，例如第 4 列，其中前两个值为Int，但第 3 行具有Float64值 ( 3.14)。</p><h2 id="自定义分隔符" tabindex="-1"><a class="header-anchor" href="#自定义分隔符" aria-hidden="true">#</a> 自定义分隔符</h2><p>文件内容：</p><div class="language-file line-numbers-mode" data-ext="file"><pre class="language-file"><code>col1::col2
1::2
3::4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用以下代码导入文件</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>CSV<span class="token punctuation">.</span>File<span class="token punctuation">(</span><span class="token string">&quot;data.txt&quot;</span><span class="token punctuation">;</span> delim<span class="token operator">=</span><span class="token string">&quot;::&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="无标题情况" tabindex="-1"><a class="header-anchor" href="#无标题情况" aria-hidden="true">#</a> 无标题情况</h2><p>文件内容：</p><div class="language-file line-numbers-mode" data-ext="file"><pre class="language-file"><code>1,2,3
4,5,6
7,8,9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在没有标题的情况下，会默认把第一行当作标题，可以给定参数取消，使用以下代码导入文件</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>CSV<span class="token punctuation">.</span>File<span class="token punctuation">(</span><span class="token string">&quot;data.txt&quot;</span><span class="token punctuation">;</span> header<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">#取消标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者也可以手动给定标题</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>CSV<span class="token punctuation">.</span>File<span class="token punctuation">(</span><span class="token string">&quot;data.txt&quot;</span><span class="token punctuation">;</span> header<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;col1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;col2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;col3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">#手动给定标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="指定数据行数" tabindex="-1"><a class="header-anchor" href="#指定数据行数" aria-hidden="true">#</a> 指定数据行数</h2><p>文件内容：</p><div class="language-file line-numbers-mode" data-ext="file"><pre class="language-file"><code>col1,col2,col3
metadata1,metadata2,metadata3
extra1,extra2,extra3
1,2,3
4,5,6
7,8,9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如我们期望的内容是从第四行开始，可以使用以下代码</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>CSV<span class="token punctuation">.</span>File<span class="token punctuation">(</span><span class="token string">&quot;data.txt&quot;</span><span class="token punctuation">;</span> skipto<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">#从第四行开始</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>CSV<span class="token punctuation">.</span>File<span class="token punctuation">(</span><span class="token string">&quot;data.txt&quot;</span><span class="token punctuation">;</span> datarow<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="读取数据段" tabindex="-1"><a class="header-anchor" href="#读取数据段" aria-hidden="true">#</a> 读取数据段</h2><p>文件内容：</p><div class="language-file line-numbers-mode" data-ext="file"><pre class="language-file"><code>col1,col2,col3
1,2,3
4,5,6
7,8,9
10,11,12
13,14,15
16,17,18
19,20,21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只需要读入某一段数据段</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>CSV<span class="token punctuation">.</span>File<span class="token punctuation">(</span><span class="token string">&quot;data.txt&quot;</span><span class="token punctuation">;</span> skipto<span class="token operator">=</span><span class="token number">4</span>，limit<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">#从第四行开始,读取1行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>CSV<span class="token punctuation">.</span>File<span class="token punctuation">(</span><span class="token string">&quot;data.txt&quot;</span><span class="token punctuation">;</span> skipto<span class="token operator">=</span><span class="token number">4</span>，footerskip<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">#从第四行开始,除去最后一行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="转置" tabindex="-1"><a class="header-anchor" href="#转置" aria-hidden="true">#</a> 转置</h2><p>文件内容：</p><div class="language-file line-numbers-mode" data-ext="file"><pre class="language-file"><code>col1,1,2,3
col2,4,5,6
col3,7,8,9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用如下代码导入</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>CSV<span class="token punctuation">.</span>File<span class="token punctuation">(</span><span class="token string">&quot;data.txt&quot;</span><span class="token punctuation">;</span> transpose<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">#从第四行开始,读取1行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据操作" tabindex="-1"><a class="header-anchor" href="#数据操作" aria-hidden="true">#</a> 数据操作</h2><p>我们以一下文件输入为例：</p><div class="language-file line-numbers-mode" data-ext="file"><pre class="language-file"><code>col1,col2,col3
1,2,3
4,5,6
7,8,9
10,11,12
13,14,15
16,17,18
19,20,21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用如下代码导入</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>data <span class="token operator">=</span> CSV<span class="token punctuation">.</span>File<span class="token punctuation">(</span><span class="token string">&quot;data.txt&quot;</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在相当于把数据储存到变量data中了，data是CSV.File类型的数据，可以通过typeof函数来查看一下：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>typeof<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在调用某一列的数字：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">println</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>col1<span class="token punctuation">)</span> <span class="token comment">#显示第一列</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>col2<span class="token punctuation">)</span> <span class="token comment">#显示第二列</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>col3<span class="token punctuation">)</span> <span class="token comment">#显示第三列</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的结果是：</p><blockquote><p>[1, 4, 7, 10, 13, 16, 19]</p></blockquote><blockquote><p>[2, 5, 8, 11, 14, 17, 20]</p></blockquote><blockquote><p>[3, 6, 9, 12, 15, 18, 21]</p></blockquote><p>查看一列的数据类型</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>typeof<span class="token punctuation">(</span>data<span class="token punctuation">.</span>col1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它的结果是：</p>`,60),c=a("blockquote",{Int64:""},[a("p",null,"Vector")],-1),d=n(`<h1 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h1><p>可以发现，data是CSV.File类型，但是通过data调用的每一列数据是vector类型</p><p>说明可以把每一列当作平常的vector来处理，相关的方法都能够匹配。</p><p>比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sum(data.col1)
a = data.col1 .* data.col2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>!!! tip<br> 推荐一个好用的数据展示包DataFrames，它一般与CSV.jl结合起来使用</p><pre><code>在julia的包模式下安装：

\`\`\`julia
add DataFrames
\`\`\`

将data漂亮的输出，只需要：

\`\`\`julia
using DataFrames
display(DataFrame(data))
\`\`\`
</code></pre>`,7),p=[t,c,d];function o(u,r){return e(),i("div",null,p)}const b=s(l,[["render",o],["__file","CSV_jl_use.html.vue"]]);export{b as default};
