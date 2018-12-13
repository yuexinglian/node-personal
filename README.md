# node-personal

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 如何从头开始搭建一个前后端分离项目

## 安装vue

1. 如果没有安装`@vue/cli`,全局安装`@vue/cli`:
```
npm install -g @vue/cli
```
如果已经安装了`vue-cli` 1.0 或`vue-cli` 2.0，需要先执行命令`npm uninstall vue-cli -g`卸载再安装`@vue/cli`。
2. 初始化项目：
```
vue create hello-world
```
3. 执行`npm run serve`启动项目，浏览器输入`http://localhost:8080`即可看到demo页面。

>`@vue/cli`提供了图形化界面管理工具，执行 `vue ui`即可打开图形化管理界面。

## 配置服务器端
1. 为了能让node热更新，需全局下载supervisor模块，在package.json文件的scripts脚本选项中配置启动命令：
```
"dev": "set NODE_ENV=development && supervisor ./bin/server",
```
该配置可以通过npm run dev快速启动项目，实现node代码的热更新。

##配置数据库

1. 数据库使用了MongoDB，使用需要先安装MongoDB，具体安装可百度。
2. 安装完毕后可配置MongoDB的环境变量
3. 链接数据库不需要执行连接函数，只需该函数所在文件引入app.js文件中即可

##配置session会话机制
1. 使用session机制管理用户登录状态，将sessionID存储到cookie中，session信息存储到MongoDB中，需要安装`express-session`和`connect-mongodb-session`两个插件，前者是session插件，后者是配置session存储到mongoDB插件


