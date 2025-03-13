import { getCollection } from "astro:content";
// 获取封面图
import getCover from "../utils/getCover";
const posts = (await getCollection("blog")).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
// 获取文章分类
const getCategories = () => {
  const categoriesList = posts.reduce((acc: any, i: any) => {
    acc[i.data.categories] = (acc[i.data.categories] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(categoriesList).map(([title, count]) => ({ title, count }));
}

// 获取文章标签
const getTags = () => {
  const frequencyMap = new Map();
  // 统计每个元素出现的频率
  posts.forEach(i => {
    i.data.tags.forEach(tag => frequencyMap.set(tag, (frequencyMap.get(tag) || 0) + 1));
  });
  const sortedArray = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);
  return sortedArray.slice(0, 16).map(item => item[0]);
}

// 获取推荐文章 (给文章添加 recommend: true 字段)
const getRecommendArticles = () => {
  console.log(posts)
  const recommendList = posts.filter(i => i.data.recommend);
  return (recommendList.length ? recommendList : posts.slice(0, 6)).map(async i => ({ title: i.data.title, date: i.data.date, id: i.data.id, cover: await getCover(i.data.cover) }))
};

export { getCategories, getTags, getRecommendArticles };