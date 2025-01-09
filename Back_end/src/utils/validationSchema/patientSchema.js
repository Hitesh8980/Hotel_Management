const { body } = require("express-validator");

exports.patientValidation = [
  body("name").isString().withMessage("Patient name is required"),
  body("disease").optional().isString().withMessage("Disease is required"),
  body("roomNumber").isInt().withMessage("Room number must be a number"),
  body("age").isInt().withMessage("Age must be a valid number"),
  body("gender").isIn(["male", "female"]).withMessage("Gender is required"),
];
