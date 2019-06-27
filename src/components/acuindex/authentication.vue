<template>
    <div class="authenticationfrom">
       <h2>安全合规的云计算服务</h2>
       <div class="pre-next" :style="preNext? 'opacity:1;':'opacity:0'" 
         @mouseenter="preNext = true" @mouseleave="preNext = false">
           <div class="pre-next-content pre" @click="now = now + 1">
             <img src="@/assets/acu-index/arr.png" alt="">
           </div>
           <div class="pre-next-content next"  @click="now = now - 1">
             <img src="@/assets/acu-index/arr.png" alt="">
           </div>
       </div>
       <div class="content" @mouseenter="preNext = true" @mouseleave="preNext = false">
         <div class="content-inner">
           <div v-for="(item,i) in items" :key="i" class="item" :style="resolveStyle(items.length, i)">
             <div class="img-content">
               <img :src="item.img" alt="">
             </div>
             <h3>{{item.title}}</h3>
             <div class="text-content">
               <p>{{item.text}}</p>
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
      now: 0,
      preNext: false,
      items: [
        {
          title : 'ISO 9000',
          img : require('@/assets/acu-index/au1.png'),
          text: 'ISO 20000信息技术服务管理体系目的是提供建立、实施、运作是IT服务管理的标准'
        },
        {
          title : 'ISO 20000',
          img : require('@/assets/acu-index/au1.png'),
          text: 'ISO 20000信息技术服务管理体系目的是提供建立、实施、运作是IT服务管理的标准'
        },
        {
          title : 'ISO 22301',
          img : require('@/assets/acu-index/au1.png'),
          text: 'ISO 20000信息技术服务管理体系目的是提供建立、实施、运作是IT服务管理的标准'
        },
        {
          title : 'ISO 27001',
          img : require('@/assets/acu-index/au1.png'),
          text: 'ISO 20000信息技术服务管理体系目的是提供建立、实施、运作是IT服务管理的标准'
        },
        {
          title : 'ISO 29151',
          img : require('@/assets/acu-index/au1.png'),
          text: 'ISO 20000信息技术服务管理体系目的是提供建立、实施、运作是IT服务管理的标准'
        },
        {
          title : 'PCI',
          img : require('@/assets/acu-index/au1.png'),
          text: 'ISO 20000信息技术服务管理体系目的是提供建立、实施、运作是IT服务管理的标准'
        },
        {
          title : 'ITSS',
          img : require('@/assets/acu-index/au1.png'),
          text: 'ISO 20000信息技术服务管理体系目的是提供建立、实施、运作是IT服务管理的标准'
        },
        {
          title : '可信云',
          img : require('@/assets/acu-index/au1.png'),
          text: 'ISO 20000信息技术服务管理体系目的是提供建立、实施、运作是IT服务管理的标准'
        },
        {
          title : 'CSA STAR',
          img : require('@/assets/acu-index/au1.png'),
          text: 'ISO 20000信息技术服务管理体系目的是提供建立、实施、运作是IT服务管理的标准'
        }
      ]
    }
  },
  methods: {
    resolveStyle(total, i){
      const px = 190 * this.now
      if (this.now - i > 1) {
        return "transform: translateX(" + px + "px); display: none;"
      }
      return "transform: translateX(" + px + "px)"
    },
    togglePreNext(){
      this.preNext = !this.preNext
    },
  }
}
</script>


<style lang="stylus">
.section-7-all
  .authenticationfrom
    .content
      opacity 1
      transform translateY(0px)
.section-7
  .authenticationfrom
    h2
      opacity 1
      transform translateY(0px)
.authenticationfrom
  width 100%
  overflow hidden
  padding-bottom 0px
  position relative
  h2
    font-size 30px
    line-height 48px
    color #191C3D
    margin 90px auto 32px
    text-align center
    opacity 0
    transition .4s all ease-in-out
    transform translateY(20px)
  .pre-next
    width 1140px
    height 0px
    position absolute
    top 220px
    z-index 10
    left 50%
    transition .4s all ease-in-out
    transform translateX(-50%)
    .pre-next-content
      border-radius 100px
      width 40px
      height 40px
      transition .4s all ease-in-out
      position relative
      img 
        width 24px
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
      &:before
        content ''
        width 40px
        height 40px
        display block
        border-radius 100px
        background-color #ffffff
        box-shadow 0px 2px 10px rgba(0,0,0,.1)
        transition .2s all ease-in-out
      &:hover
        cursor pointer
        &:before
          transform scale(1.1)
      &.pre
        float left 
        img 
          transform rotate(180deg)translate(50%,50%)
      &.next
        float right
  .content
    width 1140px
    overflow-x hidden
    margin auto
    opacity 0
    transition .4s all ease-in-out
    transform translateY(20px)
    .content-inner
      width 2520px
      transition .4s all ease-in-out
    .item
      width 190px
      height 250px
      background-color #ffffff
      float left 
      position relative
      transition .4s all ease-in-out
      z-index 2
      &:hover 
        cursor pointer
      &:hover 
        .text-content
          opacity 1
          transform translateX(-50%)translateY(120px)
      .text-content
        position absolute
        top 0px
        left 50%
        transform translateX(-50%)translateY(140px)
        transition .2s all ease-in-out
        width 180px
        height 90px
        background-color #ffffff
        box-shadow 0 4px 10px rgba(0,0,0,.1)
        opacity 0
        p
          font-size 12px
          line-height 24px
          opacity .8
          color #191C3D
          margin 8px 10px
      h3
        text-align center
        font-size 14px
        opacity .5
        font-weight 300
        line-height 26px
        margin 0
    .img-content
      width 190px
      height 120px
      position relative
      img 
        transform translate(-50%,-50%)scale(.5) 
        left 50%
        top 50%
        position absolute
</style>

