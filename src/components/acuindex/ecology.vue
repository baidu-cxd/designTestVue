<template>
    <div class="ecology">
      <img src="@/assets/acu-index/bgbgb.png" alt="" class="bg">
      <div class="content">
        <div class="line">
          <h2>{{write}}{{title1}}</h2><div class="target" :style="typeWriter === 1 ? 'opacity : 1':'opacity : 0;animation: none'"></div>
        </div>
        <div class="line line-2">
          <h2>{{title2}}</h2><div class="target" :style="typeWriter === 2 ? 'opacity : 1':'opacity : 0;animation: none'"></div>
        </div>
        <div class="p-button-content">
          <p class="des">欢迎使用百度智能云，请填写下面的表单进行注册，开启你的上云之旅</p>
          <div class="button">快速注册</div>
        </div>
        <div class="card-content">
          <div class="card">
            <div class="card-content-inner">
              <img src="@/assets/acu-index/banner-1.png" alt="">
            </div>
          </div>
          <div class="card">
            <div class="card-content-inner">
              <img src="@/assets/acu-index/banner2.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data(){
    return {
      title1: '',
      title2: '',
      title1All: 'Hello，New Friend',
      title2All: '你好，新朋友！',
      typeWriter: 1
    }
  },
  props:['scroll'],
  computed:{
    write() {
      if(this.scroll>3900){
        if (this.title1.length === 0) {
          this.writeTitle1(this.title1.length)
        }
        return ''
      }
      else {
        return ''
      }
    }
  },
  methods:{
    writeTitle1(i) {
      if (i === 5) {
        this.title1 += this.title1All[i]
        setTimeout(()=>{this.writeTitle1(i+1)}, 400)
      } else if (i < this.title1All.length && this.title1.length == i && i !== 5){
        this.title1 += this.title1All[i]
        setTimeout(()=>{this.writeTitle1(i+1)}, 80)
      } else if (i = this.title1All.length) {
        setTimeout(()=>{this.typeWriter = 2}, 800)
        setTimeout(()=>{this.writeTitle2(this.title2.length)}, 800)
      }
    },
    writeTitle2(i) {
      if (i === 2) {
        this.title2 += this.title2All[i]
        setTimeout(()=>{this.writeTitle2(i+1)}, 400)
      }
      if (i < this.title2All.length && this.title2.length == i && i !== 2){
        this.title2 += this.title2All[i]
        setTimeout(()=>{this.writeTitle2(i+1)}, 160)
      }
    }
  }
}
</script>


<style lang="stylus">
.section-8
  .ecology 
    .content
      transform translateY(0px)
      opacity 1
      .card-content
        .card
          transform translateY(0px)scale(1)
          transition-delay 200ms
          opacity 1
          &:hover
            transition-delay 0
.ecology
  width 100%
  height 502px
  background-color #F6F8FB
  position relative
  overflow hidden
  .content
    opacity 0
    transform translateY(20px)
    transition .4s all ease-in-out
    position relative
    .card-content
      width 500px
      position absolute
      top 0
      right 0
      .card
        width 500px
        height 148px
        background-color #fff
        margin 0 0 20px 0
        border-radius 4px
        box-shadow 0 4px 10px rgba(0,0,0,.05)
        transition .2s all ease-in-out 0s
        opacity 0
        transform translateY(20px)scale(1.05)
        &:hover
          cursor pointer
          transform translateY(-0px) scale(1.03)
          transition .2s all ease-in-out 0s
        .card-content-inner
          width 100%
          height 100%
          border-radius 4px
          overflow hidden
          img 
            width 100%


  .p-button-content
    .button
      width 140px
      height 36px
      background-color #2468F2
      line-height 36px
      font-size 14px
      text-align center
      color #ffffff
      border-radius 100px
      transition .2s all ease-in-out 
      margin-top 30px
      position relative
      &:before
        contain ''
        display block
        position absolute
        width 100%
        height 48px
      &:hover
        cursor pointer
        transform translateY(-5px)
        box-shadow 0 5px 10px rgba(36,104,242,.2)

  .bg
    width 1470px
    position absolute
    top 0
    left -100px
    z-index 1
  .content
    position relative
    z-index 2
    width 1100px
    height 320px
    margin 90px auto
    // background-color #108cee
    .line
      overflow hidden
      height 50px
    .line-2 
      margin-top 12px
      h2
        font-size 40px
    h2
      float left
      margin 0
      font-size 50px
      line-height 50px
      font-family Din
      color #191C3D
    .target
      float left
      width 20px
      height 5px
      background-color #191C3D
      display inline-block
      margin-top 38px
      margin-left 4px
      animation target 1s infinite
    .des
      font-size 14px
      opacity .8
      line-height 26px
      color #191C3D
@keyframes target
  0%
    opacity 0
  100%
    opacity 1
</style>

