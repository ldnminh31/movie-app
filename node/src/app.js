const express = require("express");
const cors = require("cors");
const app = express();
const movieController = require("./controllers/movie.controller");
const accountController = require("./controllers/account.controller");
const categoryController = require("./controllers/category.controller");
const commentController = require("./controllers/comment.controller")

const ApiError = require("./api-error");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to MovieApp",
  });
});
// user api
app.route("/api/auth/signin").post(accountController.signIn);

app.route("/api/auth/signup").post(accountController.signUp);

app.route("/api/auth/signout").post(accountController.signOut);

// movie api
app.route("/api/movie").get(movieController.all).post(movieController.addMovie);

app
  .route("/api/movie/:movie_id")
  .get(movieController.findMovieId)
  .put(movieController.updateMovie)
  .delete(movieController.deleteMovie);

// category api
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
app
  .route("/api/comment")
  .get(commentController.comment)
  .post(commentController.addComment);

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
