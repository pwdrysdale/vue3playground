<template>
  <h1>Mouse Position</h1>
  <p>X: {{ mouseX }}</p>
  <p>Y: {{ mouseY }}</p>
  <h1>Is Hovering</h1>
  <p
      ref="hoverTarget"
  >Target</p>
  <p>{{ isHovering ? "True" : "False" }}</p>
</template>

<script setup>
import {ref} from "vue"
import useMousePosition from "@/hooks/useMousePosition";
import useIsHovering from "@/hooks/useIsHovering";

const {mouseX, mouseY} = useMousePosition()

const hoverTarget = ref(null)

let {isHovering} = useIsHovering(hoverTarget)

console.log(isHovering)


</script>

<style scoped>

</style>