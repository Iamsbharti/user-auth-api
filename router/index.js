const express = require("express");
const controller = require("../controller");
const router = express.Router();
const { formatResponse } = require("../lib");
const { verifyAuthToken } = require("../validation");

router.get("/", (req, res) => {
  res.status(200).json(formatResponse(false, "User API!!", null));
});
router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/posts", verifyAuthToken, controller.posts);

module.exports = router;
