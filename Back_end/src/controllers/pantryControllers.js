const { PantryStaff } = require("../models");

exports.addPantryStaff = async (req, res) => {
  try {
    const pantryStaff = new PantryStaff(req.body);
    await pantryStaff.save();
    res.status(201).json({ message: "Pantry staff added successfully", pantryStaff });
  } catch (error) {
    res.status(500).json({ message: "Error adding pantry staff", error });
  }
};

exports.getPantryStaff = async (req, res) => {
  try {
    const staff = await PantryStaff.find();
    res.status(200).json({ staff });
  } catch (error) {
    res.status(500).json({ message: "Error fetching pantry staff", error });
  }
};

// Correct function definitions without 'const' after 'exports'
exports.updatePantryStaff = async (req, res) => {
  const { id } = req.params;
  const staffData = req.body;

  try {
    const updatedStaff = await PantryStaff.findByIdAndUpdate(id, staffData, { new: true });
    if (!updatedStaff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json({ message: "Staff updated successfully", updatedStaff });
  } catch (error) {
    res.status(500).json({ message: "Error updating pantry staff", error });
  }
};

exports.deletePantryStaff = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStaff = await PantryStaff.findByIdAndDelete(id);
    if (!deletedStaff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json({ message: "Staff deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting pantry staff", error });
  }
};
