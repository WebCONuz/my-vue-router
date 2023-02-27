<template lang="">
  <div>
    <div class="container mx-auto">
      <h1 class="text-center pt-8 pb-4 text-violet-600 text-3xl font-bold">
        Post Section
      </h1>
      <ul
        class="shadow-lg p-4 rounded-md border flex flex-wrap justify-between"
        v-if="isLoading"
      >
        <li v-for="item in post" class="w-[49%]">
          <RouterLink
            :to="`/post/${item.id}`"
            class="w-full shadow my-2 p-3 block rounded-md border hover:bg-gray-100 cursor-pointer duration-200"
          >
            {{ item.id }}. {{ item.title }}
          </RouterLink>
        </li>
      </ul>
      <div class="flex justify-center" v-else="isLoading">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "@/services/axios";
import { RouterLink } from "vue-router";

export default {
  name: "Post",
  data() {
    return {
      post: [],
      isLoading: false,
    };
  },
  methods: {
    async getPosts() {
      try {
        const response = await axios.get("/posts");
        if (response.status === 200) {
          this.post = response.data;
          this.isLoading = true;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>
<style lang="css" scoped>
.loader {
  position: relative;
  width: 85px;
  height: 150px;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgb(22 163 74) 50px, transparent 0),
    linear-gradient(rgb(22 163 74) 50px, transparent 0),
    linear-gradient(rgb(22 163 74) 50px, transparent 0),
    linear-gradient(rgb(22 163 74) 50px, transparent 0),
    linear-gradient(rgb(22 163 74) 50px, transparent 0),
    linear-gradient(rgb(22 163 74) 50px, transparent 0);
  background-position: 0px center, 15px center, 30px center, 45px center,
    60px center, 75px center, 90px center;
  animation: rikSpikeRoll 0.65s linear infinite alternate;
}
@keyframes rikSpikeRoll {
  0% {
    background-size: 10px 3px;
  }
  16% {
    background-size: 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px, 10px 3px;
  }
  33% {
    background-size: 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px,
      10px 3px;
  }
  50% {
    background-size: 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px,
      10px 3px;
  }
  66% {
    background-size: 10px 3px, 10px 10px, 10px 30px, 10px 50px, 10px 3px,
      10px 3px;
  }
  83% {
    background-size: 10px 3px, 10px 3px, 10px 10px, 10px 30px, 10px 50px,
      10px 3px;
  }
  100% {
    background-size: 10px 3px, 10px 3px, 10px 3px, 10px 10px, 10px 30px,
      10px 50px;
  }
}
</style>
