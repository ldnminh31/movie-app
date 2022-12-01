import axios from "axios";
const url = import.meta.env.VITE_APP_API_URL;
class CategoryService {
  constructor() {
    this.baseUrl = `${url}/api/category`;
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
  async get(category_id) {
    return (await this.api.get(`${this.baseUrl}/${category_id}`)).data;
  }
  async create(category_name) {
    return (await this.api.post(this.baseUrl, category_name)).data;
    // return category_name;
  }
  async delete(category_id) {
    return (await this.api.delete(`${this.baseUrl}/${category_id}`)).data;
  }
  async edit(category_id, category) {
    return (await this.api.put(`${this.baseUrl}/${category_id}`, category))
      .data;
  }
}
export const categoryService = new CategoryService();
