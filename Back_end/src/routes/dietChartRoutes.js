const express = require("express");
const { createDietChart, getDietCharts } = require("../controllers/dietChartControllers");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createDietChart);
router.get("/", authMiddleware, getDietCharts);

module.exports = router;
