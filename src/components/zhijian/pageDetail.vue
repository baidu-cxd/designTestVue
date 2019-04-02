<template>
    <div class="page-detail" :class="[this.hasSidebar ? 'has-side-bar': 'not-has-side-bar']">
        <!-- 页面标题 -->
        <div class="page-header">
            <transition name="fade-page-header">
                <div :key="this.nowPath" class="header-content">
                  <!-- 第一个页面的标题 -->
                  <div v-if="this.nowPath === 'path-zhijianyun-main'">
                    <div class="inner-content">
                      <img src="@/assets/zhijian/shili.svg" alt="" class="icon">
                      <p>当前模型: </p>
                      <p>物件计数 v2 </p>
                    </div>
                  </div>
                  <!-- 第二个页面的标题 -->
                  <div v-else-if="this.nowPath === 'path-zhijianyun-set'">
                    <div class="back">
                        <img src="@/assets/zhijian/arrw.svg" alt="" class="icon">
                        <p>返回</p>
                    </div>
                    <div class="inner-content">
                      <img src="@/assets/zhijian/zhongduan.svg" alt="" class="icon">
                      <p>一个终端设备</p>
                    </div>
                  </div>
                  <!-- 第三个页面的标题 -->
                  <div v-if="this.nowPath === 'path-zhijianyun-user'">
                    <div class="inner-content">
                      <img src="@/assets/zhijian/shili.svg" alt="" class="icon">
                      <p>用户管理</p>
                    </div>
                  </div>
                </div>
            </transition>  
        </div>
        <!-- 页面容器 -->
        <transition name="fade-page-body">
          <div class="page-body" :key="this.nowPath">

           <!-- 第一个页面的内容 --> 
           <div v-if="this.nowPath === 'path-zhijianyun-main'" class="page-body-1">
               <div class="tab">
                   <div class="tab-ite">API
                       <div class="under-line"></div>
                   </div>
                   <div class="tab-ite">SDK</div>
                   <div class="tab-line"></div>
               </div>
               <h3>基本信息</h3>
               <p>包大小：23.28m</p>
               <p>兼容性：4.0+</p>
               <div class="block-line"></div>
               <h3>模型下发</h3>
               <div class="buttom" @click="toggleModule()">安装到新设备</div>
               <table>
                   <tr>
                       <th>设备名称</th>
                       <th>模型版本</th>
                       <th>更新时间</th>
                   </tr>
                   <tr>
                       <td>设备名称</td>
                       <td>模型版本</td>
                       <td>更新时间</td>
                   </tr>
                   <tr>
                       <td>设备名称</td>
                       <td>模型版本</td>
                       <td>更新时间</td>
                   </tr>
                   <tr>
                       <td>设备名称</td>
                       <td>模型版本</td>
                       <td>更新时间</td>
                   </tr>
               </table>
           </div>

           <!-- 第二个页面的内容 --> 
           <div v-if="this.nowPath === 'path-zhijianyun-set'" class="page-body-2">
               <h3>模型信息</h3>
               <div class="card-wrp">
                   <div class="card" v-for="(card, i) in cards" :key="card.key"
                     :style ='resolveStyle(i)'>
                     <div class="card-header">
                         <img src="@/assets/zhijian/shebeib.svg" alt="">
                         <h4>{{card.name}}</h4>
                         <div class="line"></div>
                         <p>{{card.intro}}</p>
                         <div class="card-bottom">
                             <p>状态</p>
                             <p class="blue">正常</p>
                         </div>
                     </div>
                   </div>
               </div>
           </div>
          </div>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cards: [
                {
                    key : '1',
                    name : '模型1',
                    intro : '简单的介绍',
                },
                {
                    key : '2',
                    name : '模型1',
                    intro : '简单的介绍',
                },
                {
                    key : '3',
                    name : '模型1',
                    intro : '简单的介绍',
                },
                {
                    key : '4',
                    name : '模型1',
                    intro : '简单的介绍',
                },
                {
                    key : '5',
                    name : '模型1',
                    intro : '简单的介绍',
                },
                {
                    key : '6',
                    name : '模型1',
                    intro : '简单的介绍',
                },
                {
                    key : '7',
                    name : '模型1',
                    intro : '简单的介绍',
                },
                {
                    key : '8',
                    name : '模型1',
                    intro : '简单的介绍',
                },
            ]
        }
    },
    props: ['hasSidebar', 'nowPath'],
    methods: {
        resolveStyle(i) {
            return 'animation-delay:' + 50 * ( 1 + i ) + 'ms'
        },
        toggleModule() {
            this.$store.state.module = !this.$store.state.module
        }
    }
}
</script>

