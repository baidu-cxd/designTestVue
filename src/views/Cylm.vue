<template>
  <div :class="['chanye',resolveClass()]">
        <!--顶部导航-->
        <acuHeader :scroll="scrollTop" :direction='direction'/>
        <!--banner-->
        <heroBanner/>
        <!--板块2-->
        <div class="section-2">
            <div class="card-content">
                <div class="line-1">
                    <div class="card-inner" style="transition-delay:200ms;">
                        <img src="@/assets/cylm/card1@2x.png" alt="">
                    </div>
                    <div class="card-inner" style="transition-delay:400ms;">
                        <img src="@/assets/cylm/card2@2x.png" alt="">
                    </div>
                    <div class="card-inner" style="transition-delay:600ms;">
                        <img src="@/assets/cylm/card3@2x.png" alt="">
                    </div>
                </div>
                <div class="line-2">
                    <div class="card-inner" style="transition-delay:0ms;">
                        <img src="@/assets/cylm/card4@2x.png" alt="">
                    </div>
                    <div class="card-inner" style="transition-delay:200ms;">
                        <img src="@/assets/cylm/card5@2x.png" alt="">
                    </div>
                    <div class="card-inner" style="transition-delay:400ms;">
                        <img src="@/assets/cylm/card6@2x.png" alt="">
                    </div>
                </div>
            </div>
            <img src="@/assets/cylm/section2.png" alt="">
            <img  class='bg' src="@/assets/cylm/section2-bg.png" alt="" :style="resolveScroll(0, 0, 380, -0.1)">
        </div>
        <!--板块3-->
        <div class="section-3">
            <div class="content">
                <div class="card-content">
                    <div class="card" style="transition-delay:0ms;">
                        <img src="@/assets/cylm/section-3-1.png" alt="">
                    </div>
                </div>
                <div class="card-content">
                    <div class="card" style="transition-delay:300ms;">
                         <img src="@/assets/cylm/section-3-2.png" alt="">
                    </div>
                </div>
                <div class="card-content">
                    <div class="card" style="transition-delay:600ms;">
                         <img src="@/assets/cylm/section-3-3.png" alt="">
                    </div>
                </div>
            </div>
            <div class="bg bg-1"><img src="@/assets/cylm/section-3-bg.png" alt=""></div>
            <div class="bg bg-2"><img src="@/assets/cylm/section-3-bg.png" alt=""></div>
        </div>
        <!--板块4 logo 墙-->
        <div class="section-4">
            <div class="content">
                <img src="@/assets/cylm/section-4.png" alt="">
                <img src="@/assets/cylm/section-4-mask.png" alt="" class="top">
                <img src="@/assets/cylm/section-4-mask.png" alt="" class="bottom">
                <img src="@/assets/cylm/section-4-logo.png" alt="" class="logo">
                <div class="icon">
                    <div class="icon-circle">
                        <div class="icon-img" style="transition-delay: 0ms;">
                            <img src="@/assets/cylm/section-4-icon-1.png" alt="">
                        </div>
                        <p class="text" style="transition-delay: 200ms;">新计算</p>
                    </div>
                    <div class="icon-circle">
                        <div class="icon-img" style="transition-delay: 200ms;">
                            <img src="@/assets/cylm/section-4-icon-2.png" alt="">
                        </div>
                        <p class="text" style="transition-delay: 400ms;">新应用</p>
                    </div>
                    <div class="icon-circle">
                        <div class="icon-img" style="transition-delay: 400ms;">
                            <img src="@/assets/cylm/section-4-icon-3.png" alt="">
                        </div>
                        <p class="text" style="transition-delay: 600ms;">新业态</p>
                    </div>
                </div>
            </div>
        </div>
        <!--板块5 联盟案例-->
        <div class="section-5">
            <div class="img-content">
                <img src="@/assets/cylm/section-5.png" alt="">
                <div class="detail-content">
                    <div class="card first" style="transition-delay: 0ms;">
                        <img  class="display" src="@/assets/cylm/img-1.png" alt="">
                        <div class="img-content">
                            <img  class="pic" src="@/assets/cylm/img-1-pic.png" alt="">
                            <div class="line"></div>
                        </div>
                        <div class="text-box">
                            <p>
                                2018年12月20日，
                                中国联通携手百度智能云打造的全新智能客服系统在黑龙
                                江成功上线，率先融入百度智能云AI技术，实现了客服
                                热线全面升级。今后，黑龙江联通用户拨通10010热线，
                                将陆续能够体验到只要动动嘴巴，智能客服就能根据你
                                说的需求，帮你办理各种业务。
                            </p>
                        </div>
                    </div>
                    <div class="card" style="transition-delay: 200ms;">
                        <img  class="display" src="@/assets/cylm/img-2.png" alt="">
                    </div>
                    <div class="card" style="transition-delay: 400ms;">
                        <img  class="display" src="@/assets/cylm/img-3.png" alt="">
                    </div>
                    <div class="card" style="transition-delay: 600ms;">
                        <img  class="display" src="@/assets/cylm/img-4.png" alt="">
                    </div>
                    <div class="card first line-2" style="transition-delay: 200ms;">
                        <img  class="display" src="@/assets/cylm/img-5.png" alt="">
                    </div>
                    <div class="card line-2" style="transition-delay: 400ms;">
                        <img  class="display" src="@/assets/cylm/img-6.png" alt="">
                    </div>
                    <div class="card line-2" style="transition-delay: 600ms;">
                        <img  class="display" src="@/assets/cylm/img-7.png" alt="">
                    </div>
                    <div class="card line-2" style="transition-delay: 800ms;">
                        <img  class="display" src="@/assets/cylm/img-8.png" alt="">
                    </div>
                </div>
            </div>
            <div class="bg bg-1"><img src="@/assets/cylm/section-3-bg.png" alt=""></div>
            <div class="bg bg-2"><img src="@/assets/cylm/section-3-bg.png" alt=""></div>
        </div>
        <!--页面底部-->
        <div class="bottom">
            <img src="@/assets/cylm/bottom.png" alt="">
        </div>
  </div>
</template>

<style lang="stylus">
@import '../styls/style.styl'
</style>


<script>
import acuHeader from '@/components/cylm/acuHeader.vue'
import heroBanner from '@/components/cylm/heroBanner.vue'
export default {
    components: {acuHeader, heroBanner},
    data(){
        return {
            scrollTop: 0,
            direction: 'down'
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScrollCYLM, true);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScrollCYLM, true);
    },
    methods: {
       resolveScroll(begin, top, bottom, speed) {
            let style = 'transform: translateY(' + top + 'px)';
            if (this.scrollTop > begin) {
                let y =  (this.scrollTop  ) * speed  +  top 
                if (y < bottom  ) {
                    style = 'transform: translateY(' + y + 'px)';
                } else {
                    style = 'transform: translateY(' + bottom + 'px)';
                }   
            }
            return style
       },
       resolveClass() {
            let className = ''
            if (this.scrollTop > 60){  // 顶部导航栏状态动画
                className += ' not-top' //进入产品页板块
            }
            if (this.scrollTop > 250){  // 顶部导航栏状态动画
                className += ' section-2-card' //进入产品页板块
            }
            if (this.scrollTop > 700){  // 顶部导航栏状态动画
                className += ' section-3-card' //进入产品页板块
            }
            if (this.scrollTop > 1300){  // 顶部导航栏状态动画
                className += ' section-4-card' //进入产品页板块
            }
            if (this.scrollTop > 1800){  // 顶部导航栏状态动画
                className += ' section-5-card' //进入产品页板块
            }
            return className
       },
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
        } 

    }
}
</script>
