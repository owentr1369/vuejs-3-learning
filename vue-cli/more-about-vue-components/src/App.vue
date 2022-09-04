<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <teleport to="body">
    <modal-comp
      v-if="isShowModal"
      :modalTitle="modalTitle"
      :modalContent="modalContent"
      theme="contact"
      @closeModal="onToggleModal"
    >
      <template v-slot:footer>
        <h2>This is the footer</h2>
      </template>
      <template v-slot:body>
        <label for="">Name</label>
        <input type="password" name="" id="" />
      </template> </modal-comp
  ></teleport>
  <!-- Event modifiers -->
  <button @click="onToggleModal">Open Modal</button>
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
      isShowModal: false,
    };
  },
  methods: {
    onToggleModal() {
      this.isShowModal = !this.isShowModal;
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
button {
  cursor: pointer;
}
</style>
