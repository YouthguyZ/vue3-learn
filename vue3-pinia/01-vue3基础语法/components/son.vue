<template>
  <h1>
    son获得了:<span>{{car}}</span>,薪水：{{RMB }}￥
  </h1>
  <button @click="hchange">触发机车</button>
  <!-- 子向父传值 -->
  <button @click="hChangeCar">换个车玩</button>
</template>

<script setup>
  // 接收父组件的值  可以设置变量接值
  // defineProps({
  //   car:{
  //     type:String
  //   }
  // })

  let props = defineProps({
    car:{
      type:String
    },
    RMB:{
      type:Number
    }
  })
  let hchange = ()=>{
    // 插值表达式可以直接使用 car 但是方法事件需要访问外层变量直接使用
    // console.log('car:',car);
    console.log('car:',props.car);
  }

  //-------------------------------------//
  // 子向父传值
  // 获取 emit 事件
  let emit = defineEmits(['changeCar']) 
  // 触发传值事件
  let hChangeCar = ()=>{
    // 触发事件
    emit('changeCar','GTR!!!')
  }
</script>

<style lang="scss" scoped>

</style>