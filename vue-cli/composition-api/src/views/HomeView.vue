<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <input type="text" v-model="searchText" />
    <div class="block" v-for="(student, index) in filtedStudents" :key="index">
      <h2>{{ student }}</h2>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";

export default {
  name: "HomeView",
  // Ref must have .value
  // Ref is used for number, string...
  // Reactive is used for object, array...
  setup() {
    const searchText = ref("");
    let students = ["Jack", "John", "Kate", "Owen", "Jean"];

    const filtedStudents = computed(() => {
      return students.filter((student) =>
        student.toLowerCase().includes(searchText.value.toLowerCase())
      );
    });
    watch(searchText, (oldVal, newVal) => {
      console.log(oldVal, newVal);
    });
    watchEffect(() => {
      if (searchText.value) {
        console.log("Searching...");
      }
    });
    // Computed return value, watchEffect don't
    return { filtedStudents, students, searchText };
  },
};
</script>
