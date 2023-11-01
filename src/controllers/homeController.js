import userService from "../services/userService";

const handleHomePage = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = async (req, res) => {
  let userList = await userService.getUserList();
  return res.render("user.ejs", { userList });
};

const handleCreateNewUser = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  await userService.createNewUser(username, password, email);

  return res.redirect("/user");
};

const handleDeleteUser = async (req, res) => {
  let userId = req.params.id;
  await userService.deleteUser(userId);
  return res.redirect("/user");
};

const getUpdatePage = async (req, res) => {
  let userId = req.params.id;
  let user = await userService.getUserById(userId);

  return res.render("user-update.ejs", { userInfo: user });
};

const handleUpdateUser = async (req, res) => {
  let userId = req.body.id;
  let userName = req.body.username;
  let userEmail = req.body.email;
  await userService.updateUserById(userId, userName, userEmail);
  return res.redirect("/user");
};

module.exports = {
  handleHomePage,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
  getUpdatePage,
  handleUpdateUser,
};
