import axios from 'axios'
import {defineStore} from 'pinia'

type newres = {
  data:{
    pre_timestamp:string,
    results:newsListItem
  },
  message:string
}
type newsListItem = {
  art_id:string
  aut_id:string
  aut_name:string
  pubdate:string
  title:string
  comm_count:number
  is_top:number
  cover:{
    images:string[]
    type:number
  }
}[]
// 默认导出
export default defineStore('newsList',{
  state(){
    return {
      newsList:[] as newsListItem
    }
  },
  actions:{
    // 调用接口
    async getNewsList(id:number){
      const res = await axios.get<newres>(`http://geek.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${Date.now()}`)

      // console.log(res.data.data.results[0].aut_name);
      this.newsList = res.data.data.results
      
    },
  }
})