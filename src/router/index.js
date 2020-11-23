import Vue from 'vue'
import VueRouter from 'vue-router'
import noticeRouter from './notice'
import homeRouter from './home'
import mineRouter from './mine'
import shareRouter from './share'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    noticeRouter,
    homeRouter,
    mineRouter,
    shareRouter,
    {
      path :  '/*',
      redirect : '/home'
    }
  ]
})

export default router
