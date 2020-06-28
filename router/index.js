const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.path);
  res.status(200).json({ message: "sucess" });
});

module.exports = router;
