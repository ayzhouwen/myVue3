<script setup lang="ts">
import Person from './Person.vue';
import {ref} from "vue";
import MyHello from "@/components/myHello.vue";
import MyHello2 from "@/components/myHello2.vue";
</script>

<template>
  <div style="margin-top: 20px">
    <p>======Person开始================Person开始================Person开始</p>
    <Person></Person>
    <p>======Person结束================Person结束================Person结束</p>
  </div>

  <div style="margin-top: 20px">
    <p>======MyHello开始================MyHello开始================MyHello开始</p>
    <MyHello></MyHello>
    <p>======MyHello结束================MyHello结束================MyHello结束</p>
  </div>

  <div style="margin-top: 20px">
    <p>======MyHello2开始================MyHello2开始================MyHello2开始</p>
    <MyHello2></MyHello2>
    <p>======MyHello2结束================MyHello2结束================MyHello2结束</p>
  </div>

</template>

<style scoped>
</style>

<style>
button{
  width: 100px;
  height: 30px;
}
</style>
