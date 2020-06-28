const express = require("express");

exports.logIp = (req, res, next) => {
  let ip = req.ip;
  let path = req.originalUrl;
  let method = req.method;
  let protocol = req.protocol;

  console.info(`${method}- invoked by -${ip}-for-${path} using -${protocol}`);
  next();
};
exports.notfound = (error, req, res, next) => {
  if (error) {
    res.status(404).json("Route not found");
  }
  next();
};
