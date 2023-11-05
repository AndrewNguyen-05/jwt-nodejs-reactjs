import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = async (username, password, email) => {
  let hashPass = hashUserPassword(password);
  await db.User.create({
    username: username,
    password: hashPass,
    email: email,
  });
};

const getUserList = async () => {
  //test associations
  let newUser = await db.User.findOne({
    where: { id: 1 },
    attributes: ["username", "email"],
    include: { model: db.Group, attributes: ["id", "name", "description"] },
    raw: true,
    nest: true,
  });

  let roles = await db.Role.findAll({
    include: [
      {
        model: db.Group,
        where: { id: 1 },
        attributes: ["name", "description"],
      },
    ],
    attributes: ["id", "url", "description"],
    raw: true,
    nest: true,
  });

  console.log(">>> check new user:", newUser);
  console.log(">>> check role:", roles);

  let users = [];
  users = await db.User.findAll();
  return users;
};

const getUserById = async (userId) => {
  let user = {};
  user = await db.User.findOne({
    where: { id: userId },
  });
  return user;
};

const deleteUser = async (userId) => {
  await db.User.destroy({
    where: { id: userId },
  });
};

const updateUserById = async (userId, username, email) => {
  await db.User.update(
    {
      username: username,
      email: email,
    },
    {
      where: { id: userId },
    }
  );
};

module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserById,
};
