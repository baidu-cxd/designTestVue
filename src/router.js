import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Zhijian from './views/Zhijian.vue'
import Doc from './views/Doc.vue'
import AcuIndex from './views/AcuIndex.vue'
import Cylm from './views/Cylm.vue'
import testJJFA from './views/testJJFA.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/doc',
      name: 'doc',
      component: Doc
    },
    {
      path: '/acu-index',
      name: 'acu-index',
      component: AcuIndex
    },
    {
      path: '/cylm',
      name: 'chanyelianmeng',
      component: Cylm
    },
    {
      path: '/testJJFA',
      name: 'chanyelianmeng',
      component: testJJFA
    },
    {
      path: '/testJJFB',
      name: 'chanyelianmeng',
      component: testJJFA
    },
    {
      path: '/zhijianyun',
      name: 'zhijianyun',
      component: Zhijian,
      children: [
        {
          path: 'main',
          name: 'zhijianyun-main',         
        },
        {
          path: 'set',
          name: 'zhijianyun-set',         
        },
        {
          path: 'user',
          name: 'zhijianyun-user',         
        }
      ]
    }
  ]
})
