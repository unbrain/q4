<template>
  <div :class="$style.bg">
    <div :class="$style.contain">
      <top :top-details="topDetails"></top>
      <div :class="$style.chart">
        <div :class="$style.chartdetail">
          <div :class="[$style.q,$style.q1]"></div>
          <div :class="[$style.q,$style.q2]"></div>
          <div :class="[$style.q,$style.q3]"></div>
          <div :class="[$style.q,$style.q4]"></div>
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
        title: ["全年盈利", "6880万美元"],
        description: [
          ["Q4盈利", "3290万美元"],
          ["同比大涨", "257%"],
          ["利润率达", "22%"]
        ],
        chartTitle: "利润增长趋势（万美元）"
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
  opacity: 0;
  animation: fadein 0.1s ease 5s forwards;
}
.chartdetail {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-end;
  width: 374px;
  height: 374px;
}
.q {
  @mixin bg "@/assets/p5Q.png";
  position: absolute;
  opacity: 0;
}
.q1 {
  width: 374px;
  height: 374px;
  animation: p5growup 2s ease 5s forwards;
}
.q2 {
  width: 236px;
  height: 236px;
  animation: p5growup 1.5s ease 5s forwards;
}
.q3 {
  width: 139px;
  height: 139px;
  animation: p5growup 1s ease 5s forwards;
}
.q4 {
  width: 68px;
  height: 68px;
  animation: p5growup 0.5s ease 5s forwards;
}
.chartq {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #ffec9e;
  opacity: 0;
  animation: p5growup 1.5s ease 5s forwards;
}
.quarter1 {
  opacity: 0;
  bottom: 30px;
  animation: fadein 0.5s ease 5s forwards;
}
.quarter2 {
  bottom: 90px;
  animation: fadein 0.5s ease 5.5s forwards;
}
.quarter3 {
  bottom: 185px;
  animation: fadein 0.5s ease 6s forwards;
}
.quarter4 {
  bottom: 305px;
  animation: fadein 0.5s ease 6.5s forwards;
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
