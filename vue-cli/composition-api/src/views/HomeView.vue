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
import { computed, ref } from "vue";

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
    return { filtedStudents, students, searchText };
  },
};
</script>
