<template>
  <NavBarVue></NavBarVue>

  <div class="container">
    <!-- Model Edit -->
    <div v-if="this.mainStore.role == 0" class="modal fade modal-fade" id="exampleModal1" tabindex="-1"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              <b>Edit your movie</b>
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <!-- Model Edit Body -->
          <div class="modal-body">
            <form enctype="multipart/form-data">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Movie Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  v-model="datamovieEdit.movie_name" />
              </div>

              <input class="form-control" lang="en" type="file" ref="image2" @change="handleChange2" />
              <div id="preview">
                <img :src="url" style="width: 100px; height: 100px" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Description</label>
                <textarea name="" cols="30" rows="10" type="text" class="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" v-model="datamovieEdit.description"></textarea>
              </div>
              <!-- dropdown category id -->
              <div class="mb-3">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false" ref="categoryButton">
                    {{ this.cateedit || "Category" }}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li v-for="item in categories" :key="item.category_id" @click="handleClick1(item)">
                      <a class="dropdown-item" href="#">{{
                          item.category_name
                      }}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal"
                @click.prevent="editmovie(this.idEdit)">
                Submit
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Add-->
    <div class="modal fade modal-fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              <b>Add your new movie</b>
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <!-- Model Add Body -->
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Movie Name</label>
                <input required type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  v-model="datamovieAdd.movie_name" />
              </div>

              <input class="form-control" lang="en" type="file" ref="image1" @change="handleChange" />

              <!-- des -->
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Description</label>
                <textarea rows="4" cols="50" type="text" class="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" v-model="datamovieAdd.description"></textarea>
              </div>
              <!-- dropdown category id -->
              <div class="mb-3">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false" ref="categoryButton">
                    {{ this.cate || "Category" }}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li v-for="item in categories" :key="item.category_id" @click="handleClick(item)">
                      <a class="dropdown-item" href="#">{{
                          item.category_name
                      }}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="addMovie()">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <h2>
        Movie
        <span class="badge bg-secondary">{{ this.movies.length }}</span>
      </h2>

      <div class="col md-12">
        <button v-if="this.mainStore.role == 0" type="button" class="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          Add new movie
        </button>

        <!-- table -->
        <table class="table mb-0 bg-white table-striped table-bordered table-hover" style="margin-top: 20px">
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
            <tr class="vertical-align: middle;" v-for="item in movies" :key="item.movie_id">
              <td>{{ item.movie_id }}</td>
              <td>{{ item.movie_name }}</td>
              <td>{{ item.movie_description }}</td>
              <td>{{ item.movie_category_name }}</td>
              <td v-if="this.mainStore.role == 0">
                <!-- edit -->
                <button class="btn btn-outline-primary" type="button" data-bs-toggle="modal"
                  data-bs-target="#exampleModal1" @click="getMovieEdit(item.movie_id)"><i class="fa-solid fa-pen"></i>
                </button>
              </td>
              <td>
                <!-- delete -->
                <button v-if="this.mainStore.role == 0" class="btn btn-outline-primary"
                  @click="deletemovie(item.movie_id)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
.modal-fade {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

<script>
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
import { useMainStore } from "@/store";
import { categoryService } from "@/services/category.service";
import { movieService } from "@/services/movie.service";
import NavBarVue from "@/components/NavBar.vue";

export default {
  name: "movieList",
  components: {
    NavBarVue,
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
      url: null,
      idEdit: "",
    };
  },
  created() {
    this.getmovies();
    this.getCategories();
  },
  methods: {
    handleChange() {
      this.datamovieAdd.movie_image = this.$refs.image1.files[0];
    },
    handleChange2() {
      this.datamovieEdit.movie_image = this.$refs.image2.files[0];
      this.url = URL.createObjectURL(this.datamovieEdit.movie_image);
    },
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
      } catch (error) {
        console.log(error);
      }
    },
    handleClick(category) {
      this.cate = category.category_name;
      this.datamovieAdd.category_id = category.category_id;
    },
    handleClick1(category) {
      this.cateedit = category.category_name;
      this.datamovieEdit.category_id = category.category_id;
    },
    async addMovie() {
      try {
        const formData = new FormData();
        formData.append('movie_name', this.datamovieAdd.movie_name);
        formData.append('image', this.datamovieAdd.movie_image);
        formData.append('description', this.datamovieAdd.description);
        formData.append('category_id', this.datamovieAdd.category_id);
        await movieService.addMovie(formData);
        alert("Add new movie successfully!");
        this.getmovies();
      } catch (error) {
        alert("Add new movie not working!");
        console.log(error);
      }
    },
    async deletemovie(id) {
      try {
        await movieService.deleteMovie(id);
        alert("Delete successfully");
        this.getmovies();
      } catch (error) {
        alert("Movie is used");
        console.log(error);
      }
    },
    async editmovie(id) {
      try {
        const formData = new FormData();
        formData.append('movie_name', this.datamovieEdit.movie_name);
        if (this.datamovieEdit.movie_image != "")
          formData.append('image', this.datamovieEdit.movie_image);
        formData.append('description', this.datamovieEdit.description);
        formData.append('category_id', this.datamovieEdit.category_id);
        await movieService.updateMovie(id, formData);
        alert("Edit movie successfully!");
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
        this.url = moviesList.image;
        this.cateedit = moviesList.category_name;
        this.idEdit = id;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
</style>
