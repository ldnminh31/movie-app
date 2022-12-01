const MovieService = require("../services/movie.service");
const ApiError = require("../api-error");

// ---------- Movie controller -------------
// add new Movie/movie
exports.addMovie = async (req, res, next) => {
  if (!req.body?.movie_name) {
    return next(new ApiError(400, "Name can not be empty"));
  }
  try {
    const movieService = new MovieService();
    const movie = await movieService.addMovie(req.body);
    return res.send(movie);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while creating the movie")
    );
  }
};
// retrieve all movie
exports.all = async (req, res, next) => {
  let movies = [];
  try {
    const movieService = new MovieService();
    const { movie_name } = req.query;
    if (movie_name) {
      movies = await movieService.findByMovieName(movie_name);
    } else {
      movies = await movieService.all();
    }
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while retrieving the movies")
    );
  }
  return res.send(movies);
};
// find movie with an id
exports.findMovieId = async (req, res, next) => {
  try {
    const movieService = new MovieService();
    const movie = await movieService.findByMovieId(req.params.movie_id);
    if (!movie) {
      return next(new ApiError(404, "Hem co i=ai ddi"));
    }
    return res.send(movie);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Error retrieving movie with id=${req.params.movie_id}`)
    );
  }
};
// find movie with by name
exports.findMovieName = async (req, res, next) => {
  try {
    const movieService = new MovieService();
    // res.send (req.params.movie_name);
    const movie = await movieService.findByMovieName(req.params.movie_name);
    if (!movie) {
      return next(new ApiError(404, "Movie not foundddd"));
    }
    else{
      res.send(movie)
    }
  } catch {
    console.log(error);
    return next(
      new ApiError(
        500,
        `Error retrieving movie with name=${req.params.movie_name}`
      )
    );
  }
};
// update/edit movie
exports.updateMovie = async (req, res, next) => {
  if ((Object.keys(req.body).length = 0)) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }
  try {
    const movieService = new MovieService();
    const movieUpdated = await movieService.updateMovie(
      req.params.movie_id,
      req.body
    );
    if (!movieUpdated) {
      return next(new ApiError(404, "movie not found"));
    }
    return res.send({
      message: "movie was updated successfully",
    });
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(
        500,
        `Error retrieving contact with id=${req.params.movie_id}`
      )
    );
  }
};
// delete movie
exports.deleteMovie = async (req, res, next) => {
  try {
    const movieService = new MovieService();
    const movieDeleted = await movieService.deleteMovie(req.params.movie_id);
    if (!movieDeleted) {
      return next(new ApiError(400, "movie not found"));
    }
    return res.send({
      message: "movie was deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Error deleting movie with id=${req.params.movie_id}`)
    );
  }
};
