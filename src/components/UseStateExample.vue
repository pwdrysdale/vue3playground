<template>
  <div>
    <h1>UseState Example</h1>
    <input type="text" :value="name" @input="setName($event.target.value)"/>
    <span>{{ name }}</span>
  </div>
</template>

<script setup>
import useState from "@/hooks/useState";

const [name, setName] = useState("")

</script>
