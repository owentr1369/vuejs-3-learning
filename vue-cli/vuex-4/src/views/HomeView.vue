<template>
  <div class="home">
    <h1 v-for="product in productList" :key="product.id">
      {{ product.title }}
    </h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  setup() {},
  created() {
    this.$store.dispatch("fetchProducts");
  },
  computed: {
    ...mapGetters(["getProductList"]),
    productList() {
      return this.getProductList;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: left;
}
</style>