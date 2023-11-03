import connection from "../config/database";
import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = async (username, password, email) => {
  let hashPass = hashUserPassword(password);
  // await connection.query(
  //   `INSERT INTO user (username, password, email)
  //       VALUES (?,?,?)`,
  //   [username, hashPass, email]
  // );
  await db.User.create({
    username: username,
    password: hashPass,
    email: email,
  });
};

const getUserList = async () => {
  // let [results, fields] = await connection.query(`SELECT * FROM user`);
  // return results;
  let users = [];
  users = await db.User.findAll();
  return users;
};

const getUserById = async (userId) => {
  // let [results, fields] = await connection.query(
  //   `SELECT * FROM user WHERE id = ?`,
  //   [id]
  // );
  // let user = results && results.length > 0 ? results[0] : {};
  // return user;
  let user = {};
  user = await db.User.findOne({
    where: { id: userId },
  });
  return user;
};

const deleteUser = async (userId) => {
  // await connection.query(`DELETE FROM user WHERE id = ?`, [id]);
  await db.User.destroy({
    where: { id: userId },
  });
};

const updateUserById = async (userId, username, email) => {
  // await connection.query(
  //   `UPDATE user
  // SET username = ?, email = ?
  // WHERE id = ?`,
  //   [username, email, userId]
  // );
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
