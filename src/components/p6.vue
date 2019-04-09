<template>
  <div :class="$style.bg">
    <div :class="$style.contain">
      <top :top-details="topDetails" :class="$style.top"></top>
      <div :class="$style.chart">
        <div :class="$style.chartline">
          <div :class="$style.fake"></div>
        </div>
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
import top from "@/components/top";
export default {
  components: {
    top
  },
  data() {
    return {
      topDetails: {
        title: ["广告客户数量突破", "53万"],
        description: [
          ["品牌客户收入同比增长", "XX%"],
          ["非阿里收入同比增长", "70%"],
          ["中小及自助广告收入同比增长", "XXX%"],
          ["客户数环比净增", "4.2万个"]
        ],
        chartTitle: "中小及自助广告客户数 （万）"
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
}
.top {
  z-index: 11;
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
  border-radius: 50%;
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
  position: absolute;
  @mixin bg "@/assets/p6line.png";
  left: -20px;
  width: 483px;
  height: 341px;
}
.fake {
  @mixin bg "@/assets/bg2.png";
  display: inline-block;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  animation: p6growup 1.5s linear 5s forwards;
  @media (min-width: 750px) {
    & {
      transform: scale(1.25) !important;
      left: -8vw;
      top: 10vw;
    }
  }
}
.chartdetail {
  z-index: 100;
  height: 373px;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
}
.circle {
  @mixin bg "@/assets/p6Q.png";
  width: 26px;
  height: 26px;
  padding: 2px;
  opacity: 0;
}
.c1 {
  margin-bottom: 95px;
  animation: dropdown 0.5s ease 7.5s forwards;
}
.c2 {
  margin-bottom: 165px;
  animation: dropdown 0.5s ease 7.75s forwards;
}
.c3 {
  margin-bottom: 225px;
  animation: dropdown 0.5s ease 8s forwards;
}
.c4 {
  @mixin bg "@/assets/p6Q1.png";
  padding: 4px;
  margin-bottom: 280px;
  animation: dropdown 0.5s ease 8.25s forwards;
}
.q {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > div:nth-child(3) {
    opacity: 0;
    animation: fadein 0.5s ease 7s forwards;
  }
}
.qnum {
  z-index: 10;
  margin-bottom: 14px;
  font-size: 28px;
  color: #fff;
  opacity: 0;
  animation: fadein 1s ease 9s forwards;
}
.dash {
  display: flex;
  align-items: center;
  position: absolute;
  left: -40px;
  opacity: 0;
  animation: leftin 0.5s ease 6.5s forwards;
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
