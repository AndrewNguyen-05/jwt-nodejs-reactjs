import db from "../models/index.js";

const getAllUsers = async () => {
  try {
    let users = await db.User.findAll({
      attributes: ["id", "username", "email", "phone", "sex"],
      include: { model: db.Group, attributes: ["name", "description"] },
    });
    if (users) {
      return {
        EM: "Get data successfully",
        EC: 0,
        DT: users,
      };
    } else {
      return {
        EM: "Cannot get data",
        EC: 1,
        DT: [],
      };
    }
  } catch (error) {
    return {
      EM: "There are something wrong in the services",
      EC: -1,
      DT: [],
    };
  }
};

const getUserWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    const { count, rows } = await db.User.findAndCountAll({
      attributes: ["id", "username", "email", "phone", "sex"],
      include: { model: db.Group, attributes: ["name", "description"] },
      offset: offset,
      limit: limit,
    });

    let totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      users: rows,
    };
    return {
      EM: "Get data successfully",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    return {
      EM: "There are something wrong in the services",
      EC: -1,
      DT: "",
    };
  }
};

const createNewUser = async (data) => {
  try {
  } catch (error) {
    return {
      EM: "There are something wrong in the services",
      EC: -1,
      DT: "",
    };
  }
};

const updateUser = async (data) => {
  try {
    let user = await db.User.findOne({
      where: { id: data.id },
    });
    if (user) {
      //update
      user.update({});
    } else {
      //not found
    }
  } catch (error) {
    return {
      EM: "There are something wrong in the services",
      EC: -1,
      DT: "",
    };
  }
};

const deleteUser = async (id) => {
  try {
    await db.User.delete({
      where: { id: id },
    });
  } catch (error) {
    return {
      EM: "There are something wrong in the services",
      EC: -1,
      DT: "",
    };
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  getUserWithPagination,
};
