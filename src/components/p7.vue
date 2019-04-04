<template>
  <div :class="$style.bg">
    <div :class="$style.contain">
      <div :class="$style.title">多重政策刺激内容生产消费</div>
      <div :class="$style.linef"></div>
      <div :class="$style.decription">
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
      <div :class="$style.lines"></div>
      <div :class="$style.decription">
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
      <div :class="$style.lines"></div>
      <div :class="$style.decription">
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
      <div :class="$style.lines"></div>
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
.title {
  position: relative;
  padding-left: 28px;
  font-size: 40px;
  line-height: 48px;
  font-weight: bold;
  color: #ffec9e;
}
.title:before {
  position: absolute;
  content: "";
  display: block;
  top: 50%;
  left: 0;
  background-color: #ffec9e;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  transform: translateY(-50%);
}
.linef {
  @mixin line;
}
.lines {
  @mixin line;
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
  padding-left: 40px;
  text-align: left;
  color: #ffe599;
  font-size: 24px;
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
}
.icon2 {
  @mixin bg "@/assets/p7icon2.png";
  width: 131px;
  height: 105px;
}
.icon3 {
  @mixin bg "@/assets/p7icon3.png";
  width: 110px;
  height: 104px;
}
</style>
