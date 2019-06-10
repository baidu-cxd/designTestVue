<template>
    <div class="acu-header" :class="navState === 'normal' ? 'normal' : 'search'">
      <!--顶部导航栏主体部分-->
      <div class="nav-animate-wrp" :class="resolveClassInner()">
       <div class="nav-animate-content nav-animate-content-1-search"  @click="navState = 'normal'">
         <div class="search-bar">
           <img src="@/assets/acu-index/icon-search.png" alt="" class="icon">
           <div class="cur"></div>
           <p>云服务器 BCC</p>
           <img class='close icon' src="@/assets/acu-index/close.png" alt="" >
         </div>
       </div>
       <div class="nav-animate-content nav-animate-content-1">
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
            <div class="search" @click="navState = 'search'">
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
       <div class="nav-animate-content nav-animate-content-2">
         <div class="content">
            <p :class="isCurrent(0,1100)">四大平台解决方案</p>
            <p :class="isCurrent(1100,2140)">产品介绍</p>
            <p :class="isCurrent(2140,2800)">解决方案</p>
            <p :class="isCurrent(2800,3700)">客户案例</p>
            <p :class="isCurrent(3700,1000000)">认证展示</p>
            <div class="under-line" 
              :style="'left:' + left[0] + 'px; right:' + left[1] +'px'">
            </div>
         </div>
       </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      navState : 'normal',
    }
  },
  computed:{
    left() {
      if (this.scroll>3700){
        return [1035,90]
      }
      else if (this.scroll>2800){
        return [800,325]
      }
      else if (this.scroll>2140){
        return [562,560]
      }
      else if (this.scroll>1160){
        return [325,795]
      }
      return [60,1005]
    },
  },
  props:['scroll', 'direction'],
  methods: {
    resolveClass(){
      if (this.scroll < 300) {
        return "fade-scale-nav"
      }
      else if (this.scroll < 700) {
        return "fade-scroll-nav"
      } else {
        return "fade-scroll-nav-anti" 
      }
    },
    resolveClassInner() {
      if (this.direction === 'up') {
        return "in-banner"
      }
      else if (this.scroll < 600) {
        return "in-banner"
      } 
      else{
        return "out-banner"
      }     
    },
    isCurrent(i, j) {
      if (this.scroll > i && this.scroll < j) {
        return 'current'
      }
    }
  }
}
</script>


<style lang="stylus">
.not-top
  .acu-header
    background-color #fff
    box-shadow 0 0px 20px rgba(0,0,0,.01),0 0px 5px rgba(0,0,0,.05)
    .nav-left
      left 50px
    .nav-right
      right 50px
.acu-header
  &.search
    background-color #fff
    box-shadow 0 0px 20px rgba(0,0,0,.01),0 0px 5px rgba(0,0,0,.05)
    .nav-animate-wrp 
      .nav-animate-content-1
        transform scale(1.01)
        opacity 0
        z-index 1
    .nav-animate-wrp 
      .nav-animate-content-1-search
        opacity 1
        z-index 2
        transition .4s all ease-in-out .2s
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
  .nav-animate-wrp
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    overflow hidden
    .nav-animate-content
      width 100%
      height 100%
      position absolute
      top 0
      left 0
      transition .4s all ease-in-out
    .nav-animate-content-1
      top 0
      z-index 2
    .nav-animate-content-1-search
      top 0
      z-index 1
      opacity 0
      transition .1s all ease-in-out
      background-color #fff
      .search-bar
        width 600px
        height 60px
        margin auto
        // border 1px solid #ebebeb
        margin 0px auto
        // border-radius 100px
        // background-color #f5f5f5
      p
        line-height 60px
        margin 0 0px
        font-size 14px
        float left 
        color #454A5B
        opacity .6
      div.cur
        width 1px 
        height 16px
        margin 22px 4px
        background-color #454A5B
        animation starShine 1s  ease-in infinite
        float left
      img 
        float left
        width 16px
        margin 22px 12px
      img.close
        float right 
        opacity .4
        transition .2s all ease-in-out
        &:hover
          opacity 1
          cursor pointer
    .nav-animate-content-2
      top 60px
      .content
        width 1180px
        margin auto
        position relative
        height 60px
        p
          line-height 60px
          margin 0
          font-size 14px
          color #454a5b
          width 20%
          text-align center
          float left
          display block
          position relative
          transition .2s all ease-in-out
          &:hover
            cursor pointer
          &.current
            color #2468F2
        .under-line
          position absolute
          display block
          height 2px
          background-color #2468F2
          bottom 0
          z-index 100
          transition .4s all ease-in-out
    &.out-banner
      .nav-animate-content-1
        transform translateY(-60px)
      .nav-animate-content-2
        transform translateY(-60px)      
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
      // background-color #F0F2F6
      border-radius 100px
      line-height 30px
      padding 0 12px 0 24px
      box-sizing border-box
      color #747C90
      position relative
      transition .2s all ease-in-out
      &:hover
        opacity 1
        cursor pointer
        .icon
          opacity 1
      .icon
        width 16px
        height 16px
        top 7px
        left 0px
        position absolute
        opacity .6
        transition .2 all ease-in-out

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

// 动画
.fade-scale-nav-leave-active
  transition .4s all ease-in-out .4s  
.fade-scale-nav-enter-active
  transition .4s all ease-in-out
.fade-scale-nav-enter-to, .fade-scale-nav-leave
  transform scale(1)
  opacity 1
.fade-scale-nav-enter
  transform scale(1.01)
  opacity 0
.fade-scale-nav-leave-to
  transform scale(1.01)  
  opacity 0

@keyframes starShine
  0%
    opacity 0
  60%
    opacity 1
  100%
    opacity 1

</style>

