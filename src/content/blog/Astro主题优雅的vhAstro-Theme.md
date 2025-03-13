---
title: "Astro主题-优雅的vhAstro-Theme【使用文档】"
categories: Code
tags:
  - Astro
  - 主题
  - 博客
  - vhAstro
  - vhAstro-Theme
id: "astro-theme-vhastro-theme"
date: 2025-03-02 18:18:18
cover: "https://i0.wp.com/uxiaohan.github.io/v2/2025/03/1740977096666.webp"
recommend: false
top: true
hide: true
---

:::note{type="success"}
🥝 从 Z-Blog 到 Emlog，从 Typecho 到 Hexo，从动态博客到静态博客，作为一个前端，我深入了解了多种 SSG 工具，如 Hexo、Vitepress、Hugo 等，并最终锁定了 Astro 作为重构博客的选择。

🍇 Astro 活跃的社区支持、广泛的现代框架兼容性、高效的性能优化、优秀的开发体验以及原生 SEO 优化，支持 Markdown/MDX 编写内容，且允许开发者混合使用 React、Vue、Svelte 等主流框架的组件，是我心目中最适合构建博客这样的以内容驱动的网站的 Web 框架。

🍊 我以 Astro 为基础开发的 vhAstro-Theme 主题模版，是一款优雅的响应式博客主题，它具有简洁的设计、流畅的动画和页面过渡。
:::

## 🚀 vhAstro-Theme：一款基于 Astro 构建的优雅的响应式博客主题

**「当极简主义遇上工程之美」**

