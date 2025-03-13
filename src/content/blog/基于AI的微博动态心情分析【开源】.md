---
title: 基于AI的微博动态心情分析【开源】
date: 2024-09-04 15:59:05
categories: Daily
tags:
  - 微博动态
  - 心情分析
  - AI

id: "weibo-dynamic-emotion-analysis-open-source"
cover: "https://i0.wp.com/uxiaohan.github.io/v2/2024/09/1725437035.webp"
recommend: false
hide: true
---

:::note
实时关注 Ta 的微博，并了解 Ta 微博动态的情绪心情，通过 Bark 或 PushDeer 进行通知的，基于 Nodejs 的 AI的微博动态心情分析 脚本
:::

### 开源地址

[WeiBo-Mood](https://github.com/uxiaohan/WeiBo-Mood)

[免费AI注册](https://cloud.siliconflow.cn/i/R83F9xkI)

### 配置 config.js 文件

```js
module.exports = {
  //   AI API接口地址
  chatApi: "https://api.siliconflow.cn/v1/chat/completions",
  //   AI 大模型 (可根据文档更换)
  chatModel: "internlm/internlm2_5-7b-chat",
  //   AI Token
  chatToken: "",
  //   微博ID    https://m.weibo.cn/u/1840274303
  WB_UID: "1840274303",
  //   获取最新微博频率 每间隔16分钟更新一次 (Cron 表达式)
  CRON_TIME: "*/16 * * * *",
  //   Bark通知Token 不填写即不通知  https://bark.day.app/
  BARK_TOKEN: "",
  //   PushDeer通知Token 不填写即不通知  https://www.pushdeer.com/
  PUSH_DEER_TOKEN: ""
};
```

### 安装依赖

```js
npm install
```

### 运行脚本

```js
npm start
```

### 效果图片

![微博心情分析](https://i0.wp.com/uxiaohan.github.io/v2/2024/09/1725436245.png)
