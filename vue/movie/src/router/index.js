import { createWebHistory, createRouter } from "vue-router";
import MovieApp from "@/views/MovieApp.vue";
import SignUp from "@/views/SignUp.vue";
import SignIn from "@/views/SignIn.vue";
import MoviePage from "@/views/MoviePage.vue";
import Category from "@/views/Category.vue"
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
    name: "movie",
    component: MoviePage,
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
