<template>
    <div class="acu-header">
        <!--左侧-->
        <div class="nav-left">
          <!--logo-->
          <div class="logo">
            <img src="@/assets/acu-index/logo.png" alt="">
          </div>
          <!--导航-->
          <div class="navs">
            <div class="nav">最新活动</div>
            <div class="nav">产品</div>
            <div class="nav">解决方案</div>
            <div class="nav">云市场</div>
            <div class="nav">合作与生态</div>
            <div class="nav">帮助与支持</div>
          </div>
          <div class="search">
            人工智能
            <img src="@/assets/acu-index/icon-search.png" alt="" class="icon">
          </div>
        </div>
        <!--右侧-->
        <div class="nav-right">
          <div class="navs">
            <div class="nav">备案</div>
            <div class="nav">文档</div>
            <div class="nav">管理控制台</div>
          </div>
          <div class="log-in">
            <div class="log-in-item">登录</div>
            <div class="line"></div>
            <div class="log-in-item new-user">免费注册</div>
          </div>
        </div>
    </div>
</template>

<style lang="stylus">
.not-top
  .acu-header
    background-color #fff
    box-shadow 0 0px 20px rgba(0,0,0,.01),0 0px 5px rgba(0,0,0,.05)
    .under-line
      left 0px
      right 0px
      // background-color #F0F2F6
      height 1px
      opacity .5
    .nav-left
      left 50px
    .nav-right
      right 50px
.acu-header
  min-width 1440px
  width 100%
  height 60px
  background-color #F6F8FB
  // background-color #2468f2
  position fixed
  z-index 1000
  top 0
  left 0
  transition .4s all ease-in-out
  &:hover
    background-color #fff
    box-shadow 0 4px 20px rgba(0,0,0,.05)
  .nav-left
    transition .4s all ease-in-out
    position absolute
    height 100%
    left 60px
    top 0
    .logo
      height 22px
      margin 19px 0
      float left
      img 
        height 100%
    // 搜索框样式
    .search
      float left
      margin 15px 15px
      width 120px
      height 30px
      font-size 12px
      background-color #F0F2F6
      border-radius 100px
      line-height 30px
      padding 0 12px
      box-sizing border-box
      color #747C90
      position relative
      transition .2s all ease-in-out
      &:hover
        width 140px
        opacity 1
      .icon
        width 16px
        height 16px
        top 7px
        right 12px
        position absolute
        opacity .6
        transition .2 all ease-in-out
        &:hover
          opacity 1

  .nav-right
    transition .4s all ease-in-out
    position absolute
    height 100%
    right 60px
    top 0
    .log-in
      float left 
      height 60px
      margin-left 40px
      .log-in-item
        float left 
        line-height 60px
        font-size 14px
        color #454A5B
        margin 0 12px 0 0
        &:hover
          cursor pointer
      .new-user
        font-weight 600
        color #2468f2
        margin 0 0 0 12px
      .line
        width 1px
        height 14px
        background-color #D8D8D8
        margin 23px 0
        float left
    .navs .nav 
      margin-left 0
      padding 0 10px
  .navs
    float left
    height 60px
    margin-left 15px
    .nav
      float left 
      padding 0 15px
      line-height 60px
      font-size 14px
      color #454A5B
      transition .2s all ease-in-out
      &:hover
        cursor pointer
        color #2468f2
</style>

