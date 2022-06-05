import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  }
]

// 动态加载views目录下的所有路由
const files = require.context('@/views', true, /route\.js/)
files.keys().forEach(key => {
  routes.unshift(files(key).default)
})

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
