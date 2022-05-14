<template>
  <div>
    <h1>Basic Emits and Functions I</h1>
    <div>{{ propMsg }}</div>
    <div>{{ otherProp }}</div>
  </div>
</template>

<script>
import {toRef} from "vue";

export default {
  name: 'HelloWorld',
  props: ['msg', 'otherProp'],
  setup(props) {
    const propMsg = toRef(props, 'msg');
    return {
      propMsg
    }
  }
}

</script>