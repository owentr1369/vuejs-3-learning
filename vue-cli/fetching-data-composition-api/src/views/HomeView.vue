<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  props: {
    theme: {
      type: String,
      required: false,
      default: "light",
    },
  },
  setup(props, { emit }) {
    console.log("props :>> ", props.theme);
    console.log("emit :>> ", emit);
  },
};
</script>
