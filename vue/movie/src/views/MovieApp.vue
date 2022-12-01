<template>
  <NavBarVue />
  <SearchVue v-model="search" />
  <hr />
  <div class="container">
    <div class="row" style="
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
      ">
      <div class="col-2">
        <div class="text-center title">Movie</div>

      </div>
      <!-- <div class="col-1">
        <div class="text-center title">Movie</div>
       
      </div> -->
    </div>
  </div>
  <MovieListVue :movies="filteredMovies" />
</template>
<style>
* {
  background-color: #eff5f5;
}

.title {
  margin-top: 20px;
  width: 100%;
  font-weight: bold;
  background-color: #eb6440;
  color: #eff5f5;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 1.2rem;
}
</style>
<script>
import NavBarVue from "../components/NavBar.vue";
import SearchVue from "../components/Search.vue";
import MovieListVue from "../components/MovieList.vue";
import { movieService } from "@/services/movie.service";
import { useMainStore } from "@/store";
export default {
  components: {
    NavBarVue,
    SearchVue,
    MovieListVue,
  },
  data() {
    return {
      search: "",
      movies: [],
    };
  },
  watch: {
    search(old, nw){
      console.log(nw)
    }
  },
  setup() {
    const mainStore = useMainStore();
    return { mainStore }
  },
  methods: {
    async getMovies() {
      try {
        console.log(this.mainStore.username);
        const moviesList = await movieService.getMany();
        this.movies = moviesList;
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.getMovies();
    },
  },
  computed: {
    moviesAsStrings() {
      return this.movies.map((movie) => {
        const { movie_name } = movie;
        return [movie_name.toLowerCase()].join("");
      });
    },
    // Return movies filtered by the search box.
    filteredMovies() {
      const value = this.search.toLowerCase();
      if (!this.search) return this.movies;
      return this.movies.filter((movie, index) =>
        this.moviesAsStrings[index].includes(value)
      );
    },
  },
  created() {
    this.refreshList();
  },

};
</script>
