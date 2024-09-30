<script setup lang="ts">
import {useRoute} from 'vue-router'
const route = useRoute()
// 打印query参数
console.log(route.query)

</script>

<template>
  <div class="mYLargeScreen">
    <div>大屏数据展示</div>
    <p>ID: {{ route.query.id }}</p>
    <p>Token: {{ route.query.token }}</p>
  </div>

</template>

<style scoped>
.mYLargeScreen{
  width: 100%;
  height: 100%;
  background: cornflowerblue;
}

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.mYLargeScreen {
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
}
</style>