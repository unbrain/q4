<template>
  <div :class="$style.bg">
    <div :class="$style.contain">
      <div :class="$style.title">完善商业生态提升广告效果</div>
      <div :class="$style.linef"></div>
      <div :class="$style.decription">
        <div>
          <h2>领跑社交广告市场</h2>
          <p>
            移动广告收入占比
            <span c-fff>66%</span>
          </p>
          <p>
            信息流广告收入达
            <span c-fff>XXXX万美元</span>
          </p>
          <p>
            信息流广告库存同比增长
            <span c-fff>XX%</span>
          </p>
        </div>
        <div :class="$style.icon1"></div>
      </div>
      <div :class="$style.lines"></div>
      <div :class="$style.decription">
        <div>
          <h2>增强对广告客户吸引力</h2>
          <p>
            <span c-fff>BigDay</span>
            打造社交营销利器
          </p>
          <p>
            <span c-fff>新广告平台</span>
            降低投放门槛
          </p>
          <p>中小企业开投品牌广告</p>
        </div>
        <div :class="$style.icon2"></div>
      </div>
      <div :class="$style.lines"></div>
    </div>
    <div :class="$style.upwrap">
      <div :class="$style.up"></div>
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
  position: relative;
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
  position: absolute;
  right: 0;
  @mixin bg "@/assets/p8icon1.png";
  width: 169px;
  height: 191px;
}
.icon2 {
  @mixin bg "@/assets/p8icon2.png";
  width: 137px;
  height: 177px;
}
</style>
