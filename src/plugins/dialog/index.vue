<template>
  <div>
    <screen-mask v-if="show" @click="show = false"/>
    <slide-wrapper>
      <div class="dialog" v-if="show">
        <header v-if="type === 1">{{title}}</header>
        <p class="hint">{{hint}}</p>
        <p class="tip">{{tip}}</p>
        <footer>
          <div class="see-button" @click="show = false" v-if="type === 1">我知道了</div>
          <div class="cancel-button" @click="buttons[0].callback" v-if="type === 2">{{buttons[0].name}}</div>
          <div class="ok-button" @click="buttons[1].callback" v-if="type === 2" >{{buttons[1].name}}</div>
        </footer>
      </div>
    </slide-wrapper>
  </div>
</template>

<script>
import ScreenMask from "../ScreenMask";
import SlideWrapper from "../SlideWrapper";

export default {
  components: { ScreenMask, SlideWrapper },
  data() {
    return {
      show: true,
      title: 1,
      hint: "",
      tip: "",
      type: 1,
      buttons: [{
        name: "",
        callback: () => {}
      }]
    }
  },
  methods: {

  }
};
</script>

<style lang="stylus" scoped>
@import "../../statics/styles/global.styl"

@keyframes rotate {
  0% {
    transform rotate(0deg)
  }
  50% {
    transform rotate(180deg)
  }
  100% {
    transform rotate(360deg)
  }
}

.dialog {
  width: 300px;
  background: #FFFFFF;
  border-radius: 6px;
  position fixed
  top 30%
  left 0
  right 0
  margin auto
  z-index 1010
  padding 19px 20px
  header {
    height: 62px - 19px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(65,65,65,1);
    line-height: 25px;
    text-align center
    border-bottom 0.5PX solid #D5D5D5
    margin-bottom 22px
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: rgba(159,159,159,1);
    line-height: 25px;
    display flex
    align-items center
    margin-bottom 15px
  }
  .hint {
    margin 25px 15px
    color #414141
    display block
    font-size 16px
  }
  footer {
    width 87.3%
    display flex
    justify-content space-around
    margin auto
    .cancel-button {
      width: 130px;
      height: 48px;
      border-radius: 50px;
      border: 0.5PX solid rgba(213,213,213,1)
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(182,182,182,1);
      line-height: 48px;
      text-align center
    }
    .ok-button, .see-button {
      width: 130px;
      height: 48px;
      background: rgba(101,147,229,1);
      border-radius: 50px;
      line-height: 48px;
      text-align center
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255,255,255,1);
    }
    .cancel-button {
      margin-right 10px
    }
    .ok-button {
      margin-left 10px
    }
  }
}
</style>
