import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,a as n,b as s,d as e,f as t}from"./app-40ae522b.js";const l={},r=t('<h1 id="物联网的消息件" tabindex="-1"><a class="header-anchor" href="#物联网的消息件" aria-hidden="true">#</a> 物联网的消息件</h1><h2 id="物联网的消息件简介" tabindex="-1"><a class="header-anchor" href="#物联网的消息件简介" aria-hidden="true">#</a> 物联网的消息件简介</h2><p>物联网中的消息队列（Message Queue）是一种基于异步通信的机制，用于在物联网系统中传递和处理消息。它起到了解耦和异步处理的作用，将消息的发送者和接收者解耦开来，使它们可以独立进行工作。</p><p>以下是物联网中消息队列的一些关键特点和作用：</p><ol><li><p>异步通信：消息队列实现了异步通信机制，发送者可以将消息发送到队列中，而不需要等待接收者的实时响应。这允许系统中的各个组件以异步的方式进行通信和处理，提高了系统的吞吐量和响应性能。</p></li><li><p>解耦：消息队列解耦了发送者和接收者之间的直接依赖关系。发送者只需将消息发送到队列中，而不需要知道消息的接收者是谁。接收者则可以独立地从队列中获取消息并进行处理。这种解耦性使得系统的组件可以灵活地进行扩展和修改，而不会对其他组件产生影响。</p></li><li><p>可靠性：消息队列通常提供持久化存储机制，确保即使在消息发送或接收过程中出现故障，消息仍然能够安全存储和传递。这提高了消息的可靠性和系统的稳定性。</p></li><li><p>缓冲能力：消息队列充当了缓冲区的作用，可以平衡不同组件之间的速度差异。如果某个组件的处理速度较慢，消息可以在队列中积压，直到该组件准备好处理它们。这样可以避免消息丢失或过载的问题。</p></li><li><p>扩展性：通过使用消息队列，系统可以更容易地进行扩展。新的组件可以通过订阅队列来接收消息，并独立处理它们。这种松耦合的设计使得系统更加灵活和可扩展。</p></li></ol><p>常见的物联网消息队列协议包括MQTT（Message Queuing Telemetry Transport）和AMQP（Advanced Message Queuing Protocol）。这些协议提供了可靠的消息传递机制和语义，并广泛应用于物联网系统中。</p><p>总结起来，物联网中的消息队列是一种重要的通信机制，通过解耦、异步和可靠的消息传递，实现了系统的灵活性、扩展性和可靠性。它为物联网系统中的各个组件提供了高效的消息传递和处理能力。</p><h2 id="常用的消息件" tabindex="-1"><a class="header-anchor" href="#常用的消息件" aria-hidden="true">#</a> 常用的消息件</h2><p>常用的消息件包括以下几种：</p><ol><li><p>RabbitMQ：RabbitMQ是一个开源的消息队列软件，它实现了AMQP（Advanced Message Queuing Protocol）协议。它支持多种编程语言，并提供了可靠的消息传递、消息持久化和灵活的路由等功能。</p></li><li><p>Apache Kafka：Apache Kafka是一个分布式流处理平台和消息队列系统。它具有高吞吐量、持久性存储和水平扩展等特性。Kafka适用于大规模数据处理和实时流处理场景，提供了可靠的消息传递和持久化存储能力。</p></li><li><p>ActiveMQ：ActiveMQ是一个开源的消息队列软件，实现了JMS（Java Message Service）规范。它支持多种传输协议和消息模式，并提供了可靠的消息传递、消息持久化和事务支持等功能。</p></li><li><p>MQTT（Message Queuing Telemetry Transport）：MQTT是一种轻量级的发布/订阅消息传递协议，特别适用于资源受限的物联网设备。它具有低开销、可靠性和简单性的特点，被广泛应用于物联网中的消息传递和实时数据处理。</p></li><li><p>ZeroMQ：ZeroMQ是一个开源的高性能消息库，支持多种消息传递模式和传输协议。它提供了简单的消息队列、消息路由和异步通信等功能，适用于构建高性能和可扩展的分布式系统。</p></li></ol><p>这些消息件都具有不同的特点和适用场景，可以根据具体的需求选择适合的消息件来实现物联网系统中的消息传递和处理。</p><h2 id="以mqtt为例-来一个发布主题、订阅主题、获得数据、转存数据的例子" tabindex="-1"><a class="header-anchor" href="#以mqtt为例-来一个发布主题、订阅主题、获得数据、转存数据的例子" aria-hidden="true">#</a> 以mqtt为例，来一个发布主题、订阅主题、获得数据、转存数据的例子</h2><p>我无法直接演示和运行实际的服务器和客户端代码。然而，我可以提供给你一个基本的示例代码，你可以在本地环境中运行它来实现你所描述的功能。</p>',13),u={href:"https://mosquitto.org/%EF%BC%89%E4%B8%8B%E8%BD%BD%E5%B9%B6%E5%AE%89%E8%A3%85%E3%80%82",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"接下来，你可以使用Python语言和paho-mqtt库来编写客户端代码。以下是一个简单的示例：",-1),m={href:"http://publish.py",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> paho<span class="token punctuation">.</span>mqtt<span class="token punctuation">.</span>publish <span class="token keyword">as</span> publish

<span class="token comment"># MQTT代理服务器的地址和端口</span>
broker <span class="token operator">=</span> <span class="token string">&quot;mqtt.example.com&quot;</span>
port <span class="token operator">=</span> <span class="token number">1883</span>

<span class="token comment"># 发布主题和消息</span>
topic <span class="token operator">=</span> <span class="token string">&quot;temperature&quot;</span>
message <span class="token operator">=</span> <span class="token string">&quot;25&quot;</span>

<span class="token comment"># 发布消息</span>
publish<span class="token punctuation">.</span>single<span class="token punctuation">(</span>topic<span class="token punctuation">,</span> payload<span class="token operator">=</span>message<span class="token punctuation">,</span> hostname<span class="token operator">=</span>broker<span class="token punctuation">,</span> port<span class="token operator">=</span>port<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v={start:"2"},b={href:"http://subscribe.py",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> paho<span class="token punctuation">.</span>mqtt<span class="token punctuation">.</span>client <span class="token keyword">as</span> mqtt
<span class="token keyword">import</span> sqlite3

<span class="token comment"># MQTT代理服务器的地址和端口</span>
broker <span class="token operator">=</span> <span class="token string">&quot;mqtt.example.com&quot;</span>
port <span class="token operator">=</span> <span class="token number">1883</span>

<span class="token comment"># MQTT回调函数，处理接收到的消息</span>
<span class="token keyword">def</span> <span class="token function">on_message</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> userdata<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 解析消息中的数据</span>
    data <span class="token operator">=</span> message<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 将数据存储到数据库中</span>
    store_data<span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">store_data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 连接数据库</span>
    conn <span class="token operator">=</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;data.db&#39;</span><span class="token punctuation">)</span>
    c <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 创建数据表（如果不存在）</span>
    c<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token triple-quoted-string string">&#39;&#39;&#39;CREATE TABLE IF NOT EXISTS temperature
                 (timestamp DATETIME, value REAL)&#39;&#39;&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># 将数据插入数据库表中</span>
    c<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;INSERT INTO temperature VALUES (datetime(&#39;now&#39;), ?)&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 提交更改并关闭数据库连接</span>
    conn<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 创建MQTT客户端</span>
client <span class="token operator">=</span> mqtt<span class="token punctuation">.</span>Client<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 设置回调函数</span>
client<span class="token punctuation">.</span>on_message <span class="token operator">=</span> on_message

<span class="token comment"># 连接到MQTT代理服务器</span>
client<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>broker<span class="token punctuation">,</span> port<span class="token punctuation">)</span>

<span class="token comment"># 订阅主题</span>
client<span class="token punctuation">.</span>subscribe<span class="token punctuation">(</span><span class="token string">&quot;temperature&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 保持MQTT客户端循环，处理消息</span>
client<span class="token punctuation">.</span>loop_forever<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例代码中，你需要将<code>broker</code>变量的值更改为你所使用的MQTT代理服务器的地址。在客户端发布主题的代码中，你可以将<code>topic</code>和<code>message</code>更改为你自己的主题和消息。在客户端订阅主题并存储数据的代码中，你需要将数据库连接的相关代码适配到你所使用的数据库系统。</p><p>请确保你已经安装了Python和paho-mqtt库，并根据需要进行适当的配置和修改。然后，你可以在命令行中分别运行<code>publish.py</code>和<code>subscribe.py</code>来模拟发布和订阅MQTT主题，并将接收到的数据存储到数据库中。</p><p>请注意，以上示例代码仅供参考，并未包含所有的</p><p>错误处理和完整的功能。在实际应用中，你需要根据自己的需求和具体情况进行适当的调整和优化。</p><h2 id="更多的参考信息" tabindex="-1"><a class="header-anchor" href="#更多的参考信息" aria-hidden="true">#</a> 更多的参考信息</h2><p>看完并实操过如下三个链接的内容，应该就能有所理解了。</p>`,7),_={href:"https://www.hangge.com/blog/cache/detail_2347.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.hangge.com/blog/cache/detail_2348.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.hangge.com/blog/cache/detail_2350.html",target:"_blank",rel:"noopener noreferrer"};function M(f,Q){const a=o("ExternalLinkIcon");return i(),c("div",null,[r,n("p",null,[s("首先，你需要安装一个MQTT代理服务器。其中，Eclipse Mosquitto是一个流行的开源MQTT代理服务器，你可以从其官方网站（"),n("a",u,[s("https://mosquitto.org/）下载并安装。"),e(a)])]),d,n("ol",null,[n("li",null,[s("客户端发布主题（"),n("a",m,[s("publish.py"),e(a)]),s("）：")])]),k,n("ol",v,[n("li",null,[s("客户端订阅主题并存储数据（"),n("a",b,[s("subscribe.py"),e(a)]),s("）：")])]),h,n("p",null,[n("a",_,[s("MQTT系列教程1（基本概念介绍）"),e(a)])]),n("p",null,[n("a",g,[s("MQTT系列教程2（消息服务器EMQ的搭建和使用）"),e(a)])]),n("p",null,[n("a",T,[s("MQTT系列教程3（客户端工具MQTTBox的安装和使用）"),e(a)])])])}const E=p(l,[["render",M],["__file","2-消息件.html.vue"]]);export{E as default};
