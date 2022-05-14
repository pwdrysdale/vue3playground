<template>
  <h1>This is the Counter Component</h1>
  <div>{{ state }}</div>
  <button @click="decrement">-</button>
  <button @click="increment">+</button>
</template>

<script>
import {ref} from 'vue';

export default {
  name: "CounterComponent",
  setup() {
    const state = ref(0)

    const increment = () => {
      state.value++
    }

    const decrement = () => {
      state.value--
    }

    return {state, increment, decrement}

  }
}
</script>

