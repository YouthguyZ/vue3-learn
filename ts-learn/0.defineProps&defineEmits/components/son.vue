<template>
  <div>
    子组件
    <span>父亲给了：{{ car }}</span>
  </div>
  <button @click="hGift">回馈</button>
</template>

<script setup lang="ts">
  // 非 ts 写法
  // defineProps({
  //   car:{
  //     type:String
  //   }
  // })

  // 再泛型里面约束
  // 定义类型
  type prop = {
    car:string
  }
  defineProps<prop>()

  // 非 ts 写法
  // const emit = defineEmits(['changegift'])
  // const hGift = ()=>{
  //   emit('changegift','送个大红包')
  // }

  // ts 写法
  // 泛型里面加限定 <>
  const emit = defineEmits<{
    // ():void
    (e:"changegift",gift:string):void
  }>()
  const hGift = ()=>{
    emit('changegift','送一个大手表')
  }
</script>

<style scoped>

</style>