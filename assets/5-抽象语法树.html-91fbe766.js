import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,f as a}from"./app-40ae522b.js";const i={},d=a(`<h1 id="抽象语法树" tabindex="-1"><a class="header-anchor" href="#抽象语法树" aria-hidden="true">#</a> 抽象语法树</h1><p>从源代码（符号）一解析就得到了模型，程序语言内部实际上是用抽象语法树来表示的。编译，就是处理这个抽象语法树模型，优化，并进行代码生成。</p><h2 id="抽象语法简介" tabindex="-1"><a class="header-anchor" href="#抽象语法简介" aria-hidden="true">#</a> 抽象语法简介</h2><p>当编译器处理源代码时，它会通过词法分析和语法分析将源代码转换为抽象语法树（Abstract Syntax Tree，AST）。抽象语法树是一种以树形结构表示代码语法结构的模型。</p><p>抽象语法树是源代码的抽象表示形式，它忽略了源代码中的不必要细节，只保留了语法结构和关键信息。它捕捉了源代码的层次结构、表达式的优先级和关联关系等。</p><p>在抽象语法树中，每个节点代表代码的一个语法结构，如表达式、语句、函数声明等。节点之间通过父子关系和兄弟关系相连接，形成一棵树的结构。每个节点都包含有关该语法结构的信息，如运算符、操作数、变量名等。</p><p>编译器在处理抽象语法树时，可以进行各种优化和转换操作。例如，可以通过静态分析来检测潜在的错误和优化机会，进行常量折叠、循环展开、无效代码删除等优化，以提高程序的性能和效率。此外，编译器还可以根据抽象语法树生成目标代码，将高级语言代码转换为可执行的机器码或字节码。</p><p>抽象语法树在编译器和解释器中扮演着重要的角色，它提供了一种便于处理和分析代码的结构化表示形式。通过使用抽象语法树，编译器可以更容易地进行代码分析、优化和生成，从而实现对程序的有效处理。</p><h2 id="一个简单的c的抽象语法树例子" tabindex="-1"><a class="header-anchor" href="#一个简单的c的抽象语法树例子" aria-hidden="true">#</a> 一个简单的c的抽象语法树例子</h2><p>下面是一个极简单的C语言代码示例及其对应的抽象语法树：</p><p>C语言代码示例：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;The sum is: %d\\n&quot;</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的抽象语法树示意图：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>         Program
           |
         Compound
      /     |     \\
   Decl    Decl   Decl
    |       |      |
   int     int    int
    |       |      |
   a=5     b=10   sum
            |      |
          Add     |
        /     \\   |
      a=5     b=10|
                  |
                 printf
                   |
             StringLiteral
                   |
           &quot;The sum is: %d\\n&quot;
                   |
                  sum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，抽象语法树以树的形式展示了代码的语法结构。树的根节点是<code>Program</code>，表示整个程序。<code>Program</code>节点下面是一个<code>Compound</code>节点，表示一个复合语句（代码块）。</p><p>在<code>Compound</code>节点下，有三个<code>Decl</code>节点，分别表示三个变量的声明。每个<code>Decl</code>节点下面是一个<code>int</code>节点，表示变量的类型，以及一个赋值表达式节点，表示变量的初始化。</p><p>在代码中，有一个加法运算表达式<code>a + b</code>，它被表示为一个<code>Add</code>节点，左侧是一个<code>a=5</code>的赋值表达式节点，右侧是一个<code>b=10</code>的赋值表达式节点。</p><p>最后，代码中的<code>printf</code>语句被表示为一个<code>printf</code>节点，它包含一个字符串字面量<code>&quot;The sum is: %d\\n&quot;</code>和一个变量引用<code>sum</code>。</p><h2 id="一个简单的fortran的抽象语法树的例子" tabindex="-1"><a class="header-anchor" href="#一个简单的fortran的抽象语法树的例子" aria-hidden="true">#</a> 一个简单的fortran的抽象语法树的例子</h2><p>下面是一个简单的Fortran代码示例及其对应的抽象语法树：</p><p>Fortran代码示例：</p><div class="language-fortran line-numbers-mode" data-ext="fortran"><pre class="language-fortran"><code><span class="token keyword">PROGRAM</span> HelloWorld
  <span class="token keyword">IMPLICIT NONE</span>
  
  <span class="token keyword">INTEGER</span> <span class="token operator">::</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> sum
  
  a <span class="token operator">=</span> <span class="token number">5</span>
  b <span class="token operator">=</span> <span class="token number">10</span>
  sum <span class="token operator">=</span> a <span class="token operator">+</span> b
  
  <span class="token keyword">WRITE</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token string">&#39;The sum is:&#39;</span><span class="token punctuation">,</span> sum
  
<span class="token keyword">END PROGRAM</span> HelloWorld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的抽象语法树示意图：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>         Program
           |
      ProgramName
           |
       HelloWorld
           |
         Block
           |
      Declarations
       /    |    \\
     Decl  Decl  Decl
      |     |     |
   INTEGER INTEGER INTEGER
      |     |     |
      a     b    sum
           |     |
         Assign  |
          /     \\ |
         a       b|
                  |
                Assign
                  |
                 sum
                  |
                Add
              /     \\
             a       b
                  |
                 Write
              /        \\
             *          ,
           /  \\       /   \\
          *    a      *    sum
         / \\        / \\
        *   5      sum
       /
      10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，抽象语法树以树的形式展示了Fortran代码的语法结构。树的根节点是<code>Program</code>，表示整个程序。<code>Program</code>节点下面是一个<code>ProgramName</code>节点，表示程序的名称。</p><p>在<code>Program</code>节点的下面，有一个<code>Block</code>节点，表示程序的代码块。在代码块中，有一个<code>Declarations</code>节点，表示变量的声明。每个<code>Decl</code>节点下面是一个<code>INTEGER</code>节点，表示变量的类型。</p><p>在代码中，有三个赋值语句，分别是<code>a = 5</code>、<code>b = 10</code>和<code>sum = a + b</code>。每个赋值语句被表示为一个<code>Assign</code>节点，左侧是一个变量节点，右侧是一个表达式节点。在<code>Assign</code>节点中，使用了<code>Add</code>节点表示加法运算，左侧是变量节点<code>a</code>，右侧是变量节点<code>b</code>。</p><p>最后，代码中的<code>WRITE</code>语句被表示为一个<code>Write</code>节点，它包含一个格式控制描述符（<code>*</code>表示默认格式）和多个表达式节点。在这个示例中，<code>Write</code>节点的两个表达式分别是字符串字面量<code>&#39;The sum is:&#39;</code>和变量节点<code>sum</code>。</p><h2 id="交互式fortran与lfortran" tabindex="-1"><a class="header-anchor" href="#交互式fortran与lfortran" aria-hidden="true">#</a> 交互式Fortran与LFortran</h2><p>有一个现代fortran的工具lfortran。可以使用lfotran查看fortran的抽象语法树。</p><p>LFortran是一个用于编译Fortran语言的开源项目，它提供了生成抽象语法树（AST）的功能。</p><p>要使用LFortran来查看Fortran代码的抽象语法树，您需要在本地安装LFortran并使用其命令行工具。以下是一个简单的步骤示例：</p><ol><li><p>在您的计算机上安装Python和pip。</p></li><li><p>打开终端（命令提示符）。</p></li><li><p>使用pip安装LFortran：</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install lfortran
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li><p>创建一个Fortran源文件（例如<code>example.f90</code>）并将您的代码复制到其中。</p></li><li><p>在终端中运行以下命令来生成Fortran代码的抽象语法树：</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lfortran ast example.f90
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>LFortran将会解析并显示Fortran代码的抽象语法树。</p><p>请注意，LFortran是一个开源项目，其功能和用法可能会有所变化。建议您参考LFortran的官方文档和资源以获得更详细和最新的信息。</p><p>以下是一个Fortran代码示例及其对应的抽象语法树（类似LFortran生成的输出）：</p><p>Fortran代码示例（example.f90）：</p><div class="language-fortran line-numbers-mode" data-ext="fortran"><pre class="language-fortran"><code><span class="token keyword">PROGRAM</span> HelloWorld
  <span class="token keyword">IMPLICIT NONE</span>
  
  <span class="token keyword">INTEGER</span> <span class="token operator">::</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> sum
  
  a <span class="token operator">=</span> <span class="token number">5</span>
  b <span class="token operator">=</span> <span class="token number">10</span>
  sum <span class="token operator">=</span> a <span class="token operator">+</span> b
  
  <span class="token keyword">WRITE</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token string">&#39;The sum is:&#39;</span><span class="token punctuation">,</span> sum
  
<span class="token keyword">END PROGRAM</span> HelloWorld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LFortran生成的抽象语法树输出示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Program
  - name: HelloWorld
  - block:
      Declarations
        - a: Integer
        - b: Integer
        - sum: Integer
      Statements
        - Assignment
          - target: a
          - value: 5
        - Assignment
          - target: b
          - value: 10
        - Assignment
          - target: sum
          - value: BinaryOp
              - left: a
              - right: b
              - operator: &#39;+&#39;
        - Write
          - unit: *
          - format: *
          - items:
              - &#39;The sum is:&#39;
              - sum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，抽象语法树以一种类似于树状的文本形式呈现。它展示了代码的结构和组织方式。每个节点都具有相应的属性，如变量名、类型、表达式等。</p><p>请注意，实际的LFortran输出可能会根据其版本和配置而有所不同。以上示例仅用于说明抽象语法树的结构和概念，并非实际的LFortran输出。如需获取真实的LFortran输出，请按照前面提到的步骤在本地运行LFortran命令。</p><h2 id="来个julia的例子" tabindex="-1"><a class="header-anchor" href="#来个julia的例子" aria-hidden="true">#</a> 来个Julia的例子</h2><p>Julia编程语言本身提供了内置的<code>Meta.parse</code>函数，可用于解析Julia代码并生成抽象语法树（AST）。</p><p>以下是一个示例Julia代码及其对应的抽象语法树（使用<code>Meta.parse</code>生成）：</p><p>Julia代码示例：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">function</span> calculate_sum<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    sum <span class="token operator">=</span> a <span class="token operator">+</span> b
    <span class="token keyword">println</span><span class="token punctuation">(</span><span class="token string">&quot;The sum is: &quot;</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span>
<span class="token keyword">end</span>

calculate_sum<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>Meta.parse</code>生成的抽象语法树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>quote
    function calculate_sum(a, b)
        sum = a + b
        println(&quot;The sum is: &quot;, sum)
    end
    calculate_sum(5, 10)
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，抽象语法树以Julia代码的表达形式呈现，使用<code>quote</code>和<code>end</code>包围代码块。<code>quote</code>和<code>end</code>之间是整个代码块的抽象语法树表示。</p><p>在代码块中，有一个<code>function</code>节点，表示函数定义。函数定义包含函数名称、参数列表和函数体。函数体内部有一个赋值语句节点<code>sum = a + b</code>和一个<code>println</code>语句节点，分别表示变量赋值和输出语句。</p><p>最后，在代码块外部调用了<code>calculate_sum</code>函数并传递了参数<code>5</code>和<code>10</code>，表示函数调用的抽象语法树节点。</p><p>请注意，实际生成和解析Julia代码的抽象语法树可能需要使用Julia编程环境或相应的工具库。以上示例仅用于说明抽象语法树的结构和概念，并非实际的Julia抽象语法树。如需获取真实的Julia抽象语法树，请参考Julia官方文档和相关资源。</p><h2 id="抽象语法树与模型" tabindex="-1"><a class="header-anchor" href="#抽象语法树与模型" aria-hidden="true">#</a> 抽象语法树与模型</h2><p>抽象语法树就是我们源代码符号所对应的模型。经过parser之后，就是处理我们的模型了。</p><p>抽象语法树（AST）可以看作是将源代码转换为一种结构化的模型。通过解析器（Parser）对源代码进行词法分析和语法分析，可以构建出抽象语法树。</p><p>抽象语法树是源代码的一种抽象表示形式，它忽略了源代码中的不必要细节，只保留了语法结构和关键信息。它捕捉了源代码的层次结构、表达式的优先级和关联关系等。</p><p>一旦我们有了抽象语法树，就可以对其进行处理和分析，进而进行编译、优化和代码生成等操作。</p><p>编译器通常会对抽象语法树进行各种处理，例如静态分析、优化和代码生成。静态分析可以检测潜在的错误、优化机会和代码质量问题。优化涉及对抽象语法树进行各种优化技术，例如常量折叠、循环展开和无效代码删除，以提高程序的性能和效率。代码生成阶段将抽象语法树转换为目标代码，生成可执行的机器码或字节码。</p><p>通过使用抽象语法树，编译器可以更方便地处理和分析代码，因为抽象语法树提供了一种结构化的表示形式。它将源代码转换为易于处理的模型，使得编译器能够进行静态分析、优化和代码生成等操作，以实现对程序的有效处理。</p>`,63),l=[d];function c(r,o){return e(),s("div",null,l)}const u=n(i,[["render",c],["__file","5-抽象语法树.html.vue"]]);export{u as default};
