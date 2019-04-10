<template>
  <div :class="$style.bg">
    <div :class="$style.contain">
      <top :top-details="topDetails"></top>
      <div :class="$style.chart">
        <div :class="$style.w1">
          <div :class="$style.w2">
            <div :class="$style.w3">
              <!-- <div :class="[$style.w4,$style.wavewrap]">
                <div :class="$style.wave"></div>
              </div>-->
            </div>
          </div>
        </div>
        <div :class="[$style.w4]" ref="wrap">
          <div :class="$style.wave" ref="wave"></div>
          <div :class="$style.wave1" ref="wave1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top from "@/components/top";
export default {
  props: {
    isShow: {
      required: true
    }
  },
  components: {
    top
  },
  data() {
    return {
      topDetails: {
        title: ["日活跃用户达", "1.06亿"],
        description: [
          ["全年净增长", "2000万"],
          ["Q4移动日活用户达", "9400万"],
          ["同比增长", "46%"]
        ],
        chartTitle: "月活跃用户增长趋势 （亿）"
      },
      timer: ""
    };
  },
  watch: {
    isShow(v) {
      if (v) {
        window.clearTimeout(this.timer);
        this.$refs.wave.style.animation = "waveup 5s linear 5s forwards";
        this.$refs.wave1.style.animation = "waveup 5s linear 5s forwards";
        this.timer = setTimeout(() => {
          this.$refs.wave.style.animation = "wave 5s infinite linear";
          this.$refs.wave1.style.animation = "wave 5s infinite linear";
        }, 10000);
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
.chart {
  position: relative;
  font-size: 18px;
  @mixin flexbox;
  flex-direction: column;
  padding-top: 30px;
  opacity: 0;
  animation: fadein 0.1s ease 5s forwards;
}
.w1 {
  @mixin flexbox;
  @mixin bg "@/assets/c1.png";
  width: 487px;
  height: 487px;
  border-radius: 50%;
  animation: ripple 2s linear 5s infinite;
}

.w2 {
  @mixin flexbox;
  @mixin bg "@/assets/c2.png";
  width: 403px;
  height: 403px;
  border-radius: 50%;
}
.w3 {
  @mixin flexbox;
  @mixin bg "@/assets/c3.png";
  width: 323px;
  height: 323px;
  border-radius: 50%;
}
.w4 {
  @mixin flexbox;
  position: absolute;
  width: 252px;
  height: 252px;
  border-radius: 50%;
  background-image: linear-gradient(0deg, #ff5f4b 0%, #ffdb68 100%);
  overflow: hidden;
}
.wave {
  width: 200%;
  height: 200%;
  position: absolute;
  top: -180%;
  border-radius: 35%;
  background: rgba(255, 255, 255, 0.2);
  animation: waveup 5s ease 5s forwards;
}
.wave1 {
  width: 200%;
  height: 200%;
  position: absolute;
  top: -180%;
  left: -60%;
  border-radius: 35%;
  background: rgba(255, 255, 255, 0.5);
  animation: waveup 5s linear 5s forwards;
}
.wavewrap {
  width: 252px;
  height: 252px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
