<template>
<div class="main">
  <div class='header'>
    <img class="logo" src="../../statics/img/logo.png" alt="">
    <div class="text-logo">
        <div>
          <strong style="font-size: 26px">{{time}}</strong><br>
          {{date}}<br>
          {{day}}
        </div>
        <div>
          东南风3级<br>
          优&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多云<br>
          <strong style="font-size: 26px">25℃/16℃</strong>
        </div>
    </div>
  </div>
  <div class="content">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../../statics/img/banner1.jpeg"/> 
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../statics/img/banner2.jpeg"/> 
      </van-swipe-item>
    </van-swipe>
  </div>
  <div class="info">
    <div class='center'>
      <div class="title-img">
        <img src="../../statics/img/title.jpg" alt="">
        <detail></detail>
      </div>
      <div class="list">
        <div class="icon bubbly-button" :class="{'animate': animate1}" @click="clickMe1">
          <img src="../../statics/img/project1.png" alt="">
        </div>
        <div class="icon bubbly-button" :class="{'animate': animate2}" @click="clickMe2">
          <img src="../../statics/img/project2.png" alt="" class="icon bubbly-button" :class="{'animate': animate2}" @click="clickMe2">
        </div>
      </div>
      <div class="list">
        <div class="icon bubbly-button" :class="{'animate': animate3}" @click="clickMe3">
          <img src="../../statics/img/project3.png" alt="">
        </div>
        <div  class="icon bubbly-button" :class="{'animate': animate4}" @click="clickMe4">
          <img src="../../statics/img/project4.png" alt="">
        </div>
      </div>
    </div>
  </div>
  <!-- <div class='footer'>
    <span>{{time}}</span>
    <span>{{date}}</span>
    <span>上海 {{day}}</span>
  </div> -->
</div>
</template>
<script>
import Detail from '../detail/index'
export default {
  components:{ Detail },
  data() {
    return {
      animate1: false,
      animate2: false,
      animate3: false,
      animate4: false,
    }
  },
  computed: {
    time: function (){
      let now = new Date();
      let hour = now.getHours();
      return `${this.addNumber(hour)}:${this.addNumber(now.getMinutes())}`;
    },
    date: function() {
      let now = new Date();
      return `${now.getFullYear()}.${this.addNumber(now.getMonth()+1)}.${this.addNumber(now.getDate())}`;
    },
    day: function() {
      let now = new Date();
      return `${this.whichWeek(now.getDay())}`;
    },
  },
  methods: {
    clickMe1() {
          this.animate1 = false;
          this.animate1 = true;
          setTimeout(() => {
              this.animate1 = false;
          },700);
      },
      clickMe2() {
          this.animate2 = false;
          this.animate2 = true;
          setTimeout(() => {
              this.animate2 = false;
          },700);
      },
      clickMe3() {
          this.animate3 = false;
          this.animate3 = true;
          setTimeout(() => {
              this.animate3 = false;
          },700);
      },
      clickMe4() {
          this.animate4 = false;
          this.animate4 = true;
          setTimeout(() => {
              this.animate4 = false;
          },700);
      },
    addNumber(num) {
      return num > 9 ? num : `0${num}` ;
    },
    whichWeek(days) {
      switch(days){
        case 1:
            days='星期一';
            break;
        case 2:
            days='星期二';
            break;
        case 3:
            days='星期三';
            break;
        case 4:
            days='星期四';
            break;
        case 5:
            days='星期五';
            break;
        case 6:
            days='星期六';
            break;
        case 0:
            days='星期日';
            break;
      }
    return days;
  }
  }
}
</script>
<style lang="stylus">
  .van-swipe__indicator{
    width 20px !important
    height 20px !important
    margin auto 10px
  }
</style>
<style lang="stylus" scoped>
.main{
  .header{
    width: 100%;
    padding 10px 20px 0 10px
    background #fff
    display flex
    align-items center
    justify-content space-between
    .logo{
      width: 300px
      height 100px;
    }
    .text-logo{
      display flex
      align-items center
      color rgba(0,0,0,0.5)
      text-align right
      div{
        padding 0 40px
      }
      div:first-child{
        border-right 1Px solid rgba(0,0,0,0.5)
        border-left 1Px solid rgba(0,0,0,0.5)
      }
    }
  }
  .content{
    .van-swipe-item{
      background #243847
      color #ffffff
      font-size 50px
      text-align center
      img{
        width 100%
        height 100%
      }
    }
    .van-swipe{
      height 600px
      img{
        width 100%
        height 600px
      }
    }
  }
  .info{
    background #d5655d
    height 1210px
    background-image: url('../../statics/img/background-red.jpeg');
    background-size: 100% 100%;
    .center{
      height 100%
      padding 60px 0 0 0
      margin auto 80px
      .title-img{
        position: relative
        width 80%
        height 200px
        margin auto
        border-radius 20px
        overflow: hidden
        img{
          width 100%
          height 80%
          z-index 101
          position: relative
        }
      }
      .list{
        display flex
        justify-content space-evenly
        margin 120px auto 100px
        img{
          width 300px
          height 200px
        }
      }
    }
  }
  .footer{
    width 100%
    height 100px
    background #243847
    display flex
    align-items center
    justify-content space-evenly
    span{
      color #ffffff
      font-weight bold
      font-size 24px
    }
  }

.bubbly-button {
  display: inline-block;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  color: #fff;
  border-radius: 50px
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
}
.bubbly-button:focus {
  outline: 0;
}
.bubbly-button:before, .bubbly-button:after {
  position: absolute;
  content: '';
  display: block;
  width: 140%;
  height: 100%;
  left: -20%;
  z-index: -1000;
  transition: all ease-in-out 0.5s;
  background-repeat: no-repeat;
}
.bubbly-button:before {
  display: none;
  top: -75%;
  background-image: radial-gradient(circle, #e9ea6f 20%, transparent 20%), radial-gradient(circle, transparent 20%, #e9ea6f 20%, transparent 30%), radial-gradient(circle, #e9ea6f 20%, transparent 20%), radial-gradient(circle, #e9ea6f 20%, transparent 20%), radial-gradient(circle, transparent 10%, #e9ea6f 15%, transparent 20%), radial-gradient(circle, #e9ea6f 20%, transparent 20%), radial-gradient(circle, #e9ea6f 20%, transparent 20%), radial-gradient(circle, #e9ea6f 20%, transparent 20%), radial-gradient(circle, #e9ea6f 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
}
.bubbly-button:after {
  display: none;
  bottom: -75%;
  background-image: radial-gradient(circle, #e9ea6f 20%, transparent 20%), radial-gradient(circle, #e9ea6f 20%, transparent 20%), radial-gradient(circle, transparent 10%, #e9ea6f 15%, transparent 20%), radial-gradient(circle, #e9ea6f 20%, transparent 20%), radial-gradient(circle, #e9ea6f 20%, transparent 20%), radial-gradient(circle, #e9ea6f 20%, transparent 20%), radial-gradient(circle, #e9ea6f 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
}
.bubbly-button:active {
  transform: scale(0.9);
  background-color: transparent;
  box-shadow: 0 2px 25px #e9ea6f;
}
.bubbly-button.animate:before {
  display: block;
  animation: topBubbles ease-in-out 1s forwards;
}
.bubbly-button.animate:after {
  display: block;
  animation: bottomBubbles ease-in-out 1s forwards;
}

@keyframes topBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
  }
  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
  }
}
@keyframes bottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
  }
  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
  }
  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
    background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
  }
}
}
</style>
