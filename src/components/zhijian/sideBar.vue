<template>
    <div :class="['zhijian-side-bar', className]">
        <router-link to="zhijianyun/main">工业质检云动画原型</router-link> 
    </div>
</template>

<style lang="stylus">
.zhijian-side-bar
  height 100%
  background-color #f1f1f1
  position absolute
  transition .8s all ease-in-out
  // 首页样式
  &.path-zhijianyun
    width 300px
    right 0

</style>

<script>
export default {
    props: [ 'className' ]
}
</script>

