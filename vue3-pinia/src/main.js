import { createApp } from 'vue'
import App from './App.vue'
import './styles/base.css'
import './styles/index.css'

// 导入 pinia
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
