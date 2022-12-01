import axios from "axios";
const url = import.meta.env.VITE_APP_API_URL;
class CommentService {
  constructor() {
    this.baseUrl = `${url}/api/comment`;
    this.api = axios.create({
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  async addComment(comment) {
    // console.log(comment);
    return (await this.api.post(this.baseUrl, comment)).data;
  }
  async get(movie_id) {
    // console.log(`${this.baseUrl}/${movie_id}`);
    return (await this.api.get(`${this.baseUrl}s/${movie_id}`)).data;
  }
  async updateComment(comment_id, comment) {
    return (await this.api.put(`${this.baseUrl}/${comment_id}`, comment)).data;
  }
  async deleteComment(comment_id) {
    return (await this.api.delete(`${this.baseUrl}/${comment_id}`)).data;
  }
}
export const commentService = new CommentService();
