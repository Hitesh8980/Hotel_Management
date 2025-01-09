const { body } = require("express-validator");

exports.dietChartValidation = [
  body("morningMeal").isString().withMessage("Morning meal details are required"),
  body("eveningMeal").isString().withMessage("Evening meal details are required"),
  body("nightMeal").isString().withMessage("Night meal details are required"),
  body("ingredients").optional().isArray().withMessage("Ingredients should be an array"),
  body("instructions").isString().withMessage("Instructions are required"),
];
