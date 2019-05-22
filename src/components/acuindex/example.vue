<template>
    <div class="example">
      <!-- 页面结构 -->
      <div class="example-content">
        <!-- 左侧 -->
        <div class="left">
          <!-- 标题 -->
          <div class="title">
            <transition name="fade-scroll">
              <h2 :key="recent">{{items[recent].text}}</h2>
            </transition>
          </div>
          <!-- 详细文字 -->
          <div class="text">
            <div class="text-content line-1">
              <transition name="fade-scroll">
                <p :key="recent" class="line-1">{{items[recent].detail[0]}}</p>
              </transition>
            </div>
            <div class="text-content line-2">
              <transition name="fade-scroll">
                <p :key="recent" class="line-1">{{items[recent].detail[1]}}</p>
              </transition>
            </div>
            <div class="text-content line-3">
              <transition name="fade-scroll">
                <p :key="recent" class="line-1">{{items[recent].detail[2]}}</p>
              </transition>
            </div>
          </div>
          <!-- 特性功能 -->
          <div class="feature">
              <!-- 第一行 -->
              <div class="line">
                <div class="icon-content">
                <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                  viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve">
                    <path id="i1" style="stroke: rgba(0, 0, 0, 0); fill: rgba(0, 0, 0, 0);" stroke-miterlimit="10" d="M16.1,4.6c-1-0.4-2-0.6-3.1-0.6c-5,0-9,4-9,9s4,9,9,9s9-4,9-9c0-0.6,0-1.1-0.1-1.7"/>
                    <polyline id="i2" style="stroke: rgba(0, 0, 0, 0); fill: rgba(0, 0, 0, 0);" stroke-miterlimit="10" points="8,11.3 12.6,15.7 21,7.7 "/>
                </svg>
                </div>
                <div class="text-content">
                    <transition name="fade-scroll">
                        <p :key="recent" class="line-1">最大程度方便平台创作者“又快又好”上传视频，并以最快速度通过审核</p>
                    </transition>
                </div>
              </div>
              <!-- 第二行 -->
              <div class="line">
                <div class="icon-content">
                <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                  viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve">
                    <path id="i3" style="stroke: rgba(0, 0, 0, 0); fill: rgba(0, 0, 0, 0);" stroke-miterlimit="10" d="M16.1,4.6c-1-0.4-2-0.6-3.1-0.6c-5,0-9,4-9,9s4,9,9,9s9-4,9-9c0-0.6,0-1.1-0.1-1.7"/>
                    <polyline id="i4" style="stroke: rgba(0, 0, 0, 0); fill: rgba(0, 0, 0, 0);" stroke-miterlimit="10" points="8,11.3 12.6,15.7 21,7.7 "/>
                </svg>
                </div>
                <div class="text-content">
                    <transition name="fade-scroll">
                        <p :key="recent" class="line-1">采用百度智能的HTTPDNS显著降低了被劫持的问题</p>
                    </transition>
                </div>
              </div>
              <!-- 第三行 -->
              <div class="line">
                <div class="icon-content">
                <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                  viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve">
                    <path id="i5" style="stroke: rgba(0, 0, 0, 0); fill: rgba(0, 0, 0, 0);" stroke-miterlimit="10" d="M16.1,4.6c-1-0.4-2-0.6-3.1-0.6c-5,0-9,4-9,9s4,9,9,9s9-4,9-9c0-0.6,0-1.1-0.1-1.7"/>
                    <polyline id="i6" style="stroke: rgba(0, 0, 0, 0); fill: rgba(0, 0, 0, 0);" stroke-miterlimit="10" points="8,11.3 12.6,15.7 21,7.7 "/>
                </svg>
                </div>
                <div class="text-content">
                    <transition name="fade-scroll">
                        <p :key="recent" class="line-1">节省全民小视频成本，优化用户体验</p>
                    </transition>
                </div>
              </div>
          </div>
          <!-- 相关产品 -->
          <div class="about">
            <h3>相关产品</h3>
            <transition-group tag='div' class="product-content" name="fade-scroll">
              <div v-for="item in items[recent].products" :key="item.text + recent" class="product-item">
                <img :src="item.img" alt="">
                <p class="name">{{item.text}}</p>
              </div>
            </transition-group>
          </div>
        </div>
        <!-- 右侧 -->
        <div class="right">
          <div v-for="(item,i) in items" :key="i" 
            :class="['card-content' , recent === i ? 'recent':'']"
            :style='resolveDelay(i)'
            @click="changeRecent(i)">
            <div class="card">
              <img :src="item.img" alt="">
              <div class="bg"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 贴图 -->
      <img src="@/assets/acu-index/example.png" alt="" class="test">
      <!-- 背景圆 -->
      <img src="@/assets/acu-index/circle1.png" alt="" class="circle circle-1" :style="resolveStyle(1)">
      <img src="@/assets/acu-index/circle2.png" alt="" class="circle circle-2" :style="resolveStyle(2)">
      <img src="@/assets/acu-index/circle3.png" alt="" class="circle circle-3" :style="resolveStyle(3)">
      <img src="@/assets/acu-index/circle4.png" alt="" class="circle circle-4" :style="resolveStyle(4)">
    </div>
