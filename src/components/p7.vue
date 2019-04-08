<template>
  <div :class="$style.bg">
    <div :class="$style.contain">
      <div :class="$style.titlewrap">
        <div :class="$style.title">
          <span>多重政策刺激内容生产消费</span>
        </div>
      </div>
      <div :class="[$style.decription,$style.d1]">
        <div>
          <h2>扶持垂直领域</h2>
          <p>
            开放运营的
            <span c-fff>XX</span>个垂直领域
          </p>
          <p>
            月阅读量增长
            <span c-fff>XX%</span>
          </p>
        </div>
        <div :class="$style.icon1"></div>
      </div>
      <div :class="[$style.decription,$style.d2]">
        <div>
          <h2>加速多媒体化</h2>
          <p>
            Q4视频日均播放量达
            <span c-fff>2.9亿</span>
          </p>
          <p>
            同比增长
            <span c-fff>11倍</span>
          </p>
        </div>
        <div :class="$style.icon2"></div>
      </div>
      <div :class="[$style.decription,$style.d3]">
        <div>
          <h2>推出头条文章</h2>
          <p>
            使用人群达
            <span c-fff>XX万</span>
          </p>
          <p>
            文章平均阅读量提升
            <span c-fff>X倍</span>
          </p>
          <p>
            自媒体分成达
            <span c-fff>XX亿</span>
          </p>
        </div>
        <div :class="$style.icon3"></div>
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
  @mixin bg "@/assets/bg2.png";
  @mixin fullsize;
}
.contain {
  margin: 0 54px;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.baseline {
  position: absolute;
  bottom: 40px;
  @mixin line;
  margin: 0;
}
.decription {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 20px 40px;
  text-align: left;
  color: #ffe599;
  font-size: 24px;
  @mixin line;
  opacity: 0;
}

.dashline {
  margin-left: 30px;
  width: 450px;
  border-bottom: 1px dashed #ff7e6c;
}
.icon1 {
  @mixin bg "@/assets/p7icon1.png";
  width: 175px;
  height: 151px;
  opacity: 0;
  animation: rotatebig 1s linear 2.5s forwards;
}
.icon2 {
  @mixin bg "@/assets/p7icon2.png";
  width: 131px;
  height: 105px;
  opacity: 0;
  animation: rotatebig 1s linear 3.5s forwards;
}
.icon3 {
  @mixin bg "@/assets/p7icon3.png";
  width: 110px;
  height: 104px;
  opacity: 0;
  animation: rotatebig 2s linear 4.5s forwards;
}
.d1 {
  animation: leftin 0.5s linear 2s forwards;
}
.d2 {
  animation: leftin 0.5s linear 3s forwards;
}
.d3 {
  animation: leftin 0.5s linear 4s forwards;
}
</style>
