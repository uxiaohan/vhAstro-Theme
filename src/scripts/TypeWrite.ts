import SITE_INFO from '@/config';
export default () => {
  const writeDom = document.querySelector('.header-main>.desc');
  if (!writeDom) return;
  const TypeWriteList = SITE_INFO.TypeWriteList;
  // 如果 TypeWriteList 不是数组或没有内容则不执行动画
  if (!Array.isArray(TypeWriteList) || TypeWriteList.length === 0) return;
  let TypeWriteListIndex = 0;
  let index = 0;
  let isDeleting = false;
  // 主动画函数
  const run = () => {
    writeDom.innerHTML = TypeWriteList[TypeWriteListIndex].substring(0, index);
    // 正常打字阶段
    if (!isDeleting) {
      if (index < TypeWriteList[TypeWriteListIndex].length) {
        index++;
        setTimeout(run, 188); // 打字速度
      } else {
        // 完整展示后开始删除
        setTimeout(() => {
          isDeleting = true;
          run();
        }, 2888);
      }
    } else {
      if (index > 0) {
        index--;
        setTimeout(run, 88); // 删除速度（比打字快）
      } else {
        isDeleting = false;
        TypeWriteListIndex++;
        TypeWriteListIndex = TypeWriteListIndex % TypeWriteList.length;
        setTimeout(run, 500);
      }
    }
  }
  // 启动动画
  run();
}