<template>
  <div>
    <h1>Transaction View</h1>
    <div class="link" v-for="transaction in transactions" :key="transaction.id">
      <router-link
        :to="{ name: 'transactions-details', params: { id: transaction.id } }"
        >Go to transaction no.{{ transaction.id }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        { id: 1, name: "Shopping" },
        { id: 2, name: "Bills" },
      ],
    };
  },
};
</script>

<style>
</style>