import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,f as a}from"./app-2f5a3223.js";const o="/assets/image/92Workflow/DocStructure-16-48-02.png",i="/assets/image/92Workflow/DocStructure-16-59-55.png",t={},c=a(`<h1 id="文档-docs-编写方法" tabindex="-1"><a class="header-anchor" href="#文档-docs-编写方法" aria-hidden="true">#</a> 文档（docs）编写方法</h1><p>!!! tip<br> Contents：文档编写方法介绍</p><pre><code>Contributor: YJY

Email:522432938@qq.com

如有错误，请批评指正。
</code></pre><h2 id="文档结构" tabindex="-1"><a class="header-anchor" href="#文档结构" aria-hidden="true">#</a> 文档结构</h2><p>在包的根目录下，都有一个<code>/docs</code>文件夹，里面就是文档的所有内容。</p><p><code>/docs</code>结构如下：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>docs/
├── src/
│   ├── index<span class="token punctuation">.</span>md
│   ├── components/   
│   │   ├──MTKMPC<span class="token punctuation">.</span>md
│   │   └──<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
│   └── MyApp<span class="token punctuation">.</span>jl
├── build/
│   ├── index<span class="token punctuation">.</span>html
│   └── <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
├── <span class="token punctuation">.</span>gitignore
├── Project<span class="token punctuation">.</span>toml
└── make<span class="token punctuation">.</span>jl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>/src</strong>里包含了文档的内容，即很多markdown文件。对应关系如下：</p><figure><img src="`+o+'" alt="图 1" tabindex="0" loading="lazy"><figcaption>图 1</figcaption></figure><p><strong>.gitignore</strong>里的内容是在git提交时忽略的内容。例如<code>/build</code>的内容就会全部忽略。</p><p><strong>Project.toml</strong>是julia的环境文件，说明了docs环境中需要用到的包。</p><p><strong>make.jl</strong>是生成的html页面的主文件。运行make.jl，则生成/build文件夹，在默认浏览器中打开<code>/build/index.html</code>就能看到文档，和网页版的一模一样。本质上也是一样的，Github部署也是部署的它。这是本地版，github提交时，会自动运行make.jl生成然后部署。所以<code>/build</code>不用上传。</p><h2 id="编写方法" tabindex="-1"><a class="header-anchor" href="#编写方法" aria-hidden="true">#</a> 编写方法</h2><p>新添加文档只需要两步操作：</p><ol><li>创建新的文档(.md文件)</li><li>在make.jl中链接文档路径</li></ol><p>make.jl中的page链接了全部文档。<br><img src="'+i+`" alt="图 2" loading="lazy"></p><p>图中的&quot;Modeling&quot;是子目录，在<code>/src</code>里可看到对应文件夹。</p><p>如果没有在make.jl中链接，就不会在html中显示。<strong>没链接等于没写🤣🤣🤣</strong>。</p><p>!!! note</p><pre><code>某些库会设计自动链接，如果自动链接了就不需要手动添加了。
</code></pre>`,20),l=[c];function d(r,p){return e(),s("div",null,l)}const g=n(t,[["render",d],["__file","DocStructure.html.vue"]]);export{g as default};
