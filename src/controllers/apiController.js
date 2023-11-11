import loginRegisterUser from "../services/loginRegisterUser";

const testAPI = (req, res) => {
  return res.status(200).json({
    message: "ok",
    data: "test API",
  });
};

const handleRegister = async (req, res) => {
  try {
    if (!req.body.email || !req.body.phone || !req.body.password) {
      return res.status(200).json({
        EM: "Missing required parameters",
        EC: "1",
        DT: "",
      });
    }

    if (req.body.password && req.body.password.length < 3) {
      return res.status(200).json({
        EM: "Password must be at least 3 characters", //error message
        EC: "1", //error code
        DT: "", //data
      });
    }

    let data = await loginRegisterUser.registerNewUser(req.body);

    return res.status(200).json({
      EM: data.EM, //error message
      EC: data.EC, //error code
      DT: "", //data
    });
  } catch {
    return res.status(500).json({
      EM: "The server is having a problem", //error message
      EC: "-1", //error code
      DT: "", //data
    });
  }
};

const handleLogin = async (req, res) => {
  try {
    let data = await loginRegisterUser.handleUserLogin(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EM: "The server is having a problem", //error message
      EC: "-1", //error code
      DT: "", //data
    });
  }
};

module.exports = {
  testAPI,
  handleRegister,
  handleLogin,
};
