---
title: "为PWA制作启动图"
categories: 分类
tags:
  - 标签
id: "d9e02f2f7a53f5b1"
date: 2025-03-19 13:48:42
cover: ""
---

:::note
为 PWA 制作启动图
:::

#### 1. 安装插件
```bash
npm install -g pwa-asset-generator
```
#### 2. 生成启动图
```
sudo pwa-asset-generator ./public/logo.png ./public/start-img/
日间模式 
sudo pwa-asset-generator ./public/logo.png ./public/start-img/ -b #303030 -d  
-d 表示夜间模式 -b 背景颜色
```
#### 3. 配置 manifest.json 或者 vite.config.ts
```json
"icons": [
  {
    "src": "public/start-img/manifest-icon-192.maskable.png",
    "sizes": "192x192",
    "type": "image/png",
    "purpose": "any"
  },
  {
    "src": "public/start-img/manifest-icon-192.maskable.png",
    "sizes": "192x192",
    "type": "image/png",
    "purpose": "maskable"
  },
  {
    "src": "public/start-img/manifest-icon-512.maskable.png",
    "sizes": "512x512",
    "type": "image/png",
    "purpose": "any"
  },
  {
    "src": "public/start-img/manifest-icon-512.maskable.png",
    "sizes": "512x512",
    "type": "image/png",
    "purpose": "maskable"
  }
]
```
把生成出的产物放到html里

``` js
// 优雅一点的方法 使用ejs模板
// vite.config.ts
import { appleDeviceSpecsForLaunchImages } from 'pwa-asset-generator'
import { createHtmlPlugin } from 'vite-plugin-html'

defineConfig({
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          appleDeviceSpecsForLaunchImages
        }
      }
    })
  ]
})

```

``` html
<% appleDeviceSpecsForLaunchImages.forEach(function(spec) { %>
  <link rel="apple-touch-startup-image"
    href="/start-img/apple-splash-<%= spec.portrait.width %>-<%= spec.portrait.height %>.jpg"
    media="(device-width: <%= spec.portrait.width / spec.scaleFactor %>px) and (device-height: <%= spec.portrait.height / spec.scaleFactor %>px) and (-webkit-device-pixel-ratio: <%= spec.scaleFactor %>) and (orientation: portrait)" />
  <link rel="apple-touch-startup-image"
    href="/start-img/apple-splash-dark-<%= spec.portrait.width %>-<%= spec.portrait.height %>.jpg"
    media="(prefers-color-scheme: dark) and (device-width: <%= spec.portrait.width / spec.scaleFactor %>px) and (device-height: <%= spec.portrait.height / spec.scaleFactor %>px) and (-webkit-device-pixel-ratio: <%= spec.scaleFactor %>) and (orientation: portrait)" />
  <% }); %>

```
:::note{type="warning"}
一些无法解决的问题
在IOS中  
1、夜间模式不是实时的  需要重启PWA应用
2、启动图 添加的时候是 浅色模式 那么永远都是浅色模式 不会跟随系统变化


:::

### 

![visitor badge](https://visitor-badge.laobi.icu/badge?page_id=Nicholas003.blog.d9e02f2f7a53f5b1&format=true)