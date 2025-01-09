const { Patient } = require("../models");

exports.addPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: "Patient added successfully", patient });
  } catch (error) {
    res.status(500).json({ message: "Error adding patient", error });
  }
};

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({ patients });
  } catch (error) {
    res.status(500).json({ message: "Error fetching patients", error });
  }
};
