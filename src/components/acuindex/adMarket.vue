<template>
    <div class="ad-market" :style="resolveStyle()">
      <div class="ad-market-content">
        <!-- 第一个 -->
        <div class="ad-market-item">
          <div class="icon"><img src="@/assets/acu-index/market-icon-1.png" alt=""></div>
          <p class="text-h">
            新人体验站
          </p>
          <p class="text-l">
            多款产品9.9元首月
          </p>
        </div>
        <!-- 第二个 -->
        <div class="ad-market-item">
          <div class="icon"><img src="@/assets/acu-index/market-icon-2.png" alt=""></div>
          <p class="text-h">
            .com域名特价抢
          </p>
          <p class="text-l">
            新用户25元起
          </p>
        </div>
        <!-- 第三个 -->
        <div class="ad-market-item">
          <div class="icon"><img src="@/assets/acu-index/market-icon-3.png" alt=""></div>
          <p class="text-h">
            体验版高稳定虚机
          </p>
          <p class="text-l">
            新客专享6元体验3月
          </p>
        </div>
        <!-- 第四个 -->
        <div class="ad-market-item">
          <div class="icon"><img src="@/assets/acu-index/market-icon-4.png" alt=""></div>
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
export default {
  props:['scroll'],
  methods: {
    resolveStyle(){
      if (this.scroll < 300) {
        const px = - (this.scroll/3)
        return "transform: translateY(" + px +"px)"
      } else {
        return "transform: translateY(-100px)" 
      }
    }
  }
}
</script>
