<template>
  <div class="container" style="margin: 10px 0px">
    <div class="row">
      <div
        class="col-3"
        v-for="movie in movies"
        :key="movie.movie_id"
        style="margin-top: 50px; cursor: pointer;"
      >
        <!-- <h5>ID: {{ movies.length() }}</h5> -->
        <div class="jumbotron text-center movie-card">
          <!-- <h5>id: {{ item.id }}</h5> -->
          <div class="text-center" style="margin-bottom: 10px">
            <img
              @click="goToDetails(movie.movie_id)"
              src="https://api.lorem.space/image/movie?w=150&h=220"
              alt=""
            />
            <!-- {{item.image}} -->
            <!-- <img src="@/assets/avatar.jpeg" alt=""> -->
            <!-- {{item.image}} -->
            <!-- <img :src='item.imgPath'> -->
            <!-- <img :src="require('{{item.image}}')" alt=""> -->
          </div>

          <button
            style="width: 100%"
            class="btn btn-outline movie-name"
            @click="goToDetails(movie.movie_id)"
          >
            {{ movie.movie_name }}
          </button>
          <!-- <hr class="my-2" /> -->
          <!-- <p class="">{{ item.description }}</p> -->
        </div>
        <!--  -->
        <!--  -->
      </div>

      <!-- <h2 v-else><hr></h2> -->

      <!--  -->
    </div>
  </div>
  
</template>
<style>
.movie-card {
  height: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  /* background-color: red; */
}
.movie-card:hover {
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
button.movie-name {
  font-weight: bold;
  text-decoration: none;
  color: #497174;
}
button.movie-name:hover {
  color: #eb6440;
  border: none;
}
</style>
<script>
import { movieService } from "@/services/movie.service";
// import { toNumber } from "@vue/shared";

export default {
  name: "MoviesList",
  components: {},
  props: {
    movies: { type: Array, default: () => [] },
  },
  methods: {
    goToDetails(id) {
      // console.log(id);
      this.$router.push({ name: "movie", params: { id } });
    },
  },
};
</script>
<style>
img {
  box-sizing: border-box;
  width: 85%;
}
</style>
