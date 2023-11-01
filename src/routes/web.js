import express from "express";
import homeControllers from "../controllers/homeControllers";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeControllers.handleHomePage);

  router.get("/user", homeControllers.handleUserPage);

  return app.use("/", router);
};

export default initWebRoutes;
