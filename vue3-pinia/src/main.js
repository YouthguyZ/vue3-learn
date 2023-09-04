import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'

// 创建 pinia
// const pinia = createPinia()

// 导入路由
import { createRouter, createWebHistory } from 'vue-router'

// 定义路由表
const routes = [
  {path:'/home',component:()=>import("./components/home.vue")},
  {path:'/login',component:()=>import("./components/login.vue")}
]
// 创建路由对象
const router = createRouter({
  // 路由规则
  routes,
  // 路由模式
  history:createWebHistory()

})

createApp(App).use(router).mount('#app')
