const { addAccount } = require("../controllers/account.controller");
const knex = require("../database/knex");

class AccountService {
  constructor() {
    this.accounts = knex("accounts");
  }

  #getAccount(payload) {
    const account = { ...payload };
    const accountProperties = ["username", "password", "phone", "role"];
    // remove non-movies properties
    Object.keys(account).forEach(function (key) {
      if (accountProperties.indexOf(key) == -1) {
        delete account[key];
      }
    });
    return account;
  }

  async create(payload) {
    const account = this.#getAccount(payload);
    const [id] = await this.accounts.insert(account);
    return { id, ...account };
  }

  async findByUsername(username) {
    return await this.accounts.where("username", username).select("*").first();
  }
}
module.exports = AccountService;
