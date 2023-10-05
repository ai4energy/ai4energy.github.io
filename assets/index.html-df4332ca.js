import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as h,c as s,a as e,b as a,d as o,f as d}from"./app-ca8ddae6.js";const i={},l=e("p",null,[a('@def title = "碳中和相关开源软件汇编"'),e("br"),a(" @def hascode = true"),e("br"),a(" @def date = Date(2021, 11, 19)"),e("br"),a(' @def rss = "碳中和相关开源软件汇编"'),e("br"),a(' @def tags = ["open source", "energy" , "carbon neutrality"]')],-1),c=e("h1",{id:"碳中和与能源相关开源软件工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#碳中和与能源相关开源软件工具","aria-hidden":"true"},"#"),a(" 碳中和与能源相关开源软件工具")],-1),_=e("h2",{id:"太阳能",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#太阳能","aria-hidden":"true"},"#"),a(" 太阳能")],-1),p=e("li",null,[e("p",null,[e("strong",null,"SAM与ssc"),a(" —由美国能源部委托美国国家可再生能源实验室（NREL）开发的可再生能源项目评估模型软件。可针对光伏、光热、风力、地热、生物质等几种可再生能源的发电成本及系统发电特性进行计算。 "),e("a",{href:"sam-ssc"},"点击查看详细介绍")])],-1),u=e("strong",null,"REopt_Lite_API",-1),f={href:"https://github.com/NREL/REopt_Lite_API",target:"_blank",rel:"noopener noreferrer"},b=d('<h2 id="风能" tabindex="-1"><a class="header-anchor" href="#风能" aria-hidden="true">#</a> 风能</h2><h2 id="储能" tabindex="-1"><a class="header-anchor" href="#储能" aria-hidden="true">#</a> 储能</h2><h3 id="电池储能" tabindex="-1"><a class="header-anchor" href="#电池储能" aria-hidden="true">#</a> 电池储能</h3><h3 id="氢储能" tabindex="-1"><a class="header-anchor" href="#氢储能" aria-hidden="true">#</a> 氢储能</h3><h2 id="能源管理系统" tabindex="-1"><a class="header-anchor" href="#能源管理系统" aria-hidden="true">#</a> 能源管理系统</h2><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>',6),P=e("strong",null,"CoolProp",-1),x={href:"https://www.nist.gov/srd/refprop",target:"_blank",rel:"noopener noreferrer"},m={href:"http://coolprop.org/",target:"_blank",rel:"noopener noreferrer"},E=e("a",{href:"coolprop-intro"},"CoolProp的简单介绍",-1);function g(R,L){const r=n("ExternalLinkIcon");return h(),s("div",null,[l,c,_,e("ul",null,[p,e("li",null,[e("p",null,[u,a(" —美国国家可再生能源实验室（NREL）开发可再生能源系统优化软件。程序采用的是用基于python的django框架提供网页建模界面，生成的优化问题以json形式描述，通过http api调用JuMP进行优化问题求解。使用了docker-compose来实现建模和优化的连接。JuMP.jl（Julia Math Program）是Julia语言的数学规划建模平台。"),e("a",f,[a("点击访问REopt_Lite_API源码"),o(r)])])])]),b,e("ul",null,[e("li",null,[P,a(" —开源的物性数据库，C++编写，MIT许可证。有Python、Matlab、Modelica、Java接口，也能够通过Excel、FORTRAN、Javascript、PHP、Mathematica、Julia、Labview、EES等访问。难能可贵的是，CoolProp还提供了"),e("a",x,[a("NIST的REFPROP"),o(r)]),a("的接口。换言之，可以通过CoolProp的python接口访问REFPROP的所有功能。"),e("a",m,[a("点击访问CoolProp官方网站"),o(r)]),a("。我们写了一个"),E,a("。")])])])}const M=t(i,[["render",g],["__file","index.html.vue"]]);export{M as default};
