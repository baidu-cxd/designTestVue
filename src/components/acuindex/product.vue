<template>
    <div class="product">
        <h2>丰富可靠的智能云产品</h2>
        <!-- 行 -->
        <div v-for="(raw,j) in products" :key="j" class="details-product">
         <div class="products-content">
          <div class="product-content" 
            v-for="(product,i) in raw" :key="product.name"
            :class="recent.col === i ? 'recent':''" @click="changeRecent(i,j)">
            <div class="img-content" :class="recent.raw === j && recent.col === i ? 'open':''">
              <img :src="product.img" alt="">
            </div>
            <p class="name">{{product.name}}</p>
          </div>
         </div>
         <transition-group class="details" tag="div" name="fade-group" 
           :style ="resolveStyle()"
           v-show="recent.raw===j">
          <!-- 详情 -->
          <div class="details-content" 
            v-for="(product,i) in products[0]"
            v-show="recent.col===i && recent.raw===j"
            :key="product.name">
            <!-- 左侧 -->
            <div class="left">
              <div class="left-item" 
                v-for="left in product.details.left"
                :key="left.name">
                  <h3>{{left.name}}</h3>
                  <p>{{left.text}}</p>
                  <div class="light-button">
                    <p>立即购买</p>
                  </div>
              </div>
            </div>
            <!-- 右侧 -->
            <div class="right">
                <div class="col" v-for="(rights,i) in product.details.right" :key="i">
                  <div class="right-item" v-for="right in rights" :key="right.name">
                    <h3>{{right.name}}</h3>
                    <p>{{right.text}}</p>
                  </div>
                </div>
            </div>
          </div>
         </transition-group>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      recent: {
        raw: 0,
        col: 0,
      },
      products: [
        [
          {
            name: '计算与网络', 
            img: require('@/assets/acu-index/计算与网络.png'),
            details: {
              left: [
                {
                  name: '云服务器 BCC',
                  text: '高性能、高可靠、安全稳定的弹性计算服务'
                },
                {
                  name: 'GPU 服务器',
                  text: '配备独享GPU的高性能云计算服务'
                },
                ],
              right: [
                [
                  {
                    name: '专属服务器',
                    text: '提供性能可控、物理资源隔离的专属云计算服务'
                  },
                  {
                    name: '应用防火墙 WAF',
                    text: '防SQL注入、防后门上传，专业防护各种web漏洞攻击'
                  },
                  {
                    name: '主机安全客户端',
                    text: '专业的云服务器安全客户端'
                  },
                  {
                    name: '安全检测服务 SRD',
                    text: '检测多种常见Web漏洞，提升业务安全性和稳定性'
                  },
                ],
                [
                  {
                    name: '专属服务器',
                    text: '提供性能可控、物理资源隔离的专属云计算服务'
                  },                  
                ]
              ],
            }
          },
          {
            name: '存储与 CND', 
            img: require('@/assets/acu-index/存储与CDN.png'),
            details: {
              left: [
                {
                  name: 'GPU 服务器',
                  text: '配备独享GPU的高性能云计算服务'
                },
                ],
              right: [
                [
                  {
                    name: '专属服务器',
                    text: '提供性能可控、物理资源隔离的专属云计算服务'
                  },
                  {
                    name: '应用防火墙 WAF',
                    text: '防SQL注入、防后门上传，专业防护各种web漏洞攻击'
                  },
                  {
                    name: '主机安全客户端',
                    text: '专业的云服务器安全客户端'
                  },
                ],
                [
                  {
                    name: '专属服务器',
                    text: '提供性能可控、物理资源隔离的专属云计算服务'
                  },                  
                ]
              ],
            }
          },
          {
            name: '数据库', 
            img: require('@/assets/acu-index/数据库.png'),
            details: {
              left:[

              ],
              right: [

              ]
            }
          },
          {
            name: '安全与管理', 
            img: require('@/assets/acu-index/安全和管理.png'),
            details: {
              left:[

              ],
              right: [

              ]
            }
          },
          {
            name: '大数据分析', 
            img: require('@/assets/acu-index/大数据分析.png'),
            details: {
              left:[

              ],
              right: [

              ]
            }
          }
        ],
[
          {
            name: '计算与网络', 
            img: require('@/assets/acu-index/计算与网络.png'),
            details: {
              left: [
                {
                  name: '云服务器 BCC',
                  text: '高性能、高可靠、安全稳定的弹性计算服务'
                },
                {
                  name: 'GPU 服务器',
                  text: '配备独享GPU的高性能云计算服务'
                },
                ],
              right: [
                [
                  {
                    name: '专属服务器',
                    text: '提供性能可控、物理资源隔离的专属云计算服务'
                  },
                  {
                    name: '应用防火墙 WAF',
                    text: '防SQL注入、防后门上传，专业防护各种web漏洞攻击'
                  },
                  {
                    name: '主机安全客户端',
                    text: '专业的云服务器安全客户端'
                  },
                  {
                    name: '安全检测服务 SRD',
                    text: '检测多种常见Web漏洞，提升业务安全性和稳定性'
                  },
                ],
                [
                  {
                    name: '专属服务器',
                    text: '提供性能可控、物理资源隔离的专属云计算服务'
                  },                  
                ]
              ],
            }
          },
          {
            name: '存储与 CND', 
            img: require('@/assets/acu-index/存储与CDN.png'),
            details: {
              left: [
                {
                  name: 'GPU 服务器',
                  text: '配备独享GPU的高性能云计算服务'
                },
                ],
              right: [
                [
                  {
                    name: '专属服务器',
                    text: '提供性能可控、物理资源隔离的专属云计算服务'
                  },
                  {
                    name: '应用防火墙 WAF',
                    text: '防SQL注入、防后门上传，专业防护各种web漏洞攻击'
                  },
                  {
                    name: '主机安全客户端',
                    text: '专业的云服务器安全客户端'
                  },
                ],
                [
                  {
                    name: '专属服务器',
                    text: '提供性能可控、物理资源隔离的专属云计算服务'
                  },                  
                ]
              ],
            }
          },
          {
            name: '数据库', 
            img: require('@/assets/acu-index/数据库.png'),
            details: {
              left:[

              ],
              right: [

              ]
            }
          },
          {
            name: '安全与管理', 
            img: require('@/assets/acu-index/安全和管理.png'),
            details: {
              left:[

              ],
              right: [

              ]
            }
          },
          {
            name: '大数据分析', 
            img: require('@/assets/acu-index/大数据分析.png'),
            details: {
              left:[

              ],
              right: [

              ]
            }
          }
        ]
      ]
    }
  },
  methods: {
    changeRecent(i,j) {
      this.recent.col = i
      this.recent.raw =j
    },
    resolveStyle() {
      if (this.recent.col === 0) {
        return 'height : 376px'
      }
      else if (this.recent.col === 1) {
        return 'height : 320px'
      }
    }
  }
}
</script>


