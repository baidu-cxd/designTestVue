<template>
    <div class="ecology">
      <img src="@/assets/acu-index/bgbgb.png" alt="" class="bg">
      <div class="content">
        <h2>{{write}}{{title1}}</h2>
        <h2>{{title2}}</h2>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      title1: '',
      title2: '',
      title1All: 'Hello，New Friend',
      title2All: '你好，新朋友！'
    }
  },
  props:['scroll'],
  computed:{
    write() {
      if(this.scroll>3900){
        writeTitle1(0)
        return ''
      }
      else {
        return ''
      }
    },
    writeTitle1(i) {
      this.title1 = this.title1All[2]
    }
  }
}
</script>


<style lang="stylus">
.ecology
  width 100%
  height 502px
  background-color #F6F8FB
  position relative
  overflow hidden
  .bg
    width 1470px
    position absolute
    top 0
    left -100px
    z-index 1
  .content
    position relative
    z-index 2
    width 1100px
    height 320px
    margin 90px auto
    background-color #108cee
</style>

