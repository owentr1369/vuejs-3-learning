<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <modal-comp
    :modalTitle="modalTitle"
    :modalContent="modalContent"
    theme="contact"
  ></modal-comp>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ModalComp from "./components/ModalComp.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    ModalComp,
  },
  data() {
    return {
      modalTitle: "Modal title",
      modalContent: "This is modal content",
    };
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
