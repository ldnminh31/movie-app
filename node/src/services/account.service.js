const { addAccount } = require("../controllers/account.controller");
const knex = require("../database/knex");
class AccountService {
  constructor() {
    this.accounts = knex("accounts");
  }

  #getAccount(payload) {
    const account = { ...payload };
    const accountProperties = ["username", "password", "role"];
    // remove non-movies properties
    Object.keys(account).forEach(function (key) {
      if (accountProperties.indexOf(key) == -1) {
        delete account[key];
      }
    });
    return account;
  }
}
module.exports = AccountService;
