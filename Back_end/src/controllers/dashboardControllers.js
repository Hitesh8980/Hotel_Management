const { Patient, DietChart, Delivery } = require("../models");

exports.getDashboardStats = async (req, res) => {
  try {
    const patientCount = await Patient.countDocuments();
    const dietChartCount = await DietChart.countDocuments();
    const deliveryCount = await Delivery.countDocuments();

    res.status(200).json({ patientCount, dietChartCount, deliveryCount });
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard stats", error });
  }
};
