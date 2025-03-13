---
title: "vite项目使用pwa小记"
categories: 分类
tags:
  - 标签
id: "cdbde6d2aefa95d5"
date: 2025-03-13 14:14:50
cover: ""
---

:::note
PWA项目启动页面配置 以及更新提示配置
:::

#### 安装

```bash
pnpm i vite-plugin-pwa
```

#### 引入

```js
// vite.config.js
import { VitePWA } from 'vite-plugin-pwa'

defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        name: '',
        short_name: '',
        description: '',
        theme_color: '',
        icons: [
          {
            "src": "",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
        ],
      }
      injectRegister:'script',
      workbox:{
        importScripts:['./service-worker.js'] //你自己的worker文件 可以不传
      },
      
    })
  ]
})

```

#### 重中之重 更新提示
```js

// main.ts 或者 App.vue

import { registerSW } from 'virtual:pwa-register'


const updateSW = registerSW({
  onNeedRefresh() {
    // 当需要刷新 可以类似小程序提示  已准备好新版本 是否更新
    ElMessageBox.confirm('发现新内容可用，是否加载？', '更新提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(() => {
      updateSW()
    }).catch(() => {})
  },
})


```

![visitor badge](https://visitor-badge.laobi.icu/badge?page_id=Nicholas003.blog.cdbde6d2aefa95d5&format=true)
