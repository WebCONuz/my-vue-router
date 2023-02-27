import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";
import PostItem from "../views/PostItem.vue";
import Users from "../views/Users.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/post",
      name: "post",
      component: Post,
    },
    {
      path: "/post/:id",
      name: "postitem",
      component: PostItem,
    },
    {
      path: "/users",
      name: "users",
      component: Users,
    },
    {
      path: "/users",
      name: "users",
      redirect: (to) => ({ path: "/about" }),
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
