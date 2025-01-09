const express = require("express");
const { addDelivery, getDeliveries } = require("../controllers/deliveryControllers");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, addDelivery);
router.get("/", authMiddleware, getDeliveries);

module.exports = router;
