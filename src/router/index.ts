import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from "@/modules/home/home.routes";
import moviesRoutes from "@/modules/movies/movies.routes";
import DefaultLayout from "@/components/layouts/defualt.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [...homeRoutes, ...moviesRoutes],
    },
  ],
});

export default router;
