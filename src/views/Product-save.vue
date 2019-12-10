<template>
    <div class="product">
        <!-- 顶部导航组件 -->
        <div class="header">
            <img src="@/assets/product/header.png" alt="">
        </div>
        <!-- Banner组件 -->
        <div class="banner" @mousemove='updateXY' @mouseout='cleanXY' ref='banner'>
          <div class="banner-content">
            <!-- 左侧文本 -->
            <div class="text">
                <img src="@/assets/product/text.png" alt="">
            </div>
            <!-- 右侧banner -->
            <div class="banner-wrp">
                <div v-for="(item,i) in bannerImg" 
                  :style="resolveParallax(item)" 
                  :key="i" class="parallax-element">
                    <img :src="item.img" alt="" :style="'transform:translateZ('+(Math.abs(x/2) + Math.abs(y))*item.translateZ+'px)'">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { Transform } from 'stream';
export default {
    data() {
        return {
            x: 0,
            y: 0,
            bannerImg : [
                {
                     img: require("@/assets/product/banner1@2x.png"), // 云
                     indexZ: 0,
                     translateZ: -40,
                     value: 0.8,
                },
                {
                     img: require("@/assets/product/banner2@2x.png"), //服务器
                     indexZ: 3,
                     translateZ: 40,
                     value: 0.8,
                },
                {
                     img: require("@/assets/product/banner2-mask@2x.png"), //服务器投影
                     indexZ: 2,
                     translateZ: 28,
                     value: 0.8,
                },
                {
                     img: require("@/assets/product/banner2-over@2x.png"), //服务器外层
                     indexZ: 4,
                     translateZ: 60,
                     value: 0.8,
                },
                {
                     img: require("@/assets/product/banner3@2x.png"), //辅助元素 1
                     indexZ: 1,
                     translateZ: 20,
                     value: 0.8,
                },
                {
                     img: require("@/assets/product/banner4@2x.png"), //辅助元素
                     indexZ: 1,
                     translateZ: 20,
                     value: 0.2,
                },
            ]
        }
    },
    methods: {
        resolveParallax(item) {
            const rotateX = item.value * 40 * this.x
            const rotateY = item.value * 25 * this.y
            let style = 'z-index:' + item.indexZ + ';' + 'transform: rotateX('+rotateY+'deg) rotateY('+rotateX+'deg);'
            return style 
        },
        updateXY:function(event){
            const dataX=(event.clientX - (document.body.scrollWidth/2))/(document.body.scrollWidth/2)
            let object = this.$refs.banner;
            const dataY=-(event.offsetY - object.getBoundingClientRect().top - 120)/120
            this.x = Math.abs(dataX) < 0.8 ? dataX : dataX/Math.abs(dataX) 
            this.y = Math.abs(dataY) < 1? dataY : dataY/Math.abs(dataY) 
        },
        cleanXY() {
            this.x=0;
            this.y=0
        }
    }
}
</script>

<style lang="stylus">
//全局样式
.product
  background-color #F6F8FB
  height 100%
  min-width 1216px
//顶部导航样式
.product
  .header
    width 100%
    height 60px
    position fixed
    top 0
    left 0
    img 
      width 1600px
      position absolute
      left 50%
      transform translateX(-50%)
//banner 样式
.product .banner
  height 640px
  .banner-content
    margin auto 
    width 1216px
    height 480px
    position relative
  .text img
    width 560px
    margin 180px 0 0 0 
  .banner-wrp
    position absolute
    top 120px
    right 0
    width 480px
    height 320px
    perspectice-origin 50% 50%
    transform-style preserve-3d
    perspective 100000
    .parallax-element
      width 480px
      height 320px
      position absolute
      transform-style preserve-3d
      transition 0.8s all cubic-bezier(0.165, 0.84, 0.44, 1)
      img 
        transform-style preserve-3d
        transition 0.8s all cubic-bezier(0.165, 0.84, 0.44, 1) .50ms
    img 
      width 100%
      position absolute
      top 0
      left 0
</style>