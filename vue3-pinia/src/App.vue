<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
// pinia 用法管理数据
// 一、主体数据渲染
// 二、修改数据
// 三、删除任务
// 四、添加任务
// 五、全选与反选
// 六、底部统计与清除
// 七、底部切换
// 八、持久化存储
</script>

<template>
  <section class="todoapp">
    <TodoHeader></TodoHeader>
    <TodoMain></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<style></style>
