const mongoose = require("mongoose");
const User = require("../models/User");
const { formatResponse } = require("../lib");
const { registrationValidation } = require("../validation");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("control", name, email, password);
  //validate data
  let { error } = registrationValidation(req.body);
  console.log("error", error);
  if (error)
    return res.json(formatResponse(true, error.details[0].message, null));

  //check for email uniqueness
  let emailExists = await User.findOne({ email: email });
  console.log("email", emailExists);
  if (emailExists)
    return res
      .status(400)
      .json(formatResponse(true, "Email Already Exists", email));

  //hash password
  let salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(password, salt);

  //create new user
  let newuser = new User({
    name: name,
    email: email,
    password: hashedPassword,
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
