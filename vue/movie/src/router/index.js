import { createWebHistory, createRouter } from "vue-router";
import MovieApp from "@/views/MovieApp.vue";
import SignUp from "@/views/SignUp.vue";
import SignIn from "@/views/SignIn.vue";
import MovieDetail from "@/views/MovieDetail.vue";
import MovieHandleVue from "@/views/MovieHandle.vue";
import Category from "@/views/Category.vue";
// import { parse } from "path";
// import { movieService } from "@/services/movie.service";

const routes = [
  {
    path: "/",
    name: "movieapp",
    component: MovieApp,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/movie",
    name: "moviehandle",
    component: MovieHandleVue,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: MovieDetail,
    props: (route) => ({
      id: parseInt(route.params.id),
    }),
  },
  {
    path: "/category",
    name: "category",
    component: Category,
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
