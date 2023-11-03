import connection from "../config/database";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = async (username, password, email) => {
  let hashPass = hashUserPassword(password);
  await connection.query(
    `INSERT INTO user (username, password, email)
        VALUES (?,?,?)`,
    [username, hashPass, email]
  );
};

const getUserList = async () => {
  let [results, fields] = await connection.query(`SELECT * FROM user`);
  return results;
};

const getUserById = async (id) => {
  let [results, fields] = await connection.query(
    `SELECT * FROM user WHERE id = ?`,
    [id]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const deleteUser = async (id) => {
  await connection.query(`DELETE FROM user WHERE id = ?`, [id]);
};

const updateUserById = async (id, username, email) => {
  await connection.query(
    `UPDATE user 
  SET username = ?, email = ?
  WHERE id = ?`,
    [username, email, id]
  );
};

module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserById,
};
