<template>
  <div id="app">
    <p1></p1>
  </div>
</template>

<script>
import p1 from "@/components/p9";
export default {
  name: "app",
  components: {
    p1
  }
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Microsoft Yahei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
