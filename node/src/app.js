const express = require("express");
const cors = require("cors");
const app = express();
const movieController = require("./controllers/movie.controller");
const ApiError = require('./api-error');

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to MovieApp",
  });
});
app
  .route("/api/movie")
  .get(movieController.findAll)
  .post(movieController.create)
  .delete(movieController.deleteAll);

app
  .route("/api/movie/:id(\\d+)")
  .get(movieController.findOne)
  .put(movieController.update)
  .delete(movieController.delete);

//   handle 404 respone
app.use((req, res, next)=> {
    return next(new ApiError(404, 'Resource not found'));
});
app.use((error,req,res,next)=>{
    return res.status(error.statusCode || 500).json({
        message: error.message || 'Internal Server Error',
    });
});

module.exports = app;
