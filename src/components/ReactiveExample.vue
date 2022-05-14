<template>
  <div>
    <h1>Reactive Example</h1>
    <p>
      <input type="text" v-model="newTodoText">
    </p>
    <button @click="addTodo">Add Todo</button>
    <ul>
      <li v-for="(todo, idx) in todos" :key="todo.text">
        {{ todo.text }} - {{ todo.done }}
        <button @click="toggleCompleted(idx)">X</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
// example to display something using {reactive
import {reactive, ref} from 'vue'

// alternative to ref.value
// better for non primitive values
const todos = reactive([
  {text: 'Learn JavaScript', done: true},
  {text: 'Learn Vue', done: false}
])

const addTodo = () => {
  todos.push({text: newTodoText.value, done: false})
  newTodoText.value = ''
}

const toggleCompleted = (idx) => {
  todos[idx].done = !todos[idx].done
}

const newTodoText = ref('')


</script>

<style scoped>

</style>