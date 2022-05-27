<script setup>
import {ref} from "vue"
import useDebounce from "../hooks/useDebounce"

const live = ref("")

const [debounceValue, setDebouncingVal] = useDebounce("", 1000)

// cusstom v-model that sets the debounced value
const handleChange = (e) => {
  setDebouncingVal(e.target.value)
  live.value = e.target.value
}
</script>

<template>
  <div>
    <h1>Debouncing Hook - Note that Hooks in Vue are called 'Composables'</h1>
    <input :value="live" @input="handleChange"/>
    <p>{{ debounceValue }}</p>
  </div>
</template>