</template>

<style lang="stylus">
@keyframes show 
  0%
    transform translateY(0px) scale(1.1)
    opacity 0
  100%
    transform translateY(0px) scale(1)
    opacity 1
.section-5-all-2 .example .example-content .left 
  .about
    transform translateY(0)
    opacity 1 
.section-5-all .example .example-content .left 
  .feature .line .text-content
    transform translateY(0)
    opacity 1 
.section-5 .example .example-content .right .card-content
  animation show .3s ease-in-out forwards
.section-5 .example .example-content .left
  transform translateY(0)
  opacity 1
.example
  width 100%
  height 700px 
  overflow hidden
  position relative
  .example-content
    width 1280px
    margin 90px auto
    position relative
    z-index 10
    height 512px
    // background-color #000
    .left
      opacity 0
      transition .4s all ease-in-out
      transform translateY(20px)
      width 620px
      height 100%
      //background-color red
      position absolute
      left 0
      top 0
      .title
        position absolute
        top 20px
        left 0
        height 48px
        overflow hidden
        h2
          margin 0
          font-size 28px
          line-height 48px
          color #2D2E33
          font-weight 500
      .text
        position absolute
        top 90px
        left 0
        .text-content
          width 560px
          height 26px
          overflow hidden
          p
            font-size 14px
            line-height 26px
            color #7C7F8C
            margin 0
      .feature
        position absolute
        top 226px
        width 560px
        .line
          width 560px
          margin-bottom 10px
          height 26px
          position relative
          .icon-content
            width 26px
            height 26px
            position absolute
            left 0
            top 0
          .text-content
            position absolute
            top 0
            height 26px
            width 800px
            left 40px
            overflow hidden
            transition .4s all ease-in-out 
            transform translateY(10px)
            opacity 0
            p
              margin 0
              font-size 14px
              line-height 26px
              color #7C7F8C
      .about
        transition .2s all ease-in-out
        transform translateY(20px)
        opacity 0
        position absolute
        top 388px
        left 0
        width 100%
        height 80px
        overflow hidden
        h3
          font-size 12px
          line-height 30px
          color #8F929D
          font-weight 400
        .product-content
          height 30px
          background-color transparent
          .product-item
            float left 
            margin-right 50px
            &:hover
              cursor pointer
              img 
                opacity 1
              p
                opacity 1
            img 
              width 16px
              float left 
              margin 7px 10px 0 0
              opacity .5
              transition .2s all ease-in-out
            p
              font-size 16px
              line-height 30px
              float left 
              margin 0
              color #2D2E33
              opacity .9
              transition .2s all ease-in-out

    .right
      width 648px
      height 100%
      // background-color blue
      position absolute
      right -16px
      top -8px
      .card-content
        opacity 0
        &.recent
          .card img
            filter grayscale(0%)
        .card
          width 184px
          height 100px
          margin 16px
          float left
          background-color #fff
          position relative
          transition .3s all ease-in-out
          border-radius 4px
        &:hover
          .card
            transform translateY(-6px)
          cursor pointer
          img
            filter grayscale(0%)
          .bg
            box-shadow 0 15px 20px rgba(80,100,140,.1), 0 4px 10px rgba(80,100,140,.1)
          .text
            opacity .6
            transition-delay .1s
        img 
          position absolute
          top 50%
          left 50%
          transform translate(-50%,-50%) scale(.5)
          filter grayscale(100%)
          transition .2s all ease-in-out
          z-index 2
        .bg
          position absolute
          background-color #fff
          top 0
          left 0
          box-shadow 0 4px 10px rgba(0,0,0,.05)
          border-radius 4px
          transition .2s all ease-in-out
          width 184px
          height 100px
          z-index 1
          
.example
  .test
    width 1287px
    margin 90px auto
    display block
    position absolute
    top -10px
    left 51%
    transform translateX(-50%)
    z-index 100
    display none
  .circle 
    position absolute
  .circle-1
    width 563px
    left -39px
    bottom -175px
  .circle-2
    width 674px
    right -72px
    top 128px
  .circle-3
    width 526px
    top -230px
    right 390px
  .circle-4
    width 674px
    top -199px
    right 49px

.fade-scroll-enter-active
  transition .2s all linear .2s
.fade-scroll-leave-active
  transition .2s all linear  
.fade-scroll-enter-to, .fade-scroll-leave
  transform translateY(0)
  opacity 1
