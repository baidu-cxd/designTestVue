<template>
    <div class="solution">
        <h2>各类业务场景的全栈解决方案</h2>
        <!-- tab -->
        <div class="nav-tab">
          <p v-for="(item,i) in items" 
            :key="i" class="nav-item"
            :class="recent === i ? 'recent': ''"
            @click="changeRecent(i)">
              {{item.nav}}
          </p>
          <div class="under-line">
            <div class="recent" :style="resolveNavLine()"></div>
          </div>
        </div>
        <!-- 卡片 -->
        <div class="card-content">
          <!-- 左右切换 -->
          <div class="change pre" 
            :class="recent === 0 ? 'none' : '' "
            @click="changeRecent(recent - 1)">
            <img src="@/assets/acu-index/arr.png" alt="">
          </div>
          <div class="change next" 
            :class="recent === 5 ? 'none' : '' "
            @click="changeRecent(recent + 1)">
            <img src="@/assets/acu-index/arr.png" alt="">
          </div>
          <!-- 卡片项目 -->
          <div class="card" v-for="(item,i) in items" :key="i"
            :style="resolveCardPosition(i)">
            <div :class="['img-content', recent === i ? 'recent':'']">
              <div class="mask"></div>
              <img :src="item.img" alt="">
            </div>
            <div :class="['text-content', recent === i ? 'recent':'']">
              <h3>{{item.title}}</h3>
              <div class="button">查看详情</div>
              <p>{{item.text}}</p>
            </div>
          </div>
        </div>
        <!-- 走马灯指示器 -->
        <div class="tab-tag-content">
            <div v-for="(item,i) in items" 
              @click="changeRecent(i)"
              :key="i" :class="['tab-tag-item'  , recent === i ? 'recent':'']">
              <div class="line"></div>
            </div>
        </div>
    </div>
</template>


<style lang="stylus">
.section-4
  .solution
    h2, .nav-tab
      transform translateY(0px) scale(1)
      opacity 1
.section-4-all
  .solution
    .card-content
      transform translateY(0px) scale(1)
      opacity 1
