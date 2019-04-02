<template>
    <div class="page-detail" :class="[this.hasSidebar ? 'has-side-bar': 'not-has-side-bar']">
        <div class="page-header">
            <transition name="fade-page-header">
                <div :key="this.nowPath" class="header-content">
                  <!-- 第一个页面的标题 -->
                  <div v-if="this.nowPath === 'path-zhijianyun-main'">
                    <div class="inner-content">
                      <img src="@/assets/zhijian/shili.svg" alt="" class="icon">
                      <p>当前模型: </p>
                      <p>物件计数 v2 </p>
                    </div>
                  </div>
                  <!-- 第二个页面的标题 -->
                  <div v-else-if="this.nowPath === 'path-zhijianyun-set'">
                    <div class="back">
                        <img src="@/assets/zhijian/arrw.svg" alt="" class="icon">
                        <p>返回</p>
                    </div>
                    <div class="inner-content">
                      <img src="@/assets/zhijian/zhongduan.svg" alt="" class="icon">
                      <p>一个终端设备</p>
                    </div>
                  </div>
                </div>
            </transition>  
        </div>
    </div>
</template>

<script>
export default {
    props: ['hasSidebar', 'nowPath'],
}
</script>

<style lang="stylus">
.page-detail
  background-color #fff
  min-height 700px
  box-shadow 0 2px 10px rgba( 0, 0, 0, .1)
  margin 94px 24px 24px 24px 
  transition .4s all ease-in-out
  &.has-side-bar
    margin 94px 24px 24px 304px 
    transition .4s all ease-in-out .2s
  .page-header
    width 100%
    height 72px
    background-color #2E36E6
    position relative
    box-sizing border-box
    overflow hidden
    .header-content
      position absolute
      top 0
      left 0
      width 100%
      height 100%
    .inner-content
      height 72px
      overflow hidden
      float left
    .icon
      width 24px
      display block
      float left
      margin 24px 0 0 24px
    p
      margin 0 0 0 16px
      padding 0
      line-height 72px
      color #fff
      display block
      float left
    .back
      width 120px
      background-color #000
      height 72px
      transition .2s all ease-in-out
      float left
      &:hover
        cursor pointer 
        background-color #1c1c1c
      img 
        width 24px
        margin 24px 12px 0 16px
      p
        line-height 72px
        font-size 14px
        color #fff
        margin-left 0



// 动画

.fade-page-header-enter-active
  transition .3s all ease-in-out .4s 
  .inner-content
    transition .3s all ease-in-out .4s 
  .back
    transition .2s all ease-in-out .2s 
.fade-page-header-leave-active
  transition .3s all ease-in-out .4s 
  .inner-content
    transition .3s all ease-in-out .2s 
  .back
    transition .2s all ease-in-out 0s 
.fade-page-header-enter-to, .fade-page-header-leave
  .inner-content
    transform translateY(0)
    opacity 1
  .back
    opacity 1
    transform translateX(0)
.fade-page-header-enter
  .inner-content
    transform translateY(-20%)
    opacity 0
  .back
    opacity 0
    transform translateX(-100%)
.fade-page-header-leave-to
  .inner-content
    transform translateY(20%)
    opacity 0
  .back
    opacity 0
    transform translateX(-100%)
</style>


