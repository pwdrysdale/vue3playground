<template>
  <h1>UseEffect Examples</h1>
  <p>Init - was set to "", but now: {{ init }}</p>
  <p>InitDeps - was set to "", but now: {{ initDeps }}</p>
  <button @click="trigger">Set unrelated</button>
</template>

<script setup>
import useEffect from "@/hooks/useEffect"
import useState from "@/hooks/useState"
import { ref } from "vue"

// ============================================================
// No deps

const init = ref("")

useEffect(() => {
  init.value = "init is real"
})

// ============================================================
// Deps

const initDeps = ref("")
const [unrelated, setUnrelated] = useState(false)
const trigger = () => {
  setUnrelated(!unrelated.value)
}

// useEffect with deps
useEffect(() => {
  if (initDeps.value.length === 0) {
    initDeps.value = "init is real with deps"
  } else {
    initDeps.value = ""
  }
}, [unrelated])
</script>
