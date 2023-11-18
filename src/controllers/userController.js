import userApiService from "../services/userApiService";

const readFunc = async (req, res) => {
  try {
    if (req.query.page && req.query.limit) {
      let page = req.query.page;
      let limit = req.query.limit;
      let data = await userApiService.getUserWithPagination(+page, +limit);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      let data = await userApiService.getAllUsers();
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: "The server is having a problem",
      EC: "-1",
      DT: "",
    });
  }
};

const createFunc = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      EM: "The server is having a problem",
      EC: "-1",
      DT: "",
    });
  }
};

const updateFunc = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      EM: "The server is having a problem",
      EC: "-1",
      DT: "",
    });
  }
};

const deleteFunc = (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      EM: "The server is having a problem",
      EC: "-1",
      DT: "",
    });
  }
};

module.exports = { readFunc, createFunc, updateFunc, deleteFunc };
