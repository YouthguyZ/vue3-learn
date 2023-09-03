<template>
  <div>
    姓名：{{ pepole.name }}
    年龄：{{ pepole.age }}
    <div class="btn">
      <button @click="hDao">
        🔪一下
      </button>
      <button @click="hHelp" style="margin-left: 10px;">
        救一下
      </button>
    </div>
  </div>
</template>

<script setup>
  // setup 里面定义的数据没有 响应式 要用 ref 包裹才有响应式 修改同步生效
  import { ref } from 'vue';
  const pepole = ref({name:'三炮',age:100})
  // mehtods
  const hDao = ()=>{
    // 直接修改 ref 包裹的数据 也没有响应式数据
    // pepole.age = pepole.age -5
    pepole.value.age = pepole.value.age -5

    console.log(pepole,'people');
  }
  // console.log(count);
  const hHelp = ()=>{
    // 直接修改 ref 包裹的数据 也没有响应式数据
    // pepole.age = pepole.age -5
    pepole.value.age = pepole.value.age + 2

    console.log(pepole.value.age,'add');
  }
</script>

<style lang="scss" scoped>
  .btn{
    margin-top: 10px;
  }
</style>