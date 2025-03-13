export default {
  Title: '韩小韩博客',
  Site: 'https://www.vvhan.com',
  Subtitle: '不曾与你分享的时间,我在进步.',
  Description: '韩小韩博客 专注于前开发与相关技术的实战分享，涵盖Vue框架、Node.js、Serverless等，并涉及Node、Python、Linux、Docker等领域。同时，博客也分享作者的生活、音乐和旅行的热爱。',
  Author: '.𝙃𝙖𝙣',
  Motto: '科学、民主、自由',
  Avatar: 'https://q1.qlogo.cn/g?b=qq&nk=826861827&s=640',
  // 导航栏 (新窗口打开 newWindow: true)
  Navs: [
    { text: '朋友', link: import.meta.env.VITE_BASE_URL+'/links', icon: import.meta.env.VITE_BASE_URL+'/assets/images/svg/Navs/links.svg' },
    // { text: '圈子', link: import.meta.env.VITE_BASE_URL+'/friends', icon: import.meta.env.VITE_BASE_URL+'/assets/images/svg/Navs/friends.svg' },
    // { text: '动态', link: import.meta.env.VITE_BASE_URL+'/talking', icon: import.meta.env.VITE_BASE_URL+'/assets/images/svg/Navs/talking.svg' },
    // { text: '昔日', link: import.meta.env.VITE_BASE_URL+'/archives', icon: import.meta.env.VITE_BASE_URL+'/assets/images/svg/Navs/archives.svg' },
    // { text: '留言', link: import.meta.env.VITE_BASE_URL+'/message', icon: import.meta.env.VITE_BASE_URL+'/assets/images/svg/Navs/message.svg' },
    // { text: '关于', link: import.meta.env.VITE_BASE_URL+'/about', icon: import.meta.env.VITE_BASE_URL+'/assets/images/svg/Navs/about.svg' },
    // { text: 'API', link: 'https://api.vvhan.com/', target: true, icon: import.meta.env.VITE_BASE_URL+'/assets/images/svg/Navs/link.svg' },
  ],
  // 侧边栏个人网站
  WebSites: [
    { text: 'Github', link: 'https://github.com/Nicholas003', icon: import.meta.env.VITE_BASE_URL+'/assets/images/svg/WebSites/github.svg' },
    // { text: '韩小韩API', link: 'https://api.vvhan.com', icon: import.meta.env.VITE_BASE_URL+'/assets/images/svg/WebSites/api.svg' },
    // { text: '每日热榜', link: 'https://hot.vvhan.com', icon: import.meta.env.VITE_BASE_URL+'/assets/images/svg/WebSites/hot.svg' },
    // { text: '骤雨重山图床', link: 'https://wp-cdn.4ce.cn', icon: import.meta.env.VITE_BASE_URL+'/assets/images/svg/WebSites/img.svg' },
    // { text: 'HanAnalytics', link: 'https://analytics.vvhan.com', icon: import.meta.env.VITE_BASE_URL+'/assets/images/svg/WebSites/analytics.svg' },
  ],
  // Cover 使用绝对路径
  Cover: import.meta.env.VITE_BASE_URL+'/assets/images/banner/072c12ec85d2d3b5.webp',
  CreateTime: '2021-09-01',
  // DNS预解析地址
  DNSOptimization: [
    'https://i0.wp.com',
    'https://tools-api.vvhan.com',
    'https://pagead2.googlesyndication.com',
    'https://lf9-cdn-tos.bytecdntp.com',
    'https://registry.npmmirror.com',
    'https://npm.elemecdn.com'
  ],
  // 博客音乐组件解析接口
  vhMusicApi: 'https://meting-dd.2333332.xyz/api',
  // 评论组件 Twikoo
  Twikoo: { envId: 'https://twikoo.vvhan.com/.netlify/functions/twikoo' },
  // Han Analytics 统计（https://github.com/uxiaohan/HanAnalytics）
  HanAnalytics: { enable: true, server: 'https://analytics.vvhan.com', siteId: 'Hello-HanHexoBlog' },
  // Google 广告
  GoogleAds: {
    ad_Client: '',
    // 侧边栏广告(不填不开启)
    asideAD_Slot: '',
    // 文章页广告(不填不开启)
    articleAD_Slot: ''
  },
  // 阻尼滚动效果开关
  LenisScroll: false
}