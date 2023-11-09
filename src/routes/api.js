import express from "express";
import apiController from "../controllers/apiController";

const router = express.Router();

const initAPIroutes = (app) => {
  router.get("/test-api", apiController.testAPI);
  router.post("/register", apiController.handleRegister);

  return app.use("/api/v1", router);
};

export default initAPIroutes;
