<template>
  <div id="app" @mousewheel="wheel" @touchstart="start" @touchmove="move" @touchend="leave">
    <div :style="change">
      <transition-group :name="listName" class="move" ref="tg" tag="div">
        <p1 class="pp" key="1" v-show="pshows[0]"></p1>
        <p2 class="pp" key="2" v-show="pshows[1]"></p2>
        <p3 class="pp" key="3" v-show="pshows[2]" :is-show="pshows[2]"></p3>
        <p4 class="pp" key="4" v-show="pshows[3]"></p4>
        <p5 class="pp" key="5" v-show="pshows[4]"></p5>
        <p6 class="pp" key="6" v-show="pshows[5]"></p6>
        <p7 class="pp" key="7" v-show="pshows[6]"></p7>
        <p8 class="pp" key="8" v-show="pshows[7]"></p8>
        <p9 class="pp" key="9" v-show="pshows[8]"></p9>
        <p10 class="pp" key="10" v-show="pshows[9]"></p10>
      </transition-group>
    </div>
    <div class="upwrap">
      <div class="up" @click="listDown"></div>
    </div>
  </div>
</template>

<script>
import p1 from "@/components/p1";
import p2 from "@/components/p2";
import p3 from "@/components/p3";
import p4 from "@/components/p4";
import p5 from "@/components/p5";
import p6 from "@/components/p6";
import p7 from "@/components/p7";
import p8 from "@/components/p8";
import p9 from "@/components/p9";
import p10 from "@/components/p10";

export default {
  name: "app",
  components: {
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10
  },
  data() {
    return {
      pshows: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      distance: 0,
      count: 0,
      listName: "",
      scrollActive: true,
      touchStart: false,
      startY: 0,
      currentY: 0,
      endY: 0,
      timer: ""
    };
  },
  methods: {
    //鼠标滚轮滑动逻辑
    wheel(e) {
      const changeScroll = () => {
        const sd = e.wheelDelta || -e.detail;
        if (sd > 0) {
          this.listUp();
        } else {
          this.listDown();
        }
      };
      this.immediate(changeScroll, 100);
    },
    //防抖动
    immediate(func, wait) {
      if (this.scrollActive) {
        func();
      }
      this.scrollActive = false;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.scrollActive = true;
      }, wait);
    },
    //touchstart 触发事件
    start(e) {
      this.touchStart = true;
      this.startY = e.touches[0].clientY;
    },
    //touchmove 触发事件
    move(e) {
      this.currentY = e.touches[0].clientY;
      this.distance = this.currentY - this.startY;
    },
    //touchend 触发事件
    leave(e) {
      this.distance = 0;
      this.touchStart = false;
      this.endY = e.changedTouches[0].clientY;
      if (this.endY - this.startY < 0) {
        this.listDown();
      } else if (this.endY - this.startY > 0) {
        this.listUp();
      }
    },
    // 向上逻辑
    listUp() {
      this.listName = "listup";
      if (this.count > 0) {
        this.pshows = this.pshows.slice(1).concat(this.pshows.slice(0, 1));
      }
      this.count = this.count <= 0 ? 0 : this.count - 1;
    },
    //向下逻辑
    listDown() {
      this.listName = "listdown";
      if (this.count < this.pshows.length - 1) {
        this.pshows = this.pshows.slice(-1).concat(this.pshows.slice(0, -1));
      }
      this.count =
        this.count === this.pshows.length - 1
          ? this.pshows.length - 1
          : this.count + 1;
    }
  },
  mounted() {},
  computed: {
    change() {
      return {
        transform: `translateY(${this.distance}px)`
      };
    }
  }
};
</script>

<style>
@import "./base/gobal.css";
#app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: "Microsoft Yahei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: url("./assets/bg.png");
  background-size: cover;
}
.up {
  background-image: url("./assets/up.png");
  background-size: cover;
  position: absolute;
  bottom: 40px;
  width: 14px;
  height: 15px;
  animation: upaction 1s ease infinite;
}

.upwrap {
  @mixin flexbox;
}
.pp {
  height: 100vh;
  width: 100vw;
  transition: 1s;
}
.move {
  transition: 1s;
}
@keyframes wave {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}
.listdown-enter {
  transform: translateY(-100%);
}
.listdown-leave-to {
  transform: translateY(-100%);
}

.listdown-leave-active {
  position: absolute;
}
.listup-enter {
  transform: translateY(95%);
}
.listup-leave-to {
  transform: translateY(0%);
}

.listup-leave-active {
  position: absolute;
}

.listup-enter-active {
  position: absolute;
}
</style>
