<template>
    <div class="ad-market" :style="resolveStyle()">
      <div class="ad-market-content">
        <!-- 第一个 -->
        <div class="ad-market-item" @mouseenter="play(1)">
          <div class="icon" ref="lottie1"></div>
          <p class="text-h">
            新人体验站
          </p>
          <p class="text-l">
            多款产品9.9元首月
          </p>
        </div>
        <!-- 第二个 -->
        <div class="ad-market-item" @mouseenter="play(2)">
          <div class="icon" ref="lottie2"></div>
          <p class="text-h">
            .com域名特价抢
          </p>
          <p class="text-l">
            新用户25元起
          </p>
        </div>
        <!-- 第三个 -->
        <div class="ad-market-item" @mouseenter="play(3)">
          <div class="icon" ref="lottie3"></div>
          <p class="text-h">
            体验版高稳定虚机
          </p>
          <p class="text-l">
            新客专享6元体验3月
          </p>
        </div>
        <!-- 第四个 -->
        <div class="ad-market-item" @mouseenter="play(4)">
          <div class="icon" ref="lottie4"></div>
          <p class="text-h">
            百度云新功能上线
          </p>
          <p class="text-l">
            您的关注我们的动力
          </p>
        </div>
      </div>
    </div>
</template>

<style lang="stylus">
.ad-market
  width 1180px
  height 110px
  background-color #ffffff
  transition .3s all ease-out
  box-shadow 0 10px 20px rgba(0,0,0,.05)
  margin auto
  position relative
  top -55px
  border-radius 4px
  .ad-market-content
    width 1180px
    height 100%
    margin auto
  .ad-market-item
    &:hover
      cursor pointer
    width 25%
    height 100%
    overflow hidden
    position relative
    float left
    .icon
      width 58px
      height 58px
      margin 26px 20px 26px 40px 
      // background-color #F9FAFC
      border-radius 100px
      img 
        width 100%
    p.text-h
      position absolute
      top 27px
      left 118px
      color #454A5B
      font-weight 500
      margin 0
      font-size 16px
      line-height 30px
    p.text-l
      margin 0
      position absolute
      top 57px
      left 118px
      color #666B7F
      opacity .8
      font-size 14px
      line-height 26px
      
</style>


<script>
import lottie from 'lottie-web'
export default {
  props:['scroll'],
  mounted() {
    this.addAnimation()
  },
  methods: {
    resolveStyle(){
      if (this.scroll < 300) {
        const px = - (this.scroll/3)
        return "transform: translateY(" + px +"px)"
      } else {
        return "transform: translateY(-100px)" 
      }
    },
    addAnimation(){
      this.animation1 = lottie.loadAnimation({
        container: this.$refs.lottie1, 
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: require('@/assets/json/data4.json'),
      });
      this.animation2 = lottie.loadAnimation({
        container: this.$refs.lottie2, 
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: require('@/assets/json/data3.json'),
      });
      this.animation3 = lottie.loadAnimation({
        container: this.$refs.lottie3, 
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: require('@/assets/json/data2.json'),
      });
      this.animation4 = lottie.loadAnimation({
        container: this.$refs.lottie4, 
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: require('@/assets/json/data1.json'),
      });
    },
    play(i) {
      if (i==1){
        this.animation1.goToAndPlay(0, true) 
      }
      if (i==2){
        this.animation2.goToAndPlay(0, true) 
      }
      if (i==3){
        this.animation3.goToAndPlay(0, true) 
      }
      if (i==4){
        this.animation4.goToAndPlay(0, true) 
      }
    },
  }
}
</script>
