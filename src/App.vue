<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>
;

<script>
import Header from ".//components/Header/Header.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style scoped></style>
