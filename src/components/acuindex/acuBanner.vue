<template>
    <div class="acu-banner">
        <div class="banner-content">
            <!--右侧图片-->
            <div class="hero-img">
              <img src="@/assets/acu-index/hero.png" alt="">
            </div>
            <!--左侧banner-->
            <h2>百度智能云流式计算BSC火热公测中</h2>
            <p>注册任意域名赠免费百度官方建站应用 baid 批量注册 WHOIS查询 价格总览 智能解析<br/> 隐私保护</p>
            <!--按钮-->
            <div class="button">
              <p class="button-text">了解详情</p>
              <div class="button-bg"></div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus">
.acu-banner
  width 100%
  height 630px
  transition .01s all ease-in-out
  background-color #F6F8FB
  // background-color #2468f2
  padding-top 60px
  box-sizing border-box
  .banner-content
    width 1180px
    height 400px
    margin 50px auto
    position relative
    h2
      margin 0 0 10px 0
      padding 60px 0 0 0
      font-size 38px
      line-height 58px
      font-weight 500
      color #2E3341
    p
      marin 10px 0
      font-size 16px
      line-height 30px
      width 620px
      color #747C90
    .button 
      width 140px
      height 40px
      position absolute
      bottom 68px
      border 1px solid transparent
      box-sizing border-box
      transition .2s all ease-in-out
      .button-bg
        transition .2s all ease-in-out
        width 100%
        height 100%
        position absolute
        top 0
        left 0
        border-radius 100px
        background-color #2468f2
        z-index 1
      .button-text
        width 100%
        height 100%
        line-height 38px
        text-align center
        font-size 14px
        color #fff  
        position absolute
        top 0
        left 0   
        z-index 2
        margin 0
      &:hover
        .button-bg
          transform scale(1.08)
        cursor pointer
        // color #2468f2
        // border 1px solid #2468f2
        // background-color #0f51d7
    .hero-img
      height 400px
      position absolute
      right 0
      width 500px
      img 
        height 100%
</style>
