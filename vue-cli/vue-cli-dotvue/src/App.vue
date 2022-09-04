<template>
  <header-comp ref="header"></header-comp>
  <HelloWorld ref="hello" msg="Welcome to Your Vue.js App" />
  <button @click="onChange">Click me!</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HeaderComp from "./components/HeaderComp.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HeaderComp,
  },
  methods: {
    onChange() {
      console.log("Running...");
      console.log(this.$refs.header);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
