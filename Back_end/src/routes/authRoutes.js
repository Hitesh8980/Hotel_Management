const express = require("express");
const { register, login } = require("../controllers/authControllers");
const { validateAuth } = require("../middlewares/validationMiddleware");

const router = express.Router();

router.post("/register", validateAuth, register);
router.post("/login", validateAuth, login);

module.exports = router;
