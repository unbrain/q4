<template>
  <div :class="$style.bg">
    <div :class="$style.contain">
      <div :class="$style.title">
        日活跃用户达
        <span c-fff>1.06亿</span>
      </div>
      <div :class="$style.linef"></div>
      <div :class="$style.decription">
        <p>
          全年净增长
          <span c-fff>2000万</span>
        </p>
        <p>
          Q4移动日活用户达
          <span c-fff>9400万</span>
        </p>
        <p>
          同比增长
          <span c-fff>46%</span>
        </p>
      </div>
      <div :class="$style.lines"></div>
      <div :class="$style.charttitle">月活跃用户增长趋势 （亿）</div>
      <div :class="$style.chart">
        <div :class="$style.w1">
          <div :class="$style.w2">
            <div :class="$style.w3">
              <!-- <div :class="[$style.w4,$style.wavewrap]">
                <div :class="$style.wave"></div>
              </div>-->
              <div :class="[$style.w4]" ref="wavewrap">
                <canvas :class="$style.wave" ref="wave"></canvas>
              </div>
            </div>
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
export default {
  methods: {
    animate() {
      var waveX = 0;
      var waveY = 0;
      var waveX_min = -203;
      var waveY_max = canvasHeight * 0.9;
      var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      function loop() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        if (!needAnimate) return;
        if (waveY < waveY_max) waveY += 1.5;
        if (waveX < waveX_min) waveX = 0;
        else waveX -= 3;

        // ctx.globalCompositeOperation&nbsp;=&nbsp;'source-over';
        ctx.beginPath();
        ctx.arc(
          canvasWidth / 2,
          canvasHeight / 2,
          canvasHeight / 2,
          0,
          Math.PI * 2,
          true
        );
        ctx.closePath();
        ctx.fill();

        // ctx.globalCompositeOperation&nbsp;=&nbsp;'source-in';
        ctx.drawImage(waveImage, waveX, canvasHeight - waveY);

        requestAnimationFrame(loop);
      }
      loop();
    },
    initCanvas() {
      let width = this.$refs.wavewrap.clientWidth;
      let height = this.$refs.wavewrap.clientHeight;
      this.$refs.wave.width = width;
      this.$refs.wave.height = height;
      let ctx = this.$refs.wave.getContext("2d");
      let radians = (Math.PI / 180) * 180;
      let startTime = Date.now();
      let time = 2000;
      let clockwise = 0;
      let cp1x, cp1y, cp2x, cp2y;

      // 初始状态
      // ctx.bezierCurveTo(90, 28, 92, 179, 200, 100);
      // 末尾状态
      // ctx.bezierCurveTo(145, 100, 41, 100, 200, 100);
      requestAnimationFrame(function waveDraw() {
        let t = Math.min(1.0, (Date.now() - startTime) / time);

        if (clockwise) {
          cp1x = 90 + 55 * t;
          cp1y = -68 + 72 * t;
          cp2x = 92 - 51 * t;
          cp2y = 99 - 79 * t;
        } else {
          cp1x = 145 - 55 * t;
          cp1y = 20 - 72 * t;
          cp2x = 41 + 51 * t;
          cp2y = 20 + 79 * t;
        }

        ctx.clearRect(0, 0, 200, 200);
        ctx.beginPath();
        ctx.moveTo(0, height);
        // 绘制三次贝塞尔曲线
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, width, height);
        // 绘制圆弧
        ctx.arc(100, 100, 100, 0, radians, 0);

        ctx.fillStyle = "rgba(255, 135, 103, .8)";
        ctx.fill();
        ctx.save();
        if (t == 1) {
          startTime = Date.now();
          clockwise = !clockwise;
        }
        requestAnimationFrame(waveDraw);
      });
    }
  },
  mounted() {
    this.initCanvas();
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
  border-radius: 100%;
  transform: translateY(-50%);
}
.linef {
  @mixin line;
}
.lines {
  @mixin line;
}
.linet {
  @mixin line;
  position: relative;
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
  font-size: 18px;
  @mixin flexbox;
  flex-direction: column;
  padding-top: 30px;
}
.w1 {
  @mixin flexbox;
  @mixin bg "@/assets/c1.png";
  width: 487px;
  height: 487px;
  border-radius: 100%;
  animation: water 2s linear 1.5s infinite;
}
.w2 {
  @mixin flexbox;
  @mixin bg "@/assets/c2.png";
  width: 403px;
  height: 403px;
  border-radius: 100%;
  animation: water 2s linear 1s infinite;
}
.w3 {
  @mixin flexbox;
  @mixin bg "@/assets/c3.png";
  width: 323px;
  height: 323px;
  border-radius: 100%;
  animation: water 2s linear 0.5s infinite;
}
.w4 {
  @mixin flexbox;
  width: 252px;
  height: 252px;
  border-radius: 100%;
  border: 1px solid transparent;
  border-color: #ff8767;
  /* animation: water 2s linear 0s infinite; */
}
.wave {
  border-radius: 50%;
}
.wavewrap {
  width: 252px;
  height: 252px;
  border-radius: 50%;
  overflow: hidden;
}
/* .wave {
  position: relative;
  width: 252px;
  height: 252px;
  background-color: #ffd065;
  border-radius: 50%;
  transform: rotate(25deg);

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    top: 0;
    left: 50%;
    background-color: rgba(255, 181, 106, 0.8);
    border-radius: 45%;
    transform: translate(-80%, -80%) rotate(0);
    animation: rotate 6s linear infinite;
    z-index: 10;
  }

  &::after {
    border-radius: 47%;
    background-color: transparent;
    transform: translate(-80%, -80%) rotate(0);
    animation: rotate 10s linear -5s infinite;
    z-index: 20;
  }
} */

@keyframes rotate {
  50% {
    transform: translate(-83%, -77%) rotate(180deg);
  }
  100% {
    transform: translate(-80%, -80%) rotate(360deg);
  }
}
@keyframes water {
  0% {
    border-color: #ff8040;
  }
  33.3% {
    border-color: #ff7840;
  }
  66.6% {
    border-color: #ff6d40;
  }
  100% {
    border-color: transparent;
  }
}
</style>
