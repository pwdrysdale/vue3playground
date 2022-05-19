<template>
  <div>
    <h1>Counter - {{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import useCounter from "../hooks/useCounter"

const { increment, decrement, subscribe } = useCounter(0)

subscribe((v) => {
  count.value = v
})

const count = ref(0)
</script>
