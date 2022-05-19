<template>
  <div>
    <h1>Counter - {{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup>
import useCounter from "../hooks/useCounter"

const {increment, decrement, count} = useCounter(5)

</script>
