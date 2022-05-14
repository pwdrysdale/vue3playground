<template>
  <h1>Counter with Props and Emits</h1>
<div>{{count}}</div>
<button @click="$emit('increment', 2)">Increment</button>
<button @click="$emit('decrement')">Decrement</button>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";

 defineProps({
  count: {
    type: Number,
    default: 0
  }
})

defineEmits(['increment', 'decrement'])

</script>

<style scoped>

</style>