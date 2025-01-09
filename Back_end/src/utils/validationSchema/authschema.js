const { body } = require("express-validator");

exports.registerValidation = [
  body("email").isEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 characters long"),
];

exports.loginValidation = [
  body("email").isEmail().withMessage("Invalid email address"),
  body("password").exists().withMessage("Password is required"),
];
