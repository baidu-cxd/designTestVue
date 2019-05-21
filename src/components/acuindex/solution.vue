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
          <div class="card" v-for="(item,i) in items" :key="i"
            :style="resolveCardPosition(i)">
            <div class="img-content"></div>
            <div :class="['text-content', recent === i ? 'recent':'']">
              <h3>{{item.title}}</h3>
            </div>
          </div>
        </div>
    </div>
</template>


<style lang="stylus">
.solution
  width 100%
  background-color #505D73  
  overflow hidden
  position relative
  padding-bottom 125px
  h2
    color #ffffff
    font-weight normal
    margin 90px auto 30px
    font-size 30px
    line-height 48px
    text-align center
  .nav-tab
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
    .card
      position absolute
      top 0
      left 0
      width 480px
      height 400px
      background-color #fff
      transition .6s all ease-in-out
      .img-content, .text-content
        position absolute
        top 0
        left 0
        right 0
        bottom 0
      .img-content
        background-color #FDEBDC
        z-index 2
      .text-content
        background-color #ffffff
        z-index 1
        transition .6s all ease-in-out
        &.recent
          transform translateX(100%)
        h3
          font-size 22px
          line-height 40px
          color #454A5B
          font-weight 500
          margin 44px 20px 84px 42px
</style>


<script>
export default {
  data() {
    return {
      recent : 0,
      items : [
        {
          nav : '网站及部署',
          title : '网站与部署解决方案',
          text :  '基于百度智能云丰富类型的基础云产品，' +
                  '打通网站流量与价值变现闭环，提供从域名/DNS服务、' +
                  '网站设计开发、网站部署发布、ICP备案，到网站运维、' +
                  '网站优化、推广与变现等全栈服务，让您的网站收录更快、运行更稳定' ,
        },
        {
          nav : '数字营销云',
          title : '网站与部署解决方案',
          text :  '基于百度智能云丰富类型的基础云产品，' +
                  '打通网站流量与价值变现闭环，提供从域名/DNS服务、' +
                  '网站设计开发、网站部署发布、ICP备案，到网站运维、' +
                  '网站优化、推广与变现等全栈服务，让您的网站收录更快、运行更稳定' ,
        },
        {
          nav : '大数据舆情',
          title : '网站与部署解决方案',
          text :  '基于百度智能云丰富类型的基础云产品，' +
                  '打通网站流量与价值变现闭环，提供从域名/DNS服务、' +
                  '网站设计开发、网站部署发布、ICP备案，到网站运维、' +
                  '网站优化、推广与变现等全栈服务，让您的网站收录更快、运行更稳定' ,
        },
        {
          nav : '教育行业',
          title : '网站与部署解决方案',
          text :  '基于百度智能云丰富类型的基础云产品，' +
                  '打通网站流量与价值变现闭环，提供从域名/DNS服务、' +
                  '网站设计开发、网站部署发布、ICP备案，到网站运维、' +
                  '网站优化、推广与变现等全栈服务，让您的网站收录更快、运行更稳定' ,
        },
        {
          nav : '短视频',
          title : '网站与部署解决方案',
          text :  '基于百度智能云丰富类型的基础云产品，' +
                  '打通网站流量与价值变现闭环，提供从域名/DNS服务、' +
                  '网站设计开发、网站部署发布、ICP备案，到网站运维、' +
                  '网站优化、推广与变现等全栈服务，让您的网站收录更快、运行更稳定' ,
        },
        {
          nav : '零售行业',
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
      const width = 420
      const col = 80
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

