const testAPI = (req, res) => {
  return res.status(200).json({
    message: "ok",
    data: "test API",
  });
};

const handleRegister = (req, res) => {
  console.log(">>> check data user:", req.body);
};

module.exports = {
  testAPI,
  handleRegister,
};
