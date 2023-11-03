import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
import bodyParser from "body-parser";
// import testConnection from "./config/connectDB";

const app = express();
const PORT = process.env.PORT || 8888;

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config
configViewEngine(app);

//test connection to DB
// testConnection();

//routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(`>>> JWT backend is listening at ${PORT}`);
});
