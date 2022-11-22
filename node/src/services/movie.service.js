const { addMovie } = require("../controllers/movie.controller");
const knex = require("../database/knex");
class MovieService {
  constructor() {
    this.movies = knex("movies");
  }
  // Define methods for accessing the database

  #getMovie(payload) {
    const movie = { ...payload };
    const movieProperties = ["movie_name", "image", "description", "cat_id"];
    // remove non-movies properties
    Object.keys(movie).forEach(function (key) {
      if (movieProperties.indexOf(key) == -1) {
        delete movie[key];
      }
    });
    return movie;
  }

  // ----------- Movie --------------

  // async addMovie(payload) {
  //   const movie = this.#getMovie(payload);
  //   const [movie_id] = await this.movies.insert(movie);
  //   return { movie_id, ...movie };
  // }
  async addMovie(payload) {
    const movie = this.#getMovie(payload);
    const [movie_id] = await this.movies.insert(movie);
    return { movie_id, ...movie };
  }
  async all() {
    return await this.movies.select("*");
  }
  async findByMovieName(movie_name) {
    return await this.movies
      .where("movie_name", "like", `%${movie_name}%`)
      .select("*");
  }
  async findByMovieId(movie_id) {
    return await this.movies.where("movie_id", movie_id).select("*").first();
  }
  async updateMovie(movie_id, payload) {
    const update = this.#getMovie(payload);
    return await this.movies.where("movie_id", movie_id).update(update);
  }
  async deleteMovie(movie_id) {
    return await this.movies.where("movie_id", movie_id).del();
  }

  //
}

module.exports = MovieService;
