<script setup>
  // 定义数据 v-model .trim 修饰符去空
  import { ref } from 'vue'
  const taskName = ref('')
  // emit 方法
  const emit = defineEmits(['addTask'])
  // 定义回车事件 触发数据传递
  // 回车后清除数据
  const hkeydown = ()=>{
    // 限制如果没有输入值 则不添加任务
    if(taskName.value ==='')return
    emit('addTask',taskName.value)
    taskName.value = ''
  }
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input @keydown.enter="hkeydown" v-model.trim="taskName" class="new-todo" placeholder="What needs to be done?" autofocus />
  </header>
</template>

<style lang="less" scoped></style>
