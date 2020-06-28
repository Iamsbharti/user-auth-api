const mongoose = require("mongoose");
const User = require("../models/User");
const { formatResponse } = require("../lib");
const { registrationValidation } = require("../validation");
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  let newuser = new User({
    name: name,
    email: email,
    password: password,
  });
  let { error } = registrationValidation(req.body);
  if (error)
    return res.json(formatResponse(true, error.details[0].message, null));

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
