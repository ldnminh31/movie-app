const AccountService = require("../services/account.service");
const ApiError = require("../api-error");

// User controller
exports.signIn = (req, res) => {
  return res.send({ message: "signIn handler" });
};
exports.signUp = (req, res) => {
  return res.send({ message: "signUp handler" });
};
exports.signOut = (req, res) => {
  return res.send({ message: "signOut handler" });
};
