<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg"/>
  <HelloWorld :msg="msg" otherProp="static"/>
  <HelloAgainWorld :msg="msg" otherProp="static"/>
  <Counter/>
  <CounterTwo :count="count" @increment="increment" @decrement="decrement"/>
  <ReactiveExample/>
  <DebounceExample/>
  <ScreenDimensionsExample/>
  <UseCounterExample/>
  <UseCounterExample/>
  <UseStateExample/>
  <UseRegularlyExample/>
  <UseEffectExamples/>
  <UseIsHoveringMousePosition/>
  <UseGetData/>
  <UseGetData/>
</template>

<script setup>
import {ref} from "vue"
import HelloWorld from "@/components/HelloWorld"
import HelloAgainWorld from "@/components/HelloAgainWorld"
import Counter from "@/components/Counter"
import CounterTwo from "@/components/CounterTwo"
import ReactiveExample from "@/components/ReactiveExample"
import DebounceExample from "@/components/DebounceExample"
import ScreenDimensionsExample from "@/components/ScreenDimensionsExample"
import UseCounterExample from "@/components/UseCounterExample.vue"
import UseStateExample from "@/components/UseStateExample"
import UseRegularlyExample from "@/components/UseRegularlyExample"
import UseEffectExamples from "@/components/UseEffectExamples"
import UseIsHoveringMousePosition from "@/components/UseIsHoveringMousePosition";
import UseGetData from "@/components/UseGetData";

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
