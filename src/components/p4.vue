<template>
  <div :class="$style.bg">
    <div :class="$style.contain">
      <div :class="$style.title">
        全年总营收
        <span c-fff>4.816亿美元</span>
      </div>
      <div :class="$style.linef"></div>
      <div :class="$style.decription">
        <p>
          年对年增长
          <span c-fff>44%</span>
        </p>
        <p>
          广告收入
          <span c-fff>4.063亿美元</span>
        </p>
        <p>
          年对年增长
          <span c-fff>53%</span>
        </p>
      </div>
      <div :class="$style.lines"></div>
      <div :class="$style.charttitle">总营收增长趋势 （万美元）</div>
      <div :class="$style.chart">
        <div :class="$style.chartdetail">
          <div>
            <div :class="$style.num">9630</div>
            <div :class="[$style.q1, $style.q]"></div>
            <div :class="$style.quarter">2015Q1</div>
          </div>
          <div>
            <div :class="$style.num">10780</div>
            <div :class="[$style.q2, $style.q]"></div>
            <div :class="$style.quarter">2015Q2</div>
          </div>
          <div>
            <div :class="$style.num">12470</div>
            <div :class="[$style.q3, $style.q]"></div>
            <div :class="$style.quarter">2015Q3</div>
          </div>
          <div>
            <div :class="$style.num" c-fff>15280</div>
            <div :class="[$style.q4, $style.q]"></div>
            <div :class="$style.quarter">2015Q4</div>
          </div>
        </div>
        <div :class="$style.baseline"></div>
        <div :class="[$style.dashline,$style.dashline1]"></div>
        <div :class="[$style.dashline,$style.dashline2]"></div>
        <div :class="[$style.dashline,$style.dashline3]"></div>
        <div :class="[$style.dashline,$style.dashline4]"></div>
      </div>
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
  font-size: 18px;
  @mixin flexbox;
  flex-direction: column;
  padding-top: 30px;
  & > div {
    width: 463px;
  }
}
.chartdetail {
  z-index: 1;
  @mixin flexbox;
  justify-content: space-around;
  align-items: flex-end;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.q {
  position: relative;
  width: 40px;
  height: 128px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-image: linear-gradient(
    90deg,
    #ffea9b 0%,
    #ffc772 20%,
    #ff8e2d 100%
  );
}
.num {
  margin-bottom: 28px;
  font-size: 28px;
  color: #ffec9e;
}
.quarter {
  margin-top: 20px;
  font-size: 20px;
  color: #ffec9e;
}
.q2 {
  height: 175px;
}
.q3 {
  height: 241px;
}
.q4 {
  height: 341px;
}

.dashline {
  position: absolute;
  border-bottom: 1px dashed #ff7e6c;
  bottom: 120px;
}
.dashline2 {
  bottom: 200px;
}
.dashline3 {
  bottom: 280px;
}
.dashline4 {
  bottom: 360px;
}
</style>
