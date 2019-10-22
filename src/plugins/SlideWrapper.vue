<template>
  <transition name="slide">
    <slot></slot>
  </transition>
</template>

<script>
  export default {};
</script>

<style lang="stylus" scoped>
  .calendar-panel {
    position: absolute;
    top: 0;
    left: 0;
  }
  .slide-enter-active {
    animation-name: slideInUp;
    animation-duration: 0.3s;
    animation-fill-mode: both;
  }
  .slide-leave-active {
    animation-name: slideOutDown;
    animation-duration: 0.3s;
    animation-fill-mode: both;
  }

  @keyframes slideInUp {
    0% {
      transform: translate3d(0, -200%, 0);
      visibility: visible;
    }

    to {
      transform: translateZ(0);
    }
  }
  @keyframes slideOutDown {
    0% {
      transform: translateZ(0);
    }

    to {
      visibility: hidden;
      transform: translate3d(0, -200%, 0);
    }
  }
  .delay-leave-active {
    -webkit-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    -o-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
</style>
