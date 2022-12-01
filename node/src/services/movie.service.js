const knex = require("../database/knex");
const PORT = process.env.PORT;

class MovieService {
  constructor() {
    this.movies = knex("movies");
  }

  #getMovie(payload) {
    const movie = { ...payload };
    const movieProperties = [
      "movie_name",
      "image",
      "description",
      "category_id",
    ];
    Object.keys(movie).forEach(function (key) {
      if (movieProperties.indexOf(key) == -1) {
        delete movie[key];
      }
    });
    return movie;
  }

  // ----------- Movie -----------

  async addMovie(payload) {
    const movie = this.#getMovie(payload);
    const [movie_id] = await this.movies.insert(movie);
    return { movie_id, ...movie };
  }
  async all() {
    var movies = await this.movies
      .join("category", "movies.category_id", "=", "category.category_id")
      .select("*");
    movies = movies.map((movie) => {
      movie.image = `http://localhost:${PORT}/public/${movie.image}`;
      return movie;
    });
    return movies;
  }

  async findByMovieName(movie_name) {
    var movies = await this.movies
      .where("movie_name", "like", `%${movie_name}%`)
      .select("*");
    movies = movies.map((movie) => {
      movie.image = `http://localhost:${PORT}/public/${movie.image}`;
      return movie;
    });
    return movies;
  }

  async findByMovieId(movie_id) {
    var movie = await this.movies
      .join("category", "movies.category_id", "=", "category.category_id")
      .where("movie_id", movie_id)
      .select("*")
      .first();
    movie.image = `http://localhost:${PORT}/public/${movie.image}`;
    return movie;
  }

  async updateMovie(movie_id, payload) {
    const update = this.#getMovie(payload);
    return await this.movies.where("movie_id", movie_id).update(update);
  }

  async deleteMovie(movie_id) {
    return await this.movies.where("movie_id", movie_id).del();
  }
}

module.exports = MovieService;
