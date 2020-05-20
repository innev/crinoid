# @kbox/server

轻量级微服务框架

## 一、需求

### 1.1、第一版

* 参考Genx-server，实现对配置的按需加载（配置范例请看2.2）
* 框架内只需要实现解析配置，并按照配置加载对应的第三方模块，然后启用WEB服务即可

### 1.2、第二版

* 提供代码测试方法，和代码覆盖率配置
* 将登录,渲染和错误处理等功能做成另外的小模块，共应用配置（如：kbox-passport, kbox-render, kbox-error）

## 二、通过create-app生成的应用项目

### 2.1、NODE配置范例

``` package.josn
{
  "name": "@kbox/server",
  "version": "1.0.0",
  "description": "web application framework based on koa for node.js",
  "main": "lib/index.js",
  "scripts": {
    "cover": "npm run build:test && npm run cover:unit && npm run cover:integration && npm run cover:report",
    "cover:unit": "nyc --silent npm run test:spec",
    "cover:integration": "nyc --silent --no-clean npm run test:mocha",
    "cover:report": "nyc report --reporter=html --reporter=text",
    "bulid:clean": "rm -rf lib",
    "build": "npm run bulid:clean && NODE_ENV=development babel src -d lib --copy-files && del lib/**/__test__",
    "build:prod": "npm run bulid:clean && NODE_ENV=production babel src -d lib --copy-files && del lib/**/__test__",
    "build:watch": "NODE_ENV=development babel src -w -d lib --copy-files"
  },
  "keywords": [
    "kbox-server",
    "web",
    "builder",
    "modular",
    "framework",
    "koa"
  ],
  "author": "XXXXX",
  "license": "MIT",
  "nyc": {
    "exclude": [
      "babel.config.js",
      "test",
      "src"
    ]
  },
  "devDependencies": {
    "koa-passport": "^4.0.1",
    "luxon": "^1.22.0",
    "mysql2": "^1.6.4",
    "shelljs": "^0.8.2",
    "socket.io": "^2.2.0",
    "swig-templates": "^2.0.3"
  },
  "dependencies": {
    "@koa/cors": "^2.2.3",
    "@koa/router": "^8.0.8",
    "http-status-codes": "^1.3.0",
    "koa": "^2.11.0",
    "koa-body": "^4.1.1",
    "koa-compress": "^3.0.0",
    "koa-connect": "^2.0.1",
    "koa-csrf": "^3.0.8",
    "koa-error": "^3.2.0",
    "koa-etag": "^3.0.0",
    "koa-flash-message": "^0.1.6",
    "koa-mount": "^4.0.0",
    "koa-override": "^3.0.0",
    "koa-session": "^5.10.1",
    "koa-session-memory": "^1.0.2",
    "koa-static": "^5.0.0",
    "koa-views": "^6.2.1",
    "validator": "^12.1.0"
  }
}

```

### 2.2、项目配置范例

``` server.dev.json
{
    "version": "1.0",
    "http": {
        port: 3000
    },
    "mongodb": {
        kbox: {
            connection: 'mongodb://192.168.0.249:27017/kbox_dev'
        }
    }
    "log": {
        file: {
            logPath: './logs',
            level:'silly'
        },
        es: {
            level:'silly',
            client: {
                host: '192.168.0.249:9200',
                httpAuth: 'xxx',
                log: 'trace',
                apiVersion: '7.2'
            }
        }
    }
    "cache": {
        session: {
            storage: 'Redis',
            params: { host: '192.168.0.249', port: 6379, password: '', database: 0 }
        }
    },
    "middleware": [
        "kbox-auth",
        "kbox-passport",
        "kbox-render",
        "kbox-body",
        "kbox-router",
        "kbox-controller",
        "kbox-query",
        "kbox-error"
    ]
}
```

### 2.3、生成项目的目录结构
``` 应用目录结构
├── bin                                       
│   └── index.js                              // bin里面可以放控制台脚本
├── lib                                       
│   └── www.js                                // http服务器初始化文件
├── src                                       // 源码目录
│   ├── etc                                   // 配置文件存放目录
│   ├── controller                            // 业务逻辑控制器
│   ├── db                                    // 存储模块
│   └── module                                // 功能模块存放目录
├── app.js                                    // 入口文件
└── package.json                              // package初始配置文件
```