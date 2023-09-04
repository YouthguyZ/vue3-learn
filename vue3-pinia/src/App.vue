<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
import { ref,watch } from 'vue';
// 数据定义到 app.vue
// 一、主体数据渲染(父传子) 
// 1.定义数据
// 2.渲染数据

// 二、修改状态(子传父)
// 1.修改 父组件 done 需要使用 子向父传值 自定义方法事件

// 三、删除任务
// filter guolv

// 四、新增任务
// 1.数据双向绑定
// 2.子向父传值  header.vue => app.vue

// 五、底部计算属性运用

// 六、全选与反选(computed emit)



// const list = ref(
// [
//   {
//     id: 1,
//     name: '吃饭',
//     done: false,
//   },
//   {
//     id: 2,
//     name: '睡觉',
//     done: true,
//   },
//   {
//     id: 3,
//     name: '打游戏',
//     done: false,
//   },
    
// ])

// 获取本地数据
const list = ref(JSON.parse(localStorage.getItem('todos')||'[]'))
// 定义事件接收
const hChangeDone = (id)=>{
  // console.log('父组件接收id',id);
  // 遍历数组找到相等的 id 那条数据
  // ​​​​​​​find()方法用于查找数组中符合条件的第一个元素，如果没有符合条件的元素，则返回undefined
  // return 返回值
  const todo = list.value.find((item)=>{
    return item.id === id
  })
  // console.log('todo',todo);
  todo.done = !todo.done
}
// 删除id 拿到后修改 list 数组展示 利用 fifter 过滤
const hDel = (id)=>{
  // console.log(id);
  // filter 过滤 
  // 返回值 return
  list.value = list.value.filter((item)=>{
    return item.id !== id
  })
  // console.log(list)
}

// 新增任务方法
const hAddTask = (taskName)=>{
  // console.log(taskName,'任务');
  list.value.push(
    {
      id: new Date(),
      name: taskName,
      done: false,
    },
  )
}

// 全选与反选
const hAllCheck =(value)=>{
  // console.log('选不选',value);
  list.value.forEach((item)=>{
    // 赋值
    item.done = value
  })
}

// 侦听数据存储到本地
// 三个参数 
// 参数1、需要侦听的数据
// 参数2、回调函数
// 参数3、深度侦听

// vue3中 侦听数据变化 可以不用给要监听的数据加 .value 但是要打开第三个参数配置 deep：true 
watch(list,(newVal,oldVal)=>{
  // console.log('look',newVal);
  // console.log('look2',oldVal);
  // 存储本地 
  localStorage.setItem('todos',JSON.stringify(list.value))
},{
  // 深度侦听数据里的变化
  deep:true
})
</script>

<template>
  <section class="todoapp">
    <!-- // 组件 -->
    <TodoHeader @addTask="hAddTask"></TodoHeader>
    <TodoMain :list="list" @hChangDone="hChangeDone" @delete="hDel" 
    @allCheck="hAllCheck"></TodoMain>
    <TodoFooter :list="list"></TodoFooter>
  </section>
</template>

<style></style>
