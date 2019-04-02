<template>
    <div class="zhi-jian">

        <!-- 顶部导航栏 -->
        <transition name = "fade-header">
          <zhijianHeader v-if="resolvePath() !== 'path-zhijianyun'"/>
        </transition>

        <!-- 左侧导航栏 -->
        <transition name = "fade-sidebar">
          <sideBar v-if="hasSidebar()"/>
        </transition>

        <!-- 右侧背景色块 -->
        <transition name="fade-right">
          <div class="zhi-jian-main-bg" v-show="resolvePath() === 'path-zhijianyun'"></div>
        </transition>

        <!-- 左侧动画组件 -->
        <transition name="fade-delay">
            <zhijianBanner  v-if="resolvePath() === 'path-zhijianyun'"/>
        </transition>

        <!-- 页面详情容器 -->
        <transition name="fade-page">
          <div class="page-content" v-if="resolvePath() !== 'path-zhijianyun'">
               <pageDetail :hasSidebar='hasSidebar()' :nowPath='resolvePath()'/>
          </div>
        </transition>

        <!-- 账号密码模块 -->
        <transition name="fade-log">
          <div class="log-in-content"  v-show="resolvePath() === 'path-zhijianyun'">
            <logIn/>
          </div>
        </transition>
        
        <!-- footer -->
        <div class="footer">
            <nav>
                <a href="">百度云</a>
                <a href="">百度大脑</a>
            </nav>
            <p>© 2019 Baidu 使用百度前必读    增值电信业务经营许可证：B1.B2-20100266    京ICP证030173号    隐私政策</p>
        </div>
    </div>
</template>

<style lang="stylus">
body
  background-color #DEDEDE
.zhi-jian
  width 100%
  height 100%
  background-color #DEDEDE
  position relative
.page-content
  width 100%
  min-height 100%
  overflow hidden
  position relative
  z-index 3
.log-in-content
  position absolute
  top 50%
  left 75%
  z-index 100
.zhi-jian-main-bg
  position absolute
  width 100%
  right 0
  height 100%
  background-color #f1f1f1
  transform translateX(75%)
  animation left-in 1.2s ease-out
  transition .8 all ease-in-out
  z-index 2
.footer
  width 100%
  background-color #000
  padding 32px 0 24px
  z-index 10
  position relative
  nav
    margin auto
    text-align center
    a
      font-size 13px
      line-heihgt 26px
      margin 0 30px
      color #ffffff
      text-decoration none
  p
    font-size 13px
    line-heihgt 26px
    color #ffffff
    opacity .5
    text-align center

// 动画
.fade-right-enter-active, .fade-right-leave-active
  transition .6s all ease-in-out
.fade-right-enter-to, .fade-right-leave
  transform translateX(75%)
  background-color #f1f1f1
.fade-right-enter, .fade-right-leave-to
  transform translateX(0%)
  background-color #dedede

.fade-log-enter-active, .fade-log-leave-active
  transition .2s all ease-in-out .2s
.fade-log-enter-to, .fade-log-leave
  transform translateY(0)
  opacity 1
.fade-log-enter, .fade-log-leave-to
  opacity 0
  transform translateX(60px)

.fade-delay-enter-active
  transition .4s all ease-in-out 0s
.fade-delay-leave-active
  transition .2s all ease-in-out .4s
.fade-delay-enter-to, .fade-delay-leave
  opacity 1
.fade-delay-enter, .fade-delay-leave-to
  opacity 0

.fade-header-enter-active
  transition .4s all ease-in-out .4s 
.fade-header-leave-active
  transition .4s all ease-in-out 
.fade-header-enter-to, .fade-header-leave
  transform translateY(0)
.fade-header-enter, .fade-header-leave-to
  transform translateY(-100%)

.fade-sidebar-enter-active
  transition .4s all ease-in-out .2s 
.fade-sidebar-leave-active
  transition .4s all ease-in-out 
.fade-sidebar-enter-to, .fade-sidebar-leave
  transform translateX(0)
.fade-sidebar-enter, .fade-sidebar-leave-to
  transform translateX(-100%)

.fade-page-enter-active
  transition .4s all ease-in-out .5s 
.fade-page-leave-active
  transition .2s all ease-in-out 0s 
.fade-page-enter-to, .fade-page-leave
  transform translateY(0)
  opacity 1
.fade-page-enter, .fade-page-leave-to
  transform translateY(40px)
  opacity 0

@keyframes left-in
  0%
    transform translateX(0)
  100%
    transform translateX(75%)  
 
</style>

<script>
import sideBar from '@/components/zhijian/sideBar.vue'
import zhijianBanner from '@/components/zhijian/zhijianBanner.vue'
import zhijianHeader from '@/components/zhijian/zhijianHeader.vue'
import logIn from '@/components/zhijian/logIn.vue'
import pageDetail from '@/components/zhijian/pageDetail.vue'

export default {
    components: {sideBar, zhijianBanner, logIn, zhijianHeader, pageDetail},
    methods: {
      resolvePath() {
          const resolvedPath = 'path' + this.$route.fullPath.replace(/\//g,'-')
          return resolvedPath
      },
      hasSidebar() {
          let path = this.resolvePath()
          if (path === 'path-zhijianyun-main') {
              return true
          } else {
              return false
          }
      }
    }
}
</script>

