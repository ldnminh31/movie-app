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

// Movie controller
exports.all = (req, res) => {
  return res.send({ message: "Retrieve all movie handler" });
};
exports.findFilm = (req, res) => {
  return res.send({ message: "Search Film handler" });
};
exports.addFilm = (req, res) => {
  return res.send({ message: "add film handler" });
};
exports.updateFilm = (req, res) => {
  return res.send({ message: "update film handler" });
};
exports.deleteFilm = (req, res) => {
  return res.send({ message: "delete film handler" });
};

// Category controller
exports.category = (req, res) => {
  return res.send({ message: "Retrieve all category handler" });
};
exports.findCat = (req, res) => {
  return res.send({ message: "Search category handler" });
};
exports.addCat = (req, res) => {
  return res.send({ message: "add cat handler" });
};
exports.updateCat = (req, res) => {
  return res.send({ message: "update cat handler" });
};
exports.deleteCat = (req, res) => {
  return res.send({ message: "delete cat handler" });
};

// Comment controller
exports.comment = (req, res) => {
  return res.send({ message: "retrive all cmt handler" });
};
exports.addCom = (req, res) => {
  return res.send({ message: "add cmt handler" });
};
exports.updateCom = (req, res) => {
  return res.send({ message: "update cmt handler" });
};
exports.deleteCom = (req, res) => {
  return res.send({ message: "delete cmt handler" });
};
