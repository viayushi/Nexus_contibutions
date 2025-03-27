const express = require("express");
const Service = require("../models/Service");
const { authMiddleware, adminMiddleware } = require("./userRoutes");
const router = express.Router();

// Get all services
router.get("/", async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

// Add a new service (Admin Only)
router.post("/add", authMiddleware, adminMiddleware, async (req, res) => {
  const service = new Service(req.body);
  await service.save();
  res.json({ success: true, service });
});

// Delete service (Admin Only)
router.delete("/:id", authMiddleware, adminMiddleware, async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: "Service deleted" });
});

module.exports = router;
