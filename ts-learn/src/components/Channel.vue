<script lang="ts" setup>
// 调接口
import useStore from '../store/index'
const {channel} = useStore()
console.log(channel.getChannel());

</script>

<template>
  <ul class="catagtory">
    <!-- 数据渲染 解决高亮问题 -->
    <!-- :class="item.id === channel.active?{select:true}:{select:false}" 三元表达式判断 -->
    <li :class="{select:item.id === channel.active}" @click="channel.clickEven(item.id)" v-for="item in channel.channelList" :key="item.id">{{item.name}}</li>
    <!-- <li>ios</li>
    <li>c++</li>
    <li>android</li>
    <li>css</li>
    <li>数据库</li>
    <li>区块链</li>
    <li>go</li>
    <li>产品</li>
    <li>后端</li>
    <li>linux</li>
    <li>人工智能</li>
    <li>php</li>
    <li>javascript</li>
    <li>架构</li>
    <li>前端</li>
    <li>python</li>
    <li>java</li>
    <li>算法</li>
    <li>面试</li>
    <li>科技动态</li>
    <li>js</li>
    <li>设计</li>
    <li>数码产品</li>
    <li>html</li>
    <li>软件测试</li>
    <li>测试开发</li> -->
  </ul>
</template>

<style scoed lang="less"></style>
