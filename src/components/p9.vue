<template>
  <div :class="$style.bg">
    <div :class="$style.contain">
      <div :class="$style.hua1"></div>
      <div :class="$style.hua2"></div>
      <div :class="$style.hua3"></div>
      <div :class="$style.titlewrap">
        <div :class="$style.title">
          <span>深化台网联动创跨年峰值新高</span>
        </div>
      </div>
      <div :class="[$style.p9wrap,$style.w1]">
        <div :class="$style.icon1"></div>
        <div>
          <p>除夕</p>
          <p>
            日活跃用户达
            <span c-fff>1.34亿</span>
          </p>
          <p>
            同比增长
            <span c-fff>31%</span>
          </p>
        </div>
      </div>
      <div :class="[$style.p9wrap,$style.w2]">
        <div>
          <p>春晚</p>
          <p>
            互动量达
            <span c-fff>1.15亿</span>
          </p>
          <p>
            同比大幅增长
            <span c-fff>76%</span>
          </p>
        </div>
        <div :class="$style.icon2"></div>
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
  position: relative;
  margin: 0 54px;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.title {
  font-size: 38px;
  line-height: 48px;
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
.p9wrap {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  text-align: left;
  color: #ffe599;
  font-size: 24px;
  margin-top: 45px;
  margin-bottom: 100px;
  opacity: 0;
}
.w1 {
  animation: leftin 1s ease 2s forwards;
}
.w2 {
  animation: leftin 1s ease 3s forwards;
}
.dashline {
  margin-left: 30px;
  width: 450px;
  border-bottom: 1px dashed #ff7e6c;
}
.icon1 {
  @mixin bg "@/assets/p9icon1.png";
  width: 186px;
  height: 250px;
  opacity: 0;
  animation: slideup 1s ease 4s forwards;
}
.icon2 {
  @mixin bg "@/assets/p9icon2.png";
  width: 230px;
  height: 207px;
  opacity: 0;
  animation: slideup 1s ease 5s forwards;
}
.hua1 {
  @mixin bg "@/assets/p9hua1.png";
  position: absolute;
  left: 90px;
  top: 160px;
  width: 198px;
  height: 185px;
  opacity: 0;
  animation: fireworks 1.5s linear 2s infinite;
}
.hua2 {
  @mixin bg "@/assets/p9hua2.png";
  position: absolute;
  left: 40px;
  top: 490px;
  width: 205px;
  height: 210px;
  opacity: 0;
  animation: fireworks 1.5s linear 2.5s infinite;
}
.hua3 {
  @mixin bg "@/assets/p9hua3.png";
  position: absolute;
  top: 400px;
  left: 310px;
  width: 245px;
  height: 247px;
  opacity: 0;
  animation: fireworks 1.5s linear 3s infinite;
}
</style>