<style lang="stylus">
.page-detail
  background-color #fff
  min-height 500px
  box-shadow 0 2px 10px rgba( 0, 0, 0, .1)
  margin 94px 24px 24px 24px 
  transition .4s all ease-in-out
  &.has-side-bar
    margin 94px 24px 24px 304px 
    transition .4s all ease-in-out .2s
  .page-header
    width 100%
    height 72px
    background-color #2E36E6
    position relative
    box-sizing border-box
    overflow hidden
    .header-content
      position absolute
      top 0
      left 0
      width 100%
      height 100%
    .inner-content
      height 72px
      overflow hidden
      float left
    .icon
      width 24px
      display block
      float left
      margin 24px 0 0 24px
    p
      margin 0 0 0 16px
      padding 0
      line-height 72px
      color #fff
      display block
      float left
    .back
      width 120px
      background-color #000
      height 72px
      transition .2s all ease-in-out
      float left
      &:hover
        cursor pointer 
        background-color #1c1c1c
      img 
        width 24px
        margin 24px 12px 0 16px
      p
        line-height 72px
        font-size 14px
        color #fff
        margin-left 0



// 页面内容样式

.page-body
  padding 24px
  .tab
    height 48px
    position relative
    margin 0 0 8px 0
    div.tab-ite
      margin 0 24px 16px
      font-size 16px
      line-height 30px
      height 30px
      color #000
      float left
      position relative
      transition .2s all ease-in-out
      &:hover
        color #2e36e6
        cursor pointer
      .under-line
        position absolute
        left 0
        bottom -17px
        height 2px
        width 100%
        background-color #2E36E6
    .tab-line
      position absolute
      left 24px
      bottom 0
      right 24px
      height 1px
      background-color #ebebeb
  h3
    font-size 16px
    line-height 30px
    margin 24px 24px 12px
    color #000
    font-weight 400
  p
    font-size 14px
    line-height 26px
    margin 12px 24px
    color #000
    opacity .4
  .block-line
    margin 24px
    height 1px
    border-top 1px dotted #000
    opacity .3
  .buttom
    min-width 80px
    height 40px
    line-height 40px
    background-color #2E36E6
    color #ffffff
    font-size 14px
    transition .2s all ease-in-out
    margin  12px 24px 12px
    padding 0 24px  
    text-align center 
    display inline-block
    &:hover
      background-color #000
      cursor pointer
  table
    margin 24px
    font-size 13px
    color rgba(0,0,0,.4)
    border-collapse collapse
    width 100%
    line-height 30px
    tr
      border-top 1px solid #ebebeb
      border-bottom 1px solid #ebebeb
      text-align left
    th
      font-size 14px
      color rgba(0,0,0,1)
      text-align left
      padding 4px
    td
      padding 4px
  .card-wrp
    overflow hidden
    .card
      margin 24px
      float left 
      width 210px
      height 218px
      background-color #f1f1f1
      opacity 0
      animation card-in .4s ease-in-out forwards
      position relative
      transition .2s all ease-in-out
      &:hover
        cursor pointer
        background-color #fff
        box-shadow 0 2px 10px rgba(0,0,0,.1)
      .card-bottom
        position absolute
        height 26px
        bottom 24px
        p
          opacity 1
          float left
          display block
        p.blue
          color #2E36E6
          margin-left 24px
          position relative
          &:before 
            content ''
            display block
            background-color #2e36e6
            width 6px
            height 6px
            border-radius 100px
            position absolute
            top 50%
            left -8px
            transform translate(-50%,-50%)


      .card-header
        margin 24px 16px 16px
        overflow hidden
        img 
          float left 
          width 24px
        h4
          font-weight 400
          font-size 16px
          color #000
          line-height 24px
          float left
          display block
          height 24px
          margin 0 0 0 12px
      .line
        margin 16px 0 0 0 
        background-color #000
        opacity .1
        height 1px
        float left
        width  178px
      p
        float left
        margin 12px 0

// 动画

@keyframes card-in 
  0%
    opacity 0
    transform translateY(40px)
  100%
    opacity 1
    transform translateY(0px)

.fade-page-header-enter-active
  transition .3s all ease-in-out .4s 
  .inner-content
    transition .3s all ease-in-out .4s 
  .back
    transition .2s all ease-in-out .2s 
.fade-page-header-leave-active
  transition .3s all ease-in-out .4s 
  .inner-content
    transition .3s all ease-in-out .2s 
  .back
    transition .2s all ease-in-out 0s 
.fade-page-header-enter-to, .fade-page-header-leave
  .inner-content
    transform translateY(0)
    opacity 1
  .back
    opacity 1
    transform translateX(0)
.fade-page-header-enter
  .inner-content
    transform translateY(-20%)
    opacity 0
  .back
    opacity 0
    transform translateX(-100%)
.fade-page-header-leave-to
  .inner-content
    transform translateY(20%)
    opacity 0
  .back
    opacity 0
    transform translateX(-100%)


.fade-page-body-enter-active
  transition .4s all ease-in-out .4s 
.fade-page-body-leave-active
  transition .4s all ease-in-out 0s 
.fade-page-body-enter-to, .fade-page-body-leave
  transform translateY(0)
  opacity 1
.fade-page-body-enter, .fade-page-body-leave-to
  transform translateY(20px)
  opacity 0
</style>


