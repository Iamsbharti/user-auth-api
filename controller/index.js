const mongoose = require("mongoose");
const User = require("../models/User");
const { formatResponse } = require("../lib");
const { registrationValidation } = require("../validation");
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  //create new user
  let newuser = new User({
    name: name,
    email: email,
    password: password,
  });
  //validate data
  let { error } = registrationValidation(req.body);
  if (error)
    return res.json(formatResponse(true, error.details[0].message, null));
  //check for email uniqueness
  let emailExists = await User.find({ email: email });
  if (emailExists)
    return res
      .status(400)
      .json(formatResponse(true, "Email Already Exists", email));
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
