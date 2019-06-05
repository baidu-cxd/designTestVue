<template>
    <div class="acu-index" :class="resolveClass()">
        <!--顶部导航-->
        <acuHeader :scroll="scrollTop" :direction='direction'/>
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
        <example :scroll="scrollTop"/>
        <!--首页 数据 -->
        <dataShow :scroll="scrollTop"/>
        <!--首页 认证 -->
        <authentication/>
        <!--首页 合作与生态-->
        <ecology :scroll="scrollTop"/>
        <!--首页 新人体验站-->
        <!-- experience/ -->
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
            scrollTop: 0,
            direction: 'down'
        }
    },
    methods: {
        resolveClass(){
            let className = ''
            if (this.scrollTop > 3600) {
                className += ' section-7-all' //进入鉴权-完整
            }
            if (this.scrollTop > 3400) {
                className += ' section-7' //进入建泉
            }
            if (this.scrollTop > 3200) {
                className += ' section-6' //进入数据
            }
            if (this.scrollTop > 2900) {
                className += ' section-5-all-2' //进入客户案例板块
            }
            if (this.scrollTop > 2700) {
                className += ' section-5-all' //进入客户案例板块
            }
            if (this.scrollTop > 2500) {
                className += ' section-5' //进入客户案例板块
            }
            if (this.scrollTop > 2000) {
                className += ' section-4-all' //进入解决方案板块
            }
            if (this.scrollTop > 1700) {
                className += ' section-4' //进入解决方案板块
            }
            if (this.scrollTop > 1300) {
                className += ' section-3-line-2' //进入产品页板块
            }
            if (this.scrollTop > 1000) {
                className += ' section-3-detail-1' //进入产品页板块
            }
            if (this.scrollTop > 900) {
                className += ' section-3-line-1' //进入产品页板块
            }
            if (this.scrollTop > 700) {
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
            const scroll =  window.pageYOffset 
                            || document.documentElement.scrollTop 
                            || document.body.scrollTop
            console.log(scroll)  
            if (scroll - this.scrollTop < 0) {
                this.direction = 'up'
            } else {
                this.direction = 'down'
            }
            this.delta = scroll - this.scrollTop
            this.scrollTop = scroll
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
