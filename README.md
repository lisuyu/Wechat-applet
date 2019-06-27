# Wechat-applet

# -_-

微信小程序，微信官方网站有很多教程

https://developers.weixin.qq.com/miniprogram/dev/framework/

首先，先注册

使用官方提供的开发工具

目录结构

    pages
      index
        index.js
        index.json
        index.wxml
        index.wxss
      logs
        logs.js
        log.json
        logs.wxml
        logs.wxss
    utils
      app.js
      app.json
      app.wxss
      
每一个页面都有四个文件：js,json,wxml,wxss
      
      每个页面的四个文件名称必须相同
      其中的wxml相当于HTML，wxss相当于css

  官方文档：https://developers.weixin.qq.com/miniprogram/dev/framework/view/

    框架的视图层由 WXML 与 WXSS 编写，由组件来进行展示。
    将逻辑层的数据反应成视图，同时将视图层的事件发送给逻辑层。
    WXML(WeiXin Markup language) 用于描述页面的结构。
    WXS(WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。
    WXSS(WeiXin Style Sheet) 用于描述页面的样式。
    组件(Component)是视图的基本组成单元。
