<template>
  <div class="home">
    <img src="@/assets/test.png" alt="" class="home1">
    <router-link to="/zhijianyun">工业质检云动画原型</router-link> 
    <router-link to="/doc">文档详情页原型</router-link> 
    <router-link to="/acu-index">新版首页</router-link> 
    <router-link to="/cylm">产业联盟</router-link> 
    <router-link to="/dxwj">调查问卷</router-link> 
    <router-link to="/product">产品页</router-link> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus">
.home
  padding 80px
  background-color #fff
  img.home1
    display block
    width 200px
    text-align center
    margin 0 auto 60px 
  a
    color #000
    text-align center
    margin 10px auto
    width  160px
    display block
    text-decoration none
    padding 10px
    transition .1s background-color ease-in-out .1s, .1s color ease-in-out
    border-radius 4px
    &:hover
      background-color #2468f2
      color #fff
  
</style>

