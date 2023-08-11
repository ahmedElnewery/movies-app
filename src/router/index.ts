import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from "@/modules/home/home.routes";
import moviesRoutes from "@/modules/movies/movies.routes";
import authRoutes from "@/modules/auth/auth.routes";
import DefaultLayout from "@/layouts/Default.vue";
import AuthLayout from "@/layouts/Auth.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        ...homeRoutes,
        ...moviesRoutes,
        {
          path: "/:pathMatch(.*)*",
          name: "not-found",
          component: () => import("@/components/partials/app/AppNotFound.vue"),
        },
        {
          path: "/server-down",
          name: "server-down",
          component: () =>
            import("@/components/partials/app/AppServerDown.vue"),
        },
      ],
    },
    {
      path: "/auth",
      component: AuthLayout,
      children: [...authRoutes],
    },
  ],
});

export default router;
