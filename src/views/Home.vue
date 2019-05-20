<template>
  <div class="home">
    <router-link to="/zhijianyun">工业质检云动画原型</router-link> 
    <router-link to="/doc">文档详情页原型</router-link> 
    <router-link to="/acu-index">新版首页</router-link> 
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
  a
    color #000
    text-align center
    margin 40px auto
    width  200px
    display block
    text-decoration none
    padding 40px
    transition .2s background-color ease-in-out .2s, .2s color ease-in-out
    &:hover
      background-color #000
      color #fff
  
</style>

