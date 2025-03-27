const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: String,
  serviceId: String, // Instead of productId
  serviceName: String,
  provider: String,
  selectedSlot: Date, // Booking time
  totalAmount: Number,
  paymentStatus: { type: String, default: "Pending" },
  orderStatus: { type: String, default: "Confirmed" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);
