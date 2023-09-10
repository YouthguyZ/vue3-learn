// 状态管理模块 中转站
import useChannelStore from "./modules/channel";
import useNewsListStore from "./modules/newsList";
// console.log(useChannelStore(),'usechannel');

// 默认导出
export default function (){
  return{
    channel:useChannelStore(),
    newsList:useNewsListStore()
  }
}