<template>
  <div>
    <div v-if="products.length" class="home">
      <div class="product" v-for="product in products" :key="product.id">
        <h1>{{ product.title }}</h1>
        <img :src="product.image" alt="" />
        <h3>Price: {{ product.price }}</h3>
      </div>
    </div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>Loading products...</div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView",
  setup() {
    const products = ref([]);
    const error = ref(null);

    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) throw new Error("Something went wrong!");
        products.value = await res.json();
      } catch (err) {
        error.value = err;
        console.log(error.value);
      }
    };
    getProducts();
    return { products, error };
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.product {
  width: 20%;
}
h1 {
  font-size: 16px;
}
h3 {
  font-size: 12px;
}
img {
  width: 100%;
}
</style>
