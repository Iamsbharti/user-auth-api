const joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
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
exports.verifyAuthToken = () => {
  const token = "";
};