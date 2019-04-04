<template>
  <div id="app" @mousewheel="wheel" :style="change">
    <p1></p1>
    <p2></p2>
  </div>
</template>

<script>
import p1 from "@/components/p1";
import p2 from "@/components/p2";
import p3 from "@/components/p3";

export default {
  name: "app",
  components: {
    p1,
    p2
  },
  data() {
    return {
      pshows: [true, false],
      distance: 0
    };
  },
  methods: {
    wheel(e) {
      console.log(1);
      let sd = e.wheelDelta || e.detail * -1;
      if (sd > 0) {
        this.pshows = [true, false];
        this.distance = 0;
      } else {
        this.pshows = [false, true];
        this.distance = -100;
      }
    }
  },
  computed: {
    change() {
      return {
        transform: `translateY(${this.distance}vh)`
      };
    }
  }
};
</script>

<style>
#app {
  height: 100vh;
  overflow: hidden;
  font-family: "Microsoft Yahei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