.solution
  width 100%
  // background-color #505D73  
  background linear-gradient(#313957, #505B7B)
  overflow hidden
  position relative
  padding-bottom 80px
  h2
    opacity 0
    transition .2s all ease-in-out
    transform translateY(20px)
    color #ffffff
    font-weight normal
    margin 90px auto 30px
    font-size 30px
    line-height 48px
    text-align center
  .nav-tab
    opacity 0
    transition .2s all ease-in-out 
    transform translateY(20px)
    width 718px
    margin 30px auto 50px
    padding 0 25px
    overflow hidden
    .nav-item
      display block
      float left
      margin 0 25px
      color #fff
      font-size 16px
      line-height 30px
      opacity .6
      transition .2s all ease-in-out
      &:hover
        cursor pointer
        opacity 1
      &.recent
        opacity 1
    .under-line
      width 100%
      height 1px
      background-color rgba(255,255,255,.2)
      margin-top 50px
      position relative
      .recent
        height 2px
        min-width 10px
        background-color #fff
        position absolute
        top -1px
        left 0
        transition .2s all ease-in-out 
  .card-content
    width 100%
    height 400px
    position relative
    opacity 0
    transition .4s all ease-in-out 
    transform scale(1.05)
    margin-bottom 40px
    .card
      position absolute
      top 0
      left 0
      width 480px
      height 100%
      // background-color #fff
      transition .6s all ease-in-out
      &:hover
        .img-content
          .mask
            background-color rgba(36,104,242,.3)
      .img-content, .text-content
        position absolute
        top 0
        left 0
        right 0
        bottom 0
      .img-content
        border-radius 4px
        background-color #FDEBDC
        z-index 2
        width 100%
        height 100%
        overflow hidden
        position relative
        &.recent
          border-radius 4px 0 0 4px
        img 
          position absolute
          left 50%
          top 50%
          transform translate(-50%,-50%)
          z-index 1
        .mask
          position absolute
          left 0
          top 0
          background-color rgba(36,104,242,.2)
          transition .2s all ease-in-out
          z-index 2
          width 100%
          height 100%
      .text-content
        border-radius 4px
        background-color #ffffff
        z-index 1
        transition .6s all ease-in-out 
        &.recent
          transform translateX(100%)
          border-radius 0 4px 4px 0
        h3
          font-size 22px
          line-height 40px
          color #454A5B
          font-weight 500
          margin 44px 20px 84px 42px
        .button
          margin-left 42px
          width 158px
          height 42px
          color #ffffff
          background-color #2468f2
          line-height 42px
          text-align center
          font-size 14px
          text-align center
          border-radius 100px
          &:hover
            cursor pointer
        p
          margin 38px 42px
          font-size 14px
          line-height 24px
          color #747C90
    .change
      width 64px
      height 64px
      position absolute
      top 50%
      transform translateY(-50%)
      z-index 4
      transition .2s all ease-in-out
      img 
        width 32px
        height 32px
        left 16px
        top 16px
        position absolute
        z-index 2
      &:before
        content ''
        z-index 1
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background-color #ffffff
        border-radius 100px
        transition .2s all ease-in-out
      &.pre
        left 125px
        img 
          transform rotate(180deg)
      &.next
        right 125px
      &.none
        transform translateY(-50%) scale(0)
      &:hover
        cursor pointer
        &:before
          transform scale(1.05)
          box-shadow 0 4px 10px rgba(0,0,0,.2)
  .tab-tag-content
    width 164px
    height 5px
    margin auto
    .tab-tag-item
      width 4px
      height 4px
      border-radius 100px
      background-color #fff
      float left 
      margin 0 10px
      position relative
      transition .2s all ease-in-out
      &:before
        content ''
        width 20px
        height 20px
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
      &:hover
        cursor pointer
      &.recent
        margin-right 30px
        .line
          top 50%
          left 11px
          width 26px
          height 1px
          position absolute
          // background-color #A9B8D0
          transform translateY(-50%)
          overflow hidden 
          &:after 
              content ''
              display block
              width 100%
              height 1px
              background-color #A9B8D0
              top 0
              left 0
              animation line 2s linear forwards
@keyframes line
  0%
    transform translateX(-100%)
  100%
    transform translateX(0)
</style>


<script>
export default {
  data() {
    return {
      recent : 0,
      items : [
        {
          nav : '网站及部署',
          img : require('@/assets/acu-index/solution1.png'),
          title : '网站与部署解决方案',
          text :  '基于百度智能云丰富类型的基础云产品，' +
                  '打通网站流量与价值变现闭环，提供从域名/DNS服务、' +
                  '网站设计开发、网站部署发布、ICP备案，到网站运维、' +
                  '网站优化、推广与变现等全栈服务，让您的网站收录更快、运行更稳定' ,
        },
        {
          nav : '数字营销云',
          img : require('@/assets/acu-index/solution1.png'),
          title : '网站与部署解决方案',
          text :  '基于百度智能云丰富类型的基础云产品，' +
                  '打通网站流量与价值变现闭环，提供从域名/DNS服务、' +
                  '网站设计开发、网站部署发布、ICP备案，到网站运维、' +
                  '网站优化、推广与变现等全栈服务，让您的网站收录更快、运行更稳定' ,
        },
        {
          nav : '大数据舆情',
          img : require('@/assets/acu-index/solution1.png'),
          title : '网站与部署解决方案',
          text :  '基于百度智能云丰富类型的基础云产品，' +
                  '打通网站流量与价值变现闭环，提供从域名/DNS服务、' +
                  '网站设计开发、网站部署发布、ICP备案，到网站运维、' +
                  '网站优化、推广与变现等全栈服务，让您的网站收录更快、运行更稳定' ,
        },
        {
          nav : '教育行业',
          img : require('@/assets/acu-index/solution1.png'),
          title : '网站与部署解决方案',
          text :  '基于百度智能云丰富类型的基础云产品，' +
                  '打通网站流量与价值变现闭环，提供从域名/DNS服务、' +
                  '网站设计开发、网站部署发布、ICP备案，到网站运维、' +
                  '网站优化、推广与变现等全栈服务，让您的网站收录更快、运行更稳定' ,
        },
        {
          nav : '短视频',
          img : require('@/assets/acu-index/solution1.png'),
          title : '网站与部署解决方案',
          text :  '基于百度智能云丰富类型的基础云产品，' +
                  '打通网站流量与价值变现闭环，提供从域名/DNS服务、' +
                  '网站设计开发、网站部署发布、ICP备案，到网站运维、' +
                  '网站优化、推广与变现等全栈服务，让您的网站收录更快、运行更稳定' ,
        },
        {
          nav : '零售行业',
          img : require('@/assets/acu-index/solution1.png'),
          title : '网站与部署解决方案',
          text :  '基于百度智能云丰富类型的基础云产品，' +
                  '打通网站流量与价值变现闭环，提供从域名/DNS服务、' +
                  '网站设计开发、网站部署发布、ICP备案，到网站运维、' +
                  '网站优化、推广与变现等全栈服务，让您的网站收录更快、运行更稳定' ,
        },
      ]
    }
  },
  methods: {
    resolveNavLine() {
      const left = [25, 155, 285 ,415, 530, 630]
      const right = [615, 485, 355, 240, 140, 30]
      return 'left:' + left[this.recent] + 'px; right:' + right[this.recent] + 'px;'
    },
    changeRecent(i) {
      this.recent = i
    },
    resolveCardPosition(i) {
      const relative = i - this.recent
      const width = 460
      const col = 100
      const total = 1440 
      let left = .5 * (total - width * 2)
      if (relative === 1) {
          left = left + width * 2 + col
      }
      if (relative > 1) {
        left = left + width * 2 + col + (width + col) * (relative - 1)
      }
      if (relative < 0) {
        left = left + (width + col) * (relative)
      }
      return 'transform: translateX(' + left + 'px); width:'+ width +'px;'
    }
  }
}
</script>

