<script setup>
import {ref} from "vue"
import useGetData from "@/hooks/useGetData";

const t = ref(1)

const {data, isLoading, error, getData} = useGetData("https://jsonplaceholder.typicode.com/todos/1")

const getNewData = () => {
  // set t to be an integer between 1 and 200
  t.value = Math.floor(Math.random() * 200) + 1
  getData(`https://jsonplaceholder.typicode.com/todos/${t.value}`)
}

</script>

<template>
  <div>
    <h1>UseGetData Example - {{ t }}</h1>
    <p>Data: {{ data }}</p>
    <p>Loading: {{ isLoading }}</p>
    <p>Error: {{ error }}</p>
    <button @click="getNewData">Get Data</button>
  </div>
</template>