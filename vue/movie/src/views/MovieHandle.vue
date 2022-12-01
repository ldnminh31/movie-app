<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <NavBarVue></NavBarVue>
  <!-- fetch movie -->

  <div class="container">
    <div class="row">
      <h2>
        Movie
        <span class="badge bg-secondary">{{ this.movies.length }}</span>
      </h2>

      <div class="col md-12">
        <button
          v-if="this.mainStore.role == 0"
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add new movie
        </button>

        <!-- Modal -->
        <div
          class="modal fade modal-fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  <b>Add your new movie</b>
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <!-- #####                   modal body here              #### -->
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                      >Movie Name</label
                    >
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      v-model="datamovieAdd.movie_name"
                    />
                  </div>
                  <!-- des -->
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                      >Description</label
                    >
                    <textarea
                      rows="4"
                      cols="50"
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      v-model="datamovieAdd.description"
                    ></textarea>
                  </div>
                  <!-- dropdown category id -->
                  <div class="mb-3">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        ref="categoryButton"
                      >
                        {{ this.cate || "Category" }}
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li
                          v-for="item in categories"
                          :key="item.category_id"
                          @click="handleClick(item)"
                        >
                          <a class="dropdown-item" href="#">{{
                            item.category_name
                          }}</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                    @click.prevent="addMovie()"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- table -->
        <table
          class="table mb-0 bg-white table-striped table-bordered table-hover"
          style="margin-top: 20px"
        >
          <thead class="bg-light">
            <tr class="text-center">
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th colspan="2" v-if="this.mainStore.role == 0">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="vertical-align: middle;"
              v-for="item in movies"
              :key="item.movie_id"
            >
              <td>{{ item.movie_id }}</td>
              <td>{{ item.movie_name }}</td>
              <td>{{ item.movie_description }}</td>
              <td>{{ item.movie_category_name }}</td>
              <td v-if="this.mainStore.role == 0">
                <!-- edit -->
                <button
                  class="btn btn-outline-primary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  @click="getMovieEdit(item.movie_id)"
                >
                  <!-- <i class="fa-solid fa-pen-to-square"></i> --><i
                    class="fa-solid fa-pen"
                  ></i>
                </button>
                <div
                  v-if="this.mainStore.role == 0"
                  class="modal fade modal-fade"
                  id="exampleModal1"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          <b>Edit your movie</b>
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <!-- #####                   modal body here              #### -->
                      <div class="modal-body">
                        <form>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"
                              >Movie Name</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              v-model="datamovieEdit.movie_name"
                            />
                          </div>
                          <!-- des -->
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"
                              >Description</label
                            >
                            <!-- <input
                              type="text"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              v-model="datamovieEdit.description"
                            /> -->
                            <textarea
                              name=""
                              cols="30"
                              rows="10"
                              type="text"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              v-model="datamovieEdit.description"
                            ></textarea>
                          </div>
                          <!-- dropdown category id -->
                          <div class="mb-3">
                            <div class="dropdown">
                              <button
                                class="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                ref="categoryButton"
                              >
                                {{ this.cateedit || "Category" }}
                              </button>
                              <ul
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <li
                                  v-for="item in categories"
                                  :key="item.category_id"
                                  @click="handleClick1(item)"
                                >
                                  <a class="dropdown-item" href="#">{{
                                    item.category_name
                                  }}</a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <button
                            type="submit"
                            class="btn btn-primary"
                            data-bs-dismiss="modal"
                            @click.prevent="editmovie(item.movie_id)"
                          >
                            Submit
                          </button>
                          
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td  v-if="this.mainStore.role == 0">
                <!-- edit -->
                <button
                  v-if="this.mainStore.role == 0"
                  class="btn btn-outline-primary"
                  @click="deletemovie(item.movie_id)"
                >
                  <i class="fa-solid fa-trash"></i>
                  <!-- <i class="fa-solid fa-pen-to-square"></i> -->
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- end -->
</template>
<style>
.modal-fade {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
<script>
import NavBarVue from "@/components/NavBar.vue";
import { movieService } from "@/services/movie.service";
import { categoryService } from "@/services/category.service";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
import { useMainStore } from "@/store";
// import { toHandlers } from "vue";

export default {
  name: "movieList",
  components: {
    NavBarVue,
    // movieFormVue,
  },
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
  data() {
    return {
      datamovie: {
        name: "",
        id: "",
        description: "",
        category_name: "",
        addValue: "",
      },
      datacategory: {
        category_name: "",
        category_id: "",
      },
      datamovieAdd: {
        movie_name: "",
        movie_image: "",
        description: "",
        category_id: "",
      },
      datamovieEdit: {
        movie_name: "",
        movie_image: "",
        description: "",
        category_id: "",
      },
      movies: [],
      categories: [],
      cate: null,
      cateedit: null,
    };
  },
  created() {
    this.getmovies();
    this.getCategories();
  },
  methods: {
    async getCategories() {
      try {
        const categoriesList = await categoryService.getMany();
        const temparray = categoriesList.map((item) => {
          return {
            category_name: item.category_name,
            category_id: item.category_id,
          };
        });
        this.categories = temparray;
      } catch (error) {
        console.log(error);
      }
    },
    async getmovies() {
      try {
        const moviesList = await movieService.getMany();
        const temparray = moviesList.map((item) => {
          return {
            movie_name: item.movie_name,
            movie_id: item.movie_id,
            movie_description: item.description,
            movie_category_name: item.category_name,
          };
        });
        this.movies = temparray;
        // alert(this.movies.length);
      } catch (error) {
        console.log(error);
      }
    },
    handleClick(category) {
      //    this.$refs.categoryButton.value = category.category_name;
      this.cate = category.category_name;
      this.datamovieAdd.category_id = category.category_id;
      //   console.log(this.cateIDSelected);
    },
    handleClick1(category) {
      //    this.$refs.categoryButton.value = category.category_name;
      this.cateedit = category.category_name;
      this.datamovieEdit.category_id = category.category_id;
      //   console.log(this.cateIDSelected);
    },
    async addMovie() {
      try {
        // console.log(this.datamovieAdd);
        const moviesList = await movieService.addMovie(this.datamovieAdd);
        alert("Add new movie successfully!");
        this.getmovies();
      } catch (error) {
        alert("Add new movie not working!");
        console.log(error);
      }
    },
    async deletemovie(id) {
      // console.log(id);
      // this.id = id;
      try {
        const moviesList = await movieService.deleteMovie(id);
        // console.log("ok");
        alert("Delete successfully");
        this.getmovies();
      } catch (error) {
        alert("movie is used");
        console.log(error);
      }
    },
    async editmovie(id) {
      try {
        const moviList = await movieService.updateMovie(id, this.datamovieEdit);
        // alert("Edit movie successfully!");
        this.getmovies();
      } catch (error) {
        alert("Edit movie not working!");
        console.log(error);
      }
    },
    async getMovieEdit(id) {
      try {
        const moviesList = await movieService.get(id);
        this.datamovieEdit = moviesList;
        this.cateedit = moviesList.category_name;
        // alert(this.movies.length);
      } catch (error) {
        console.log(error);
      }
    },
  },

  // start

  //end
};
</script>
<style></style>
