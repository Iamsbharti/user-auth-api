const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { initdb } = require("./initdb");
const router = require("./router");

//configure env variables
dotenv.config();
//init express
const app = express();

//init db
initdb();

//routes
app.use(bodyParser.json());
app.use("/api/users", router);

//server listens
app.listen(process.env.SERVER_PORT, () =>
  console.log("Server up and running at", process.env.SERVER_PORT)
);
