<template>
  <div :class="$style.bg">
    <div :class="$style.contain">
      <top :top-details="topDetails"></top>
      <div :class="$style.chart">
        <div :class="$style.num">
          <div :class="$style.q4num">2.36</div>
          <div :class="$style.q3num">2.22</div>
          <div :class="$style.q2num">2.12</div>
          <div :class="$style.q1num">1.98</div>
        </div>
        <div :class="[$style.q4, $style.chartstyle]" c-fff>
          <div :class="$style.detail">
            <div>2015 Q4</div>
            <div :class="[$style.dashline]"></div>
          </div>
        </div>
        <div :class="[$style.q3, $style.chartstyle]">
          <div :class="$style.detail">
            <div>2015 Q3</div>
            <div :class="[$style.dashline]"></div>
          </div>
        </div>
        <div :class="[$style.q2, $style.chartstyle]">
          <div :class="$style.detail">
            <div>2015 Q2</div>
            <div :class="[$style.dashline]"></div>
          </div>
        </div>
        <div :class="[$style.q1, $style.chartstyle]">
          <div :class="$style.detail">
            <div :class="$style.q1title">2015 Q1</div>
            <div :class="[$style.dashline]"></div>
          </div>
        </div>
      </div>
      <div :class="$style.linet">
        <div :class="$style.q4line"></div>
        <div :class="$style.q3line"></div>
        <div :class="$style.q2line"></div>
        <div :class="$style.q1line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import top from "@/components/top";
export default {
  components: {
    top
  },
  data() {
    return {
      topDetails: {
        title: ["月活跃用户净增长", "6000万"],
        description: [
          ["年对年增长率达", "34%"],
          ["用户刷新微博的互动率提升", "24%"]
        ],
        chartTitle: "月活跃用户增长趋势 （亿）"
      }
    };
  }
};
</script>

<style lang="postcss" module>
@import "../base/gobal.css";
.bg {
  @mixin bg "@/assets/bg2.png";
  @mixin fullsize;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.contain {
  width: 532px;
  margin: 0 54px;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.linet {
  @mixin line;
  position: relative;
  opacity: 0;
  animation: fadein 0.5s ease 5s forwards;
}
.num {
  z-index: 10;
  position: absolute;
  left: 260px;
  bottom: 30px;
  font-size: 28px;
  color: #fff;
  & > div {
    opacity: 0;
  }
}
.q1num {
  animation: fadein 0.5s ease 6.5s forwards;
}
.q2num {
  padding-bottom: 48px;
  animation: fadein 0.5s ease 7s forwards;
}
.q3num {
  padding-bottom: 55px;
  animation: fadein 0.5s ease 7.5s forwards;
}
.q4num {
  padding-bottom: 65px;

  animation: fadein 0.5s ease 8s forwards;
}
.chart {
  position: relative;
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
  opacity: 0;
  animation: fadein 0.5s ease 8s forwards;
}
.q3 {
  margin-top: 90px;
  opacity: 0;
  animation: fadein 0.5s ease 7.5s forwards;
}
.q2 {
  margin-top: 70px;
  opacity: 0;
  animation: fadein 0.5s ease 7s forwards;
}
.q1 {
  margin-top: 55px;
  margin-bottom: 45px;
  opacity: 0;
  animation: fadein 0.5s ease 6.5s forwards;
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
.q4line {
  position: absolute;
  @mixin bg "@/assets/Q4.png";
  position: absolute;
  left: 5%;
  bottom: 0;
  width: 518px;
  height: 398px;
  opacity: 0;
  animation: p2growup 1.5s ease 7s forwards;
}
.q3line {
  position: absolute;
  @mixin bg "@/assets/Q3.png";
  position: absolute;
  left: 40px;
  bottom: 0;
  width: 492px;
  height: 248px;
  opacity: 0;
  animation: p2growup 1.5s ease 6.5s forwards;
}
.q2line {
  position: absolute;
  @mixin bg "@/assets/Q2.png";
  position: absolute;
  left: 45px;
  bottom: 0;
  width: 485px;
  height: 153px;
  opacity: 0;
  animation: p2growup 1.5s ease 6s forwards;
}
.q1line {
  position: absolute;
  @mixin bg "@/assets/Q1.png";
  position: absolute;
  left: 60px;
  bottom: 0;
  width: 448px;
  height: 75px;
  opacity: 0;
  animation: p2growup 1.5s ease 5.5s forwards;
}
</style>
