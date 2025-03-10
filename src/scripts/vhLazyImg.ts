// 图片懒加载
import LazyLoad from "vanilla-lazyload";

// 初始化图片懒加载
export default () => {
  document.querySelectorAll("main>.vh-container img:not(.view-image-container)").forEach((i: any) => {
    // 是否包含data-vh-lz-src
    if (!i.hasAttribute("data-vh-lz-src")) {
      i.setAttribute("data-vh-lz-src", i.getAttribute("src"));
      i.setAttribute("src", import.meta.env.VITE_BASE_URL+'/assets/images/lazy-loading.webp');
    }
  });
  new LazyLoad({
    elements_selector: "img:not(.view-image-container)",
    threshold: 0,
    data_src: "vh-lz-src"
  });
}