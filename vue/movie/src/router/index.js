import { createWebHistory, createRouter } from "vue-router";
import MovieApp from "@/views/MovieApp.vue";
const routes = [
  {
    path: "/",
    name: "movieapp",
    component: MovieApp,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
