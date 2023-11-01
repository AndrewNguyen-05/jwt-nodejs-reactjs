import express from "express";
import homeController from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  //path, handler
  router.get("/", homeController.handleHomePage);
  router.get("/user", homeController.handleUserPage);
  router.post("/user/create-user", homeController.handleCreateNewUser);

  return app.use("/", router);
};

export default initWebRoutes;
