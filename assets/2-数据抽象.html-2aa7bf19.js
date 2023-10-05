import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as p}from"./app-6b49bbd8.js";const e={},t=p(`<h1 id="数据抽象" tabindex="-1"><a class="header-anchor" href="#数据抽象" aria-hidden="true">#</a> 数据抽象</h1><h2 id="数据抽象的概念" tabindex="-1"><a class="header-anchor" href="#数据抽象的概念" aria-hidden="true">#</a> 数据抽象的概念</h2><p>数据抽象是编程中非常重要的概念之一。它允许我们将复杂的数据结构和操作封装成高层次的抽象，使得程序的设计更加模块化、可维护和可扩展。通过数据抽象，我们可以隐藏数据的内部表示和实现细节，只向外部提供必要的接口和操作。</p><p>在编程中，数据抽象的核心思想是将数据和对数据的操作分离开来。这意味着我们可以定义一个数据类型（类或结构体），并为其定义一组相关的操作（方法或函数）。</p><h2 id="sicp中的数据抽象的核心内容" tabindex="-1"><a class="header-anchor" href="#sicp中的数据抽象的核心内容" aria-hidden="true">#</a> sicp中的数据抽象的核心内容</h2><p>在《计算机程序的构造和解释》（Structure and Interpretation of Computer Programs，简称SICP）中，数据抽象是一个核心概念，并且有几个重要的内容涉及到数据抽象：</p><ol><li><p>数据对象和数据类型：SICP强调将数据视为抽象对象，而不仅仅是简单的位序列。数据对象可以是任何具有共同特征的实体，例如数字、字符串、列表等。数据类型则是对数据对象的集合进行分类的方式。</p></li><li><p>数据表示和数据抽象屏障：数据的内部表示是指数据对象在计算机中的具体表示方式，而数据抽象屏障是一种限制，用于隐藏数据的内部表示细节，仅向外部提供必要的操作。这种分离使得我们可以改变数据的内部表示方式而不影响使用该数据的代码。</p></li><li><p>数据导向的程序设计：SICP鼓励将程序设计视为数据导向的过程。这意味着我们应该根据数据的特性和需求来设计程序，而不仅仅是关注算法和过程。通过合理地定义数据类型和操作，我们可以构建更具表现力和可复用性的程序。</p></li><li><p>抽象数据类型（ADT）：SICP中介绍了一种将数据抽象组织起来的方法，称为抽象数据类型。ADT提供了一种将数据表示和操作封装在一起的方式，以实现高层次的抽象。通过ADT，我们可以定义自己的数据类型，包括数据对象和相关的操作。</p></li><li><p>数据导向的程序设计方法：SICP介绍了一种基于消息传递的程序设计方法，其中消息是在不同数据对象之间传递的。这种方法强调将操作封装在数据对象内部，并通过发送消息来调用对象的方法。这种方式促进了模块化和可扩展性，并使得程序更容易理解和维护。</p></li></ol><p>这些是SICP中关于数据抽象的核心内容。通过理解和应用这些概念，可以提高程序设计的灵活性、可扩展性和可维护性。</p><p>但是我们这里不想讲那么多深奥的内容。我们可以就先讲讲有理数这样一个例子。</p><h2 id="有理数计算" tabindex="-1"><a class="header-anchor" href="#有理数计算" aria-hidden="true">#</a> 有理数计算</h2><p>我们可以通过一个简单的例子来说明数据抽象的概念。让我们以有理数（Rational Numbers）为例。</p><p>有理数是可以表示为两个整数的比例的数，比如1/2、3/4等。在编程中，我们可以通过一个数据类型来表示有理数，并定义相应的操作。</p><p>首先，我们可以定义一个有理数的数据类型，例如使用分子和分母来表示一个有理数：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Rational</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>numerator <span class="token operator">=</span> numerator
        self<span class="token punctuation">.</span>denominator <span class="token operator">=</span> denominator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们使用分子和分母作为有理数对象的属性。</p><p>接下来，我们可以定义有理数的一些操作，比如加法和乘法。这些操作可以被定义为类的方法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Rational</span><span class="token punctuation">:</span>
    <span class="token comment"># ... 省略 __init__ 方法</span>
    
    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 实现有理数的加法操作</span>
        numerator <span class="token operator">=</span> self<span class="token punctuation">.</span>numerator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator <span class="token operator">+</span> self<span class="token punctuation">.</span>denominator <span class="token operator">*</span> other<span class="token punctuation">.</span>numerator
        denominator <span class="token operator">=</span> self<span class="token punctuation">.</span>denominator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator
        <span class="token keyword">return</span> Rational<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">multiply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 实现有理数的乘法操作</span>
        numerator <span class="token operator">=</span> self<span class="token punctuation">.</span>numerator <span class="token operator">*</span> other<span class="token punctuation">.</span>numerator
        denominator <span class="token operator">=</span> self<span class="token punctuation">.</span>denominator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator
        <span class="token keyword">return</span> Rational<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们定义了两个操作：<code>add</code>（加法）和<code>multiply</code>（乘法）。这些操作接受另一个有理数对象作为参数，并返回一个新的有理数对象作为结果。</p><p>通过这种方式，我们将有理数的内部表示和操作封装在了一个数据类型中，隐藏了具体的实现细节。外部的代码只需要知道如何使用这些操作，而不需要了解有理数的具体实现。</p><p>例如，我们可以使用定义的有理数类来执行一些操作：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 创建两个有理数对象</span>
rational1 <span class="token operator">=</span> Rational<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
rational2 <span class="token operator">=</span> Rational<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>

<span class="token comment"># 执行加法操作</span>
result1 <span class="token operator">=</span> rational1<span class="token punctuation">.</span>add<span class="token punctuation">(</span>rational2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result1<span class="token punctuation">.</span>numerator<span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> result1<span class="token punctuation">.</span>denominator<span class="token punctuation">)</span>  <span class="token comment"># 输出：10 / 8</span>

<span class="token comment"># 执行乘法操作</span>
result2 <span class="token operator">=</span> rational1<span class="token punctuation">.</span>multiply<span class="token punctuation">(</span>rational2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result2<span class="token punctuation">.</span>numerator<span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> result2<span class="token punctuation">.</span>denominator<span class="token punctuation">)</span>  <span class="token comment"># 输出：3 / 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这个例子，我们展示了如何使用数据抽象来表示有理数，并定义了相应的操作。这种抽象使得我们可以直观地操作有理数，而不需要关心具体的实现细节。</p><h2 id="以julia语言举例" tabindex="-1"><a class="header-anchor" href="#以julia语言举例" aria-hidden="true">#</a> 以Julia语言举例</h2><p>我们也可以通过一个示例来说明数据抽象在 Julia 中的应用。</p><p>假设我们希望创建一个复数类型，可以表示实部和虚部。我们可以使用 Julia 的结构体（Struct）来定义这个数据类型，并定义一些操作。</p><p>首先，我们可以定义一个名为 <code>ComplexNumber</code> 的结构体：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">struct</span> ComplexNumber
    real<span class="token punctuation">::</span>Float64
    imaginary<span class="token punctuation">::</span>Float64
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们使用 <code>real</code> 表示实部，<code>imaginary</code> 表示虚部。</p><p>接下来，我们可以定义一些操作，比如加法和乘法。这些操作可以通过函数来定义：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">function</span> add<span class="token punctuation">(</span>a<span class="token punctuation">::</span>ComplexNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>ComplexNumber<span class="token punctuation">)</span>
    real_part <span class="token operator">=</span> a<span class="token punctuation">.</span>real <span class="token operator">+</span> b<span class="token punctuation">.</span>real
    imaginary_part <span class="token operator">=</span> a<span class="token punctuation">.</span>imaginary <span class="token operator">+</span> b<span class="token punctuation">.</span>imaginary
    <span class="token keyword">return</span> ComplexNumber<span class="token punctuation">(</span>real_part<span class="token punctuation">,</span> imaginary_part<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> multiply<span class="token punctuation">(</span>a<span class="token punctuation">::</span>ComplexNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>ComplexNumber<span class="token punctuation">)</span>
    real_part <span class="token operator">=</span> a<span class="token punctuation">.</span>real <span class="token operator">*</span> b<span class="token punctuation">.</span>real <span class="token operator">-</span> a<span class="token punctuation">.</span>imaginary <span class="token operator">*</span> b<span class="token punctuation">.</span>imaginary
    imaginary_part <span class="token operator">=</span> a<span class="token punctuation">.</span>real <span class="token operator">*</span> b<span class="token punctuation">.</span>imaginary <span class="token operator">+</span> a<span class="token punctuation">.</span>imaginary <span class="token operator">*</span> b<span class="token punctuation">.</span>real
    <span class="token keyword">return</span> ComplexNumber<span class="token punctuation">(</span>real_part<span class="token punctuation">,</span> imaginary_part<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们定义了两个操作：<code>add</code>（加法）和<code>multiply</code>（乘法）。这些函数接受两个复数对象作为参数，并返回一个新的复数对象作为结果。</p><p>现在，我们可以使用定义的复数类型和操作来执行一些操作：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token comment"># 创建两个复数对象</span>
complex1 <span class="token operator">=</span> ComplexNumber<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">)</span>
complex2 <span class="token operator">=</span> ComplexNumber<span class="token punctuation">(</span><span class="token number">3.0</span><span class="token punctuation">,</span> <span class="token number">4.0</span><span class="token punctuation">)</span>

<span class="token comment"># 执行加法操作</span>
result1 <span class="token operator">=</span> add<span class="token punctuation">(</span>complex1<span class="token punctuation">,</span> complex2<span class="token punctuation">)</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>result1<span class="token punctuation">.</span>real<span class="token punctuation">,</span> <span class="token string">&quot; + &quot;</span><span class="token punctuation">,</span> result1<span class="token punctuation">.</span>imaginary<span class="token punctuation">,</span> <span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 输出：4.0 + 6.0i</span>

<span class="token comment"># 执行乘法操作</span>
result2 <span class="token operator">=</span> multiply<span class="token punctuation">(</span>complex1<span class="token punctuation">,</span> complex2<span class="token punctuation">)</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>result2<span class="token punctuation">.</span>real<span class="token punctuation">,</span> <span class="token string">&quot; + &quot;</span><span class="token punctuation">,</span> result2<span class="token punctuation">.</span>imaginary<span class="token punctuation">,</span> <span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 输出：-5.0 + 10.0i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这个例子，我们展示了如何使用数据抽象来表示复数，并定义了相应的操作。这种抽象使得我们可以直观地操作复数，而不需要关心具体的实现细节。</p><h2 id="使用-julia-来实现有理数的加减乘除操作" tabindex="-1"><a class="header-anchor" href="#使用-julia-来实现有理数的加减乘除操作" aria-hidden="true">#</a> 使用 Julia 来实现有理数的加减乘除操作</h2><p>当然，我们可以使用 Julia 来实现有理数的加减乘除操作。</p><p>Julia 提供了 <code>Rational</code> 类型来表示有理数，并且内置了一些操作符来处理有理数的加减乘除。</p><p>首先，我们可以使用 <code>//</code> 运算符创建一个有理数：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>a <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">//</span> <span class="token number">2</span>
b <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">//</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们可以使用内置的操作符来执行加减乘除操作：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token comment"># 加法</span>
c <span class="token operator">=</span> a <span class="token operator">+</span> b
<span class="token keyword">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment"># 输出：5//4</span>

<span class="token comment"># 减法</span>
d <span class="token operator">=</span> a <span class="token operator">-</span> b
<span class="token keyword">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>  <span class="token comment"># 输出：-1//4</span>

<span class="token comment"># 乘法</span>
e <span class="token operator">=</span> a <span class="token operator">*</span> b
<span class="token keyword">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>  <span class="token comment"># 输出：3//8</span>

<span class="token comment"># 除法</span>
f <span class="token operator">=</span> a <span class="token operator">/</span> b
<span class="token keyword">println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>  <span class="token comment"># 输出：2//3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们使用 <code>+</code>、<code>-</code>、<code>*</code>、<code>/</code> 这些操作符来执行有理数的加减乘除操作。Julia 会自动处理有理数的运算，并返回一个新的有理数作为结果。</p><p>通过使用内置的有理数类型和操作符，我们可以方便地进行有理数的加减乘除运算，而不需要手动定义自己的数据类型和操作。</p><h2 id="如果不用julia内置的而是自己写一个" tabindex="-1"><a class="header-anchor" href="#如果不用julia内置的而是自己写一个" aria-hidden="true">#</a> 如果不用julia内置的而是自己写一个</h2><p>让我们自己实现一个简单的有理数类型，并定义加减乘除的操作。</p><p>在 Julia 中，我们可以使用结构体来定义有理数类型，并在结构体中定义相应的操作函数。</p><p>首先，我们定义一个名为 <code>RationalNumber</code> 的结构体，包含 <code>numerator</code>（分子）和 <code>denominator</code>（分母）两个字段：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">struct</span> RationalNumber
    numerator<span class="token punctuation">::</span>Int64
    denominator<span class="token punctuation">::</span>Int64
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们可以为结构体定义相应的操作函数，包括加法、减法、乘法和除法：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token comment"># 加法操作</span>
<span class="token keyword">function</span> <span class="token operator">+</span><span class="token punctuation">(</span>a<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">)</span>
    numerator <span class="token operator">=</span> a<span class="token punctuation">.</span>numerator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator <span class="token operator">+</span> b<span class="token punctuation">.</span>numerator <span class="token operator">*</span> a<span class="token punctuation">.</span>denominator
    denominator <span class="token operator">=</span> a<span class="token punctuation">.</span>denominator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator
    <span class="token keyword">return</span> simplify<span class="token punctuation">(</span>RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment"># 减法操作</span>
<span class="token keyword">function</span> <span class="token operator">-</span><span class="token punctuation">(</span>a<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">)</span>
    numerator <span class="token operator">=</span> a<span class="token punctuation">.</span>numerator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator <span class="token operator">-</span> b<span class="token punctuation">.</span>numerator <span class="token operator">*</span> a<span class="token punctuation">.</span>denominator
    denominator <span class="token operator">=</span> a<span class="token punctuation">.</span>denominator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator
    <span class="token keyword">return</span> simplify<span class="token punctuation">(</span>RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment"># 乘法操作</span>
<span class="token keyword">function</span> <span class="token operator">*</span><span class="token punctuation">(</span>a<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">)</span>
    numerator <span class="token operator">=</span> a<span class="token punctuation">.</span>numerator <span class="token operator">*</span> b<span class="token punctuation">.</span>numerator
    denominator <span class="token operator">=</span> a<span class="token punctuation">.</span>denominator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator
    <span class="token keyword">return</span> simplify<span class="token punctuation">(</span>RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment"># 除法操作</span>
<span class="token keyword">function</span> <span class="token operator">/</span><span class="token punctuation">(</span>a<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">)</span>
    numerator <span class="token operator">=</span> a<span class="token punctuation">.</span>numerator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator
    denominator <span class="token operator">=</span> a<span class="token punctuation">.</span>denominator <span class="token operator">*</span> b<span class="token punctuation">.</span>numerator
    <span class="token keyword">return</span> simplify<span class="token punctuation">(</span>RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们定义了 <code>+</code>、<code>-</code>、<code>*</code>、<code>/</code> 这些函数来执行有理数的加减乘除操作。我们还定义了一个 <code>simplify</code> 函数，用于简化有理数，即将分子和分母的公约数约简至最简形式。</p><p>最后，我们可以使用我们自己定义的有理数类型和操作来执行一些操作：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token comment"># 创建两个有理数对象</span>
a <span class="token operator">=</span> RationalNumber<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> RationalNumber<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>

<span class="token comment"># 执行加法操作</span>
c <span class="token operator">=</span> a <span class="token operator">+</span> b
<span class="token keyword">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment"># 输出：5//4</span>

<span class="token comment"># 执行减法操作</span>
d <span class="token operator">=</span> a <span class="token operator">-</span> b
<span class="token keyword">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>  <span class="token comment"># 输出：-1//4</span>

<span class="token comment"># 执行乘法操作</span>
e <span class="token operator">=</span> a <span class="token operator">*</span> b
<span class="token keyword">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>  <span class="token comment"># 输出：3//8</span>

<span class="token comment"># 执行除法操作</span>
f <span class="token operator">=</span> a <span class="token operator">/</span> b
<span class="token keyword">println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>  <span class="token comment"># 输出：2//3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这个例子，我们展示了如何使用自定义的有理数类型和操作函数来执行有理数的加减乘除运算。我们的实现可能较为简单，但它演示了如何通过自定义类型和函数来进行数据抽象和操作。</p><p>这里就定义了函数/和函数*等等，运算符就是函数，体现的淋漓尽致。</p><p>在很多编程语言中，运算符实际上是函数的语法糖，可以通过函数来定义运算符的行为。这种方式使得运算符看起来更加直观和易于理解。</p><p>在我们的例子中，我们使用了函数来定义有理数的加减乘除操作。在 Julia 中，运算符 <code>+</code>、<code>-</code>、<code>*</code>、<code>/</code> 实际上就是函数 <code>+</code>、<code>-</code>、<code>*</code>、<code>/</code> 的简化写法。通过定义这些函数，我们实际上定义了对应的运算符的行为。</p><p>这种将运算符作为函数来定义的方式体现了函数式编程的思想，它强调将操作看作是函数应用的过程，使得代码更加模块化、可组合和可扩展。通过将运算符定义为函数，我们可以更灵活地操作数据，并可以根据需要定义自己的运算符行为。</p><p>确实函数式编程的思想在数据抽象中扮演了重要的角色，使得代码更具表现力和可维护性。</p><h2 id="能源系统建模" tabindex="-1"><a class="header-anchor" href="#能源系统建模" aria-hidden="true">#</a> 能源系统建模</h2><p>在能源系统中，我们可以定义一个能源系统类型，它有变量列表，有参数列表，也有方程列表。两个能源系统连接在一起构成一个更大的能源系统。而这个连接，通常表现为方程。那我们也可以定义一种加法运算。能源系统1+能源系统2+连接，结果返回也是一个能源系统，它的变量表就是能源系统1的变量表和能源系统的变量表组织在一起，参数同样，而方程列表则是能源系统1的方程列表和能源系统2的方程列表，在还得算上连接的方程列表。</p><p>我可以通过一个简单的示例来展示如何使用 Julia 定义能源系统类型，并实现能源系统的加法运算。</p><p>首先，我们定义一个名为 <code>EnergySystem</code> 的结构体，包含变量列表、参数列表和方程列表：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">struct</span> EnergySystem
    variables<span class="token punctuation">::</span>Vector<span class="token punctuation">{</span>Symbol<span class="token punctuation">}</span>
    parameters<span class="token punctuation">::</span>Vector<span class="token punctuation">{</span>Symbol<span class="token punctuation">}</span>
    equations<span class="token punctuation">::</span>Vector<span class="token punctuation">{</span>Function<span class="token punctuation">}</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们使用 <code>variables</code> 表示变量列表，<code>parameters</code> 表示参数列表，<code>equations</code> 表示方程列表。变量和参数都以 <code>Symbol</code> 类型表示。</p><p>接下来，我们可以定义一个函数来执行能源系统的加法运算：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">function</span> <span class="token operator">+</span><span class="token punctuation">(</span>system1<span class="token punctuation">::</span>EnergySystem<span class="token punctuation">,</span> system2<span class="token punctuation">::</span>EnergySystem<span class="token punctuation">)</span>
    <span class="token comment"># 合并变量列表</span>
    variables <span class="token operator">=</span> union<span class="token punctuation">(</span>system1<span class="token punctuation">.</span>variables<span class="token punctuation">,</span> system2<span class="token punctuation">.</span>variables<span class="token punctuation">)</span>
    
    <span class="token comment"># 合并参数列表</span>
    parameters <span class="token operator">=</span> union<span class="token punctuation">(</span>system1<span class="token punctuation">.</span>parameters<span class="token punctuation">,</span> system2<span class="token punctuation">.</span>parameters<span class="token punctuation">)</span>
    
    <span class="token comment"># 合并方程列表</span>
    equations <span class="token operator">=</span> vcat<span class="token punctuation">(</span>system1<span class="token punctuation">.</span>equations<span class="token punctuation">,</span> system2<span class="token punctuation">.</span>equations<span class="token punctuation">)</span>
    
    <span class="token comment"># 返回新的能源系统</span>
    <span class="token keyword">return</span> EnergySystem<span class="token punctuation">(</span>variables<span class="token punctuation">,</span> parameters<span class="token punctuation">,</span> equations<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个函数中，我们使用 <code>union</code> 函数合并变量列表和参数列表，使用 <code>vcat</code> 函数合并方程列表，然后创建一个新的 <code>EnergySystem</code> 对象来存储合并后的变量、参数和方程。</p><p>现在，我们可以使用我们定义的能源系统类型和操作来执行一些操作：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token comment"># 创建能源系统1</span>
system1 <span class="token operator">=</span> EnergySystem<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">:</span>var1<span class="token punctuation">,</span> <span class="token punctuation">:</span>var2<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">:</span>param1<span class="token punctuation">,</span> <span class="token punctuation">:</span>param2<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>eq1<span class="token punctuation">,</span> eq2<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 创建能源系统2</span>
system2 <span class="token operator">=</span> EnergySystem<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">:</span>var3<span class="token punctuation">,</span> <span class="token punctuation">:</span>var4<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">:</span>param3<span class="token punctuation">,</span> <span class="token punctuation">:</span>param4<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>eq3<span class="token punctuation">,</span> eq4<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 执行能源系统的加法操作</span>
result <span class="token operator">=</span> system1 <span class="token operator">+</span> system2

<span class="token comment"># 打印结果</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>variables<span class="token punctuation">)</span>  <span class="token comment"># 输出：[:var1, :var2, :var3, :var4]</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>parameters<span class="token punctuation">)</span>  <span class="token comment"># 输出：[:param1, :param2, :param3, :param4]</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>equations<span class="token punctuation">)</span>  <span class="token comment"># 输出：[eq1, eq2, eq3, eq4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这个例子，我们展示了如何使用自定义的能源系统类型和操作来执行能源系统的加法运算。我们的实现可能是一个简化的示例，实际应用中可能涉及更复杂的能源系统模型和方程。然而，这个例子说明了如何使用 Julia 中的自定义类型和函数来实现能源系统的抽象和操作。</p><p>我们可能需要连接类型，其本质是方程。</p><p>连接类型可以被抽象为方程，但在实际实现中可能会有更多的细节和复杂性。这个例子中我们简化了连接类型，将其看作是能源系统加法运算的一部分。</p><p>在能源系统中，连接可以表示不同能源系统之间的关系，例如能源传输、转换或交互。连接可以通过方程来描述，方程将连接的变量和参数联系起来，形成一个更大的能源系统。</p><p>在实际应用中，连接可能涉及到更多的模型和约束条件，需要根据具体情况进行建模和定义。这可能需要更多的设计和领域知识。</p><p>总之，通过定义能源系统类型和连接类型，并使用合适的方程描述它们之间的关系，我们可以建立一个更复杂的能源系统模型。这种抽象和建模方式可以帮助我们更好地理解和分析能源系统，以及进行系统级的优化和规划。</p><p>再用上递归，我们就可以从简单的能源系统，逐级的构建非常复杂的能源系统了。</p><p>使用递归可以方便地构建复杂的能源系统，通过逐级连接简单的能源系统来创建更大规模的能源系统。</p><p>让我们通过一个示例来说明递归构建能源系统的过程。</p><p>首先，我们定义一个能源系统的结构体 <code>EnergySystem</code>，包含变量列表、参数列表和方程列表，与之前的示例相同。</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">struct</span> EnergySystem
    variables<span class="token punctuation">::</span>Vector<span class="token punctuation">{</span>Symbol<span class="token punctuation">}</span>
    parameters<span class="token punctuation">::</span>Vector<span class="token punctuation">{</span>Symbol<span class="token punctuation">}</span>
    equations<span class="token punctuation">::</span>Vector<span class="token punctuation">{</span>Function<span class="token punctuation">}</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们定义一个递归函数 <code>buildEnergySystem</code>，用于构建能源系统。该函数接受一个整数 <code>n</code> 作为参数，表示能源系统的级别。</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">function</span> buildEnergySystem<span class="token punctuation">(</span>n<span class="token punctuation">::</span>Int<span class="token punctuation">)</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">1</span>
        <span class="token comment"># 基础能源系统，例如单个发电机</span>
        variables <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">:</span>variable1<span class="token punctuation">]</span>
        parameters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">:</span>parameter1<span class="token punctuation">]</span>
        equations <span class="token operator">=</span> <span class="token punctuation">[</span>equation1<span class="token punctuation">]</span>
        <span class="token keyword">return</span> EnergySystem<span class="token punctuation">(</span>variables<span class="token punctuation">,</span> parameters<span class="token punctuation">,</span> equations<span class="token punctuation">)</span>
    <span class="token keyword">else</span>
        <span class="token comment"># 构建更复杂的能源系统，递归连接</span>
        subsystem1 <span class="token operator">=</span> buildEnergySystem<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        subsystem2 <span class="token operator">=</span> buildEnergySystem<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        connection <span class="token operator">=</span> EnergySystem<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">:</span>connection_variable<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">:</span>connection_parameter<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>connection_equation<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> subsystem1 <span class="token operator">+</span> subsystem2 <span class="token operator">+</span> connection
    <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个函数中，我们使用条件判断来处理基础能源系统的情况，也就是级别为 1 的能源系统。对于级别大于 1 的能源系统，我们通过递归构建两个子系统，并添加一个连接系统。</p><p>最后，我们可以调用 <code>buildEnergySystem</code> 函数来构建一个复杂的能源系统：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code>complexSystem <span class="token operator">=</span> buildEnergySystem<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将构建一个级别为 3 的复杂能源系统，它由多个能源子系统和连接组成。通过递归构建，我们可以灵活地扩展和组合简单的能源系统，从而构建出更大规模、更复杂的能源系统。</p><p>请注意，这只是一个简化的示例，实际的能源系统模型和连接可能涉及更多的变量、参数和方程。递归构建能源系统需要根据实际需求和领域知识进行设计和建模，以确保模型的准确性和合理性。</p><p>构建过程是从下到上。但是在获取大能源系统的变量表、参数表、方程表的时候，用到递归，递归下去推演出来。</p><p>如果你想要从底层的能源系统递归地推演出大能源系统的变量表、参数表和方程表，可以这样进行。</p><p>在这种情况下，我们可以修改 <code>EnergySystem</code> 结构体，使其包含一个能源子系统的列表，以及一个连接系统的列表。然后，我们可以编写一个递归函数 <code>flattenEnergySystem</code>，通过递归遍历能源子系统和连接系统，将其变量、参数和方程合并成一个大能源系统。</p><p>下面是一个示例代码：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">struct</span> EnergySystem
    subsystems<span class="token punctuation">::</span>Vector<span class="token punctuation">{</span>EnergySystem<span class="token punctuation">}</span>
    connections<span class="token punctuation">::</span>Vector<span class="token punctuation">{</span>EnergySystem<span class="token punctuation">}</span>
    variables<span class="token punctuation">::</span>Vector<span class="token punctuation">{</span>Symbol<span class="token punctuation">}</span>
    parameters<span class="token punctuation">::</span>Vector<span class="token punctuation">{</span>Symbol<span class="token punctuation">}</span>
    equations<span class="token punctuation">::</span>Vector<span class="token punctuation">{</span>Function<span class="token punctuation">}</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> flattenEnergySystem<span class="token punctuation">(</span>system<span class="token punctuation">::</span>EnergySystem<span class="token punctuation">)</span>
    variables <span class="token operator">=</span> system<span class="token punctuation">.</span>variables
    parameters <span class="token operator">=</span> system<span class="token punctuation">.</span>parameters
    equations <span class="token operator">=</span> system<span class="token punctuation">.</span>equations

    <span class="token keyword">for</span> subsystem <span class="token keyword">in</span> system<span class="token punctuation">.</span>subsystems
        subsystem_variables<span class="token punctuation">,</span> subsystem_parameters<span class="token punctuation">,</span> subsystem_equations <span class="token operator">=</span> flattenEnergySystem<span class="token punctuation">(</span>subsystem<span class="token punctuation">)</span>
        variables <span class="token operator">=</span> union<span class="token punctuation">(</span>variables<span class="token punctuation">,</span> subsystem_variables<span class="token punctuation">)</span>
        parameters <span class="token operator">=</span> union<span class="token punctuation">(</span>parameters<span class="token punctuation">,</span> subsystem_parameters<span class="token punctuation">)</span>
        equations <span class="token operator">=</span> vcat<span class="token punctuation">(</span>equations<span class="token punctuation">,</span> subsystem_equations<span class="token punctuation">)</span>
    <span class="token keyword">end</span>

    <span class="token keyword">for</span> connection <span class="token keyword">in</span> system<span class="token punctuation">.</span>connections
        connection_variables<span class="token punctuation">,</span> connection_parameters<span class="token punctuation">,</span> connection_equations <span class="token operator">=</span> flattenEnergySystem<span class="token punctuation">(</span>connection<span class="token punctuation">)</span>
        variables <span class="token operator">=</span> union<span class="token punctuation">(</span>variables<span class="token punctuation">,</span> connection_variables<span class="token punctuation">)</span>
        parameters <span class="token operator">=</span> union<span class="token punctuation">(</span>parameters<span class="token punctuation">,</span> connection_parameters<span class="token punctuation">)</span>
        equations <span class="token operator">=</span> vcat<span class="token punctuation">(</span>equations<span class="token punctuation">,</span> connection_equations<span class="token punctuation">)</span>
    <span class="token keyword">end</span>

    <span class="token keyword">return</span> variables<span class="token punctuation">,</span> parameters<span class="token punctuation">,</span> equations
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个代码中，<code>flattenEnergySystem</code> 函数递归地遍历能源子系统和连接系统。对于每个子系统和连接系统，它都调用 <code>flattenEnergySystem</code> 函数来获取其变量、参数和方程，并将其合并到当前大能源系统中。最后，函数返回整个大能源系统的变量表、参数表和方程表。</p><p>你可以使用以下代码示例来测试这个函数：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token comment"># 创建能源系统1</span>
subsystem1 <span class="token operator">=</span> EnergySystem<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">:</span>var1<span class="token punctuation">,</span> <span class="token punctuation">:</span>var2<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">:</span>param1<span class="token punctuation">,</span> <span class="token punctuation">:</span>param2<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>eq1<span class="token punctuation">,</span> eq2<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 创建能源系统2</span>
subsystem2 <span class="token operator">=</span> EnergySystem<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">:</span>var3<span class="token punctuation">,</span> <span class="token punctuation">:</span>var4<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">:</span>param3<span class="token punctuation">,</span> <span class="token punctuation">:</span>param4<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>eq3<span class="token punctuation">,</span> eq4<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 创建连接系统</span>
connection <span class="token operator">=</span> EnergySystem<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">:</span>connection_variable<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">:</span>connection_parameter<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>connection_equation<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 构建大能源系统</span>
complexSystem <span class="token operator">=</span> EnergySystem<span class="token punctuation">(</span><span class="token punctuation">[</span>subsystem1<span class="token punctuation">,</span> subsystem2<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>connection<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 获取大能源系统的变量表、参数表和方程表</span>
variables<span class="token punctuation">,</span> parameters<span class="token punctuation">,</span> equations <span class="token operator">=</span> flattenEnergySystem<span class="token punctuation">(</span>complexSystem<span class="token punctuation">)</span>

<span class="token comment"># 打印结果</span>
<span class="token keyword">println</span><span class="token punctuation">(</span><span class="token string">&quot;Variables: &quot;</span><span class="token punctuation">,</span> variables<span class="token punctuation">)</span>
<span class="token keyword">println</span><span class="token punctuation">(</span><span class="token string">&quot;Parameters: &quot;</span><span class="token punctuation">,</span> parameters<span class="token punctuation">)</span>
<span class="token keyword">println</span><span class="token punctuation">(</span><span class="token string">&quot;Equations: &quot;</span><span class="token punctuation">,</span> equations<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过递归的方式，我们可以从底层的能源系统开始，逐级地推演出大能源系统的变量表、参数表和方程表。请注意，这个示例代码仅用于演示基本思想，实际应用中可能需要根据具体情况进行适当的调整和扩展。</p><h2 id="初等数学符号求导" tabindex="-1"><a class="header-anchor" href="#初等数学符号求导" aria-hidden="true">#</a> 初等数学符号求导</h2><p>我们实际上可以再进一步演示一下数学上的初等函数及其符号求导。</p><p>在数学中，初等函数是指常见的基本函数，例如幂函数、指数函数、对数函数、三角函数等。对这些函数进行符号求导是求导的一种常见操作。</p><p>让我们以一些常见的初等函数为例，演示它们的符号求导过程。</p><ol><li><p>幂函数：<br> 对于幂函数 f(x) = x^n，其中 n 是常数，它的导数是 f&#39;(x) = n * x^(n-1)。</p></li><li><p>指数函数：<br> 对于指数函数 f(x) = a^x，其中 a 是常数且 a &gt; 0，它的导数是 f&#39;(x) = ln(a) * a^x。</p></li><li><p>对数函数：<br> 对于自然对数函数 f(x) = ln(x)，它的导数是 f&#39;(x) = 1 / x。</p></li><li><p>三角函数：<br> 对于正弦函数 f(x) = sin(x)，它的导数是 f&#39;(x) = cos(x)。<br> 对于余弦函数 f(x) = cos(x)，它的导数是 f&#39;(x) = -sin(x)。<br> 对于正切函数 f(x) = tan(x)，它的导数是 f&#39;(x) = sec^2(x)，其中 sec(x) 是 secant 函数。</p></li></ol><p>这些是一些常见初等函数的导数规则，可以根据这些规则对函数进行符号求导。</p><p>如果你有特定的初等函数需要求导，你可以提供函数表达式，我可以帮你进行求导操作。</p><p>首先是初等函数的求导，然后是复合函数的求导。就像sicp中的那样。</p><p>我们可以按照要求先演示初等函数的求导，然后再演示复合函数的求导，并使用 Julia 进行实现。</p><p>首先，我们来实现初等函数的求导。我们可以定义一个 <code>derivative</code> 函数，接受一个函数表达式和一个变量作为参数，然后计算该函数在给定变量处的导数。</p><p>下面是一个示例代码，实现了幂函数、指数函数、对数函数和三角函数的求导：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">using</span> SymPy

<span class="token comment"># 定义符号变量</span>
x <span class="token operator">=</span> symbols<span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 幂函数的求导</span>
<span class="token keyword">function</span> power_derivative<span class="token punctuation">(</span>f<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
    <span class="token keyword">return</span> diff<span class="token punctuation">(</span>f<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token operator">*</span> n <span class="token operator">*</span> x<span class="token operator">^</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment"># 指数函数的求导</span>
<span class="token keyword">function</span> exponential_derivative<span class="token punctuation">(</span>f<span class="token punctuation">,</span> a<span class="token punctuation">)</span>
    <span class="token keyword">return</span> diff<span class="token punctuation">(</span>f<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token operator">*</span> log<span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">*</span> a<span class="token operator">^</span>x
<span class="token keyword">end</span>

<span class="token comment"># 对数函数的求导</span>
<span class="token keyword">function</span> logarithm_derivative<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    <span class="token keyword">return</span> diff<span class="token punctuation">(</span>f<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token operator">/</span> x
<span class="token keyword">end</span>

<span class="token comment"># 三角函数的求导</span>
<span class="token keyword">function</span> trigonometric_derivative<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    <span class="token keyword">return</span> diff<span class="token punctuation">(</span>f<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment"># 示例：对函数 f(x) = x^2 求导</span>
f <span class="token operator">=</span> x<span class="token operator">^</span><span class="token number">2</span>
df <span class="token operator">=</span> power_derivative<span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span>  <span class="token comment"># 输出：2*x</span>

<span class="token comment"># 示例：对函数 f(x) = exp(x) 求导</span>
f <span class="token operator">=</span> exp<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
df <span class="token operator">=</span> exponential_derivative<span class="token punctuation">(</span>f<span class="token punctuation">,</span> MathConstants<span class="token punctuation">.</span>e<span class="token punctuation">)</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span>  <span class="token comment"># 输出：ℯ^x</span>

<span class="token comment"># 示例：对函数 f(x) = log(x) 求导</span>
f <span class="token operator">=</span> log<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
df <span class="token operator">=</span> logarithm_derivative<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span>  <span class="token comment"># 输出：1/x</span>

<span class="token comment"># 示例：对函数 f(x) = sin(x) 求导</span>
f <span class="token operator">=</span> sin<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
df <span class="token operator">=</span> trigonometric_derivative<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span>  <span class="token comment"># 输出：cos(x)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过使用 SymPy 库，我们可以定义符号变量 <code>x</code>，并使用 <code>diff</code> 函数对函数进行求导。我们定义了 <code>power_derivative</code>、<code>exponential_derivative</code>、<code>logarithm_derivative</code> 和 <code>trigonometric_derivative</code> 函数来分别计算幂函数、指数函数、对数函数和三角函数的导数。</p><p>我们提供了一些示例，对不同的函数进行求导并打印结果。</p><p>接下来，我们将演示复合函数的求导，即将多个函数组合起来，然后求导整个组合函数。</p><p>现在我们来演示复合函数的求导。</p><p>在数学中，复合函数是由多个函数组合而成的函数。要计算复合函数的导数，我们可以使用链式法则。链式法则指出，如果 y 是由函数 u 和 v 组合而成的函数，即 y = u(v(x))，那么 y 对 x 的导数可以通过 u 对 v 的导数乘以 v 对 x 的导数来计算。</p><p>下面是一个示例代码，实现了复合函数的求导：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">using</span> SymPy

<span class="token comment"># 定义符号变量</span>
x <span class="token operator">=</span> symbols<span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 复合函数的求导</span>
<span class="token keyword">function</span> composite_derivative<span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span>
    <span class="token keyword">return</span> diff<span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span> <span class="token operator">*</span> diff<span class="token punctuation">(</span>g<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment"># 示例：对函数 f(x) = (2x + 1)^3 求导</span>
f <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">^</span><span class="token number">3</span>
g <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>x <span class="token operator">+</span> <span class="token number">1</span>
df <span class="token operator">=</span> composite_derivative<span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span>  <span class="token comment"># 输出：12(2x + 1)^2</span>

<span class="token comment"># 示例：对函数 f(x) = sin(2x) 求导</span>
f <span class="token operator">=</span> sin<span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>x<span class="token punctuation">)</span>
g <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>x
df <span class="token operator">=</span> composite_derivative<span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span>  <span class="token comment"># 输出：2cos(2x)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在示例中，我们定义了 <code>composite_derivative</code> 函数，它接受两个函数表达式作为参数，并计算它们的复合函数在给定变量处的导数。</p><p>我们提供了一些示例，对不同的复合函数进行求导并打印结果。</p><p>通过使用 SymPy 库的 <code>diff</code> 函数，我们可以方便地进行符号求导和复合函数的求导。</p><p>请注意，以上代码仅为演示目的，并可能无法处理所有复杂的函数表达式和求导情况。在实际应用中，根据具体函数表达式和求导规则，可能需要进行更复杂的推导和处理。</p><h2 id="有理数的结构体和操作" tabindex="-1"><a class="header-anchor" href="#有理数的结构体和操作" aria-hidden="true">#</a> 有理数的结构体和操作</h2><p>我们可以从有理数的数据抽象开始。有理数是可以表示为分子和分母的整数比例的数值类型。我们可以使用结构体来表示有理数，并定义相应的操作。</p><p>以下是一个用 Julia 实现有理数的例子：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">struct</span> RationalNumber
    numerator<span class="token punctuation">::</span>Int64
    denominator<span class="token punctuation">::</span>Int64
<span class="token keyword">end</span>

<span class="token comment"># 定义有理数的构造函数</span>
<span class="token keyword">function</span> RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">::</span>Int64<span class="token punctuation">,</span> denominator<span class="token punctuation">::</span>Int64<span class="token punctuation">)</span>
    gcd_value <span class="token operator">=</span> gcd<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
    <span class="token keyword">return</span> RationalNumber<span class="token punctuation">(</span>numerator <span class="token operator">÷</span> gcd_value<span class="token punctuation">,</span> denominator <span class="token operator">÷</span> gcd_value<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment"># 有理数的加法运算</span>
<span class="token keyword">function</span> <span class="token operator">+</span><span class="token punctuation">(</span>a<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">)</span>
    numerator <span class="token operator">=</span> a<span class="token punctuation">.</span>numerator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator <span class="token operator">+</span> b<span class="token punctuation">.</span>numerator <span class="token operator">*</span> a<span class="token punctuation">.</span>denominator
    denominator <span class="token operator">=</span> a<span class="token punctuation">.</span>denominator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator
    <span class="token keyword">return</span> RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment"># 有理数的减法运算</span>
<span class="token keyword">function</span> <span class="token operator">-</span><span class="token punctuation">(</span>a<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">)</span>
    numerator <span class="token operator">=</span> a<span class="token punctuation">.</span>numerator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator <span class="token operator">-</span> b<span class="token punctuation">.</span>numerator <span class="token operator">*</span> a<span class="token punctuation">.</span>denominator
    denominator <span class="token operator">=</span> a<span class="token punctuation">.</span>denominator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator
    <span class="token keyword">return</span> RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment"># 有理数的乘法运算</span>
<span class="token keyword">function</span> <span class="token operator">*</span><span class="token punctuation">(</span>a<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">)</span>
    numerator <span class="token operator">=</span> a<span class="token punctuation">.</span>numerator <span class="token operator">*</span> b<span class="token punctuation">.</span>numerator
    denominator <span class="token operator">=</span> a<span class="token punctuation">.</span>denominator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator
    <span class="token keyword">return</span> RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment"># 有理数的除法运算</span>
<span class="token keyword">function</span> <span class="token operator">/</span><span class="token punctuation">(</span>a<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">)</span>
    numerator <span class="token operator">=</span> a<span class="token punctuation">.</span>numerator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator
    denominator <span class="token operator">=</span> a<span class="token punctuation">.</span>denominator <span class="token operator">*</span> b<span class="token punctuation">.</span>numerator
    <span class="token keyword">return</span> RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment"># 示例：使用有理数进行计算</span>
a <span class="token operator">=</span> RationalNumber<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> RationalNumber<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
c <span class="token operator">=</span> a <span class="token operator">+</span> b
d <span class="token operator">=</span> a <span class="token operator">*</span> b
<span class="token keyword">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment"># 输出：5//4</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>  <span class="token comment"># 输出：3//8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们定义了一个名为 <code>RationalNumber</code> 的结构体，表示有理数。结构体中有 <code>numerator</code>（分子）和 <code>denominator</code>（分母）两个字段。</p><p>我们还定义了有理数的构造函数，用于创建 <code>RationalNumber</code> 类型的对象，并自动约简为最简形式。此外，我们还实现了有理数的加法、减法、乘法和除法运算，通过重载相应的操作符来实现。</p><p>通过这个例子，我们可以展示数据抽象的概念，并说明如何使用结构体和函数来实现有理数的抽象和操作。</p><p>接下来，我们可以进一步介绍类和面向对象编程的概念。如果你准备好了，我们可以继续。</p><h2 id="类和面向对象" tabindex="-1"><a class="header-anchor" href="#类和面向对象" aria-hidden="true">#</a> 类和面向对象</h2><p>在面向对象编程中，类是一种模板或蓝图，用于创建对象。对象是类的实例，它们包含属性（数据）和方法（操作）。类可以通过继承和多态性实现代码的组织和复用。</p><p>让我们通过一个示例来演示类和面向对象编程的概念。</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token comment"># 定义一个有理数类</span>
<span class="token keyword">abstract</span> <span class="token keyword">type</span> AbstractRational <span class="token keyword">end</span>

<span class="token keyword">struct</span> RationalNumber <span class="token operator">&lt;:</span> AbstractRational
    numerator<span class="token punctuation">::</span>Int64
    denominator<span class="token punctuation">::</span>Int64

    <span class="token comment"># 构造函数</span>
    <span class="token keyword">function</span> RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">::</span>Int64<span class="token punctuation">,</span> denominator<span class="token punctuation">::</span>Int64<span class="token punctuation">)</span>
        gcd_value <span class="token operator">=</span> gcd<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
        new<span class="token punctuation">(</span>numerator <span class="token operator">÷</span> gcd_value<span class="token punctuation">,</span> denominator <span class="token operator">÷</span> gcd_value<span class="token punctuation">)</span>
    <span class="token keyword">end</span>

    <span class="token comment"># 加法运算方法</span>
    <span class="token keyword">function</span> <span class="token operator">+</span><span class="token punctuation">(</span>a<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">)</span>
        numerator <span class="token operator">=</span> a<span class="token punctuation">.</span>numerator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator <span class="token operator">+</span> b<span class="token punctuation">.</span>numerator <span class="token operator">*</span> a<span class="token punctuation">.</span>denominator
        denominator <span class="token operator">=</span> a<span class="token punctuation">.</span>denominator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator
        RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
    <span class="token keyword">end</span>

    <span class="token comment"># 减法运算方法</span>
    <span class="token keyword">function</span> <span class="token operator">-</span><span class="token punctuation">(</span>a<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">)</span>
        numerator <span class="token operator">=</span> a<span class="token punctuation">.</span>numerator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator <span class="token operator">-</span> b<span class="token punctuation">.</span>numerator <span class="token operator">*</span> a<span class="token punctuation">.</span>denominator
        denominator <span class="token operator">=</span> a<span class="token punctuation">.</span>denominator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator
        RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
    <span class="token keyword">end</span>

    <span class="token comment"># 乘法运算方法</span>
    <span class="token keyword">function</span> <span class="token operator">*</span><span class="token punctuation">(</span>a<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">)</span>
        numerator <span class="token operator">=</span> a<span class="token punctuation">.</span>numerator <span class="token operator">*</span> b<span class="token punctuation">.</span>numerator
        denominator <span class="token operator">=</span> a<span class="token punctuation">.</span>denominator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator
        RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
    <span class="token keyword">end</span>

    <span class="token comment"># 除法运算方法</span>
    <span class="token keyword">function</span> <span class="token operator">/</span><span class="token punctuation">(</span>a<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">)</span>
        numerator <span class="token operator">=</span> a<span class="token punctuation">.</span>numerator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator
        denominator <span class="token operator">=</span> a<span class="token punctuation">.</span>denominator <span class="token operator">*</span> b<span class="token punctuation">.</span>numerator
        RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>

<span class="token comment"># 示例：使用有理数类进行计算</span>
a <span class="token operator">=</span> RationalNumber<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> RationalNumber<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
c <span class="token operator">=</span> a <span class="token operator">+</span> b
d <span class="token operator">=</span> a <span class="token operator">*</span> b
<span class="token keyword">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment"># 输出：5//4</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>  <span class="token comment"># 输出：3//8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们定义了一个抽象类型 <code>AbstractRational</code>，它作为有理数类的基类。然后，我们定义了一个 <code>RationalNumber</code> 类，它扩展自 <code>AbstractRational</code>。</p><p>在 <code>RationalNumber</code> 类中，我们实现了构造函数和加法、减法、乘法和除法的方法。这些方法定义了对有理数对象进行操作的行为。</p><p>通过使用类和对象，我们可以更好地组织代码，将数据和操作封装在一起，并通过继承和多态性实现代码的复用和灵活性。</p><p>接下来，我们可以讨论类型系统和多态性的概念。如果你准备好了，我们可以继续下一步。</p><h2 id="用python和c-的oop写法" tabindex="-1"><a class="header-anchor" href="#用python和c-的oop写法" aria-hidden="true">#</a> 用python和c++的oop写法</h2><p>使用 Python 和 C++ 来重新演示之前的例子，采用面向对象编程的写法。</p><p>首先是 Python 的示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">RationalNumber</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span><span class="token punctuation">:</span>
        gcd_value <span class="token operator">=</span> self<span class="token punctuation">.</span>gcd<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>numerator <span class="token operator">=</span> numerator <span class="token operator">//</span> gcd_value
        self<span class="token punctuation">.</span>denominator <span class="token operator">=</span> denominator <span class="token operator">//</span> gcd_value

    <span class="token keyword">def</span> <span class="token function">gcd</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">while</span> b<span class="token punctuation">:</span>
            a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a <span class="token operator">%</span> b
        <span class="token keyword">return</span> a

    <span class="token keyword">def</span> <span class="token function">__add__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        numerator <span class="token operator">=</span> self<span class="token punctuation">.</span>numerator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator <span class="token operator">+</span> other<span class="token punctuation">.</span>numerator <span class="token operator">*</span> self<span class="token punctuation">.</span>denominator
        denominator <span class="token operator">=</span> self<span class="token punctuation">.</span>denominator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator
        <span class="token keyword">return</span> RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__sub__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        numerator <span class="token operator">=</span> self<span class="token punctuation">.</span>numerator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator <span class="token operator">-</span> other<span class="token punctuation">.</span>numerator <span class="token operator">*</span> self<span class="token punctuation">.</span>denominator
        denominator <span class="token operator">=</span> self<span class="token punctuation">.</span>denominator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator
        <span class="token keyword">return</span> RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__mul__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        numerator <span class="token operator">=</span> self<span class="token punctuation">.</span>numerator <span class="token operator">*</span> other<span class="token punctuation">.</span>numerator
        denominator <span class="token operator">=</span> self<span class="token punctuation">.</span>denominator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator
        <span class="token keyword">return</span> RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__truediv__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        numerator <span class="token operator">=</span> self<span class="token punctuation">.</span>numerator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator
        denominator <span class="token operator">=</span> self<span class="token punctuation">.</span>denominator <span class="token operator">*</span> other<span class="token punctuation">.</span>numerator
        <span class="token keyword">return</span> RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>numerator<span class="token punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>denominator<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>

<span class="token comment"># 示例：使用有理数进行计算</span>
a <span class="token operator">=</span> RationalNumber<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> RationalNumber<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
c <span class="token operator">=</span> a <span class="token operator">+</span> b
d <span class="token operator">=</span> a <span class="token operator">*</span> b
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment"># 输出：5/4</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>  <span class="token comment"># 输出：3/8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是使用 Python 的面向对象编程写法实现的有理数类。我们定义了一个 <code>RationalNumber</code> 类，其中包括构造函数和加减乘除的方法。我们还重载了 <code>__str__</code> 方法，使得打印对象时能够以分数的形式显示。</p><p>接下来是 C++ 的示例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">class</span> <span class="token class-name">RationalNumber</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> numerator<span class="token punctuation">;</span>
    <span class="token keyword">int</span> denominator<span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">gcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> temp <span class="token operator">=</span> a<span class="token punctuation">;</span>
            a <span class="token operator">=</span> b<span class="token punctuation">;</span>
            b <span class="token operator">=</span> temp <span class="token operator">%</span> b<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">RationalNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> numerator<span class="token punctuation">,</span> <span class="token keyword">int</span> denominator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> gcd_value <span class="token operator">=</span> <span class="token function">gcd</span><span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token operator">-&gt;</span>numerator <span class="token operator">=</span> numerator <span class="token operator">/</span> gcd_value<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token operator">-&gt;</span>denominator <span class="token operator">=</span> denominator <span class="token operator">/</span> gcd_value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    RationalNumber <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> RationalNumber<span class="token operator">&amp;</span> other<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> numerator <span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>numerator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator <span class="token operator">+</span> other<span class="token punctuation">.</span>numerator <span class="token operator">*</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>denominator<span class="token punctuation">;</span>
        <span class="token keyword">int</span> denominator <span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>denominator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">RationalNumber</span><span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    RationalNumber <span class="token keyword">operator</span><span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">const</span> RationalNumber<span class="token operator">&amp;</span> other<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> numerator <span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>numerator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator <span class="token operator">-</span> other<span class="token punctuation">.</span>numerator <span class="token operator">*</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>denominator<span class="token punctuation">;</span>
        <span class="token keyword">int</span> denominator <span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>denominator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">RationalNumber</span><span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    RationalNumber <span class="token keyword">operator</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">const</span> RationalNumber<span class="token operator">&amp;</span> other<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> numerator <span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>numerator <span class="token operator">*</span> other<span class="token punctuation">.</span>numerator<span class="token punctuation">;</span>
        <span class="token keyword">int</span> denominator <span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>denominator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">RationalNumber</span><span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    RationalNumber <span class="token keyword">operator</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token keyword">const</span> RationalNumber<span class="token operator">&amp;</span> other<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> numerator <span class="token operator">=</span> <span class="token keyword">this</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是使用 C++ 的面向对象编程写法实现的有理数类。我们定义了一个 <code>RationalNumber</code> 类，其中包括构造函数和加减乘除的方法。我们通过重载运算符来实现对有理数对象的加减乘除操作。</p><p>这两个示例都展示了使用面向对象编程的方式来实现有理数的抽象和操作。无论是 Python 还是 C++，都可以通过类和对象来封装数据和操作，并提供统一的接口进行操作。</p><h2 id="类型系统和多态性" tabindex="-1"><a class="header-anchor" href="#类型系统和多态性" aria-hidden="true">#</a> 类型系统和多态性</h2><p>类型系统是编程语言中重要的概念之一，它定义了变量和表达式的类型，以及这些类型之间的关系和操作。多态性是类型系统的一个特性，它允许我们在不同的类型上执行相同的操作，以增加代码的灵活性和复用性。</p><p>首先，让我们来看一下 Julia 中的类型系统和多态性。</p><p>在 Julia 中，类型是非常灵活且动态的，它使用类型注解来指定变量和函数的类型，并且支持多态性。Julia 中的多态性可以通过参数多态性和函数重载来实现。</p><p>以下是一个示例代码，演示了 Julia 中的类型系统和多态性：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token comment"># 定义一个抽象类型 AbstractRational</span>
<span class="token keyword">abstract</span> <span class="token keyword">type</span> AbstractRational <span class="token keyword">end</span>

<span class="token comment"># 定义有理数类型 RationalNumber，并扩展自 AbstractRational</span>
<span class="token keyword">struct</span> RationalNumber<span class="token punctuation">{</span>T<span class="token operator">&lt;:</span>Integer<span class="token punctuation">}</span> <span class="token operator">&lt;:</span> AbstractRational
    numerator<span class="token punctuation">::</span>T
    denominator<span class="token punctuation">::</span>T

    <span class="token comment"># 构造函数</span>
    <span class="token keyword">function</span> RationalNumber<span class="token punctuation">{</span>T<span class="token punctuation">}</span><span class="token punctuation">(</span>numerator<span class="token punctuation">::</span>T<span class="token punctuation">,</span> denominator<span class="token punctuation">::</span>T<span class="token punctuation">)</span> where T<span class="token operator">&lt;:</span>Integer
        gcd_value <span class="token operator">=</span> gcd<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
        new<span class="token punctuation">(</span>T<span class="token punctuation">(</span>numerator <span class="token operator">÷</span> gcd_value<span class="token punctuation">)</span><span class="token punctuation">,</span> T<span class="token punctuation">(</span>denominator <span class="token operator">÷</span> gcd_value<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>

<span class="token comment"># 重载加法运算符</span>
<span class="token keyword">function</span> <span class="token operator">+</span><span class="token punctuation">(</span>a<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">,</span> b<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">)</span>
    numerator <span class="token operator">=</span> a<span class="token punctuation">.</span>numerator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator <span class="token operator">+</span> b<span class="token punctuation">.</span>numerator <span class="token operator">*</span> a<span class="token punctuation">.</span>denominator
    denominator <span class="token operator">=</span> a<span class="token punctuation">.</span>denominator <span class="token operator">*</span> b<span class="token punctuation">.</span>denominator
    <span class="token keyword">return</span> RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment"># 重载打印函数</span>
<span class="token keyword">function</span> Base<span class="token punctuation">.</span>show<span class="token punctuation">(</span>io<span class="token punctuation">::</span>IO<span class="token punctuation">,</span> r<span class="token punctuation">::</span>RationalNumber<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>io<span class="token punctuation">,</span> r<span class="token punctuation">.</span>numerator<span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>denominator<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment"># 示例：使用有理数进行计算</span>
a <span class="token operator">=</span> RationalNumber<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> RationalNumber<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
c <span class="token operator">=</span> a <span class="token operator">+</span> b
<span class="token keyword">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment"># 输出：5/4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们定义了一个抽象类型 <code>AbstractRational</code>，然后定义了一个有理数类型 <code>RationalNumber</code>，它扩展自 <code>AbstractRational</code>。在 <code>RationalNumber</code> 类型中，我们使用类型参数 <code>T</code> 来指定有理数的分子和分母的整数类型，并实现了构造函数和加法运算符的重载。</p><p>在 Julia 中，我们还重载了 <code>Base.show</code> 函数，用于打印有理数对象。</p><p>通过使用类型参数和多态性，我们可以在 Julia 中实现对不同整数类型的有理数进行操作，提高代码的灵活性。</p><p>接下来，让我们看一下 Python 中的类型系统和多态性。</p><p>在 Python 中，类型系统是动态和鸭子类型的，它允许我们在不显式声明类型的情况下，根据对象的行为进行操作。Python 中的多态性是通过鸭子类型和函数重载来实现的。</p><p>以下是一个示例</p><p>在 Python 中展示类型系统和多态性的示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">AbstractRational</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">RationalNumber</span><span class="token punctuation">(</span>AbstractRational<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span><span class="token punctuation">:</span>
        gcd_value <span class="token operator">=</span> self<span class="token punctuation">.</span>gcd<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>numerator <span class="token operator">=</span> numerator <span class="token operator">//</span> gcd_value
        self<span class="token punctuation">.</span>denominator <span class="token operator">=</span> denominator <span class="token operator">//</span> gcd_value

    <span class="token keyword">def</span> <span class="token function">gcd</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">while</span> b<span class="token punctuation">:</span>
            a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a <span class="token operator">%</span> b
        <span class="token keyword">return</span> a

    <span class="token keyword">def</span> <span class="token function">__add__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        numerator <span class="token operator">=</span> self<span class="token punctuation">.</span>numerator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator <span class="token operator">+</span> other<span class="token punctuation">.</span>numerator <span class="token operator">*</span> self<span class="token punctuation">.</span>denominator
        denominator <span class="token operator">=</span> self<span class="token punctuation">.</span>denominator <span class="token operator">*</span> other<span class="token punctuation">.</span>denominator
        <span class="token keyword">return</span> RationalNumber<span class="token punctuation">(</span>numerator<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>numerator<span class="token punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>denominator<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>

<span class="token comment"># 示例：使用有理数进行计算</span>
a <span class="token operator">=</span> RationalNumber<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> RationalNumber<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
c <span class="token operator">=</span> a <span class="token operator">+</span> b
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment"># 输出：5/4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们定义了一个抽象类 <code>AbstractRational</code>，然后定义了一个有理数类 <code>RationalNumber</code>，它继承自 <code>AbstractRational</code>。在 <code>RationalNumber</code> 类中，我们实现了构造函数和加法运算符的重载。</p><p>通过使用继承和函数重载，我们可以在 Python 中实现对有理数对象的操作，并在运行时根据对象的行为进行动态的多态性。</p><p>无论是在 Julia 还是在 Python，类型系统和多态性都是强大而灵活的工具，可以提高代码的可读性、灵活性和可维护性。</p><h2 id="自动微分与符号求导" tabindex="-1"><a class="header-anchor" href="#自动微分与符号求导" aria-hidden="true">#</a> 自动微分与符号求导</h2><p>在 Julia 中，你可以使用 SymPy.jl 库来进行符号求导。SymPy.jl 是一个与 Python 中的 SymPy 库相对应的库，它提供了符号计算的功能，包括符号求导。</p><p>下面是一个示例代码，演示了在 Julia 中使用 SymPy.jl 进行符号求导：</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">using</span> SymPy

<span class="token comment"># 定义符号变量</span>
x <span class="token operator">=</span> symbols<span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 定义函数 f(x) = x^2 + 2x + 1</span>
f <span class="token operator">=</span> x<span class="token operator">^</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span>x <span class="token operator">+</span> <span class="token number">1</span>

<span class="token comment"># 求导</span>
f_prime <span class="token operator">=</span> diff<span class="token punctuation">(</span>f<span class="token punctuation">,</span> x<span class="token punctuation">)</span>

<span class="token comment"># 打印结果</span>
<span class="token keyword">println</span><span class="token punctuation">(</span>f_prime<span class="token punctuation">)</span>  <span class="token comment"># 输出：2*x + 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们首先使用 <code>symbols</code> 函数定义了一个符号变量 <code>x</code>。然后，我们定义了函数 <code>f</code>，它表示一个多项式函数。</p><p>使用 <code>diff</code> 函数，我们对函数 <code>f</code> 求导，并将结果赋给 <code>f_prime</code>。</p><p>最后，我们打印出求导结果 <code>f_prime</code>，它表示了函数 <code>f</code> 的导数。</p><p>通过使用 SymPy.jl，我们可以在 Julia 中进行符号计算和符号求导，从而实现符号级别的数学运算和分析。</p><p>以下是一个示例的 Julia 代码，实现了一个简单的符号求导器。从头开始实现最基本的符号求导，就像 Scheme 中那样。</p><div class="language-julia line-numbers-mode" data-ext="julia"><pre class="language-julia"><code><span class="token keyword">abstract</span> <span class="token keyword">type</span> Expr <span class="token keyword">end</span>

<span class="token keyword">struct</span> Number <span class="token operator">&lt;:</span> Expr
    value<span class="token punctuation">::</span>Float64
<span class="token keyword">end</span>

<span class="token keyword">struct</span> Variable <span class="token operator">&lt;:</span> Expr
    name<span class="token punctuation">::</span>Symbol
<span class="token keyword">end</span>

<span class="token keyword">struct</span> Plus <span class="token operator">&lt;:</span> Expr
    expr1<span class="token punctuation">::</span>Expr
    expr2<span class="token punctuation">::</span>Expr
<span class="token keyword">end</span>

<span class="token keyword">struct</span> Minus <span class="token operator">&lt;:</span> Expr
    expr1<span class="token punctuation">::</span>Expr
    expr2<span class="token punctuation">::</span>Expr
<span class="token keyword">end</span>

<span class="token keyword">struct</span> Times <span class="token operator">&lt;:</span> Expr
    expr1<span class="token punctuation">::</span>Expr
    expr2<span class="token punctuation">::</span>Expr
<span class="token keyword">end</span>

<span class="token keyword">struct</span> Divide <span class="token operator">&lt;:</span> Expr
    expr1<span class="token punctuation">::</span>Expr
    expr2<span class="token punctuation">::</span>Expr
<span class="token keyword">end</span>

<span class="token keyword">function</span> diff<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Number<span class="token punctuation">,</span> var<span class="token punctuation">::</span>Symbol<span class="token punctuation">)</span>
    <span class="token keyword">return</span> Number<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> diff<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Variable<span class="token punctuation">,</span> var<span class="token punctuation">::</span>Symbol<span class="token punctuation">)</span>
    <span class="token keyword">if</span> expr<span class="token punctuation">.</span>name <span class="token operator">==</span> var
        <span class="token keyword">return</span> Number<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span>
        <span class="token keyword">return</span> Number<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">)</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> diff<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Plus<span class="token punctuation">,</span> var<span class="token punctuation">::</span>Symbol<span class="token punctuation">)</span>
    <span class="token keyword">return</span> Plus<span class="token punctuation">(</span>diff<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr1<span class="token punctuation">,</span> var<span class="token punctuation">)</span><span class="token punctuation">,</span> diff<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr2<span class="token punctuation">,</span> var<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> diff<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Minus<span class="token punctuation">,</span> var<span class="token punctuation">::</span>Symbol<span class="token punctuation">)</span>
    <span class="token keyword">return</span> Minus<span class="token punctuation">(</span>diff<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr1<span class="token punctuation">,</span> var<span class="token punctuation">)</span><span class="token punctuation">,</span> diff<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr2<span class="token punctuation">,</span> var<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> diff<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Times<span class="token punctuation">,</span> var<span class="token punctuation">::</span>Symbol<span class="token punctuation">)</span>
    <span class="token keyword">return</span> Plus<span class="token punctuation">(</span>Times<span class="token punctuation">(</span>diff<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr1<span class="token punctuation">,</span> var<span class="token punctuation">)</span><span class="token punctuation">,</span> expr<span class="token punctuation">.</span>expr2<span class="token punctuation">)</span><span class="token punctuation">,</span>
                Times<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr1<span class="token punctuation">,</span> diff<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr2<span class="token punctuation">,</span> var<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> diff<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Divide<span class="token punctuation">,</span> var<span class="token punctuation">::</span>Symbol<span class="token punctuation">)</span>
    <span class="token keyword">return</span> Divide<span class="token punctuation">(</span>Minus<span class="token punctuation">(</span>Times<span class="token punctuation">(</span>diff<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr1<span class="token punctuation">,</span> var<span class="token punctuation">)</span><span class="token punctuation">,</span> expr<span class="token punctuation">.</span>expr2<span class="token punctuation">)</span><span class="token punctuation">,</span>
                        Times<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr1<span class="token punctuation">,</span> diff<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr2<span class="token punctuation">,</span> var<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                  Times<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr2<span class="token punctuation">,</span> expr<span class="token punctuation">.</span>expr2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Number<span class="token punctuation">)</span>
    <span class="token keyword">return</span> expr
<span class="token keyword">end</span>

<span class="token keyword">function</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Variable<span class="token punctuation">)</span>
    <span class="token keyword">return</span> expr
<span class="token keyword">end</span>

<span class="token keyword">function</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Plus<span class="token punctuation">)</span>
    expr1 <span class="token operator">=</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr1<span class="token punctuation">)</span>
    expr2 <span class="token operator">=</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr2<span class="token punctuation">)</span>
    <span class="token keyword">if</span> expr1 isa Number <span class="token operator">&amp;&amp;</span> expr2 isa Number
        <span class="token keyword">return</span> Number<span class="token punctuation">(</span>expr1<span class="token punctuation">.</span>value <span class="token operator">+</span> expr2<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token keyword">else</span>
        <span class="token keyword">return</span> Plus<span class="token punctuation">(</span>expr1<span class="token punctuation">,</span> expr2<span class="token punctuation">)</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Minus<span class="token punctuation">)</span>
    expr1 <span class="token operator">=</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr1<span class="token punctuation">)</span>
    expr2 <span class="token operator">=</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr2<span class="token punctuation">)</span>
    <span class="token keyword">if</span> expr1 isa Number <span class="token operator">&amp;&amp;</span> expr2 isa Number
        <span class="token keyword">return</span> Number<span class="token punctuation">(</span>expr1<span class="token punctuation">.</span>value <span class="token operator">-</span> expr2<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token keyword">else</span>
        <span class="token keyword">return</span> Minus<span class="token punctuation">(</span>expr1<span class="token punctuation">,</span> expr2<span class="token punctuation">)</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Times<span class="token punctuation">)</span>
    expr1 <span class="token operator">=</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr1<span class="token punctuation">)</span>
    expr2 <span class="token operator">=</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr2<span class="token punctuation">)</span>
    <span class="token keyword">if</span> expr1 isa Number <span class="token operator">&amp;&amp;</span> expr2 isa Number
        <span class="token keyword">return</span> Number<span class="token punctuation">(</span>expr1<span class="token punctuation">.</span>value <span class="token operator">*</span> expr2<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token keyword">else</span>
        <span class="token keyword">return</span> Times<span class="token punctuation">(</span>expr1<span class="token punctuation">,</span> expr2<span class="token punctuation">)</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Divide<span class="token punctuation">)</span>
    expr1 <span class="token operator">=</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr1<span class="token punctuation">)</span>
    expr2 <span class="token operator">=</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr2<span class="token punctuation">)</span>
    <span class="token keyword">if</span> expr1 isa Number <span class="token operator">&amp;&amp;</span> expr2 isa Number
        <span class="token keyword">return</span> Number<span class="token punctuation">(</span>expr1<span class="token punctuation">.</span>value <span class="token operator">/</span> expr2<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token keyword">else</span>
        <span class="token keyword">return</span> Divide<span class="token punctuation">(</span>expr1<span class="token punctuation">,</span> expr2<span class="token punctuation">)</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> simplify<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Expr<span class="token punctuation">)</span>
    <span class="token keyword">return</span> expr
<span class="token keyword">end</span>

<span class="token keyword">function</span> show_expr<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Number<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>expr<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> show_expr<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Variable<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>expr<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> show_expr<span class="token punctuation">(</span>expr<span class="token punctuation">::</span>Plus<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;(&quot;</span><span class="token punctuation">)</span>
    show_expr<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr1<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot; + &quot;</span><span class="token punctuation">)</span>
    show_expr<span class="token punctuation">(</span>expr<span class="token punctuation">.</span>expr2<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;)&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上只是部分代码，展示一下就是这么干的。</p>`,173),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","2-数据抽象.html.vue"]]);export{d as default};
