<template>
  <div>
    <h1>UseRegularly Example</h1>
    <p>{{ count }}</p>

  </div>
</template>

<script setup>
import useState from "@/hooks/useState";
import useRegularly from "@/hooks/useRegularly";

const [count, setCount] = useState(0)

const increaseFunction = () => {
  setCount(count.value + 1)
}

useRegularly(increaseFunction, 1000)
</script>

