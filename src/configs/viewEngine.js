import express from "express";
import path from "path";

const configViewEngine = (app) => {
  //config view engine
  app.set("view engine", "ejs");
  app.set("views", path.join("./src", "views"));

  //config static files
  app.use(express.static(path.join("./src", "public")));
};

export default configViewEngine;