![Astro主题 vhAstro-Theme](https://i0.wp.com/uxiaohan.github.io/v2/2025/03/1740977096666.webp)

## 项目地址

> 1、QQ 群下载：113445803 <br>2、GitHub 下载（推荐）：https://github.com/uxiaohan/vhAstro-Theme （谢谢你的star）

## ✨ 功能特性

- [x] 简洁的响应式设计
- [x] 流畅的动画和页面过渡
- [x] 两列布局
- [x] 阅读时间
- [x] 字数统计
- [x] 代码块
- [x] 语法高亮
- [x] 图片懒加载
- [x] 图片灯箱
- [x] Twikoo 评论
- [x] 本地搜索
- [x] 标签
- [x] 分类
- [x] 归档
- [x] 动态
- [x] 关于
- [x] 友情链接
- [x] 推荐文章
- [x] 谷歌广告
- [x] 内置 404 页面
- [x] Sitemap 支持
- [x] RSS 支持
- [x] 活跃的社区支持
- [x] 广泛的现代框架兼容性
- [x] 高效的性能优化
- [x] 优秀的开发体验

## 🚀 使用方法

- 使用此模板 [生成新仓库或 Fork 此仓库](https://github.com/new?template_name=vhAstro-Theme&template_owner=uxiaohan)
- 进行本地开发，Clone 新的仓库，执行 `pnpm install` 以安装依赖
- 若未安装 pnpm，执行 `npm install -g pnpm`
- 通过配置文件 `src/config.ts` 自定义博客
- 执行 pnpm newpost '文章标题' 创建新文章，并在 src/content/posts/ 目录中编辑
- 参考官方指南将博客部署至 Vercel, Netlify,Cloudflare Pages, GitHub Pages 等
- 部署前需编辑 `astro.config.mjs` 中的站点设置。


## ⚙️ 文章格式

```md
---
title: 标题
categories: 分类
tags:
  - 标签1
  - 标签2
id: 文章ID
date: 文章创建日期
updated: 文章更新日期
cover: "封面图URL (为空默认随机内置封面 /public/assets/images/banner)"
recommend: false # 是否推荐文章
top: false # 是否置顶文章
hide: false # 是否隐藏文章
---
```

## 💻 命令

```bash
# 安装依赖
pnpm install
# 本地开发
pnpm dev
# 构建静态文件
pnpm build
# 创建新文章
pnpm newpost '文章标题'
```

## 🍬 特色页面

### 友情链接

```js
// 配置文件 src/page_data/Link.ts
export default {
	// API 接口请求优先，数据格式保持和 data 一致
	api: "",
	// api 为空则使用 data 静态数据
	data: [
		{
			name: "韩小韩博客",
			link: "https://www.vvhan.com",
			avatar: "https://q1.qlogo.cn/g?b=qq&nk=826861827&s=640",
			descr: "运气是计划之外的东西."
		},
		{
			name: "韩小韩API",
			link: "https://api.vvhan.com",
			avatar: "https://api.vvhan.com/static/images/logo.webp",
			descr: "免费Web API数据接口调用服务平台."
		}
	]
};
```

### 说说动态

```js
// 配置文件 src/page_data/Talking.ts
export default {
	// API 接口请求优先，数据格式保持和 data 一致
	api: "",
	// api 为空则使用 data 静态数据
	// 注意：图片请用 vh-img-flex 类包裹
	data: [
		{
			date: "2025-02-12 19:36:16",
			tags: ["树", "夕阳"],
			content: '好美🌲<p class="vh-img-flex"><img src="https://i0.wp.com/shp.qpic.cn/collector/826861827/937ec070-8448-4c7b-9c8b-abd41ce892cb/0"></p>'
		},
		{
			date: "2024-10-05 16:16:06",
			tags: ["日常"],
			content: "记录第一条说说"
		}
	]
};
```

### 圈子（需部署FreshRSS）

```js
// 配置文件 src/page_data/Friends.ts
export default {
  // API 接口请求优先，数据格式保持和 data 一致
  api: '',
  // api 为空则使用 data 静态数据
  data: [
    {
      "title": "Astro 中使用 Lenis 增加鼠标滚动阻尼感",
      "auther": "韩小韩博客",
      "date": "2025-03-06",
      "link": "https://www.vvhan.com/article/Lenis-in-Astro",
      "content": "在移动端触控交互中，惯性滚动带来的丝滑体验已成为标配，但鼠标滚轮受限于机械结构，滚动时难免产生生硬的段落感。如何让传统滚轮操作也能获得如触控板般的阻尼反馈？Lenis库通过JavaScript模拟惯性算法，成功将”物理惯性”引入网页滚动，本文将解析其实现原理与实战应用。"
    },
    {
      "title": "Astro 添加 Twikoo 评论组件",
      "auther": "韩小韩博客",
      "date": "2025-03-03",
      "link": "https://www.vvhan.com/article/astro-twikoo",
      "content": "Astro在使用视图过渡路由时，在跳转路由时，会导致JS文件只有在第一次进入页面时生效，所以Astro在使用视图过渡路由下Twikoo时无法正常使用的，我是单独写了一个评论组件，对Twikoo进行动态加载，然后在需要评论的页面引入的。"
    },
    {
      "title": "Astro主题-优雅的vhAstro-Theme【使用文档】",
      "auther": "韩小韩博客",
      "date": "2025-03-02",
      "link": "https://www.vvhan.com/article/astro-theme-vhastro-theme",
      "content": "🥝从Z-Blog到Emlog，从Typecho到Hexo，从动态博客到静态博客，作为一个前端，我深入了解了多种SSG工具，如Hexo、Vitepress、Hugo等，并最终锁定了Astro作为重构博客的选择。🍇Astro活跃的社区支持、广泛的现代框架兼容性、高效的性能优化、优秀的开发体验。"
    }
  ]
}
```

## 🌈 组件

### 文本加粗

```md
那个女孩子 **气喘吁吁** 的打电话和你说：我在跑步
```

那个女孩子 **气喘吁吁** 的打电话和你说：我在跑步

### 文本倾斜

```md
你问她为什么有 _啪啪啪_ 的声音，她和你说：我是穿拖鞋跑步的
```

你问她为什么有 _啪啪啪_ 的声音，她和你说：我是穿拖鞋跑步的

### 文本删除

```md
你说，好的那你继续 ~~跑步~~ 吧
```

你说，好的那你继续 ~~跑步~~ 吧

### 行内代码

```md
`Vscode` 是全宇宙最好的编辑器
```

`Vscode` 是全宇宙最好的编辑器

### 引用

```md
> 这是一个引用
```

> 这是一个引用

### 有序列表

```md
牛肉的的营养如下：

1. 能量 (kcal)
2. 脂类 (fat)
3. 蛋白质 (protein)
4. 碳水化合物 (carbohydrate)
```

牛肉的的营养如下：

1. 能量 (kcal)
2. 脂类 (fat)
3. 蛋白质 (protein)
4. 碳水化合物 (carbohydrate)

### 无序列表

```md
- 一个女朋友
- 二个女朋友
- 三个女朋友
- ...
- N 个女朋友
```

- 一个女朋友
- 二个女朋友
- 三个女朋友
- ...
- N 个女朋友

### 超链接

```md
[百度一下，你就懂了](https://www.baidu.com)
```

[百度一下，你就懂了](https://www.baidu.com)

### 3 行 3 列的表格

```md
| 表头 | 表头 | 表头 |
| :--: | :--: | :--: |
| 鸡头 | 鸭头 | 狗头 |
| 鸡头 | 鸭头 | 狗头 |
| 鸡头 | 鸭头 | 狗头 |
```

| 表头 | 表头 | 表头 |
| :--: | :--: | :--: |
| 鸡头 | 鸭头 | 狗头 |
| 鸡头 | 鸭头 | 狗头 |
| 鸡头 | 鸭头 | 狗头 |

### 代码块

```javascript
const obj = {
	name: "hi",
	age: 18
};
// 判断某个属性是否在对象里
console.log("name" in obj);
// 删除对象某个属性
console.log(delete obj.name);
// 将对象的属性名提取成数组
console.log(Object.keys(obj));
```

### H 标签

```md
<!-- H标签，页面标题即h1，不建议文章内使用h1标签 -->
## H2
### H3
#### H4
##### H5
```

## H2

### H3

#### H4

##### H5

### 按钮组件

```md
<!-- 按钮组件 -->
::btn[标题]{link="URL 链接"}
<!-- 支持类型：info、success、warning、error、import -->
::btn[按钮]{link="链接" type="info"}
```

::btn[按钮]{link="https://www.baidu.com"}
::btn[按钮]{link="https://www.baidu.com" type="info"}
::btn[按钮]{link="https://www.baidu.com" type="success"}
::btn[按钮]{link="https://www.baidu.com" type="warning"}
::btn[按钮]{link="https://www.baidu.com" type="error"}
::btn[按钮]{link="https://www.baidu.com" type="import"}

### Note 组件

```md
<!-- note组件 -->
:::note
这是 note 组件 默认主题
:::
<!-- 支持类型：info、success、warning、error、import -->
:::note{type="info"}
这是 note 组件 success 主题
:::
```

:::note
这是 note 组件 默认主题
:::

:::note{type="info"}
这是 note 组件 info 主题
:::

:::note{type="success"}
这是 note 组件 success 主题
:::

:::note{type="warning"}
这是 note 组件 warning 主题
:::

:::note{type="error"}
这是 note 组件 error 主题
:::

:::note{type="import"}
这是 note 组件 import 主题
:::

### Picture 组件

```md
:::picture
![Astro主题-vhAstro-Theme](https://i0.wp.com/uxiaohan.github.io/v2/2023/03/42944511.png)
![Astro主题-vhAstro-Theme](https://i0.wp.com/uxiaohan.github.io/v2/2023/03/42944511.png)
![Astro主题-vhAstro-Theme](https://i0.wp.com/uxiaohan.github.io/v2/2023/03/42944511.png)
:::
```

:::picture
![Astro主题-vhAstro-Theme](https://i0.wp.com/uxiaohan.github.io/v2/2023/03/42944511.png)
![Astro主题-vhAstro-Theme](https://i0.wp.com/uxiaohan.github.io/v2/2023/03/42944511.png)
![Astro主题-vhAstro-Theme](https://i0.wp.com/uxiaohan.github.io/v2/2023/03/42944511.png)
:::

### Music 组件

```md
<!-- id 支持：歌曲 id / 歌单 id / 专辑 id / 搜索关键词
type 支持：song, playlist, album, search（默认值：song）
server 支持：netease, tencent, kugou, xiami, baidu（默认值：netease） -->
<!-- 单曲 -->
::vhMusic{id="1474697967"}
<!-- 列表 -->
::vhMusic{id="173901981" type="playlist"}
```

::vhMusic{id="1474697967"}
::vhMusic{id="173901981" type="playlist"}

### Video 组件

```md
::vhVideo{url="https://originfastly.jsdelivr.net/gh/uxiaohan/uxiaohan.github.io@master/v2/2022/08/index.m3u8"}
```

::vhVideo{url="https://originfastly.jsdelivr.net/gh/uxiaohan/uxiaohan.github.io@master/v2/2022/08/index.m3u8"}
