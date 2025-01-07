<script setup lang="ts">
import {computed, reactive, ref} from "vue";

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})


// 一个计算属性 ref，计算属性会缓存
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

const numbers = ref([1, 2, 3]);

const sum = computed(() => {
  console.log('Calculating sum...');
  return numbers.value.reduce((acc, number) => acc + number, 0);
});

const addNumber = () => {
  numbers.value.push(4);
};

//绑定样式
const isActive = ref(true)
const hasError = ref(false)
const message = ref('Hello World!');
const checked = ref(false)
const checkedNames = ref(['Jack', 'John']);
const picked = ref('One');
const selected = ref('A');

</script>

<template>
  <div style="background: azure">
    <p>Has published books:</p>
    <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
    <span>{{ publishedBooksMessage }}</span>

    <div>
      <p>Sum: {{ sum }}</p>
      <button @click="addNumber">Add a number</button>
    </div>
    <div class="static"
         :class="{ active: isActive, 'text-danger': hasError }">样式响应式</div>
    <button @click="hasError=!hasError" >修改动态样式</button>
    <div id="abcde" v-if="1==2">显示测试</div>
    <div>
      <p>v-model 测试 Message is: {{ message }}</p>
    </div>

    <div>
      <input v-model="message" placeholder="edit me" />
    </div>

    <div>
      <textarea v-model="message" placeholder="add multiple lines"></textarea>
    </div>

    <div>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
    </div>

    <div>
      <div>Checked names: {{ checkedNames }}</div>

      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>

      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>

      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
    </div>

    <div>
      <div>Picked: {{ picked }}</div>
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>

      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
    </div>

    <div>
      <div>Selected: {{ selected }}</div>

      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.active {
  /* 这里可以添加各种样式属性来定义当元素具有active类时的外观 */
  background-color: lightblue; /* 设置背景颜色为浅蓝色，可根据需求修改 */
  color: white; /* 设置文字颜色为白色，可根据需求修改 */
  border: 1px solid blue; /* 设置边框样式，可根据需求修改 */
  padding: 10px; /* 设置内边距，可根据需求修改 */
  cursor: pointer; /* 当鼠标悬停时显示手型指针，可根据需求修改 */
}
.text-danger {
  color: #dc3545; /* 设置文本颜色为常见的危险警示红色，可根据具体需求调整颜色值 */
  font-weight: bold; /* 让文本加粗显示，突出显示效果，也可按需调整或删除此行 */
}
</style>
