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
      <div :class="$style.chart">
        <div :class="$style.chartline"></div>
        <div :class="$style.chartdetail">
          <div :class="$style.q">
            <div :class="$style.qnum">38.8</div>
            <div :class="[$style.circle,$style.c1]"></div>
            <div>2015Q1</div>
          </div>
          <div :class="$style.q">
            <div :class="$style.qnum">44.3</div>
            <div :class="[$style.circle,$style.c2]"></div>
            <div>2015Q2</div>
          </div>
          <div :class="$style.q">
            <div :class="$style.qnum">49.4</div>
            <div :class="[$style.circle,$style.c3]"></div>
            <div>2015Q3</div>
          </div>
          <div :class="$style.q">
            <div :class="$style.qnum">53.6</div>
            <div :class="[$style.circle,$style.c4]"></div>
            <div>2015Q4</div>
          </div>
        </div>
        <div :class="[$style.dash,$style.d1]">
          <div :class="$style.num">30</div>
          <div :class="$style.dashline"></div>
        </div>
        <div :class="[$style.dash,$style.d2]">
          <div :class="$style.num">40</div>
          <div :class="$style.dashline"></div>
        </div>
        <div :class="[$style.dash,$style.d3]">
          <div :class="$style.num">50</div>
          <div :class="$style.dashline"></div>
        </div>
        <div :class="[$style.dash,$style.d4]">
          <div :class="$style.num">60</div>
          <div :class="$style.dashline"></div>
        </div>
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
.chartline {
  z-index: 10;
  position: absolute;
  @mixin bg "@/assets/p6line.png";
  left: -20px;
  width: 483px;
  height: 341px;
}
.chartdetail {
  height: 373px;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
}
.circle {
  z-index: 100;
  @mixin bg "@/assets/p6Q.png";
  width: 26px;
  height: 26px;
  padding: 2px;
}
.c1 {
  margin-bottom: 95px;
}
.c2 {
  margin-bottom: 165px;
}
.c3 {
  margin-bottom: 225px;
}
.c4 {
  @mixin bg "@/assets/p6Q1.png";
  margin-bottom: 280px;
}
.q {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.qnum {
  z-index: 10;
  margin-bottom: 14px;
  font-size: 28px;
  color: #fff;
}
.dash {
  display: flex;
  align-items: center;
  position: absolute;
  left: -40px;
}
.d1 {
  bottom: 40px;
}
.d2 {
  bottom: 145px;
}
.d3 {
  bottom: 250px;
}
.d4 {
  bottom: 355px;
}
.dashline {
  margin-left: 30px;
  width: 450px;
  border-bottom: 1px dashed #ff7e6c;
}
</style>
