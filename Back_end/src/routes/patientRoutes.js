const express = require("express");
const { addPatient, getPatients } = require("../controllers/patientControllers");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, addPatient);
router.get("/", authMiddleware, getPatients);

module.exports = router;
