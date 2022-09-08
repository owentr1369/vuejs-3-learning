<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  setup() {},
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>
