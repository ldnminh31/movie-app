const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const movieController = require("./controllers/movie.controller");
const accountController = require("./controllers/account.controller");
const categoryController = require("./controllers/category.controller");
const commentController = require("./controllers/comment.controller");

const ApiError = require("./api-error");

const upload = multer({
  dest: "./public/",
});

const app = express();
app.use(cors());
app.use(express.json());
// localhost:3000/public/image-1669903097779.jpeg -- luu anh phia backend
app.use("/public", express.static(path.join(__dirname + "/../public")));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to MovieApp",
  });
});
// user api
app.route("/api/account/signin").post(accountController.signIn);

app.route("/api/account/signup").post(accountController.signUp);

// movie api
app
  .route("/api/movie")
  .get(movieController.all)
  .post(movieController.uploadAvatar.single("image"), movieController.addMovie);

app
  .route("/api/movie/:movie_id")
  .get(movieController.findMovieId)
  .put(
    movieController.uploadAvatar.single("image"),
    movieController.updateMovie
  )
  .delete(movieController.deleteMovie);

app.route("/api/movie/search/:movie_name").get(movieController.findMovieName);

app
  .route("/api/category")
  .get(categoryController.category)
  .post(categoryController.addCategory);

app
  .route("/api/category/:category_id")
  .get(categoryController.findCategory)
  .put(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

// comment api
app.route("/api/comments/:movie_id").get(commentController.comment);

app.route("/api/comment").post(commentController.addComment);

app
  .route("/api/comment/:comment_id")
  .put(commentController.updateComment)
  .delete(commentController.deleteComment);

//   handle 404 respone
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

app.use((error, req, res, next) => {
  return res.status(error.statusCode || 500).json({
    message: error.message || "Internal Server Error",
  });
});

module.exports = app;
