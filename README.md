# h5-landing-page

### 鱼多多项目

下载落地页 + 注册页 + 文档说明页

#### 域名(没有测试服)

正式服："https://www.ickapay.com"

#### 服务器地址

测试服：150.109.79.86 (已经废弃)

正式服：47.254.238.208

#### 访问地址

本地地址：ip + 路由 ==》http://192.168.91.21:8080/register?inviteCode=20&language=0

线上地址 域名 + 根路径(例如：download) + 路由 + 参数(非必填) ==》https://www.ickapay.com/download/register?inviteCode=20&language=0

鱼多多下载页：https://www.ickapay.com/download/fishLot

鱼多多注册页：https://www.ickapay.com/download/register?inviteCode=20&language=0

隐私政策：https://www.ickapay.com/download/privacyPolicy?language=0

平台公约：https://www.ickapay.com/download/platformConventions?language=0

平台简介：https://www.ickapay.com/download/platformIntroduce?language=0

服务协议：https://www.ickapay.com/download/agreements?language=0

法律申明：https://www.ickapay.com/download/legalNotice?language=0

- 常用参数

  ```bash

    # statusBarHeight
      statusBarHeight = 20  顶部状态栏高度(默认20)

    # device
      device = Android/ios 区分当前环境(可以自行判断,使用与否自行选择)

    # language
        language = 0，2  (值为0~7)  0表示简体中文，2表示英文，其它的值暂时不用

    # inviCode
        inviCode = ddddadasda 邀请码(可能为数字字母组合, 非必须)

  ```

#### 运行及打包

- 常用命令

  ```bash

    # 启动项目
        yarn serve

    # 以指定的环境打包项目(dev、test、prod，具体的以项目的.env文件为准)
        yarn:build:环境名；

  ```

#### 工具文件说明

- 文件名

  ```bash

      # bridge
      与原生交互的js桥接基础方法

      # openNative
      js调用原生方法模块

      # service
      请求拦截/响应配置文件

      # platform
      检测浏览器环境

      # openInstall (https://www.jianshu.com/p/5e5cabd1846e)
      openInstall配置模块

  ```
