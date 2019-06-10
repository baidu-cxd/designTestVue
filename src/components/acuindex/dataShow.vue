<template>
  <div class="data-show">
      <div class="bg-img">
        <img src="@/assets/acu-index/data-bg@2x.png" alt="" :style="resolveStyle()">
        {{watch}}
      </div>
      <div class="text-wrp">
        <!-- 第一组数据 -->
        <div class="text-content content1">
          <div class="number">
            <div class="number-wrp" v-for="(number,i) in numbers1" :key="i" :style="'left:' + i * 16 + 'px' ">
              <span  v-if="typeof(number) ===  'number'" 
                :style="'top:-' + number * 32 + 'px; transition-delay:' + i * 20 + 'ms;'">
                0<br/>1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9</span>
              <span v-else>{{number}}</span>
            </div>
          </div>
          <div class='line'></div>
          <p class="text">抵御攻击</p>
        </div>
        <!-- 第二组数据 -->
        <div class="text-content content2">
          <div class="number">
            <div class="number-wrp" v-for="(number,i) in numbers2" :key="i" :style="'left:' + i * 16 + 'px' ">
              <span  v-if="typeof(number) ===  'number'" 
                :style="'top:-' + number * 32 + 'px; transition-delay:' + i * 20 + 'ms;'">
                0<br/>1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9</span>
              <span v-else>{{number}}</span>
            </div>
          </div>
          <div class='line'></div>
          <p class="text">数据可靠性</p>
        </div>
        <!-- 第三组数据 -->
        <div class="text-content content3">
          <div class="number">
            <div class="number-wrp" v-for="(number,i) in numbers3" :key="i" :style="'left:' + i * 21 + 'px' ">
              <span  v-if="typeof(number) ===  'number'" 
                :style="'top:-' + number * 32 + 'px; transition-delay:' + i * 100 + 'ms;'">
                0<br/>1<br/>3<br/>2<br/>1<br/>5<br/>6<br/>7<br/>8<br/>1</span>
              <span v-else>{{number}}</span>
            </div>
          </div>
          <div class='line'></div>
          <p class="text">大客户专享</p>
        </div>
        <!-- 第四组数据 -->
        <div class="text-content content3">
          <div class="number">
            <div class="number-wrp" v-for="(number,i) in numbers4" :key="i" :style="resolveStyleNumber(i)">
              <span  v-if="typeof(number) ===  'number'" 
                :style="'top:-' + number * 32 + 'px; transition-delay:' + i * 50 + 'ms;'">
                0<br/>1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9</span>
              <span v-else>{{number}}</span>
            </div>
          </div>
          <div class='line'></div>
          <p class="text">客户服务支持</p>
        </div>
      </div>
  </div>
</template>

<style lang="stylus">
.section-6 
  .data-show
    .text-content 
      .line
        opacity 1
        transform scaleX(1)
      p.text
        opacity 1
        transform translateY(0)
.data-show
  background-color #2468f2
  height 184px
  overflow hidden
  position relative
  .bg-img
    position absolute
    top 0
    left 50%
    transform translateX(-50%)
    width 1920px
    img 
      width 100%
      position absolute
      bottom -184px
      transition .6s all  ease-out 
  .text-wrp
    margin 50px auto 
    clear both
    height 82px
    width 1300px
  .text-content 
    .number-wrp
      display block
      overflow hidden
      width 18px
      height 32px
      position absolute
    .number
      display block 
      height 32px
      width 100%
      overflow hidden
      span
        font-family 'DIN Alternate'
        font-size 32px
        line-height 32px
        color #fff
        position relative
        transition .8s all ease-in-out
    &.content1
      width 180px
    &.content2
      width 160px
    &.content3
      .number
        span 
          transition .4s all ease-in-out
    &.content4
      .plus img 
        width 14px
        margin 2px 8px
    position relative
    float left
    margin 0 100px
    p
      color #fff
      margin 0
    p.number
      font-family 'DIN Alternate'
      font-size 32px
      line-height 32px
    .line
      width 30px
      height 3px
      background-color #fff
      margin 16px 0 20px
      opacity 0
      transform scaleX(0)
      transition .4s all ease-in-out .2s
      transform-origin 0%
    p.text
      font-size 14px
      line-height 14px
      position absolute
      left 0
      width 100px
      transform translateY(20px)
      opacity 0
      transition .4s all ease-in-out .2s
</style>

<script>
import { setTimeout } from 'timers';
export default {
  props:['scroll'],
  data() {
    return {
      numbers1: [0,0,0,',',0,0,0,',',0,0,0],
      numbers2: [0,0,'.',0,0,0,0,0,0,'%'],
      numbers3: [0,'v',0],
      numbers4: [0,'×',0,0],
    } 
  },
  computed: {
    watch() {
      if (this.scroll > 3200) {
       this.numbers1= [5,7,9,',',3,0,0,',',2,8,6]
       this.numbers2= [9,9,'.',9,9,9,9,9,9,'%']
       this.numbers3= [4, 'v', 4]
       this.numbers4= [7,'×',2,4]
      } else {
       this.numbers1= [0,0,0,',',0,0,0,',',0,0,0]
       this.numbers2= [0,0,'.',0,0,0,0,0,0,'%']
       this.numbers3= [0, 'v', 0]
       this.numbers4= [0,'×',0,0]        
      }
    }
  },
  methods: {
    resolveStyle(){
      if (this.scroll > 3100 && this.scroll < 4000) {
        const px = (this.scroll - 3100) * 0.25
        return "transform: translateY(" + px +"px)"
      } else {
        return "transform: translateY(0px)"
      }
    },
    resolveStyleNumber(i) {
      if (i ===0) {
        return 'left: 0px'
      } 
      if (i ===1) {
        return 'left: 18px'
      } 
      if (i ===2) {
        return 'left: 40px'
      } 
      if (i ===3) {
        return 'left: 58px'
      } 
    },
  }
}
</script>


