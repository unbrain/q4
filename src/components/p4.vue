<template>
  <div :class="$style.bg">
    <div :class="$style.contain">
      <top :top-details="topDetails"></top>
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
        title: ["全年总营收", "4.816亿美元"],
        description: [
          ["年对年增长", "44%"],
          ["广告收入", "4.063亿美元"],
          ["年对年增长", "53%"]
        ],
        chartTitle: "总营收增长趋势 （万美元）"
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
  opacity: 0;
  animation: fadein 0.1s ease 5s forwards;
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
  @for $i from 1 to 4 {
    & > div:nth-child($i) > .num {
      opacity: 0;
      animation: dropdown 1s ease-in-out 6s forwards;
    }
  }
}
.q {
  position: relative;
  width: 40px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-image: linear-gradient(
    90deg,
    #ffea9b 0%,
    #ffc772 20%,
    #ff8e2d 100%
  );
  opacity: 0;
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
.q1 {
  height: 128px;
  animation: p4growup 1s ease 5s forwards;
}
.q2 {
  height: 175px;
  animation: p4growup 1s ease 5.25s forwards;
}
.q3 {
  height: 241px;
  animation: p4growup 1s ease 5.5s forwards;
}
.q4 {
  height: 341px;
  animation: p4growup 1s ease 5.75s forwards;
}
.baseline {
  position: absolute;
  bottom: 40px;
  @mixin line;
  margin: 0;
  opacity: 0;
  animation: fadein 0.5s ease 5s forwards;
}
.dashline {
  position: absolute;
  border-bottom: 1px dashed #ff7e6c;
  bottom: 120px;
  opacity: 0;
}
.dashline2 {
  bottom: 200px;
  opacity: 0;
}
.dashline3 {
  bottom: 280px;
  opacity: 0;
}
.dashline4 {
  bottom: 360px;
  opacity: 0;
}
</style>
