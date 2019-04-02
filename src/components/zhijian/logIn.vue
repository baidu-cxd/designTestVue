<template>
    <div class="zhijian-log-in">
        <img class="logo" src="@/assets/zhijian/logo.svg" alt="">
        <div class="input-content">
            <div class="input input-1">
                <img src="@/assets/zhijian/zhanghao.svg" alt="">
                <input type="text" placeholder="请输入账号">
            </div>
            <div class="input input-2">
                <img src="@/assets/zhijian/mima.svg" alt=""><input type="text" placeholder="请输入密码">
            </div>
        </div>
        <router-link to="/zhijianyun/main"><div class="log-in">登 &nbsp 录</div></router-link>
    </div>
</template>

<style lang="stylus">
.zhijian-log-in 
  opacity 0
  animation down-in .8s ease-in-out forwards .2s
  position absolute
  width 400px
  height 424px
  background-color #fff
  z-index 3
  top 50%
  right 25%
  box-shadow 0 2px 10px rgba(0, 0, 0, .1)
  padding 64px 40px 72px
  box-sizing border-box
  overflow hidden
  .logo
    height 24px
    opacity 0
    animation down-in-2 .6s ease-in-out forwards .58s
  .input-content
    padding 24px 0 12px
    .input 
      width 100%
      height 48px
      margin 24px 0
      position relative
      opacity 0
      &.input-1
        animation down-in-2 .6s ease-in-out forwards .6s
      &.input-2
        animation down-in-2 .6s ease-in-out forwards .62s
      input 
        display block
        width 100%
        height 48px
        line-height 48px
        box-sizing border-box
        padding 0 0 0 48px
        font-size 14px       
      img
        width 24px
        height 24px
        content ''
        display block
        position absolute
        left 12px
        top 12px
  a
    text-decoration none
  .log-in
    width 100%
    height 48px
    line-height 48px
    margin-top 24px
    background-color #000
    font-weight 500
    text-align center
    font-size 14px
    color #fff
    transition .2s all ease-in-out
    opacity 0
    animation down-in-2 .6s ease-in-out forwards .64s
    text-decoration none
    &:hover
      background-color #2E36E6
      cursor pointer
//动画
@keyframes down-in
  0%
    transform translate(50%, -40%) scale(1.1)
    opacity 0
  50%
    opacity 1
  100%
    transform translate(50%, -50%) scale(1)
    opacity 1

@keyframes down-in-2
  0%
    transform translateY(60px)
    opacity 0
  100%
    transform translateY(0px)
    opacity 1
</style>

