<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ fullName }}</p>
    <button @click="onChange">Click me!</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    const fullName = ref("Tran");

    function onChange() {
      fullName.value = "Tran Tam";
    }
    return { fullName, onChange };
  },
};
</script>
