import { createApp } from "vue";
import App from './App.vue'

import './styles/index.css'

// 使用 pinia
import { createPinia } from "pinia";
const pinia = createPinia()


// 使用 axios
// import axios from "axios";

// // type
// type list = {
//   data:{
//     channels:{
//       id:number
//       name:string}[]
//   }
// }
// async function getList(){

//  const res =  await axios.get<list>('http://geek.itheima.net/v1_0/channels')
//   console.log(res.data.data.channels[0].name);
  
//   // console.log(axios.get('http://geek.itheima.net/v1_0/channels'));
  
// }
// getList()

createApp(App).use(pinia).mount('#app')