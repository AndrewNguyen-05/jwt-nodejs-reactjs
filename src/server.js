import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 8888;

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config
configViewEngine(app);

//routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(`>>> JWT backend is listening at ${PORT}`);
});
