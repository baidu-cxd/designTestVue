<template>
    <div class="for-solution">
        <!-- 顶部tab -->
        <div class="tab-content">
            <div class="tab-item" @click="tab=1">
              <p class="label">天智</p>
              <p class="title">人工智能</p>
            </div>
            <div class="tab-item" @click="tab=2">
              <p class="label">天像</p>
              <p class="title">智能大数据</p>
            </div>
            <div class="tab-item" @click="tab=3">
              <p class="label">天算</p>
              <p class="title">智能多媒体</p>
            </div>
            <div class="tab-item" @click="tab=4">
              <p class="label">天工</p>
              <p class="title">智能物联网</p>
            </div>
        </div>
        <!-- tab 横线 -->
        <div class="line">
            <div class="graline"></div>
            <div class="recent" :style="resolveStyle()"></div>
        </div>
        <!-- 详细内容：图片-->
        <div class="img-content">
          <img src="@/assets/acu-index/img-four-1.png" alt="">
        </div>
        <!-- 详细内容：文字 -->
        <div class="text-content">
          <h3>百度 AI 智能云服务</h3>
          <p>
             百度天工是融合了百度ABC（AI、Big Data、Cloud）的“一站式、全托管”智能物联网平台。<br/>
             赋能物联网应用开发商和生态合作伙伴从”连接”、”理解”到”唤醒“的各项关键能力，
             从而轻松构建各类智能物联网应用，促进行业变革
          </p>
          <div class="button">
            <p>了解更多</p>
          </div>
          <!-- 产品列表 -->
          <div class="product-list">
            <div class="item">
              <div class="icon"><img src="@/assets/acu-index/icon-four-1.png" alt=""></div>
              <p class="text">语音识别</p>
            </div>
            <div class="item">
              <div class="icon"><img src="@/assets/acu-index/icon-four-2.png" alt=""></div>
              <p class="text">人脸识别</p>
            </div>
            <div class="item">
              <div class="icon"><img src="@/assets/acu-index/icon-four-3.png" alt=""></div>
              <p class="text">百度机器学习</p>
            </div>
            <div class="item">
              <div class="icon"><img src="@/assets/acu-index/icon-four-4.png" alt=""></div>
              <p class="text">图像审核</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      tab : 1
    }
  },
  methods: {
    resolveStyle(){
      if (this.tab === 1) {
        return 'left:230px;right:860px;'
      } else if (this.tab === 2){
        return 'left:430px;right:640px;'
      }
    }
  }
}
</script>


<style lang="stylus">
.section-2
  .for-solution 
    .tab-content 
      .tab-item
        transform translateY(0)
        opacity 1
    .line
      .graline
        transform scaleX(1)
        opacity 1
      .recent
        transform scaleX(1)
.section-2-all
  .for-solution
    .img-content
      transform translateY(0) scale(1)
      opacity 1
    .text-content
      transform translateY(0)
      opacity 1
.for-solution
  width 1180px
  margin 0px auto 40px
  // tab 文字区域
  .tab-content
    width 840px
    margin auto 
    overflow hidden
    .tab-item
      width 210px
      float left
      transform translateY(20px)
      transition .4s all ease-in-out
      opacity 0
      &:hover
        cursor pointer
      p
        width 210px
        text-align center
        margin 0
      .label
        font-size 16px
        line-height 30px
        color #737884
      .title
        font-size 22px
        line-height 38px
        color #454A5B
        padding-bottom 30px
        position relative
        font-weight 500
  // 横线
  .line
    width 1180px
    height 1px
    position relative
    .graline
      transition .2s all ease-in-out .2s
      transform scaleX(.6)
      opacity 0
      width 1180px
      height 1px
      background-color #eee
      position absolute
      top 1px
      left 0
    .recent
      transform scaleX(0)
      transition .2s left ease-in-out .1s, .2s right ease-in-out .1s
      background-color #2468f2
      height 2px
      position absolute
  // 详细内容
  .img-content
    width 480px
    height 360px
    float left
    margin 35px 0
    opacity 0
    transition .4s all ease-in-out 
    transform translateY(40px) scale(1.1)
    img 
      width 100%
  .text-content
    margin-left 560px
    min-height 360px 
    opacity 0
    transition .4s all ease-in-out 
    transform translateY(40px)
    h3
      margin 80px 0 10px 0
      font-size 22px
      line-height 38px
      color #454A5B
      font-weight 400
    p
      font-size 14px
      line-height 32px
      opacity .6
      color #454A5B
      margin 10px 0 30px
    .button
      width 140px
      height 38px
      box-sizing border-box
      line-height 36px
      border 1px solid rgba(116, 124, 144, .53)
      border-radius 100px
      color #565B69
      text-align center
      margin 30px 0 50px
      transition .15s all ease-in-out
      font-size 14px
      position relative
      p
        position absolute
        top 50%
        transform translateY(-50%)
        text-align center
        z-index 2
        margin 0
        width 100%
        color #565B69
        opacity 1
      &:after
        content ''
        display block
        border-radius 100px
        width 102%
        height 102%
        position absolute
        top -1%
        left -1%
        background-color #2468f2 
        z-index 1
        transform scale(1.08,1.1)
        opacity 0
        transition .15s all ease-in
      &:hover
        // background-color #2468f2
        border 1px solid #2468f2
        p
          color #fff
        cursor pointer
        &:after
          opacity 1
          transform scale(1)
          transition .15s all ease-out
    .product-list
      height 30px
      .item
        float left
        &:hover
          cursor pointer
          .icon img 
            opacity 1
          p.text
            color darken(#454A5B,100%)
        .icon
          width 16px
          height 16px
          float left
          margin 7px 0
          img 
            width 100%
            transition .2s all ease-in-out
            opacity .6
        p.text
           float left
           font-size 16px
           line-height 30px
           font-weight 500
           color  #454A5B
           margin 0 50px 0 10px
           transition .2s all ease-in-out

</style>
