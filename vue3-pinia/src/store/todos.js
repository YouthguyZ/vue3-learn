// 定义数据
import {defineStore} from 'pinia'
export const useTodoStore =  defineStore('todos',{
  // state:()=>{
  //   return {

  //   }
  // }
  state:()=>({
    // list:[
    //   {id:1,name:'喝水',done:false},
    //   {id:2,name:'吃饭',done:true},
    //   {id:3,name:'哈哈哈',done:false}
    // ],
    list:JSON.parse(localStorage.getItem('todos')||'[]'),
    state:['未完成','全部','已完成'],
    action:'全部',
    taskname:''
  }),
  // 同步异步
  actions:{
    hChangeDone(id){
      // console.log(id);
      // 找到元素 通过 id
      const todo = this.list.find(item=>{
        return id ===item.id
      })
      todo.done = !todo.done
    },
    // del 任务
    hDel(id){
      this.list = this.list.filter(item =>{
        return item.id !== id
      })
    },
    // 增加
    hAdd(taskname){
      // if(this.taskname === '') return
      this.list.push({
        id:Date.now(),
        name:taskname,
        done:false
      })
    },
    // 全选或全不选
    hChangAll(val){
      console.log('value',val);
      this.list.forEach(item =>{
        item.done = val
      })
    },
    // 清除已完成的
    hClearDone(){
      this.list = this.list.filter(item =>{
        return item.done == false
      })
    },
    // 拿到状态
    showState(item){
      console.log(item);
      this.action = item
    }
  },
  // 计算属性
  getters:{
    isAll(){
      // every 方法会便历每一项元素 只有都为 true 时 才会返回值
      return this.list.every(item =>{
        return item.done 
      })
    },
    // 统计数量
    count(){
      return this.list.filter(item=>{
        return !item.done
      }).length
    },
    // 不同状态展示不同数据
    showList(){
      if(this.action === '已完成'){
        return this.list.filter(item =>{
          return item.done
        })
      }else if(this.action === '未完成'){
        return this.list.filter(item => !item.done)
      }else{
        return this.list
      }
    }
  }

})