<template>
  <div class="container">
    <nav
      class="navbar navbar-expand-lg fixed-top shadow"
      style="background-color: #eb6440"
    >
      <div class="container" style="background-color: #eb6440">
        <a class="navbar-brand" href="#" style="background-color: #eb6440">
          <router-link to="/" style="text-decoration: none">
            <h1
              style="
                color: #eff5f5;
                font-weight: bold;
                background-color: #eb6440;
              "
            >
              Vmovie
            </h1>
          </router-link></a
        >

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          style="background-color: #eb6440"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="">
            <!-- home -->
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                style="background-color: #eb6440"
                ><router-link
                  to="/"
                  class="nav-link active"
                  style="
                    font-size: 1.1rem;
                    color: #eff5f5;
                    background-color: #eb6440;
                  "
                  >Home</router-link
                ></a
              >
            </li>

            <!-- category -->
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                style="background-color: #eb6440"
                ><router-link
                  to="/category"
                  class="nav-link active"
                  style="
                    font-size: 1.1rem;
                    color: #eff5f5;
                    background-color: #eb6440;
                  "
                  >Category</router-link
                ></a
              >
            </li>
            <!-- movie -->
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                style="background-color: #eb6440"
                ><router-link
                  to="/movie"
                  class="nav-link active"
                  style="
                    font-size: 1.1rem;
                    color: #eff5f5;
                    background-color: #eb6440;
                  "
                  >Movie</router-link
                ></a
              >
            </li>
          </ul>

          <router-link
            to="/signin"
            style="background-color: #eb6440"
            v-if="this.mainStore.username == null"
            ><button class="display-flex button-style">
              Sign in
            </button></router-link
          >

          <button 
            class="btn display-flex"
            style="background-color: #eff5f5"         
            v-else
            @click="signOut()"
          >
            Sign out
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useMainStore } from "@/store";
export default {
  name: "NavBar",
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
  methods: {
    signOut() {
      this.mainStore.$state = {
        user_id: null,
        username: null,
        role: null,
      };
      this.$router.push({ name: "movieapp" });
    },
  },
};
</script>

<!-- style -->
<style>
.button-style {
  border: none;
  border-radius: 10px;
  padding: 10px 30px;
}
.button-style:hover {
  color: #fff;
  background-color: #497174;
}
.button-style-2:hover{
  background-color: green;
}

</style>
