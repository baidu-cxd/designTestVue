<template>
    <div class="example">
      <!-- 背景圆 -->
      <img src="@/assets/acu-index/circle1.png" alt="">
      <img src="@/assets/acu-index/circle2.png" alt="">
      <img src="@/assets/acu-index/circle3.png" alt="">
    </div>
</template>

<style lang="stylus">
.example
  width 100%
  height 700px 
  overflow hidden
  position relative
</style>

<script>
export default {
  props:['scroll'],
  methods: {
    resolveStyle(){
      if (this.scroll < 300) {
        const px = - (this.scroll/3)
        return "transform: translateY(" + px +"px)"
      } else {
        return "transform: translateY(-100px)" 
      }
    }
  }
}
</script>