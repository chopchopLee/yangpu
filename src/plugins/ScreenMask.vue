<template>
  <div>
    <div class="mask" @click="$emit('click')"></div>
    <div class="mask background" v-if="cover"></div>
  </div>
</template>

<script>
export default {
  created() {
    document.documentElement.style.overflow = 'hidden';
  },
  destroyed() {
    document.documentElement.style.overflow = 'visible';
  },
  props: {
    cover: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.mask {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  transition: all 0.2s ease-in;
  z-index: 1001
}
.background {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #FFFFFF;
  transition: all 0.2s ease-in;
  z-index: 1000
}
</style>
