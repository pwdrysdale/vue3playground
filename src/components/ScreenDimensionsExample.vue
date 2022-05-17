<script setup>
import useScreenDimensions from "../hooks/useScreenDimensions"

const { screenWidth, screenHeight } = useScreenDimensions()
</script>

<template>
  <div>
    <h1>Screen Dimensions</h1>
    <p>Screen Width: {{ screenWidth }}</p>
    <p>Screen Height: {{ screenHeight }}</p>
  </div>
</template>
