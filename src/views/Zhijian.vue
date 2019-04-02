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

        <!-- 弹窗 -->

        <transition name="fade-module">
            <div class="module" @click="toggleModule()" v-if="this.$store.state.module">
                <div class="module-body-content">
                  <div class="module-body">
                      <div class="module-body-head">设备管理</div>
                      <p>设备参数</p>
                      <p class="week">包大小：23.28m</p>
                      <p class="week">兼容性：4.0+</p>
                      <div class="buttom">立即安装</div>
                  </div>
                </div>
                <div class="module-bg"></div>
            </div>
        </transition>
        

    </div>
</template>

<style lang="stylus">

// 弹窗

.zhi-jian .module
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 1000
  .module-body-content
    width 100%
    height 100%
    z-index 2
    position relative
  .module-body
    width 640px
    min-height 340px
    background-color #ffffff
    box-shadow 0 2px 10px rgba(0,0,0,.1)
    position absolute
    left 50%
    top 50%
    transform translate(-50%,-50%)
    z-index 2
    .module-body-head
      width 100%
      height 80px
      background-color #2E36E6
      font-size 16px
      color #fff
      line-height 80px
      text-align center
      margin-bottom 24px
    p
      font-size 14px
      color #000
      opacity 1
      line-height 26px
      margin 12px 48px
      &.week
        opacity .4
    .buttom
      min-width 80px
      height 40px
      line-height 40px
      background-color #2E36E6
      color #ffffff
      font-size 14px
      transition .2s all ease-in-out
      margin  48px auto
      padding 0 24px  
      text-align center 
      width 140px
      &:hover
        background-color #000
        cursor pointer
  .module-bg
    z-index 1
    background-color rgba(0,0,0,.4)
    width 100%
    height 100%
    position absolute
    top 0
    left 0



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

.fade-module-enter-active, .fade-module-leave-active
  transition .4s all ease-in-out
  .module-bg
    transition .4s all ease-in-out
  .module-body-content
    transition .2s all ease-in-out
.fade-module-enter-to, .fade-module-leave
  .module-bg
    opacity 1
  .module-body-content
    transform translateY(0)
    opacity 1
.fade-module-enter, .fade-module-leave-to
  .module-bg
    opacity 0
  .module-body-content
    transform translateY(40px)
    opacity 0

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
      },
      toggleModule() {
          this.$store.state.module = !this.$store.state.module
      }
    }
}
</script>

