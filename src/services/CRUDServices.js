import connection from "../configs/database";

const createNewUser = async (username, password, email) => {
  await connection.query(
    `INSERT INTO Users (username, password, email)
        VALUES (?,?,?)`,
    [username, password, email]
  );
};

module.exports = {
  createNewUser,
};
