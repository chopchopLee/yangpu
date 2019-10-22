<template>
  <div class="waveWrapper waveAnimation">
    <div class="waveWrapperInner bgTop">
      <div class="wave waveTop"></div>
    </div>
    <div class="waveWrapperInner bgMiddle">
      <div class="wave waveMiddle"></div>
    </div>
    <div class="waveWrapperInner bgBottom">
      <div class="wave waveBottom"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>
  @keyframes move_wave{
    0% {
      transform: translateX(0) translateZ(0) scaleY(1)
    }
    50% {
      transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }
    100% {
      transform: translateX(-50%) translateZ(0) scaleY(1)
    }
  }
  .waveWrapperInner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 80px;
    bottom: -1px;
    background: #243847;
  }
  .bgTop {
    z-index: 15;
    opacity: 0.5;
    border-radius: 20px;
  }
  .bgMiddle {
    z-index: 10;
    opacity: 0.75;
    border-radius: 20px
  }
  .bgBottom {
    z-index: 5;
    border-radius: 20px
  }
  .wave {
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
  }
  .waveTop {
    background-size: 50% 50px;
    background-image: url('../../statics/img/wave-top.png')
  }
  .waveAnimation .waveTop {
    animation: move-wave 3s;
    -webkit-animation: move-wave 3s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }
  .waveMiddle {
    background-size: 50% 60px;
    background-image: url('../../statics/img/wave-mid.png')
  }
  .waveAnimation .waveMiddle {
    animation: move_wave 10s linear infinite;
  }
  .waveBottom {
    background-image: url('../../statics/img/wave-bot.png');
    background-size: 50% 50px;
  }
  .waveAnimation .waveBottom {
    animation: move_wave 15s linear infinite;
  }
</style>
