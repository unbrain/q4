// 基准大小
const baseSize = 27.3;
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 640 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 640;

  // 设置页面根节点字体大小 1.6 <-- 1024/640
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 1) + 'px';
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem();
};
