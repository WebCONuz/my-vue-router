<template lang="">
  <div class="p-5 w-3/4 shadow-md mx-auto my-6 border rounded-md">
    <div v-if="isLoading">
      <h2 class="text-lg mb-2 font-bold text-orange-600">Post Item {{ id }}</h2>
      <h1 class="text-2xl text-green-600 mb-5 font-bold capitalize">
        {{ data.title }}
      </h1>
      <p class="text-lg">{{ data.body }}</p>
      <button
        @click="goBack"
        class="px-6 py-3 bg-blue-100 text-blue-600 rounded-md mt-4 ml-auto inline-block capitalize font-semibold text-lg"
      >
        go back
      </button>
    </div>
    <div class="flex justify-center" v-else="isLoading">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
import axios from "@/services/axios";
import { RouterLink } from "vue-router";

export default {
  name: "PostItem",
  data() {
    return {
      id: null,
      data: {},
      isLoading: false,
    };
  },
  methods: {
    async getPostItem() {
      try {
        const postItem = await axios.get(`/posts/${this.$route.params.id}`);
        if (postItem.status === 200) {
          this.data = postItem.data;
          this.isLoading = true;
        }
      } catch (err) {
        console.log(err);
      }
    },

    getId() {
      this.id = this.$route.params.id;
    },

    goBack() {
      this.$router.back();
    },
  },
  mounted() {
    this.getId();
    this.getPostItem();
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
