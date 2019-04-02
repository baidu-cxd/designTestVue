<template>
    <div class="zhijian-header">
      <router-link to="/zhijianyun">
         <img src="@/assets/zhijian/logow.svg" alt="" class="logo">
         <nav>
             <router-link to="/zhijianyun/main">
               <p>我的模型</p>
               <div class="under-line" :class="resolvePath()"></div>
             </router-link>
             <router-link to="/zhijianyun/set"><p>设备管理</p></router-link>
             <router-link to="/zhijianyun/user"><p>用户管理</p></router-link>
         </nav>
      </router-link>
    </div>
</template>

<style lang="stylus">
.zhijian-header
  width 100%
  position fixed
  top 0
  z-index 10
  background-color #000
  height 70px
  .logo
    height 20px
    position absolute
    top 50%
    left 24px
    transform translateY(-50%)
  nav 
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    a
      text-decoration none 
      color #ffffff
      opacity 1
      margin 0 
      padding 0 24px
      font-size 14px
      line-height 70px
      display block
      position relative
      float left
      height 70px
      p
        opacity .8
        margin 0
      &.router-link-active
        font-weight 500
        p
          opacity 1
    .under-line
      width 100%
      height 2px
      bottom 16px
      position absolute
      opacity .5
      transition .2s all ease-in-out
      &:before
        display block
        content ''
        margin 0 48px 0 0 
        background-color #fff
        height 100%
      &.path-zhijianyun-set
        transform translateX(100%)
      &.path-zhijianyun-user
        transform translateX(200%)

// 动画



</style>

<script>
export default {
    methods: {
      resolvePath() {
          const resolvedPath = 'path' + this.$route.fullPath.replace(/\//g,'-')
          return resolvedPath
      }
    }
}
</script>


