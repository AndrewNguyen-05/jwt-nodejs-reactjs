import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8888;

//config
configViewEngine(app);

//routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(`>>> JWT backend is listening at ${PORT}`);
});
