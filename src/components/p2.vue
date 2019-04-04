<template>
  <div :class="$style.bg">
    <div :class="$style.contain">
      <top :top-details="topDetails"></top>
      <div :class="$style.chart">
        <div
          :class="[$style.q4, $style.chartstyle]"
          c-fff
        >
          <div :class="$style.detail">
            <div>2015 Q4</div>
            <div :class="[$style.dashline]"></div>
          </div>
        </div>
        <div :class="[$style.q3, $style.chartstyle]">
          <div :class="$style.detail">
            <div>2015 Q3</div>
            <div :class="[$style.dashline,$style.q3line]"></div>
          </div>
        </div>
        <div :class="[$style.q2, $style.chartstyle]">
          <div :class="$style.detail">
            <div>2015 Q2</div>
            <div :class="[$style.dashline,$style.q2line]"></div>
          </div>
        </div>
        <div :class="[$style.q1, $style.chartstyle]">
          <div :class="$style.detail">
            <div>2015 Q1</div>
            <div :class="[$style.dashline,$style.q1line]"></div>
          </div>
        </div>
      </div>
      <div :class="[$style.linet,$style.q4line]"></div>
    </div>
  </div>
</template>

<script>
import top from '@/components/top';
export default {
  components: {
    top
  },
  data(){
    return {
      topDetails: {
        title: ['月活跃用户净增长', '6000万'],
        description: [['年对年增长率达', '34%'], ['用户刷新微博的互动率提升', '24%']],
        chartTitle: '月活跃用户增长趋势 （亿）',
      }
    }
  }
};
</script>

<style lang="postcss" module>
@import "../base/gobal.css";
.bg {
  @mixin bg "@/assets/bg2.png";
  @mixin fullsize;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.contain {
  margin: 0 54px;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.linet {
  @mixin line;
  position: relative;
}
.chart {
  font-size: 18px;
}
.chartstyle {
  position: relative;
  padding-left: 20px;
  text-align: left;
  color: #ffec9e;
}
.q4 {
  margin-top: 120px;
}
.q3 {
  margin-top: 90px;
}
.q2 {
  margin-top: 70px;
}
.q1 {
  margin-top: 55px;
  margin-bottom: 45px;
}

.dashline {
  display: inline-block;
  margin-left: 30px;
  border-bottom: 1px dashed #ff867d;
  width: 341px;
}
.detail {
  @mixin flexbox;
  justify-content: flex-start;
}
.q4line::after {
  content: "";
  display: block;
  @mixin bg "@/assets/Q4.png";
  position: absolute;
  left: 5%;
  bottom: 0;
  width: 518px;
  height: 398px;
}
.q3line::after {
  content: "";
  display: block;
  @mixin bg "@/assets/Q3.png";
  position: absolute;
  left: 40px;
  top: -20px;
  width: 492px;
  height: 248px;
}
.q2line::after {
  content: "";
  display: block;
  @mixin bg "@/assets/Q2.png";
  position: absolute;
  left: 45px;
  top: -25px;
  width: 485px;
  height: 153px;
}
.q1line::after {
  content: "";
  display: block;
  @mixin bg "@/assets/Q1.png";
  position: absolute;
  left: 60px;
  top: -20px;
  width: 448px;
  height: 75px;
}
</style>
