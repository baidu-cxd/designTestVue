<template>
    <div class="diaochawenjuan">
        <!-- 调查问卷的图形部分 -->
        <div class="icon">
            <img src="@/assets/dxwj/icon.png" alt="">
        </div>
        <!-- 调查问卷的描述文案部分 -->
        <div class="text-content">
            <div class="text-bg">
                <span class="text" style="animation-delay:0ms;">新</span>
                <span class="text" style="animation-delay:100ms;">版</span>
                <span class="text" style="animation-delay:200ms;">小</span>
                <span class="text" style="animation-delay:300ms;">调</span>
                <span class="text" style="animation-delay:400ms;">查</span>
            </div>
        </div>
    </div>
</template>

<style lang="stylus">
$ease = cubic-bezier(1, 0, 0, 1)
$ease-soft = cubic-bezier(0.77, 0, 0.175, 1)
// 调查问卷组件定位代码
.diaochawenjuan
  position fixed
  right (48 - 140)px
  bottom 48px
  width (47 + 140)px
  height 42px
  transition .4s all $ease-soft 100ms
  &:before // 防止 hover bug
    content ""
    position absolute
    top -10px
    right -10px
    left -10px
    bottom -10px
    z-index -1
  &:hover
    cursor pointer
// 调查问卷icon部分代码
.diaochawenjuan.icon
  position relative
  top 0
  left 0
  z-index 2
  width 47px
  height 42px
  img
    width 100%
// 调查问卷描述文案部分代码
.text-content  // mask层
  position absolute
  top 4px
  left 20px
  width 120px
  height 32px
  overflow hidden
.text-bg // 文字的背景层
  width 120px
  box-sizing border-box
  padding-left 32px
  height 28px
  background-color #fff
  border-radius 100px
  transform translateX(-100%)
  transition .6s all $ease-soft .20ms
  box-shadow 0 2px 3px rgba(36,104,242,.1)
// 文字样式
.text
  font-size 15px
  line-height 16px
  line-height 28px
  color #2468f2
  animation text-color 1.5s $ease-soft 
  animation-iteration-count 3
// 控制代码: hover 出现描述文本
.diaochawenjuan:hover 
  transition .4s all $ease 
  transform translateX(-120px)
  .text-content 
    .text-bg
      transform translateX(0)
      transition .4s all $ease 160ms
// 控制代码: 首次打开网页的时候播放一次动画
.diaochawenjuan
  animation icon-move 5s $ease
  .text-content 
    .text-bg
      animation text-move 5s $ease
@keyframes icon-move
  0%
    transform translateX(0px)
  20%
    transform translateX(-120px)
  80%
    transform translateX(-120px)
  100%
    transform translateX(0px)
@keyframes text-move
  0%
    transform translateX(-100%)
  20%
    transform translateX(0)
  80%
    transform translateX(0)
  100%
    transform translateX(-100%)
@keyframes text-color
  0%
    color #2468f2
  50%
    color #A7B0C2
  100%
    color #A7B0C2
</style>