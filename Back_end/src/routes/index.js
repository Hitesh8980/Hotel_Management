const express = require("express");
const authRoutes = require("./authRoutes");
const patientRoutes = require("./patientRoutes");
const dietChartRoutes = require("./dietChartRoutes");
const pantryRoutes = require("./pantryRoutes");
const deliveryRoutes = require("./deliveryRoutes");
const dashboardRoutes = require("./dashboardRoutes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/patients", patientRoutes);
router.use("/diet-charts", dietChartRoutes);
router.use("/pantry", pantryRoutes);
router.use("/deliveries", deliveryRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
