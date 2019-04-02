<template>
    <div class="zhi-jian">
        <!-- 右侧背景色块 -->
        <transition name="fade-right">
          <div class="zhi-jian-main-bg" v-show="resolvePath() === 'path-zhijianyun'"></div>
        </transition>
        <!-- 左侧动画组件 -->
        <transition name="fade-left">
            <zhijianBanner/>
        </transition>
        <!-- 账号密码模块 -->
        <transition name="fade-left" v-show="resolvePath() === 'path-zhijianyun'">
            <logIn/>
        </transition>
        <router-view/>
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
.zhi-jian
  width 100%
  height 100%
  background-color #DEDEDE
  position relative
.zhi-jian-main-bg
  position absolute
  width 25%
  right 0
  height 100%
  background-color #f1f1f1
  transform translateX(100%)
  animation left-in .8s ease-in-out forwards
  transition .8 all ease-in-out
  z-index 2
.footer
  width 100%
  background-color #000
  padding 32px 0 24px
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
.fade-right-enter, .fade-right-leave-to
  transform translateX(100%)
.fade-right-enter-to, fade-right-leave
  transform translateX(0)

@keyframes left-in
  0%
    transform translateX(100%)
  100%
    transform translateX(0)  
 
</style>

<script>
import sideBar from '@/components/zhijian/sideBar.vue'
import zhijianBanner from '@/components/zhijian/zhijianBanner.vue'
import logIn from '@/components/zhijian/logIn.vue'
export default {
    components: {sideBar, zhijianBanner, logIn},
    methods: {
      resolvePath() {
          const resolvedPath = 'path' + this.$route.fullPath.replace(/\//g,'-')
          return resolvedPath
      }
    }
}
</script>

