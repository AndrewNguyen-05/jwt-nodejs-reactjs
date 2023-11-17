import express from "express";
import apiController from "../controllers/apiController";
import userController from "../controllers/userController";

const router = express.Router();

const initAPIroutes = (app) => {
  router.get("/test-api", apiController.testAPI);
  router.post("/register", apiController.handleRegister);
  router.post("/login", apiController.handleLogin);

  router.get("/user/read", userController.readFunc);
  router.post("/user/create", userController.createFunc);
  router.put("/user/update", userController.updateFunc);
  router.delete("/user/delete", userController.deleteFunc);

  return app.use("/api/v1", router);
};

export default initAPIroutes;
