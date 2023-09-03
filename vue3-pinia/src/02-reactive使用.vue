<template>
  <div>
    姓名：{{ people.name }},
    年龄：{{ people.age }},
    爱好：{{ hobby }}
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
import { reactive } from 'vue';
  // reactive 不用加 .value
  // people 不使用响应式方法包裹 无法在模板里被改变 方法里操作会改变 但是 template 
  // 里面{{}}插值表达式不会自动修改

  // 需要验证基础数据类型是否 可以用响应式 reactive
  let people = reactive({name:'大炮',age:88})
  let hobby = reactive(66)
  const hDao = ()=>{
    people.age = people.age -5
    console.log(people,'people');
    hobby+=1
  }
</script>

<style lang="scss" scoped>
  .btn{
    margin-top: 10px;
  }
</style>