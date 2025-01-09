const mongoose = require("mongoose");

const dietChartSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  meals: {
    morning: { type: String, required: true },
    evening: { type: String, required: true },
    night: { type: String, required: true },
  },
  instructions: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("DietChart", dietChartSchema);
