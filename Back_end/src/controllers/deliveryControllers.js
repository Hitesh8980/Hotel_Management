const { Delivery } = require("../models");

exports.addDelivery = async (req, res) => {
  try {
    const delivery = new Delivery(req.body);
    await delivery.save();
    res.status(201).json({ message: "Delivery added successfully", delivery });
  } catch (error) {
    res.status(500).json({ message: "Error adding delivery", error });
  }
};

exports.getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find().populate("dietChart deliveryPersonnel");
    res.status(200).json({ deliveries });
  } catch (error) {
    res.status(500).json({ message: "Error fetching deliveries", error });
  }
};
