<template>
    <div :class="['zhijian-side-bar', className]">
        <div class="back">
          <img src="@/assets/zhijian/icon-arr.svg" alt="">
          <p>模型列表</p>
        </div>
        <span class="line"></span>
        <ul class="nav-list">
          <li>
              <p>流程进度指示图</p>
          </li>
          <li>
              <p>数据列表</p>
          </li>
          <li :class="['current', this.isOpen ? 'open':'not-open']"
            @click="toogleOpen()">
              <p>数据集合</p>
              <img src="@/assets/zhijian/arrsmall.svg" alt="">
              <ul>
                  <li><p>数据集1</p></li>
                  <li class="current-ac" ><p>数据集2</p></li>
                  <li><p>数据集3</p></li>
              </ul>
          </li>
          <li>
              <p>模型训练</p>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [ 'className' ],
    data() {
        return {
            isOpen : true
        }
    },
    methods: {
        toogleOpen() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>


<style lang="stylus">
.zhijian-side-bar
  height 100%
  background-color #f1f1f1
  position fixed
  transition .8s all ease-in-out
  width 280px
  z-index 9
  top 0
  box-sizing border-box
  padding-top 70px
  .back
    margin 32px 24px 24px
    height 24px
    opacity .8
    transition .3s all ease-in-out
    img 
      width 24px
      heihgt 24px
      float left 
    p
      float left 
      heihgt 24px
      line-height 24px
      font-size 16px
      color #000
      margin 0 0 0 8px
    &:hover
      cursor pointer
      opacity 1
  .line
    margin 0 24px
    display block
    height 1px
    background-color #000
    opacity .1
  .nav-list
    margin 24px 0 0 0
    display block
    padding 0
    li
      min-height 48px
      overflow hidden
      line-height 48px
      transition .2s background ease-in-out 
      background rgba(255, 255, 255, 0)
      position relative
      margin 0
      padding 0
      &.current
        p
          opacity 1
        ul p
          opacity .4
      &:hover
        cursor pointer
        p
          opacity 1
      p
        font-size 14px
        color #000
        margin 0 0 0 24px
        opacity .4
        transition .2s all ease-in-out
      img 
        position absolute
        right 24px
        top 12px
        transition .2s all ease-in-out
        opacity .2
      &.open
        img
          transform rotate(90deg)
        ul
          height 132px
          transition .2s all ease-in-out
      ul
        display block
        height 0
        overflow hidden
        padding-left 0
        transition .2s all ease-in-out
        li
          padding-left 12px
          height 40px
          min-height 40px
          &:hover
            p
              opacity 1
          &:last-child
            margin-bottom 12px
          &.current-ac
            background-color #fff
            &:before
              content ""
              display block
              width 2px
              height 40px
              background-color #2E36E6
              position absolute
              top 0
              left 0
            p
              opacity 1
        p
          opacity .4
          line-height 40px


</style>


