const joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
const { formatResponse } = require("../lib");
//validation schema

exports.registrationValidation = (data) => {
  let schema = joi.object({
    name: joi.string().min(6).required(),
    email: joi.string().min(6).email().required(),
    password: joi.string().min(8).required(),
  });
  return schema.validate(data);
};
exports.loginValidation = (data) => {
  let schema = joi.object({
    email: joi.string().min(6).email().required(),
    password: joi.string().min(8).required(),
  });
  return schema.validate(data);
};
exports.verifyAuthToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token)
    return res
      .status(401)
      .json(formatResponse(true, "Access Denied", req.body.email));

  try {
    let validatedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = validatedToken;
  } catch (error) {
    res.status(400).json(formatResponse(true, "Invalid Token", null));
  }

  next();
};
