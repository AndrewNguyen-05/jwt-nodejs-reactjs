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
