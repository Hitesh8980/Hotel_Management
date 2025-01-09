const { body } = require("express-validator");

exports.deliveryValidation = [
  body("patientId").isString().withMessage("Patient ID is required"),
  body("mealType").isIn(["morning", "evening", "night"]).withMessage("Invalid meal type"),
  body("status").isIn(["pending", "delivered"]).withMessage("Invalid status"),
];
