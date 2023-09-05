<template>
  <div>
    父组件-APP
    <div>
      月薪水：<span>{{ counter.money }}</span>
    </div>
    <button @click="hAdd">涨工资</button>
    
  </div>
</template>

<script setup>
// 导入模块
import { useCountStore } from './store/counter';
// 使用 数据
const counter = useCountStore()
const hAdd = ()=>{
  // 直接调用模块方法
  counter.add()
}
</script>

<style lang="scss" scoped>

</style>