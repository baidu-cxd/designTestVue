<template>
    <div class="acu-index" :class="resolveClass()">
        <!--顶部导航-->
        <acuHeader/>
        <!--首页 banner -->
        <acuBanner/>
        <!--首页 营销位 -->
        <adMarket :scroll="scrollTop"/>
        <!--首页 四大平台 -->
        <fourSolution/>
        <!--首页 产品聚合 -->
        <product/>
        <!--首页 解决方案 -->
        <solution/>
        <!--首页 案例 -->
        <example/>
        <!--首页 数据 -->
        <dataShow/>
        <!--首页 认证 -->
        <authentication/>
        <!--首页 合作与生态-->
        <ecology/>
        <!--首页 新人体验站-->
        <experience/>
        <!--首页 页脚-->
        <acuFooter/>
    </div>
</template>

<script>
import acuHeader from '@/components/acuindex/acuHeader.vue'
import acuBanner from '@/components/acuindex/acuBanner.vue'
import adMarket from '@/components/acuindex/adMarket.vue'
import fourSolution from '@/components/acuindex/fourSolution.vue'
import product from '@/components/acuindex/product.vue'
import solution from '@/components/acuindex/solution.vue'
import example from '@/components/acuindex/example.vue'
import dataShow from '@/components/acuindex/dataShow.vue'
import authentication from '@/components/acuindex/authentication.vue'
import ecology from '@/components/acuindex/ecology.vue'
import experience from '@/components/acuindex/experience.vue'
import acuFooter from '@/components/acuindex/acuFooter.vue'
export default {
    components:{acuHeader, acuBanner, adMarket, fourSolution, product, 
                solution, example, dataShow, authentication, ecology,
                experience, acuFooter},
    mounted(){
        window.addEventListener('scroll', this.handleScroll, true);
    },
    data(){
        return {
            scrollTop: 0
        }
    },
    methods: {
        resolveClass(){
            let className = ''
            if (this.scrollTop > 550) {
                className += ' section-3' //进入产品页板块
            }
            if (this.scrollTop > 300){  // 进入四大平台的平滑
                className += ' section-2-all' //进入产品页板块
            } 
            if (this.scrollTop > 100){  // 进入四大平台的平滑
                className += ' section-2' //进入产品页板块
            } 
            if (this.scrollTop > 60){  // 顶部导航栏状态动画
                className += ' not-top' //进入产品页板块
            }
            return className
        },
        handleScroll(e){
            this.scrollTop = window.pageYOffset 
                            || document.documentElement.scrollTop 
                            || document.body.scrollTop
            console.log(this.scrollTop)
        }
    }
}
</script>



<style lang="stylus">
.acu-index
  background-color #ffffff
  width 100%
  min-height 100%
  min-width 1440px
</style>
