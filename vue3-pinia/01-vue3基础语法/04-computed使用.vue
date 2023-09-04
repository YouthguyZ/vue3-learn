<template>
  <div>
    姓名：{{ name }},
    年龄：{{ age }},
    月薪资：{{ salary }}￥
    年薪资：{{ total }}￥
    <input type="text" v-model="total">
    <div class="btn">
      <button @click="hDao">
        🔪一下
      </button>
      <button @click="hAdd" style="margin-left: 10px;">
        加薪水
      </button>
    </div>
  </div>
</template>

<script setup>
// 计算属性 computed
import {ref,computed} from 'vue'
let name = ref('tom')
let age = ref(18)
let salary = ref(1800)

// 计算年薪 基础computed 用法
// 1.导入模块
// 2.return 数值
// 3.模板展示
// const total = computed(()=>{
//   return salary = salary.value *12
// })

// 进阶 computed get set 方法
// 年薪资
const total = computed({
  get(){
    return salary.value*12
  },
  set(value){
    console.log(value);// 接收到修改的值 输入框
    salary.value = value/12 // 数据绑定
  }
})

</script>

<style lang="scss" scoped>
  .btn{
    margin-top: 10px;
  }
</style>