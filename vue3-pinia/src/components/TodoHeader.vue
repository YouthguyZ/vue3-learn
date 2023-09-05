<script setup>
  import {ref} from 'vue'
  import { useTodoStore } from '../store/todos';
  const todos = useTodoStore()
  const taskname = ref('')
  // const emit = defineEmits(['add'])
  const hAdd = ()=>{
    if(taskname.value === '')return
    todos.hAdd(taskname.value)
    taskname.value = ''
    // emit('add',taskname.value)
  }
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input v-model.trim="taskname" @keydown.enter="hAdd" class="new-todo" placeholder="What needs to be done?" autofocus />
  </header></template>

<style lang="less" scoped></style>
