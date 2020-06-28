const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { initdb } = require("./initdb");
const router = require("./router");
const { logIp, notfound } = require("./middlewares");
//configure env variables
dotenv.config();
//init express
const app = express();

//init db
initdb();

//middlewares
app.use(logIp, notfound);
app.use(bodyParser.json());

//routes
app.use("/api/users", router);

//server listens
app.listen(process.env.SERVER_PORT, () =>
  console.log("Server up and running at", process.env.SERVER_PORT)
);
