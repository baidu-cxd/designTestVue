<template>
    <div class="hero">
        <div class="bg">
            <div class="text"><img src="@/assets/cylm/text.png" alt=""></div>
            <!-- 第一个圈圈的动画 -->
            <div class="circle circle-1">
                <div class="point" :style="resolveStyleIconInCircle(320, 0, 180)"></div>
                <div class="point" :style="resolveStyleIconInCircle(320, -90, 180)"></div>
                <div class="icon" :style="resolveStyleIconInCircle(320, 0, 240)">
                    <div class="icon-inner">
                        <img src="@/assets/cylm/icon-1.png" alt="">
                    </div>
                </div>
                <div class="icon" :style="resolveStyleIconInCircle(320, 90, 240)">
                    <div class="icon-inner">
                        <img src="@/assets/cylm/icon-2.png" alt="">
                    </div>
                </div>
                <div class="icon" :style="resolveStyleIconInCircle(320, 180, 240)">
                    <div class="icon-inner">
                        <img src="@/assets/cylm/icon-3.png" alt="">
                    </div>
                </div>
                <div class="icon" :style="resolveStyleIconInCircle(320, 270, 240)">
                    <div class="icon-inner">
                        <img src="@/assets/cylm/icon-4.png" alt="">
                    </div>
                </div>
            </div>
            <!-- 第二个圈圈的动画 -->
            <div class="circle circle-2">
                <div class="point" :style="resolveStyleIconInCircle(470, 0, 80)"></div>
                <div class="icon" :style="resolveStyleIconInCircle(470, 0, 240)">
                    <div class="icon-inner">
                        <img src="@/assets/cylm/icon-5.png" alt="">
                    </div>
                </div>
                <div class="icon" :style="resolveStyleIconInCircle(470, 45, 240)">
                    <div class="icon-inner">
                        <img src="@/assets/cylm/icon-6.png" alt="">
                    </div>
                </div>
                <div class="icon" :style="resolveStyleIconInCircle(470, 90, 240)">
                    <div class="icon-inner">
                        <img src="@/assets/cylm/icon-4.png" alt="">
                    </div>
                </div>
                <div class="icon" :style="resolveStyleIconInCircle(470, 135, 240)">
                    <div class="icon-inner">
                        <img src="@/assets/cylm/icon-3.png" alt="">
                    </div>
                </div>
                <div class="icon" :style="resolveStyleIconInCircle(470, 225, 240)">
                    <div class="icon-inner">
                        <img src="@/assets/cylm/icon-1.png" alt="">
                    </div>
                </div>
                <div class="icon" :style="resolveStyleIconInCircle(470, 270, 240)">
                    <div class="icon-inner">
                        <img src="@/assets/cylm/icon-5.png" alt="">
                    </div>
                </div>
                <div class="icon" :style="resolveStyleIconInCircle(470, 315, 240)">
                    <div class="icon-inner">
                        <img src="@/assets/cylm/icon-4.png" alt="">
                    </div>
                </div>
            </div>
            <!-- 第三个圈圈的动画 -->
            <div class="circle circle-3">
                <div class="point" :style="resolveStyleIconInCircle(620, 0, 360)"></div>
                <div class="icon" :style="resolveStyleIconInCircle(620, 90, 360)">
                    <div class="icon-inner">
                        <img src="@/assets/cylm/icon-6.png" alt="">
                    </div>
                </div>
                <div class="icon" :style="resolveStyleIconInCircle(620, 180, 360)">
                    <div class="icon-inner">
                        <img src="@/assets/cylm/icon-5.png" alt="">
                    </div>
                </div>
                <div class="icon" :style="resolveStyleIconInCircle(620, 270, 360)">
                    <div class="icon-inner">
                        <img src="@/assets/cylm/icon-6.png" alt="">
                    </div>
                </div>
            </div>
            <div class="bgset bg-1"><img src="@/assets/cylm/bg1.png" alt=""></div>
            <div class="bgset bg-2"><img src="@/assets/cylm/bg1.png" alt=""></div>
            <div class="bgset bg-3"><img src="@/assets/cylm/bg2.png" alt=""></div>
            <div class="bgset bg-4"><img src="@/assets/cylm/bg2.png" alt=""></div>
            <div class="bgset bg-5"><img src="@/assets/cylm/bg-3.png" alt=""></div>
            <div class="bgset bg-6"><img src="@/assets/cylm/data-1.png" alt=""></div>
            <div class="bgset bg-7"><img src="@/assets/cylm/data-1.png" alt=""></div>
        </div>
    </div>
</template>


<script>
import { Transform } from 'stream';
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            time : 0
        }
    },
    mounted() {
        this.getTime()
    },
    methods: {
        getTime() {
            let myDate = new Date()
            this.time = myDate.getMinutes() * 60 + myDate.getSeconds() + (myDate.getMilliseconds() * 0.001)
            setTimeout(()=>{this.getTime()},1)
        },
        resolveStyleIconInCircle(r, deg, t) { // 半径，开始位置（角度），周期
            const left = r  *  Math.cos(Math.PI * (6 * this.time)/t + deg * Math.PI/180)
            const top = r * Math.sin(Math.PI * (6 * this.time)/t + deg * Math.PI/180)
            return 'transform: translate(' + left  + 'px, '+ - top + 'px' + ')'
        }
    }
}
</script>


<style lang="stylus">
.hero 
  width 100%
  height 480px
  background-color #F6F8FB
  overflow hidden
  position relative
  .bg
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    z-index 1
    .text
      position absolute
      left 50%
      top 160px
      transform translateX(-50%)
      img 
        width 353px
    .circle
      border-radius 1000px
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
      border 1px solid #CCD4E1
      z-index 2
      .point
        width 0
        height 0
        left 50%
        top 50%
        width 0px
        height 0px
        position absolute
        z-index 1
        &:before
          content ''
          width 9px
          height 9px
          background-color #D5DBE6
          position absolute 
          top -4px
          right -4px
          border-radius 9px
          transform 2s all linear 
      .icon
        position absolute
        left 50%
        top 50%
        width 0px
        height 0px
        z-index 2
        transform 2s all linear 
        .icon-inner
          width 56px
          height 56px
          box-sizing border-box
          border 1px solid #A4AFC0
          background-color #F2F4F8
          transform translate(-50%,-50%)
          position relative
          border-radius 10000px
          &:before, &:after
            content ''
            display block
            z-index -1
            width 54px
            height 54px
            border 1px solid #A4AFC0
            transform scale(1)
            position absolute
            top -1px
            right -1px
            border-radius 1000px
            animation wave 6s ease-in-out infinite
          &:after
            animation-delay 2s
          img 
            width 48px
            position absolute 
            left 50%
            top 50%
            transform translate(-50%,-50%)        
    .circle-1
      width 640px
      height 640px
    .circle-2
      width 940px
      height 940px
    .circle-3
      width 1240px
      height 1240px
    .bgset
      z-index 1
      position absolute
      top 0
      height 100%
      img 
        height 100%
    .bg-1
      left 0
    .bg-2
      right 0
      transform scaleX(-1)
    .bg-3
      width 46px
      height 46px
      top 380px
      left 40px
    .bg-4
      width 46px
      height 46px
      top 90px
      right 4480px
    .bg-5
      width 58px
      height 42px
      top 330px
      right 260px
    .bg-6
      width 90px
      height 12px
      top 140px
      left 160px
    .bg-7
      width 90px
      height 12px
      top auto
      bottom 120px
      right 100px


@keyframes wave 
  0%
    opacity .6
    transform scale(1) 
  100%
    opacity 0
    transform scale(1.8) 
</style>

