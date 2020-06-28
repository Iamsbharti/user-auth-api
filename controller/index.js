const mongoose = require("mongoose");
const User = require("../models/User");

exports.register = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  let newuser = new User({
    name: name,
    email: email,
    password: password,
  });

  //save to db
  try {
    let savedUser = await User.create(newuser);
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json(error);
  }
};
