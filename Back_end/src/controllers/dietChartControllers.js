// dietChartControllers.js

const { DietChart } = require("../models");

exports.createDietChart = async (req, res) => {
  try {
    const { patient, meals, instructions } = req.body;

    if (!patient || !meals?.morning || !meals?.evening || !meals?.night) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const dietChart = new DietChart({ patient, meals, instructions });
    await dietChart.save();

    res.status(201).json({
      message: "Diet chart created successfully",
      dietChart,
    });
  } catch (error) {
    console.error("Error creating diet chart:", error);
    res.status(500).json({ message: "Error creating diet chart", error: error.message });
  }
};

exports.getDietCharts = async (req, res) => {
  try {
    const dietCharts = await DietChart.find().populate("patient", "name");

    res.status(200).json({ dietCharts });
  } catch (error) {
    console.error("Error fetching diet charts:", error);
    res.status(500).json({ message: "Error fetching diet charts", error: error.message });
  }
};

// Update diet chart
exports.updateDietChart = async (req, res) => {
  try {
    const { id } = req.params;
    const { meals, instructions } = req.body;

    const updatedDietChart = await DietChart.findByIdAndUpdate(
      id,
      { meals, instructions },
      { new: true }
    );

    if (!updatedDietChart) {
      return res.status(404).json({ message: "Diet chart not found" });
    }

    res.status(200).json({
      message: "Diet chart updated successfully",
      dietChart: updatedDietChart,
    });
  } catch (error) {
    console.error("Error updating diet chart:", error);
    res.status(500).json({ message: "Error updating diet chart", error: error.message });
  }
};

// Delete diet chart
exports.deleteDietChart = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDietChart = await DietChart.findByIdAndDelete(id);

    if (!deletedDietChart) {
      return res.status(404).json({ message: "Diet chart not found" });
    }

    res.status(200).json({
      message: "Diet chart deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting diet chart:", error);
    res.status(500).json({ message: "Error deleting diet chart", error: error.message });
  }
};
