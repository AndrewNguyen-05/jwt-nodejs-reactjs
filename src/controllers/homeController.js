import userServices from "../services/userServices";

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

  await userServices.createNewUser(username, password, email);

  return res.send("Create new User");
};

module.exports = {
  handleHomePage,
  handleUserPage,
  handleCreateNewUser,
};
