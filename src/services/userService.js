import connection from "../configs/database";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (password) => {
  let hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

const createNewUser = async (username, password, email) => {
  let hashPass = hashUserPassword(password);
  await connection.query(
    `INSERT INTO Users (username, password, email)
        VALUES (?,?,?)`,
    [username, hashPass, email]
  );
};

module.exports = {
  createNewUser,
};
