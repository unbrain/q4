<template>
  <div>
    <div :class="$style.titlewrap">
      <div :class="$style.title">
        <span v-text="topDetails.title[0]"></span>
        <span c-fff v-text="topDetails.title[1]" :class="$style.titlenum"></span>
      </div>
    </div>
    <div :class="$style.description">
      <p v-for="(item, index) in topDetails.description" :key="index">
        <span v-text="item[0]"></span>
        <span c-fff v-text="item[1]"></span>
      </p>
    </div>
    <div :class="$style.charttitle" v-text="topDetails.chartTitle"></div>
  </div>
</template>

<script>
export default {
  props: {
    topDetails: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="postcss" module>
@import "../base/gobal.css";
.description {
  @mixin line;
  padding: 32px 0 32px 40px;
  text-align: left;
  color: #ffe599;
  font-size: 24px;
  animation: leftin 1s ease 3s forwards;
  opacity: 0;
  & p > span:nth-child(1) {
    display: inline-block;
    margin-right: 12px;
  }
}
.charttitle {
  margin-top: 32px;
  padding-left: 40px;
  text-align: left;
  color: #ffe599;
  font-size: 20px;
  animation: leftin 1s ease 4s forwards;
  opacity: 0;
}
</style>
