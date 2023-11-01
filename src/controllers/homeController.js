import userService from "../services/userService";

const handleHomePage = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = async (req, res) => {
  let userList = await userService.getUserList();
  console.log(">>> Check userlist: ", userList);
  return res.render("user.ejs", { userList });
};

const handleCreateNewUser = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  await userService.createNewUser(username, password, email);

  return res.send("Create new User");
};

module.exports = {
  handleHomePage,
  handleUserPage,
  handleCreateNewUser,
};
