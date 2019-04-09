<template>
  <div :class="$style.bg">
    <div :class="$style.left"></div>
    <div :class="$style.right"></div>
    <div :class="$style.wrap">
      <div :class="$style.titleimg"></div>
      <h1 :class="$style.keyword">微博2015Q4及全年财报</h1>
      <div :class="$style.weibo"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" module>
@import "../base/gobal.css";
.bg {
  @mixin bg "@/assets/bg.png";
  z-index: -1;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.left {
  @mixin bg "@/assets/p1left.png";
  z-index: -1;
  position: absolute;
  width: 498px;
  height: 858px;
  left: -30px;
  top: 305px;
  animation: bamboo 10s ease 0s forwards infinite;
  transform-origin: bottom right;
}
.right {
  @mixin bg "@/assets/p1right.png";
  z-index: -1;
  position: absolute;
  width: 640px;
  height: 953px;
  right: -30px;
  top: 75px;
  animation: bamboo 10s ease 0s reverse infinite;
  transform-origin: bottom left;
}
.wrap {
  @mixin flexbox;
  flex-direction: column;
  height: 100vh;
}
.titleimg {
  @mixin bg "@/assets/title.png";
  opacity: 0;
  width: 285px;
  height: 616px;
  animation: zoomInOut ease 1s forwards;
}
.keyword {
  margin-top: 45px;
  font-size: 32px;
  color: #fff;
  animation: slideup 0.5s ease 1s forwards;
  opacity: 0;
}
.weibo {
  @mixin bg "@/assets/weibo.png";
  margin-top: 60px;
  width: 162px;
  height: 55px;
  animation: slideup 1s ease 1.5s forwards;
  background-size: 100%;
  opacity: 0;
}
@media (min-width: 750px) {
  .bg > div {
    transform: scale(0.8);
    transform-origin: center !important;
  }
}
</style>
