const express = require("express");
const { formatResponse } = require("../lib");

exports.logIp = (req, res, next) => {
  let ip = req.ip;
  let path = req.originalUrl;
  let method = req.method;
  let protocol = req.protocol;

  console.info(`${method}- invoked by -${ip}-for-${path} using -${protocol}`);
  next();
};
exports.notfound = (req, res, next) => {
  res.status(404).json(formatResponse(true, "Route Not Found", null));
  next();
};
