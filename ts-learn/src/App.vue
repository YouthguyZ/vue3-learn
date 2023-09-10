<template>
  <div>
    <Channel/>
    <NewList/>
  </div>
</template>

<script setup lang="ts">
// 导入组件
import Channel from './components/Channel.vue'
import NewList from './components/NewList.vue'

// // 导入使用 pinia
// import useStore from './store'
// const {channel}= useStore()
// console.log(channel.name);
// console.log(useStore());

</script>

<style scoped>

</style>