const express = require("express");
const Service = require("../models/Product"); // Now a service model
const router = express.Router();

// Get all services
router.get("/allservices", async (req, res) => {
  const services = await Service.find({});
  res.json(services);
});

// Add new service
router.post("/addservice", async (req, res) => {
  const { name, category, description, price, duration, provider, location, availableSlots } = req.body;

  const service = new Service({ name, category, description, price, duration, provider, location, availableSlots });
  await service.save();

  res.json({ success: true, message: "Service added successfully", service });
});

// Book a service slot
router.post("/bookservice", async (req, res) => {
  const { serviceId, selectedSlot } = req.body;

  const service = await Service.findById(serviceId);
  if (!service) return res.status(404).json({ success: false, message: "Service not found" });

  // Remove booked slot
  service.availableSlots = service.availableSlots.filter(slot => slot.toString() !== selectedSlot);
  await service.save();

  res.json({ success: true, message: "Service booked successfully" });
});

module.exports = router;
