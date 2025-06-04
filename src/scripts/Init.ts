import { inRouter, outRouter } from "@/utils/updateRouter";
// Banner 打字效果
import TypeWriteInit from "@/scripts/TypeWrite";
// 泡泡🫧效果
import PaoPaoInit from "@/scripts/PaoPao";
// 初始化文章代码块
import codeInit from "@/scripts/Code";
// 初始化视频播放器
import videoInit from "@/scripts/Video";
// 初始化音乐播放器
import musicInit from "@/scripts/Music";
// 初始化 LivePhoto
import livePhotoInit from '@/scripts/LivePhoto'
// 初始化BackTop组件
import BackTopInitFn from "@/scripts/BackTop";
// 搜索
import { searchFn, vhSearchInit } from "@/scripts/Search";
// 图片懒加载
import vhLzImgInit from "@/scripts/vhLazyImg";
// 图片灯箱
import ViewImage from "@/scripts/ViewImage";
// 底部网站运行时间
import initWebSiteTime from "@/scripts/Footer";
// 友情链接初始化
import initLinks from "@/scripts/Links";
// 朋友圈 RSS 初始化
import initFriends from "@/scripts/Friends";
// 动态说说初始化
import initTalking from "@/scripts/Talking";
// 文章评论初始化
import { checkComment, commentInit } from "@/scripts/Comment";
// 移动端侧边栏初始化
import initMobileSidebar from "@/scripts/MobileSidebar";
// Google 广告
import GoogleAdInit from "@/scripts/GoogleAd";
// Han Analytics 统计
import HanAnalyticsInit from "@/scripts/HanAnalytics";
//  谷歌 SEO 推送
import SeoPushInit from "@/scripts/SeoPush";
// SmoothScroll 滚动优化
import SmoothScroll from "@/scripts/Smoothscroll";

// ============================================================

// 页面初始化 Only
const videoList: any[] = [];
const MusicList: any[] = [];
let commentLIst: any = { walineInit: null };
const indexInit = async (only: boolean = true) => {
  // 初始化网站运行时间
  only && initWebSiteTime();
  // 初始化BackTop组件
  only && BackTopInitFn();
  // SmoothScroll 滚动优化
  only && SmoothScroll();
  // 图片灯箱
  only && ViewImage();
  // 初始化文章代码块
  codeInit();
  // 图片懒加载初始化
  vhLzImgInit();
  // 初始化 LivePhoto
  livePhotoInit();
  // 文章视频播放器初始化
  videoInit(videoList);
  // 文章音乐播放器初始化
  musicInit(MusicList);
  // 友情链接初始化
  initLinks();
  // 朋友圈 RSS 初始化
  initFriends();
  // 动态说说初始化
  initTalking();
  // Google 广告
  GoogleAdInit();
  // 谷歌 SEO 推送
  SeoPushInit();
  // 文章评论初始化
  checkComment() && commentInit(checkComment(), commentLIst)
  // Han Analytics 统计
  HanAnalyticsInit();
  // 打字效果
  only && Array.isArray(SITE_INFO.TypeWriteList) && SITE_INFO.TypeWriteList.length > 0 && TypeWriteInit();
  // 泡泡🫧效果
  PaoPaoInit();
  // 预加载搜索数据
  only && searchFn("");
  // 初始化搜索功能
  vhSearchInit();
  // 移动端侧边栏初始化
  initMobileSidebar();
};

export default () => {
  // 首次初始化
  indexInit();
  // 进入页面时触发
  inRouter(() => indexInit(false));
  // 离开当前页面时触发
  outRouter(() => {
    // 销毁评论
    commentLIst.walineInit && commentLIst.walineInit.destroy();
    commentLIst.walineInit = null;
    // 销毁播放器
    videoList.forEach((i: any) => i.destroy());
    videoList.length = 0;
    // 销毁音乐
    MusicList.forEach((i: any) => i.destroy());
    MusicList.length = 0;
  });
  console.log("%c🌻 程序：Astro | 主题：vhAstro-Theme | 作者：Han | Github：https://github.com/uxiaohan/vhAstro-Theme 🌻", "color:#fff; background: linear-gradient(270deg, #18d7d3, #68b7dd, #8695e6, #986fee); padding: 8px 15px; border-radius: 8px");
  console.log("%c\u521D\u59CB\u5316\u5B8C\u6BD5.", "color: #ffffff; background: #000; padding:5px");
}