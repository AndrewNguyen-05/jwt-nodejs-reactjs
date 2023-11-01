import CRUDServices from "../services/CRUDServices";

const handleHomePage = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;
  await CRUDServices.createNewUser(username, password, email);
  return res.send("Create new User");
};

module.exports = {
  handleHomePage,
  handleUserPage,
  handleCreateNewUser,
};
