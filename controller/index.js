const mongoose = require("mongoose");
const User = require("../models/User");
const { formatResponse } = require("../lib");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  let newuser = new User({
    name: name,
    email: email,
    password: password,
  });

  //save to db
  try {
    let savedUser = await User.create(newuser);
    res
      .status(200)
      .json(formatResponse(false, "User Registered Success", savedUser));
  } catch (error) {
    res.status(400).json(formatResponse(true, "Error Occured", error));
  }
};
