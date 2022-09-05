import Vue from 'vue'
import VueRouter from 'vue-router'
import helloWorld from '../components/HelloWorld.vue'
// import HelloWorld from '../components/HelloWorld'
Vue.use(VueRouter)
// 定义路由
// 每个路由都映射到组件中
const routes = [{
  path: '/ll',
  name: 'index',
  component: () => import('../views/index.vue')
},
{
  path:'/',
  name: 'helloWorld',
  component: helloWorld
}]

// 创建路由实例并传递 `routes` 配置
const router = new VueRouter({
  mode:"history",
  routes // `routes: routes` 的缩写
})

export default router