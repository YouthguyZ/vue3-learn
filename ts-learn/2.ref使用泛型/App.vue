<template>
  <div>
    父组件
  </div>
  {{ msg }}{{ msgs }}{{ list }}
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  // ref 类型  const msg: Ref<string>
  const msg = ref('吃书哈哈')
  const msgs = ref<number>(9999)

  // const list: Ref<{
  //   id: number;
  //   name: string;
  //   done: boolean;
  // }[]>
  // const list = ref([
  //   {id:1,name:"wen",done:true},
  //   {id:2,name:"wen",done:true},
  //   {id:3,name:"wen",done:true}
  // ])
  // 定义类型
  type todo = {
    id:number
    name:string
    done:boolean
  }[]

  // 1.
  // const list = ref<{
  //   id:number
  //   name:string
  //   done:boolean
  // }[]>([
  //   {id:1,name:"wen",done:false},
  //   {id:2,name:"wen",done:true},
  //   {id:3,name:"wen",done:true}
  // ])
  // 2.使用泛型
  const list = ref<todo>([
    {id:1,name:"wen",done:false},
    {id:2,name:"wen",done:true},
    {id:3,name:"wen",done:true}
  ])
</script>

<style scoped>

</style>