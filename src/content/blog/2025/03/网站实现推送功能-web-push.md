---
title: "网站实现推送功能-web-push"
categories: 分类
tags:
  - 标签
id: "bd62f0edd786cd78"
date: 2025-03-14 09:58:24
cover: ""
---

:::note
通过worker实现推送
:::

#### 准备工作

[生成公钥私钥以及测试用网站](https://web-push-codelab.glitch.me/)


```js
//获取推送必要信息
export function subscribeToPushNotifications() {
    return navigator.serviceWorker.ready.then(function (registration) {
        return registration.pushManager.getSubscription().then(function (subscription) {
            
            return registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array('公钥')
            }).then(function (subscription) {
                console.log('成功', JSON.stringify(subscription));
                return subscription
            }).catch(function (e) {
                console.log('订阅推送服务失败', e);
                return Promise.reject(e)
            });
        });
    });
}

export function urlBase64ToUint8Array(base64String:string) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}

subscribeToPushNotifications().then(res => {
    // 你将会得到一个对象
    {"endpoint":"https://wns2-","expirationTime":null,"keys":{"p256dh":"BFlZ","auth":"adre"}}
    // 把这个对象放在上面网页中 Subscription to Send To 字段
})

```
#### 编写worker文件
```js
// public/service-worker.js
self.addEventListener('install', function (event) {

});
self.addEventListener('push', function (event) {
    console.log('222',event.data.json())
    const data = event.data.json();
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        url: data.url,
        icon: data.icon,
        data: data.data
      })
    );
});
self.addEventListener('notificationclick', function (event) {

  console.log('notificationclick',event)
  event.notification.close();
  
  clients.openWindow(event.notification.data.url||'/');

})

// vite.config.ts VitePWA 加入参数
workbox:{
  importScripts:['./service-worker.js'], //你自己的worker文件
  devOptions: {
    enabled: true  //在开发环境调试
  }
}
```
#### 测试推送

在刚刚的网页中 Text to Send 输入 `{"title":"title!","body":"666.","data":{"url":"http://baidu.com"}}`

点击 Send Push Message

如果你收到了推送，那么恭喜你，你已经成功了。

#### 编写推送需要的代码nodejs
```js
// push.js
const webPush = require('web-push');
// 公钥和私钥，请替换为您自己的
const publicKey = 'YOUR_PUBLIC_KEY';
const privateKey = 'YOUR_PRIVATE_KEY';
// 设置推送服务配置
webPush.setVapidDetails(
    'mailto:test@163.com',  //这个邮箱随意
    publicKey,
    privateKey
);

const subscription = {"endpoint":"https://wns2-","expirationTime":null,"keys":{"p256dh":"BFlZ","auth":"adre"}} //网页上获取到的推送信息
// 发送推送通知到特定订阅
const payload = JSON.stringify({ title: 'title!', body: '666.',data:{url:'http://baidu.com'}});
webPush.sendNotification(subscription, payload)
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.error('Error sending notification:', error);
    });

```
运行 `node push.js` 
看到推送信息，那么恭喜你，你已经成功了。

:::note{type="warning"}
注意：<br/>
谷歌浏览器在国内是无法使用推送的 <br/>
可以使用 edge 火狐 safari <br/>
mac的safari浏览器可以推送 <br/>
iPhone的safari浏览器需要使用pwa用户把网站添加到桌面上才可以收到推送<br/>
subscription每次获取会让之前的失效 避免多次获取导致推送失败
:::

![visitor badge](https://visitor-badge.laobi.icu/badge?page_id=Nicholas003.blog.bd62f0edd786cd78&format=true)