.fade-scroll-enter
  transform translateY(50%)
  opacity 0
.fade-scroll-leave-to
  transform translateY(-50%)
  opacity 0
</style>

<script>
export default {
  data() {
    return {
      items : [
        {
          img : require('@/assets/acu-index/logo1.png'),
          text : '手机百度',
          detail : [
            '基于百度智能云丰富类型的基础云产品，打通网站流量与价值变现闭环，提供从域名/DNS',
            '服务、网站设计开发、网站部署发布、ICP备案，到网站运维、网站优化、推广与变现等全',
            '栈服务，让您的网站收录更快、运行更稳定'
          ],
          products : [
            {
              img: require('@/assets/acu-index/icon-four-1.png'),
              text: '语音识别'
            },
            {
              img: require('@/assets/acu-index/icon-four-2.png'),
              text: '人脸识别'
            },
            {
              img: require('@/assets/acu-index/icon-four-3.png'),
              text: '百度机器学习'
            },
            {
              img: require('@/assets/acu-index/icon-four-4.png'),
              text: '图像审核'
            },
          ]
        },
        {
          img : require('@/assets/acu-index/logo11.png'),
          text : '百度',
          detail : [
            '基于百度智能云丰富类型的基础云产品，打通网站流量与价值变现闭环，提供从域名/DNS',
            '服务、网站设计开发、网站部署发布、ICP备案，到网站运维、网站优化、推广与变现等全',
            '栈服务，让您的网站收录更快、运行更稳定'
          ],
          products : [
            {
              img: require('@/assets/acu-index/icon-four-1.png'),
              text: '识别语音1'
            },
            {
              img: require('@/assets/acu-index/icon-four-2.png'),
              text: '人脸识别1'
            },
            {
              img: require('@/assets/acu-index/icon-four-3.png'),
              text: '机器学习1'
            },
            {
              img: require('@/assets/acu-index/icon-four-4.png'),
              text: '图像审核1'
            },
          ]
        },
        {
          img : require('@/assets/acu-index/logo10.png'),
          text : '百度',
          detail : [
            '基于百度智能云丰富类型的基础云产品，打通网站流量与价值变现闭环，提供从域名/DNS',
            '服务、网站设计开发、网站部署发布、ICP备案，到网站运维、网站优化、推广与变现等全',
            '栈服务，让您的网站收录更快、运行更稳定'
          ],
          products : [
            {
              img: require('@/assets/acu-index/icon-four-1.png'),
              text: '语音识别2'
            },
            {
              img: require('@/assets/acu-index/icon-four-2.png'),
              text: '人脸识别2'
            },
            {
              img: require('@/assets/acu-index/icon-four-3.png'),
              text: '百度机器学习2'
            },
            {
              img: require('@/assets/acu-index/icon-four-4.png'),
              text: '图像审核2'
            },
          ]
        },
        {
          img : require('@/assets/acu-index/logo9.png'),
          text : '百度',
          detail : [
            '基于百度智能云丰富类型的基础云产品，打通网站流量与价值变现闭环，提供从域名/DNS',
            '服务、网站设计开发、网站部署发布、ICP备案，到网站运维、网站优化、推广与变现等全',
            '栈服务，让您的网站收录更快、运行更稳定'
          ]
        },
        {
          img : require('@/assets/acu-index/logo8.png'),
          text : '百度',
          detail : [
            '基于百度智能云丰富类型的基础云产品，打通网站流量与价值变现闭环，提供从域名/DNS',
            '服务、网站设计开发、网站部署发布、ICP备案，到网站运维、网站优化、推广与变现等全',
            '栈服务，让您的网站收录更快、运行更稳定'
          ]
        },
        {
          img : require('@/assets/acu-index/logo7.png'),
          text : '百度',
          detail : [
            '基于百度智能云丰富类型的基础云产品，打通网站流量与价值变现闭环，提供从域名/DNS',
            '服务、网站设计开发、网站部署发布、ICP备案，到网站运维、网站优化、推广与变现等全',
            '栈服务，让您的网站收录更快、运行更稳定'
          ]
        },
        {
          img : require('@/assets/acu-index/logo6.png'),
          text : '百度',
          detail : [
            '基于百度智能云丰富类型的基础云产品，打通网站流量与价值变现闭环，提供从域名/DNS',
            '服务、网站设计开发、网站部署发布、ICP备案，到网站运维、网站优化、推广与变现等全',
            '栈服务，让您的网站收录更快、运行更稳定'
          ]
        },
        {
          img : require('@/assets/acu-index/logo5.png'),
          text : '百度',
          detail : [
            '基于百度智能云丰富类型的基础云产品，打通网站流量与价值变现闭环，提供从域名/DNS',
            '服务、网站设计开发、网站部署发布、ICP备案，到网站运维、网站优化、推广与变现等全',
            '栈服务，让您的网站收录更快、运行更稳定'
          ]
        },
        {
          img : require('@/assets/acu-index/logo4.png'),
          text : '百度',
          detail : [
            '基于百度智能云丰富类型的基础云产品，打通网站流量与价值变现闭环，提供从域名/DNS',
            '服务、网站设计开发、网站部署发布、ICP备案，到网站运维、网站优化、推广与变现等全',
            '栈服务，让您的网站收录更快、运行更稳定'
          ]
        },
        {
          img : require('@/assets/acu-index/logo12.png'),
          text : '百度',
          detail : [
            '基于百度智能云丰富类型的基础云产品，打通网站流量与价值变现闭环，提供从域名/DNS',
            '服务、网站设计开发、网站部署发布、ICP备案，到网站运维、网站优化、推广与变现等全',
            '栈服务，让您的网站收录更快、运行更稳定'
          ]
        },
        {
          img : require('@/assets/acu-index/logo2.png'),
          text : '百度',
          detail : [
            '基于百度智能云丰富类型的基础云产品，打通网站流量与价值变现闭环，提供从域名/DNS',
            '服务、网站设计开发、网站部署发布、ICP备案，到网站运维、网站优化、推广与变现等全',
            '栈服务，让您的网站收录更快、运行更稳定'
          ]
        },
        {
          img : require('@/assets/acu-index/logo3.png'),
          text : '百度',
          detail : [
            '基于百度智能云丰富类型的基础云产品，打通网站流量与价值变现闭环，提供从域名/DNS',
            '服务、网站设计开发、网站部署发布、ICP备案，到网站运维、网站优化、推广与变现等全',
            '栈服务，让您的网站收录更快、运行更稳定'
          ]
        },
      ],
      recent: 0
    }
  },
  props:['scroll'],
  methods: {
    changeRecent(i) {
      this.recent = i
      setTimeout(()=>{this.clearIt('i1')},100);
      setTimeout(()=>{this.clearIt('i2')},100);
      setTimeout(()=>{this.clearIt('i3')},100);
      setTimeout(()=>{this.clearIt('i4')},100);
      setTimeout(()=>{this.clearIt('i5')},100);
      setTimeout(()=>{this.clearIt('i6')},100);
      setTimeout(()=>{this.animateIt('i1')},300);
      setTimeout(()=>{this.animateIt('i2')},600);
      setTimeout(()=>{this.animateIt('i3')},300);
      setTimeout(()=>{this.animateIt('i4')},600);
      setTimeout(()=>{this.animateIt('i5')},300);
      setTimeout(()=>{this.animateIt('i6')},600);
    },
    resolveDelay(i){
      const mo = Math.floor(i/3)
      const yu = i % 3
      return 'animation-delay:' +( mo * 100 + yu * 50)+ 'ms'
    },
    resolveStyle(i){
      let y,x
      if(i === 1) {
        y =  -((this.scroll - 3000)/1.2)
        x =  ((this.scroll - 3000)/1.2)
      }
      if(i === 2) {
        y =  ((this.scroll - 3000)/2)
        x =  -((this.scroll - 3000)/1.2)
      }
      if(i === 3) {
        y =  ((this.scroll - 3000)/0.9)
        x =  ((this.scroll - 3000)/2)
      }
      if(i === 4) {
        y =  -((this.scroll - 3000)/2)
        x =  -((this.scroll - 3000)/3)
      }
      if (2700 < this.scroll) {
        setTimeout(()=>{this.animateIt('i1')},250);
        setTimeout(()=>{this.animateIt('i2')},50);
        setTimeout(()=>{this.animateIt('i3')},250);
        setTimeout(()=>{this.animateIt('i4')},50);
        setTimeout(()=>{this.animateIt('i5')},250);
        setTimeout(()=>{this.animateIt('i6')},50);
      }
      if ( 2500 < this.scroll ) {
        return "transform: translate(" + x +"px, " + y + "px)"
      } 
    },
    animateIt(elementId) {
        var elem = document.getElementById(elementId)
        // elem.style.strokeLinecap="round"
        elem.style.stroke = "#2468F2"
        elem.style.fill = "rgba(0,0,0,0)"
        elem.style.strokeMiterlimit="10"
        elem.style.strokeWidth = "1.5"
        var length = elem.getTotalLength()
        elem.style.strokeDasharray = `0 ${length} ${length} 0`
        elem.style.transition = 'stroke-dashoffset .4s'
        elem.style.strokeDashoffset = -length
    },
    clearIt(elementId) {
        var elem = document.getElementById(elementId)
        elem.style.transition = 'stroke-dashoffset .0001s'
        elem.style.strokeDashoffset = 0
    }
  }
}
</script>

