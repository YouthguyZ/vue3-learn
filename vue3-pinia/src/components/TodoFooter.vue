<script setup>
import { useTodoStore } from '../store/todos';

const todos = useTodoStore()
</script>

<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{todos.count}}</strong>未完成</span>
    <ul class="filters">
      <li @click="todos.showState(item)" v-for="item in todos.state" :key="item">
        <a :class="{selected:item === todos.action}" href="#/JavaScript;">{{item}}</a>
      </li>
      <!-- <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li> -->
    </ul>
    <button @click="todos.hClearDone" class="clear-completed">清除已完成</button>
  </footer>
</template>

<style lang="less" scoped></style>
