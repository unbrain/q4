<template>
  <div :class="$style.bg">
    <div :class="$style.contain">
      <div :class="$style.title">
        全年盈利
        <span c-fff>6880万美元</span>
      </div>
      <div :class="$style.linef"></div>
      <div :class="$style.decription">
        <p>
          Q4盈利
          <span c-fff>3290万美元</span>
        </p>
        <p>
          同比大涨
          <span c-fff>257%</span>
        </p>
        <p>
          利润率达
          <span c-fff>22%</span>
        </p>
      </div>
      <div :class="$style.lines"></div>
      <div :class="$style.charttitle">利润增长趋势（万美元）</div>
      <div :class="$style.chart">
        <div :class="$style.chartdeatil">
          <div :class="[$style.q,$style.q1]">
            <div :class="[$style.q,$style.q2]">
              <div :class="[$style.q,$style.q3]">
                <div :class="[$style.q,$style.q4]"></div>
              </div>
            </div>
          </div>
        </div>
        <div :class="[$style.chartq,$style.quarter1]">
          <div :class="$style.quarter">2015Q1</div>
          <div :class="$style.dashline">
            <div :class="$style.num">290</div>
          </div>
        </div>
        <div :class="[$style.chartq,$style.quarter2]">
          <div :class="$style.quarter">2015Q2</div>
          <div :class="$style.dashline">
            <div :class="$style.num">1090</div>
          </div>
        </div>
        <div :class="[$style.chartq,$style.quarter3]">
          <div :class="$style.quarter">2015Q3</div>
          <div :class="$style.dashline">
            <div :class="$style.num">2210</div>
          </div>
        </div>
        <div :class="[$style.chartq,$style.quarter4]" c-fff>
          <div :class="$style.quarter">2015Q4</div>
          <div :class="$style.dashline">
            <div :class="$style.num">3290</div>
          </div>
        </div>
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
  padding: 0 40px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  font-size: 18px;
  flex-direction: column;
  padding-top: 30px;
}
.chartdetail {
  display: flex;
}
.q {
  @mixin bg "@/assets/p5Q.png";
  @mixin flexbox;
  align-items: flex-end;
}
.q1 {
  width: 374px;
  height: 374px;
}
.q2 {
  width: 236px;
  height: 236px;
}
.q3 {
  width: 139px;
  height: 139px;
}
.q4 {
  width: 68px;
  height: 68px;
}
.chartq {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #ffec9e;
}
.quarter1 {
  bottom: 30px;
}
.quarter2 {
  bottom: 90px;
}
.quarter3 {
  bottom: 185px;
}
.quarter4 {
  bottom: 305px;
}
.dashline {
  position: relative;
  margin-left: 20px;
  border-bottom: 1px dashed #ff7e6c;
  width: 374px;
}
.num {
  position: absolute;
  width: 374px;
  font-size: 28px;
  text-align: center;
  transform: translateY(-50%);
}
</style>
