<script setup>
import {computed} from 'vue'
  // 接收父组件值
  const {list} = defineProps({
    list:{
      type:Array,
      required:true
    }
  })

  // 计算属性 computed 只读方法
  const count = computed(()=>{
    return list.filter(item =>{
      // console.log(item);
      // return !item.done  返回取反后 为 true 的item.done  那就是本身是为 false 返回新数组
      return item.done === false
    }).length
  })
</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{count}}</strong> item left</span>
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
