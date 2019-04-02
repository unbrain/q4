<template>
  <div :class="$style.bg">
    <div :class="$style.contain">
      <div :class="$style.title">
        广告客户数量突破
        <span c-fff>53万</span>
      </div>
      <div :class="$style.linef"></div>
      <div :class="$style.decription">
        <p>
          品牌客户收入同比增长
          <span c-fff>XX%</span>
        </p>
        <p>
          非阿里收入同比增长
          <span c-fff>70%</span>
        </p>
        <p>
          中小及自助广告收入同比增长
          <span c-fff>XXX%</span>
        </p>
        <p>
          客户数环比净增
          <span c-fff>4.2万个</span>
        </p>
      </div>
      <div :class="$style.lines"></div>
      <div :class="$style.charttitle">中小及自助广告客户数 （万）</div>
      <div :class="$style.chart"></div>
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
  padding-left: 40px;
  text-align: left;
  color: #ffe599;
  font-size: 24px;
}
.charttitle {
  padding-left: 40px;
  text-align: left;
  color: #ffe599;
  font-size: 20px;
}
.chart {
  position: relative;
  margin: 0 40px;
  position: relative;
  font-size: 18px;
  flex-direction: column;
  margin-top: 30px;
  color: #ffe599;
  font-size: 20px;
}

.dashline {
  margin-left: 30px;
  width: 450px;
  border-bottom: 1px dashed #ff7e6c;
}
</style>
