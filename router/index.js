const express = require("express");
const controller = require("../controller");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.path);
  res.status(200).json({ message: "sucess" });
});
router.post("/register", controller.register);

module.exports = router;
