<script lang="ts" setup>
import { watch } from 'vue';
import useStore from '../store'
const {newsList,channel} = useStore()
// console.log(newsList.getNewsList(channel.active));
// 侦听变化
// 第一个参数 监听数据 （）=>{
// return channel.active
// }

watch(()=>channel.active,()=>{
  console.log(channel.active);
  // 变化既调用 查询数据
  console.log(newsList.getNewsList(channel.active));
})

</script>

<template>
  <!-- src="http://geek.itheima.net/resources/images/11.jpg" -->
  <div className="list">
    <div className="article_item" v-for="(item,index) in newsList.newsList" :key="index">
      <h3 className="van-ellipsis">{{item.title}}</h3>
      <div className="img_box">
        <img
        
          :src="item.cover?.images?.[0] ||'http://geek.itheima.net/resources/images/11.jpg'"
          className="w100"
          alt=""
        />
      </div>
      <div className="info_box">
        <span>{{item.aut_name}}</span>
        <span>{{item.comm_count}}评论</span>
        <span>{{item.pubdate}}</span>
      </div>
    </div>
  </div>
</template>

<style scoed lang="less"></style>
