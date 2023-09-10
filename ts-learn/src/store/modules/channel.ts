import axios from 'axios'
import {defineStore} from 'pinia'
import { channelItem, channelList } from '../../types'

// // 定义类型
// type channelList = {
//   data:{
//     channels:{id:number,name:string}[]
//   },
//   massage:string
// }
// type channelItem = {
//   id:number,
//   name:string
// }
// 默认导出
export default defineStore('channel',{
  state(){
    return {
      // 使用类型断言
      channelList:[] as channelItem[],
      active:-1
    }
  },
  actions:{
    // 调用接口
    async getChannel(){
      const res = await axios.get<channelList>('http://geek.itheima.net/v1_0/channels')
      console.log(res.data.data.channels[0].name);
      this.channelList = res.data.data.channels
      // 默认第一个值 id 为 active
      this.active = res.data?.data?.channels?.[0].id
    },
    clickEven(id:number){
      console.log(id);
      this.active = id
      
    }
  }
})