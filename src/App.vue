<template>
  <div
    id="app"
    @mousewheel="wheel"
    @touchstart="start"
    @touchmove="move"
    @touchend="leave"
  >
    <div :style="change">
      <transition-group
        :name="listName"
        class="move"
        ref="tg"
        tag="div"
      >
        <p1
          class="pp"
          key="1"
          v-show="pshows[0]"
        ></p1>
        <p2
          class="pp"
          key="2"
          v-show="pshows[1]"
        ></p2>
        <p3
          class="pp"
          key="3"
          v-show="pshows[2]"
        ></p3>
      </transition-group>
    </div>
  </div>

</template>

<script>
import p1 from "@/components/p1";
import p2 from "@/components/p2";
import p3 from "@/components/p3";
import { setTimeout } from 'timers';
import { truncate } from 'fs';

export default {
  name: "app",
  components: {
    p1,
    p2,
    p3
  },
  data() {
    return {
      pshows: [true, false, false],
      distance: 0,
      count: 0,
      listName: '',
      scrollActive: true,
      touchStart: false,
      startY: 0,
      currentY: 0,
      endY: 0
    };
  },
  methods: {
    wheel(e) {
      if (this.scrollActive) {
        this.scrollActive = false;
        setTimeout(() => {
          this.scrollActive = true;
        }, 1000);
        let sd = e.wheelDelta || e.detail * -1;
        if (sd > 0) {
          this.listName = 'listup'
          if (this.count > 0) {
            this.pshows = (this.pshows.slice(1).concat(this.pshows.slice(0, 1)))
          }
          this.count = this.count <= 0 ? 0 : this.count - 1;
        } else {
          this.listName = 'listdown'
          if (this.count < this.pshows.length - 1) {
            this.pshows = (this.pshows.slice(-1).concat(this.pshows.slice(0, -1)))
          }
          this.count = this.count >= this.pshows.length - 1 ? this.pshows.length - 1 : this.count + 1;
        }
      }
    },
    changeDisplay(n) {
    },
    start(e) {
      this.touchStart = true;
      this.startY = e.touches[0].clientY;
    },
    move(e) {
      this.currentY = e.touches[0].clientY;
      this.distance = this.currentY - this.startY;
    },
    leave(e) {
      this.distance = 0;
      this.touchStart = false;
      this.endY = e.changedTouches[0].clientY;
      if (this.endY - this.startY < 0) {
        this.listName = 'listdown'
        if (this.count < this.pshows.length - 1) {
          this.pshows = (this.pshows.slice(-1).concat(this.pshows.slice(0, -1)))
        }
        this.count = this.count >= this.pshows.length - 1 ? this.pshows.length - 1 : this.count + 1;
      } else if (this.endY - this.startY > 0) {
        this.listName = 'listup'
        if (this.count > 0) {
          this.pshows = (this.pshows.slice(1).concat(this.pshows.slice(0, 1)))
        }
        this.count = this.count <= 0 ? 0 : this.count - 1;
      }
    }
  },
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
#app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: "Microsoft Yahei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: url('./assets/bg.png');
  background-size: cover; 
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
