<template>
  <div >
    <!-- component -->
    <viewer class="showviewer" :images="images">
      <img class="image" v-for="src in images" :key="src" :src="src">
    </viewer>
  </div>
</template>

<script setup>
import {ref} from 'vue'
  const images = ref(
    [
      "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-1.jpg",
      "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-2.jpg",
      "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-3.jpg",
      "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-4.jpg",
      "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-5.jpg",
      "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-6.jpg",
      "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-7.jpg",
      "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-8.jpg",
      "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-9.jpg",
    ]
  )

</script>

<style lang="scss" scoped>
  .btn{
    margin-top: 10px;
  }  .showviewer{
    // display: flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .image{
    width: calc(33.33% - 10px); /* 三列布局，减去间距 */
    margin-bottom: 20px; /* 图片之间的垂直间距 */
    box-sizing: border-box;
  }
</style>