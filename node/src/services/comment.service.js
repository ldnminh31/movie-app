const { addComment } = require("../controllers/comment.controller");
const knex = require("../database/knex");
class CommentService {
  constructor() {
    this.comments = knex("comments");
  }
  // Define methods for accessing the database

  #getComment(payload) {
    const comment = { ...payload };
    const commentProperties = [
      "user_id",
      "movie_id",
      "comment_time",
      "content",
    ];
    // remove non-movies properties
    Object.keys(comment).forEach(function (key) {
      if (commentProperties.indexOf(key) == -1) {
        delete comment[key];
      }
    });
    return comment;
  }

  async addComment(payload) {
    const comment = this.#getComment(payload);
    const [comment_id] = await this.comments.insert(comment);
    return { comment_id, ...comment };
  }
  async comment(id) {
    return await this.comments
      .join("accounts", "accounts.user_id", "=", "comments.user_id")
      .join("movies", "movies.movie_id", "=", "comments.movie_id")
      .where("movies.movie_id", id)
      .select("*");
  }

  async findByContent(content) {
    return await this.comments
      .where("content", "like", `%${content}%`)
      .select("*");
  }

  async updateComment(comment_id, payload) {
    const update = this.#getComment(payload);
    return await this.comments.where("comment_id", comment_id).update(update);
  }
  async deleteComment(comment_id) {
    return await this.comments.where("comment_id", comment_id).del();
  }
}
module.exports = CommentService;
