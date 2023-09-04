<script setup>
import {computed} from 'vue'
// 父向子传值
const {list} = defineProps({
  list:{
    type:Array,
    required:true
  }
})
// 定义事件 传递 
const emit = defineEmits(['hChangDone','delete','allCheck'])

// 定义点击修改事件
const hChange = (id)=>{
  // console.log('modify',id);
  // 获取接收过来的 id 值 具体id 值 来定位具体数据
  emit('hChangDone',id)
}

// 删除事件 delete
// 只需要传递需要删除的 id
// emit 子向父传值
// const hDelete = ()=>{

// }
// 全选事件 所有 done 为 true
// 计算属性 只读
// 要修改的话 就要写完整的 计算属性 set（）、get（）
// const isAll = computed(()=>{
//   return list.every(item =>{
//     return item.done
//   })
// })
const allCheck = computed({
  set(value){
    // console.log('set',value);
    // 将拿到的val值传到父组件 修改所有 done 通过 emit
    emit('allCheck',value)

  },
  get(){
    return list.every(item=>item.done)
  }
})

</script>

<template>
  <section class="main">
    <!-- :checked="isAll" -->
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allCheck" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed:item.done}" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" @change="hChange(item.id)"/>
          <label>{{ item.name }}</label>
          <button @click="emit('delete',item.id)" class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
      <!-- <li class="completed">
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>Buy a unicorn</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Rule the web" />
      </li> -->
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
