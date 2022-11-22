const { addCategory } = require("../controllers/category.controller");
const knex = require("../database/knex");
class CategoryService {
  constructor() {
    this.categories = knex("category");
  }

  #getCategory(payload) {
    const category = { ...payload };
    const categoryProperties = ["category_name"];
    // remove non-movies properties
    Object.keys(category).forEach(function (key) {
      if (categoryProperties.indexOf(key) == -1) {
        delete category[key];
      }
    });
    return category;
  }
  async addCategory(payload) {
    const category = this.#getCategory(payload);
    const [category_id] = await this.categories.insert(category);
    return { category_id, ...category };
  }
  async category() {
    return await this.categories.select("*");
  }
  async findByCategoryName(category_name) {
    return await this.categories
      .where("category_name", "like", `%${category_name}%`)
      .select("*");
  }
  async findByCategoryId(category_id) {
    return await this.categories
      .where("category_id", category_id)
      .select("*")
      .first();
  }
  async updateCategory(category_id, payload) {
    const update = this.#getCategory(payload);
    return await this.categories
      .where("category_id", category_id)
      .update(update);
  }
  async deleteCategory(category_id) {
    return await this.categories.where("category_id", category_id).del();
  }
}
module.exports = CategoryService;
