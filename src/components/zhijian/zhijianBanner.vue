<template>
    <parallax-container class="zhijian-banner">
        <div class="banner-content">
            <!-- 主图形 -->
            <div class="banner-content-img">
            <parallax-element :parallaxStrength="40" :type="'rotation'">
              <img class="banner" :src="this.bannerSrc" alt="">
              <img class="banner-loader" src="@/assets/zhijian/动画文件2.gif" alt="" style="display:none;">
            </parallax-element>
            </div>
            <!-- 两个方块 -->
            <div class="block-content">
              <parallax-element :parallaxStrength="-15" :type="'translation'">
              <div class="block block-1"></div>
              </parallax-element>
              <parallax-element :parallaxStrength="25" :type="'translation'">
              <div class="block block-2"></div>
              </parallax-element>
            </div>
            <!-- 两个圈 -->
            <parallax-element class="text-container" :parallaxStrength="10" :type="'depth'">
              <div class="circle" id="circle-inner"><img src="@/assets/zhijian/line.svg" alt=""></div>
            </parallax-element>
            <parallax-element class="text-container" :parallaxStrength="-20" :type="'depth'">
              <div class="circle" id="circle-outer"><img src="@/assets/zhijian/line2.svg" alt=""></div>
            </parallax-element>
            <div class="circle" id="circle-tri"><div class="tri"></div></div>
        </div>
        <!-- 背景 -->
        <div class="bg-grid">
            <div class="dot dot-1"></div>
            <div class="dot dot-2"></div>
            <div class="num num-0">{{number[0]}}</div>
            <div class="num num-1">{{number[1]}}</div>
            <div class="num num-2">{{number[2]}}</div>
            <div class="num num-3">{{number[3]}}</div>
        </div>
    </parallax-container>
</template>

<script>
export default {
    data(){
        return {
            number: [],
            bannerSrc: ''
        }
    },
    mounted() {
    setTimeout(()=>{this.returnNumber()},10);
    setTimeout(()=>{this.showBanner()},400);
    setTimeout(()=>{this.changeBanner()},1600);
    },
    methods: {
        showBanner() {
            this.bannerSrc = require('@/assets/zhijian/动画文件.gif')
        },
        changeBanner() {
            this.bannerSrc = require('@/assets/zhijian/动画文件2.gif')
        },
        returnNumber() {
            const max = 2000000
            const min = 0
            let i = (Math.floor(Math.random() * (max - min)) + min).toString(2)
            let j = (Math.floor(Math.random() * (max - min)) + min).toString(2)
            let k = (Math.floor(Math.random() * (max - min)) + min).toString(2)
            let l = (Math.floor(Math.random() * (max - min)) + min).toString(2)
            this.number = [i, j, k, l]
            setTimeout(()=>{this.returnNumber()},100);
        }
    }
}
</script>


<style lang="stylus">
.banner-content-img
  z-index 100
  width 100%
  height 100%
  position absolute
  top 0
  left 0
.parallax-element
  width 100%
  height 100%
  position absolute
  top 0
  left 0
.zhijian-banner
  width 100%
  height 100%
  background-color #2E36E6
  position relative
  z-index 1
  overflow hidden
  // banner 前景
  .banner-content
    z-index 10
    width 60%
    height 100%
    position relative
    // 方块
    .block-content
      top 50%
      left 50% 
      transform translate(-50%, -50%)  
      position absolute  
      z-index 1
      width 400px
      height 400px
    .block
      display block
      &.block-1
        width 140px
        height 140px
        background-color #ffffff
        position absolute
        top 20px
        left 20px
        opacity 0
        animation scale-in-2 .6s ease-in-out .8s forwards
      &.block-2
        width 220px
        height 220px
        background-color #7278ef
        position absolute
        bottom -10px
        right -20px
        opacity 0
        animation scale-in-2 .4s ease-in-out .85s forwards
    // 图片
    img.banner, .circle
      width 780px
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      img 
        width 100%
    img.banner
      z-index 100
    // 圈圈
    .circle
      z-index -2
    .circle#circle-inner
      width 450px
      height 450px
      opacity .6
      img
        opacity 0
        animation rotate 40s linear infinite 1.6s, scale-in .8s ease-in-out .8s
    .circle#circle-outer
      width 600px
      height 600px
      opacity .4
      img
        opacity 0
        animation anti-rotate 160s linear infinite 1.8s, scale-in 1s ease-in-out .8s
    .circle#circle-tri
      width 500px
      height 500px
      position relative
      .tri
        width 100%
        height 100%
        position relative
        opacity 0
        animation rotate 80s linear infinite 2.2s, scale-in 1s ease-in-out 1.2s
        &:before, &:after
          content ''
          width 0px
          height 0px
          border-left 10px solid transparent
          border-right 10px solid transparent
          border-bottom 20px solid #fff
          display block
          position absolute
          opacity .2
        &:before
          top 0
          left 0
          transform rotate(135deg)
        &:after
          right 0
          bottom 0
          transform rotate(-45deg)
  // banner 背景
  .bg-grid
    width 100%
    height 100%
    z-index 1
    position absolute
    top 0
    left 0
    background linear-gradient(90deg,rgba(255,255,255,.05) 1%,transparent 0),
              linear-gradient(rgba(255,255,255,.05) 1%,transparent 0)
    background-size 80px 80px
    .dot
      width 6px
      height 6px
      background-color #ffffff
      border-radius 100px
      position absolute
      &.dot-1
        left 237.25px
        top 157.25px
      &.dot-2
        left 717.25px
        top 557.25px
    // 数字
    .num
      z-index 1
      font-size 16px
      color #fff
      position absolute
      font-family 'DIN Alternate','Arial',sans-serif
      opacity .4
      &.num-0
        font-size 12px
        left 120px
        top 180px
        animation right-num-in 1.2s linear forwards
      &.num-1
        left 50%
        top 80%
        font-size 24px
        opacity .1
        animation left-num-in 1.2s linear forwards
      &.num-2
        right 40%
        top 120px
        animation left-num-in 1.2s linear forwards
      &.num-3
        left 49%
        top 85%
        font-size 12px
        opacity .4
        animation right-num-in 1.2s linear forwards
// 动画

@keyframes rotate 
  0%
    transform rotate(0)
    opacity 1
  100%
    transform rotate(360deg)
    opacity 1

@keyframes anti-rotate 
  0%
    transform rotate(0)
    opacity 1
  100%
    transform rotate(-360deg)
    opacity 1

@keyframes scale-in
  0%
    transform scale(1.2) 
    opacity 0
  100%
    transform scale(1) 
    opacity 1

@keyframes scale-in-2
  0%
    transform scale(0) 
    opacity 0
  100%
    transform scale(1) 
    opacity 1

@keyframes left-num-in
  0%
    transform translateX(40px)
    opacity 0
  100%
    transform translateX(0px)

@keyframes right-num-in
  0%
    transform translateX(-40px)
    opacity 0
  100%
    transform translateX(0px)
</style>

