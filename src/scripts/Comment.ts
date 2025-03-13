import SITE_INFO from "../config";
// 图片灯箱
import "../../public/assets/js/view-image.min.js";
declare const ViewImage: any;
import { LoadScript } from "../utils/index";
declare const twikoo: any;

// 处理评论区数据
const formateComment = () => {
  // 图片灯箱
  ViewImage && ViewImage.init(".vh-container>article.vh-article-main img.vh-article-img, .vh-talking>main>article>.main img, .vh-comment>.twikoo>.tk-comments img:not(.tk-avatar-img,.tk-owo-emotion,.OwO-item img)");
  // 处理 URL
  document.querySelectorAll('.vh-comment a[href="#"]').forEach(link => link.removeAttribute('href'));
}
// 初始化评论插件
export default async () => {
  // const commentDOM = '.vh-comment>section'
  // if (!document.querySelector(commentDOM) || !SITE_INFO.Twikoo.envId) return formateComment();
  // document.querySelector(commentDOM)!.innerHTML = '<section></section>'
  // await LoadScript("https://registry.npmmirror.com/twikoo/1.6.41/files/dist/twikoo.all.min.js");
  // twikoo.init({ envId: SITE_INFO.Twikoo.envId, el: commentDOM, onCommentLoaded: () => setTimeout(formateComment) })
}