#package.json文件配置

**一、初识**

​	在Node.js中，模块是一个库或框架，也是一个Node.js项目。Node.js项目遵循模块化的架构，当我们创建了一个Node.js项目，意味着创建了一个模块，这个模块的描述文件，被称为package.json

**二、了解**

1. npm安装package.json时  直接转到当前项目目录下用命令npm install 或npm install --save-dev安装即可，自动将package.json中的模块安装到node-modules文件夹下

2. package.json 中添加中文注释会编译出错

3. 每个项目的根目录下面，一般都有一个package.json文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。npm install 命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。

4. package.json文件可以手工编写，也可以使用**npm init**命令自动生成。

   备注：npm脚本的执行会自动创建一个Shell



**三、包含字段**

1. 必含数据

```json
{
  "name": "kocla_test",   //项目名称 
  "version": "1.0.0",			//项目版本号
}
```

2. scripts   

   http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html>

指定运行脚本命令的缩写，(npm、yarn)

```json
"scripts": {
    "dev": "node build/dev-server.js",
    "build": "node build/build.js",
    "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit/specs"
  },
```

3. dependencies , devDependencies

   dependencies   项目运行所依赖的模块     --save

   devDependencies 项目开发所需的模块     —save-dev

   ```json
   "dependencies": {
     "@types/echarts": "^4.1.4",
     "ant-design-vue": "^1.3.5",
     "axios": "^0.18.0",
     "echarts": "^4.1.0",
     "echarts-wordcloud": "^1.1.3",
     "qs": "^6.6.0",
     "vue": "^2.6.6",
     "vue-class-component": "^6.0.0",
     "vue-property-decorator": "^7.0.0",
     "vue-router": "^3.0.1",
     "vuex": "^3.0.1"
   },
   "devDependencies": {
     "@vue/cli-plugin-babel": "^3.4.0",
     "@vue/cli-plugin-typescript": "^3.4.0",
     "@vue/cli-service": "^3.4.0",
     "less": "^3.0.4",
     "less-loader": "^4.1.0",
     "typescript": "^3.0.0",
     "vue-template-compiler": "^2.5.21"
   }
   ```

4. config

   config字段用于环境变量输出值

   ```json
    "config": { "port": "8080"}, 
   ```

5. bin

   许多包有一个或多个可执行文件希望被安装到系统路径。在npm下要这么做非常容易(事实上，npm就是这么运行的)。

   这需要在你的package.json中提供一个bin字段，它是一个命令名和本地文件名的映射。在安装时，如果是全局安装，npm将会使用符号链接把这些文件链接到prefix/bin，如果是本地安装，会链接到./node_modules/.bin/。

   比如，要使用myapp作为命令时可以这么做：

   ```
   { "bin" : { "myapp" : "./cli.js" } }
   ```

   这么一来，当你安装myapp，npm会从cli.js文件创建一个到/usr/local/bin/myapp的符号链接(这使你可以直接在命令行执行myapp)。

6. 常用属性

   

