import express from "express";
import homeController from "../controllers/homeController";
import apiController from "../controllers/apiController";

const router = express.Router();

const initWebRoutes = (app) => {
  //path, handler
  router.get("/", homeController.handleHomePage);
  router.get("/user", homeController.handleUserPage);
  router.post("/user/create-user", homeController.handleCreateNewUser);
  router.post("/delete-user/:id", homeController.handleDeleteUser);
  router.post("/update-user/:id", homeController.getUpdatePage);
  router.post("/user/update-user", homeController.handleUpdateUser);

  //GET - R, POST - C, PUT - U, DELETE - D
  router.get("/api/test-api", apiController.testAPI);

  return app.use("/", router);
};

export default initWebRoutes;
