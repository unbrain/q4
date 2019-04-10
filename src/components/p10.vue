<template>
  <div :class="$style.bg">
    <div :class="$style.left"></div>
    <div :class="$style.right"></div>
    <div :class="$style.wrap">
      <div :class="$style.titleimg"></div>
      <div :class="$style.buttonwrap">
        <div :class="$style.sharewrap">
          <div :class="[$style.button,$style.buttonup]">
            <div :class="$style.wechatlogo"></div>分享到微信
          </div>
          <div :class="[$style.button,$style.buttonup]">
            <div :class="$style.weibologo"></div>分享到微博
          </div>
        </div>
        <div :class="[$style.button, $style.buttondown]">查看报告全文</div>
      </div>
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
.buttonwrap {
  @mixin flexbox;
  flex-direction: column;
  font-size: 24px;
  line-height: 36px;
  color: #ff4a43;
  width: 460px;
}
.sharewrap {
  @mixin flexbox;
  width: 100%;
  margin: 70px 0 25px 0;
  & > div:nth-child(1) {
    margin-right: 20px;
  }
}
.button {
  @mixin flexbox;
  width: 100%;
  background-color: #ffec9e;
  border-radius: 6px;
}
.buttondown {
  padding: 15px 0px;
  opacity: 0;
  animation: slideup 0.5s ease 2s forwards;
}
.buttonup {
  padding: 15px;
  display: flex;
  opacity: 0;
  animation: slideup 0.5s ease 1.5s forwards;
}
.wechatlogo {
  @mixin bg "@/assets/wechatlogo.png";
  margin-right: 12px;
  width: 43px;
  height: 35px;
}
.weibologo {
  @mixin bg "@/assets/weibologo.png";
  margin-right: 12px;
  width: 42px;
  height: 33px;
}
@media (min-width: 750px) {
  .bg > div {
    transform: scale(0.8);
    transform-origin: center !important;
  }
}
</style>
