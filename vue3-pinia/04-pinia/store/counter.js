// 定义模块
import {defineStore} from 'pinia'

// 导出数据
export const useCountStore = defineStore('counter',{
  // 方法
  state:()=>({
    money:10000
  }),
  actions:{
    add(){
      console.log(this);
      this.money = this.money*2
    }
  }
})