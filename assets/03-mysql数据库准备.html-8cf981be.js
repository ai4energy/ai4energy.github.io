import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as t,a,b as n,d as r,f as s}from"./app-daf6f9ff.js";const p={},c=s(`<h1 id="数据库准备" tabindex="-1"><a class="header-anchor" href="#数据库准备" aria-hidden="true">#</a> 数据库准备</h1><h2 id="关系数据库简介" tabindex="-1"><a class="header-anchor" href="#关系数据库简介" aria-hidden="true">#</a> 关系数据库简介</h2><p>关系型数据库是最广泛使用和最经典的一种数据库。以下是关系型数据库的简要介绍：</p><h3 id="_1-定义" tabindex="-1"><a class="header-anchor" href="#_1-定义" aria-hidden="true">#</a> 1. <strong>定义</strong>:</h3><p>关系型数据库（RDBMS, Relational Database Management System）是基于关系模型来创建和管理的数据库。在这种数据库中，数据被组织成一个或多个表，这些表之间可以存在相关性。</p><h3 id="_2-特点" tabindex="-1"><a class="header-anchor" href="#_2-特点" aria-hidden="true">#</a> 2. <strong>特点</strong>:</h3><ul><li><p><strong>表格结构</strong>：数据存储在称为“表”的结构中，每个表具有唯一的名称。</p></li><li><p><strong>行与列</strong>：每个表由行（也称为记录或元组）和列（也称为字段或属性）组成。每列都有一个数据类型（如整数、字符串、日期等）。</p></li><li><p><strong>主键</strong>：每个表通常都有一个主键列，该列的值在表中是唯一的，用于唯一地标识每一行。</p></li><li><p><strong>外键</strong>：用于建立表与表之间的关系，确保数据之间的引用完整性。</p></li><li><p><strong>标准化</strong>：是一种设计技巧，用于最小化数据重复和避免数据异常。</p></li></ul><h3 id="_3-sql" tabindex="-1"><a class="header-anchor" href="#_3-sql" aria-hidden="true">#</a> 3. <strong>SQL</strong>:</h3><p>关系型数据库使用 SQL（Structured Query Language，结构化查询语言）进行查询。SQL 是用于定义、操作和查询数据的标准语言。</p><h3 id="_4-事务" tabindex="-1"><a class="header-anchor" href="#_4-事务" aria-hidden="true">#</a> 4. <strong>事务</strong>:</h3><p>关系型数据库支持事务，确保数据库操作的完整性。事务是一系列操作，要么全部成功执行，要么全部不执行。</p><h3 id="_5-优势" tabindex="-1"><a class="header-anchor" href="#_5-优势" aria-hidden="true">#</a> 5. <strong>优势</strong>:</h3><ul><li><p>数据完整性和准确性。</p></li><li><p>灵活的查询能力。</p></li><li><p>数据安全性和备份恢复。</p></li><li><p>广泛的支持和成熟的技术。</p></li></ul><h3 id="_6-常见的关系型数据库系统" tabindex="-1"><a class="header-anchor" href="#_6-常见的关系型数据库系统" aria-hidden="true">#</a> 6. <strong>常见的关系型数据库系统</strong>:</h3><ul><li><p>MySQL</p></li><li><p>PostgreSQL</p></li><li><p>Oracle</p></li><li><p>Microsoft SQL Server</p></li><li><p>SQLite</p></li></ul><h3 id="_7-挑战" tabindex="-1"><a class="header-anchor" href="#_7-挑战" aria-hidden="true">#</a> 7. <strong>挑战</strong>:</h3><ul><li><p>在处理非常大的数据集或需要高度可扩展性的场景时，关系型数据库可能不如某些非关系型数据库那么高效。</p></li><li><p>数据模式修改可能是困难和耗时的。</p></li></ul><p>尽管现在有很多非关系型数据库（如 MongoDB、Cassandra 和 Redis）受到欢迎，但关系型数据库仍然是许多应用的核心，尤其是需要高度组织和关系完整性的应用。</p><h2 id="mysql-mariadb-简介" tabindex="-1"><a class="header-anchor" href="#mysql-mariadb-简介" aria-hidden="true">#</a> mysql(mariadb)简介</h2><p>当我们谈到 MySQL，我们通常指的是一个广泛使用的开源关系型数据库管理系统。MariaDB 是 MySQL 的一个分支，由 MySQL 的原始开发者创建，作为对 Oracle 购买 Sun Microsystems（MySQL 的原始所有者）后可能存在的开源许可问题的回应。</p><p>以下是 MySQL 和 MariaDB 的简要介绍：</p><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL:</h3><ol><li><p><strong>概述</strong>: MySQL 是世界上最流行的开源关系型数据库之一。它的主要特点是可靠性、性能和易用性。</p></li><li><p><strong>特点</strong>:</p><ul><li>使用 SQL 作为查询语言。</li><li>提供了多种存储引擎，如 InnoDB、MyISAM、Memory 等。</li><li>支持 ACID 事务，尤其是在使用 InnoDB 存储引擎时。</li><li>支持外键、触发器、视图等功能。</li><li>有一个活跃的社区和大量的在线资源。</li></ul></li><li><p><strong>使用情境</strong>: 从小型应用到大型企业解决方案，MySQL 都可以用作后端存储。它被广泛用于网站、电子商务平台和许多其他类型的应用。</p></li></ol><h3 id="mariadb" tabindex="-1"><a class="header-anchor" href="#mariadb" aria-hidden="true">#</a> MariaDB:</h3><ol><li><p><strong>概述</strong>: MariaDB 是 MySQL 的一个开源分支，由 MySQL 的原始开发者创建，旨在完全兼容 MySQL，同时提供新的特性和改进。</p></li><li><p><strong>特点</strong>:</p><ul><li>完全的二进制级别兼容性与 MySQL。</li><li>新的存储引擎，如 Aria 和 TokuDB。</li><li>更好的性能和优化。</li><li>对新功能的更快速和更开放的开发流程。</li><li>包含更多的存储引擎和扩展功能。</li></ul></li><li><p><strong>使用情境</strong>: 因为 MariaDB 与 MySQL 完全兼容，所以它可以替代 MySQL 在任何应用中使用。</p></li></ol><p><strong>最后的注意事项</strong>: 尽管 MariaDB 旨在与 MySQL 保持兼容，但随着时间的推移，两者之间可能会出现一些差异。因此，如果你正在考虑从 MySQL 迁移到 MariaDB，或者在两者之间进行选择，建议你仔细研究两者之间的差异和考虑使用哪一个更适合你的特定需求。</p><h2 id="使用docker-compose安装mariadb" tabindex="-1"><a class="header-anchor" href="#使用docker-compose安装mariadb" aria-hidden="true">#</a> 使用docker-compose安装mariadb</h2><p>使用 <code>docker-compose</code> 安装 MariaDB 相对简单且方便。下面是使用 <code>docker-compose</code> 安装 MariaDB 的步骤：</p><ol><li><p><strong>创建 <code>docker-compose.yml</code> 文件</strong>:</p><p>在你选择的目录中，创建一个 <code>docker-compose.yml</code> 文件，并输入以下内容：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mariadb</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mariadb<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> my_mariadb
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> rootpassword   <span class="token comment"># 设置你的root密码</span>
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> mydatabase          <span class="token comment"># 你可以指定一个初始数据库名称</span>
      <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> user                    <span class="token comment"># 可选: 创建一个用户</span>
      <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> userpassword        <span class="token comment"># 用户的密码</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mariadb_data<span class="token punctuation">:</span>/var/lib/mysql

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">mariadb_data</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个配置将会拉取最新版本的 MariaDB 镜像，设置必要的环境变量，并绑定容器的 3306 端口到宿主机的 3306 端口。</p></li><li><p><strong>启动 MariaDB</strong>:</p><p>在包含 <code>docker-compose.yml</code> 文件的目录中，运行以下命令:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将会启动 MariaDB 服务。<code>-d</code> 参数使容器在后台模式运行。</p></li><li><p><strong>连接到 MariaDB</strong>:</p><p>你可以使用任何 MySQL/MariaDB 客户端来连接到数据库。使用上面的配置，你可以使用如下的连接参数：</p><ul><li><strong>Host</strong>: localhost (或你的 Docker 宿主机的 IP)</li><li><strong>Port</strong>: 3306</li><li><strong>User</strong>: root</li><li><strong>Password</strong>: rootpassword (或你在 <code>docker-compose.yml</code> 文件中设置的密码)</li></ul></li><li><p><strong>停止和启动服务</strong>:</p><p>如果你想停止 MariaDB 服务，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当你想再次启动服务时，只需再次运行 <code>docker-compose up -d</code>。</p></li><li><p><strong>数据持久化</strong>:</p><p>在上面的配置中，我们使用了一个命名的卷 <code>mariadb_data</code> 为 <code>/var/lib/mysql</code> 路径来持久化数据。这确保即使容器被删除，数据也会保持不变。</p></li></ol><p>这就是使用 <code>docker-compose</code> 安装 MariaDB 的基本步骤。当然，你可以根据你的特定需求对 <code>docker-compose.yml</code> 文件进行进一步的配置和调整。</p><p>以下是一个典型的 <code>docker-compose.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.2&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>

  <span class="token key atrule">ai4e-things-mariadb</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mariadb<span class="token punctuation">:</span>10.6.14
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> ai4e<span class="token punctuation">-</span>things<span class="token punctuation">-</span>mariadb
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> rootpassword
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> ai4e_things
      <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> ai4e_things
      <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> password
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
       <span class="token punctuation">-</span> ./deploy/data/mariadb<span class="token punctuation">:</span>/var/lib/mysql
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">ai4e_net</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.20.0.116
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段 <code>docker-compose.yml</code> 配置详细描述了如何使用 Docker Compose 来部署一个 MariaDB 容器。</p><ol><li><p><strong>version: &#39;3.2&#39;</strong></p><p>这表示 <code>docker-compose.yml</code> 文件的版本为 3.2。每个版本都有其特定的特性和格式。版本 3 和其子版本为现代 Docker Compose 配置提供了许多新的功能。</p></li><li><p><strong>services:</strong></p><p>这表示接下来的部分将描述要部署的服务。</p></li><li><p><strong>ai4e-things-mariadb:</strong></p><p>这是你为 MariaDB 服务定义的名称。</p></li><li><p><strong>image: mariadb:10.6.14</strong></p><p>这指示 Docker 从 Docker Hub 获取 <code>mariadb</code> 镜像，并使用特定的版本 <code>10.6.14</code>。</p></li><li><p><strong>container_name: ai4e-things-mariadb</strong></p><p>这是容器实例的名称。每次你启动这个 <code>docker-compose</code> 配置时，都会创建或重用这个名称的容器。</p></li><li><p><strong>environment:</strong></p><p>这是为容器设置的环境变量列表。</p><ul><li><code>MYSQL_ROOT_PASSWORD</code>: MariaDB 的 root 用户的密码。</li><li><code>MYSQL_DATABASE</code>: 在首次启动容器时将创建的数据库名称。</li><li><code>MYSQL_USER</code> &amp; <code>MYSQL_PASSWORD</code>: 在首次启动时将创建的新用户及其密码。</li><li><code>TZ</code>: 设置时区为 <code>Asia/Shanghai</code>。</li></ul></li><li><p><strong>ports:</strong></p><ul><li><code>3306:3306</code>: 这表示将容器的 3306 端口映射到宿主机的 3306 端口。</li></ul></li><li><p><strong>volumes:</strong></p><ul><li><code>./deploy/data/mariadb:/var/lib/mysql</code>: 这表示将宿主机的 <code>./deploy/data/mariadb</code> 目录映射到容器的 <code>/var/lib/mysql</code> 目录。这样，数据库的数据将被持久化保存在宿主机上，即使容器被删除，数据也不会丢失。</li></ul></li><li><p><strong>restart: always</strong></p><p>这表示如果容器因为某种原因停止了，Docker 会自动尝试重新启动它。</p></li><li><p><strong>networks:</strong></p><p>这定义了容器连接的网络。</p></li></ol><ul><li><code>ai4e_net</code>: 这是预先定义的网络名称。 <ul><li><code>ipv4_address: 172.20.0.116</code>: 指定容器在这个网络上的 IP 地址为 <code>172.20.0.116</code>。</li></ul></li></ul><p>这份配置为你提供了一个具有持久化数据、特定网络配置和预定义的数据库设置的 MariaDB 容器。</p><h2 id="使用adminer连接数据库" tabindex="-1"><a class="header-anchor" href="#使用adminer连接数据库" aria-hidden="true">#</a> 使用adminer连接数据库</h2><p>Adminer 是一个简单的、单文件的数据库管理工具，支持多种数据库系统，包括 MySQL/MariaDB、PostgreSQL、SQLite 等。它可以很容易地通过 Docker 运行。</p><p>以下是如何使用 <code>docker-compose</code> 与 Adminer 来连接到 MariaDB 数据库的步骤：</p><ol><li><p><strong>在 <code>docker-compose.yml</code> 中加入 Adminer 服务</strong>:</p><p>在你现有的 <code>docker-compose.yml</code> 文件中，你可以添加一个新的服务来运行 Adminer：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.2&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">ai4e-things-mariadb</span><span class="token punctuation">:</span>
    <span class="token punctuation">...</span> <span class="token comment"># 保持你的 MariaDB 配置不变</span>

  <span class="token key atrule">adminer</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> adminer<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> adminer
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">ai4e_net</span><span class="token punctuation">:</span>
    <span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，我们将 Adminer 服务的 8080 端口映射到宿主机的 8080 端口。</p></li><li><p><strong>启动 Adminer 和 MariaDB</strong>:</p><p>在包含 <code>docker-compose.yml</code> 文件的目录中，运行以下命令:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>通过浏览器访问 Adminer</strong>:</p><p>打开你的浏览器并访问 <code>http://localhost:8080</code>。你应该能看到 Adminer 的登录界面。</p></li><li><p><strong>连接到你的 MariaDB 数据库</strong>:</p><p>在 Adminer 的登录界面：</p><ul><li><strong>系统</strong>：选择 <code>MySQL</code></li><li><strong>服务器</strong>：输入你 MariaDB 容器的名称或 IP 地址。如果 Adminer 和 MariaDB 在同一个 Docker Compose 网络中，你可以使用 MariaDB 服务的名称作为主机名，例如 <code>ai4e-things-mariadb</code>。</li><li><strong>用户名</strong> 和 <strong>密码</strong>：使用你在 <code>docker-compose.yml</code> 文件中为 MariaDB 设置的用户名和密码，例如 <code>ai4e_things</code> 和 <code>789612543Ab1234</code>。</li><li><strong>数据库</strong>：可以选择特定的数据库，如 <code>ai4e_things</code>，或留空以查看所有数据库。</li></ul></li></ol><p>点击登录，你应该能够看到你的 MariaDB 数据库并开始管理它。</p><p>注意：使用 Adminer（或任何其他数据库管理工具）时，请始终确保你的数据库设置是安全的，并且管理界面不对公众开放，以防止未经授权的访问。</p><h2 id="使用datagrip连接数据库" tabindex="-1"><a class="header-anchor" href="#使用datagrip连接数据库" aria-hidden="true">#</a> 使用datagrip连接数据库</h2>`,43),d={href:"https://www.jetbrains.com/datagrip/",target:"_blank",rel:"noopener noreferrer"},u=s(`<p>要使用 DataGrip 来连接到你通过 Docker 或其他方式运行的 MariaDB 数据库，请按照以下步骤操作：</p><ol><li><p><strong>安装 DataGrip</strong>:</p><p>首先，如果你还没有安装 DataGrip，你需要从 JetBrains 的官方网站下载并安装它。</p></li><li><p><strong>启动 DataGrip</strong>:</p><p>打开 DataGrip 应用程序。</p></li><li><p><strong>创建新的数据源</strong>:</p><ul><li>在欢迎屏幕上，选择 “New Project”。</li><li>在左侧导航栏中，右键点击 “Database” 部分并选择 “New” -&gt; “Data Source” -&gt; “MySQL”。</li></ul></li><li><p><strong>配置连接</strong>:</p><ul><li><strong>Host</strong>: 输入你 MariaDB 容器的 IP 地址或主机名。如果你的数据库在本地运行，通常是 <code>localhost</code>。如果它在 Docker Compose 网络中，则可能是服务名称（例如 <code>ai4e-things-mariadb</code>）或分配给该服务的 IP 地址。</li><li><strong>Port</strong>: 默认的 MariaDB 端口是 <code>3306</code>，除非你已更改。</li><li><strong>User</strong>: 输入你为 MariaDB 设置的用户名，例如 <code>ai4e_things</code>。</li><li><strong>Password</strong>: 输入相应的密码，例如 <code>789612543Ab1234</code>。</li><li><strong>Database</strong>: 你可以选择特定的数据库，例如 <code>ai4e_things</code>，或留空以查看所有数据库。</li></ul><p>你也可以点击 “Test Connection” 按钮来确保你的设置是正确的。</p></li><li><p><strong>完成设置</strong>:</p><p>点击 “OK” 保存你的设置。现在，你应该能在 DataGrip 的界面左侧看到你的数据库连接。双击它将显示数据库的内容，你可以开始执行查询和其他操作。</p></li><li><p><strong>执行查询</strong>:</p><p>在 DataGrip 的主界面，你可以为所选的数据库打开一个新的查询窗口，并开始执行 SQL 语句。</p></li></ol><p>注意：确保你的 MariaDB 数据库对 DataGrip 使用的 IP 地址和端口开放，并且用户名和密码正确。如果你使用 Docker Compose 启动数据库，并且 DataGrip 也在同一台机器上运行，通常你应该可以使用 <code>localhost</code> 作为主机名。如果有防火墙或网络策略，确保它们不会阻止 DataGrip 的连接请求。</p><h2 id="使用vscode的数据库插件" tabindex="-1"><a class="header-anchor" href="#使用vscode的数据库插件" aria-hidden="true">#</a> 使用vscode的数据库插件</h2><p>Visual Studio Code（VSCode）是一个非常灵活的代码编辑器，拥有大量的插件，使其可以支持各种开发任务。当你想在 VSCode 中直接连接到数据库时，有很多插件可以选择。以下是如何使用其中的一个受欢迎的插件——<code>SQLTools</code> 来连接到 MariaDB 数据库的步骤：</p><ol><li><p><strong>安装 SQLTools 插件</strong>:</p><p>打开 VSCode，转到扩展（Extensions）标签（或按 <code>Ctrl+Shift+X</code>），然后搜索 &quot;SQLTools&quot;. 安装 &quot;SQLTools - Database tools&quot; 插件。</p><p>为了连接到 MariaDB/MySQL 数据库，你还需要安装特定的驱动。搜索并安装 &quot;SQLTools MySQL/MariaDB&quot;。</p></li><li><p><strong>连接到数据库</strong>:</p><ul><li><p>在 VSCode 的左侧侧边栏中，点击 SQLTools 的图标。</p></li><li><p>点击 &quot;Add New Connection&quot;。</p></li><li><p>选择 &quot;MySQL/MariaDB&quot;。</p></li><li><p>填写连接信息：</p><ul><li><strong>Name</strong>: 给你的连接起个名字，例如 “MyMariaDB”。</li><li><strong>Driver</strong>: 选择 &quot;MySQL/MariaDB&quot;。</li><li><strong>Server</strong>: 输入你的 MariaDB 服务器的地址。如果你的数据库是在本地机器上运行的，这通常是 <code>localhost</code>。</li><li><strong>Port</strong>: 默认的 MariaDB 端口是 <code>3306</code>，除非你已更改。</li><li><strong>Username</strong>: 输入你为 MariaDB 设置的用户名，例如 <code>ai4e_things</code>。</li><li><strong>Password</strong>: 输入相应的密码。</li><li><strong>Database</strong>: 你可以选择特定的数据库，例如 <code>ai4e_things</code>。</li></ul></li><li><p>点击 &quot;Test&quot; 来验证连接设置，如果一切正常，然后点击 &quot;Save&quot;。</p></li></ul></li><li><p><strong>浏览和查询数据库</strong>:</p><p>一旦连接建立，你就可以在 VSCode 内浏览你的数据库结构、执行查询等操作。</p></li><li><p><strong>断开连接</strong>:</p><p>如果你想断开数据库连接，只需在 SQLTools 的连接管理器中右键点击你的数据库连接，然后选择 &quot;Disconnect&quot;。</p></li></ol><p>这就是在 VSCode 中使用 SQLTools 插件连接到 MariaDB 数据库的基本步骤。有许多其他数据库插件可供选择，因此你可能会发现其他插件更适合你的特定需求或工作流程。</p><h2 id="如果使用postgresql" tabindex="-1"><a class="header-anchor" href="#如果使用postgresql" aria-hidden="true">#</a> 如果使用<code>PostgreSQL</code></h2><p>如果想使用<code>PostgreSQL</code>并希望它在<code>Docker Compose</code>配置中有类似的结构，以下是一个示例<code>docker-compose.yml</code>文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">postgres</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> my_postgres
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">POSTGRES_PASSWORD</span><span class="token punctuation">:</span> rootpassword   <span class="token comment"># 设置你的root密码</span>
      <span class="token key atrule">POSTGRES_DB</span><span class="token punctuation">:</span> mydatabase           <span class="token comment"># 你可以指定一个初始数据库名称</span>
      <span class="token key atrule">POSTGRES_USER</span><span class="token punctuation">:</span> user               <span class="token comment"># 可选: 创建一个用户</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5432:5432&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> postgres_data<span class="token punctuation">:</span>/var/lib/postgresql/data

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">postgres_data</span><span class="token punctuation">:</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p><ul><li><code>PostgreSQL</code>的默认端口是<code>5432</code>。</li><li>在这个示例中，使用了PostgreSQL的官方Docker镜像，它默认支持环境变量<code>POSTGRES_PASSWORD</code>, <code>POSTGRES_DB</code>, 和<code>POSTGRES_USER</code>，来分别指定root密码、数据库名称和用户名。</li><li>如果你需要为该用户指定一个密码，你可能需要自定义一个启动脚本或使用其他方式进行管理。</li></ul><p>根据需要，您可以进一步配置或修改此<code>docker-compose.yml</code>文件。</p>`,13);function m(k,g){const e=i("ExternalLinkIcon");return l(),t("div",null,[c,a("p",null,[a("a",d,[n("DataGrip"),r(e)]),n(" 是 JetBrains 出品的一个多数据库环境的 IDE。它支持多种数据库系统，并为用户提供了图形界面来执行查询、管理数据库结构等操作。")]),u])}const h=o(p,[["render",m],["__file","03-mysql数据库准备.html.vue"]]);export{h as default};
