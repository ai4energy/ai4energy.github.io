import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as n,c as l,a as e,b as i,d as s,f as t}from"./app-6fc42512.js";const p="/assets/image/92Workflow/gitworkflow-18-05.png",d="/assets/image/92Workflow/gitworkflow-09-32.png",c="/assets/image/92Workflow/gitworkflow-09-36.png",g="/assets/image/92Workflow/gitworkflow-09-41.png",h="/assets/image/92Workflow/gitworkflow-11-58.png",u="/assets/image/92Workflow/gitworkflow-18-22.png",f="/assets/image/92Workflow/gitWorkFlow_1.gif",k="/assets/image/92Workflow/gitWorkFlow_2.gif",m="/assets/image/92Workflow/gitWorkFlow_3.gif",_="/assets/image/92Workflow/gitWorkFlow_4.gif",w={},b=t(`<h1 id="ai4e组织合作开发流程" tabindex="-1"><a class="header-anchor" href="#ai4e组织合作开发流程" aria-hidden="true">#</a> Ai4E组织合作开发流程</h1><p>!!! tip<br> Contents：基于Gitkraken的合作开发流程</p><pre><code>Contributor: YJY

Email:522432938@qq.com

如有错误，请批评指正。
</code></pre><p>!!! note</p><pre><code>[Gitkraken](https://www.gitkraken.com/)为Git图形化软件。

预计实践时间：60min - 120min
</code></pre><div class="language-@contents line-numbers-mode" data-ext="@contents"><pre class="language-@contents"><code>Pages = [&quot;gitworkflow.md&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="开发流程简介" tabindex="-1"><a class="header-anchor" href="#开发流程简介" aria-hidden="true">#</a> 开发流程简介</h2><p>Github是一个非常流行的代码托管平台，上面有许许多多的前辈与“他们的牛逼代码”。为了充分与国际接轨，我们（Ai4Energy）组织也选择Github。</p><p>Ai4Energy组织可以视为一个大的代码仓库，每个人都可以向组织中贡献代码。Github基于Git，有完善且高效的多人协作的开发流程（所谓开发流程其实就是如何向Ai4Energy组织中提交代码做贡献）。</p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2>`,10),x=e("li",null,"Github注册账户",-1),G={href:"https://www.gitkraken.com/",target:"_blank",rel:"noopener noreferrer"},W=e("li",null,[i("用Github账户登录Gitkraken（"),e("strong",null,"重要"),i("），然后建立Gitkraken的profile（个人形象，"),e("strong",null,"不重要"),i("）")],-1),y=e("li",null,"建立SSH登录验证方式（点击下面的绿色按钮，Gitkraken自动生成并且上传），如下图。",-1),q=t('<figure><img src="'+p+'" alt="图 3" tabindex="0" loading="lazy"><figcaption>图 3</figcaption></figure><p>!!! tip<br> 稳定连接Github，推荐一个免费加速器<strong>Watt Toolkit</strong>，在微软应用商店。</p><p>接下来是开发的逻辑介绍。</p><h2 id="开发逻辑" tabindex="-1"><a class="header-anchor" href="#开发逻辑" aria-hidden="true">#</a> 开发逻辑</h2><p>应用场景是这样的：</p><p>在某师兄云盘里有一份报告，师兄给2个师弟说你们合作把这份报告改一改（假设两位师弟一个在美国一个在日本，且不认识，只有云盘的地址）。小师弟先改第一版，大师弟改第二版。他们需要干以下的操作：</p><ol><li>小师弟把文件先添加到自己的云盘资源里</li><li>假设云盘没有在线编辑功能，小师弟修改文件只有一种选择：把文件下载到本地修改。</li><li>小师弟修改报告</li><li>小师弟把修改完成的报告上传至自己的云盘。</li><li>修改完成之后，小师弟就可以对师兄说：我改完了，文件在我自己的云盘里，如果可以的话，我就把你的那一份原来的报告覆盖了。</li></ol><p>接下来的选择就有两种：</p><ul><li>师兄说：改的不错，覆盖吧。然后大师弟重复1-5步骤</li><li>师兄说：改的不行，重改吧。然后小师弟重复2-5步骤</li></ul><p>以上，就是我们工作流程的实际内涵：</p><p><strong>1:</strong> 这个行为叫<code>Fork</code>。Fork的意思是在自己的个人账号下建立一个一样的别人的仓库，而且会显示你这个仓库是fork别人的。<br><img src="'+d+'" alt="图 1" loading="lazy"></p><p><strong>2:</strong> 这个行为叫<code>Pull</code>。一般而言，第一次在本地建仓时，会自动Pull。本地仓库建好了，若云端仓库文件有更新，这个时候本地文件要更新的话，就有相应的Pull操作。<br><img src="'+c+'" alt="图 2" loading="lazy"></p><p><strong>3:</strong> 这个行为叫<strong>开发</strong>🤣。</p><p><strong>4:</strong> 这个行为叫<code>Push</code>。<br><img src="'+g+'" alt="图 3" loading="lazy"></p><p><strong>5:</strong> 这个行为叫<code>Pull Request</code>（合并到主分支）。为要先推送到自己仓库的副本而不是直接覆盖别人的那个仓库呢？🤣</p><p>整体的逻辑图如下：</p><figure><img src="'+h+'" alt="图 2" tabindex="0" loading="lazy"><figcaption>图 2</figcaption></figure><h2 id="操作步骤与方法" tabindex="-1"><a class="header-anchor" href="#操作步骤与方法" aria-hidden="true">#</a> 操作步骤与方法</h2><p>方法对应以上5个步骤。</p><h3 id="step1-fork" tabindex="-1"><a class="header-anchor" href="#step1-fork" aria-hidden="true">#</a> Step1: Fork</h3><figure><img src="'+u+'" alt="图 4" tabindex="0" loading="lazy"><figcaption>图 4</figcaption></figure><h3 id="step2-pull" tabindex="-1"><a class="header-anchor" href="#step2-pull" aria-hidden="true">#</a> Step2: Pull</h3><p>首先是本地建仓：</p><figure><img src="'+f+'" alt="图 2" tabindex="0" loading="lazy"><figcaption>图 2</figcaption></figure><p>拉取之后点击<code>Open Now</code>，我们就能看到操作页面。同时在左侧需要点击<code>Add</code>。GitKraken自动检测到我们Fork了一个包，它会认为你可能需要通过修改别人的代码然后上传到你自己的库里，所以它给了一个添加自己Fork的库的一个选项（如果点上，也可以手动添加远程仓库）。</p><figure><img src="'+k+'" alt="图 5" tabindex="0" loading="lazy"><figcaption>图 5</figcaption></figure><p>!!! note<br> 在Step2中，如果是从自己Fork的仓库地址建立本地仓库，也可以，只不过要手动添加Ai4的远程地址了。</p><p>中间的蓝色绿色圈是啥呢？是文件修改的记录。</p><h3 id="step3-本地进行内容编辑——开发" tabindex="-1"><a class="header-anchor" href="#step3-本地进行内容编辑——开发" aria-hidden="true">#</a> Step3: 本地进行内容编辑——开发</h3><h3 id="step4-push" tabindex="-1"><a class="header-anchor" href="#step4-push" aria-hidden="true">#</a> Step4: Push</h3><p>编辑完成之后（任何改动都会被检测到）有几个关键步骤：</p><ul><li>给本次修改命名，表示干了什么（例如：add a file）</li><li>右边上方暂存修改</li><li>右边底下提交更改</li><li>在修改的圈那里右键，点击UpStream，修改推送地点。<strong>一定要选择自己的库</strong>，组织的库没有权限推送上去。</li><li>最后点击<code>Push</code></li></ul><figure><img src="'+m+'" alt="图 6" tabindex="0" loading="lazy"><figcaption>图 6</figcaption></figure><h3 id="step5-pull-request-合并到主分支" tabindex="-1"><a class="header-anchor" href="#step5-pull-request-合并到主分支" aria-hidden="true">#</a> Step5: Pull Request（合并到主分支）</h3><p>Gitkraken有图形化的方式创建Pull Request。如下：</p><figure><img src="'+_+'" alt="图 7" tabindex="0" loading="lazy"><figcaption>图 7</figcaption></figure><p>Pull Request就是申请将你做的修改合并到Ai4的某个仓库（任何别人的仓库）。</p><p>!!! tip<br> 为什么能合并呢？因为首先把别人的库给拉取过来了，只是做了一些修改（增加或删减内容），仓库的“根”是一致的所以能合并。就类似，小师弟把师兄的文件复制过来了，在它的基础上改，改完之后把自己的内容复制，在师兄的文件中覆盖粘贴，这是没有问题的。<br> 所以，如果选择两个不同“根”的仓库去Pull Request，那是行不通的。</p><p>完成之后，就等“师兄审核”吧！</p><p>这是一套基于Gitkraken的简版Git合作开发流程，如果有兴趣，可以去了解原汁原味的Git。相关的资料很多！</p><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><p>Ai4Energy中有一个<code>test.jl</code>。完成以下内容：</p><ul><li>完成一次上述开发过程，形成具象认知。</li><li>开发内容：在<code>test.jl</code>库中的<code>src</code>文件夹中，添加编辑一个<code>xxx.jl</code>的文件，（<strong>xxx为自己的名字，中文，便于&quot;师兄审核&quot;</strong>）</li><li>文件内容任意。期望针对文档给出改进建议，也可以是一段Julia代码。</li></ul><p>以上是一个简单的流程，对于Git或Gitkraken来说只是冰山一角。遇到任何疑问与问题，积极思考原因，可以自行查阅相关资料，也可以积极的和Ai4组的同学交流。</p>',44);function P(z,F){const o=r("ExternalLinkIcon");return n(),l("div",null,[b,e("ol",null,[x,e("li",null,[i("下载"),e("a",G,[i("Gitkraken"),s(o)])]),W,y]),q])}const A=a(w,[["render",P],["__file","gitworkflow.html.vue"]]);export{A as default};