> ​    **name** - 包名.
> ​     **version** - 包的版本号。
> ​     **description** - 包的描述。
> ​     **homepage** - 包的官网URL。
> ​     **author** - 包的作者，它的值是你在[https://npmjs.org](https://link.jianshu.com?t=https%3A%2F%2Fnpmjs.org%2F)网站的有效账户名，遵循“`账户名<邮件>`”的规则，例如：`zhangsan <zhangsan@163.com>`。
> ​     **contributors** - 包的其他贡献者。
> ​     **dependencies / devDependencies** - **生产**/**开发**环境依赖包列表。它们将会被安装在 node_module 目录下。
> ​     **repository** - 包代码的Repo信息，包括type和URL，type可以是git或svn，URL则是包的Repo地址。
> ​     **main** - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
> ​     **keywords** - 关键字



 **四、关于版本号的描述**

​       npm模块的完整的版本号一般是【**主版本 . 次要版本 . 补丁版本**】，一般情况下，次要版本号发生改变的话，表示程序有重大更新。

##### （1）使用~表示版本范围

​         这里大概可以如此概述：①  补丁版本号缺失，则允许补丁版本号升级；②  次要版本号+补丁版本号缺失，则允许次要版本号+补丁版本号升级。

| 标识示例 |           描述           |         版本范围         |                             说明                             |
| :------: | :----------------------: | :----------------------: | :----------------------------------------------------------: |
|  ~2.3.4  | 主版本+次要版本+补丁版本 | 2.3.4 <= version < 2.4.0 | 在主版本+次要版本不允许变更的前提下，允许补丁版本升级（补丁板板号下限是4，无上限）。 |
|   ~2.3   |     主版本+次要版本      | 2.3.0 <= version < 2.4.0 |   在主版本+次要版本不允许变更的前提下，允许补丁版本升级。    |
|    ~2    |          主版本          | 2.0.0 <= version < 3.0.0 |   在主版本不允许变更的前提下，允许次要版本+补丁版本升级。    |

##### （2）使用^表示版本范围

​         这里大概可以如此概述：
​          ① 若主版本号不为0，则允许次要版本号+补丁版本号升级；② 若主版本号为0，次要版本号不为0，则允许补丁版本号升级；③ 若主版本号+次要版本号皆为0，将无法升级模块；④ 若主版本不为0，补丁版本缺失（将被视作0），那么将允许次要版本+补丁版本升级到到最新；⑤ 若主版本为0，补丁版本缺失（将被视作0），那么允许补丁版本升级到最新；⑥ 若次要版本+补丁版本均缺失，此时补丁版本,被视作1，那么将允许次要版本+补丁版本升级到最新。

| 标识示例 |                  描述                  |         版本范围         |                             说明                             |
| :------: | :------------------------------------: | :----------------------: | :----------------------------------------------------------: |
|  ^1.3.4  |             主版本号不为0              | 1.3.4 <= version < 2.0.0 | 主版本不为0，允许次要版本+补丁版本升级（此例下限是1.3.4，上线是2.0.0但不匹配2.0.0） |
|  ^0.2.3  |      主版本号为0，次要版本号不为0      | 0.2.3 <= version < 0.3.0 | 主版本为0，次要版本不为0，允许补丁版本升级（此例下限是0.2.3，上限是0.3.0但不匹配0.3.0） |
|  ^0.0.3  |        主版本号+次要版本号均为0        | 0.0.3 <= version < 0.0.4 |            主版本号+次要版本号均为0，无法升级模块            |
|   ^1.3   |       主版本不为0，补丁版本缺失        | 1.3.0 <= version < 2.0.0 | 主版本不为0，补丁版本因缺失被视作0，允许次要版本+补丁版本升级到到最新（此例下限是1.3.0，上线是2.0.0但不匹配2.0.0） |
|   ^0.2   |        主版本为0，补丁版本缺失         | 0.2.0 <= version < 0.3.0 | 主版本为0，补丁版本因缺失被视作0，允许补丁版本升级到最新（此例下限是0.2.0，上限是0.3.0但不匹配0.3.0） |
|    ^1    | 主版本号不为0，次要版本+补丁版本均缺失 | 1.0.0 <= version < 2.0.0 | 主版本不为0，次要版本+补丁版本因缺失被视作0，允许次要版本+补丁版本升级（此例下限是1.0.0，上线是2.0.0但不匹配2.0.0） |
|    ^0    |  主版本号为0，次要版本+补丁版本均缺失  | 0.0.1 <= version < 1.0.0 | 主版本为0，次要版本因缺失被视作0，补丁版本虽缺失但只能被视作1，允许缺失的次要版本+补丁版本升级到最新（此例下限是0.0.1，上限是1.0.0但不匹配1.0.0） |

##### （3）语义版本号

​         使用NPM下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码，这里简单介绍一下。

​         语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

> 1. 如果只是修复bug，需要更新Z位。
> 2. 如果是新增了功能，但是向下兼容，需要更新Y位。
> 3. 如果有大变动，向下不兼容，需要更新X位。

​    _早期因为这种版本机制出现各种问题，yarn应运而生，npm5.0以后也做了相关的优化（package-lock.json文件），_

[npm和yarn的区别][ ]