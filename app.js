const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { initdb } = require("./initdb");
//configure env variables
dotenv.config();
//init express
const app = express();

//init db
initdb();
//server listens
app.listen(process.env.SERVER_PORT, () =>
  console.log("Server up and running at", process.env.SERVER_PORT)
);
