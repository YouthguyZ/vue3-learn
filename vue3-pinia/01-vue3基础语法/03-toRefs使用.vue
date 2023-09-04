<template>
  <div>
    姓名：{{ name }},
    年龄：{{ age }},
    爱好：{{  }}
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
import { reactive,toRefs } from 'vue';
  // reactive 不用加 .value
  // people 不使用响应式方法包裹 无法在模板里被改变 方法里操作会改变 但是 template 
  // 里面{{}}插值表达式不会自动修改

  // 需要验证基础数据类型是否 可以用响应式 reactive? 试了下可以用 只是会控制台警告？
  let people = reactive({name:'大炮',age:88})
  // 解构赋值
  // let {name,age} = people // 直接结构赋值会丢失 响应式数据 解决方法 toRefs()
  let {name,age} = toRefs(people) // 使用 torefs 后 会把属性的每一个都包裹 ref 转换为响应式
  // 所以操作属性 修改数据时需要 加 .value
  const hDao = ()=>{
    age.value = age.value -5
    console.log('people',people);
  }
</script>

<style lang="scss" scoped>
  .btn{
    margin-top: 10px;
  }
</style>