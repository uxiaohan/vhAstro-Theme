---
title: 【开源】Cloudflare优选IP➕DnsPod的DDNS自动切换
date: 2024-08-27 15:24:10
categories: Code
tags:
  - Cloudflare
  - 优选IP
  - DnsPod
  - DDNS

id: cloudflare-ip-dnspod-ddns
cover: https://i0.wp.com/uxiaohan.github.io/v2/2024/08/1724744026.webp
recommend: false
hide: true
---

:::note
CloudFlare是一个非常优秀的CDN服务，但是CloudFlare也有一个大的毛病——大陆访问速度很慢。国外很多网站都在使用 Cloudflare CDN，但分配给中国内地访客的IP并不友好（延迟高、丢包多、速度慢）。
虽然Cloudflare公开了所有IP段，但想要在这么多IP中找到适合自己的，怕是要累死，于是就有了这个脚本。
:::

## Cloudflare优选IP 每隔15分钟更新(IPv6+IPv4)

### 项目地址

::btn[CloudflareIP-dnspod-ddns]{link="https://github.com/uxiaohan/CloudflareIP-dnspod-ddns"}

### 优化后示例站点

::btn[点击体验]{link="https://cf.vvhan.com/"}

## 实现逻辑及局部代码

### 获取优选IP

```js
const res = await fetch("https://api.vvhan.com/tool/cf_ip");
const data = await res.json();
// 数据格式
// {
//     "success": true,
//     "data": {
//         "v4": {
//             "CM": [],
//             "CU": [],
//             "CT": []
//         },
//         "v6": {
//             "CM": [],
//             "CU": [],
//             "CT": []
//         }
//     }
// }
```

### 取优选IP中的最优选 (延迟比较)

```js
// 取最优选IP IPv4
const CM_IP_V4 = data.v4.CM.reduce((minItem, currentItem) => {
  return currentItem.latency < minItem.latency ? currentItem : minItem;
}, data.v4.CM[0]);
const CU_IP_V4 = data.v4.CU.reduce((minItem, currentItem) => {
  return currentItem.latency < minItem.latency ? currentItem : minItem;
}, data.v4.CU[0]);
const CT_IP_V4 = data.v4.CT.reduce((minItem, currentItem) => {
  return currentItem.latency < minItem.latency ? currentItem : minItem;
}, data.v4.CT[0]);
const DNS_DATA_V4 = { 移动: CM_IP_V4.ip, 联通: CM_IP_V4.ip, 电信: CU_IP_V4.ip, 默认: CT_IP_V4.ip };

// 取最优选IP IPv6
const CM_IP_V6 = data.v6.CM.reduce((minItem, currentItem) => {
  return currentItem.latency < minItem.latency ? currentItem : minItem;
}, data.v6.CM[0]);
const CU_IP_V6 = data.v6.CU.reduce((minItem, currentItem) => {
  return currentItem.latency < minItem.latency ? currentItem : minItem;
}, data.v6.CU[0]);
const CT_IP_V6 = data.v6.CT.reduce((minItem, currentItem) => {
  return currentItem.latency < minItem.latency ? currentItem : minItem;
}, data.v6.CT[0]);
const DNS_DATA_V6 = { 移动: CM_IP_V6.ip, 联通: CM_IP_V6.ip, 电信: CU_IP_V6.ip, 默认: CT_IP_V6.ip };
```

### 循环替换优选IP

```js
DnsPodDomainList.forEach(async i => {
  try {
    const res = await client.ModifyRecord({ Domain, RecordType: i.Type, RecordLine: "", RecordLineId: i.LineId, Value: i.Type == "A" ? DNS_DATA_V4[i.Line] : DNS_DATA_V6[i.Line], RecordId: i.RecordId, SubDomain });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
});
```
