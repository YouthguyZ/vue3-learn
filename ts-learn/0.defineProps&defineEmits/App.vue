<template>
  <div>
    父组件
  </div>
  <son :car="car" @changegift="hChange"/>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import son from './components/son.vue';
  const car = ref('GTR')
  const hChange = (val:string)=>{
    car.value = val
    console.log(val,'礼物');
    

  }
</script>

<style scoped>

</style>