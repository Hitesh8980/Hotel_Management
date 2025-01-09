const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  dietChart: { type: mongoose.Schema.Types.ObjectId, ref: "DietChart", required: true },
  deliveryPersonnel: { type: mongoose.Schema.Types.ObjectId, ref: "DeliveryPersonnel", required: true },
  status: { type: String, enum: ["Pending", "Delivered"], default: "Pending" },
  timestamp: { type: Date, default: Date.now },
  notes: String,
});

module.exports = mongoose.model("Delivery", deliverySchema);
