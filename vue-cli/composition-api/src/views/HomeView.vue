<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ fullName }}</p>
    <h2>{{ car.name }}</h2>
    <h3>{{ car.price }}</h3>
    <button @click="onChange">Click me!</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  name: "HomeView",
  // Ref must have .value
  // Ref is used for number, string...
  // Reactive is used for object, array...
  setup() {
    const fullName = ref("Tran");
    const car = reactive({
      price: 1000,
      name: "Mec",
    });
    function onChange() {
      fullName.value = "Tran Tam";
      car.price = 2000;
    }
    return { fullName, onChange, car };
  },
};
</script>
