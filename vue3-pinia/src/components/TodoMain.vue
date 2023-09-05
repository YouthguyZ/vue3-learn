<script setup>
import { useTodoStore } from '../store/todos';
import {watch} from 'vue'
// 接收实例对象
const todos = useTodoStore()
// console.log(todos);

// 侦听  Vue3组件不发生变化，如何监听pinia中数据变化？=>$subscribe  
todos.$subscribe(()=>{
  // console.log(todos.list);
  // 存储本地
  localStorage.setItem('todos',JSON.stringify(todos.list))
})
</script>

<template>
  <section class="main">
    <input @change="todos.hChangAll(!todos.isAll)" :checked="todos.isAll" id="toggle-all" class="toggle-all" type="checkbox"/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed:item.done}" v-for="item in todos.showList" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" @change="todos.hChangeDone(item.id)"/>
          <label>{{item.name}}</label>
          <button @click="todos.hDel(item.id)" class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
      <!-- <li>
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>Buy a unicorn</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Rule the web" />
      </li> -->
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
