<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <HelloWorld :msg="msg" otherProp="static" />
  <HelloAgainWorld :msg="msg" otherProp="static" />
  <Counter />
  <CounterTwo :count="count" @increment="increment" @decrement="decrement" />
  <ReactiveExample />
  <DebounceExample />
  <ScreenDimensionsExample />
</template>

<script setup>
import { ref } from "vue"
import HelloWorld from "@/components/HelloWorld"
import HelloAgainWorld from "@/components/HelloAgainWorld"
import Counter from "@/components/Counter"
import CounterTwo from "@/components/CounterTwo"
import ReactiveExample from "@/components/ReactiveExample"
import DebounceExample from "@/components/DebounceExample"
import ScreenDimensionsExample from "@/components/ScreenDimensionsExample"

const msg = ref("Hello World")

const count = ref(0)

const increment = (inc = 1) => {
  count.value += inc
}

const decrement = () => {
  count.value--
}

// notes:
// significant difference in <script setup> and <script>
</script>
