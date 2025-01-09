const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  diseases: [String],
  allergies: [String],
  roomNumber: { type: String, required: true },
  bedNumber: { type: String, required: true },
  floorNumber: { type: String, required: true },
  contactInfo: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  otherDetails: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Patient", patientSchema);
