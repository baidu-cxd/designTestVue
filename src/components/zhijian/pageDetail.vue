<template>
    <div class="page-detail" :class="[this.hasSidebar ? 'has-side-bar': 'not-has-side-bar']">
        页面详情
    </div>
</template>

<script>
export default {
    props: ['hasSidebar'],
}
</script>

<style lang="stylus">
.page-detail
  background-color #fff
  min-height 400px
  box-shadow 0 2px 10px rgba( 0, 0, 0, .1)
  margin 94px 24px 24px 24px 
  transition .4s all ease-in-out
  &.has-side-bar
    margin 94px 24px 24px 304px 
    transition .4s all ease-in-out .4s

</style>


