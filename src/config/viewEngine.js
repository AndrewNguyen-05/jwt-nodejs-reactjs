import express from "express";
import path from "path";

const configViewEngine = (app) => {
  //config view engine
  app.set("view engine", "ejs");
  app.set("views", "./src/views");

  //config static files
  app.use(express.static("./src/public"));
};

export default configViewEngine;
