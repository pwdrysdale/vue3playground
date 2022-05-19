<template>
  <div>
    <h1>Counter - {{ count }}</h1>
    <h3>Computed Get: {{ count }}</h3>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup>
import useCounter from "../hooks/useCounter"

const {increment, decrement, count} = useCounter(5)

</script>
