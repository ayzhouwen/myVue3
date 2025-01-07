<!--没有使用 ts 和setup语法糖写法,模版需要的函数和变量都需要return -->
<script>
import {nextTick, onMounted, reactive, ref} from 'vue'

export default {
  // `setup` 是一个特殊的钩子，专门用于组合式 API。
  setup() {
    let count = ref(99999);
    let studentList=ref([{name:"张三",age:18},{name:"李四",age:19}])
    onMounted(()=>{
        console.log(count.value)
    })
    //reactive不会报错，但是会提示
    // let r1=reactive(1);
    //reactive练习
    let  studentk={name:"华子",age:18};
    function increment(){
      count.value++
      // count++;
      // studentList.value.forEach((item,index)=>{
      //   item.age++;
      //   // r1++;
      // })
      studentk.age++;
    }
    // 将 ref 暴露给模板
    return {
      count,increment,studentk
    }
  }
}
</script>

<template>
  <div style="background: antiquewhite">
    <p>我的组件{{count}}</p>
    <ul>
      <li v-for="s in studentList">{{ s.name }}:{{s.age}}</li>
    </ul>
    <button @click="increment">
      新增数量
    </button>
<!--    <div>r1:{{r1}}</div>-->
    <div>student:{{studentk.age}}</div>
  </div>

</template>

<style scoped>
button {
  padding: 3px;
}
</style>


