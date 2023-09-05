import { createApp } from 'vue'
import App from './App.vue'
// 导入 pinia
import { createPinia } from 'pinia'

// 创建 pinia 对象
const pinia = createPinia()


createApp(App).use(pinia).mount('#app')
