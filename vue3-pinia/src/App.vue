<template>
  <div >
    <h3>父组件</h3>
    <!-- 父向子组件传值  -->
    <!-- 父组件事件监听事件是子组件 emit()传递过来的事件 -->
    <son :car="car" :RMB="dollar" @changeCar="hcar"></son>
  </div>
</template>

<script setup>
// 父组件
import son from './components/son.vue'
import {ref} from 'vue'
// 父组件的值
let car = ref('911')
let dollar = ref(1000)
//--------------------//
// 父组件定义事件=处理函数
let hcar = (value)=>{
  console.log(value);
  car.value = value
}
</script>

<style lang="scss" scoped>
  .btn{
    margin-top: 10px;
  }  
</style>