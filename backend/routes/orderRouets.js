const express = require("express");
const Order = require("../models/Order");
const { authMiddleware } = require("./userRoutes");
const router = express.Router();

// Place an order (Customer Only)
router.post("/place", authMiddleware, async (req, res) => {
  if (req.user.role !== "customer") return res.status(403).json({ error: "Only customers can place orders" });

  const { services, totalPrice } = req.body;
  const order = new Order({ userId: req.user.userId, services, totalPrice });
  await order.save();
  res.json({ success: true, order });
});

// Get all orders of a user
router.get("/:userId", authMiddleware, async (req, res) => {
  if (req.user.userId !== req.params.userId && req.user.role !== "admin") {
    return res.status(403).json({ error: "Unauthorized" });
  }

  const orders = await Order.find({ userId: req.params.userId }).populate("services");
  res.json(orders);
});

module.exports = router;
