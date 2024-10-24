<!--没有使用 ts 和setup语法糖写法,模版需要的函数和变量都需要return -->
<script>
import {onMounted, ref} from 'vue'

export default {
  // `setup` 是一个特殊的钩子，专门用于组合式 API。
  setup() {
    let count = ref(99999);
    onMounted(()=>{
        console.log(count.value)
    })
    function increment(){
      count.value++
    }
    // 将 ref 暴露给模板
    return {
      count,increment
    }
  }
}
</script>

<template>
  <p>我的组件{{count}}</p>
  <button @click="increment">
    {{ count }}
  </button>
</template>

<style scoped>

</style>
