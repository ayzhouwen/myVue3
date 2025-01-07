<template>
  <div style="background: brown">
    <div class="info1">
      <p>姓名：{{name}}</p>
      <p>年龄：{{age}}</p>
      <div>
        高手：{{gx.name}},{{gx.wg}}
      </div>
    </div>

    <div class="info2" >
      <button @click="updateName">修改姓名</button>
      <button @click="updateAge">修改年龄</button>
      <button @click="openLargeScreen">打开大屏</button>

    </div>
    <div>
      <p>测试shallowRef {{obj.nestedValue}}</p>
      <button @click="changeObjValue">Change obj value</button>
      <button @click="changeNestedValue">Change nested value</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref, shallowRef} from "vue";
import router from "@/router";
  let name=ref("张三丰")
  let age=ref(18)
  let gx=reactive({name:"王重阳",wg:"先天功"})
  function updateName(){
    name.value="张无忌";
    gx.wg='无相节指'
    gx.name='玄度'
  }
  function updateAge(){
    age.value++;
  }
  function openLargeScreen(){
    const id = '123'; // 示例ID
    const token = 'abcde'; // 示例Token
    // 使用 Vue Router 的 resolve 方法生成路由 URL
    const routeUrl = router.resolve({
      path: '/mYLargeScreen',
      query: {id,token}
    });
    // 在新标签页中打开生成的路由 URL
    window.open(routeUrl.href, '_blank');
  }

const obj = shallowRef({ nestedValue: 'initial nested value' });
function changeObjValue() {
  obj.value = { nestedValue: 'new value' };
}
function changeNestedValue() {
  obj.value.nestedValue = 'changed nested value';
}

</script>

<style scoped>
.info1{
  display: flex;
  align-items: center;
  background: darkcyan;
  justify-content: space-around;
}

.info2{
  margin-top: 1rem;
  display: flex;
  align-items: center;
  background: gray;
  justify-content: space-around;
  height: 3rem;
}
</style>
