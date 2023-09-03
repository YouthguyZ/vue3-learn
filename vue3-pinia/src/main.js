import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

// viewerjs
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

// 创建应用
const app = createApp(App)

// // 挂载使用
app.use(createPinia())
// app.use(router)
app.use(VueViewer,{
  Options: {
      'inline': true,
      'button': true, //右上角按钮
      "navbar": true, //底部缩略图
      "title": true, //当前图片标题
      "toolbar": true, //底部工具栏
      "tooltip": true, //显示缩放百分比
      "movable": true, //是否可以移动
      "zoomable": true, //是否可以缩放
      "rotatable": true, //是否可旋转
      "scalable": true, //是否可翻转
      "transition": true, //使用 CSS3 过度
      "fullscreen": true, //播放时是否全屏
      "keyboard": true, //是否支持键盘
      "url": "data-source",
    }
})


// // 挂载应用
app.mount('#app')

// vue3 创建挂载
// createApp(App).use(createPinia()).mount('#app')
