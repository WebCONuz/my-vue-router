<template lang="">
  <header class="bg-cyan-700 py-5">
    <div class="container mx-auto">
      <nav class="flex justify-between items-center">
        <RouterLink to="/" class="logo text-white text-2xl font-bold uppercase"
          >Vue router</RouterLink
        >
        <ul class="flex">
          <li class="mx-3">
            <RouterLink
              to="/"
              class="text-white text-lg inline-block py-[6px] px-4 rounded-md"
              >Home</RouterLink
            >
          </li>
          <li class="mx-3">
            <RouterLink
              to="/post"
              class="text-white text-lg inline-block py-[6px] px-4 rounded-md"
              >Post</RouterLink
            >
          </li>
          <li class="mx-3">
            <RouterLink
              to="/users"
              class="text-white text-lg inline-block py-[6px] px-4 rounded-md"
              >Users</RouterLink
            >
          </li>
          <li class="mx-3">
            <RouterLink
              to="/about"
              class="text-white text-lg inline-block py-[6px] px-4 rounded-md"
              >About</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  name: "Header",
};
</script>
<style lang="css" scoped>
.router-link-active {
  color: rgb(14, 116, 144) !important;
  background-color: #fff;
}
.router-link-active.logo {
  color: #fff !important;
  background-color: rgb(14, 116, 144) !important;
}
</style>
