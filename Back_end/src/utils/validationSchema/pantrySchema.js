const { body } = require("express-validator");

exports.pantryStaffValidation = [
  body("staffName").isString().withMessage("Staff name is required"),
  body("contactInfo").optional().isString().withMessage("Contact info is required"),
  body("location").optional().isString().withMessage("Location details are required"),
];
