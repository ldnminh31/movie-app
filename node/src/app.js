const express = require("express");
const cors = require("cors");
const app = express();
const movieController = require("./controllers/movie.controller");
const ApiError = require("./api-error");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to MovieApp",
  });
});
// user api
app.route("/api/auth/signin").post(movieController.signIn);

app.route("/api/auth/signup").post(movieController.signUp);

app.route("/api/auth/signout").post(movieController.signOut);

// movie api
app.route("/api/movie").get(movieController.all).post(movieController.addFilm);

app
  .route("/api/movie/:id")
  .get(movieController.findFilm)
  .put(movieController.updateFilm)
  .delete(movieController.deleteFilm);

// category api
app
  .route("/api/category")
  .get(movieController.category)
  .post(movieController.addCat);

app
  .route("/api/category/:id")
  .get(movieController.findCat) //not find Cat :)
  .put(movieController.updateCat)
  .delete(movieController.deleteCat);

// comment api
app
  .route("/api/comment")
  .get(movieController.comment)
  .post(movieController.addCom);

app
  .route("/api/comment/:id")
  .put(movieController.updateCom)
  .delete(movieController.deleteCom);

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
