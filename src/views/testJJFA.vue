<template>
    <div class="test-page">
      <div class="navgation-test" :class="[scrollTop > 420? 'fix-test':'']">
          <img :src="resolveImg()" alt="">
      </div>
      <img :src="[this.$route.path === '/testJJFA ' ? img[3] : img[4]]" alt="">
    </div>
</template>

<style lang="stylus">
.navgation-test
  position absolute
  top 420px
  left 0
  width 100%
  opacity 0
.test-page
  width 100%
  img 
     width 100%
.fix-test
  position fixed
  top 0
  left 0
  opacity 1
</style>


<script>
import acuHeader from '@/components/cylm/acuHeader.vue'
import heroBanner from '@/components/cylm/heroBanner.vue'
export default {
    components: {acuHeader, heroBanner},
    data(){
        return {
            scrollTop: 0,
            direction: 'down',
            img: [
                require ('@/assets/testJJFA/nav1.png'),
                require ('@/assets/testJJFA/nav2.png'),
                require ('@/assets/testJJFA/nav3.png'),
                require('@/assets/testJJFA/page1.png'),
                require('@/assets/testJJFA/page2.png')
            ]
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScrollCYLM, true);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScrollCYLM, true);
    },
    methods: {
       handleScrollCYLM(e){
            const scroll =  window.pageYOffset 
                            || document.documentElement.scrollTop 
                            || document.body.scrollTop 
            if (scroll - this.scrollTop < 0) {
                this.direction = 'up'
            } else {
                this.direction = 'down'
            }
            this.delta = scroll - this.scrollTop
            this.scrollTop = scroll
        } ,
        resolveImg() {
            if (this.scrollTop > 3100) {
                return this.img[2]
            }
            if (this.scrollTop >2444) {
                return this.img[1]
            }
            return this.img[0]
        }

    }
}
</script>
