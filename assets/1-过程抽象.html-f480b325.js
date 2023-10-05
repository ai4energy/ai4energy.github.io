const e=JSON.parse('{"key":"v-31b65972","path":"/docs/03CSAdv/1-%E8%BF%87%E7%A8%8B%E6%8A%BD%E8%B1%A1.html","title":"过程抽象","lang":"zh-CN","frontmatter":{"description":"核心概念简要解释 下面是我对每个主题的简要解释： 1. 过程抽象：过程抽象是指将一系列操作封装为一个单元，以便能够重复使用和组合。这有助于简化复杂的问题，提高代码的可读性和可维护性。 2. 数据抽象：数据抽象是指通过定义数据类型的接口，将数据的表示和实现细节与用户分离。这使得程序员可以将注意力集中在数据的高级概念上，而无需关注具体的实现。 3. 递归：...","head":[["meta",{"property":"og:url","content":"https://ai4energy.cn/docs/03CSAdv/1-%E8%BF%87%E7%A8%8B%E6%8A%BD%E8%B1%A1.html"}],["meta",{"property":"og:site_name","content":"Ai4Energy"}],["meta",{"property":"og:title","content":"过程抽象"}],["meta",{"property":"og:description","content":"核心概念简要解释 下面是我对每个主题的简要解释： 1. 过程抽象：过程抽象是指将一系列操作封装为一个单元，以便能够重复使用和组合。这有助于简化复杂的问题，提高代码的可读性和可维护性。 2. 数据抽象：数据抽象是指通过定义数据类型的接口，将数据的表示和实现细节与用户分离。这使得程序员可以将注意力集中在数据的高级概念上，而无需关注具体的实现。 3. 递归：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-05T10:59:45.000Z"}],["meta",{"property":"article:author","content":"Ai4Energy"}],["meta",{"property":"article:modified_time","content":"2023-10-05T10:59:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"过程抽象\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-05T10:59:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ai4Energy\\",\\"url\\":\\"https://mingtaoli.cn\\"}]}"]]},"headers":[{"level":2,"title":"核心概念简要解释","slug":"核心概念简要解释","link":"#核心概念简要解释","children":[]},{"level":2,"title":"过程抽象","slug":"过程抽象-1","link":"#过程抽象-1","children":[{"level":3,"title":"函数可以有名字也可以没有名字","slug":"函数可以有名字也可以没有名字","link":"#函数可以有名字也可以没有名字","children":[]},{"level":3,"title":"函数可以给个名字，就是为了抓住它，需要它时再召唤出来","slug":"函数可以给个名字-就是为了抓住它-需要它时再召唤出来","link":"#函数可以给个名字-就是为了抓住它-需要它时再召唤出来","children":[]},{"level":3,"title":"函数的参数就是一种约定","slug":"函数的参数就是一种约定","link":"#函数的参数就是一种约定","children":[]},{"level":3,"title":"函数可以有返回值，也可以没有","slug":"函数可以有返回值-也可以没有","link":"#函数可以有返回值-也可以没有","children":[]},{"level":3,"title":"函数可能改变参数的内容，也可能不改变","slug":"函数可能改变参数的内容-也可能不改变","link":"#函数可能改变参数的内容-也可能不改变","children":[]},{"level":3,"title":"函数可以被调用，可以被嵌套的调用","slug":"函数可以被调用-可以被嵌套的调用","link":"#函数可以被调用-可以被嵌套的调用","children":[]},{"level":3,"title":"一定意义上，编程就是写函数","slug":"一定意义上-编程就是写函数","link":"#一定意义上-编程就是写函数","children":[]},{"level":3,"title":"加减乘除本身就是函数，运算符就是函数","slug":"加减乘除本身就是函数-运算符就是函数","link":"#加减乘除本身就是函数-运算符就是函数","children":[]},{"level":3,"title":"主函数不一定是必须的。但是程序需要有个入口","slug":"主函数不一定是必须的。但是程序需要有个入口","link":"#主函数不一定是必须的。但是程序需要有个入口","children":[]},{"level":3,"title":"同一个函数名，接受不同的参数类型，是一种进步，越来越对人友好。实际上是多重分发或者多态等设计实现的。","slug":"同一个函数名-接受不同的参数类型-是一种进步-越来越对人友好。实际上是多重分发或者多态等设计实现的。","link":"#同一个函数名-接受不同的参数类型-是一种进步-越来越对人友好。实际上是多重分发或者多态等设计实现的。","children":[]},{"level":3,"title":"函数的集合构成库","slug":"函数的集合构成库","link":"#函数的集合构成库","children":[]},{"level":3,"title":"函数能被跨语言调用","slug":"函数能被跨语言调用","link":"#函数能被跨语言调用","children":[]},{"level":3,"title":"一定意义上，执行某个程序也相当于一个函数调用。比如ls命令。在操作系统中执行某个程序实际上可以看作是一个函数调用的过程。","slug":"一定意义上-执行某个程序也相当于一个函数调用。比如ls命令。在操作系统中执行某个程序实际上可以看作是一个函数调用的过程。","link":"#一定意义上-执行某个程序也相当于一个函数调用。比如ls命令。在操作系统中执行某个程序实际上可以看作是一个函数调用的过程。","children":[]},{"level":3,"title":"此时，函数的参数是通过命令行参数给出。","slug":"此时-函数的参数是通过命令行参数给出。","link":"#此时-函数的参数是通过命令行参数给出。","children":[]},{"level":3,"title":"程序执行时的环境变量有可能也会影响函数的行为。环境变量就是当前环境的键值对表","slug":"程序执行时的环境变量有可能也会影响函数的行为。环境变量就是当前环境的键值对表","link":"#程序执行时的环境变量有可能也会影响函数的行为。环境变量就是当前环境的键值对表","children":[]},{"level":3,"title":"执行一个函数，就好比打游戏进入一扇门，保留现场就好比压栈，带入的技能集就好比环境","slug":"执行一个函数-就好比打游戏进入一扇门-保留现场就好比压栈-带入的技能集就好比环境","link":"#执行一个函数-就好比打游戏进入一扇门-保留现场就好比压栈-带入的技能集就好比环境","children":[]},{"level":3,"title":"运行时的环境，和入口，就构成一个闭包。就好比一下子穿越了。函数返回就穿越回来了。","slug":"运行时的环境-和入口-就构成一个闭包。就好比一下子穿越了。函数返回就穿越回来了。","link":"#运行时的环境-和入口-就构成一个闭包。就好比一下子穿越了。函数返回就穿越回来了。","children":[]},{"level":3,"title":"由函数可以构成服务。","slug":"由函数可以构成服务。","link":"#由函数可以构成服务。","children":[]},{"level":3,"title":"可以认为make也是一个函数，它的输入参数是makefile","slug":"可以认为make也是一个函数-它的输入参数是makefile","link":"#可以认为make也是一个函数-它的输入参数是makefile","children":[]},{"level":3,"title":"cmake也是函数，它的输入是cmakelist.txt","slug":"cmake也是函数-它的输入是cmakelist-txt","link":"#cmake也是函数-它的输入是cmakelist-txt","children":[]},{"level":3,"title":"过程抽象补充","slug":"过程抽象补充","link":"#过程抽象补充","children":[]}]}],"git":{"createdTime":1696503585000,"updatedTime":1696503585000,"contributors":[{"name":"Mingtao Li","email":"mingtao@xjtu.edu.cn","commits":1}]},"readingTime":{"minutes":55.75,"words":16724},"filePathRelative":"docs/03CSAdv/1-过程抽象.md","localizedDate":"2023年10月5日","autoDesc":true}');export{e as data};
