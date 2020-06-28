const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

app.listen(process.env.SERVER_PORT, () =>
  console.log("Server up and running at", process.env.SERVER_PORT)
);
