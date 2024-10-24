<script setup lang="ts">
import Person from './Person.vue';
import {ref} from "vue";
import MyHello from "@/components/myHello.vue";

const abc = ref("666")
abc.value = "<p style='color: red'>Hello</p>"
</script>

<template>
  <div>首页</div>
  <span v-html="abc"></span>
  <p>{{ abc }}</p>
  <div>
    <button @click="abc=abc+','" style="width: 100px;height: 30px">增加abc绑定值</button>
  </div>
  <div style="margin-top: 20px">
    <Person></Person>
  </div>

  <div style="margin-top: 20px">
    <my-hello></my-hello>
  </div>

</template>

<style scoped>
</style>
