<template>
  <transition name="fade">
    <div class="toast" v-if="show">{{message}}</div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        message: "",
        success: true
      }
    }
  }
</script>

<style lang="stylus" scoped>
.toast {
  position fixed
  bottom 200px
  left 0
  right 0
  margin 23px auto
  width: 225px;
  height: 40px;
  background: #333333;
  box-shadow: 0 1px 2px 0 #00000050;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 40px;
  text-align center
  opacity 0.8
}

.fade-leave-active {
  animation-name fadeAway
  animation-duration 2s
  animation-fill-mode both
}

@keyframes fadeAway {
  from {
    opacity 100%
  }

  to {
    opacity 0
  }
}
</style>
