<template>
  <NavBarVue></NavBarVue>

  <h2>Detail Movie</h2>

  <div class="container" style="margin-top: 30px">
    <!-- detail -->
    <div class="row" style="margin-bottom: 30px">
      <div class="col md-8 text-center">
        <img style="width: 70%" :src="dataMovie.image" alt="" />
      </div>
      <div class="col md-4">
        <div class="jumbotron">
          <h1 class="display-6">{{ dataMovie.name }}</h1>
          <hr class="my-2" />
          <h5 class="card-title fw-bold">
            Category: {{ dataMovie.category_name }}
          </h5>
          <p class="lead" style="width: 90%">
            {{ dataMovie.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col md-12 text-center">
        <iframe
          width="1060"
          height="615"
          src="https://www.youtube.com/embed/d9MyW72ELq0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <!-- comment list here -->
    <hr />
    <h5 class="display-6">Review</h5>
    <!-- add -->
    <div class="container" style="margin-top: 30px">
      <div class="row">
        <form @submit.prevent="addForm" v-if="this.mainStore.username != null">
          <div class="col md-5">
            <!-- add-->
            <input
              style="width: 50%"
              type="text"
              class="form-control"
              placeholder="Enter to add your comment..."
              @keyup.enter="submit"
              v-model="addValue"
            />
          </div>
        </form>
      </div>
    </div>

    <!-- comment list -->
    <div class="container" style="margin-top: 30px; margin-bottom: 30px">
      <div
        class="row card"
        v-for="comment in comments"
        :key="comment.id"
        style="margin-bottom: 20px"
      >
        <div class="col md-2" style="padding: 20px">
          <div>
            <h6 class="fw-bold mb-1">{{ comment.username }}</h6>
            <hr />
            <div class="d-flex align-items-center mb-3">
              <p class="mb-0">{{ comment.comment_time }}</p>

              <!--  -->
              <a
                class="link-muted"
                style="margin: 0px 10px"
                v-if="comment.username === this.mainStore.username"
                @click="editComment(comment.id)"
                ><i class="fas fa-pencil-alt ms-2"></i
              ></a>

              <!-- xoa ne -->
              <a
                class="link-danger"
                @click="deleteComment(comment.id)"
                v-if="comment.username === this.mainStore.username"
                ><i class="fa-solid fa-trash"></i>
              </a>
            </div>
            <p class="mb-0">
              {{ comment.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.movie-card {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.movie-card:hover {
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

.movie-name {
  text-decoration: none;
  color: #497174;
}

.movie-name:hover {
  color: #eb6440;
}
</style>
<script>
import NavBarVue from "@/components/NavBar.vue";
import { movieService } from "@/services/movie.service";
import { commentService } from "@/services/comment.service";
import { useMainStore } from "@/store";
export default {
  name: "MoviesDetail",
  components: {
    NavBarVue,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
  data() {
    return {
      dataMovie: {
        name: "",
        description: "",
        image: "",
        category_name: "",
      },
      dataComment: {
        username: "",
        comment_time: "",
        content: "",
        addValue: "",
      },
      comments: [],
    };
  },
  created() {
    this.getMovies();
    this.getComments();
  },
  methods: {
    async getMovies() {
      try {
        const moviesList = await movieService.get(this.id);
        this.dataMovie.name = moviesList.movie_name;
        this.dataMovie.id = moviesList.movie_id;
        this.dataMovie.description = moviesList.description;
        this.dataMovie.category_name = moviesList.category_name;
        this.dataMovie.image = moviesList.image;
      } catch (error) {
        console.log(error);
      }
    },
    getTime() {
      const currentDateTime = new Date();
      const year = currentDateTime.getFullYear();
      const month = currentDateTime.getMonth();
      const date = currentDateTime.getDate();
      const hour = currentDateTime.getHours();
      const minute = currentDateTime.getMinutes();
      const second = currentDateTime.getSeconds();
      const time =
        year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second;
      return time;
    },
    async getComments() {
      try {
        const commentsList = await commentService.get(this.id);
        const temparray = commentsList.map((item) => {
          let datetime = null;
          if (item.comment_time) {
            datetime =
              item.comment_time.substring(0, 10) +
              " " +
              item.comment_time.substring(12, 19);
          }
          return {
            id: item.comment_id,
            username: item.username,
            comment_time: datetime,
            content: item.content,
          };
        });
        this.comments = temparray;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteComment(id) {
      try {
        await commentService.deleteComment(id);
        this.getComments();
      } catch (error) {
        console.log(error);
      }
    },
    async addForm() {
      try {
        this.dataComment.content = this.addValue;
        await commentService.addComment({
          user_id: this.mainStore.user_id,
          movie_id: this.id,
          comment_time: this.getTime(),
          content: this.dataComment.content,
        });
        this.addValue = "";
        this.getComments();
      } catch (error) {
        console.log(error);
      }
    },
    async editComment(id) {
      try {
        this.content = prompt("Enter your new comment: ");
        await commentService.updateComment(id, {
          comment_time: this.getTime(),
          content: this.content,
        });
        this.getComments();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