<style lang="stylus">

.fade-group-enter-active
  transition .2s all ease-in-out .2s
  .left-item, .right-item
    transition .2s all ease-in-out .2s
.fade-group-leave-active
  transition .2s all ease-in-out 
  .left-item, .right-item
    transition .2s all ease-in-out 
.fade-group-enter
  opacity 0
  .left-item, .right-item
    opacity 0
    transform translateY(20px)
.fade-group-leave-to
  opacity 0
  .left-item, .right-item
    opacity 0
    transform translateY(-20px)  
.fade-group-enter-to, .fade-group-leave
  opacity 1
  .left-item, .right-item
    opacity 1
    transform translateX(0)

.section-3 .product
  h2, .details-product
    opacity 1
    transform translateY(0px)
.product
  h2, .details-product
    opacity 0
    transform translateY(20px)
    transition .4s all ease-in-out
  width 100%
  background-color #F6F8FB
  overflow hidden
  padding-bottom 100px
  h2
    font-size 30px
    line-height 48px
    height 48px
    color #3C4254
    text-align center
    font-weight 400
    margin 100px 0 44px
  .products-content
    width 1100px
    margin 30px auto 30px 
    height 114px
    position relative
    .product-content
      &:hover
        cursor pointer
        .img-content
          background-color rgba(255,255,255,1)
          box-shadow 0 4px 10px rgba(0,0,0,.05)
      width 20%
      float left 
      heifght 114px
      p
        width  100%
        text-align center
        color #454A5B
        font-size 16px
        line-height 30px
        margin 4px 0
    .img-content
      width 80px
      height 80px
      background-color rgba(255,255,255,0)
      border-radius 100px
      transition .2s all ease-in-out
      margin auto
      &.open
        background-color rgba(255,255,255,1)
      img 
        width 48px
        margin 16px
  .details
    transition .4s all ease-in-out
    position relative
    width 1180px
    margin auto
    padding 50px 56px
    background-color #ffffff
    box-shadow 0 10px 20px rgba(0,0,0,.05)
    box-sizing border-box
    border-radius 4px
    height 0px
    .details-content
      position relative
      position absolute
      top 50px
      left 56px
    .left
      width 300px
      border-right 1px solid rgba(101,113,137,.22)
      padding 0 24px 0 0
      box-sizing border-box
      float left
      margin-top 0
      position absolute
      top 0px 
      bottom 0px
      .left-item
        &:first-child
          margin 0
        margin 40px 0 0px 0
        h3
          font-size 20px
          line-height 34px
          color #454A5B
          margin 0
          font-weight 500
        p
          font-size 14px
          line-height 26px
          color #747C90
          margin 0
        .light-button
          width 140px
          height 36px
          border 1px solid #B5BAC4
          margin-top 20px
          border-radius 100px
          box-sizing border-box
          &:hover
            cursor pointer
          p
            text-align center
            line-height 34px
    .right
      margin -20px -20px -20px 320px
      .col
        float left
        width 340px
        margin 0 20px 20px 20px
        .right-item
          margin-top 20px
          &:hover
            h3
              color #2468f2
              opacity 1
            p
              // opacity 1
            cursor pointer
          h3
            font-size 14px
            line-height 24px
            font-weight 500
            color #454A5B
            margin 0
            transition .2s all ease-in-out
          p
            color #747C90
            opacity .8
            font-size 14px
            line-height 24px
            margin 6px 0 0 0 
            transition .2s all ease-in-out
</style>
