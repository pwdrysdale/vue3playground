<template>
  <div>
    <h1>Basic Emits and Functions II</h1>
    <p>{{ longMsg }}</p>
    <p>{{ otherProp }}</p>
  </div>
</template>

<script setup>
import {defineProps, toRefs, computed} from "vue";

const props = defineProps({
  msg: {
    type: String,
    required: true
  },
  otherProp: {
    type: String,
    default: "Other Prop"
  }
})

const {msg} = toRefs(props)

const longMsg = computed(() => msg.value + "!");

</script>

