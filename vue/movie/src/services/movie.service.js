import axios from "axios";
const url = import.meta.env.VITE_APP_API_URL;
class MovieService {
  constructor() {
    this.baseUrl = `${url}/api/movie`;
    this.api = axios.create({
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }
  async getMany() {
    return (await this.api.get(this.baseUrl)).data;
  }
  async addMovie(movie) {
    // console.log(movie)
    return (await this.api.post(this.baseUrl, movie)).data;
  }
  async get(movie_id) {
    // console.log(`${this.baseUrl}/${movie_id}`);
    return (await this.api.get(`${this.baseUrl}/${movie_id}`)).data;
  }
  async updateMovie(movie_id, movie) {
    return (await this.api.put(`${this.baseUrl}/${movie_id}`, movie)).data;
  }
  async deleteMovie(movie_id) {
    return (await this.api.delete(`${this.baseUrl}/${movie_id}`)).data;
  }
}
export const movieService = new MovieService();
